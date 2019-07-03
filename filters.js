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
        "#% increased Attack Speed with Maces": ["Maces"],
        "#% increased Attack Speed with Claws": ["Claws"],
        "#% increased Attack Speed with Staves": ["Staves"],
        "#% increased Attack Speed with Wands": ["Wands"],
        "#% increased Attack Speed with Bows": ["Bows"],
    }
},
{
    "text": "#% increased Damage",
    "stats": {
        "#% increased Damage": ["All"],
        "#% increased Damage if you've Killed Recently": ["!Single Target"],
        "#% increased Spell Damage": ["Spell"],
        "#% increased Spell Damage if you've dealt a Critical Strike Recently": ["Spell", "!Resolute Technique"],
        "#% increased Spell Damage while holding a Shield": ["Spell", "Shield"],
        "#% increased Spell Damage while Dual Wielding": ["Spell", "Dual Wielding"],
        "#% increased Spell Damage while wielding a Staff": ["Spell", "Staves"],
        "#% increased Global Physical Damage": ["Physical"],
        "#% increased Physical Damage with One Handed Melee Weapons": ["Physical", "One-Handed Melee Weapons"],
        "#% increased Physical Damage with Two Handed Melee Weapons": ["Physical", "Two-Handed Melee Weapons"],
        "#% increased Physical Weapon Damage while Dual Wielding": ["Physical", "Dual Wielding", "Attack"],
        "#% increased Physical Damage with Swords": ["Physical", "Swords"],
        "#% increased Physical Damage with Axes": ["Physical", "Axes"],
        "#% increased Physical Damage with Wands": ["Physical", "Wands"],
        "#% increased Physical Damage with Daggers": ["Physical", "Daggers"],
        "#% increased Physical Damage with Maces": ["Physical", "Maces"],
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
        "#% increased Weapon Critical Strike Chance while Dual Wielding": ["Dual Wielding", "Attack"],
    }
},
{
    "text": "#% to Critical Strike Multiplier",
    "stats": {
        "#% to Global Critical Strike Multiplier": ["All"],
        "#% to Melee Critical Strike Multiplier": ["Melee"],
        "#% to Critical Strike Multiplier if you've Killed Recently": ["!Single Target"],
        "#% to Critical Strike Multiplier for Spells": ["Spell"],
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
        "Adds # to # Physical Damage to Dagger Attacks": ["Physical", "Daggers", "Attack"],
        "Adds # to # Physical Damage to Sword Attacks": ["Physical", "Swords", "Attack"],
        "Adds # to # Physical Damage to Axe Attacks": ["Physical", "Axes", "Attack"],
        "Adds # to # Physical Damage to Mace Attacks": ["Physical", "Maces", "Attack"],
        "Adds # to # Physical Damage to Staff Attacks": ["Physical", "Staves", "Attack"],
        "Adds # to # Physical Damage to Wand Attacks": ["Physical", "Wands", "Attack"],
        "Adds # to # Physical Damage to Bow Attacks": ["Physical", "Bows", "Attack"],
        "Adds # to # Physical Damage to Spells": ["Physical", "Spell"],
        "Adds # to # Physical Damage to Spells while Dual Wielding": ["Physical", "Spell", "Dual Wielding"],
        "Adds # to # Physical Damage to Spells while holding a Shield": ["Physical", "Spell", "Shield"],
        "Adds # to # Physical Damage to Spells while wielding a Two Handed Weapon": ["Physical", "Spell", "Two Handed Weapon"],
        "Adds # to # Lightning Damage to Attacks": ["Lightning", "Attack"],
        "Adds # to # Lightning Damage to Dagger Attacks": ["Lightning", "Daggers", "Attack"],
        "Adds # to # Lightning Damage to Sword Attacks": ["Lightning", "Swords", "Attack"],
        "Adds # to # Lightning Damage to Axe Attacks": ["Lightning", "Axes", "Attack"],
        "Adds # to # Lightning Damage to Mace Attacks": ["Lightning", "Maces", "Attack"],
        "Adds # to # Lightning Damage to Staff Attacks": ["Lightning", "Staves", "Attack"],
        "Adds # to # Lightning Damage to Wand Attacks": ["Lightning", "Wands", "Attack"],
        "Adds # to # Lightning Damage to Bow Attacks": ["Lightning", "Bows", "Attack"],
        "Adds # to # Lightning Damage to Spells": ["Fire", "Spell"],
        "Adds # to # Lightning Damage to Spells while Dual Wielding": ["Lightning", "Spell", "Dual Wielding"],
        "Adds # to # Lightning Damage to Spells while holding a Shield": ["Lightning", "Spell", "Shield"],
        "Adds # to # Lightning Damage to Spells while wielding a Two Handed Weapon": ["Lightning", "Spell", "Two Handed Weapon"],
        "Adds # to # Fire Damage to Attacks": ["Fire", "Attack"],
        "Adds # to # Fire Damage to Dagger Attacks": ["Fire", "Daggers", "Attack"],
        "Adds # to # Fire Damage to Sword Attacks": ["Fire", "Swords", "Attack"],
        "Adds # to # Fire Damage to Axe Attacks": ["Fire", "Axes", "Attack"],
        "Adds # to # Fire Damage to Mace Attacks": ["Fire", "Maces", "Attack"],
        "Adds # to # Fire Damage to Staff Attacks": ["Fire", "Staves", "Attack"],
        "Adds # to # Fire Damage to Wand Attacks": ["Fire", "Wands", "Attack"],
        "Adds # to # Fire Damage to Bow Attacks": ["Fire", "Bows", "Attack"],
        "Adds # to # Fire Damage to Spells": ["Fire", "Spell"],
        "Adds # to # Fire Damage to Spells while Dual Wielding": ["Fire", "Spell", "Dual Wielding"],
        "Adds # to # Fire Damage to Spells while holding a Shield": ["Fire", "Spell", "Shield"],
        "Adds # to # Fire Damage to Spells while wielding a Two Handed Weapon": ["Fire", "Spell", "Two Handed Weapon"],
        "Adds # to # Cold Damage to Attacks": ["Cold", "Attack"],
        "Adds # to # Cold Damage to Dagger Attacks": ["Cold", "Daggers", "Attack"],
        "Adds # to # Cold Damage to Sword Attacks": ["Cold", "Swords", "Attack"],
        "Adds # to # Cold Damage to Axe Attacks": ["Cold", "Axes", "Attack"],
        "Adds # to # Cold Damage to Mace Attacks": ["Cold", "Maces", "Attack"],
        "Adds # to # Cold Damage to Staff Attacks": ["Cold", "Staves", "Attack"],
        "Adds # to # Cold Damage to Wand Attacks": ["Cold", "Wands", "Attack"],
        "Adds # to # Cold Damage to Bow Attacks": ["Cold", "Bows", "Attack"],
        "Adds # to # Cold Damage to Spells": ["Cold", "Spell"],
        "Adds # to # Cold Damage to Spells while Dual Wielding": ["Cold", "Spell", "Dual Wielding"],
        "Adds # to # Cold Damage to Spells while holding a Shield": ["Cold", "Spell", "Shield"],
        "Adds # to # Cold Damage to Spells while wielding a Two Handed Weapon": ["Cold", "Spell", "Two Handed Weapon"],
        "Adds # to # Chaos Damage to Attacks": ["Chaos", "Attack"],
        "Adds # to # Chaos Damage to Spells": ["Chaos", "Spell"],
        "Adds # to # Chaos Damage to Spells while Dual Wielding": ["Chaos", "Spell", "Dual Wielding"],
        "Adds # to # Chaos Damage to Spells while holding a Shield": ["Chaos", "Spell", "Shield"],
        "Adds # to # Chaos Damage to Spells while wielding a Two Handed Weapon": ["Chaos", "Spell", "Two Handed Weapon"],
    }
}];

for (let item of groups) {
    item.active = false;
    item.min = undefined;
    item.max = undefined;
}

export { groups };