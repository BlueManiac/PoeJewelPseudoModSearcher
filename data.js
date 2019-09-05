let statsPromise = fetch("./data/trade_stats.json").then(x => x.json()).then(x => x.result.find(x => x.label == "Explicit").entries);
let leaugesPromise = fetch("./data/leagues.json").then(x => x.json()).then(x => x.result);

export { statsPromise, leaugesPromise };