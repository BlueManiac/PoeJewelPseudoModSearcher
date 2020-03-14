import { filters, groups, statGroups } from "./filters.js";
import { statsPromise, leaugesPromise } from "./data.js";
import { encode, decode } from './url-helper.js';

export default {
    data() {
        return {
            filters: filters,
            groups: groups,
            stats: [],
            leagues: [],
            showUrl: false,
            leauge: null,
            statGroups: statGroups
        }
    },
    async created() {
        this.leagues = await leaugesPromise;
        this.leauge = this.leagues.filter(x => x.id == localStorage.getItem('leaugeId'))[0] || this.leagues[0];
    },
    async mounted() {
        if (this.$route.query.data) {
            var data = await decode(this.$route.query.data)

            for (let filter of data.filters.map(x => this.filters.find(f => f.text == x))) {
                filter.active = true;
            }
        }

        this.stats = await statsPromise;
    },
    methods: {
        reset() {
            for (let item of [...filters, ...groups]) {
                item.active = false;
            }
        },
        selectAll(items) {
            for (let item of items) {
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
        },
        toggleFilter(filter) {
            filter.active = !filter.active;
        },
        resetGroup(group) {
            group.active = false;
            group.min = undefined;
            group.max = undefined;
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
                        filter: x.stats[key],
                        group: x
                    }
                }))
                // Flatten mods
                .reduce((x, y) => x.concat(y))
                // Find mods based on selected filters
                .filter(x => x.filter.find(f => f == "All") || x.filter.every(x => x.startsWith('!') || filters.find(f => f.text == x)))
                // Exclude mods that match selected filters starting with ! (ex. !Minion)
                .filter(x => !x.filter.find(x => filters.find(f => "!" + f.text == x)))
                // Find stat id:s
                .map(x => {
                    var stat = this.stats.find(s => s.text == x.text) || { ...x, unavaliable: true };

                    stat.group = x.group;

                    return stat;
                })
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
            if (!this.leauge)
                return;

            let stats = this.enabledStatGroups.map((x, index) => {
                let filters = this.mods
                    .filter(m => m.group.group == index + 1)
                    .map(m => {
                        return {
                            id: m.id,
                            disabled: false,
                            value: {
                                min: m.group.min,
                                max: m.group.max
                            }
                        }
                    });

                return {
                    "type": "count",
                    "value": { min: Math.min(x.count, filters.length) },
                    "filters": filters,
                    "disabled": false
                }
            });

            let source = {
                "query": {
                    "status": { "option": "online" },
                    "stats": stats,
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
        },
        enabledStatGroups() {
            const distinct = (value, index, self) => {
                return self.indexOf(value) === index;
            };

            return this.groups
                .map(x => x.group)
                .filter(distinct)
                .map(x => this.statGroups[x - 1]);
        }
    },
    watch: {
        leauge() {
            localStorage.setItem('leaugeId', this.leauge.id);
        },
        filters: {
            async handler() {
                let data = {
                    filters: this.filters.filter(x => x.active).map(x => x.text)
                };

                let query = {
                    data: await encode(data)
                };
                this.$router.push({ query: query });
            },
            deep: true
        }
    }
};