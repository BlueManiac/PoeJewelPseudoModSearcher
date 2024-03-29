let filters = [
    { text: "Two-Handed Melee Weapons", type: "Weapons" },
    { text: "One-Handed Melee Weapons", type: "Weapons" },
    { text: "Two Handed Weapon", type: "Weapons" },
    { text: "Dual Wielding", type: "Weapons" },
    { text: "Shield", type: "Weapons" },
    { text: "Swords", type: "Weapons" },
    { text: "Axes", type: "Weapons" },
    { text: "Wands", type: "Weapons" },
    { text: "Daggers", type: "Weapons" },
    { text: "Maces", type: "Weapons" },
    { text: "Claws", type: "Weapons" },
    { text: "Bows", type: "Weapons" },
    { text: "Staves", type: "Weapons" },
    { text: "Fire", type: "Damage" },
    { text: "Cold", type: "Damage" },
    { text: "Lightning", type: "Damage" },
    { text: "Chaos", type: "Damage" },
    { text: "Physical", type: "Damage" },
    { text: "Spell", type: "Type" },
    { text: "Attack", type: "Type" },
    { text: "Melee", type: "Type" },
    { text: "Trap", type: "Type" },
    { text: "Mine", type: "Type" },
    { text: "Totem", type: "Type" },
    { text: "Minion", type: "Type" },
    { text: "Damage over Time", type: "Type" },
    { text: "Area", type: "Type" },
    { text: "Projectile", type: "Type" },
    { text: "Poison", type: "Type" },
    { text: "Bleeding", type: "Type" },
    { text: "Burning", type: "Type" },
    { text: "Fire Skills", type: "Skills" },
    { text: "Cold Skills", type: "Skills" },
    { text: "Lightning Skills", type: "Skills" },
    { text: "Chaos Skills", type: "Skills" },
    { text: "Elemental Skills", type: "Skills" },
    { text: "Resolute Technique", type: "Special" },
    { text: "Single Target", type: "Special" },
];

for (let item of filters) {
    item.active = false;
}

export { filters };

