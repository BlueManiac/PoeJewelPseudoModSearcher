let statsPromise = axios.get("./data/trade_stats.json").then(x => x.data.result.find(x => x.label == "Explicit").entries);
let leaugesPromise = axios.get("./data/leagues.json").then(x => x.data.result);

export { statsPromise, leaugesPromise };