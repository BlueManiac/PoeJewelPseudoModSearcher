Invoke-WebRequest -Uri "https://www.pathofexile.com/api/trade/data/stats" -OutFile "trade_stats.json"

Invoke-WebRequest -Uri "https://www.pathofexile.com/api/trade/data/leagues" -OutFile "leagues.json"

Invoke-WebRequest -Uri "https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/stat_translations.json" -OutFile "stat_translations.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/mods.json" -OutFile "mods.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/stats.json" -OutFile "stats.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/mod_types.json" -OutFile "mod_types.json"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/tags.json" -OutFile "tags.json"