let groups = [{
    "text": "#% increased Attack Speed",
    "stats": {
        "#% increased Attack Speed": ["All"],
        "#% increased Attack and Cast Speed": ["All"],
        "#% increased Attack Speed if you've dealt a Critical Strike Recently": ["All", "!Resolute Technique"],
        "#% increased Attack Speed if you've Killed Recently": ["!Single Target"],
        "#% increased Attack Speed while holding a Shield": ["Shield"],
        "#% increased Attack Speed with One Handed Melee Weapons": ["One-Handed Melee Weapons"],
        "#% increased Attack Speed with Two Handed Melee Weapons": ["Two-Handed Melee Weapons"],
        "#% increased Attack Speed while Dual Wielding": ["Dual Wielding"],
        "#% increased Attack Speed with Swords": ["Swords"],
        "#% increased Attack Speed with Axes": ["Axes"],
        "#% increased Attack Speed with Daggers": ["Daggers"],
        "#% increased Attack Speed with Maces or Sceptres": ["Maces"],
        "#% increased Attack Speed with Claws": ["Claws"],
        "#% increased Attack Speed with Staves": ["Staves"],
        "#% increased Attack Speed with Wands": ["Wands"],
        "#% increased Attack Speed with Bows": ["Bows"],
        "Minions have #% increased Attack Speed": ["Minion"]
    }
},
{
    "text": "#% increased Damage",
    "stats": {
        "#% increased Damage": ["All"],
        "#% increased Damage if you've Killed Recently": ["!Single Target"],
        "#% increased Damage with Two Handed Weapons": ["Two Handed Weapon", "Attack"],
        "#% increased Spell Damage": ["Spell"],
        "#% increased Spell Damage if you've dealt a Critical Strike Recently": ["Spell", "!Resolute Technique"],
        "#% increased Spell Damage while holding a Shield": ["Spell", "Shield"],
        "#% increased Spell Damage while Dual Wielding": ["Spell", "Dual Wielding"],
        "#% increased Spell Damage while wielding a Staff": ["Spell", "Staves"],
        "#% increased Global Physical Damage": ["Physical"],
        "#% increased Physical Damage with One Handed Melee Weapons": ["Physical", "One-Handed Melee Weapons"],
        "#% increased Physical Damage with Two Handed Melee Weapons": ["Physical", "Two-Handed Melee Weapons"],
        "#% increased Physical Attack Damage while Dual Wielding": ["Physical", "Dual Wielding", "Attack"],
        "#% increased Physical Damage with Swords": ["Physical", "Swords"],
        "#% increased Physical Damage with Axes": ["Physical", "Axes"],
        "#% increased Physical Damage with Wands": ["Physical", "Wands"],
        "#% increased Physical Damage with Daggers": ["Physical", "Daggers"],
        "#% increased Physical Damage with Maces or Sceptres": ["Physical", "Maces"],
        "#% increased Physical Damage with Claws": ["Physical", "Claws"],
        "#% increased Physical Damage with Bows": ["Physical", "Bows"],
        "#% increased Physical Damage with Staves": ["Physical", "Staves"],
        "#% increased Physical Damage with Wands": ["Wands", "Physical"],
        "#% increased Melee Physical Damage while holding a Shield": ["Physical", "Shield", "Melee"],
        "#% increased Fire Damage": ["Fire"],
        "#% increased Cold Damage": ["Cold"],
        "#% increased Lightning Damage": ["Lightning"],
        "#% increased Chaos Damage": ["Chaos"],
        "#% increased Trap Damage": ["Trap"],
        "#% increased Mine Damage": ["Mine"],
        "#% increased Totem Damage": ["Totem"],
        "Minions deal #% increased Damage": ["Minion"],
        "#% increased Projectile Damage": ["Projectile"],
        "#% increased Area Damage": ["Area"],
        "#% increased Damage over Time": ["Damage over Time"],
        "#% increased Damage over Time while Dual Wielding": ["Damage over Time", "Dual Wielding"],
        "#% increased Damage over Time while holding a Shield": ["Damage over Time", "Shield"],
        "#% increased Damage over Time while wielding a Two Handed Weapon": ["Damage over Time", "Two Handed Weapon"],
        "#% increased Burning Damage": ["Burning"],
        "#% increased Damage with Poison": ["Poison"],
        "#% increased Damage with Bleeding": ["Bleeding"],
    }
},
{
    "text": "#% increased Cast Speed",
    "stats": {
        "#% increased Cast Speed": ["All"],
        "#% increased Attack and Cast Speed": ["All"],
        "#% increased Cast Speed if you've dealt a Critical Strike Recently": ["All", "!Resolute Technique"],
        "#% increased Cast Speed if you've Killed Recently": ["!Single Target"],
        "#% increased Cast Speed with Fire Skills": ["Fire Skills"],
        "#% increased Cast Speed with Lightning Skills": ["Lightning Skills"],
        "#% increased Cast Speed with Cold Skills": ["Cold Skills"],
        "#% increased Cast Speed while holding a Shield": ["Shield"],
        "#% increased Cast Speed while Dual Wielding": ["Dual Wielding"],
        "#% increased Cast Speed while wielding a Staff": ["Staves"],
    }
},
{
    "text": "#% increased Critical Strike Chance",
    "stats": {
        "#% increased Global Critical Strike Chance": ["All"],
        "#% increased Melee Critical Strike Chance": ["Melee"],
        "#% increased Critical Strike Chance if you haven't dealt a Critical Strike Recently": ["Resolute Technique"],
        "#% increased Critical Strike Chance for Spells": ["Spell"],
        "#% increased Critical Strike Chance with Fire Skills": ["Fire Skills"],
        "#% increased Critical Strike Chance with Lightning Skills": ["Lightning Skills"],
        "#% increased Critical Strike Chance with Cold Skills": ["Cold Skills"],
        "#% increased Critical Strike Chance with Elemental Skills": ["Elemental Skills"],
        "#% increased Critical Strike Chance with One Handed Melee Weapons": ["One-Handed Melee Weapons"],
        "#% increased Critical Strike Chance with Two Handed Melee Weapons": ["Two-Handed Melee Weapons"],
        "#% increased Attack Critical Strike Chance while Dual Wielding": ["Dual Wielding", "Attack"],
    }
},
{
    "text": "#% to Critical Strike Multiplier",
    "stats": {
        "#% to Global Critical Strike Multiplier": ["All"],
        "#% to Melee Critical Strike Multiplier": ["Melee"],
        "#% to Critical Strike Multiplier if you've Killed Recently": ["!Single Target"],
        "#% to Critical Strike Multiplier for Spell Damage": ["Spell"],
        "#% to Critical Strike Multiplier with Fire Skills": ["Fire Skills"],
        "#% to Critical Strike Multiplier with Lightning Skills": ["Lightning Skills"],
        "#% to Critical Strike Multiplier with Cold Skills": ["Cold Skills"],
        "#% to Critical Strike Multiplier with Elemental Skills": ["Elemental Skills"],
        "#% to Critical Strike Multiplier with One Handed Melee Weapons": ["One-Handed Melee Weapons"],
        "#% to Critical Strike Multiplier with Two Handed Melee Weapons": ["Two-Handed Melee Weapons"],
        "#% to Critical Strike Multiplier while Dual Wielding": ["Dual Wielding"],
    }
},
{
    "text": "Adds # to # Damage",
    "stats": {
        "Adds # to # Physical Damage to Attacks": ["Physical", "Attack"],
        "# to # Added Physical Damage with Dagger Attacks": ["Physical", "Daggers", "Attack"],
        "# to # Added Physical Damage with Sword Attacks": ["Physical", "Swords", "Attack"],
        "# to # Added Physical Damage with Axe Attacks": ["Physical", "Axes", "Attack"],
        "# to # Added Physical Damage with Mace or Sceptre Attacks": ["Physical", "Maces", "Attack"],
        "# to # Added Physical Damage with Staff Attacks": ["Physical", "Staves", "Attack"],
        "# to # Added Physical Damage with Wand Attacks": ["Physical", "Wands", "Attack"],
        "# to # Added Physical Damage with Bow Attacks": ["Physical", "Bows", "Attack"],
        "# to # Added Physical Damage with Attacks while holding a Shield": ["Physical", "Shield", "Attack"],
        "Adds # to # Physical Damage to Spells": ["Physical", "Spell"],
        "# to # Added Spell Physical Damage while Dual Wielding": ["Physical", "Spell", "Dual Wielding"],
        "# to # Added Spell Physical Damage while holding a Shield": ["Physical", "Spell", "Shield"],
        "# to # Added Spell Physical Damage while wielding a Two Handed Weapon": ["Physical", "Spell", "Two Handed Weapon"],
        "Adds # to # Lightning Damage to Attacks": ["Lightning", "Attack"],
        "# to # Added Lightning Damage with Dagger Attacks": ["Lightning", "Daggers", "Attack"],
        "# to # Added Lightning Damage with Sword Attacks": ["Lightning", "Swords", "Attack"],
        "# to # Added Lightning Damage with Axe Attacks": ["Lightning", "Axes", "Attack"],
        "# to # Added Lightning Damage with Mace or Sceptre Attacks": ["Lightning", "Maces", "Attack"],
        "# to # Added Lightning Damage with Staff Attacks": ["Lightning", "Staves", "Attack"],
        "# to # Added Lightning Damage with Wand Attacks": ["Lightning", "Wands", "Attack"],
        "# to # Added Lightning Damage with Bow Attacks": ["Lightning", "Bows", "Attack"],
        "Adds # to # Lightning Damage to Spells": ["Lightning", "Spell"],
        "# to # Added Spell Lightning Damage while Dual Wielding": ["Lightning", "Spell", "Dual Wielding"],
        "# to # Added Spell Lightning Damage while holding a Shield": ["Lightning", "Spell", "Shield"],
        "# to # Added Spell Lightning Damage while wielding a Two Handed Weapon": ["Lightning", "Spell", "Two Handed Weapon"],
        "Adds # to # Fire Damage to Attacks": ["Fire", "Attack"],
        "# to # Added Fire Damage with Dagger Attacks": ["Fire", "Daggers", "Attack"],
        "# to # Added Fire Damage with Sword Attacks": ["Fire", "Swords", "Attack"],
        "# to # Added Fire Damage with Axe Attacks": ["Fire", "Axes", "Attack"],
        "# to # Added Fire Damage with Mace or Sceptre Attacks": ["Fire", "Maces", "Attack"],
        "# to # Added Fire Damage with Staff Attacks": ["Fire", "Staves", "Attack"],
        "# to # Added Fire Damage with Wand Attacks": ["Fire", "Wands", "Attack"],
        "# to # Added Fire Damage with Bow Attacks": ["Fire", "Bows", "Attack"],
        "Adds # to # Fire Damage to Spells": ["Fire", "Spell"],
        "# to # Added Spell Fire Damage while Dual Wielding": ["Fire", "Spell", "Dual Wielding"],
        "# to # Added Spell Fire Damage while holding a Shield": ["Fire", "Spell", "Shield"],
        "# to # Added Spell Fire Damage while wielding a Two Handed Weapon": ["Fire", "Spell", "Two Handed Weapon"],
        "Adds # to # Cold Damage to Attacks": ["Cold", "Attack"],
        "# to # Added Cold Damage with Dagger Attacks": ["Cold", "Daggers", "Attack"],
        "# to # Added Cold Damage with Sword Attacks": ["Cold", "Swords", "Attack"],
        "# to # Added Cold Damage with Axe Attacks": ["Cold", "Axes", "Attack"],
        "# to # Added Cold Damage with Mace or Sceptre Attacks": ["Cold", "Maces", "Attack"],
        "# to # Added Cold Damage with Staff Attacks": ["Cold", "Staves", "Attack"],
        "# to # Added Cold Damage with Wand Attacks": ["Cold", "Wands", "Attack"],
        "# to # Added Cold Damage with Bow Attacks": ["Cold", "Bows", "Attack"],
        "Adds # to # Cold Damage to Spells": ["Cold", "Spell"],
        "# to # Added Spell Cold Damage while Dual Wielding": ["Cold", "Spell", "Dual Wielding"],
        "# to # Added Spell Cold Damage while holding a Shield": ["Cold", "Spell", "Shield"],
        "# to # Added Spell Cold Damage while wielding a Two Handed Weapon": ["Cold", "Spell", "Two Handed Weapon"],
        "Adds # to # Chaos Damage to Attacks": ["Chaos", "Attack"],
        "Adds # to # Chaos Damage to Spells": ["Chaos", "Spell"],
        "# to # Added Spell Chaos Damage while Dual Wielding": ["Chaos", "Spell", "Dual Wielding"],
        "# to # Added Spell Chaos Damage while holding a Shield": ["Chaos", "Spell", "Shield"],
        "# to # Added Spell Chaos Damage while wielding a Two Handed Weapon": ["Chaos", "Spell", "Two Handed Weapon"],
    }
},
{
    "text": "Life",
    "stats": {
        "#% increased maximum Life": ["All"],
        "# to maximum Life": ["All"],
    },
    "group": 2
},
{
    "text": "Energy shield",
    "stats": {
        "#% increased maximum Energy Shield": ["All"],
        "# to maximum Energy Shield": ["All"],
    },
    "group": 2
},
{
    "text": "Mana",
    "stats": {
        "#% increased maximum Mana": ["All"],
        "# to maximum Mana": ["All"],
    },
    "group": 2
}];

for (let item of groups) {
    item.active = false;
    item.min = undefined;
    item.max = undefined;
    item.group = item.group || 1;
}

export { groups };


let statGroups = [{
    count: 2
},
{
    count: 1
},
{
    count: 1
},
{
    count: 1
},
{
    count: 1
}];

export { statGroups };