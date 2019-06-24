var router = new VueRouter({
    mode: 'history',
    routes: []
});

new Vue({
    router,
    data() {
        return {
            filters: filters,
            groups: groups,
            stats: [],
            leagues: [],
            showUrl: false,
            leauge: null,
            count: 2
        }
    },
    async created() {
        let statsRequest = axios.get("./data/trade_stats.json");
        let leaguesRequest = axios.get("./data/leagues.json");

        this.stats = (await statsRequest).data.result.find(x => x.label == "Explicit").entries;
        this.leagues = (await leaguesRequest).data.result;
        this.leauge = this.leagues.filter(x => x.id == localStorage.getItem('leaugeId'))[0] || this.leagues[0]

        this.$mount('#app');
    },
    mounted() {
        if (this.$route.query.filters) {
            for (filter of this.$route.query.filters.split(",").map(x => this.filters.find(f => f.text == x))) {
                filter.active = true;
            }
        }
    },
    methods: {
        reset() {
            for (item of [...filters, ...groups]) {
                item.active = false;
            }
        },
        selectAll(items) {
            for (item of items) {
                item.active = true;
            }
        },
        filterClass(filter) {
            return {
                'active': filter.active,
                'btn-outline-secondary': filter.type === "Weapons",
                'btn-outline-danger': filter.type === "Damage",
                'btn-outline-info': filter.type === "Type",
                'btn-outline-primary': filter.type === "Skills",
                'btn-outline-warning': filter.type === "Special",
            }
        }
    },
    computed: {
        data() {
            let filters = this.filters.filter(x => x.active);
            let groups = this.groups.filter(v => v.active);

            if (groups.length == 0)
                return [];

            return groups
                // Create array from objects
                .map(x => Object.keys(x.stats).map(key => {
                    return {
                        text: key,
                        filter: x.stats[key]
                    }
                }))
                // Flatten mods
                .reduce((x, y) => x.concat(y))
                // Find mods based on selected filters
                .filter(x => x.filter.find(f => f == "All") || x.filter.every(x => x.startsWith('!') || filters.find(f => f.text == x)))
                // Exclude mods that match selected filters starting with ! (ex. !Minion)
                .filter(x => !x.filter.find(x => filters.find(f => "!" + f.text == x)))
                // Find stat id:s
                .map(x => this.stats.find(s => s.text == x.text) || { ...x, unavaliable: true })
                // Remove duplicates
                .filter((x, index, self) => self.indexOf(x) === index);
        },
        mods() {
            return this.data.filter(x => !x.unavaliable);
        },
        unavaliable() {
            return this.data.filter(x => x.unavaliable);
        },
        url() {
            let filters = this.mods
                .map(x => {
                    return {
                        id: x.id,
                        disabled: false
                    }
                });

            let source = {
                "query": {
                    "status": { "option": "online" },
                    "stats": [{
                        "type": "count",
                        "value": { min: Math.min(this.count, filters.length) },
                        "filters": filters,
                        "disabled": false
                    }],
                    "filters": {
                        "type_filters": {
                            "filters": {
                                "category": { "option": "jewel" }
                            },
                            "disabled": false
                        }
                    }
                },
                "sort": {
                    "price": "asc"
                }
            };

            return `https://www.pathofexile.com/api/trade/search/${this.leauge.id}?redirect&source=${JSON.stringify(source)}`;
        },
        groupStatCount() {
            return this.groups
                .filter(x => x.active)
                .map(x => Object.keys(x.stats))
                .reduce((x, y) => x.concat(y), [])
                .filter((x, index, self) => self.indexOf(x) === index)
                .length;
        }
    },
    watch: {
        leauge() {
            localStorage.setItem('leaugeId', this.leauge.id);
        }
    }
})