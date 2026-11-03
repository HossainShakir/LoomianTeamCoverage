// Loomian data in the format used by the Loomian damage calculator.
// App-only fields (movepool, gender, tier, icon, formerNames, typeVariants, specialTypeChart, itemInfo)
// are extra keys the damage calculator ignores.

var loomians = {
    embit: {
        name: "Embit",
        types: ["Fire"],
        abilities: ["Awakening"],
        sAbility: ["Terrifying"],
        finalEvo: false,
        tier: "LC",
        weight: 20,
        height: 33,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 57,
            energy: 51,
            attack: 60,
            defense: 67,
            attackR: 36,
            defenseR: 50,
            speed: 40
        },
        movepool: [
            "Pounce", "Growl", "Singe", "Burrow", "Ear Slap", "Hop Kick", "Fire Slam", "Power Focus",
            "Flaming Kick", "Barbs", "Body Crash", "Boiling Press", "Chase Down", "Drudge",
            "Fire Breath", "Mega Punch", "Raging Flame", "Slap Down", "Dodge", "Preemptive Strike",
            "Spare", "Burn Up", "Provoke", "Blaze of Glory", "Clay Slap"
        ]
    },

    rabburn: {
        name: "Rabburn",
        types: ["Fire"],
        abilities: ["Awakening"],
        sAbility: ["Terrifying"],
        finalEvo: false,
        tier: "NFE",
        weight: 39,
        height: 59,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 61,
            energy: 67,
            attack: 75,
            defense: 95,
            attackR: 46,
            defenseR: 68,
            speed: 60
        },
        movepool: [
            "Rapid Fire", "Hop Kick", "Fire Slam", "Power Focus", "Flaming Kick", "Barbs",
            "Body Crash", "Boiling Press", "Chase Down", "Drudge", "Fire Breath", "Mega Punch",
            "Raging Flame", "Slap Down", "Bulk Up", "Dodge", "Pounce", "Growl", "Singe", "Burrow",
            "Ear Slap", "Preemptive Strike", "Spare", "Burn Up", "Provoke", "Blaze of Glory",
            "Clay Slap"
        ]
    },

    searknight: {
        name: "Searknight",
        types: ["Fire", "Metal"],
        abilities: ["Awakening"],
        sAbility: ["Terrifying"],
        weight: 98,
        height: 82,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 89,
            energy: 88,
            attack: 102,
            defense: 125,
            attackR: 71,
            defenseR: 85,
            speed: 65
        },
        movepool: [
            "Searing Steel", "Flaming Kick", "Armor Down", "Barbs", "Body Crash", "Boiling Press",
            "Chase Down", "Drudge", "Fire Breath", "Mega Punch", "Raging Flame", "Slap Down",
            "Bulk Up", "Dodge", "Pounce", "Growl", "Singe", "Burrow", "Ear Slap", "Rapid Fire",
            "Hop Kick", "Fire Slam", "Power Focus", "Preemptive Strike", "Spare", "Burn Up",
            "Provoke", "Blaze of Glory", "Clay Slap"
        ]
    },

    dripple: {
        name: "Dripple",
        types: ["Water"],
        abilities: ["Awakening"],
        sAbility: ["Power Napper"],
        finalEvo: false,
        tier: "LC",
        weight: 17,
        height: 30,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 63,
            energy: 51,
            attack: 56,
            defense: 50,
            attackR: 55,
            defenseR: 45,
            speed: 41
        },
        movepool: [
            "Strike", "Dawdle", "Spray", "Mind's Eye", "Swipe", "Water Bomb", "Soft Water", "Maroon",
            "Blindspot Batter", "Chilly Chomp", "Gamma Pulse", "Hydro Slash", "Mega Chomp",
            "Nova Blast", "Peace of Mind", "Radiant Rush", "Thunder Chomp", "Wave Wrecker", "Dodge",
            "Frost Beam", "Plunge", "Rejuvenate", "Tsunami", "Spare"
        ]
    },

    reptide: {
        name: "Reptide",
        types: ["Water"],
        abilities: ["Awakening"],
        sAbility: ["Power Napper"],
        finalEvo: false,
        tier: "NFE",
        weight: 35,
        height: 42,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 78,
            energy: 67,
            attack: 71,
            defense: 70,
            attackR: 70,
            defenseR: 65,
            speed: 51
        },
        movepool: [
            "Submerge", "Water Bomb", "Sleet Shot", "Soft Water", "Maroon", "Blindspot Batter",
            "Chilly Chomp", "Gamma Pulse", "Hydro Slash", "Mega Chomp", "Nova Blast",
            "Peace of Mind", "Radiant Rush", "Thunder Chomp", "Wave Wrecker", "Dodge", "Frost Beam",
            "Plunge", "Rejuvenate", "Tsunami", "Strike", "Dawdle", "Spray", "Mind's Eye", "Swipe",
            "Spare"
        ]
    },

    luminami: {
        name: "Luminami",
        types: ["Water", "Light"],
        abilities: ["Awakening"],
        sAbility: ["Power Napper"],
        weight: 91,
        height: 63,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 105,
            energy: 88,
            attack: 94,
            defense: 95,
            attackR: 98,
            defenseR: 85,
            speed: 60
        },
        movepool: [
            "Flash Pulse", "Maroon", "Blindspot Batter", "Chilly Chomp", "Gamma Pulse",
            "Hydro Slash", "Mega Chomp", "Nova Blast", "Peace of Mind", "Radiant Rush",
            "Thunder Chomp", "Wave Wrecker", "Dodge", "Flash 'n Flee", "Frost Beam", "Plunge",
            "Rejuvenate", "Tsunami", "Strike", "Dawdle", "Spray", "Mind's Eye", "Swipe", "Submerge",
            "Sleet Shot", "Spare"
        ]
    },

    fevine: {
        name: "Fevine",
        types: ["Plant"],
        abilities: ["Awakening"],
        sAbility: ["Thriving Pace"],
        finalEvo: false,
        tier: "LC",
        weight: 15,
        height: 28,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 45,
            energy: 51,
            attack: 71,
            defense: 44,
            attackR: 50,
            defenseR: 36,
            speed: 64
        },
        movepool: [
            "Pounce", "Growl", "Petal Pummel", "Stretch", "Swipe", "Provoke", "Leaf Barrage",
            "Life Drain", "Nature's Force", "Splitting Headache", "Boom Bash", "Bush Whack",
            "Poison", "Power Focus", "Tease", "Thistle Slash", "Timber Thrash", "Wonder Herb",
            "Mudslide", "Barter", "Dodge", "Ill Will", "Mud Spatter", "Spare", "Vine Lash",
            "Scapegoat"
        ]
    },

    felver: {
        name: "Felver",
        types: ["Plant"],
        abilities: ["Awakening"],
        sAbility: ["Thriving Pace"],
        finalEvo: false,
        tier: "NFE",
        weight: 37,
        height: 46,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 55,
            energy: 67,
            attack: 96,
            defense: 55,
            attackR: 70,
            defenseR: 45,
            speed: 84
        },
        movepool: [
            "Nature's Rage", "Leaf Barrage", "Toxic Tail", "Life Drain", "Provoke", "Nature's Force",
            "Splitting Headache", "Boom Bash", "Bush Whack", "Poison", "Power Focus", "Tease",
            "Thistle Slash", "Timber Thrash", "Wonder Herb", "Barter", "Bulk Up", "Dodge",
            "Ill Will", "Mud Spatter", "Pounce", "Growl", "Petal Pummel", "Stretch", "Swipe",
            "Spare", "Mudslide", "Vine Lash", "Scapegoat"
        ]
    },

    tahtab: {
        name: "Tahtab",
        types: ["Plant", "Brawler"],
        abilities: ["Awakening"],
        sAbility: ["Thriving Pace"],
        weight: 74,
        height: 64,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 88,
            attack: 126,
            defense: 75,
            attackR: 92,
            defenseR: 65,
            speed: 104
        },
        movepool: [
            "Junglejutsu", "Nature's Force", "Splitting Headache", "Boom Bash", "Bush Whack",
            "Poison", "Power Focus", "Tease", "Thistle Slash", "Timber Thrash", "Wonder Herb",
            "Barter", "Bulk Up", "Dodge", "Ill Will", "Mud Spatter", "Pounce", "Growl",
            "Petal Pummel", "Stretch", "Swipe", "Nature's Rage", "Leaf Barrage", "Toxic Tail",
            "Life Drain", "Spare", "Mudslide", "Provoke", "Vine Lash", "Scapegoat"
        ]
    },

    eaglit: {
        name: "Eaglit",
        types: ["Light"],
        abilities: ["Awakening"],
        sAbility: ["Applied Frustration"],
        finalEvo: false,
        tier: "LC",
        weight: 17,
        heigth: 29,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 45,
            energy: 51,
            attack: 36,
            defense: 36,
            attackR: 71,
            defenseR: 62,
            speed: 60
        },
        movepool: [
            "Pounce", "Stare", "Shine", "Growl", "Peck", "Luster Loot", "Cyclone Slam",
            "Power Focus", "Gamma Pulse", "Air Blade", "Magnify", "Metal Blast", "Nosedive",
            "Nova Blast", "Radiant Rush", "Raging Howl", "Dodge", "Flash 'n Flee", "Spare", "Gust",
            "Hasten", "Lightspeed Ray", "Barbs"
        ]
    },

    torprey: {
        name: "Torprey",
        types: ["Light"],
        abilities: ["Awakening"],
        sAbility: ["Applied Frustration"],
        finalEvo: false,
        tier: "NFE",
        weight: 25,
        height: 52,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 57,
            energy: 67,
            attack: 64,
            defense: 40,
            attackR: 91,
            defenseR: 63,
            speed: 90
        },
        movepool: [
            "Radiant Forecast", "Luster Loot", "Cyclone Slam", "Power Focus", "Gamma Pulse",
            "Air Blade", "Magnify", "Metal Blast", "Nosedive", "Nova Blast", "Radiant Rush",
            "Raging Howl", "Dodge", "Flash 'n Flee", "Pounce", "Stare", "Shine", "Growl", "Peck",
            "Spare", "Gust", "Hasten", "Lightspeed Ray", "Barbs"
        ]
    },

    falkyrie: {
        name: "Falkyrie",
        types: ["Light", "Metal"],
        abilities: ["Awakening"],
        sAbility: ["Applied Frustration"],
        weight: 80,
        height: 77,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 86,
            energy: 88,
            attack: 87,
            defense: 74,
            attackR: 125,
            defenseR: 90,
            speed: 75
        },
        movepool: [
            "Holy Slash", "Gamma Pulse", "Armor Down", "Air Blade", "Magnify", "Metal Blast",
            "Nosedive", "Nova Blast", "Radiant Rush", "Raging Howl", "Dodge", "Flash 'n Flee",
            "Rejuvenate", "Pounce", "Stare", "Shine", "Growl", "Peck", "Radiant Forecast",
            "Luster Loot", "Cyclone Slam", "Power Focus", "Spare", "Gust", "Hasten",
            "Lightspeed Ray", "Barbs"
        ]
    },

    vambat: {
        name: "Vambat",
        types: ["Dark"],
        abilities: ["Awakening"],
        sAbility: ["Demanding"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 26,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 47,
            energy: 51,
            attack: 47,
            defense: 50,
            attackR: 47,
            defenseR: 50,
            speed: 69
        },
        movepool: [
            "Gnaw", "Growl", "Chomp", "Tease", "Dive Bomb", "Bamboozle", "Air Blade", "Sharpen",
            "Shadow Sprint", "Phantom Slash", "Dark Surge", "Harrow", "Mega Chomp", "Slap Down",
            "Slash", "Spectral Burst", "Dodge", "Spare", "Tear Down", "Mudslide", "Phantom Blast",
            "Gnarly Gash", "Provoke", "Gust"
        ]
    },

    dimpire: {
        name: "Dimpire",
        types: ["Dark"],
        abilities: ["Awakening"],
        sAbility: ["Demanding"],
        finalEvo: false,
        tier: "NFE",
        weight: 30,
        height: 61,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 60,
            energy: 67,
            attack: 65,
            defense: 75,
            attackR: 60,
            defenseR: 60,
            speed: 85
        },
        movepool: [
            "Gnaw", "Growl", "Chomp", "Tease", "Dive Bomb", "Blood Drain", "Bamboozle", "Air Blade",
            "Sharpen", "Shadow Sprint", "Phantom Slash", "Dark Surge", "Harrow", "Mega Chomp",
            "Slap Down", "Slash", "Spectral Burst", "Dodge", "Spare", "Tear Down", "Mudslide",
            "Phantom Blast", "Gnarly Gash", "Provoke", "Gust"
        ]
    },

    vesperatu: {
        name: "Vesperatu",
        types: ["Dark", "Spirit"],
        abilities: ["Awakening"],
        sAbility: ["Demanding"],
        weight: 65,
        height: 80,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 76,
            energy: 88,
            attack: 110,
            defense: 97,
            attackR: 90,
            defenseR: 65,
            speed: 99
        },
        movepool: [
            "Revival", "Shadow Sprint", "Dark Surge", "Harrow", "Mega Chomp", "Phantom Slash",
            "Slap Down", "Slash", "Dodge", "Spectral Burst", "Gnaw", "Growl", "Chomp", "Tease",
            "Dive Bomb", "Blood Drain", "Bamboozle", "Air Blade", "Sharpen", "Spare", "Tear Down",
            "Mudslide", "Phantom Blast", "Gnarly Gash", "Provoke", "Gust"
        ]
    },

    snocub: {
        name: "Snocub",
        types: ["Ice"],
        abilities: ["Awakening"],
        sAbility: ["Staunch"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 19,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 55,
            energy: 51,
            attack: 45,
            defense: 38,
            attackR: 67,
            defenseR: 60,
            speed: 45
        },
        movepool: [
            "Strike", "Brace", "Flurry", "Dawdle", "Snowdozer", "Chilly Chomp", "Sleet Shot",
            "Icicle Trap", "Body Slam", "Earthquake", "Frost Beam", "Ice Hammer", "Rogue Assault",
            "Quicksand", "Dodge", "Spare", "Spike Rush", "Landslide", "Deep Freeze", "Barbs"
        ]
    },

    snowki: {
        name: "Snowki",
        types: ["Ice"],
        abilities: ["Awakening"],
        sAbility: ["Staunch"],
        finalEvo: false,
        tier: "NFE",
        weight: 35,
        height: 57,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 65,
            energy: 67,
            attack: 75,
            defense: 65,
            attackR: 75,
            defenseR: 65,
            speed: 60
        },
        movepool: [
            "Winter's Fury", "Chilly Chomp", "Quick Punch", "Sleet Shot", "Icicle Trap", "Mudslide",
            "Body Slam", "Earthquake", "Frost Beam", "Ice Hammer", "Rogue Assault", "Quicksand",
            "Bulk Up", "Dodge", "Spare", "Spike Rush", "Landslide", "Strike", "Brace", "Flurry",
            "Dawdle", "Snowdozer", "Deep Freeze", "Barbs"
        ]
    },

    himbrr: {
        name: "Himbrr",
        types: ["Ice", "Earth"],
        abilities: ["Awakening"],
        sAbility: ["Staunch"],
        weight: 108,
        height: 92,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 132,
            energy: 88,
            attack: 98,
            defense: 115,
            attackR: 72,
            defenseR: 75,
            speed: 45
        },
        movepool: [
            "Yeti's Wrath", "Icicle Trap", "Mudslide", "Landslide", "Body Slam", "Earthquake",
            "Frost Beam", "Ice Hammer", "Rogue Assault", "Quicksand", "Bulk Up", "Dodge", "Spare",
            "Spike Rush", "Strike", "Brace", "Flurry", "Dawdle", "Snowdozer", "Winter's Fury",
            "Chilly Chomp", "Quick Punch", "Sleet Shot", "Deep Freeze", "Barbs"
        ]
    },

    weevolt: {
        name: "Weevolt",
        types: ["Electric"],
        abilities: ["Awakening"],
        sAbility: ["Brute Force"],
        finalEvo: false,
        tier: "LC",
        weight: 14,
        height: 27,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 51,
            energy: 51,
            attack: 36,
            defense: 36,
            attackR: 67,
            defenseR: 55,
            speed: 65
        },
        movepool: [
            "Pounce", "Growl", "Static Shock", "Stretch", "Swipe", "Thunder Slam", "Thunder Chomp",
            "Thunderstrike", "Blaze Chomp", "Chilly Chomp", "Jolt", "Primal Slash", "Zip-Zap",
            "Dodge", "Spare", "Typhoon", "Stun"
        ]
    },

    stozap: {
        name: "Stozap",
        types: ["Electric"],
        abilities: ["Awakening"],
        sAbility: ["Brute Force"],
        finalEvo: false,
        tier: "NFE",
        weight: 33,
        height: 49,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 71,
            energy: 67,
            attack: 56,
            defense: 41,
            attackR: 88,
            defenseR: 60,
            speed: 89
        },
        movepool: [
            "Storm Summon", "Thunder Slam", "Elemental Burst", "Thunder Chomp", "Thunderstrike",
            "Shrewd Blast", "Blaze Chomp", "Chilly Chomp", "Jolt", "Primal Slash", "Zip-Zap",
            "Dodge", "Spare", "Typhoon", "Stun", "Pounce", "Growl", "Static Shock", "Stretch",
            "Swipe"
        ]
    },

    zuelong: {
        name: "Zuelong",
        types: ["Electric", "Ancient"],
        abilities: ["Awakening"],
        sAbility: ["Brute Force"],
        weight: 59,
        height: 87,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 78,
            energy: 88,
            attack: 92,
            defense: 60,
            attackR: 109,
            defenseR: 79,
            speed: 119
        },
        movepool: [
            "Ancient Roar", "Thunderstrike", "Shrewd Blast", "Blaze Chomp", "Chilly Chomp", "Jolt",
            "Primal Slash", "Zip-Zap", "Dodge", "Pounce", "Growl", "Static Shock", "Stretch",
            "Swipe", "Spare", "Storm Summon", "Thunder Slam", "Elemental Burst", "Thunder Chomp",
            "Typhoon", "Stun"
        ]
    },

    twilat: {
        name: "Twilat",
        number: 22,
        types: ["Simple"],
        abilities: ["Territorial", "Confidence"],
        sAbility: ["Neutralize"],
        finalEvo: false,
        tier: "LC",
        weight: 10,
        height: 14,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 50,
            energy: 41,
            attack: 42,
            defense: 38,
            attackR: 42,
            defenseR: 38,
            speed: 40
        },
        movepool: [
            "Gnaw", "Dawdle", "Stretch", "Quick Pounce", "Swipe", "Scapegoat", "Spare", "Body Slam",
            "Chase Down", "Disperse", "Gloominous Roar", "High-Pitch Screech", "Power Focus",
            "Raging Howl", "Raging Tackle", "Sharpen", "Dodge", "Rainbow Blast", "Drudge", "Hasten",
            "Brawn Boost", "Magnify"
        ]
    },

    umbrat: {
        name: "Umbrat",
        number: 23,
        types: ["Dark"],
        abilities: ["Dusk", "Confidence"],
        sAbility: ["Overshadow"],
        weight: 38,
        height: 39,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 84,
            attack: 106,
            defense: 90,
            attackR: 61,
            defenseR: 88,
            speed: 71
        },
        movepool: [
            "Gloom Fangs", "Scapegoat", "Sharpen", "Raging Tackle", "Mega Chomp", "Bulk Up",
            "Fade Away", "Body Slam", "Chase Down", "Disperse", "Gloominous Roar",
            "High-Pitch Screech", "Power Focus", "Raging Howl", "Dark Surge", "Dodge", "Gnaw",
            "Dawdle", "Stretch", "Quick Pounce", "Swipe", "Spare", "Chilly Chomp", "Drudge",
            "Hasten", "Brawn Boost", "Magnify"
        ]
    },

    luxoar: {
        name: "Luxoar",
        number: 24,
        types: ["Light"],
        abilities: ["Dawn", "Confidence"],
        sAbility: ["Illuminate"],
        weight: 37,
        height: 39,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 84,
            attack: 61,
            defense: 73,
            attackR: 106,
            defenseR: 75,
            speed: 101
        },
        movepool: [
            "Luminous Roar", "Scapegoat", "Disperse", "Gamma Pulse", "Peace of Mind", "Resonate",
            "Body Slam", "Chase Down", "Gloominous Roar", "High-Pitch Screech", "Power Focus",
            "Raging Howl", "Raging Tackle", "Sharpen", "Dodge", "Gnaw", "Dawdle", "Stretch",
            "Quick Pounce", "Swipe", "Spare", "Fire Breath", "Flash 'n Flee", "Resonate", "Drudge",
            "Hasten", "Brawn Boost", "Magnify", "Swiften"
        ]
    },

    tiklipse: {
        name: "Tiklipse",
        number: 25,
        types: ["Light", "Dark"],
        abilities: ["Circadian"],
        sAbility: ["Total Eclipse"],
        weight: 42,
        height: 45,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Total Eclipse", typeChart: "TotalEclipse" }],
        baseStats: {
            hp: 75,
            energy: 84,
            attack: 106,
            defense: 90,
            attackR: 106,
            defenseR: 75,
            speed: 89
        },
        movepool: [
            "Scapegoat", "Sharpen", "Raging Howl", "Raging Tackle", "Gamma Pulse", "Dark Surge",
            "Rant", "Body Slam", "Chase Down", "Disperse", "Gloominous Roar", "High-Pitch Screech",
            "Power Focus", "Bulk Up", "Dodge", "Spare", "Peace of Mind", "Gnaw", "Dawdle", "Stretch",
            "Quick Pounce", "Swipe", "Gloominous Fangs", "Blindspot Batter", "Radiant Rush",
            "Drudge", "Hasten", "Brawn Boost", "Magnify"
        ]
    },

    cathorn: {
        name: "Cathorn",
        number: 26,
        types: ["Bug"],
        abilities: ["Hasty"],
        sAbility: ["Defensive Priority"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 35,
            energy: 37,
            attack: 40,
            defense: 24,
            attackR: 55,
            defenseR: 24,
            speed: 47
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Pestilence", "Pheroblast", "Air Blade", "Pester", "Poison",
            "Dodge", "Spare", "Counter Poise"
        ]
    },

    propae: {
        name: "Propae",
        number: 27,
        types: ["Bug"],
        abilities: ["Hasty"],
        sAbility: ["Defensive Priority"],
        finalEvo: false,
        tier: "NFE",
        weight: 14,
        height: 35,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 50,
            energy: 46,
            attack: 39,
            defense: 60,
            attackR: 39,
            defenseR: 55,
            speed: 37
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Pestilence", "Pheroblast", "Air Blade", "Pester", "Poison",
            "Dodge", "Brace", "Snot Shot", "Spare", "Counter Poise"
        ]
    },

    cynamoth: {
        name: "Cynamoth",
        number: 28,
        types: ["Bug", "Air"],
        abilities: ["Mystery Toxins"],
        sAbility: ["Flutter"],
        weight: 20,
        height: 45,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 70,
            energy: 80,
            attack: 55,
            defense: 85,
            attackR: 98,
            defenseR: 99,
            speed: 88
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Pestilence", "Pheroblast", "Air Blade", "Counter Poise",
            "Pester", "Poison", "Dodge", "Brace", "Mystic Breeze", "Snore Spores", "Toxic Spores",
            "Gust", "Wing Slap", "Life Drain", "Magnify", "Jet Stream", "Spare", "Hasten",
            "Counter Poise"
        ]
    },

    sumobito: {
        name: "Sumobito",
        number: 28,
        types: ["Bug", "Brawler"],
        abilities: ["Guru"],
        sAbility: ["Double Strike"],
        weight: 154,
        height: 62,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 72,
            energy: 80,
            attack: 110,
            defense: 106,
            attackR: 51,
            defenseR: 101,
            speed: 55
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Pestilence", "Pheroblast", "Air Blade", "Pester", "Poison",
            "Dodge", "Brace", "Counter Stance", "Chop", "Bamboozle", "Quick Punch", "Parasitize",
            "Bulk Up", "Horn-Dashi", "Body Slam", "Fire Slam", "Barter", "Ill will", "Spare",
            "Counter Poise", "Double Beat"
        ]
    },

    twittle: {
        name: "Twittle",
        number: 29,
        types: ["Air"],
        abilities: ["Early Bird", "Confidence"],
        sAbility: ["Rev Up"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 16,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 44,
            energy: 40,
            attack: 50,
            defense: 38,
            attackR: 22,
            defenseR: 33,
            speed: 58
        },
        movepool: [
            "Pounce", "Stare", "Peck", "Squawk", "Stretch", "Air Shot", "Air Whip", "Cyclone Slam",
            "Perch", "Slash", "Accelerate", "Air Blade", "Body Slam", "Brawn Boost", "Rogue Assault",
            "Sharpen", "Thunder Crash", "Dodge", "Spare"
        ]
    },

    paratweet: {
        name: "Paratweet",
        number: 30,
        types: ["Air"],
        abilities: ["Early Bird", "Confidence"],
        sAbility: ["Rev Up"],
        finalEvo: false,
        tier: "NFE",
        weight: 15,
        height: 32,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 54,
            energy: 56,
            attack: 75,
            defense: 48,
            attackR: 32,
            defenseR: 43,
            speed: 88
        },
        movepool: [
            "Pounce", "Stare", "Peck", "Squawk", "Stretch", "Air Shot", "Air Whip", "Cyclone Slam",
            "Perch", "Slash", "Accelerate", "Air Blade", "Body Slam", "Brawn Boost", "Rogue Assault",
            "Sharpen", "Thunder Crash", "Dodge", "Scavenge", "Driving Force", "Spare"
        ]
    },

    avitross: {
        name: "Avitross",
        number: 31,
        types: ["Air"],
        abilities: ["Early Bird", "Confidence"],
        sAbility: ["Rev Up"],
        weight: 44,
        height: 63,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 79,
            energy: 85,
            attack: 100,
            defense: 78,
            attackR: 67,
            defenseR: 63,
            speed: 113
        },
        movepool: [
            "Pounce", "Stare", "Peck", "Squawk", "Stretch", "Air Shot", "Air Whip", "Cyclone Slam",
            "Perch", "Slash", "Accelerate", "Air Blade", "Body Slam", "Brawn Boost", "Rogue Assault",
            "Sharpen", "Thunder Crash", "Dodge", "Scavenge", "Driving Force", "Nosedive", "Spare"
        ]
    },

    pyder: {
        name: "Pyder",
        number: 32,
        types: ["Bug", "Toxic"],
        abilities: ["Webbing", "Apprehension"],
        sAbility: ["Coursing Venom"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 14,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Coursing Venom", typeChart: "CoursingVenom" }],
        baseStats: {
            hp: 45,
            energy: 43,
            attack: 60,
            defense: 40,
            attackR: 30,
            defenseR: 40,
            speed: 45
        },
        movepool: [
            "Web Shot", "Sting", "Bug Bite", "Burrow", "Eerie", "Corrode", "Pestilence", "Pester",
            "Slime", "Parasitize", "Baneful Bash", "Body Slam", "Eerie Stare", "Mega Chomp",
            "Vital Jab", "Dodge", "Rejuvenate", "Spare", "Mudslide", "Counter Poise"
        ]
    },

    swolder: {
        name: "Swolder",
        number: 33,
        types: ["Bug", "Toxic"],
        abilities: ["Webbing", "Apprehension"],
        sAbility: ["Coursing Venom"],
        weight: 24,
        height: 37,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Coursing Venom", typeChart: "CoursingVenom" }],
        baseStats: {
            hp: 85,
            energy: 85,
            attack: 120,
            defense: 105,
            attackR: 50,
            defenseR: 65,
            speed: 65
        },
        movepool: [
            "Web Shot", "Sting", "Bug Bite", "Burrow", "Eerie", "Corrode", "Pestilence", "Pester",
            "Slime", "Parasitize", "Baneful Bash", "Body Slam", "Eerie Stare", "Mega Chomp",
            "Vital Jab", "Dodge", "Rejuvenate", "Poison", "Mega Punch", "Brawn Boost", "Bulk Up",
            "Spare", "Mudslide", "Counter Poise"
        ]
    },

    antsee: {
        name: "Antsee",
        number: 34,
        types: ["Bug", "Plant"],
        abilities: ["Mystery Toxins", "Woodsman"],
        sAbility: ["Drainage"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 15,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Woodsman", typeChart: "Woodsman" }],
        baseStats: {
            hp: 55,
            energy: 43,
            attack: 25,
            defense: 60,
            attackR: 40,
            defenseR: 60,
            speed: 20
        },
        movepool: [
            "Dawdle", "Gnaw", "Bug Bite", "Burrow", "Take Root", "Pine Shot", "Pestilence", "Pester",
            "Parasitize", "Nature's Force", "Wonder Herb", "Energy Surge", "Gain Drain",
            "Life Drain", "Magnify", "Mega Chomp", "Pheroblast", "Photosynthesis", "Poison",
            "Thistle Slash", "Wonder Herb", "Bait", "Dodge", "Spare", "Mudslide", "Vice Jaws",
            "Tamp", "Vine Lash", "Tricky Tactics", "Safeguard", "Briar Block"
        ]
    },

    florant: {
        name: "Florant",
        number: 35,
        types: ["Bug", "Plant"],
        abilities: ["Mystery Toxins", "Woodsman"],
        sAbility: ["Drainage"],
        weight: 33,
        height: 44,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Woodsman", typeChart: "Woodsman" }],
        baseStats: {
            hp: 105,
            energy: 88,
            attack: 55,
            defense: 105,
            attackR: 82,
            defenseR: 105,
            speed: 35
        },
        movepool: [
            "Dawdle", "Gnaw", "Bug Bite", "Burrow", "Take Root", "Pine Shot", "Pestilence", "Pester",
            "Parasitize", "Nature's Force", "Wonder Herb", "Energy Surge", "Gain Drain",
            "Life Drain", "Magnify", "Mega Chomp", "Pheroblast", "Photosynthesis", "Poison",
            "Thistle Slash", "Wonder Herb", "Bait", "Dodge", "Sap Plant", "Bulk up", "Rainbow Blast",
            "Spare", "Mudslide", "Vice Jaws", "Tamp", "Vine Lash", "Tricky Tactics", "Safeguard",
            "Briar Block"
        ]
    },

    'florant-flychomp': {
        name: "Florant-Flychomp",
        number: 35,
        types: ["Bug", "Plant"],
        ability: "Power Jaw",
        soulMove: "Carnivorous Snap",
        item: "Floraburst",
        weight: 33,
        height: 44,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 105,
            energy: 88,
            attack: 123,
            defense: 112,
            attackR: 55,
            defenseR: 112,
            speed: 50
        },
        movepool: [
            "Dawdle", "Gnaw", "Bug Bite", "Burrow", "Take Root", "Pine Shot", "Pestilence", "Pester",
            "Parasitize", "Nature's Force", "Wonder Herb", "Energy Surge", "Gain Drain",
            "Life Drain", "Magnify", "Mega Chomp", "Pheroblast", "Photosynthesis", "Poison",
            "Thistle Slash", "Wonder Herb", "Bait", "Dodge", "Sap Plant", "Bulk up", "Rainbow Blast",
            "Carnivorous Snap", "Spare", "Mudslide", "Vice Jaws", "Tamp", "Vine Lash",
            "Tricky Tactics", "Safeguard", "Briar Block"
        ]
    },

    grubby: {
        name: "Grubby",
        number: 36,
        types: ["Bug"],
        abilities: ["Premonition", "Odd Husk"],
        sAbility: ["Defensive Priority"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 14,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 35,
            energy: 39,
            attack: 50,
            defense: 40,
            attackR: 35,
            defenseR: 33,
            speed: 42
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Sting", "Pestilence", "Life Drain", "Parasitize",
            "Baneful Bash", "Provoke", "Rough Up", "Venom Chomp", "Wing Slap", "Dodge", "Spare"
        ]
    },

    coonucopia: {
        name: "Coonucopia",
        number: 37,
        types: ["Bug"],
        abilities: ["Premonition", "Odd Husk"],
        sAbility: ["Defensive Priority"],
        finalEvo: false,
        tier: "NFE",
        weight: 12,
        height: 33,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 60,
            energy: 48,
            attack: 45,
            defense: 65,
            attackR: 35,
            defenseR: 48,
            speed: 37
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Sting", "Pestilence", "Life Drain", "Parasitize", "Spare",
            "Baneful Bash", "Provoke", "Rough Up", "Venom Chomp", "Wing Slap", "Dodge", "Brace"
        ]
    },

    terrafly: {
        name: "Terrafly",
        number: 38,
        types: ["Bug", "Toxic"],
        abilities: ["Ambush", "Odd Husk"],
        sAbility: ["Bug Fever"],
        weight: 37,
        height: 65,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 85,
            attack: 112,
            defense: 87,
            attackR: 61,
            defenseR: 60,
            speed: 95
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Sting", "Pestilence", "Life Drain", "Parasitize",
            "Baneful Bash", "Provoke", "Rough Up", "Venom Chomp", "Wing Slap", "Dodge", "Brace",
            "Double Sting", "Poison Barbs", "Slime", "Muck Blast", "Air Whip", "Drudge", "Spare"
        ]
    },

    terraclaw: {
        name: "Terraclaw",
        number: 92,
        types: ["Bug"],
        abilities: ["Odd Husk", "Pincer Trap"],
        sAbility: ["Slick Shell"],
        weight: 33,
        height: 44,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 94,
            energy: 87,
            attack: 121,
            defense: 116,
            attackR: 60,
            defenseR: 54,
            speed: 43
        },
        movepool: [
            "Gnaw", "Stare", "Bug Bite", "Sting", "Pestilence", "Life Drain", "Parasitize",
            "Baneful Bash", "Provoke", "Rough Up", "Venom Chomp", "Wing Slap", "Dodge", "Brace",
            "Clamp Claw", "Eerie Stare", "Cyclone Slam", "Headbutt", "Mega Chomp", "Body Slam",
            "Mud Spatter", "Bulk Up", "Spare", "Vital Jab", "Double Beat", "Barbs"
        ]
    },

    kleptyke: {
        name: "Kleptyke",
        number: 39,
        types: ["Dark"],
        abilities: ["Burglar", "Apprehension"],
        sAbility: ["Ability Thief"],
        finalEvo: false,
        tier: "LC",
        weight: 14,
        height: 32,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 55,
            energy: 48,
            attack: 50,
            defense: 40,
            attackR: 20,
            defenseR: 30,
            speed: 95
        },
        movepool: [
            "Pounce", "Dawdle", "Chomp", "Quick Pounce", "Sharpen", "Pilfer", "Charade", "Rant",
            "Mega Chomp", "Provoke", "Dark Surge", "Mega Punch", "Bag of Tricks", "Body Slam",
            "Chase Down", "Gnarly Gash", "Hop Kick", "Nab", "Preemptive Strike", "Rogue Assault",
            "Spare", "Tricky Tactics", "Barter", "Dodge", "Ill Will", "Barbs", "Icicle Trap",
            "Scapegoat"
        ]
    },

    ragoon: {
        name: "Ragoon",
        number: 40,
        types: ["Dark"],
        abilities: ["Burglar", "Apprehension"],
        sAbility: ["Ability Thief"],
        weight: 30,
        height: 48,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 95,
            energy: 80,
            attack: 100,
            defense: 95,
            attackR: 60,
            defenseR: 55,
            speed: 90
        },
        movepool: [
            "Pounce", "Dawdle", "Chomp", "Quick Pounce", "Sharpen", "Pilfer", "Charade", "Rant",
            "Mega Chomp", "Provoke", "Dark Surge", "Mega Punch", "Bag of Tricks", "Body Slam",
            "Chase Down", "Gnarly Gash", "Hop Kick", "Nab", "Preemptive Strike", "Rogue Assault",
            "Spare", "Tricky Tactics", "Barter", "Dodge", "Ill Will", "Slap Down", "Icicle Trap",
            "Barbs", "Scapegoat"
        ]
    },

    babore: {
        name: "Babore",
        number: 41,
        types: ["Earth"],
        abilities: ["Boast"],
        sAbility: ["Resilience"],
        finalEvo: false,
        tier: "LC",
        weight: 21,
        height: 25,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 62,
            energy: 46,
            attack: 60,
            defense: 60,
            attackR: 30,
            defenseR: 30,
            speed: 38
        },
        movepool: [
            "Pounce", "Burrow", "Chomp", "Aim", "Quick Pounce", "Mud Spatter", "Quicksand",
            "Headbutt", "Body Slam", "Boulder Blast", "Bulk Up", "Body Crash", "Earthquake",
            "Mega Chomp", "Raging Tackle", "Rogue Assault", "Dodge"
        ]
    },

    boarrok: {
        name: "Boarrok",
        number: 42,
        types: ["Earth"],
        abilities: ["Boast"],
        sAbility: ["Resilience"],
        weight: 53,
        height: 49,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 102,
            energy: 71,
            attack: 110,
            defense: 95,
            attackR: 59,
            defenseR: 70,
            speed: 68
        },
        movepool: [
            "Pounce", "Burrow", "Chomp", "Aim", "Quick Pounce", "Mud Spatter", "Quicksand",
            "Headbutt", "Body Slam", "Boulder Blast", "Bulk Up", "Body Crash", "Earthquake",
            "Mega Chomp", "Raging Tackle", "Rogue Assault", "Dodge", "Muck Buck"
        ]
    },

    geklow: {
        name: "Geklow",
        number: 43,
        types: ["Electric", "Light"],
        abilities: ["Lightning Rod", "Radiance"],
        sAbility: ["Prismatic"],
        finalEvo: false,
        tier: "LC",
        weight: 17,
        height: 29,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Prismatic", typeChart: "Prismatic" }, { ability: "Lightning Rod", typeChart: "LightningRod" }],
        baseStats: {
            hp: 50,
            energy: 55,
            attack: 50,
            defense: 45,
            attackR: 68,
            defenseR: 50,
            speed: 67
        },
        movepool: [
            "Static Shock", "Stare", "Spare", "Shine", "Dodge", "Tase", "Light Dash", "Energize",
            "Examine", "Gamma Pulse", "Thunder Crash", "Dazzling Barrage", "Earthquake", "Jolt",
            "Luster Loot", "Mudslide", "Thunderstrike", "Zip-Zap", "Flash 'n Flee", "Rejuvenate",
            "Landslide", "Thunder Blast"
        ]
    },

    eleguana: {
        name: "Eleguana",
        number: 44,
        types: ["Electric", "Light"],
        abilities: ["Lightning Rod", "Radiance"],
        sAbility: ["Prismatic"],
        weight: 57,
        height: 51,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Prismatic", typeChart: "Prismatic" }, { ability: "Lightning Rod", typeChart: "LightningRod" }],
        baseStats: {
            hp: 80,
            energy: 80,
            attack: 55,
            defense: 85,
            attackR: 90,
            defenseR: 115,
            speed: 80
        },
        movepool: [
            "Static Shock", "Stare", "Spare", "Shine", "Dodge", "Tase", "Light Dash", "Energize",
            "Examine", "Gamma Pulse", "Thunder Crash", "Dazzling Barrage", "Earthquake", "Jolt",
            "Luster Loot", "Mudslide", "Thunderstrike", "Zip-Zap", "Flash 'n Flee", "Rejuvenate",
            "Magnify", "Landslide", "Thunder Blast"
        ]
    },

    slugling: {
        name: "Slugling",
        number: 45,
        types: ["Plant"],
        abilities: ["Mystery Toxins", "Ungracious Host"],
        sAbility: ["Slimy"],
        finalEvo: false,
        tier: "LC",
        weight: 12,
        height: 15,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 70,
            energy: 41,
            attack: 10,
            defense: 10,
            attackR: 50,
            defenseR: 70,
            speed: 45
        },
        movepool: [
            "Strike", "Dawdle", "Petal Pummel", "Dodge", "Slime", "Take Root", "Pine Shot",
            "Leaf Barrage", "Poison", "Nature's Force", "Photosynthesis", "Stratagem", "Earthquake",
            "Landslide", "Life Drain", "Muck Blast", "Return to Sender", "Sap Plant", "Tamp",
            "Peace Mind", "Spare", "Mudslide"
        ]
    },

    escargrow: {
        name: "Escargrow",
        number: 46,
        types: ["Plant"],
        abilities: ["Mystery Toxins", "Ungracious Host"],
        sAbility: ["Slimy"],
        finalEvo: false,
        tier: "NFE",
        weight: 30,
        height: 44,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 90,
            energy: 65,
            attack: 35,
            defense: 20,
            attackR: 65,
            defenseR: 90,
            speed: 50
        },
        movepool: [
            "Strike", "Dawdle", "Petal Pummel", "Dodge", "Slime", "Take Root", "Pine Shot",
            "Leaf Barrage", "Poison", "Nature's Force", "Photosynthesis", "Stratagem", "Earthquake",
            "Landslide", "Life Drain", "Muck Blast", "Return to Sender", "Sap Plant", "Tamp",
            "Peace Mind", "Trip Root", "Spare", "Mudslide"
        ]
    },

    gastroak: {
        name: "Gastroak",
        number: 47,
        types: ["Plant"],
        abilities: ["Mystery Toxins", "Ungracious Host"],
        sAbility: ["Slimy"],
        weight: 130,
        height: 93,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 120,
            energy: 88,
            attack: 60,
            defense: 40,
            attackR: 92,
            defenseR: 120,
            speed: 55
        },
        movepool: [
            "Strike", "Dawdle", "Petal Pummel", "Dodge", "Slime", "Take Root", "Pine Shot",
            "Leaf Barrage", "Poison", "Nature's Force", "Photosynthesis", "Stratagem", "Earthquake",
            "Landslide", "Life Drain", "Muck Blast", "Return to Sender", "Sap Plant", "Tamp",
            "Peace Mind", "Trip Root", "Briar Block", "Spare", "Mudslide"
        ]
    },

    'gastroak-terraform': {
        name: "Gastroak-Terraform",
        number: 47,
        types: ["Plant", "Earth"],
        ability: "Insulated",
        soulMove: "Flora Blast",
        item: "Gastroburst",
        weight: 130,
        height: 93,
        gender: ["Male", "Female"],
        specialTypeChart: "Insulated",
        baseStats: {
            hp: 140,
            energy: 88,
            attack: 60,
            defense: 45,
            attackR: 107,
            defenseR: 140,
            speed: 65
        },
        movepool: [
            "Strike", "Dawdle", "Petal Pummel", "Dodge", "Slime", "Take Root", "Pine Shot",
            "Leaf Barrage", "Poison", "Nature's Force", "Photosynthesis", "Stratagem", "Earthquake",
            "Landslide", "Life Drain", "Muck Blast", "Return to Sender", "Spare", "Sap Plant",
            "Tamp", "Peace Mind", "Trip Root", "Briar Block", "Flora Blast", "Mudslide"
        ]
    },

    kabunga: {
        name: "Kabunga",
        number: 48,
        types: ["Plant"],
        abilities: ["Communication", "Territorial"],
        sAbility: ["Noxious Weeds"],
        finalEvo: false,
        tier: "LC",
        weight: 24,
        height: 35,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Noxious Weeds", typeChart: "NoxiousWeeds" }],
        baseStats: {
            hp: 52,
            energy: 53,
            attack: 76,
            defense: 43,
            attackR: 64,
            defenseR: 34,
            speed: 86
        },
        movepool: [
            "Strike", "Brace", "Petal Pummel", "Dodge", "Pine Shot", "Bush Whack", "Life Drain",
            "Photosynthesis", "Nature's Force", "Bait", "Tear Down", "Coconut Bomb", "Muck Blast",
            "Provoke", "Scapegoat", "Toxic Spores", "Barter", "Ill Will", "Rejuvenate", "Spare",
            "Wonder Herb"
        ]
    },

    'kabunga-halloween': {
        name: "Kabunga-Halloween",
        number: 48,
        types: ["Plant", "Mind"],
        abilities: ["Communication", "Expertise"],
        sAbility: ["Noxious Weeds"],
        finalEvo: false,
        tier: "LC",
        weight: 24,
        height: 35,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Noxious Weeds", typeChart: "NoxiousWeeds" }],
        baseStats: {
            hp: 65,
            energy: 68,
            attack: 23,
            defense: 58,
            attackR: 99,
            defenseR: 74,
            speed: 5
        },
        movepool: [
            "Strike", "Brace", "Petal Pummel", "Brainwash", "Pine Shot", "Bane of Haste",
            "Life Drain", "Flabbergast", "Photosynthesis", "Nature's Force", "Peace of Mind",
            "Bag of Tricks", "Muck Blast", "Provoke", "Psycho Blast", "Scapegoat", "Tear Down",
            "Toxic Spores", "Barter", "Dodge", "Ill will", "Rejuvenate", "Thunderstrike", "Spare",
            "Dissipate"
        ]
    },

    'wiki-wiki': {
        name: "Wiki-Wiki",
        number: 49,
        types: ["Plant"],
        abilities: ["Communication", "Chaperone"],
        sAbility: ["Noxious Weeds"],
        weight: 117,
        height: 85,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Noxious Weeds", typeChart: "NoxiousWeeds" }],
        baseStats: {
            hp: 162,
            energy: 125,
            attack: 49,
            defense: 70,
            attackR: 62,
            defenseR: 70,
            speed: 47
        },
        movepool: [
            "Strike", "Brace", "Petal Pummel", "Dodge", "Pine Shot", "Bush Whack", "Life Drain",
            "Photosynthesis", "Nature's Force", "Bait", "Tear Down", "Coconut Bomb", "Muck Blast",
            "Provoke", "Scapegoat", "Toxic Spores", "Barter", "Ill Will", "Rejuvenate",
            "Wonder Herb", "Health Gift", "Bequeath", "Poison", "Sap Plant", "Mudslide", "Hypnotize",
            "Spare", "Herbal Remedy"
        ]
    },

    chartiki: {
        name: "Chartiki",
        number: 50,
        types: ["Plant", "Fire"],
        abilities: ["Communication", "Territorial"],
        sAbility: ["Noxious Weeds"],
        weight: 81,
        height: 100,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Noxious Weeds", typeChart: "NoxiousWeeds" }],
        baseStats: {
            hp: 108,
            energy: 94,
            attack: 49,
            defense: 80,
            attackR: 112,
            defenseR: 80,
            speed: 62
        },
        movepool: [
            "Strike", "Brace", "Petal Pummel", "Dodge", "Pine Shot", "Bush Whack", "Life Drain",
            "Photosynthesis", "Nature's Force", "Bait", "Burn Up", "Coconut Bomb", "Muck Blast",
            "Provoke", "Scapegoat", "Toxic Spores", "Barter", "Ill Will", "Rejuvenate",
            "Fire Breath", "Briar Block", "Blaze Punch", "Spare", "Tear Down", "Flare Blast"
        ]
    },

    'waka-laka': {
        name: "Waka-Laka",
        types: ["Plant", "Mind"],
        abilities: ["Communication", "Expertise"],
        sAbility: ["Mycotic"],
        weight: 111,
        height: 74,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 104,
            energy: 73,
            attack: 49,
            defense: 86,
            attackR: 124,
            defenseR: 108,
            speed: 41
        },
        movepool: [
            "Strike", "Brace", "Petal Pummel", "Brainwash", "Pine Shot", "Bane of Haste",
            "Life Drain", "Flabbergast", "Photosynthesis", "Nature's Force", "Peace of Mind",
            "Bag of Tricks", "Gamma Pulse", "Luster Loot", "Muck Blast", "Provoke", "Psycho Blast",
            "Scapegoat", "Tear Down", "Toxic Spores", "Barter", "Dodge", "Ill will", "Rejuvenate",
            "Thunderstrike", "Fungus Curse", "Spare", "Zip-Zap", "Dissipate", "Luster Loot"
        ]
    },

    shawchi: {
        name: "Shawchi",
        number: 51,
        types: ["Mind"],
        abilities: ["Enchant"],
        sAbility: ["Sharp Focus"],
        weight: 19,
        height: 45,
        gender: ["Female"],
        baseStats: {
            hp: 79,
            energy: 91,
            attack: 36,
            defense: 52,
            attackR: 104,
            defenseR: 74,
            speed: 89
        },
        movepool: [
            "Brainwash", "Dawdle", "Mind's Eye", "Aim", "Swipe", "Quick Pounce", "Peace of Mind",
            "Foul Chant", "Tear Down", "Bag of Tricks", "Bane of Haste", "Elemental Burst",
            "Flabbergast", "Health Gift", "Psycho Blast", "Pyrokinesis", "Barter", "Dodge",
            "Frost Beam", "Thunderstrike", "Rainbow Blast", "Spare", "Dissipate"
        ]
    },

    rakrawla: {
        name: "Rakrawla",
        number: 52,
        types: ["Earth"],
        abilities: ["Clutch", "Hasty"],
        sAbility: ["Lazy"],
        finalEvo: false,
        tier: "LC",
        weight: 15,
        height: 30,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 59,
            attack: 51,
            defense: 68,
            attackR: 44,
            defenseR: 54,
            speed: 43
        },
        movepool: [
            "Burrow", "Gnaw", "Boulder Blast", "Swipe", "Mud Spatter", "Examine", "Chomp", "Provoke",
            "Sharpen", "Earthquake", "Mudslide", "Blaze Chomp", "Body Slam", "Chase Down",
            "Talent Trade", "Thunder Chomp", "Dodge", "Rejuvenate", "Spare", "Safeguard", "Slash",
            "Phantom Slash", "Charred Claws", "Harrow", "Swat"
        ]
    },

    sedimars: {
        name: "Sedimars",
        number: 53,
        types: ["Earth"],
        abilities: ["Clutch", "Hasty"],
        sAbility: ["Lazy"],
        weight: 106,
        height: 61,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 107,
            energy: 87,
            attack: 91,
            defense: 108,
            attackR: 52,
            defenseR: 81,
            speed: 54
        },
        movepool: [
            "Burrow", "Gnaw", "Boulder Blast", "Swipe", "Mud Spatter", "Examine", "Chomp", "Provoke",
            "Sharpen", "Earthquake", "Mudslide", "Blaze Chomp", "Body Slam", "Chase Down",
            "Talent Trade", "Thunder Chomp", "Dodge", "Rejuvenate", "Raging Tackle", "Ill Will",
            "Spare", "Safeguard", "Slash", "Phantom Slash", "Charred Claws", "Harrow", "Swat"
        ]
    },

    gumpod: {
        name: "Gumpod",
        number: 54,
        types: ["Water"],
        abilities: ["Protective Shell"],
        sAbility: ["Sharp Edges"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 19,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 60,
            energy: 55,
            attack: 42,
            defense: 98,
            attackR: 42,
            defenseR: 43,
            speed: 33
        },
        movepool: [
            "Spray", "Brace", "Eerie Stare", "Sleet Shot", "Water Bomb", "Scapegoat", "Hydro Slash",
            "Dodge", "Soft Water", "Maroon", "Battering Ram", "Slumber", "Frost Beam", "Tsunami",
            "Spare", "Tear Down", "Mudslide", "Burn Up"
        ]
    },

    ventacean: {
        name: "Ventacean",
        number: 55,
        types: ["Water"],
        abilities: ["Protective Shell"],
        sAbility: ["Sharp Edges"],
        weight: 104,
        height: 62,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 90,
            energy: 90,
            attack: 57,
            defense: 142,
            attackR: 90,
            defenseR: 58,
            speed: 48
        },
        movepool: [
            "Spray", "Brace", "Eerie Stare", "Sleet Shot", "Water Bomb", "Scapegoat", "Hydro Slash",
            "Dodge", "Soft Water", "Maroon", "Battering Ram", "Slumber", "Frost Beam", "Tsunami",
            "Geyser", "Spare", "Tear Down", "Mudslide", "Burn Up"
        ]
    },

    phancub: {
        name: "Phancub",
        number: 56,
        types: ["Spirit", "Brawler"],
        abilities: ["Sharp Claws"],
        sAbility: ["Adorable"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 26,
        gender: ["Ungendered"],
        baseStats: {
            hp: 46,
            energy: 60,
            attack: 65,
            defense: 50,
            attackR: 46,
            defenseR: 55,
            speed: 60
        },
        movepool: [
            "Startle", "Stare", "Punch", "Quick Punch", "Slash", "Chase Down", "Sharpen",
            "Phantom Slash", "Pep Jab", "Final Ruse", "Shadow Sprint", "Slap Down", "Dodge",
            "Spectral Burst", "Spare", "Harrow", "Provoke", "Shadowbox", "Soul Storm", "Barbs"
        ]
    },

    'phancub-valentine': {
        name: "Phancub-Valentine",
        number: 56,
        types: ["Spirit", "Brawler"],
        abilities: ["Ignorant"],
        sAbility: ["Clingy"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 26,
        gender: ["Ungendered"],
        baseStats: {
            hp: 58,
            energy: 67,
            attack: 52,
            defense: 79,
            attackR: 17,
            defenseR: 63,
            speed: 46
        },
        movepool: [
            "Startle", "Stare", "Punch", "Quick Punch", "Slash", "Chase Down", "Sharpen",
            "Phantom Slash", "Pep Jab", "Final Ruse", "Shadow Sprint", "Slap Down", "Dodge",
            "Spectral Burst", "Heart Break", "Spare"
        ]
    },

    ursoul: {
        name: "Ursoul",
        number: 57,
        types: ["Spirit", "Brawler"],
        abilities: ["Sharp Claws"],
        sAbility: ["Terrifying"],
        weight: 95,
        height: 80,
        gender: ["Ungendered"],
        baseStats: {
            hp: 99,
            energy: 89,
            attack: 120,
            defense: 68,
            attackR: 50,
            defenseR: 90,
            speed: 75
        },
        movepool: [
            "Startle", "Stare", "Punch", "Quick Punch", "Slash", "Chase Down", "Sharpen",
            "Phantom Slash", "Pep Jab", "Final Ruse", "Shadow Sprint", "Slap Down", "Dodge",
            "Spectral Burst", "Steel Trap", "Hop Kick", "Spare", "Harrow", "Bulk Up", "Provoke",
            "Shadowbox", "Soul Storm", "Barbs"
        ]
    },

    ursnac: {
        name: "Ursnac",
        number: 152,
        types: ["Spirit", "Brawler"],
        abilities: ["Tank"],
        sAbility: ["Bursting Seams"],
        weight: 73,
        height: 74,
        gender: ["Ungendered"],
        baseStats: {
            hp: 99,
            energy: 89,
            attack: 95,
            defense: 113,
            attackR: 50,
            defenseR: 90,
            speed: 55
        },
        movepool: [
            "Startle", "Stare", "Punch", "Quick Punch", "Slash", "Chase Down", "Sharpen", "Spare",
            "Phantom Slash", "Pep Jab", "Final Ruse", "Shadow Sprint", "Slap Down", "Dodge",
            "Spectral Burst", "Heart Break", "Baffle", "Gain Drain", "Rough Up"
        ]
    },

    whispup: {
        name: "Whispup",
        number: 58,
        types: ["Spirit", "Fire"],
        abilities: ["Temper", "Scorching Skin"],
        sAbility: ["Vengeance"],
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 38,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 45,
            energy: 60,
            attack: 57,
            defense: 42,
            attackR: 70,
            defenseR: 48,
            speed: 72
        },
        movepool: [
            "Startle", "Stare", "Singe", "Gnaw", "Final Ruse", "Stretch", "Shadow Sprint", "Spare",
            "Blaze Chomp", "Accelerate", "Spectral Burst", "Dark Surge", "Fire Breath", "Harrow",
            "Mega Chomp", "Phantom Slash", "Power Focus", "Soul Storm", "Dodge", "Fade Away",
            "Phantom Blast", "Flare Blast"
        ]
    },

    revenine: {
        name: "Revenine",
        number: 59,
        types: ["Spirit", "Fire"],
        abilities: ["Temper", "Scorching Skin"],
        sAbility: ["Vengeance"],
        weight: 22,
        height: 59,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 65,
            energy: 89,
            attack: 105,
            defense: 63,
            attackR: 115,
            defenseR: 67,
            speed: 97
        },
        movepool: [
            "Startle", "Stare", "Singe", "Gnaw", "Final Ruse", "Stretch", "Shadow Sprint", "Spare",
            "Blaze Chomp", "Accelerate", "Spectral Burst", "Dark Surge", "Fire Breath", "Harrow",
            "Mega Chomp", "Phantom Slash", "Power Focus", "Soul Storm", "Dodge", "Fade Away",
            "Ghostly Howl", "Phantom Blast", "Flare Blast"
        ]
    },

    skilava: {
        name: "Skilava",
        number: 60,
        types: ["Fire"],
        abilities: ["Combustible", "Scorching Skin"],
        sAbility: ["Pyro"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 22,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Combustible", typeChart: "Combustible" }],
        baseStats: {
            hp: 50,
            energy: 70,
            attack: 48,
            defense: 49,
            attackR: 58,
            defenseR: 49,
            speed: 55
        },
        movepool: [
            "Growl", "Singe", "Gnaw", "Dodge", "Quick Pounce", "Stretch", "Magma Block",
            "Blaze Chomp", "Power Focus", "Fire Breath", "Mudslide", "Dark Surge", "Earthquake",
            "Landslide", "Magnify", "Phantom Slash", "Provoke", "Raging Flame", "Slash",
            "Mud Spatter", "Spare", "Tear Down", "Blaze Rush", "Blaze of Glory", "Brawn Boost"
        ]
    },

    geksplode: {
        name: "Geksplode",
        number: 61,
        types: ["Fire"],
        abilities: ["Combustible", "Scorching Skin"],
        sAbility: ["Pyro"],
        finalEvo: false,
        tier: "NFE",
        weight: 54,
        height: 35,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Combustible", typeChart: "Combustible" }],
        baseStats: {
            hp: 65,
            energy: 80,
            attack: 52,
            defense: 58,
            attackR: 80,
            defenseR: 59,
            speed: 60
        },
        movepool: [
            "Growl", "Singe", "Gnaw", "Dodge", "Quick Pounce", "Stretch", "Magma Block",
            "Blaze Chomp", "Power Focus", "Fire Breath", "Mudslide", "Dark Surge", "Earthquake",
            "Landslide", "Magnify", "Phantom Slash", "Provoke", "Raging Flame", "Slash",
            "Mud Spatter", "Fire Slam", "Spare", "Tear Down", "Blaze Rush", "Blaze of Glory",
            "Brawn Boost"
        ]
    },

    eruptidon: {
        name: "Eruptidon",
        types: ["Fire"],
        abilities: ["Combustible", "Scorching Skin"],
        sAbility: ["Pyro"],
        weight: 102,
        height: 105,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Combustible", typeChart: "Combustible" }],
        baseStats: {
            hp: 81,
            energy: 90,
            attack: 94,
            defense: 74,
            attackR: 105,
            defenseR: 89,
            speed: 77
        },
        movepool: [
            "Growl", "Singe", "Gnaw", "Dodge", "Quick Pounce", "Stretch", "Magma Block",
            "Blaze Chomp", "Power Focus", "Fire Breath", "Mudslide", "Dark Surge", "Earthquake",
            "Landslide", "Magnify", "Phantom Slash", "Provoke", "Raging Flame", "Slash",
            "Mud Spatter", "Fire Slam", "Lava Slash", "Spare", "Tear Down", "Blaze Rush",
            "Blaze of Glory", "Brawn Boost"
        ]
    },

    'eruptidon-magmadire': {
        name: "Eruptidon-Magmadire",
        types: ["Fire", "Earth"],
        ability: "Pyro Pro",
        soulMove: "Hellstorm",
        item: "Eruptiburst",
        weight: 102,
        height: 105,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 81,
            energy: 90,
            attack: 104,
            defense: 90,
            attackR: 127,
            defenseR: 94,
            speed: 80
        },
        movepool: [
            "Growl", "Singe", "Gnaw", "Dodge", "Quick Pounce", "Stretch", "Magma Block",
            "Blaze Chomp", "Power Focus", "Fire Breath", "Mudslide", "Accelerate", "Dark Surge",
            "Earthquake", "Landslide", "Magnify", "Phantom Slash", "Provoke", "Raging Flame",
            "Slash", "Mud Spatter", "Fire Slam", "Lava Slash", "Hellstorm", "Spare", "Tear Down",
            "Blaze Rush", "Blaze of Glory", "Brawn Boost"
        ]
    },

    craytal: {
        name: "Craytal",
        types: ["Fire"],
        abilities: ["Volcanic", "Territorial"],
        sAbility: ["Combustible"],
        finalEvo: false,
        tier: "LC",
        weight: 11,
        height: 32,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Combustible", typeChart: "Combustible" }],
        baseStats: {
            hp: 76,
            energy: 74,
            attack: 34,
            defense: 43,
            attackR: 76,
            defenseR: 43,
            speed: 62
        },
        movepool: [
            "Singe", "Brace", "Spare", "Swipe", "Dodge", "Slash", "Power Focus", "Fire Slam",
            "Brawn Boost", "Fire Breath", "Flare Blast", "High-Pitch Screech", "Tear Down",
            "Phantom Slash", "Raging Flame", "Tricky Tactics", "Mud Spatter", "Rejuvenate",
            "Mudslide", "Charred Claws", "Blaze Rush", "Blaze of Glory"
        ]
    },

    'craytal-winter': {
        name: "Craytal-Winter",
        types: ["Ice", "Plant"],
        abilities: ["Chill", "Parting Gift"],
        sAbility: ["Regift"],
        finalEvo: false,
        tier: "LC",
        weight: 11,
        height: 32,
        gender: ["Male", "Female"],
        formerNames: ["Craytal-Holiday"],
        icon: "craytal-holiday",
        baseStats: {
            hp: 76,
            energy: 74,
            attack: 76,
            defense: 43,
            attackR: 14,
            defenseR: 63,
            speed: 62
        },
        movepool: [
            "Petal Pummel", "Flurry", "Brace", "Spare", "Leaf Barrage", "Snowdozer", "Sap Plant",
            "Icicle Trap", "Bush Whack", "Briar Block", "Ice Hammer", "Thistle Slash", "Brawn Boost",
            "Earthquake", "Raging Tackle", "Timber Thrash", "Tricky Tactics", "Dodge", "Frost Beam",
            "Hypnotize", "Ill Will", "Rejuvenate", "Vine Lash"
        ]
    },

    krakaloa: {
        name: "Krakaloa",
        types: ["Fire"],
        abilities: ["Volcanic", "Scorching Skin"],
        sAbility: ["Combustible"],
        weight: 155,
        height: 81,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Combustible", typeChart: "Combustible" }],
        baseStats: {
            hp: 95,
            energy: 125,
            attack: 58,
            defense: 95,
            attackR: 91,
            defenseR: 99,
            speed: 22
        },
        movepool: [
            "Singe", "Brace", "Spare", "Swipe", "Dodge", "Slash", "Power Focus", "Fire Slam",
            "Brawn Boost", "Fire Breath", "Flare Blast", "High-Pitch Screech", "Tear Down",
            "Phantom Slash", "Raging Flame", "Tricky Tactics", "Mud Spatter", "Rejuvenate",
            "Magma Burst", "Scapegoat", "Magma Block", "Eerie Stare", "Spectral Burst", "Dark Surge",
            "Mudslide", "Charred Claws", "Blaze Rush", "Blaze of Glory"
        ]
    },

    'krakaloa-lavafiend': {
        name: "Krakaloa-Lavafiend",
        types: ["Fire", "Spirit"],
        ability: "Heat Summon",
        soulMove: "Eruption",
        item: "Krakaburst",
        weight: 155,
        height: 81,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 115,
            energy: 125,
            attack: 63,
            defense: 105,
            attackR: 126,
            defenseR: 109,
            speed: 12
        },
        movepool: [
            "Singe", "Brace", "Spare", "Swipe", "Dodge", "Slash", "Power Focus", "Fire Slam",
            "Brawn Boost", "Fire Breath", "Flare Blast", "High-Pitch Screech", "Tear Down",
            "Phantom Slash", "Raging Flame", "Tricky Tactics", "Mud Spatter", "Rejuvenate",
            "Magma Burst", "Scapegoat", "Magma Block", "Eerie Stare", "Spectral Burst", "Dark Surge",
            "Eruption", "Mudslide", "Charred Claws", "Blaze Rush", "Blaze of Glory"
        ]
    },

    volkaloa: {
        name: "Volkaloa",
        number: 65,
        types: ["Fire", "Ancient"],
        abilities: ["Volcanic", "Territorial"],
        sAbility: ["Combustible"],
        weight: 107,
        height: 78,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Combustible", typeChart: "Combustible" }],
        baseStats: {
            hp: 81,
            energy: 90,
            attack: 110,
            defense: 74,
            attackR: 64,
            defenseR: 64,
            speed: 102
        },
        movepool: [
            "Singe", "Brace", "Spare", "Swipe", "Dodge", "Slash", "Power Focus", "Fire Slam",
            "Brawn Boost", "Fire Breath", "Flare Blast", "High-Pitch Screech", "Tear Down",
            "Phantom Slash", "Raging Flame", "Tricky Tactics", "Mud Spatter", "Rejuvenate",
            "Savage Greed", "Coconut Bomb", "Blaze Chomp", "Primal Slash", "Blaze Punch", "Ill Will",
            "Mudslide", "Charred Claws", "Blaze Rush", "Blaze of Glory"
        ]
    },

    festifir: {
        name: "Festifir",
        types: ["Ice", "Plant"],
        abilities: ["Chill", "Parting Gift"],
        sAbility: ["Regift"],
        weight: 68,
        height: 81,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 128,
            energy: 101,
            attack: 119,
            defense: 71,
            attackR: 46,
            defenseR: 98,
            speed: 22
        },
        movepool: [
            "Petal Pummel", "Flurry", "Brace", "Spare", "Leaf Barrage", "Snowdozer", "Sap Plant",
            "Icicle Trap", "Bush Whack", "Briar Block", "Ice Hammer", "Thistle Slash", "Brawn Boost",
            "Earthquake", "Raging Tackle", "Timber Thrash", "Tricky Tactics", "Dodge", "Frost Beam",
            "Hypnotize", "Ill Will", "Rejuvenate", "Fungus Curse", "Spare", "Vine Lash"
        ]
    },

    igneol: {
        name: "Igneol",
        number: 66,
        types: ["Ancient"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Resilience"],
        finalEvo: false,
        tier: "LC",
        weight: 15,
        height: 25,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 62,
            energy: 75,
            attack: 60,
            defense: 70,
            attackR: 42,
            defenseR: 41,
            speed: 42
        },
        movepool: [
            "Gnaw", "Burrow", "Mud Spatter", "Power Focus", "Headbutt", "Scapegoat", "Raging Tackle",
            "Sharpen", "Primal Slash", "Body Crash", "Body Slam", "Earthquake", "Mega Chomp",
            "Dodge", "Spare", "Mudslide", "Barbs", "Provoke", "Outburst", "Muck Buck"
        ]
    },

    chrysite: {
        name: "Chrysite",
        number: 67,
        types: ["Ancient"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Resilience"],
        finalEvo: false,
        tier: "NFE",
        weight: 77,
        height: 53,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 82,
            energy: 80,
            attack: 64,
            defense: 99,
            attackR: 47,
            defenseR: 46,
            speed: 42
        },
        movepool: [
            "Gnaw", "Burrow", "Mud Spatter", "Power Focus", "Headbutt", "Scapegoat", "Raging Tackle",
            "Sharpen", "Primal Slash", "Body Crash", "Body Slam", "Earthquake", "Mega Chomp",
            "Dodge", "Brace", "Spare", "Mudslide", "Barbs", "Provoke", "Outburst", "Muck Buck"
        ]
    },

    obsidrugon: {
        name: "Obsidrugon",
        number: 68,
        types: ["Ancient"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Resilience"],
        weight: 133,
        height: 101,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 99,
            energy: 100,
            attack: 100,
            defense: 124,
            attackR: 72,
            defenseR: 65,
            speed: 65
        },
        movepool: [
            "Gnaw", "Burrow", "Mud Spatter", "Power Focus", "Headbutt", "Scapegoat", "Raging Tackle",
            "Sharpen", "Primal Slash", "Body Crash", "Body Slam", "Earthquake", "Mega Chomp",
            "Dodge", "Brace", "Beast's Slumber", "Drudge", "Spare", "Mudslide", "Barbs", "Provoke",
            "Outburst", "Muck Buck"
        ]
    },

    'cafnote-female': {
        name: "Cafnote-Female",
        number: 69,
        types: ["Simple"],
        abilities: ["Adorable", "Virtuoso"],
        sAbility: ["Tone Deaf"],
        finalEvo: false,
        tier: "LC",
        weight: 57,
        height: 49,
        gender: ["Female"],
        baseStats: {
            hp: 60,
            energy: 60,
            attack: 42,
            defense: 58,
            attackR: 42,
            defenseR: 62,
            speed: 53
        },
        movepool: [
            "Stare", "Strike", "Spare", "Stretch", "Repeating Tune", "Quick Pounce",
            "Harmonious Chord", "Tease", "Dissonant Chord", "Gamma Pulse", "Peace of Mind",
            "Raging Howl", "Dodge", "Magnify", "Provoke", "Hullabaloo"
        ]
    },

    'cafnote-male': {
        name: "Cafnote-Male",
        number: 69,
        types: ["Simple"],
        abilities: ["Territorial", "Virtuoso"],
        sAbility: ["Brute Force"],
        finalEvo: false,
        tier: "LC",
        weight: 57,
        height: 49,
        gender: ["Male"],
        baseStats: {
            hp: 60,
            energy: 60,
            attack: 42,
            defense: 62,
            attackR: 42,
            defenseR: 58,
            speed: 53
        },
        movepool: [
            "Stare", "Strike", "Spare", "Stretch", "Tone Barrier", "Quick Pounce", "Headbutt",
            "Provoke", "Body Slam", "Driving Force", "Earthquake", "Mega Chomp", "Raging Tackle",
            "Rogue Assault", "Dodge", "Battle Chime"
        ]
    },

    trumbull: {
        name: "Trumbull",
        number: 70,
        types: ["Simple"],
        abilities: ["Territorial", "Virtuoso"],
        sAbility: ["Brute Force"],
        weight: 187,
        height: 70,
        gender: ["Male"],
        baseStats: {
            hp: 92,
            energy: 79,
            attack: 134,
            defense: 102,
            attackR: 52,
            defenseR: 68,
            speed: 73
        },
        movepool: [
            "Stare", "Strike", "Spare", "Stretch", "Tone Barrier", "Quick Pounce", "Headbutt",
            "Provoke", "Body Slam", "Driving Force", "Earthquake", "Mega Chomp", "Raging Tackle",
            "Rogue Assault", "Dodge", "Battle Horn", "Battle Chime"
        ]
    },

    mootune: {
        name: "Mootune",
        number: 71,
        types: ["Simple"],
        abilities: ["Adorable", "Virtuoso"],
        sAbility: ["Tone Deaf"],
        weight: 146,
        height: 68,
        gender: ["Female"],
        baseStats: {
            hp: 92,
            energy: 79,
            attack: 52,
            defense: 79,
            attackR: 134,
            defenseR: 102,
            speed: 62
        },
        movepool: [
            "Stare", "Strike", "Spare", "Stretch", "Repeating Tune", "Quick Pounce",
            "Harmonious Chord", "Tease", "Dissonant Chord", "Gamma Pulse", "Peace of Mind",
            "Raging Howl", "Dodge", "Resonate", "Magnify", "Provoke", "Hullabaloo"
        ]
    },

    gobbidemic: {
        name: "Gobbidemic",
        number: 72,
        types: ["Toxic"],
        abilities: ["Immunized"],
        sAbility: ["Baneful"],
        weight: 43,
        height: 40,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 70,
            energy: 80,
            attack: 35,
            defense: 60,
            attackR: 93,
            defenseR: 64,
            speed: 123
        },
        movepool: [
            "Sting", "Squawk", "Peck", "Corrode", "Stretch", "Slime", "Muck Blast", "Gobble Goop",
            "Air Blade", "Barbs", "Far Enchantment", "Near Enchantment", "Poison", "Poison Barbs",
            "Provoke", "Trip Root", "Wonder Herb", "Bait", "Dodge", "Hypnotize", "Spare", "Gust",
            "Tear Down"
        ]
    },

    icigool: {
        name: "Icigool",
        types: ["Spirit", "Ice"],
        abilities: ["Parting Gift", "Expertise"],
        sAbility: ["Power Jaw"],
        weight: 7,
        height: 43,
        gender: ["Ungendered"],
        baseStats: {
            hp: 95,
            energy: 69,
            attack: 112,
            defense: 94,
            attackR: 35,
            defenseR: 81,
            speed: 39
        },
        movepool: [
            "Bag of Tricks", "Startle", "Snowdozer", "Chomp", "Gain Drain", "Chilly Chomp",
            "Phantom Slash", "Mega Chomp", "Impersonate", "Bane of Haste", "Soul Storm", "Baffle",
            "Blaze Chomp", "Fade Away", "Health Gift", "Ice Hammer", "Icicle Trap", "Thunder Chomp",
            "Tricky Tactics", "Barter", "Dark Surge", "Dodge", "Frost Beam", "Hypnotize", "Ill Will",
            "Rejuvenate", "Spectral Burst", "Spare", "Barbs", "Icicle Fangs"
        ]
    },

    'icigool-incarnate': {
        name: "Icigool-Incarnate",
        types: ["Spirit", "Ice"],
        ability: "Party Trick",
        soulMove: "Frightful Surprise",
        item: "Iciburst",
        weight: 7,
        height: 43,
        gender: ["Ungendered"],
        baseStats: {
            hp: 105,
            energy: 99,
            attack: 132,
            defense: 104,
            attackR: 44,
            defenseR: 91,
            speed: 50
        },
        movepool: [
            "Bag of Tricks", "Startle", "Snowdozer", "Chomp", "Gain Drain", "Chilly Chomp",
            "Phantom Slash", "Mega Chomp", "Impersonate", "Bane of Haste", "Soul Storm", "Baffle",
            "Blaze Chomp", "Fade Away", "Health Gift", "Ice Hammer", "Icicle Trap", "Thunder Chomp",
            "Tricky Tactics", "Barter", "Dark Surge", "Dodge", "Frost Beam", "Hypnotize", "Ill Will",
            "Rejuvenate", "Spectral Burst", "Frightful Surprise", "Spare", "Barbs", "Icicle Fangs"
        ]
    },

    pyramind: {
        name: "Pyramind",
        number: 74,
        types: ["Mind"],
        abilities: ["Idiosyncratic", "Temper"],
        sAbility: ["Contact Curse"],
        finalEvo: false,
        tier: "NFE",
        weight: 113,
        height: 55,
        gender: ["Ungendered"],
        baseStats: {
            hp: 88,
            energy: 60,
            attack: 45,
            defense: 69,
            attackR: 84,
            defenseR: 99,
            speed: 35
        },
        movepool: [
            "Brainwash", "Mind's Eye", "Rant", "Return to Sender", "Boulder Blast", "Peace of Mind",
            "Spectral Burst", "Flabbergast", "Bane of Haste", "Shrewd Blast", "Bulk up", "Landslide",
            "Dark Surge", "Deja Vu", "Draco Beam", "Earthquake", "Gain Drain", "Outburst",
            "Phantom Slash", "Primal Slash", "Provoke", "Psycho Blast", "Rogue Assault",
            "Talent Trade", "Tribute", "Dodge", "Mud Spatter", "Rainbow Blast", "Spare", "Mudslide",
            "Drudge", "Hasten", "Phantom Blast", "Harrow", "Dissipate", "Mind Drain", "Rock Slide",
            "Safeguard", "Hullabaloo", "Climate Cannon", "Tear Down"
        ]
    },

    pharoglyph: {
        name: "Pharoglyph",
        number: 75,
        types: ["Mind"],
        abilities: ["Idiosyncratic", "Temper"],
        sAbility: ["Contact Curse"],
        weight: 166,
        height: 86,
        gender: ["Ungendered"],
        baseStats: {
            hp: 88,
            energy: 100,
            attack: 55,
            defense: 55,
            attackR: 120,
            defenseR: 101,
            speed: 106
        },
        movepool: [
            "Brainwash", "Mind's Eye", "Rant", "Return to Sender", "Boulder Blast", "Peace of Mind",
            "Spectral Burst", "Flabbergast", "Bane of Haste", "Shrewd Blast", "Bulk up", "Landslide",
            "Dark Surge", "Deja Vu", "Draco Beam", "Earthquake", "Gain Drain", "Outburst",
            "Phantom Slash", "Primal Slash", "Provoke", "Psycho Blast", "Rogue Assault",
            "Talent Trade", "Tribute", "Dodge", "Mud Spatter", "Rainbow Blast", "Memorize",
            "Hop Kick", "Cerebral Slash", "Spare", "Judgement", "Mudslide", "Drudge", "Hasten",
            "Phantom Blast", "Harrow", "Dissipate", "Mind Drain", "Rock Slide", "Safeguard",
            "Hullabaloo", "Climate Cannon", "Tear Down"
        ]
    },

    burroach: {
        name: "Burroach",
        number: 76,
        types: ["Bug", "Earth"],
        abilities: ["Trash Armor", "Slimy"],
        sAbility: ["Sharp Claws"],
        finalEvo: false,
        tier: "LC",
        weight: 16,
        height: 15,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 32,
            energy: 60,
            attack: 46,
            defense: 63,
            attackR: 45,
            defenseR: 54,
            speed: 77
        },
        movepool: [
            "Gnaw", "Burrow", "Bug Bite", "Mud Spatter", "Stretch", "Venom Chomp", "Headbutt",
            "Eerie Stare", "Provoke", "Clay Slap", "Parasitize", "Earthquake", "Body Crash",
            "Poison", "Dodge", "Spare", "Slap Down", "Barbs"
        ]
    },

    garbantis: {
        name: "Garbantis",
        number: 77,
        types: ["Bug", "Earth"],
        abilities: ["Trash Armor", "Slimy"],
        sAbility: ["Sharp Claws"],
        weight: 58,
        height: 65,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 55,
            energy: 76,
            attack: 97,
            defense: 115,
            attackR: 54,
            defenseR: 74,
            speed: 104
        },
        movepool: [
            "Gnaw", "Burrow", "Bug Bite", "Mud Spatter", "Stretch", "Venom Chomp", "Headbutt",
            "Eerie Stare", "Provoke", "Clay Slap", "Parasitize", "Earthquake", "Body Crash",
            "Poison", "Dodge", "Battering Ram", "Molt", "Bulk Up", "Spare", "Slap Down", "Barbs"
        ]
    },

    whimpor: {
        name: "Whimpor",
        number: 78,
        types: ["Metal", "Air"],
        abilities: ["Clutch", "Frail Armor"],
        sAbility: ["Toxic Filter"],
        finalEvo: false,
        tier: "LC",
        weight: 32,
        height: 31,
        gender: ["Ungendered"],
        typeVariants: [{ ability: "Toxic Filter", typeChart: "ToxicFilter" }],
        baseStats: {
            hp: 62,
            energy: 58,
            attack: 21,
            defense: 46,
            attackR: 59,
            defenseR: 62,
            speed: 53
        },
        movepool: [
            "Tail Slap", "Metal Swipes", "Brace", "Air Shot", "Body Slam", "Metal Shriek",
            "Cyclone Slam", "Heavy Bash", "Air Blade", "Reflection Burst", "Dissonant Chord",
            "Energy Surge", "Jet Stream", "Jump Start", "Metal Blast", "Perch", "Stun", "Dodge",
            "Spare", "Tear Down"
        ]
    },

    stratusoar: {
        name: "Stratusoar",
        number: 79,
        types: ["Metal", "Air"],
        abilities: ["Clutch", "Frail Armor"],
        sAbility: ["Toxic Filter"],
        weight: 221,
        height: 90,
        gender: ["Ungendered"],
        typeVariants: [{ ability: "Toxic Filter", typeChart: "ToxicFilter" }],
        baseStats: {
            hp: 100,
            energy: 80,
            attack: 49,
            defense: 77,
            attackR: 105,
            defenseR: 108,
            speed: 81
        },
        movepool: [
            "Tail Slap", "Metal Swipes", "Brace", "Air Shot", "Body Slam", "Metal Shriek",
            "Cyclone Slam", "Heavy Bash", "Air Blade", "Reflection Burst", "Dissonant Chord",
            "Energy Surge", "Jet Stream", "Jump Start", "Metal Blast", "Perch", "Stun", "Dodge",
            "Second Wind", "Magnify", "Spare", "Tear Down"
        ]
    },

    'stratusoar-jetwing': {
        name: "Stratusoar-Jetwing",
        number: 79,
        types: ["Metal", "Air"],
        ability: "Turbulent",
        soulMove: "Airstrike",
        item: "Stratuburst",
        weight: 221,
        height: 90,
        gender: ["Ungendered"],
        baseStats: {
            hp: 100,
            energy: 100,
            attack: 61,
            defense: 67,
            attackR: 135,
            defenseR: 78,
            speed: 119
        },
        movepool: [
            "Tail Slap", "Metal Swipes", "Brace", "Air Shot", "Body Slam", "Metal Shriek",
            "Cyclone Slam", "Heavy Bash", "Air Blade", "Reflection Burst", "Dissonant Chord",
            "Energy Surge", "Jet Stream", "Jump Start", "Metal Blast", "Perch", "Stun", "Dodge",
            "Second Wind", "Magnify", "Airstrike", "Spare", "Tear Down"
        ]
    },

    territi: {
        name: "Territi",
        number: 80,
        types: ["Toxic", "Metal"],
        abilities: ["Immunized", "Confidence"],
        sAbility: ["Handy"],
        finalEvo: false,
        tier: "LC",
        weight: 29,
        height: 40,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 51,
            energy: 58,
            attack: 61,
            defense: 44,
            attackR: 59,
            defenseR: 48,
            speed: 52
        },
        movepool: [
            "Corrode", "Dawdle", "Bash", "Punch", "Power Focus", "Hop Kick", "Canister Burst",
            "Heavy Bash", "Paint Shower", "Provoke", "Bag of Tricks", "Baneful Bash",
            "Far Enchantment", "Mega Punch", "Metal Blast", "Muck Blast", "Near Enchantment",
            "Poison", "Square One", "Steel Crusher", "Tricky Tactics", "Barter", "Dodge",
            "Hypnotize", "Spare", "Downpour", "Gale Force", "Stun", "Climate Cannon"
        ]
    },

    dyeborg: {
        name: "Dyeborg",
        number: 81,
        types: ["Toxic", "Metal"],
        abilities: ["Immunized", "Tank"],
        sAbility: ["Handy"],
        weight: 180,
        height: 80,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 78,
            energy: 86,
            attack: 97,
            defense: 83,
            attackR: 93,
            defenseR: 87,
            speed: 68
        },
        movepool: [
            "Corrode", "Dawdle", "Bash", "Punch", "Power Focus", "Hop Kick", "Canister Burst",
            "Heavy Bash", "Paint Shower", "Provoke", "Bag of Tricks", "Baneful Bash",
            "Far Enchantment", "Mega Punch", "Metal Blast", "Muck Blast", "Near Enchantment",
            "Poison", "Square One", "Steel Crusher", "Tricky Tactics", "Barter", "Dodge",
            "Hypnotize", "Graffiti", "Spare", "Downpour", "Gale Force", "Stun", "Climate Cannon"
        ]
    },

    operaptor: {
        name: "Operaptor",
        number: 82,
        types: ["Metal", "Earth"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Staunch"],
        finalEvo: false,
        tier: "LC",
        weight: 39,
        height: 42,
        gender: ["Ungendered"],
        baseStats: {
            hp: 53,
            energy: 67,
            attack: 64,
            defense: 61,
            attackR: 45,
            defenseR: 53,
            speed: 49
        },
        movepool: [
            "Gnaw", "Clamp", "Burrow", "Chomp", "Headbutt", "Power Focus", "Quicksand", "Slumber",
            "Body Slam", "Heavy Bash", "Metal Shriek", "Earthquake", "Sharpen", "Steel Crusher",
            "Tear Down", "Thunder Chomp", "Vice Jaws", "Dodge", "Mud Spatter", "Spare"
        ]
    },

    concredon: {
        name: "Concredon",
        number: 83,
        types: ["Metal", "Earth"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Staunch"],
        finalEvo: false,
        tier: "NFE",
        weight: 106,
        height: 71,
        gender: ["Ungendered"],
        baseStats: {
            hp: 77,
            energy: 77,
            attack: 84,
            defense: 69,
            attackR: 53,
            defenseR: 64,
            speed: 66
        },
        movepool: [
            "Gnaw", "Clamp", "Burrow", "Chomp", "Headbutt", "Power Focus", "Quicksand", "Slumber",
            "Body Slam", "Heavy Bash", "Metal Shriek", "Earthquake", "Sharpen", "Steel Crusher",
            "Tear Down", "Thunder Chomp", "Vice Jaws", "Dodge", "Mud Spatter", "Clay Slap", "Spare"
        ]
    },

    tyrecks: {
        name: "Tyrecks",
        number: 84,
        types: ["Metal", "Earth"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Staunch"],
        weight: 405,
        height: 118,
        gender: ["Ungendered"],
        baseStats: {
            hp: 89,
            energy: 94,
            attack: 111,
            defense: 102,
            attackR: 72,
            defenseR: 83,
            speed: 74
        },
        movepool: [
            "Gnaw", "Clamp", "Burrow", "Chomp", "Headbutt", "Power Focus", "Quicksand", "Slumber",
            "Body Slam", "Heavy Bash", "Metal Shriek", "Earthquake", "Sharpen", "Steel Crusher",
            "Tear Down", "Thunder Chomp", "Vice Jaws", "Dodge", "Mud Spatter", "Clay Slap",
            "Complete Demolition", "Spare"
        ]
    },

    chompactor: {
        name: "Chompactor",
        number: 85,
        types: ["Metal"],
        abilities: ["Salvage", "Rev Up"],
        sAbility: ["Specialization"],
        finalEvo: false,
        tier: "LC",
        weight: 24,
        height: 28,
        gender: ["Ungendered"],
        baseStats: {
            hp: 58,
            energy: 55,
            attack: 61,
            defense: 73,
            attackR: 32,
            defenseR: 51,
            speed: 45
        },
        movepool: [
            "Gnaw", "Aim", "Metal Swipes", "Oil Leak", "Chomp", "Bash", "Double Whack",
            "Quick Punch", "Mega Chomp", "Bulk Up", "Barbs", "Blaze Chomp", "Chilly Chomp",
            "Recycle", "Steel Crusher", "Thunder Chomp", "Vice Jaws", "Dodge", "Spare", "Aqua Jaws",
            "Accelerate", "Poison"
        ]
    },

    munchweel: {
        name: "Munchweel",
        number: 86,
        types: ["Metal"],
        abilities: ["Salvage", "Rev Up"],
        sAbility: ["Specialization"],
        weight: 193,
        height: 79,
        gender: ["Ungendered"],
        formerNames: ["Munchwheel"],
        icon: "munchwheel",
        baseStats: {
            hp: 94,
            energy: 79,
            attack: 104,
            defense: 113,
            attackR: 52,
            defenseR: 78,
            speed: 66
        },
        movepool: [
            "Gnaw", "Aim", "Metal Swipes", "Oil Leak", "Chomp", "Bash", "Double Whack",
            "Quick Punch", "Mega Chomp", "Bulk Up", "Barbs", "Blaze Chomp", "Chilly Chomp",
            "Recycle", "Steel Crusher", "Thunder Chomp", "Vice Jaws", "Dodge", "Heavy Bash", "Spare",
            "Clean Up", "Aqua Jaws", "Accelerate", "Poison"
        ]
    },

    scorb: {
        name: "Scorb",
        number: 87,
        types: ["Metal"],
        abilities: ["Communication"],
        sAbility: ["Clutch"],
        finalEvo: false,
        tier: "LC",
        weight: 11,
        height: 15,
        gender: ["Ungendered"],
        baseStats: {
            hp: 49,
            energy: 55,
            attack: 25,
            defense: 42,
            attackR: 67,
            defenseR: 45,
            speed: 77
        },
        movepool: ["Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine", "Dodge", "Spare"]
    },

    veylens: {
        name: "Veylens",
        number: 88,
        types: ["Metal"],
        abilities: ["Communication"],
        sAbility: ["Clutch"],
        finalEvo: false,
        tier: "NFE",
        weight: 24,
        height: 50,
        gender: ["Ungendered"],
        baseStats: {
            hp: 57,
            energy: 64,
            attack: 28,
            defense: 56,
            attackR: 88,
            defenseR: 67,
            speed: 55
        },
        movepool: [
            "Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine", "Dodge",
            "Heavy Bash", "Reflection Burst", "Accelerate", "Thunder Slam", "Precision Bolt",
            "Fire Slam", "Raging Flame", "Snowdozer", "Sleet Shot", "Eerie Stare", "Mind's Eye",
            "Deep Freeze", "Spare"
        ]
    },

    gardrone: {
        name: "Gardrone",
        number: 89,
        types: ["Metal"],
        abilities: ["Communication"],
        sAbility: ["Clutch"],
        weight: 67,
        height: 74,
        gender: ["Ungendered"],
        typeVariants: [{ ability: "Hover", typeChart: "Hover" }],
        baseStats: {
            hp: 74,
            energy: 82,
            attack: 54,
            defense: 73,
            attackR: 132,
            defenseR: 119,
            speed: 61
        },
        movepool: [
            "Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine", "Dodge",
            "Heavy Bash", "Reflection Burst", "Accelerate", "Thunder Slam", "Precision Bolt",
            "Fire Slam", "Spare", "Raging Flame", "Snowdozer", "Sleet Shot", "Eerie Stare",
            "Mind's Eye", "Deep Freeze", "Jump Start", "Metal Blast", "Steel Crusher",
            "Thunderstrike", "Fire Breath", "Frost Beam"
        ]
    },

    'gardrone-flame': {
        name: "Gardrone-Flame",
        types: ["Metal", "Fire"],
        abilities: ["Communication", "Hover"],
        sAbility: ["Clutch"],
        weight: 67,
        height: 74,
        gender: ["Ungendered"],
        icon: "gardrone",
        typeVariants: [{ ability: "Hover", typeChart: "Hover" }],
        baseStats: {
            hp: 74,
            energy: 82,
            attack: 54,
            defense: 73,
            attackR: 132,
            defenseR: 119,
            speed: 61
        },
        movepool: [
            "Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine", "Dodge",
            "Heavy Bash", "Reflection Burst", "Accelerate", "Thunder Slam", "Precision Bolt",
            "Fire Slam", "Spare", "Raging Flame", "Snowdozer", "Sleet Shot", "Eerie Stare",
            "Mind's Eye", "Deep Freeze", "Jump Start", "Metal Blast", "Steel Crusher",
            "Thunderstrike", "Fire Breath", "Frost Beam"
        ]
    },

    'gardrone-freezer': {
        name: "Gardrone-Freezer",
        types: ["Metal", "Ice"],
        abilities: ["Communication", "Hover"],
        sAbility: ["Clutch"],
        weight: 67,
        height: 74,
        gender: ["Ungendered"],
        icon: "gardrone",
        typeVariants: [{ ability: "Hover", typeChart: "Hover" }],
        baseStats: {
            hp: 74,
            energy: 82,
            attack: 54,
            defense: 73,
            attackR: 132,
            defenseR: 119,
            speed: 61
        },
        movepool: [
            "Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine", "Dodge",
            "Heavy Bash", "Reflection Burst", "Accelerate", "Thunder Slam", "Precision Bolt",
            "Fire Slam", "Spare", "Raging Flame", "Snowdozer", "Sleet Shot", "Eerie Stare",
            "Mind's Eye", "Deep Freeze", "Jump Start", "Metal Blast", "Steel Crusher",
            "Thunderstrike", "Fire Breath", "Frost Beam"
        ]
    },

    'gardrone-voltaic': {
        name: "Gardrone-Voltaic",
        types: ["Metal", "Electric"],
        abilities: ["Communication", "Hover"],
        sAbility: ["Clutch"],
        weight: 67,
        height: 74,
        gender: ["Ungendered"],
        icon: "gardrone",
        typeVariants: [{ ability: "Hover", typeChart: "Hover" }],
        baseStats: {
            hp: 74,
            energy: 82,
            attack: 54,
            defense: 73,
            attackR: 132,
            defenseR: 119,
            speed: 61
        },
        movepool: [
            "Bash", "Static Shock", "Singe", "Flurry", "Metal Shriek", "Examine", "Dodge",
            "Heavy Bash", "Reflection Burst", "Accelerate", "Thunder Slam", "Precision Bolt",
            "Fire Slam", "Spare", "Raging Flame", "Snowdozer", "Sleet Shot", "Eerie Stare",
            "Mind's Eye", "Deep Freeze", "Jump Start", "Metal Blast", "Steel Crusher",
            "Thunderstrike", "Fire Breath", "Frost Beam"
        ]
    },

    poochrol: {
        name: "Poochrol",
        number: 90,
        types: ["Metal", "Electric"],
        abilities: ["Brute Force"],
        sAbility: ["Power Jaw"],
        finalEvo: false,
        tier: "LC",
        weight: 9,
        height: 25,
        gender: ["Ungendered"],
        baseStats: {
            hp: 51,
            energy: 51,
            attack: 59,
            defense: 52,
            attackR: 31,
            defenseR: 47,
            speed: 69
        },
        movepool: [
            "Growl", "Static Shock", "Metal Swipes", "Quick Pounce", "Precision Bolt", "Chomp",
            "Sharpen", "Heavy Bash", "Mega Chomp", "Chase Down", "Blaze Chomp", "Chilly Chomp",
            "Tase", "Thunder Chomp", "Vice Jaws", "Dodge", "Mud Spatter", "Thunderstrike", "Spare",
            "Zip-Zap", "Provoke"
        ]
    },

    hunder: {
        name: "Hunder",
        number: 91,
        types: ["Metal", "Electric"],
        abilities: ["Brute Force"],
        sAbility: ["Power Jaw"],
        weight: 43,
        height: 54,
        gender: ["Ungendered"],
        baseStats: {
            hp: 78,
            energy: 84,
            attack: 94,
            defense: 83,
            attackR: 63,
            defenseR: 69,
            speed: 116
        },
        movepool: [
            "Growl", "Static Shock", "Metal Swipes", "Quick Pounce", "Precision Bolt", "Chomp",
            "Sharpen", "Heavy Bash", "Mega Chomp", "Chase Down", "Blaze Chomp", "Chilly Chomp",
            "Tase", "Thunder Chomp", "Vice Jaws", "Dodge", "Mud Spatter", "Thunderstrike", "Spare",
            "Zip-Zap", "Provoke"
        ]
    },

    goppie: {
        name: "Goppie",
        number: 93,
        types: ["Water"],
        abilities: ["Apprehension", "Adorable"],
        sAbility: ["Quick Recovery"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 17,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 48,
            energy: 54,
            attack: 33,
            defense: 45,
            attackR: 53,
            defenseR: 46,
            speed: 64
        },
        movepool: [
            "Strike", "Dawdle", "Spray", "Flurry", "Chomp", "Stare", "Body Slam", "Water Bomb",
            "Rant", "Eerie Stare", "Tsunami", "Dark Surge", "Frost Beam", "Magnify", "Dodge",
            "Ill Will", "Maroon", "Plunge", "Rejuvenate", "Rainbow Blast", "Spare", "Zip-Zap",
            "Hydro Blast"
        ]
    },

    arapaigo: {
        name: "Arapaigo",
        number: 94,
        types: ["Water"],
        abilities: ["Apprehension", "Finese"],
        sAbility: ["Quick Recovery"],
        weight: 63,
        height: 99,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 95,
            energy: 79,
            attack: 51,
            defense: 84,
            attackR: 104,
            defenseR: 84,
            speed: 105
        },
        movepool: [
            "Strike", "Dawdle", "Spray", "Flurry", "Chomp", "Stare", "Body Slam", "Water Bomb",
            "Rant", "Eerie Stare", "Tsunami", "Dark Surge", "Frost Beam", "Magnify", "Dodge",
            "Ill Will", "Maroon", "Plunge", "Rejuvenate", "Rainbow Blast", "Hydro Slash",
            "Sleet Shot", "Spare", "Zip-Zap", "Hydro Blast"
        ]
    },

    pyke: {
        name: "Pyke",
        number: 95,
        types: ["Ancient", "Water"],
        abilities: ["Bitter Touch", "Combative"],
        sAbility: ["Contact Curse"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 23,
        gender: ["Ungendered"],
        baseStats: {
            hp: 64,
            energy: 84,
            attack: 62,
            defense: 58,
            attackR: 33,
            defenseR: 51,
            speed: 68
        },
        movepool: [
            "Tail Slap", "Brace", "Spray", "Chomp", "Confound", "Tease", "Water Bomb", "Baffle",
            "Chilly Chomp", "Aqua Jaws", "Final Ruse", "Mega Chomp", "Primal Slash", "Drudge",
            "Bulk Up", "Charade", "Outburst", "Phantom Slash", "Provoke", "Shadow Sprint",
            "Square One", "Wave Wrecker", "Dodge", "Fade Away", "Ill Will", "Maroon", "Plunge",
            "Spectral Burst", "Tsunami", "Spare", "Icicle Trap", "Hydro Blast", "Harrow",
            "Soul Storm"
        ]
    },

    skelic: {
        name: "Skelic",
        number: 96,
        types: ["Ancient", "Water"],
        abilities: ["Combative", "Bitter Touch"],
        sAbility: ["Contact Curse"],
        weight: 34,
        height: 76,
        gender: ["Ungendered"],
        baseStats: {
            hp: 89,
            energy: 100,
            attack: 104,
            defense: 82,
            attackR: 55,
            defenseR: 73,
            speed: 87
        },
        movepool: [
            "Tail Slap", "Brace", "Spray", "Chomp", "Confound", "Tease", "Water Bomb", "Baffle",
            "Chilly Chomp", "Aqua Jaws", "Final Ruse", "Mega Chomp", "Primal Slash", "Drudge",
            "Bulk Up", "Charade", "Outburst", "Phantom Slash", "Provoke", "Shadow Sprint",
            "Square One", "Wave Wrecker", "Dodge", "Fade Away", "Ill Will", "Maroon", "Plunge",
            "Spectral Burst", "Tsunami", "Piercing Drive", "Spare", "Icicle Trap", "Hydro Blast",
            "Harrow", "Soul Storm"
        ]
    },

    'skelic-seascourge': {
        name: "Skelic-Seascourge",
        number: 96,
        types: ["Ancient", "Water"],
        ability: "Rain Rush",
        soulMove: "Heedless Rush",
        item: "Skeliburst",
        weight: 34,
        height: 76,
        gender: ["Ungendered"],
        baseStats: {
            hp: 109,
            energy: 100,
            attack: 134,
            defense: 92,
            attackR: 65,
            defenseR: 78,
            speed: 77
        },
        movepool: [
            "Tail Slap", "Brace", "Spray", "Chomp", "Confound", "Tease", "Water Bomb", "Baffle",
            "Chilly Chomp", "Aqua Jaws", "Final Ruse", "Mega Chomp", "Primal Slash", "Drudge",
            "Bulk Up", "Charade", "Outburst", "Phantom Slash", "Provoke", "Shadow Sprint",
            "Square One", "Wave Wrecker", "Barter", "Dodge", "Fade Away", "Ill Will", "Maroon",
            "Plunge", "Spectral Burst", "Tsunami", "Piercing Drive", "Heedless Rush", "Spare",
            "Hydro Blast", "Harrow", "Soul Storm"
        ]
    },

    zaleo: {
        name: "Zaleo",
        number: 97,
        types: ["Ancient", "Electric"],
        abilities: ["Adorable", "Driven"],
        sAbility: ["Overcharged"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 20,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 73,
            energy: 68,
            attack: 63,
            defense: 55,
            attackR: 55,
            defenseR: 54,
            speed: 52
        },
        movepool: [
            "Static Shock", "Spare", "Dino Claws", "Power Siphon", "Tase", "Precision Bolt",
            "Sharpen", "Thunder Slam", "Shrewd Blast", "Bamboozle", "Primal Slash", "Thunder Crash",
            "Bane of Haste", "Bulk Up", "Clay Slap", "Earthquake", "Jump Start", "Dodge", "Ill Will",
            "Mud Spatter", "Thunderstrike", "Zip-Zap", "Brawn Boost"
        ]
    },

    joltooth: {
        name: "Joltooth",
        number: 98,
        types: ["Ancient", "Electric"],
        abilities: ["Ambush", "Driven"],
        sAbility: ["Overcharged"],
        weight: 62,
        height: 61,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 94,
            energy: 89,
            attack: 126,
            defense: 87,
            attackR: 56,
            defenseR: 84,
            speed: 69
        },
        movepool: [
            "Static Shock", "Spare", "Dino Claws", "Power Siphon", "Tase", "Precision Bolt",
            "Sharpen", "Thunder Slam", "Shrewd Blast", "Bamboozle", "Primal Slash", "Thunder Crash",
            "Bane of Haste", "Bulk Up", "Clay Slap", "Earthquake", "Jump Start", "Dodge", "Ill Will",
            "Mud Spatter", "Thunderstrike", "Thunder Clap", "Zip-Zap", "Brawn Boost"
        ]
    },

    'joltooth-thunderking': {
        name: "Joltooth-Thunderking",
        number: 98,
        types: ["Ancient", "Electric"],
        ability: "Royal Decree",
        soulMove: "Fulgur Fangs",
        item: "Joltburst",
        weight: 62,
        height: 61,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 94,
            energy: 89,
            attack: 136,
            defense: 87,
            attackR: 66,
            defenseR: 84,
            speed: 109
        },
        movepool: [
            "Static Shock", "Spare", "Dino Claws", "Power Siphon", "Tase", "Precision Bolt",
            "Sharpen", "Thunder Slam", "Shrewd Blast", "Bamboozle", "Primal Slash", "Thunder Crash",
            "Bane of Haste", "Bulk Up", "Clay Slap", "Earthquake", "Jump Start", "Bait", "Dodge",
            "Ill Will", "Mud Spatter", "Thunderstrike", "Thunder Clap", "Fulgur Fangs", "Zip-Zap",
            "Brawn Boost"
        ]
    },

    dobo: {
        name: "Dobo",
        number: 99,
        types: ["Ancient", "Fire"],
        abilities: ["Scorching Skin", "Pyro"],
        sAbility: ["Power Napper"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 16,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 58,
            energy: 74,
            attack: 47,
            defense: 44,
            attackR: 71,
            defenseR: 68,
            speed: 58
        },
        movepool: [
            "Singe", "Squawk", "Peck", "Confound", "Dawdle", "Pyrokinesis", "Power Focus",
            "Primal Slash", "Shrewd Blast", "Burn Up", "Fire Breath", "Bane of Haste", "Air Blade",
            "Bequeath", "Draco Beam", "Jet Stream", "Peace of Mind", "Raging Flame",
            "Return to Sender", "Wonder Herb", "Dodge", "Mud Spatter", "Spare", "Provoke",
            "Flare Blast", "Dissipate", "Magnify"
        ]
    },

    infernix: {
        name: "Infernix",
        number: 100,
        types: ["Ancient", "Fire"],
        abilities: ["Scorching Skin", "Pyro"],
        sAbility: ["Power Napper"],
        weight: 39,
        height: 74,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 84,
            energy: 95,
            attack: 57,
            defense: 58,
            attackR: 110,
            defenseR: 117,
            speed: 89
        },
        movepool: [
            "Singe", "Squawk", "Peck", "Confound", "Dawdle", "Pyrokinesis", "Power Focus",
            "Primal Slash", "Shrewd Blast", "Burn Up", "Fire Breath", "Bane of Haste", "Air Blade",
            "Bequeath", "Draco Beam", "Jet Stream", "Peace of Mind", "Raging Flame",
            "Return to Sender", "Wonder Herb", "Dodge", "Mud Spatter", "Phoenix Flame", "Spare",
            "Provoke", "Flare Blast", "Dissipate", "Magnify"
        ]
    },

    kyogo: {
        name: "Kyogo",
        number: 101,
        types: ["Ancient", "Dark"],
        abilities: ["Apprehension"],
        sAbility: ["Replicate"],
        finalEvo: false,
        tier: "LC",
        weight: 10,
        height: 26,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 51,
            energy: 63,
            attack: 55,
            defense: 64,
            attackR: 51,
            defenseR: 62,
            speed: 74
        },
        movepool: [
            "Gnaw", "Tease", "Chomp", "Dino Claws", "Chop", "Stretch", "Headbutt", "Pilfer",
            "Primal Slash", "Baffle", "Slap Down", "Augment", "Mega Punch", "Barbs", "Bulk Up",
            "Draco Beam", "Poison Barbs", "Power Focus", "Provoke", "Scapegoat", "Scavenge",
            "Venom Chomp", "Barter", "Dodge", "Ill Will", "Mud Spatter", "Spare"
        ]
    },

    dorogo: {
        name: "Dorogo",
        number: 102,
        types: ["Ancient", "Dark"],
        abilities: ["Anomaly"],
        sAbility: ["Surrogate"],
        weight: 31,
        height: 52,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 66,
            energy: 86,
            attack: 86,
            defense: 72,
            attackR: 90,
            defenseR: 69,
            speed: 116
        },
        movepool: [
            "Gnaw", "Tease", "Chomp", "Dino Claws", "Chop", "Stretch", "Headbutt", "Pilfer",
            "Primal Slash", "Baffle", "Slap Down", "Augment", "Mega Punch", "Barbs", "Bulk Up",
            "Draco Beam", "Poison Barbs", "Power Focus", "Provoke", "Scapegoat", "Scavenge",
            "Venom Chomp", "Barter", "Dodge", "Ill Will", "Mud Spatter", "Egg Lob", "Dark Surge",
            "Spare"
        ]
    },

    wiledile: {
        name: "Wiledile",
        number: 103,
        types: ["Water", "Plant"],
        abilities: ["Swampy"],
        sAbility: ["Woodsman"],
        finalEvo: false,
        tier: "LC",
        weight: 25,
        height: 37,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Woodsman", typeChart: "Woodsman" }],
        baseStats: {
            hp: 63,
            energy: 63,
            attack: 74,
            defense: 57,
            attackR: 69,
            defenseR: 50,
            speed: 79
        },
        movepool: [
            "Gnaw", "Growl", "Spray", "Petal Pummel", "Examine", "Chomp", "Sap Plant", "Hydro Slash",
            "Bush Whack", "Aqua Jaws", "Fungus Curse", "Mega Chomp", "Life Drain", "Tsunami",
            "Boom Bash", "Bulk Up", "Driving Force", "Gnarly Gash", "Mudslide", "Photosynthesis",
            "Provoke", "Wave Wrecker", "Dodge", "Ill Will", "Maroon", "Mud Spatter", "Spare",
            "Tear Down", "Vine Lash", "Thistle Slash", "Nature's Force", "Landslide", "Slap Down",
            "Barbs"
        ]
    },

    mawamurk: {
        name: "Mawamurk",
        number: 104,
        types: ["Water", "Plant"],
        abilities: ["Swampy"],
        sAbility: ["Woodsman"],
        weight: 102,
        height: 103,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Woodsman", typeChart: "Woodsman" }],
        baseStats: {
            hp: 119,
            energy: 83,
            attack: 97,
            defense: 92,
            attackR: 94,
            defenseR: 89,
            speed: 41
        },
        movepool: [
            "Gnaw", "Growl", "Spray", "Petal Pummel", "Examine", "Chomp", "Sap Plant", "Hydro Slash",
            "Bush Whack", "Aqua Jaws", "Fungus Curse", "Mega Chomp", "Life Drain", "Tsunami",
            "Boom Bash", "Bulk Up", "Driving Force", "Gnarly Gash", "Mudslide", "Photosynthesis",
            "Provoke", "Wave Wrecker", "Dodge", "Ill Will", "Maroon", "Mud Spatter", "Marsh Wave",
            "Spare", "Tear Down", "Vine Lash", "Thistle Slash", "Nature's Force", "Landslide",
            "Slap Down", "Barbs"
        ]
    },

    ampole: {
        name: "Ampole",
        number: 105,
        types: ["Electric"],
        abilities: ["Watcher", "Specialization"],
        sAbility: ["Sly"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 44,
            energy: 55,
            attack: 33,
            defense: 41,
            attackR: 35,
            defenseR: 42,
            speed: 69
        },
        movepool: [
            "Strike", "Static Shock", "Stretch", "Spare", "Tase", "Thunder Slam", "Power Focus",
            "Quick Pounce", "Jump Start", "Precision Bolt", "Thunderstrike", "Deja Vu", "Mega Punch",
            "Peace of Mind", "Psycho Blast", "Slap Down", "Dodge", "Hypnotize", "Ill Will",
            "Thunderstrike", "Spare", "Zip-Zap", "Thunder Blast", "Judgement"
        ]
    },

    amphiton: {
        name: "Amphiton",
        number: 106,
        types: ["Electric", "Mind"],
        abilities: ["Watcher", "Specialization"],
        sAbility: ["Sly"],
        finalEvo: false,
        tier: "NFE",
        weight: 16,
        height: 31,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 59,
            energy: 72,
            attack: 59,
            defense: 61,
            attackR: 60,
            defenseR: 64,
            speed: 81
        },
        movepool: [
            "Strike", "Static Shock", "Stretch", "Spare", "Tase", "Thunder Slam", "Power Focus",
            "Quick Pounce", "Jump Start", "Precision Bolt", "Thunderstrike", "Deja Vu", "Mega Punch",
            "Peace of Mind", "Psycho Blast", "Slap Down", "Dodge", "Hypnotize", "Ill Will",
            "Thunderstrike", "Flabbergast", "Cerebral Slash", "Zip-Zap", "Thunder Blast",
            "Judgement"
        ]
    },

    meditoad: {
        name: "Meditoad",
        number: 107,
        types: ["Electric", "Mind"],
        abilities: ["Watcher", "Specialization"],
        sAbility: ["Sly"],
        weight: 55,
        height: 56,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 99,
            energy: 86,
            attack: 95,
            defense: 92,
            attackR: 99,
            defenseR: 96,
            speed: 43
        },
        movepool: [
            "Strike", "Static Shock", "Stretch", "Spare", "Tase", "Thunder Slam", "Power Focus",
            "Zip-Zap", "Quick Pounce", "Jump Start", "Precision Bolt", "Thunderstrike", "Deja Vu",
            "Mega Punch", "Peace of Mind", "Psycho Blast", "Slap Down", "Dodge", "Hypnotize",
            "Ill Will", "Thunderstrike", "Flabbergast", "Cerebral Slash", "Psychal Slap",
            "Electro-Punch", "Thunder Blast", "Judgement"
        ]
    },

    pwuff: {
        name: "Pwuff",
        number: 108,
        types: ["Water", "Toxic"],
        abilities: ["Toxic Spines", "Sharp Edges"],
        sAbility: ["Baneful"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 21,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 54,
            attack: 46,
            defense: 71,
            attackR: 47,
            defenseR: 69,
            speed: 49
        },
        movepool: [
            "Tail Slap", "Brace", "Spray", "Flurry", "Tease", "Headbutt", "Water Bomb", "Stretch",
            "Venom Chomp", "Power Focus", "Chilly Chomp", "Hydro Slash", "Baneful Bash",
            "Icicle Trap", "Poison", "Sharpen", "Tsunami", "Wave Wrecker", "Dodge", "Ill Will",
            "Marooon", "Rejuvenate", "Spare", "Brawn Boost"
        ]
    },

    bloatox: {
        name: "Bloatox",
        number: 109,
        types: ["Water", "Toxic"],
        abilities: ["Toxic Spines", "Sharp Edges"],
        sAbility: ["Baneful"],
        weight: 14,
        height: 29,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 93,
            energy: 80,
            attack: 109,
            defense: 91,
            attackR: 57,
            defenseR: 73,
            speed: 82
        },
        movepool: [
            "Tail Slap", "Brace", "Spray", "Flurry", "Tease", "Headbutt", "Water Bomb", "Stretch",
            "Venom Chomp", "Power Focus", "Chilly Chomp", "Hydro Slash", "Baneful Bash",
            "Icicle Trap", "Poison", "Sharpen", "Tsunami", "Wave Wrecker", "Dodge", "Ill Will",
            "Marooon", "Rejuvenate", "Aqua Jaws", "Bulk Up", "Spare", "Bone Crunch", "Brawn Boost"
        ]
    },

    barblast: {
        name: "Barblast",
        number: 109,
        types: ["Water", "Toxic"],
        abilities: ["Toxic Spines", "Parting Gift"],
        sAbility: ["High Explosive"],
        weight: 34,
        height: 30,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 96,
            energy: 88,
            attack: 72,
            defense: 107,
            attackR: 89,
            defenseR: 88,
            speed: 37
        },
        movepool: [
            "Tail Slap", "Brace", "Spray", "Flurry", "Tease", "Headbutt", "Water Bomb", "Stretch",
            "Venom Chomp", "Power Focus", "Chilly Chomp", "Hydro Slash", "Baneful Bash",
            "Icicle Trap", "Poison", "Sharpen", "Tsunami", "Wave Wrecker", "Dodge", "Ill Will",
            "Marooon", "Rejuvenate", "Toxiblast", "Spare", "Brawn Boost"
        ]
    },

    swimp: {
        name: "Swimp",
        number: 111,
        types: ["Water"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Devious"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 25,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 46,
            energy: 60,
            attack: 52,
            defense: 44,
            attackR: 25,
            defenseR: 47,
            speed: 64
        },
        movepool: [
            "Tail Slap", "Stare", "Spray", "Stretch", "Chomp", "Water Bomb", "Charade", "Sleet Shot",
            "Quick Pounce", "Provoke", "Aqua Jaws", "Mega Chomp", "Shrewd Blast", "Clay Slap",
            "Primal Slash", "Tease", "Toxic Tail", "Venom Chomp", "Barter", "Dodge", "Ill Will",
            "Mud Spatter", "Plunge", "Spare", "Wave Wrecker", "Vice Jaws", "Bulk Up"
        ]
    },

    snapr: {
        name: "Snapr",
        number: 112,
        types: ["Water"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Devious"],
        finalEvo: false,
        tier: "NFE",
        weight: 13,
        height: 40,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 58,
            energy: 71,
            attack: 81,
            defense: 63,
            attackR: 31,
            defenseR: 59,
            speed: 72
        },
        movepool: [
            "Tail Slap", "Stare", "Spray", "Stretch", "Chomp", "Water Bomb", "Charade", "Sleet Shot",
            "Quick Pounce", "Provoke", "Aqua Jaws", "Mega Chomp", "Shrewd Blast", "Clay Slap",
            "Primal Slash", "Tease", "Toxic Tail", "Venom Chomp", "Barter", "Dodge", "Ill Will",
            "Mud Spatter", "Plunge", "Chilly Chomp", "Spare", "Wave Wrecker", "Vice Jaws", "Bulk Up"
        ]
    },

    garlash: {
        name: "Garlash",
        number: 113,
        types: ["Water"],
        abilities: ["Terrifying", "Power Jaw"],
        sAbility: ["Devious"],
        weight: 28,
        height: 65,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 87,
            energy: 89,
            attack: 100,
            defense: 84,
            attackR: 63,
            defenseR: 72,
            speed: 100
        },
        movepool: [
            "Tail Slap", "Stare", "Spray", "Stretch", "Chomp", "Water Bomb", "Charade", "Sleet Shot",
            "Quick Pounce", "Provoke", "Aqua Jaws", "Mega Chomp", "Shrewd Blast", "Clay Slap",
            "Primal Slash", "Tease", "Toxic Tail", "Venom Chomp", "Barter", "Dodge", "Ill Will",
            "Mud Spatter", "Plunge", "Chilly Chomp", "Vicious Snap", "Spare", "Wave Wrecker",
            "Vice Jaws", "Bulk Up"
        ]
    },

    hydrini: {
        name: "Hydrini",
        types: ["Bug", "Water"],
        abilities: ["Vivid Sight", "Rain Summon"],
        sAbility: ["Aqua Body"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 14,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Aqua Body", typeChart: "AquaBody" }],
        baseStats: {
            hp: 40,
            energy: 52,
            attack: 41,
            defense: 48,
            attackR: 56,
            defenseR: 56,
            speed: 45
        },
        movepool: [
            "Downpour", "Bug Bite", "Burrow", "Spray", "Spare", "Pester", "Eerie Stare",
            "Water Bomb", "Venom Chomp", "Hydro Slash", "Parasitize", "Pheroblast", "Aqua Jaws",
            "Baneful Bash", "Hydro Blast", "Jet Stream", "Peace of Mind", "Dodge", "Ill Will",
            "Maroon", "Tsunami", "Spare", "Dissipate", "Thunder Chomp", "Counter Poise",
            "Climate Cannon", "Gust"
        ]
    },

    bezeldew: {
        name: "Bezeldew",
        types: ["Bug", "Water"],
        abilities: ["Vivid Sight", "Rain Summon"],
        sAbility: ["Aqua Body"],
        finalEvo: false,
        tier: "NFE",
        weight: 26,
        height: 28,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Aqua Body", typeChart: "AquaBody" }],
        baseStats: {
            hp: 60,
            energy: 65,
            attack: 54,
            defense: 78,
            attackR: 80,
            defenseR: 88,
            speed: 52
        },
        movepool: [
            "Downpour", "Bug Bite", "Burrow", "Spray", "Spare", "Pester", "Eerie Stare",
            "Water Bomb", "Venom Chomp", "Hydro Slash", "Parasitize", "Pheroblast", "Aqua Jaws",
            "Baneful Bash", "Hydro Blast", "Jet Stream", "Peace of Mind", "Dodge", "Ill Will",
            "Counter Poise", "Maroon", "Tsunami", "Clay Slap", "Soft Water", "Dissipate",
            "Thunder Chomp", "Climate Cannon", "Gust"
        ]
    },

    deludrix: {
        name: "Deludrix",
        types: ["Bug", "Water"],
        abilities: ["Vivid Sight", "Rain Summon"],
        sAbility: ["Aqua Body"],
        weight: 57,
        height: 55,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Aqua Body", typeChart: "AquaBody" }],
        baseStats: {
            hp: 60,
            energy: 85,
            attack: 114,
            defense: 58,
            attackR: 122,
            defenseR: 67,
            speed: 94
        },
        movepool: [
            "Downpour", "Bug Bite", "Burrow", "Spray", "Spare", "Pester", "Eerie Stare",
            "Water Bomb", "Venom Chomp", "Hydro Slash", "Parasitize", "Pheroblast", "Aqua Jaws",
            "Baneful Bash", "Hydro Blast", "Jet Stream", "Peace of Mind", "Dodge", "Ill Will",
            "Counter Poise", "Maroon", "Tsunami", "Clay Slap", "Soft Water", "Douse", "Dissipate",
            "Thunder Chomp", "Climate Cannon", "Gust"
        ]
    },

    ceratot: {
        name: "Ceratot",
        types: ["Ancient", "Plant"],
        abilities: ["Frail Armor", "Staunch"],
        sAbility: ["Vigorous"],
        finalEvo: false,
        tier: "LC",
        weight: 29,
        height: 17,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 59,
            energy: 69,
            attack: 56,
            defense: 64,
            attackR: 26,
            defenseR: 42,
            speed: 44
        },
        movepool: [
            "Gnaw", "Stare", "Petal Pummel", "Dino Claws", "Chomp", "Take Root", "Headbutt",
            "Leaf Barrage", "Life Drain", "Sap Plant", "Primal Slash", "Earthquake", "Brawn Boost",
            "Bulk Up", "Mega Chomp", "Outburst", "Rogue Assault", "Dodge", "Ill Will", "Mud Spatter",
            "Spare", "Vine Lash"
        ]
    },

    trepodon: {
        name: "Trepodon",
        types: ["Ancient", "Plant"],
        abilities: ["Frail Armor", "Staunch"],
        sAbility: ["Vigorous"],
        finalEvo: false,
        tier: "NFE",
        weight: 147,
        height: 38,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 74,
            energy: 80,
            attack: 84,
            defense: 86,
            attackR: 32,
            defenseR: 56,
            speed: 48
        },
        movepool: [
            "Gnaw", "Stare", "Petal Pummel", "Dino Claws", "Chomp", "Take Root", "Headbutt",
            "Leaf Barrage", "Life Drain", "Sap Plant", "Primal Slash", "Earthquake", "Brawn Boost",
            "Bulk Up", "Mega Chomp", "Outburst", "Rogue Assault", "Dodge", "Ill Will", "Mud Spatter",
            "Briar Block", "Spare", "Vine Lash"
        ]
    },

    colossotrops: {
        name: "Colossotrops",
        types: ["Ancient", "Plant"],
        abilities: ["Frail Armor", "Staunch"],
        sAbility: ["Vigorous"],
        weight: 348,
        height: 68,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 103,
            energy: 96,
            attack: 124,
            defense: 111,
            attackR: 70,
            defenseR: 67,
            speed: 54
        },
        movepool: [
            "Gnaw", "Stare", "Petal Pummel", "Dino Claws", "Chomp", "Take Root", "Headbutt",
            "Leaf Barrage", "Life Drain", "Sap Plant", "Primal Slash", "Earthquake", "Brawn Boost",
            "Bulk Up", "Mega Chomp", "Outburst", "Rogue Assault", "Dodge", "Ill Will", "Mud Spatter",
            "Briar Block", "Timber Thrash", "Spare", "Vine Lash"
        ]
    },

    cupoink: {
        name: "Cupoink",
        types: ["Fire"],
        abilities: ["Caddie", "Madcap"],
        sAbility: ["Sweet Touch"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 16,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 52,
            energy: 67,
            attack: 65,
            defense: 56,
            attackR: 34,
            defenseR: 64,
            speed: 55
        },
        movepool: [
            "Stare", "Singe", "Pounce", "Tear Down", "Chomp", "Headbutt", "Fire Slam", "Sharpen",
            "Body Slam", "Mega Chomp", "Bait", "Baneful Bash", "Battle Chime", "Muck Buck",
            "Raging Tackle", "Venom Chomp", "Bulk Up", "Dodge", "Ill Will", "Rejuvenate", "Spare",
            "Mudslide", "Blaze of Glory"
        ]
    },

    hoganosh: {
        name: "Hoganosh",
        types: ["Fire"],
        abilities: ["Caddie", "Madcap"],
        sAbility: ["Sweet Touch"],
        weight: 40,
        height: 51,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 84,
            energy: 88,
            attack: 109,
            defense: 90,
            attackR: 57,
            defenseR: 109,
            speed: 41
        },
        movepool: [
            "Stare", "Singe", "Pounce", "Tear Down", "Chomp", "Headbutt", "Fire Slam", "Sharpen",
            "Body Slam", "Mega Chomp", "Bait", "Baneful Bash", "Battle Chime", "Muck Buck",
            "Raging Tackle", "Venom Chomp", "Bulk Up", "Dodge", "Ill Will", "Rejuvenate",
            "Fiery Fondant", "Spare", "Mudslide", "Blaze of Glory"
        ]
    },

    'hoganosh-atomic': {
        name: "Hoganosh-Atomic",
        types: ["Fire"],
        ability: "Gorge",
        soulMove: "Meltdown",
        item: "Noshburst",
        weight: 40,
        height: 51,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 89,
            energy: 93,
            attack: 129,
            defense: 95,
            attackR: 67,
            defenseR: 114,
            speed: 61
        },
        movepool: [
            "Stare", "Singe", "Pounce", "Tear Down", "Chomp", "Headbutt", "Fire Slam", "Sharpen",
            "Body Slam", "Mega Chomp", "Bait", "Baneful Bash", "Battle Chime", "Muck Buck",
            "Raging Tackle", "Venom Chomp", "Bulk Up", "Dodge", "Ill Will", "Rejuvenate",
            "Fiery Fondant", "Spare", "Meltdown", "Mudslide", "Blaze of Glory"
        ]
    },

    mochibi: {
        name: "Mochibi",
        number: 123,
        types: ["Ice"],
        abilities: ["Sugar Rush", "Lucky"],
        sAbility: ["Shakedown"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 51,
            energy: 60,
            attack: 28,
            defense: 53,
            attackR: 65,
            defenseR: 44,
            speed: 79
        },
        movepool: [
            "Strike", "Flurry", "Hop Kick", "Mind's Eye", "Snowdozer", "Tease", "Return to Sender",
            "Sleet Shot", "Bamboozle", "Peace of Mind", "Chilly Chomp", "Icicle Trap", "Boom Bash",
            "Deep Freeze", "Scapegoat", "Dodge", "Frost Beam", "Spare", "Hullabaloo",
            "Nature's Force", "Frost Breath", "Bitter Cold", "Preemptive Strike", "Energy Break"
        ]
    },

    totemochi: {
        name: "Totemochi",
        number: 124,
        types: ["Ice"],
        abilities: ["Sugar Rush", "Lucky"],
        sAbility: ["Shakedown"],
        finalEvo: false,
        tier: "NFE",
        weight: 20,
        height: 38,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 58,
            energy: 84,
            attack: 33,
            defense: 68,
            attackR: 100,
            defenseR: 63,
            speed: 88
        },
        movepool: [
            "Strike", "Flurry", "Hop Kick", "Mind's Eye", "Snowdozer", "Tease", "Return to Sender",
            "Sleet Shot", "Bamboozle", "Peace of Mind", "Chilly Chomp", "Icicle Trap", "Boom Bash",
            "Deep Freeze", "Scapegoat", "Dodge", "Frost Beam", "Charade", "Spare", "Hullabaloo",
            "Nature's Force", "Frost Breath", "Bitter Cold", "Preemptive Strike", "Energy Break"
        ]
    },

    mocho: {
        name: "Mocho",
        number: 125,
        types: ["Ice"],
        abilities: ["Sugar Rush", "Lucky"],
        sAbility: ["Shakedown"],
        weight: 66,
        height: 53,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 71,
            energy: 90,
            attack: 72,
            defense: 102,
            attackR: 120,
            defenseR: 93,
            speed: 67
        },
        movepool: [
            "Strike", "Flurry", "Hop Kick", "Mind's Eye", "Snowdozer", "Tease", "Return to Sender",
            "Sleet Shot", "Bamboozle", "Peace of Mind", "Chilly Chomp", "Icicle Trap", "Boom Bash",
            "Deep Freeze", "Scapegoat", "Dodge", "Frost Beam", "Charade", "Peppermint Breath",
            "Spare", "Hullabaloo", "Nature's Force", "Frost Breath", "Bitter Cold",
            "Preemptive Strike", "Energy Break"
        ]
    },

    gwurm: {
        name: "Gwurm",
        number: 126,
        types: ["Bug"],
        abilities: ["Hard Candy", "Clingy"],
        sAbility: ["Defensive Priority"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 14,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hard Candy", typeChart: "HardCandy" }],
        baseStats: {
            hp: 47,
            energy: 55,
            attack: 27,
            defense: 53,
            attackR: 42,
            defenseR: 41,
            speed: 30
        },
        movepool: [
            "Burrow", "Gnaw", "Bug Bite", "Spare", "Sap Plant", "Eerie Stare", "Provoke",
            "Power Focus", "Pestilence", "Talent Trade", "Pheroblast", "Life Drain", "Poison Barbs",
            "Tamp", "Dodge", "Hypnotize", "Barbs"
        ]
    },

    odasho: {
        name: "Odasho",
        number: 127,
        types: ["Bug"],
        abilities: ["Hard Candy", "Clingy"],
        sAbility: ["Defensive Priority"],
        finalEvo: false,
        tier: "NFE",
        weight: 6,
        height: 35,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hard Candy", typeChart: "HardCandy" }],
        baseStats: {
            hp: 55,
            energy: 60,
            attack: 32,
            defense: 73,
            attackR: 59,
            defenseR: 58,
            speed: 42
        },
        movepool: [
            "Burrow", "Gnaw", "Bug Bite", "Spare", "Sap Plant", "Eerie Stare", "Provoke",
            "Power Focus", "Pestilence", "Talent Trade", "Pheroblast", "Life Drain", "Poison Barbs",
            "Tamp", "Dodge", "Hypnotize", "Pester", "Return to Sender", "Barbs"
        ]
    },

    spreezy: {
        name: "Spreezy",
        number: 128,
        types: ["Bug"],
        abilities: ["Hard Candy", "Clingy"],
        sAbility: ["Sugar Rush"],
        weight: 15,
        height: 38,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hard Candy", typeChart: "HardCandy" }],
        baseStats: {
            hp: 72,
            energy: 95,
            attack: 46,
            defense: 103,
            attackR: 94,
            defenseR: 76,
            speed: 93
        },
        movepool: [
            "Burrow", "Gnaw", "Bug Bite", "Spare", "Sap Plant", "Eerie Stare", "Provoke",
            "Power Focus", "Pestilence", "Talent Trade", "Pheroblast", "Life Drain", "Poison Barbs",
            "Tamp", "Dodge", "Hypnotize", "Pester", "Return to Sender", "Twirly Whirl", "Gust",
            "Barbs", "Jet Stream"
        ]
    },

    pipsee: {
        name: "Pipsee",
        number: 129,
        types: ["Plant", "Air"],
        abilities: ["Glide", "Compliant"],
        sAbility: ["Vigilant"],
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 44,
            energy: 52,
            attack: 30,
            defense: 55,
            attackR: 43,
            defenseR: 49,
            speed: 55
        },
        movepool: [
            "Gale Force", "Petal Pummel", "Brace", "Gust", "Take Root", "Leaf Barrage", "Mind's Eye",
            "Cyclone Slam", "Wonder Herb", "Bequeath", "Sap Plant", "Air Blade", "Life Drain",
            "Jet Stream", "Luster Loot", "Magnify", "Nature's Force", "Photosynthesis",
            "Snore Spores", "Gust", "Static Spores", "Typhoon", "Dodge", "Spare", "Tribute",
            "Hasten", "Climate Cannon"
        ]
    },

    dandylil: {
        name: "Dandylil",
        number: 130,
        types: ["Plant", "Air"],
        abilities: ["Glide", "Compliant"],
        sAbility: ["Vigilant"],
        finalEvo: false,
        tier: "NFE",
        weight: 2,
        height: 31,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 56,
            energy: 79,
            attack: 43,
            defense: 63,
            attackR: 90,
            defenseR: 54,
            speed: 75
        },
        movepool: [
            "Gale Force", "Petal Pummel", "Brace", "Gust", "Take Root", "Leaf Barrage", "Mind's Eye",
            "Cyclone Slam", "Wonder Herb", "Bequeath", "Sap Plant", "Air Blade", "Life Drain",
            "Jet Stream", "Luster Loot", "Magnify", "Nature's Force", "Photosynthesis",
            "Snore Spores", "Gust", "Static Spores", "Typhoon", "Dodge", "Spare", "Pine Shot",
            "Tribute", "Hasten", "Climate Cannon"
        ]
    },

    whippledriff: {
        name: "Whippledriff",
        number: 131,
        types: ["Plant", "Air"],
        abilities: ["Glide", "Compliant"],
        sAbility: ["Vigilant"],
        weight: 3,
        height: 45,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 72,
            energy: 90,
            attack: 53,
            defense: 115,
            attackR: 110,
            defenseR: 71,
            speed: 89
        },
        movepool: [
            "Gale Force", "Petal Pummel", "Brace", "Gust", "Take Root", "Leaf Barrage", "Mind's Eye",
            "Cyclone Slam", "Wonder Herb", "Bequeath", "Sap Plant", "Air Blade", "Life Drain",
            "Jet Stream", "Luster Loot", "Magnify", "Nature's Force", "Photosynthesis",
            "Snore Spores", "Gust", "Static Spores", "Typhoon", "Dodge", "Spare", "Pine Shot",
            "Tempest", "Tribute", "Hasten", "Climate Cannon"
        ]
    },

    vari: {
        name: "Vari",
        types: ["Simple"],
        abilities: ["Guardian", "Apprehension"],
        sAbility: ["Adorable"],
        finalEvo: false,
        tier: "LC",
        weight: 15,
        height: 28,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 49,
            energy: 60,
            attack: 52,
            defense: 43,
            attackR: 52,
            defenseR: 43,
            speed: 57
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Tear Down"
        ]
    },

    cervolen: {
        name: "Cervolen",
        types: ["Simple"],
        abilities: ["Confidence", "Staunch"],
        sAbility: ["Boneheaded"],
        weight: 105,
        height: 68,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 92,
            energy: 85,
            attack: 110,
            defense: 85,
            attackR: 52,
            defenseR: 72,
            speed: 89
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Raging Tackle", "Stampede",
            "Eerie Stare", "Bamboozle", "Bulk Up", "Scapegoat", "Mega Chomp", "Body Crash",
            "Ill Will", "Tear Down"
        ]
    },

    wendolen: {
        name: "Wendolen",
        types: ["Spirit"],
        abilities: ["Gloomy", "Sharp Claws"],
        sAbility: ["Finesse"],
        weight: 86,
        height: 83,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 50,
            energy: 80,
            attack: 119,
            defense: 60,
            attackR: 98,
            defenseR: 75,
            speed: 103
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Final Ruse", "Phantom Slash",
            "Shadow Sprint", "Mega Chomp", "Spectral Burst", "Dazzling Barrage", "Barter",
            "Dark Surge", "Fade Away", "Frost Beam", "Tear Down", "Phantom Blast"
        ]
    },

    kirolen: {
        name: "Kirolen",
        types: ["Ancient"],
        abilities: ["Shakedown", "Hasty"],
        sAbility: ["Devious"],
        weight: 97,
        height: 69,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 78,
            energy: 83,
            attack: 137,
            defense: 69,
            attackR: 73,
            defenseR: 63,
            speed: 82
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Draco Beam", "Outburst",
            "Sharpen", "Fire Slam", "Shrewd Blast", "Rough Up", "Scapegoat", "Primal Slash",
            "Mega Kick", "Fire Breath", "Ill Will", "Rejuvenate", "Tear Down", "Blaze Rush"
        ]
    },

    zepholen: {
        name: "Zepholen",
        types: ["Air"],
        abilities: ["Tumultuous", "Sharp Focus"],
        sAbility: ["Turbulent"],
        weight: 91,
        height: 73,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 70,
            energy: 92,
            attack: 57,
            defense: 90,
            attackR: 123,
            defenseR: 66,
            speed: 87
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Perch", "Gust", "Provoke",
            "Air Blade", "Peace of Mind", "Resonate", "Mudslide", "Mud Spatter", "Tear Down",
            "Typhoon", "Landslide", "Spite"
        ]
    },

    venolen: {
        name: "Venolen",
        types: ["Toxic"],
        abilities: ["Toxic Touch", "Devious"],
        sAbility: ["Baneful"],
        weight: 110,
        height: 77,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 83,
            energy: 90,
            attack: 61,
            defense: 67,
            attackR: 101,
            defenseR: 122,
            speed: 61
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Muck Blast", "Mudslide",
            "Tricky Tactics", "Corrode", "Poison", "Toxic Tail", "Charade", "Slime",
            "Dissonant Chord", "Barter", "Mud Spatter", "Rejuvenate", "Tear Down", "Landslide",
            "Rock Slide"
        ]
    },

    wresolen: {
        name: "Wresolen",
        types: ["Brawler"],
        abilities: ["Ignorant", "Aggressive"],
        sAbility: ["Ace"],
        weight: 156,
        height: 81,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 104,
            energy: 79,
            attack: 130,
            defense: 88,
            attackR: 27,
            defenseR: 79,
            speed: 78
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Electro-Punch",
            "Frost Punch", "Bulk Up", "Blaze Punch", "Driving Force", "Buck Up", "Boom Bash",
            "Pep Jab", "Ill Will", "Tear Down", "Shadowbox"
        ]
    },

    buzzolen: {
        name: "Buzzolen",
        types: ["Bug"],
        abilities: ["Marksman", "Vigorous"],
        sAbility: ["Sweet Aroma"],
        weight: 19,
        height: 38,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 69,
            energy: 100,
            attack: 99,
            defense: 75,
            attackR: 45,
            defenseR: 96,
            speed: 101
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Parasitize", "Poison Barbs",
            "Venom Slash", "Toxic Tail", "Buck Up", "Cyclone Slam", "Baneful Bash", "Nosedive",
            "Tribute", "Barter", "Bulk Up", "Ill Will", "Tear Down", "Double Beat", "Counter Poise",
            "Lunge", "Hyper Sting", "Double Sting"
        ]
    },

    tundrolen: {
        name: "Tundrolen",
        types: ["Ice"],
        abilities: ["MYsterious Cloak", "Insulated"],
        sAbility: ["Resilience"],
        weight: 19,
        height: 38,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Insulated", typeChart: "Insulated" }],
        baseStats: {
            hp: 91,
            energy: 86,
            attack: 91,
            defense: 130,
            attackR: 71,
            defenseR: 66,
            speed: 50
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Chilly Chomp", "Tear Down",
            "Bulk Up", "Icicle Trap", "Body Crash", "Ice Hammer", "Frost Beam", "Ill Will",
            "Rejuvenate", "Mudslide", "Spike Rush", "Blindspot Batter", "Provoke", "Slap Down"
        ]
    },

    pyrolen: {
        name: "Pyrolen",
        types: ["Fire"],
        abilities: ["Volcanic", "Fanning Flame"],
        sAbility: ["Quick Recovery"],
        weight: 19,
        height: 38,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Fanning Flame", typeChart: "FanningFlame" }],
        baseStats: {
            hp: 119,
            energy: 91,
            attack: 34,
            defense: 63,
            attackR: 133,
            defenseR: 79,
            speed: 66
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Flare Blast", "Fire Slam",
            "Tear Down", "Shrewd Blast", "Flaming Kick", "Boom Bash", "Fire Breath", "Ill Will",
            "Mud Spatter", "Peace of Mind", "Rejuvenate", "Mudslide"
        ]
    },

    hydrolen: {
        name: "Hydrolen",
        types: ["Water"],
        abilities: ["Vigilant", "Hydrate"],
        sAbility: ["Luck of The Sea"],
        weight: 70,
        height: 63,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hydrate", typeChart: "Hydrate" }],
        baseStats: {
            hp: 80,
            energy: 85,
            attack: 97,
            defense: 59,
            attackR: 97,
            defenseR: 60,
            speed: 107
        },
        movepool: [
            "Dawdle", "Strike", "Quick Pounce", "Stretch", "Spare", "Headbutt", "Power Focus",
            "Body Slam", "Dodge", "Rainbow Blast", "Adaptive Assault", "Water Bomb", "Tribute",
            "Air Blade", "Hydro Slash", "Thistle Slash", "Tsunami", "Bulk Up", "Ill Will", "Maroon",
            "Peace of Mind", "Plunge", "Tear Down"
        ]
    },

    copling: {
        name: "Copling",
        number: 140,
        types: ["Ancient", "Metal"],
        abilities: ["Oxidize", "Devious"],
        sAbility: ["Playful"],
        finalEvo: false,
        tier: "LC",
        weight: 17,
        height: 14,
        gender: ["Ungendered"],
        baseStats: {
            hp: 34,
            energy: 70,
            attack: 55,
            defense: 61,
            attackR: 25,
            defenseR: 51,
            speed: 99
        },
        movepool: [
            "Confound", "Gnaw", "Metal Swipes", "Tune-Up", "Chomp", "Shrewd Blast", "Metal Shriek",
            "Double Whack", "Headbutt", "Sharpen", "Primal Slash", "Bamboozle", "Bane of Haste",
            "Barbs", "Bulk Up", "Steel Crusher", "Tease", "Vice Jaws", "Dodge", "Ill Will",
            "Rejuvenate", "Spare", "Tear Down", "Safeguard", "Provoke", "Downpour", "Gale Force"
        ]
    },

    copperage: {
        name: "Copperage",
        number: 141,
        types: ["Ancient", "Metal"],
        abilities: ["Oxidize", "Devious"],
        sAbility: ["Playful"],
        finalEvo: false,
        tier: "NFE",
        weight: 40,
        height: 26,
        gender: ["Ungendered"],
        baseStats: {
            hp: 66,
            energy: 80,
            attack: 78,
            defense: 90,
            attackR: 35,
            defenseR: 62,
            speed: 74
        },
        movepool: [
            "Confound", "Gnaw", "Metal Swipes", "Tune-Up", "Chomp", "Shrewd Blast", "Metal Shriek",
            "Double Whack", "Headbutt", "Sharpen", "Primal Slash", "Bamboozle", "Bane of Haste",
            "Barbs", "Bulk Up", "Steel Crusher", "Tease", "Vice Jaws", "Dodge", "Ill Will",
            "Rejuvenate", "Spare", "Heavy Bash", "Driving Force", "Tear Down", "Safeguard",
            "Provoke", "Downpour", "Gale Force"
        ]
    },

    oxidrake: {
        name: "Oxidrake",
        number: 142,
        types: ["Ancient", "Metal"],
        abilities: ["Oxidize", "Devious"],
        sAbility: ["Combative"],
        weight: 166,
        height: 80,
        gender: ["Ungendered"],
        baseStats: {
            hp: 87,
            energy: 90,
            attack: 123,
            defense: 113,
            attackR: 63,
            defenseR: 76,
            speed: 63
        },
        movepool: [
            "Confound", "Gnaw", "Metal Swipes", "Tune-Up", "Chomp", "Shrewd Blast", "Metal Shriek",
            "Double Whack", "Headbutt", "Sharpen", "Primal Slash", "Bamboozle", "Bane of Haste",
            "Barbs", "Bulk Up", "Steel Crusher", "Tease", "Vice Jaws", "Dodge", "Ill Will",
            "Rejuvenate", "Spare", "Heavy Bash", "Driving Force", "Outburst", "Tear Down",
            "Safeguard", "Provoke", "Downpour", "Gale Force"
        ]
    },

    spirivii: {
        name: "Spirivii",
        types: ["Bug", "Spirit"],
        ability: "Life Force",
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 18,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 61,
            energy: 0,
            attack: 44,
            defense: 42,
            attackR: 25,
            defenseR: 33,
            speed: 45
        },
        movepool: [
            "Bug Bite", "Startle", "Gnaw", "Stare", "Chase Down", "Final Ruse", "Swipe", "Stupefy",
            "Eerie Stare", "Pester", "Parasitize", "Soul Storm", "Bulk Up", "Driving Force",
            "Earthquake", "Harrow", "Barter", "Dodge", "Ill Will", "Mud Spatter", "Spare",
            "Spectral Burst", "Tear Down", "Provoke", "Empathize", "Counter Poise", "Brawn Boost",
            "Hazy Shroud", "Psychal Chomp"
        ]
    },

    eidohusk: {
        name: "Eidohusk",
        types: ["Bug", "Spirit"],
        ability: "Life Force",
        finalEvo: false,
        tier: "NFE",
        weight: 13,
        height: 43,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 81,
            energy: 0,
            attack: 44,
            defense: 88,
            attackR: 25,
            defenseR: 62,
            speed: 20
        },
        movepool: [
            "Bug Bite", "Startle", "Gnaw", "Stare", "Chase Down", "Final Ruse", "Swipe", "Stupefy",
            "Eerie Stare", "Pester", "Parasitize", "Soul Storm", "Bulk Up", "Driving Force",
            "Earthquake", "Harrow", "Barter", "Dodge", "Ill Will", "Mud Spatter", "Spare",
            "Spectral Burst", "Brace", "Tear Down", "Provoke", "Empathize", "Counter Poise",
            "Brawn Boost", "Hazy Shroud", "Psychal Chomp"
        ]
    },

    harvesect: {
        name: "Harvesect",
        types: ["Bug", "Spirit"],
        ability: "Life Force",
        weight: 78,
        height: 77,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 116,
            energy: 0,
            attack: 100,
            defense: 119,
            attackR: 57,
            defenseR: 77,
            speed: 56
        },
        movepool: [
            "Bug Bite", "Startle", "Gnaw", "Stare", "Chase Down", "Final Ruse", "Swipe", "Stupefy",
            "Eerie Stare", "Pester", "Parasitize", "Soul Storm", "Bulk Up", "Driving Force",
            "Earthquake", "Harrow", "Barter", "Dodge", "Ill Will", "Mud Spatter", "Spare",
            "Spectral Burst", "Brace", "Soul Harvest", "Icicle Tremor", "Tear Down", "Provoke",
            "Empathize", "Counter Poise", "Brawn Boost", "Hazy Shroud", "Psychal Chomp"
        ]
    },

    snowl: {
        name: "Snowl",
        types: ["Ice"],
        abilities: ["Chill", "Wise"],
        sAbility: ["Glide"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 18,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 15,
            energy: 71,
            attack: 9,
            defense: 20,
            attackR: 12,
            defenseR: 24,
            speed: 59
        },
        movepool: [
            "Snowdozer", "Baffle", "Icicle Trap", "Jet Stream", "Peace of Mind", "Perch", "Rant",
            "Resonate", "Square One", "Dodge", "Spare", "Preemptive Strike", "Brain Exercise"
        ]
    },

    stricicle: {
        name: "Stricicle",
        types: ["Ice", "Air"],
        abilities: ["Chill", "Wise"],
        sAbility: ["Glide"],
        finalEvo: false,
        tier: "NFE",
        weight: 4,
        height: 18,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 48,
            energy: 81,
            attack: 48,
            defense: 58,
            attackR: 86,
            defenseR: 61,
            speed: 70
        },
        movepool: [
            "Snowdozer", "Baffle", "Icicle Trap", "Jet Stream", "Peace of Mind", "Perch", "Rant",
            "Resonate", "Square One", "Dodge", "Spare", "Sleet Shot", "Scavenge", "Chilly Chomp",
            "Power Focus", "Air Whip", "Provoke", "Air Blade", "Frost Beam", "Mud Spatter",
            "Preemptive Strike", "Brain Exercise"
        ]
    },

    wintrix: {
        name: "Wintrix",
        types: ["Ice", "Air"],
        abilities: ["Chill", "Wise"],
        sAbility: ["Glide"],
        weight: 4,
        height: 18,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 81,
            energy: 92,
            attack: 63,
            defense: 86,
            attackR: 114,
            defenseR: 85,
            speed: 94
        },
        movepool: [
            "Snowdozer", "Baffle", "Icicle Trap", "Jet Stream", "Peace of Mind", "Perch", "Rant",
            "Resonate", "Square One", "Dodge", "Spare", "Sleet Shot", "Scavenge", "Chilly Chomp",
            "Power Focus", "Air Whip", "Provoke", "Air Blade", "Frost Beam", "Mud Spatter",
            "Brain Freeze", "Preemptive Strike", "Brain Exercise"
        ]
    },

    snagull: {
        name: "Snagull",
        types: ["Air"],
        abilities: ["Immunized", "Clingy"],
        sAbility: ["Marksman"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 23,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 68,
            energy: 60,
            attack: 42,
            defense: 53,
            attackR: 81,
            defenseR: 58,
            speed: 78
        },
        movepool: [
            "Peck", "Gnaw", "Squawk", "Stretch", "Air Shot", "Scavenge", "Provoke", "Poison",
            "Eerie Stare", "Air Blade", "Jet Stream", "Perch", "Buck Up", "Muck Blast", "Nab",
            "Raging Howl", "Barter", "Dodge", "Spare", "Maroon", "Tear Down", "Gale Force",
            "Typhoon", "Gust"
        ]
    },

    snagulp: {
        name: "Snagulp",
        types: ["Air", "Toxic"],
        abilities: ["Immunized", "Clingy"],
        sAbility: ["Marksman"],
        finalEvo: false,
        tier: "NFE",
        weight: 10,
        height: 27,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 59,
            energy: 79,
            attack: 50,
            defense: 59,
            attackR: 91,
            defenseR: 69,
            speed: 98
        },
        movepool: [
            "Peck", "Gnaw", "Squawk", "Stretch", "Air Shot", "Scavenge", "Provoke", "Poison",
            "Eerie Stare", "Air Blade", "Jet Stream", "Perch", "Buck Up", "Muck Blast", "Nab",
            "Raging Howl", "Barter", "Dodge", "Spare", "Venom Chomp", "Slime", "Maroon", "Tear Down",
            "Gale Force", "Typhoon", "Gust"
        ]
    },

    snagoop: {
        name: "Snagoop",
        types: ["Air", "Toxic"],
        abilities: ["Immunized", "Clingy"],
        sAbility: ["Marksman"],
        weight: 21,
        height: 66,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 50,
            energy: 89,
            attack: 68,
            defense: 77,
            attackR: 121,
            defenseR: 94,
            speed: 108
        },
        movepool: [
            "Peck", "Gnaw", "Squawk", "Stretch", "Air Shot", "Scavenge", "Provoke", "Poison",
            "Eerie Stare", "Air Blade", "Jet Stream", "Perch", "Buck Up", "Muck Blast", "Nab",
            "Raging Howl", "Barter", "Dodge", "Spare", "Venom Chomp", "Slime", "Poison Barbs",
            "Maroon", "Tear Down", "Gale Force", "Typhoon", "Gust"
        ]
    },

    makame: {
        name: "Makame",
        types: ["Water"],
        abilities: ["Tone Deaf", "Frail Armor"],
        sAbility: ["Quick Recovery"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 17,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 44,
            energy: 59,
            attack: 30,
            defense: 76,
            attackR: 51,
            defenseR: 43,
            speed: 30
        },
        movepool: [
            "Spray", "Brace", "Examine", "Soft Water", "Repeating Tune", "Water Bomb",
            "Chilly Chomp", "Harmonious Chord", "Charade", "Dissonant Chord", "Sleet Shot", "Maroon",
            "Battle Horn", "Body Crash", "Peace of Mind", "Rant", "Rejuvenate", "Dodge",
            "Frost Beam", "Plunge", "Spare", "Tsunami"
        ]
    },

    makoro: {
        name: "Makoro",
        types: ["Water"],
        abilities: ["Tone Deaf", "Frail Armor"],
        sAbility: ["Quick Recovery"],
        finalEvo: false,
        tier: "NFE",
        weight: 22,
        height: 40,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 71,
            energy: 70,
            attack: 38,
            defense: 101,
            attackR: 75,
            defenseR: 57,
            speed: 32
        },
        movepool: [
            "Spray", "Brace", "Examine", "Soft Water", "Repeating Tune", "Water Bomb",
            "Chilly Chomp", "Harmonious Chord", "Charade", "Dissonant Chord", "Sleet Shot", "Maroon",
            "Battle Horn", "Body Crash", "Peace of Mind", "Rant", "Rejuvenate", "Dodge",
            "Frost Beam", "Plunge", "Spare", "Tsunami", "Aqua Jaws"
        ]
    },

    tsukame: {
        name: "Tsukame",
        types: ["Water"],
        abilities: ["Tone Deaf", "Frail Armor"],
        sAbility: ["Quick Recovery"],
        weight: 135,
        height: 78,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 91,
            energy: 80,
            attack: 67,
            defense: 120,
            attackR: 116,
            defenseR: 77,
            speed: 34
        },
        movepool: [
            "Spray", "Brace", "Examine", "Soft Water", "Repeating Tune", "Water Bomb",
            "Chilly Chomp", "Harmonious Chord", "Charade", "Dissonant Chord", "Sleet Shot", "Maroon",
            "Battle Horn", "Body Crash", "Peace of Mind", "Rant", "Rejuvenate", "Dodge",
            "Frost Beam", "Plunge", "Spare", "Tsunami", "Aqua Jaws", "Resonate", "Sea Song"
        ]
    },

    cavenish: {
        name: "Cavenish",
        types: ["Water", "Plant"],
        abilities: ["Conspire", "Bully"],
        sAbility: ["Sly"],
        finalEvo: false,
        tier: "LC",
        weight: 3,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 61,
            energy: 66,
            attack: 31,
            defense: 79,
            attackR: 61,
            defenseR: 52,
            speed: 86
        },
        movepool: [
            "Spray", "Petal Pummel", "Sap Plant", "Pounce", "Water Bomb", "Leaf Barrage", "Tease",
            "Wonder Herb", "Life Drain", "Baffle", "Maroon", "Charade", "Nature's Force",
            "Photosynthesis", "Provoke", "Scapegoat", "Slap Down", "Tear Down", "Tsunami", "Dodge",
            "Frost Beam", "Plunge", "Spare", "Banana Split", "Magnify"
        ]
    },

    banfino: {
        name: "Banfino",
        types: ["Water", "Plant"],
        abilities: ["Conspire", "Bully"],
        sAbility: ["Sly"],
        finalEvo: false,
        tier: "NFE",
        weight: 83,
        height: 87,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 72,
            energy: 79,
            attack: 58,
            defense: 97,
            attackR: 103,
            defenseR: 71,
            speed: 109
        },
        movepool: [
            "Spray", "Petal Pummel", "Sap Plant", "Pounce", "Water Bomb", "Leaf Barrage", "Tease",
            "Wonder Herb", "Life Drain", "Baffle", "Maroon", "Charade", "Nature's Force",
            "Photosynthesis", "Provoke", "Scapegoat", "Slap Down", "Tear Down", "Tsunami", "Dodge",
            "Frost Beam", "Plunge", "Spare", "Harvest", "Banana Split", "Magnify"
        ]
    },

    kanki: {
        name: "Kanki",
        types: ["Water", "Brawler"],
        abilities: ["Madcap", "Aggressive"],
        sAbility: ["Ambush"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 17,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 43,
            energy: 50,
            attack: 82,
            defense: 66,
            attackR: 5,
            defenseR: 44,
            speed: 63
        },
        movepool: [
            "Spray", "Strike", "Swat", "Swipe", "Sharpen", "Hydro Slash", "Bludgeon", "Chase Down",
            "Eerie Stare", "Bulk Up", "Piercing Drive", "Rough Up", "Body Slam", "Wave Wrecker",
            "Driving Force", "Ice Hammer", "Raging Tackle", "Ill Will"
        ]
    },

    kanibo: {
        name: "Kanibo",
        types: ["Water", "Brawler"],
        abilities: ["Madcap", "Aggressive"],
        sAbility: ["Ambush"],
        weight: 47,
        height: 51,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 68,
            energy: 97,
            attack: 125,
            defense: 103,
            attackR: 39,
            defenseR: 73,
            speed: 80
        },
        movepool: [
            "Spray", "Strike", "Swat", "Swipe", "Sharpen", "Hydro Slash", "Bludgeon", "Chase Down",
            "Eerie Stare", "Bulk Up", "Piercing Drive", "Rough Up", "Body Slam", "Wave Wrecker",
            "Driving Force", "Ice Hammer", "Raging Tackle", "Ill Will", "Clawber"
        ]
    },

    sharpod: {
        name: "Sharpod",
        types: ["Water", "Metal"],
        abilities: ["Rev Up", "Terrifying"],
        sAbility: ["Frenzy"],
        finalEvo: false,
        tier: "LC",
        weight: 52,
        height: 28,
        gender: ["Genderless"],
        baseStats: {
            hp: 82,
            energy: 77,
            attack: 99,
            defense: 62,
            attackR: 25,
            defenseR: 48,
            speed: 75
        },
        movepool: [
            "Spray", "Tune-Up", "Metal Swipes", "Provoke", "Chomp", "Bash", "Sharpen", "Water Bomb",
            "Baffle", "Aqua Jaws", "Double Whack", "Wave Wrecker", "Steel Crusher", "Thunder Chomp",
            "Vice Jaws", "Dodge", "Fade Away", "Ill Will", "Mud Spatter", "Plunge", "Spare",
            "Tsunami"
        ]
    },

    samarine: {
        name: "Samarine",
        types: ["Water", "Metal"],
        abilities: ["Rev Up", "Terrifying"],
        sAbility: ["Frenzy"],
        weight: 290,
        height: 66,
        gender: ["Genderless"],
        baseStats: {
            hp: 120,
            energy: 87,
            attack: 117,
            defense: 82,
            attackR: 58,
            defenseR: 64,
            speed: 80
        },
        movepool: [
            "Spray", "Tune-Up", "Metal Swipes", "Provoke", "Chomp", "Bash", "Sharpen", "Water Bomb",
            "Baffle", "Aqua Jaws", "Double Whack", "Wave Wrecker", "Steel Crusher", "Thunder Chomp",
            "Vice Jaws", "Dodge", "Fade Away", "Ill Will", "Mud Spatter", "Plunge", "Spare",
            "Tsunami"
        ]
    },

    lumica: {
        name: "Lumica",
        types: ["Water"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Repugnant"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 10,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 66,
            energy: 85,
            attack: 69,
            defense: 63,
            attackR: 33,
            defenseR: 71,
            speed: 15
        },
        movepool: [
            "Sting", "Spray", "Brace", "Water Bomb", "Sharpen", "Headbutt", "Poison Barbs",
            "Eerie Stare", "Hydro Slash", "Barbs", "Tamp", "Icicle Trap", "Blindspot Batter",
            "Bulk Up", "Piercing Drive", "Provoke", "Slumber", "Tear Down", "Wave Wrecker", "Dodge",
            "Spare", "Hypnotize", "Scapegoat", "Square One"
        ]
    },

    lumello: {
        name: "Lumello",
        types: ["Water"],
        abilities: ["Premonition", "Sharp Edges"],
        sAbility: ["Repugnant"],
        weight: 17,
        height: 14,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 100,
            energy: 100,
            attack: 99,
            defense: 106,
            attackR: 62,
            defenseR: 96,
            speed: 15
        },
        movepool: [
            "Sting", "Spray", "Brace", "Water Bomb", "Sharpen", "Headbutt", "Poison Barbs",
            "Eerie Stare", "Hydro Slash", "Barbs", "Tamp", "Icicle Trap", "Blindspot Batter",
            "Bulk Up", "Piercing Drive", "Provoke", "Slumber", "Tear Down", "Wave Wrecker", "Dodge",
            "Spare", "Hypnotize", "Baneful Bash", "Scapegoat", "Square One"
        ]
    },

    polypi: {
        name: "Polypi",
        types: ["Water", "Light"],
        abilities: ["Temper", "Enchanted Coat"],
        sAbility: ["Incandescent"],
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 8,
        gender: ["Ungendered"],
        baseStats: {
            hp: 42,
            energy: 77,
            attack: 10,
            defense: 24,
            attackR: 54,
            defenseR: 54,
            speed: 39
        },
        movepool: [
            "Spray", "Dawdle", "Shine", "Disperse", "Flash", "Water Bomb", "Soft Water",
            "Energy Surge", "Maroon", "Magnify", "Provoke", "Gamma Pulse", "Deja Vu", "Resonate",
            "Tease", "Dodge", "Flash 'n Flee", "Frost Beam", "Spare", "Tsunami", "Deep Freeze",
            "Stun"
        ]
    },

    laphyra: {
        name: "Laphyra",
        types: ["Water", "Light"],
        abilities: ["Temper", "Enchanted Coat"],
        sAbility: ["Incandescent"],
        finalEvo: false,
        tier: "NFE",
        weight: 5,
        height: 20,
        gender: ["Ungendered"],
        baseStats: {
            hp: 75,
            energy: 88,
            attack: 15,
            defense: 44,
            attackR: 72,
            defenseR: 85,
            speed: 71
        },
        movepool: [
            "Spray", "Dawdle", "Shine", "Disperse", "Flash", "Water Bomb", "Soft Water",
            "Energy Surge", "Maroon", "Magnify", "Provoke", "Gamma Pulse", "Deja Vu", "Resonate",
            "Tease", "Dodge", "Flash 'n Flee", "Frost Beam", "Spare", "Tsunami", "Peace of Mind",
            "Deep Freeze", "Stun"
        ]
    },

    jellusa: {
        name: "Jellusa",
        types: ["Water", "Light"],
        abilities: ["Temper", "Enchanted Coat"],
        sAbility: ["Incandescent"],
        weight: 30,
        height: 57,
        gender: ["Ungendered"],
        baseStats: {
            hp: 100,
            energy: 99,
            attack: 58,
            defense: 66,
            attackR: 95,
            defenseR: 100,
            speed: 92
        },
        movepool: [
            "Spray", "Dawdle", "Shine", "Disperse", "Flash", "Water Bomb", "Soft Water",
            "Energy Surge", "Maroon", "Magnify", "Provoke", "Gamma Pulse", "Deja Vu", "Resonate",
            "Tease", "Dodge", "Flash 'n Flee", "Frost Beam", "Spare", "Tsunami", "Peace of Mind",
            "Enamor", "Deep Freeze", "Stun"
        ]
    },

    taoshi: {
        name: "Taoshi",
        number: 140,
        types: ["Simple"],
        abilities: ["Enchanted Coat", "Adorable"],
        sAbility: ["Confidence"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 11,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 70,
            energy: 57,
            attack: 49,
            defense: 64,
            attackR: 18,
            defenseR: 64,
            speed: 50
        },
        movepool: [
            "Gnaw", "Spare", "Dawdle", "Chomp", "Stretch", "Scapegoat", "Swipe", "Quick Pounce",
            "Sharpen", "Bequeath", "Blindspot Batter", "Mega Chomp", "Body Slam", "Bulk Up", "Swat",
            "Tear Down", "Dodge", "Barter", "Mud Spatter", "Rejuvenate", "Dissipate",
            "Far Enchantment", "Near Enchantment", "Augment", "Stun"
        ]
    },

    taoshinu: {
        name: "Taoshinu",
        number: 140,
        types: ["Simple"],
        abilities: ["Enchanted Coat", "Guardian"],
        sAbility: ["Confidence"],
        weight: 29,
        height: 50,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 110,
            energy: 90,
            attack: 93,
            defense: 94,
            attackR: 48,
            defenseR: 89,
            speed: 62
        },
        movepool: [
            "Gnaw", "Spare", "Dawdle", "Chomp", "Stretch", "Scapegoat", "Swipe", "Quick Pounce",
            "Sharpen", "Bequeath", "Blindspot Batter", "Mega Chomp", "Body Slam", "Bulk Up", "Swat",
            "Tear Down", "Dodge", "Barter", "Mud Spatter", "Rejuvenate", "Empathize", "Dissipate",
            "Far Enchantment", "Near Enchantment", "Augment", "Stun"
        ]
    },

    kittone: {
        name: "Kittone",
        number: 140,
        types: ["Simple"],
        abilities: ["Tone Deaf", "Adorable"],
        sAbility: ["Shakedown"],
        finalEvo: false,
        tier: "LC",
        weight: 2,
        height: 9,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 45,
            energy: 65,
            attack: 44,
            defense: 37,
            attackR: 57,
            defenseR: 39,
            speed: 85
        },
        movepool: [
            "Gnaw", "Stare", "Tail Slap", "Stretch", "Quick Pounce", "Harmonious Chord", "Provoke",
            "Repeating Tune", "Peace of Mind", "Rant", "Dissonant Chord", "Magnify", "Resonate",
            "Boom Bash", "Discordance", "Raging Howl", "Splitting Headache", "Swat", "Bait",
            "Barter", "Dodge", "Hypnotize", "Ill Will", "Spare", "Hullabaloo", "Preemptive Strike",
            "Slap Down", "Hasten", "Scapegoat", "Tone Barrier"
        ]
    },

    lyricat: {
        name: "Lyricat",
        number: 140,
        types: ["Simple"],
        abilities: ["Tone Deaf", "Burglar"],
        sAbility: ["Shakedown"],
        weight: 22,
        height: 44,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 90,
            energy: 93,
            attack: 69,
            defense: 62,
            attackR: 107,
            defenseR: 64,
            speed: 101
        },
        movepool: [
            "Gnaw", "Stare", "Tail Slap", "Stretch", "Quick Pounce", "Harmonious Chord", "Provoke",
            "Repeating Tune", "Peace of Mind", "Rant", "Dissonant Chord", "Magnify", "Resonate",
            "Boom Bash", "Discordance", "Raging Howl", "Splitting Headache", "Swat", "Bait",
            "Barter", "Dodge", "Hypnotize", "Ill Will", "Spare", "High-Pitch Screech", "Hullabaloo",
            "Preemptive Strike", "Slap Down", "Hasten", "Scapegoat", "Tone Barrier"
        ]
    },

    boonary: {
        name: "Boonary",
        types: ["Spirit"],
        ability: "Two Face",
        weight: 1,
        height: 10,
        gender: ["Ungendered"],
        baseStats: {
            hp: 64,
            energy: 64,
            attack: 64,
            defense: 64,
            attackR: 64,
            defenseR: 64,
            speed: 64
        },
        movepool: ["Emulate", "Startle", "Stupefy"]
    },

    somata: {
        name: "Somata",
        types: ["Water", "Mind"],
        abilities: ["Repugnant", "Guardian"],
        sAbility: ["Adorable"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 14,
        gender: ["Female"],
        baseStats: {
            hp: 65,
            energy: 70,
            attack: 8,
            defense: 44,
            attackR: 57,
            defenseR: 93,
            speed: 22
        },
        movepool: [
            "Spray", "Brainwash", "Dawdle", "Mind's Eye", "Spare", "Water Bomb", "Bait",
            "Flabbergast", "Peace of Mind", "Dissipate", "Maroon", "Rant", "Deja Vu", "Stratagem",
            "Health Gift", "Dodge", "Rejuvenate", "Tsunami", "Tear Down", "Mind Drain", "Downpour",
            "Wonder Herb", "Gust"
        ]
    },

    clionae: {
        name: "Clionae",
        types: ["Water", "Mind"],
        abilities: ["Repugnant", "Guardian"],
        sAbility: ["Persistence"],
        weight: 33,
        height: 62,
        gender: ["Female"],
        baseStats: {
            hp: 97,
            energy: 91,
            attack: 44,
            defense: 66,
            attackR: 95,
            defenseR: 127,
            speed: 70
        },
        movepool: [
            "Spray", "Brainwash", "Dawdle", "Mind's Eye", "Spare", "Water Bomb", "Bait",
            "Flabbergast", "Peace of Mind", "Dissipate", "Maroon", "Rant", "Deja Vu", "Stratagem",
            "Health Gift", "Dodge", "Rejuvenate", "Tsunami", "Far Enchantment", "Near Enchantment",
            "Tear Down", "Mind Drain", "Downpour", "Wonder Herb", "Gust"
        ]
    },

    cinnaboo: {
        name: "Cinnaboo",
        number: 140,
        types: ["Spirit"],
        abilities: ["Sweet Touch", "Vigilant"],
        sAbility: ["Shakedown"],
        finalEvo: false,
        tier: "LC",
        weight: 9,
        height: 19,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 51,
            energy: 55,
            attack: 11,
            defense: 40,
            attackR: 63,
            defenseR: 60,
            speed: 70
        },
        movepool: [
            "Startle", "Stare", "Stupefy", "Stretch", "Slime", "Mind's Eye", "Headbutt",
            "Spectral Burst", "Provoke", "Fade Away", "Final Ruse", "Bag of Tricks", "Charade",
            "Health Gift", "Muck Blast", "Poison", "Tricky Tactics", "Wonder Herb", "Dodge",
            "Peace of Mind", "Spare", "Tear Down", "Safeguard"
        ]
    },

    cinnogre: {
        name: "Cinnogre",
        number: 140,
        types: ["Spirit"],
        abilities: ["Sweet Touch", "Vigilant"],
        sAbility: ["Shakedown"],
        weight: 110,
        height: 70,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 112,
            energy: 99,
            attack: 55,
            defense: 71,
            attackR: 115,
            defenseR: 86,
            speed: 77
        },
        movepool: [
            "Startle", "Stare", "Stupefy", "Stretch", "Slime", "Mind's Eye", "Headbutt",
            "Spectral Burst", "Provoke", "Fade Away", "Final Ruse", "Bag of Tricks", "Charade",
            "Health Gift", "Muck Blast", "Poison", "Tricky Tactics", "Wonder Herb", "Dodge",
            "Peace of Mind", "Spare", "Spite", "Boom Bash", "Tear Down", "Safeguard"
        ]
    },

    swirelle: {
        name: "Swirelle",
        types: ["Air"],
        ability: "Appetite",
        weight: 9,
        height: 34,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 65,
            energy: 100,
            attack: 65,
            defense: 65,
            attackR: 65,
            defenseR: 65,
            speed: 100
        },
        movepool: [
            "Strike", "Air Shot", "Spare", "Stretch", "Swat", "Quick Pounce", "Scavenge", "Pilfer",
            "Air Blade", "Provoke", "Nosedive", "Perch", "Jet Stream", "Dodge", "Mud Spatter"
        ]
    },

    swishy: {
        name: "Swishy",
        number: 140,
        types: ["Water"],
        abilities: ["Regift", "Gummy"],
        sAbility: ["Viscid"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 27,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 39,
            energy: 53,
            attack: 15,
            defense: 51,
            attackR: 52,
            defenseR: 77,
            speed: 72
        },
        movepool: [
            "Strike", "Spray", "Brace", "Water Bomb", "Provoke", "Examine", "Soft Water", "Maroon",
            "Scapegoat", "Square One", "Mudslide", "Empathize", "Health Gift", "Stratagem",
            "Landslide", "Hydro Blast", "Dodge", "Frost Beam", "Peace of Mind", "Plunge", "Spare",
            "Tsunami"
        ]
    },

    fiscarna: {
        name: "Fiscarna",
        number: 140,
        types: ["Water"],
        abilities: ["Regift", "Gummy"],
        sAbility: ["Viscid"],
        weight: 76,
        height: 86,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 79,
            energy: 88,
            attack: 43,
            defense: 87,
            attackR: 113,
            defenseR: 110,
            speed: 79
        },
        movepool: [
            "Strike", "Spray", "Brace", "Water Bomb", "Provoke", "Examine", "Soft Water", "Maroon",
            "Scapegoat", "Square One", "Mudslide", "Empathize", "Health Gift", "Stratagem",
            "Landslide", "Hydro Blast", "Dodge", "Frost Beam", "Peace of Mind", "Plunge", "Spare",
            "Tsunami", "Recycle", "Gulp"
        ]
    },

    bunpuff: {
        name: "Bunpuff",
        number: 140,
        types: ["Plant", "Earth"],
        abilities: ["Adorable", "Noxious Weeds"],
        sAbility: ["Glutton"],
        finalEvo: false,
        tier: "LC",
        weight: 12,
        height: 30,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Noxious Weeds", typeChart: "NoxiousWeeds" }],
        baseStats: {
            hp: 46,
            energy: 70,
            attack: 22,
            defense: 41,
            attackR: 56,
            defenseR: 51,
            speed: 71
        },
        movepool: [
            "Gnaw", "Petal Pummel", "Burrow", "Quicksand", "Swat", "Leaf Barrage", "Sap Plant",
            "Hop Kick", "Pine Shot", "Tease", "Landslide", "Boom Bash", "Brawn Boost", "Earthquake",
            "Life Drain", "Magnify", "Nature's Force", "Pheroblast", "Poison", "Timber Thrash",
            "Wonder Herb", "Dodge", "Mud Spatter", "Spare"
        ]
    },

    bunnecki: {
        name: "Bunnecki",
        number: 140,
        types: ["Plant", "Earth"],
        abilities: ["Adorable", "Noxious Weeds"],
        sAbility: ["Glutton"],
        weight: 40,
        height: 67,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Noxious Weeds", typeChart: "NoxiousWeeds" }],
        baseStats: {
            hp: 77,
            energy: 94,
            attack: 73,
            defense: 72,
            attackR: 102,
            defenseR: 80,
            speed: 102
        },
        movepool: [
            "Gnaw", "Petal Pummel", "Burrow", "Quicksand", "Swat", "Leaf Barrage", "Sap Plant",
            "Hop Kick", "Pine Shot", "Tease", "Landslide", "Boom Bash", "Brawn Boost", "Earthquake",
            "Life Drain", "Magnify", "Nature's Force", "Pheroblast", "Poison", "Timber Thrash",
            "Wonder Herb", "Dodge", "Mud Spatter", "Spare", "Nab", "Boulder Blast"
        ]
    },

    dractus: {
        name: "Dractus",
        number: 140,
        types: ["Plant"],
        abilities: ["Protective Shell", "Insulated"],
        sAbility: ["Anomaly"],
        finalEvo: false,
        tier: "LC",
        weight: 21,
        height: 33,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Insulated", typeChart: "Insulated" }],
        baseStats: {
            hp: 52,
            energy: 70,
            attack: 87,
            defense: 51,
            attackR: 49,
            defenseR: 49,
            speed: 63
        },
        movepool: [
            "Petal Pummel", "Tail Slap", "Growl", "Bush Whack", "Water Bomb", "Slash",
            "Thistle Slash", "Stretch", "Pine Shot", "Coconut Bomb", "Hydro Slash", "Life Drain",
            "Nature's Force", "Primal Slash", "Shrewd Blast", "Wave Wrecker", "Bulk Up", "Dodge",
            "Ill Will", "Maroon", "Mud Spatter", "Peace of Mind", "Spare", "Provoke", "Body Crash",
            "Barbs", "Tsunami", "Energy Break", "Mudslide", "Splitting Headache", "Wonder Herb",
            "Vine Lash"
        ]
    },

    frutress: {
        name: "Frutress",
        number: 140,
        types: ["Plant"],
        abilities: ["Sharp Edges", "Insulated"],
        sAbility: ["Anomaly"],
        finalEvo: false,
        tier: "NFE",
        weight: 23,
        height: 36,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Insulated", typeChart: "Insulated" }],
        baseStats: {
            hp: 67,
            energy: 80,
            attack: 87,
            defense: 76,
            attackR: 49,
            defenseR: 57,
            speed: 36
        },
        movepool: [
            "Petal Pummel", "Tail Slap", "Growl", "Bush Whack", "Water Bomb", "Slash",
            "Thistle Slash", "Stretch", "Pine Shot", "Coconut Bomb", "Hydro Slash", "Life Drain",
            "Nature's Force", "Primal Slash", "Shrewd Blast", "Wave Wrecker", "Bulk Up", "Dodge",
            "Ill Will", "Maroon", "Mud Spatter", "Peace of Mind", "Spare", "Briar Block",
            "Sap Plant", "Take Root", "Harvest", "Bequeath", "Provoke", "Body Crash", "Barbs",
            "Tsunami", "Energy Break", "Mudslide", "Splitting Headache", "Wonder Herb", "Vine Lash"
        ]
    },

    seedrake: {
        name: "Seedrake",
        number: 140,
        types: ["Plant"],
        abilities: ["Sharp Edges", "Insulated"],
        sAbility: ["Anomaly"],
        finalEvo: false,
        tier: "NFE",
        weight: 171,
        height: 119,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Insulated", typeChart: "Insulated" }],
        baseStats: {
            hp: 81,
            energy: 89,
            attack: 120,
            defense: 89,
            attackR: 97,
            defenseR: 66,
            speed: 83
        },
        movepool: [
            "Petal Pummel", "Tail Slap", "Growl", "Bush Whack", "Water Bomb", "Slash",
            "Thistle Slash", "Stretch", "Pine Shot", "Coconut Bomb", "Hydro Slash", "Life Drain",
            "Nature's Force", "Primal Slash", "Shrewd Blast", "Wave Wrecker", "Bulk Up", "Dodge",
            "Ill Will", "Maroon", "Mud Spatter", "Peace of Mind", "Spare", "Briar Block",
            "Sap Plant", "Take Root", "Harvest", "Bequeath", "Thorn Slam", "Provoke", "Body Crash",
            "Barbs", "Tsunami", "Energy Break", "Mudslide", "Splitting Headache", "Wonder Herb",
            "Vine Lash"
        ]
    },

    volpup: {
        name: "Volpup",
        number: 140,
        types: ["Electric", "Toxic"],
        abilities: ["Aggressive", "Pitch-Black"],
        sAbility: ["Mystery Toxins"],
        finalEvo: false,
        tier: "LC",
        weight: 25,
        height: 37,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 54,
            energy: 78,
            attack: 70,
            defense: 49,
            attackR: 19,
            defenseR: 44,
            speed: 73
        },
        movepool: [
            "Static Shock", "Gnaw", "Stare", "Chomp", "Poison", "Stun", "Swat", "Venom Chomp",
            "Stretch", "Thunder Chomp", "Slash", "Sharpen", "Electro-Punch", "Baneful Bash",
            "Mega Chomp", "Muck Blast", "Primal Slash", "Thunder Crash", "Zip-Zap", "Bulk Up",
            "Dodge", "Ill Will", "Spare", "Thunderstrike"
        ]
    },

    halvantic: {
        name: "Halvantic",
        number: 140,
        types: ["Electric", "Toxic"],
        abilities: ["Aggressive", "Pitch-Black"],
        sAbility: ["Mystery Toxins"],
        weight: 144,
        height: 86,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 123,
            energy: 95,
            attack: 130,
            defense: 71,
            attackR: 51,
            defenseR: 60,
            speed: 85
        },
        movepool: [
            "Static Shock", "Gnaw", "Stare", "Chomp", "Poison", "Stun", "Swat", "Venom Chomp",
            "Stretch", "Thunder Chomp", "Slash", "Sharpen", "Electro-Punch", "Baneful Bash",
            "Mega Chomp", "Muck Blast", "Primal Slash", "Thunder Crash", "Zip-Zap", "Bulk Up",
            "Dodge", "Ill Will", "Spare", "Thunderstrike", "Gnarly Gash"
        ]
    },

    impkin: {
        name: "Impkin",
        types: ["Dark"],
        abilities: ["Resentful", "Devious"],
        sAbility: ["Handy"],
        finalEvo: false,
        tier: "LC",
        weight: 15,
        height: 28,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 54,
            energy: 50,
            attack: 47,
            defense: 29,
            attackR: 71,
            defenseR: 27,
            speed: 72
        },
        movepool: [
            "Startle", "Rant", "Mind's Eye", "Chase Down", "Stretch", "Pilfer", "Tease", "Sharpen",
            "Headbutt", "Deja Vu", "Bamboozle", "Shrewd Blast", "Bag of Tricks", "Charade",
            "Fade Away", "Health Gift", "Memorize", "Power Focus", "Provoke", "Scapegoat",
            "Splitting Headache", "Talent Trade", "Tribute", "Barter", "Dark Surge", "Dodge",
            "Ill Will", "Peace of Mind", "Spare", "Barbs", "Lunge", "Gnarly Gash", "Slap Down"
        ]
    },

    grimmick: {
        name: "Grimmick",
        types: ["Dark"],
        abilities: ["Resentful", "Devious"],
        sAbility: ["Handy"],
        finalEvo: false,
        tier: "NFE",
        weight: 31,
        height: 52,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 72,
            energy: 72,
            attack: 61,
            defense: 39,
            attackR: 95,
            defenseR: 35,
            speed: 92
        },
        movepool: [
            "Startle", "Rant", "Mind's Eye", "Chase Down", "Stretch", "Pilfer", "Tease", "Sharpen",
            "Headbutt", "Deja Vu", "Bamboozle", "Shrewd Blast", "Bag of Tricks", "Charade",
            "Fade Away", "Health Gift", "Memorize", "Power Focus", "Provoke", "Scapegoat",
            "Splitting Headache", "Talent Trade", "Tribute", "Barter", "Dark Surge", "Dodge",
            "Ill Will", "Peace of Mind", "Spare", "Barbs", "Lunge", "Gnarly Gash", "Slap Down"
        ]
    },

    imperior: {
        name: "Imperior",
        types: ["Dark"],
        abilities: ["Resentful", "Devious"],
        sAbility: ["Handy"],
        weight: 66,
        height: 77,
        gender: ["Male", "Female"],
        icon: "imperior-archfiend",
        baseStats: {
            hp: 97,
            energy: 91,
            attack: 93,
            defense: 62,
            attackR: 115,
            defenseR: 57,
            speed: 100
        },
        movepool: [
            "Startle", "Rant", "Mind's Eye", "Chase Down", "Stretch", "Pilfer", "Tease", "Sharpen",
            "Headbutt", "Deja Vu", "Bamboozle", "Shrewd Blast", "Bag of Tricks", "Charade",
            "Health Gift", "Memorize", "Power Focus", "Provoke", "Scapegoat", "Splitting Headache",
            "Talent Trade", "Tribute", "Barter", "Dark Surge", "Dodge", "Ill Will", "Peace of Mind",
            "Spare", "Tricky Tactics", "Boom Bash", "Barbs", "Lunge", "Gnarly Gash", "Slap Down",
            "Savage Horn", "Vital Surge", "Brawn Boost", "Primal Slash"
        ]
    },

    'imperior-archfiend': {
        name: "Imperior-Archfiend",
        types: ["Dark"],
        ability: "Ace",
        soulMove: "Last Laugh",
        item: "Imperiburst",
        weight: 66,
        height: 77,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 97,
            energy: 91,
            attack: 133,
            defense: 52,
            attackR: 140,
            defenseR: 47,
            speed: 110
        },
        movepool: [
            "Startle", "Rant", "Mind's Eye", "Chase Down", "Stretch", "Pilfer", "Tease", "Sharpen",
            "Headbutt", "Deja Vu", "Bamboozle", "Shrewd Blast", "Bag of Tricks", "Charade",
            "Health Gift", "Memorize", "Power Focus", "Provoke", "Scapegoat", "Splitting Headache",
            "Talent Trade", "Tribute", "Barter", "Dark Surge", "Dodge", "Ill Will", "Peace of Mind",
            "Spare", "Tricky Tactics", "Boom Bash", "Barbs", "Lunge", "Gnarly Gash", "Slap Down",
            "Savage Horn", "Vital Surge", "Brawn Boost", "Primal Slash", "Last Laugh"
        ]
    },

    mistlebud: {
        name: "Mistlebud",
        types: ["Plant"],
        ability: "Festive Spirit",
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 7,
        gender: ["Ungendered"],
        baseStats: {
            hp: 25,
            energy: 50,
            attack: 9,
            defense: 75,
            attackR: 0,
            defenseR: 75,
            speed: 16
        },
        movepool: [
            "Dawdle", "Petal Pummel", "Shine", "Sap Plant", "Leaf Barrage", "Energy Surge",
            "Disperse", "Summon", "Wonder Herb", "Gamma Pulse", "Nature's Force", "Health Gift",
            "Life Drain", "Luster Loot", "Pheroblast", "Dodge", "Flash 'n Flee", "Peace of Mind",
            "Spare", "Spectral Burst"
        ]
    },

    hollibunch: {
        name: "Hollibunch",
        types: ["Plant", "Light"],
        ability: "Festive Spirit",
        weight: 7,
        height: 25,
        gender: ["Ungendered"],
        baseStats: {
            hp: 65,
            energy: 110,
            attack: 51,
            defense: 130,
            attackR: 0,
            defenseR: 130,
            speed: 39
        },
        movepool: [
            "Dawdle", "Petal Pummel", "Shine", "Sap Plant", "Leaf Barrage", "Energy Surge",
            "Disperse", "Summon", "Wonder Herb", "Gamma Pulse", "Nature's Force", "Health Gift",
            "Life Drain", "Luster Loot", "Pheroblast", "Dodge", "Flash 'n Flee", "Peace of Mind",
            "Spare", "Spectral Burst", "Nova Blast"
        ]
    },

    cryocub: {
        name: "Cryocub",
        types: ["Ice"],
        abilities: ["Adorable", "Communication"],
        sAbility: ["Mysterious Cloak"],
        finalEvo: false,
        tier: "LC",
        weight: 10,
        height: 30,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 49,
            energy: 57,
            attack: 41,
            defense: 65,
            attackR: 37,
            defenseR: 46,
            speed: 51
        },
        movepool: [
            "Dawdle", "Flurry", "Burrow", "Gnaw", "Snowdozer", "Chomp", "Swipe", "Tamp",
            "Chilly Chomp", "Brawn Boost", "Body Slam", "Ice Hammer", "Clay Slap", "Dodge",
            "Frost Beam", "Spare", "Icicle Trap", "Spike Rush"
        ]
    },

    barbadger: {
        name: "Barbadger",
        types: ["Ice", "Brawler"],
        abilities: ["Dauntless", "Communication"],
        sAbility: ["Mysterious Cloak"],
        weight: 74,
        height: 90,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 78,
            energy: 93,
            attack: 115,
            defense: 106,
            attackR: 57,
            defenseR: 72,
            speed: 82
        },
        movepool: [
            "Dawdle", "Flurry", "Burrow", "Gnaw", "Snowdozer", "Chomp", "Swipe", "Tamp",
            "Chilly Chomp", "Brawn Boost", "Body Slam", "Ice Hammer", "Clay Slap", "Dodge",
            "Frost Beam", "Spare", "Rogue Assault", "Mega Punch", "Ill Will", "Icicle Trap",
            "Spike Rush"
        ]
    },

    kyeggo: {
        name: "Kyeggo",
        types: ["Dark"],
        abilities: ["Vivid Sight", "Anomaly"],
        sAbility: ["Vicious"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 18,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 67,
            energy: 62,
            attack: 26,
            defense: 54,
            attackR: 66,
            defenseR: 56,
            speed: 44
        },
        movepool: [
            "Tail Slap", "Dino Claws", "Stare", "Rant", "Provoke", "Bamboozle", "Headbutt",
            "Eerie Stare", "Shrewd Blast", "Dark Surge", "High-Pitch Screech", "Draco Beam", "Nab",
            "Slumber", "Tease", "Dodge", "Mud Spatter", "Peace of Mind", "Spare", "Mega Chomp",
            "Gnarly Gash", "Outburst", "Tear Down"
        ]
    },

    doreggo: {
        name: "Doreggo",
        types: ["Dark", "Air"],
        abilities: ["Vivid Sight", "Anomaly"],
        sAbility: ["Vicious"],
        finalEvo: false,
        tier: "NFE",
        weight: 13,
        height: 35,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 86,
            energy: 78,
            attack: 42,
            defense: 66,
            attackR: 102,
            defenseR: 70,
            speed: 56
        },
        movepool: [
            "Tail Slap", "Dino Claws", "Stare", "Rant", "Provoke", "Bamboozle", "Headbutt",
            "Eerie Stare", "Shrewd Blast", "Dark Surge", "High-Pitch Screech", "Draco Beam", "Nab",
            "Slumber", "Tease", "Dodge", "Mud Spatter", "Peace of Mind", "Spare", "Air Blade",
            "Tear Down", "Jet Stream", "Mega Chomp", "Gnarly Gash", "Outburst", "Tear Down"
        ]
    },

    dreggodyne: {
        name: "Dreggodyne",
        types: ["Dark", "Air"],
        abilities: ["Vivid Sight", "Staunch"],
        sAbility: ["Vicious"],
        weight: 146,
        height: 92,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 96,
            energy: 92,
            attack: 73,
            defense: 77,
            attackR: 135,
            defenseR: 82,
            speed: 70
        },
        movepool: [
            "Tail Slap", "Dino Claws", "Stare", "Rant", "Provoke", "Bamboozle", "Headbutt",
            "Eerie Stare", "Shrewd Blast", "Dark Surge", "High-Pitch Screech", "Draco Beam", "Nab",
            "Slumber", "Tease", "Dodge", "Mud Spatter", "Peace of Mind", "Spare", "Air Blade",
            "Tear Down", "Jet Stream", "Egg Storm", "Mega Chomp", "Gnarly Gash", "Outburst",
            "Nosedive", "Double Beat", "Tear Down"
        ]
    },

    'dreggodyne-tempereign': {
        name: "Dreggodyne-Tempereign",
        types: ["Dark", "Air"],
        ability: "Remorseless",
        soulMove: "Egg Onslaught",
        item: "Dreggoburst",
        weight: 146,
        height: 92,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 96,
            energy: 92,
            attack: 93,
            defense: 77,
            attackR: 145,
            defenseR: 82,
            speed: 95
        },
        movepool: [
            "Tail Slap", "Dino Claws", "Stare", "Rant", "Provoke", "Bamboozle", "Headbutt",
            "Eerie Stare", "Shrewd Blast", "Dark Surge", "High-Pitch Screech", "Draco Beam", "Nab",
            "Slumber", "Tease", "Dodge", "Mud Spatter", "Peace of Mind", "Spare", "Air Blade",
            "Tear Down", "Jet Stream", "Egg Storm", "Mega Chomp", "Gnarly Gash", "Outburst",
            "Nosedive", "Double Beat", "Egg Onslaught"
        ]
    },

    wispur: {
        name: "Wispur",
        types: ["Spirit", "Light"],
        abilities: ["Fog Summon", "Radiance"],
        sAbility: ["Captivating"],
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 25,
            energy: 61,
            attack: 9,
            defense: 47,
            attackR: 72,
            defenseR: 70,
            speed: 33
        },
        movepool: [
            "Hazy Shroud", "Dawdle", "Shine", "Startle", "Flash", "Flurry", "Mind's Eye",
            "Shadow Sprint", "Rant", "Sleet Shot", "Spectral Burst", "Luster Loot", "Gamma Pulse",
            "Chase Down", "Magnify", "Nova Blast", "Phantom Blast", "Safeguard", "Soul Storm",
            "Square One", "Tear Down", "Tricky Tactics", "Fade Away", "Flash 'n Flee", "Frost Beam",
            "Peace of Mind", "Spare", "Climate Cannon"
        ]
    },

    lampurge: {
        name: "Lampurge",
        types: ["Spirit", "Light"],
        abilities: ["Fog Summon", "Radiance"],
        sAbility: ["Captivating"],
        finalEvo: false,
        tier: "NFE",
        weight: 4,
        height: 31,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 42,
            energy: 81,
            attack: 39,
            defense: 78,
            attackR: 97,
            defenseR: 91,
            speed: 40
        },
        movepool: [
            "Hazy Shroud", "Dawdle", "Shine", "Startle", "Flash", "Flurry", "Mind's Eye",
            "Shadow Sprint", "Safeguard", "Sleet Shot", "Blindspot Batter", "Charade",
            "Spectral Burst", "Luster Loot", "Gamma Pulse", "Final Ruse", "Chase Down", "Magnify",
            "Nova Blast", "Phantom Blast", "Rant", "Soul Storm", "Square One", "Tear Down",
            "Tricky Tactics", "Fade Away", "Flash 'n Flee", "Frost Beam", "Peace of Mind", "Spare",
            "Climate Cannon"
        ]
    },

    charonyx: {
        name: "Charonyx",
        types: ["Spirit", "Light"],
        abilities: ["Fog Summon", "Radiance"],
        sAbility: ["Reaper"],
        weight: 5,
        height: 49,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 56,
            energy: 101,
            attack: 68,
            defense: 96,
            attackR: 122,
            defenseR: 106,
            speed: 51
        },
        movepool: [
            "Apparition", "Gamma Pulse", "Final Ruse", "Chase Down", "Magnify", "Nova Blast",
            "Phantom Blast", "Rant", "Soul Storm", "Square One", "Tear Down", "Tricky Tactics",
            "Dodge", "Fade Away", "Flash 'n Flee", "Frost Beam", "Peace of Mind", "Spare",
            "Hazy Shroud", "Dawdle", "Shine", "Startle", "Flash", "Flurry", "Mind's Eye",
            "Shadow Sprint", "Safeguard", "Sleet Shot", "Blindspot Batter", "Charade",
            "Spectral Burst", "Luster Loot", "Climate Cannon"
        ]
    },

    smoal: {
        name: "Smoal",
        types: ["Fire", "Toxic"],
        abilities: ["Heat Summon", "Scorching Skin"],
        sAbility: ["Blistering Heat"],
        finalEvo: false,
        tier: "LC",
        weight: 20,
        height: 19,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 37,
            energy: 67,
            attack: 38,
            defense: 30,
            attackR: 38,
            defenseR: 25,
            speed: 54
        },
        movepool: [
            "Growl", "Singe", "Heat Wave", "Corrode", "Eerie Stare", "Bash", "Poison", "Fire Slam",
            "Burn Up", "Power Focus", "Baneful Bash", "Muck Blast", "Heavy Bash", "Fire Breath",
            "Boiling Press", "Driving Force", "Earthquake", "Flare Blast", "Landslide",
            "Metal Blast", "Paint Shower", "Raging Flame", "Steel Crusher", "Tamp", "Tear Down",
            "Tribute", "Bulk Up", "Dodge", "Ill Will", "Spare", "Boiling Press", "Climate Cannon",
            "Barbs"
        ]
    },

    charkiln: {
        name: "Charkiln",
        types: ["Fire", "Toxic"],
        abilities: ["Heat Summon", "Scorching Skin"],
        sAbility: ["Blistering Heat"],
        finalEvo: false,
        tier: "NFE",
        weight: 40,
        height: 45,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 56,
            energy: 77,
            attack: 74,
            defense: 52,
            attackR: 74,
            defenseR: 39,
            speed: 84
        },
        movepool: [
            "Growl", "Singe", "Heat Wave", "Corrode", "Eerie Stare", "Bash", "Poison", "Fire Slam",
            "Burn Up", "Power Focus", "Baneful Bash", "Muck Blast", "Heavy Bash", "Fire Breath",
            "Boiling Press", "Driving Force", "Earthquake", "Flare Blast", "Landslide",
            "Metal Blast", "Paint Shower", "Raging Flame", "Steel Crusher", "Tamp", "Tear Down",
            "Tribute", "Bulk Up", "Dodge", "Ill Will", "Spare", "Slime", "Blaze Punch",
            "Double Whack", "Boiling Press", "Climate Cannon", "Barbs"
        ]
    },

    billoforge: {
        name: "Billoforge",
        types: ["Fire", "Toxic"],
        abilities: ["Heat Summon", "Scorching Skin"],
        sAbility: ["Blistering Heat"],
        weight: 296,
        height: 76,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 80,
            energy: 87,
            attack: 117,
            defense: 104,
            attackR: 117,
            defenseR: 71,
            speed: 24
        },
        movepool: [
            "Growl", "Singe", "Heat Wave", "Corrode", "Eerie Stare", "Bash", "Poison", "Fire Slam",
            "Burn Up", "Power Focus", "Baneful Bash", "Muck Blast", "Heavy Bash", "Fire Breath",
            "Boiling Press", "Driving Force", "Earthquake", "Flare Blast", "Landslide",
            "Metal Blast", "Paint Shower", "Raging Flame", "Steel Crusher", "Tamp", "Tear Down",
            "Tribute", "Bulk Up", "Dodge", "Ill Will", "Spare", "Slime", "Blaze Punch",
            "Double Whack", "Kindled Rage", "Boiling Press", "Climate Cannon", "Barbs"
        ]
    },

    sherbot: {
        name: "Sherbot",
        types: ["Ice", "Metal"],
        abilities: ["Overclock", "Sugar Rush"],
        sAbility: ["Chill"],
        weight: 96,
        height: 57,
        gender: ["Ungendered"],
        baseStats: {
            hp: 69,
            energy: 85,
            attack: 42,
            defense: 97,
            attackR: 94,
            defenseR: 62,
            speed: 76
        },
        movepool: [
            "Flurry", "Strike", "Squawk", "Bash", "Tune-up", "Sleet Shot", "Harmonious Chord",
            "Jump Start", "Heavy Bash", "Metal Shriek", "Out of Order", "Dissonant Chord",
            "Metal Blast", "Air Blade", "Barbs", "Deep Freeze", "Deja Vu", "Gust", "Icicle Trap",
            "Jet Stream", "Resonate", "Splitting Headache", "Tase", "Tribute", "Zip-Zap", "Dodge",
            "Frost Beam", "Peace of Mind", "Spare", "Tear Down", "Burn Up"
        ]
    },

    'iron fumble': {
        name: "Iron Fumble",
        number: 140,
        types: ["Ice", "Metal"],
        abilities: ["Shakedown", "Sugar Rush"],
        sAbility: ["Chill"],
        weight: 96,
        height: 57,
        baseStats: {
            hp: 69,
            energy: 85,
            attack: 42,
            defense: 97,
            attackR: 94,
            defenseR: 62,
            speed: 76
        }
    },

    llamba: {
        name: "Llamba",
        number: 140,
        types: ["Simple"],
        abilities: ["Playful", "Regurgitate"],
        sAbility: ["Wholesome"],
        finalEvo: false,
        tier: "LC",
        weight: 11,
        height: 28,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Wholesome", typeChart: "Wholesome" }],
        baseStats: {
            hp: 59,
            energy: 51,
            attack: 20,
            defense: 59,
            attackR: 64,
            defenseR: 47,
            speed: 70
        },
        movepool: [
            "Spit", "Daydream", "Growl", "Chase Down", "Stretch", "Quick Pounce", "Scapegoat", "Nab",
            "Accelerate", "High Pitch Screech", "Recycle", "Body Slam", "Power Focus", "Stampede",
            "Boom Bash", "Health Gift", "Mega Kick", "Provoke", "Raging Howl", "Raging Tackle",
            "Slumber", "Dodge", "Ill Will", "Spare", "Rainbow Blast", "Energy Break"
        ]
    },

    choochew: {
        name: "Choochew",
        number: 140,
        types: ["Simple"],
        abilities: ["Playful", "Regurgitate"],
        sAbility: ["Wholesome"],
        finalEvo: false,
        tier: "NFE",
        weight: 40,
        height: 55,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Wholesome", typeChart: "Wholesome" }],
        baseStats: {
            hp: 76,
            energy: 76,
            attack: 37,
            defense: 70,
            attackR: 83,
            defenseR: 62,
            speed: 86
        },
        movepool: [
            "Spit", "Daydream", "Growl", "Chase Down", "Stretch", "Quick Pounce", "Scapegoat", "Nab",
            "Accelerate", "High Pitch Screech", "Recycle", "Body Slam", "Power Focus", "Stampede",
            "Boom Bash", "Health Gift", "Mega Kick", "Provoke", "Raging Howl", "Raging Tackle",
            "Slumber", "Dodge", "Ill Will", "Spare", "Rainbow Blast", "Headbutt", "Bulk Up",
            "Mud Spatter", "Peace of Mind", "Energy Break"
        ]
    },

    loomala: {
        name: "Loomala",
        number: 140,
        types: ["Simple"],
        abilities: ["Herd Behavior", "Regurgitate"],
        sAbility: ["Wholesome"],
        weight: 93,
        height: 80,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Wholesome", typeChart: "Wholesome" }],
        baseStats: {
            hp: 92,
            energy: 98,
            attack: 60,
            defense: 89,
            attackR: 95,
            defenseR: 80,
            speed: 111
        },
        movepool: [
            "Spit", "Daydream", "Growl", "Chase Down", "Stretch", "Quick Pounce", "Scapegoat", "Nab",
            "Accelerate", "High Pitch Screech", "Recycle", "Body Slam", "Power Focus", "Stampede",
            "Boom Bash", "Health Gift", "Mega Kick", "Provoke", "Raging Howl", "Raging Tackle",
            "Slumber", "Dodge", "Ill Will", "Spare", "Rainbow Blast", "Headbutt", "Bulk Up",
            "Mud Spatter", "Peace of Mind", "Spit Out", "Energy Break"
        ]
    },

    fentern: {
        name: "Fentern",
        types: ["Simple"],
        abilities: ["Intern", "Rush Hour"],
        sAbility: ["Trader"],
        finalEvo: false,
        tier: "LC",
        weight: 8,
        height: 21,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 45,
            energy: 100,
            attack: 42,
            defense: 46,
            attackR: 16,
            defenseR: 41,
            speed: 70
        },
        movepool: [
            "Dawdle", "Strike", "Stretch", "Quick Pounce", "Spare", "Recycle", "Headbutt", "Tribute",
            "Slash", "Bequeath", "Scapegoat", "Body Slam", "Slumber", "Baffle", "Barbs",
            "Driving Force", "Health Gift", "Provoke", "Rant", "Slap Down", "Tricky Tactics", "Bait",
            "Barter", "Dodge", "Ill Will", "Tear Down"
        ]
    },

    weaselin: {
        name: "Weaselin",
        types: ["Simple"],
        abilities: ["Partnership", "Rush Hour"],
        sAbility: ["Trader"],
        weight: 39,
        height: 62,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 150,
            attack: 72,
            defense: 71,
            attackR: 56,
            defenseR: 66,
            speed: 90
        },
        movepool: [
            "Dawdle", "Strike", "Stretch", "Quick Pounce", "Spare", "Recycle", "Headbutt", "Tribute",
            "Slash", "Bequeath", "Scapegoat", "Body Slam", "Slumber", "Baffle", "Barbs",
            "Driving Force", "Health Gift", "Provoke", "Rant", "Slap Down", "Tricky Tactics", "Bait",
            "Barter", "Dodge", "Ill Will", "Teamwork", "Tear Down"
        ]
    },

    singeel: {
        name: "Singeel",
        types: ["Electric"],
        ability: "Safety Pot",
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 25,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 75,
            energy: 43,
            attack: 6,
            defense: 24,
            attackR: 31,
            defenseR: 16,
            speed: 5
        },
        movepool: [
            "Brace", "Static Shock", "Spray", "Tase", "Confound", "Precision Bolt", "Jolt",
            "Bamboozle", "Soft Water", "Thunder Slam", "Energize", "Dark Surge", "Tamp",
            "Earthquake", "Landslide", "Mega Chomp", "Primal Slash", "Provoke", "Shrewd Blast",
            "Thunder Crash", "Tricky Tactics", "Bulk Up", "Dodge", "Plunge", "Spare",
            "Thunderstrike", "Zip-Zap", "Mudslide", "Slap Down", "Hydro Slash", "Electro-Punch",
            "Gnarly Gash", "Mega Punch", "Gain Drain", "Pester", "Pheroblast", "Wonder Herb",
            "Safeguard"
        ]
    },

    moreel: {
        name: "Moreel",
        types: ["Electric", "Dark"],
        ability: "One of Many",
        weight: 35,
        height: 79,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 105,
            energy: 83,
            attack: 86,
            defense: 104,
            attackR: 121,
            defenseR: 81,
            speed: 35
        },
        movepool: [
            "Brace", "Static Shock", "Spray", "Tase", "Confound", "Precision Bolt", "Jolt",
            "Bamboozle", "Soft Water", "Thunder Slam", "Energize", "Dark Surge", "Tamp",
            "Earthquake", "Landslide", "Mega Chomp", "Primal Slash", "Provoke", "Shrewd Blast",
            "Thunder Crash", "Tricky Tactics", "Bulk Up", "Dodge", "Plunge", "Spare",
            "Thunderstrike", "Zip-Zap", "Shadow Lurk", "Mudslide", "Slap Down", "Hydro Slash",
            "Electro-Punch", "Gnarly Gash", "Mega Punch", "Gain Drain", "Pester", "Pheroblast",
            "Wonder Herb", "Safeguard"
        ]
    },

    crabushi: {
        name: "Crabushi",
        types: ["Metal", "Brawler"],
        abilities: ["Power Claw", "Vengeance"],
        sAbility: ["Razor Sharp"],
        finalEvo: false,
        tier: "LC",
        weight: 3,
        height: 14,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 35,
            energy: 48,
            attack: 53,
            defense: 84,
            attackR: 5,
            defenseR: 52,
            speed: 76
        },
        movepool: [
            "Metal Swipes", "Strike", "Chop", "Swipe", "Sharpen", "Hydro Slash", "Heavy Bash",
            "Slash", "Barbs", "Bulk Up", "Steel Crusher", "Drudge", "Rogue Assault", "Tribute",
            "Wave Wrecker", "Dodge", "Plunge", "Spare", "Provoke", "Scapegoat"
        ]
    },

    crabtana: {
        name: "Crabtana",
        types: ["Metal", "Brawler"],
        abilities: ["Power Claw", "Vengeance"],
        sAbility: ["Razor Sharp"],
        weight: 20,
        height: 37,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 60,
            energy: 90,
            attack: 100,
            defense: 117,
            attackR: 39,
            defenseR: 79,
            speed: 100
        },
        movepool: [
            "Metal Swipes", "Strike", "Chop", "Swipe", "Sharpen", "Hydro Slash", "Heavy Bash",
            "Slash", "Barbs", "Bulk Up", "Steel Crusher", "Drudge", "Rogue Assault", "Tribute",
            "Wave Wrecker", "Dodge", "Plunge", "Spare", "Razor Slash", "Provoke", "Scapegoat"
        ]
    },

    teripod: {
        name: "Teripod",
        types: ["Ancient", "Light"],
        abilities: ["Watcher", "Illuminate"],
        sAbility: ["Mesmerizing"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 18,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 79,
            energy: 90,
            attack: 49,
            defense: 74,
            attackR: 15,
            defenseR: 52,
            speed: 61
        },
        movepool: [
            "Shine", "Dino Claws", "Flash", "Bug Bite", "Luster Loot", "Aqua Jaws", "Shrewd Blast",
            "Drudge", "Dazzling Barrage", "Slash", "Hydro Slash", "Blindspot Batter", "Primal Slash",
            "Energy Surge", "Nova Blast", "Parasitize", "Dodge", "Flash 'n Flee", "Gamma Pulse",
            "Hypnotize", "Maroon", "Spare", "Lunge", "Wave Wrecker", "Body Slam", "Bane of Haste"
        ]
    },

    teridescent: {
        name: "Teridescent",
        types: ["Ancient", "Light"],
        abilities: ["Watcher", "Illuminate"],
        sAbility: ["Mesmerizing"],
        weight: 34,
        height: 50,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 115,
            energy: 90,
            attack: 112,
            defense: 105,
            attackR: 45,
            defenseR: 73,
            speed: 70
        },
        movepool: [
            "Shine", "Dino Claws", "Flash", "Bug Bite", "Luster Loot", "Aqua Jaws", "Shrewd Blast",
            "Drudge", "Dazzling Barrage", "Slash", "Hydro Slash", "Blindspot Batter", "Primal Slash",
            "Energy Surge", "Nova Blast", "Parasitize", "Dodge", "Flash 'n Flee", "Gamma Pulse",
            "Hypnotize", "Maroon", "Spare", "Hyper Sting", "Rainbow Blast", "Lunge", "Wave Wrecker",
            "Body Slam", "Bane of Haste"
        ]
    },

    skampi: {
        name: "Skampi",
        types: ["Water"],
        abilities: ["Protecive Shell", "Clutch"],
        sAbility: ["Trash Armor"],
        finalEvo: false,
        tier: "NFE",
        weight: 1,
        height: 7,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 10,
            energy: 72,
            attack: 7,
            defense: 97,
            attackR: 7,
            defenseR: 67,
            speed: 110
        },
        movepool: [
            "Brace", "Pounce", "Spray", "Stare", "Quick Pounce", "Stretch", "Spare", "Eerie Stare",
            "Accelerate", "Chase Down", "Battering Ram", "Body Crash", "Recycle", "Tribute",
            "Wave Wrecker", "Dodge", "Spare", "Vital Jab", "Rogue Assault", "Provoke",
            "Preemptive Strike", "Bane of Haste", "Counter Poise"
        ]
    },

    prawnsu: {
        name: "Prawnsu",
        types: ["Water"],
        abilities: ["Applied Frustration", "Clutch"],
        sAbility: ["Viscious"],
        weight: 10,
        height: 33,
        gender: ["Female"],
        baseStats: {
            hp: 50,
            energy: 82,
            attack: 44,
            defense: 107,
            attackR: 130,
            defenseR: 77,
            speed: 92
        },
        movepool: [
            "Brace", "Pounce", "Spray", "Stare", "Quick Pounce", "Stretch", "Spare", "Eerie Stare",
            "Accelerate", "Chase Down", "Battering Ram", "Body Crash", "Recycle", "Tribute",
            "Wave Wrecker", "Dodge", "Spare", "Shell Shrapnel", "Pheroblast", "Maroon", "Boom Bash",
            "Peace of Mind", "Plunge", "Tsunami", "Vital Jab", "Rogue Assault", "Provoke",
            "Preemptive Strike", "Bane of Haste", "Counter Poise"
        ]
    },

    shrimposte: {
        name: "Shrimposte",
        types: ["Water"],
        abilities: ["Combative", "Clutch"],
        sAbility: ["Viscious"],
        weight: 13,
        height: 37,
        gender: ["Male"],
        baseStats: {
            hp: 50,
            energy: 82,
            attack: 130,
            defense: 117,
            attackR: 44,
            defenseR: 87,
            speed: 72
        },
        movepool: [
            "Brace", "Pounce", "Spray", "Stare", "Quick Pounce", "Stretch", "Spare", "Eerie Stare",
            "Accelerate", "Chase Down", "Battering Ram", "Body Crash", "Recycle", "Tribute",
            "Wave Wrecker", "Dodge", "Spare", "Shell Bash", "Parasitize", "Hydro Slash",
            "Mega Punch", "Bulk Up", "Maroon", "Plunge", "Tsunami", "Vital Jab", "Rogue Assault",
            "Provoke", "Preemptive Strike", "Bane of Haste", "Far Enchantment", "Near Enchantment",
            "Counter Poise"
        ]
    },

    dokan: {
        name: "Dokan",
        types: ["Earth", "Toxic"],
        abilities: ["Spine Break", "Immunized"],
        sAbility: ["Sponge"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 13,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Sponge", typeChart: "Sponge" }],
        baseStats: {
            hp: 63,
            energy: 88,
            attack: 49,
            defense: 66,
            attackR: 23,
            defenseR: 52,
            speed: 49
        },
        movepool: [
            "Stare", "Sting", "Burrow", "Toxic Tail", "Clay Slap", "Headbutt", "Baffle", "Aqua Jaws",
            "Quicksand", "Venom Chomp", "Tamp", "Earthquake", "Baneful Bash", "Landslide",
            "Muck Blast", "Bulk Up", "Dodge", "Ill Will", "Maroon", "Mud Spatter", "Plunge", "Spare"
        ]
    },

    dokumori: {
        name: "Dokumori",
        types: ["Earth", "Toxic"],
        abilities: ["Spine Break", "Immunized"],
        sAbility: ["Sponge"],
        weight: 29,
        height: 42,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Sponge", typeChart: "Sponge" }],
        baseStats: {
            hp: 88,
            energy: 101,
            attack: 101,
            defense: 96,
            attackR: 60,
            defenseR: 70,
            speed: 59
        },
        movepool: [
            "Stare", "Sting", "Burrow", "Toxic Tail", "Clay Slap", "Headbutt", "Baffle", "Aqua Jaws",
            "Quicksand", "Venom Chomp", "Tamp", "Earthquake", "Baneful Bash", "Landslide",
            "Muck Blast", "Bulk Up", "Dodge", "Ill Will", "Maroon", "Mud Spatter", "Plunge", "Spare",
            "Icicle Trap"
        ]
    },

    mirrami: {
        name: "Mirrami",
        types: ["Spirit", "Metal"],
        abilities: ["Reflective", "Mimic"],
        sAbility: ["Analyze"],
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 20,
        gender: ["Ungendered"],
        typeVariants: [{ ability: "Reflective", typeChart: "Reflective" }],
        baseStats: {
            hp: 10,
            energy: 56,
            attack: 85,
            defense: 31,
            attackR: 85,
            defenseR: 56,
            speed: 24
        },
        movepool: [
            "Metal Swipes", "Stupefy", "Power Focus", "Bamboozle", "Reflection Burst",
            "Phantom Slash", "Dark Surge", "Chase Down", "Double Whack", "Spectral Burst",
            "Final Ruse", "Metal Shriek", "Metal Blast", "Soul Storm", "Baffle", "Bag of Tricks",
            "Deja Vu", "Far Enchantment", "Impersonate", "Near Enchantment", "Shadow Sprint",
            "Square One", "Steel Crusher", "Tricky Tactics", "Bulk Up", "Dodge", "Fade Away",
            "Ill Will", "Peace of Mind", "Spare", "Thunder Chomp"
        ]
    },

    mirraith: {
        name: "Mirraith",
        types: ["Spirit", "Metal"],
        abilities: ["Reflective", "Mimic"],
        sAbility: ["Analyze"],
        weight: 24,
        height: 71,
        gender: ["Ungendered"],
        typeVariants: [{ ability: "Reflective", typeChart: "Reflective" }],
        baseStats: {
            hp: 50,
            energy: 84,
            attack: 125,
            defense: 72,
            attackR: 125,
            defenseR: 105,
            speed: 44
        },
        movepool: [
            "Metal Swipes", "Stupefy", "Power Focus", "Bamboozle", "Reflection Burst",
            "Phantom Slash", "Dark Surge", "Chase Down", "Double Whack", "Spectral Burst",
            "Final Ruse", "Metal Shriek", "Metal Blast", "Soul Storm", "Baffle", "Bag of Tricks",
            "Deja Vu", "Far Enchantment", "Impersonate", "Near Enchantment", "Shadow Sprint",
            "Square One", "Steel Crusher", "Tricky Tactics", "Bulk Up", "Dodge", "Fade Away",
            "Ill Will", "Peace of Mind", "Spare", "Shatter", "Thunder Chomp"
        ]
    },

    thawmin: {
        name: "Thawmin",
        types: ["Ice", "Mind"],
        abilities: ["Communication", "Expertise"],
        sAbility: ["Foresight"],
        weight: 34,
        height: 59,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 77,
            energy: 92,
            attack: 49,
            defense: 58,
            attackR: 118,
            defenseR: 92,
            speed: 99
        },
        movepool: [
            "Frost Beam", "Petal Pummel", "Pine Shot", "Life Drain", "Photosynthesis",
            "Nature's Force", "Strike", "Brace", "Snowdozer", "Brainwash", "Sleet Shot",
            "Bane of Haste", "Deep Freeze", "Flabbergast", "Icicle Trap", "Ice Hammer",
            "Peace of Mind", "Bag of Tricks", "Muck Blast", "Provoke", "Psycho Blast", "Scapegoat",
            "Tear Down", "Toxic Spores", "Barter", "Dodge", "Ill Will", "Peace of Mind",
            "Rejuvenate", "Spare", "Thunderstrike"
        ]
    },

    leshent: {
        name: "Leshent",
        types: ["Plant", "Dark"],
        abilities: ["Gloomy", "Watcher"],
        sAbility: ["Petrifying"],
        weight: 106,
        height: 77,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 104,
            energy: 86,
            attack: 103,
            defense: 93,
            attackR: 56,
            defenseR: 79,
            speed: 64
        },
        movepool: [
            "Petal Pummel", "Flurry", "Brace", "Spare", "Leaf Barrage", "Snowdozer", "Sap Plant",
            "Icicle Trap", "Bush Whack", "Briar Block", "Ice Hammer", "Thistle Slash", "Brawn Boost",
            "Earthquake", "Raging Tackle", "Timber Thrash", "Tricky Tactics", "Dodge", "Frost Beam",
            "Hypnotize", "Ill Will", "Rejuvenate", "Gnarly Gash", "Chomp", "Bamboozle", "Provoke",
            "Slap Down"
        ]
    },

    kayute: {
        name: "Kayute",
        types: ["Ice", "Dark"],
        abilities: ["Ravenous", "Playful"],
        sAbility: ["Designated Chompers"],
        finalEvo: false,
        tier: "LC",
        weight: 30,
        height: 32,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 40,
            energy: 61,
            attack: 58,
            defense: 54,
            attackR: 29,
            defenseR: 49,
            speed: 69
        },
        movepool: [
            "Flurry", "Gnaw", "Chomp", "Stretch", "Sleet Shot", "Wonder Herb", "Bamboozle",
            "Square One", "Chilly Chomp", "Metal Shriek", "Slap Down", "Frost Beam", "Mega Chomp",
            "Vice Jaws", "Baffle", "Barbs", "Body Slam", "Gnarly Gash", "Ice Hammer", "Primal Slash",
            "Bulk Up", "Dark Surge", "Dodge", "Spare", "Provoke", "Spike Rush", "Frost Breath"
        ]
    },

    kayappa: {
        name: "Kayappa",
        types: ["Ice", "Dark"],
        abilities: ["Ravenous", "Playful"],
        sAbility: ["Designated Chompers"],
        finalEvo: false,
        tier: "NFE",
        weight: 85,
        height: 65,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 52,
            energy: 78,
            attack: 79,
            defense: 75,
            attackR: 39,
            defenseR: 70,
            speed: 81
        },
        movepool: [
            "Flurry", "Gnaw", "Chomp", "Stretch", "Sleet Shot", "Wonder Herb", "Bamboozle",
            "Square One", "Chilly Chomp", "Metal Shriek", "Slap Down", "Frost Beam", "Mega Chomp",
            "Vice Jaws", "Baffle", "Barbs", "Body Slam", "Gnarly Gash", "Ice Hammer", "Primal Slash",
            "Bulk Up", "Dark Surge", "Dodge", "Spare", "Icicle Trap", "Provoke", "Spike Rush",
            "Frost Breath"
        ]
    },

    kramboss: {
        name: "Kramboss",
        types: ["Ice", "Dark"],
        abilities: ["Ravenous", "Battle Armor"],
        sAbility: ["Designated Chompers"],
        weight: 130,
        height: 81,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 79,
            energy: 98,
            attack: 110,
            defense: 91,
            attackR: 66,
            defenseR: 86,
            speed: 95
        },
        movepool: [
            "Flurry", "Gnaw", "Chomp", "Stretch", "Sleet Shot", "Wonder Herb", "Bamboozle",
            "Square One", "Chilly Chomp", "Metal Shriek", "Slap Down", "Frost Beam", "Mega Chomp",
            "Vice Jaws", "Baffle", "Barbs", "Body Slam", "Gnarly Gash", "Ice Hammer", "Primal Slash",
            "Bulk Up", "Dark Surge", "Dodge", "Spare", "Icicle Trap", "Battle Chime", "Provoke",
            "Spike Rush", "Frost Breath"
        ]
    },

    'kramboss-frostshackled': {
        name: "Kramboss-Frostshackled",
        types: ["Ice", "Dark"],
        ability: "Metallic",
        soulMove: "Ruthless Feast",
        item: "Kramburst",
        weight: 130,
        height: 81,
        baseStats: {
            hp: 99,
            energy: 88,
            attack: 130,
            defense: 101,
            attackR: 66,
            defenseR: 96,
            speed: 100
        }
    },

    leopaw: {
        name: "Leopaw",
        types: ["Light", "Ice"],
        abilities: ["Sharp Claws", "Mesmerizing"],
        sAbility: ["Prismatic"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 21,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Prismatic", typeChart: "Prismatic" }],
        baseStats: {
            hp: 56,
            energy: 78,
            attack: 54,
            defense: 48,
            attackR: 28,
            defenseR: 39,
            speed: 71
        },
        movepool: [
            "Light Dash", "Pounce", "Snowdozer", "Flash", "Quick Pounce", "Swat", "Energy Surge",
            "Frost Punch", "Slash", "Blindspot Batter", "Icicle Trap", "Radiant Rush", "Body Slam",
            "Brawn Boost", "Dazzling Barrage", "Ice Hammer", "Primal Slash", "Bulk Up", "Dodge",
            "Flash 'n Flee", "Frost Beam", "Gamma Pulse", "Spare", "Teamwork"
        ]
    },

    chienta: {
        name: "Chienta",
        types: ["Light", "Ice"],
        abilities: ["Sharp Claws", "Mesmerizing"],
        sAbility: ["Prismatic"],
        weight: 89,
        height: 79,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Prismatic", typeChart: "Prismatic" }],
        baseStats: {
            hp: 98,
            energy: 97,
            attack: 95,
            defense: 73,
            attackR: 73,
            defenseR: 57,
            speed: 115
        },
        movepool: [
            "Light Dash", "Pounce", "Snowdozer", "Flash", "Quick Pounce", "Swat", "Energy Surge",
            "Frost Punch", "Slash", "Blindspot Batter", "Icicle Trap", "Radiant Rush", "Body Slam",
            "Brawn Boost", "Dazzling Barrage", "Ice Hammer", "Primal Slash", "Bulk Up", "Dodge",
            "Flash 'n Flee", "Frost Beam", "Gamma Pulse", "Spare", "Solar Punch", "Mega Punch",
            "Ill Will", "Teamwork"
        ]
    },

    eyebrella: {
        name: "Eyebrella",
        types: ["Water"],
        abilities: ["Hydro Vortex", "Do or Die"],
        sAbility: ["Pluvial"],
        finalEvo: false,
        tier: "LC",
        weight: 2,
        height: 29,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hydro Vortex", typeChart: "HydroVortex" }],
        baseStats: {
            hp: 64,
            energy: 62,
            attack: 69,
            defense: 60,
            attackR: 34,
            defenseR: 48,
            speed: 47
        },
        movepool: [
            "Startle", "Spray", "Stupefy", "Rant", "Tribute", "Water Bomb", "Soul Storm",
            "Final Ruse", "Provoke", "Hydro Slash", "Spectral Burst", "Mega Chomp", "Soft Water",
            "Bamboozle", "Harrow", "Power Focus", "Slap Down", "Square One", "Wave Wrecker",
            "Dark Surge", "Dodge", "Fade Away", "Ill Will", "Maroon", "Plunge", "Spare", "Tsunami",
            "Mudslide", "Thunder Chomp", "Thunder Crash", "Downpour", "Gust"
        ]
    },

    parasoul: {
        name: "Parasoul",
        types: ["Water", "Dark"],
        abilities: ["Hydro Vortex", "Do or Die"],
        sAbility: ["Pluvial"],
        weight: 5,
        height: 59,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hydro Vortex", typeChart: "HydroVortex" }],
        baseStats: {
            hp: 91,
            energy: 80,
            attack: 113,
            defense: 92,
            attackR: 64,
            defenseR: 71,
            speed: 74
        },
        movepool: [
            "Startle", "Spray", "Stupefy", "Rant", "Tribute", "Water Bomb", "Soul Storm", "Mudslide",
            "Final Ruse", "Provoke", "Hydro Slash", "Spectral Burst", "Mega Chomp", "Soft Water",
            "Bamboozle", "Harrow", "Power Focus", "Slap Down", "Square One", "Wave Wrecker",
            "Dark Surge", "Dodge", "Fade Away", "Ill Will", "Maroon", "Plunge", "Spare", "Tsunami",
            "Revolution", "Bulk Up", "Thunder Chomp", "Thunder Crash", "Downpour", "Gust"
        ]
    },

    lissen: {
        name: "Lissen",
        types: ["Mind"],
        abilities: ["Motivational", "Do or Die"],
        sAbility: ["Virtuoso"],
        finalEvo: false,
        tier: "LC",
        weight: 2,
        height: 31,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 69,
            energy: 62,
            attack: 31,
            defense: 58,
            attackR: 68,
            defenseR: 58,
            speed: 38
        },
        movepool: [
            "Startle", "Brainwash", "Stupefy", "Harmonious Chord", "Tribute", "Flabbergast",
            "Soul Storm", "Final Ruse", "Teamwork", "Cerebral Slash", "Spectral Burst",
            "High-Pitch Screech", "Peace of Mind", "Deja Vu", "Dissonant Chord", "Power Focus",
            "Psycho Blast", "Repeating Tune", "Resonate", "Bait", "Dodge", "Fade Away", "Ill Will",
            "Spare", "Dissipate", "Safeguard", "Splitting Headache", "Raging Howl", "Hullabaloo",
            "Spite", "Provoke", "Wonder Herb", "Pester", "Life Drain", "Nature's Force"
        ]
    },

    biwarned: {
        name: "Biwarned",
        types: ["Mind", "Simple"],
        abilities: ["Motivational", "Do or Die"],
        sAbility: ["Virtuoso"],
        weight: 13,
        height: 47,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 113,
            energy: 80,
            attack: 44,
            defense: 97,
            attackR: 98,
            defenseR: 97,
            speed: 56
        },
        movepool: [
            "Startle", "Brainwash", "Stupefy", "Harmonious Chord", "Tribute", "Flabbergast",
            "Soul Storm", "Final Ruse", "Teamwork", "Cerebral Slash", "Spectral Burst",
            "High-Pitch Screech", "Peace of Mind", "Deja Vu", "Dissonant Chord", "Power Focus",
            "Psycho Blast", "Repeating Tune", "Resonate", "Bait", "Dodge", "Fade Away", "Ill Will",
            "Spare", "Conclusion", "Hypnotize", "Dissipate", "Safeguard", "Splitting Headache",
            "Raging Howl", "Hullabaloo", "Spite", "Provoke", "Wonder Herb", "Pester", "Life Drain",
            "Nature's Force"
        ]
    },

    lantot: {
        name: "Lantot",
        types: ["Fire"],
        abilities: ["Wildfire", "Do or Die"],
        sAbility: ["Sendoff"],
        finalEvo: false,
        tier: "LC",
        weight: 1,
        height: 15,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 41,
            energy: 62,
            attack: 62,
            defense: 42,
            attackR: 69,
            defenseR: 45,
            speed: 63
        },
        movepool: [
            "Startle", "Singe", "Stupefy", "Luster Loot", "Tribute", "Fire Slam", "Soul Storm",
            "Final Ruse", "Flash", "Pyrokenesis", "Spectral Burst", "Gamma Pulse", "Burn Up",
            "Blaze Chomp", "Energy Surge", "Harrow", "Power Focus", "Radiant Rush", "Raging Flame",
            "Fire Breath", "Dodge", "Fade Away", "Ill Will", "Spare"
        ]
    },

    lantorch: {
        name: "Lantorch",
        types: ["Fire", "Light"],
        abilities: ["Wildfire", "Do or Die"],
        sAbility: ["Sendoff"],
        weight: 7,
        height: 40,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 68,
            energy: 80,
            attack: 98,
            defense: 62,
            attackR: 113,
            defenseR: 71,
            speed: 93
        },
        movepool: [
            "Startle", "Singe", "Stupefy", "Luster Loot", "Tribute", "Fire Slam", "Soul Storm",
            "Final Ruse", "Flash", "Pyrokenesis", "Spectral Burst", "Gamma Pulse", "Burn Up",
            "Blaze Chomp", "Energy Surge", "Harrow", "Power Focus", "Radiant Rush", "Raging Flame",
            "Fire Breath", "Dodge", "Fade Away", "Ill Will", "Spare", "Flare"
        ]
    },

    milgoo: {
        name: "Milgoo",
        types: ["Toxic"],
        abilities: ["Soul Siphon", "Do or Die"],
        sAbility: ["Devious"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 62,
            energy: 62,
            attack: 27,
            defense: 33,
            attackR: 66,
            defenseR: 65,
            speed: 69
        },
        movepool: [
            "Startle", "Corrode", "Stupefy", "Confound", "Tribute", "Slime", "Soul Storm",
            "Final Ruse", "Augment", "Venom Slash", "Spectral Burst", "Energy Break", "Poison",
            "Far Enchantment", "Muck Blast", "Near Enchantment", "Power Focus", "Shrewd Blast",
            "Dodge", "Fade Away", "Ill Will", "Spare"
        ]
    },

    rancidor: {
        name: "Rancidor",
        types: ["Toxic", "Ancient"],
        abilities: ["Soul Siphon", "Do or Die"],
        sAbility: ["Devious"],
        weight: 32,
        height: 63,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 93,
            energy: 80,
            attack: 49,
            defense: 59,
            attackR: 99,
            defenseR: 92,
            speed: 113
        },
        movepool: [
            "Startle", "Corrode", "Stupefy", "Confound", "Tribute", "Slime", "Soul Storm",
            "Final Ruse", "Augment", "Venom Slash", "Spectral Burst", "Energy Break", "Poison",
            "Far Enchantment", "Muck Blast", "Near Enchantment", "Power Focus", "Shrewd Blast",
            "Dodge", "Fade Away", "Ill Will", "Spare", "Goop Spout", "Peace of Mind"
        ]
    },

    nautling: {
        name: "Nautling",
        types: ["Ancient", "Simple"],
        abilities: ["Watcher", "Protective Shell"],
        sAbility: ["Viscid"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 14,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 53,
            energy: 46,
            attack: 27,
            defense: 15,
            attackR: 27,
            defenseR: 15,
            speed: 17
        },
        movepool: ["Confound", "Dino Claws", "Shriek", "Strike", "Dodge", "Spare", "Safeguard"]
    },

    nautillect: {
        name: "Nautillect",
        types: ["Ancient", "Mind"],
        abilities: ["Watcher", "Wise"],
        sAbility: ["Viscid"],
        weight: 54,
        height: 51,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 106,
            energy: 82,
            attack: 59,
            defense: 74,
            attackR: 105,
            defenseR: 115,
            speed: 34
        },
        movepool: [
            "Confound", "Dino Claws", "Shriek", "Strike", "Dodge", "Spare", "Brain Exercise",
            "Brainwash", "Tamp", "Flabbergast", "Energy Break", "Tsunami", "Bane of Haste",
            "Psycho Blast", "Peace of Mind", "Mind Drain", "Safeguard", "Splitting Headache"
        ]
    },

    naukout: {
        name: "Naukout",
        types: ["Ancient", "Brawler"],
        abilities: ["Watcher", "Assertive"],
        sAbility: ["Viscid"],
        weight: 45,
        height: 53,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 106,
            energy: 82,
            attack: 105,
            defense: 115,
            attackR: 59,
            defenseR: 74,
            speed: 34
        },
        movepool: [
            "Confound", "Dino Claws", "Shriek", "Strike", "Dodge", "Spare", "Shadowbox", "Punch",
            "Tamp", "Mega Punch", "Primal Slash", "Wave Wrecker", "Bane of Haste", "Vital Jab",
            "Bulk Up", "Safeguard", "Quick Punch"
        ]
    },

    yutiny: {
        name: "Yutiny",
        types: ["Ancient", "Air"],
        abilities: ["Triumph", "Petrifying"],
        sAbility: ["Tumultuous"],
        finalEvo: false,
        tier: "LC",
        weight: 26,
        height: 26,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 47,
            energy: 57,
            attack: 61,
            defense: 31,
            attackR: 24,
            defenseR: 53,
            speed: 59
        },
        movepool: [
            "Dino Claws", "Gust", "Peck", "Stare", "Headbutt", "Augment", "Cyclone Slam", "Slash",
            "Sharpen", "Air Blade", "Perch", "Body Slam", "Near Enchantment", "Aqua Jaws",
            "Nosedive", "Outburst", "Provoke", "Wave Wrecker", "Dodge", "Ill Will", "Spare",
            "Bulk Up", "Safeguard"
        ]
    },

    yuteen: {
        name: "Yuteen",
        types: ["Ancient", "Air"],
        abilities: ["Triumph", "Petrifying"],
        sAbility: ["Tumultuous"],
        finalEvo: false,
        tier: "NFE",
        weight: 62,
        height: 56,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 61,
            energy: 69,
            attack: 80,
            defense: 42,
            attackR: 37,
            defenseR: 72,
            speed: 73
        },
        movepool: [
            "Dino Claws", "Gust", "Peck", "Stare", "Headbutt", "Augment", "Cyclone Slam", "Slash",
            "Sharpen", "Air Blade", "Perch", "Body Slam", "Near Enchantment", "Aqua Jaws",
            "Nosedive", "Outburst", "Provoke", "Wave Wrecker", "Dodge", "Ill Will", "Spare",
            "Primal Slash", "Bulk Up", "Safeguard"
        ]
    },

    yutyphoon: {
        name: "Yutyphoon",
        types: ["Ancient", "Air"],
        abilities: ["Triumph", "Petrifying"],
        sAbility: ["Tumultuous"],
        weight: 252,
        height: 110,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 82,
            energy: 87,
            attack: 115,
            defense: 66,
            attackR: 61,
            defenseR: 95,
            speed: 104
        },
        movepool: [
            "Dino Claws", "Gust", "Peck", "Stare", "Headbutt", "Augment", "Cyclone Slam", "Slash",
            "Sharpen", "Air Blade", "Perch", "Body Slam", "Near Enchantment", "Aqua Jaws",
            "Nosedive", "Outburst", "Provoke", "Wave Wrecker", "Dodge", "Ill Will", "Spare",
            "Primal Slash", "Ruffled Feathers", "Bulk Up", "Safeguard"
        ]
    },

    venile: {
        name: "Venile",
        types: ["Ancient", "Toxic"],
        abilities: ["Power Claw", "Venomous"],
        sAbility: ["Brutal Wrath"],
        finalEvo: false,
        tier: "LC",
        weight: 25,
        height: 26,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 47,
            energy: 57,
            attack: 61,
            defense: 53,
            attackR: 24,
            defenseR: 31,
            speed: 59
        },
        movepool: [
            "Dino Claws", "Poison Barbs", "Toxic Tail", "Stare", "Headbutt", "Augment",
            "Venom Chomp", "Slash", "Sharpen", "Venom Slash", "Poison", "Body Slam",
            "Far Enchantment", "Baneful Bash", "Mega Punch", "Outburst", "Provoke", "Dodge",
            "Ill Will", "Spare", "Bait"
        ]
    },

    verinox: {
        name: "Verinox",
        types: ["Ancient", "Toxic"],
        abilities: ["Power Claw", "Venomous"],
        sAbility: ["Brutal Wrath"],
        finalEvo: false,
        tier: "NFE",
        weight: 60,
        height: 64,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 61,
            energy: 69,
            attack: 80,
            defense: 72,
            attackR: 37,
            defenseR: 42,
            speed: 73
        },
        movepool: [
            "Dino Claws", "Poison Barbs", "Toxic Tail", "Stare", "Headbutt", "Augment",
            "Venom Chomp", "Slash", "Sharpen", "Venom Slash", "Poison", "Body Slam",
            "Far Enchantment", "Baneful Bash", "Mega Punch", "Outburst", "Provoke", "Dodge",
            "Ill Will", "Spare", "Primal Slash", "Bait"
        ]
    },

    verinosaur: {
        name: "Verinosaur",
        types: ["Ancient", "Toxic"],
        abilities: ["Power Claw", "Venomous"],
        sAbility: ["Brutal Wrath"],
        weight: 289,
        height: 116,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 82,
            energy: 87,
            attack: 115,
            defense: 95,
            attackR: 61,
            defenseR: 66,
            speed: 104
        },
        movepool: [
            "Dino Claws", "Poison Barbs", "Toxic Tail", "Stare", "Headbutt", "Augment",
            "Venom Chomp", "Slash", "Sharpen", "Venom Slash", "Poison", "Body Slam",
            "Far Enchantment", "Baneful Bash", "Mega Punch", "Outburst", "Provoke", "Dodge",
            "Ill Will", "Spare", "Primal Slash", "Barb Trap", "Bait"
        ]
    },

    nymvolt: {
        name: "Nymvolt",
        types: ["Electric", "Bug"],
        abilities: ["Recurrent", "Thunder Summon"],
        sAbility: ["Charged Arc"],
        finalEvo: false,
        tier: "LC",
        weight: 5,
        height: 37,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 43,
            energy: 60,
            attack: 29,
            defense: 30,
            attackR: 40,
            defenseR: 59,
            speed: 70
        },
        movepool: [
            "Thunderstorm", "Static Shock", "Preemptive Strike", "Bug Bite", "Stun", "Shine",
            "Flash", "Precision Bolt", "Pester", "Tribute", "Power Siphon", "Pestilence",
            "Jump Start", "Energy Surge", "Pheroblast", "Energize", "Jolt", "Dissipate",
            "Energy Break", "Lightspeed Ray", "Provoke", "Square One", "Teamwork", "Tear Down",
            "Thunder Blast", "Tricky Tactics", "Dodge", "Rejuvenate", "Spare", "Thunderstrike",
            "Zip-Zap", "Climate Cannon"
        ]
    },

    ohmbolt: {
        name: "Ohmbolt",
        types: ["Electric", "Bug"],
        abilities: ["Recurrent", "Thunder Summon"],
        sAbility: ["Charged Arc"],
        finalEvo: false,
        tier: "NFE",
        weight: 12,
        height: 39,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 66,
            energy: 93,
            attack: 29,
            defense: 54,
            attackR: 51,
            defenseR: 77,
            speed: 70
        },
        movepool: [
            "Thunderstorm", "Static Shock", "Preemptive Strike", "Bug Bite", "Stun", "Shine",
            "Flash", "Precision Bolt", "Pester", "Tribute", "Power Siphon", "Pestilence",
            "Jump Start", "Energy Surge", "Pheroblast", "Energize", "Jolt", "Dissipate",
            "Energy Break", "Lightspeed Ray", "Provoke", "Square One", "Teamwork", "Tear Down",
            "Thunder Blast", "Tricky Tactics", "Dodge", "Rejuvenate", "Spare", "Thunderstrike",
            "Zip-Zap", "Disperse", "Climate Cannon"
        ]
    },

    plasmoth: {
        name: "Plasmoth",
        types: ["Electric", "Bug"],
        abilities: ["Recurrent", "Thunder Summon"],
        sAbility: ["Charged Arc"],
        weight: 48,
        height: 69,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 86,
            energy: 93,
            attack: 49,
            defense: 67,
            attackR: 84,
            defenseR: 109,
            speed: 112
        },
        movepool: [
            "Thunderstorm", "Static Shock", "Preemptive Strike", "Bug Bite", "Stun", "Shine",
            "Flash", "Precision Bolt", "Pester", "Tribute", "Power Siphon", "Pestilence",
            "Jump Start", "Energy Surge", "Pheroblast", "Energize", "Jolt", "Dissipate",
            "Energy Break", "Lightspeed Ray", "Provoke", "Square One", "Teamwork", "Tear Down",
            "Thunder Blast", "Tricky Tactics", "Dodge", "Rejuvenate", "Spare", "Thunderstrike",
            "Zip-Zap", "Disperse", "Power Surge", "Climate Cannon"
        ]
    },

    cicalute: {
        name: "Cicalute",
        types: ["Bug", "Mind"],
        abilities: ["Metamorphosis", "Mesmerizing"],
        sAbility: ["Expertise"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 15,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 43,
            energy: 64,
            attack: 29,
            defense: 65,
            attackR: 29,
            defenseR: 53,
            speed: 40
        },
        movepool: [
            "Bug Bite", "Shriek", "Brainwash", "Brace", "Pester", "Deja Vu", "Harmonious Chord",
            "Flabbergast", "Mind's Eye", "Dissonant Chord", "Stratagem", "Pheroblast",
            "High-Pitch Screech", "Landslide", "Psycho Blast", "Repeating Tune", "Resonate",
            "Square One", "Dodge", "Mud Splatter", "Peace of Mind", "Rejuvenate", "Spare",
            "Tear Down", "Mudslide", "Hullabaloo", "Tone Barrier", "Gust"
        ]
    },

    violana: {
        name: "Violana",
        types: ["Bug", "Mind"],
        abilities: ["Metamorphosis", "Mesmerizing"],
        sAbility: ["Expertise"],
        weight: 13,
        height: 32,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 68,
            energy: 97,
            attack: 43,
            defense: 116,
            attackR: 89,
            defenseR: 112,
            speed: 61
        },
        movepool: [
            "Bug Bite", "Shriek", "Brainwash", "Brace", "Pester", "Deja Vu", "Harmonious Chord",
            "Flabbergast", "Mind's Eye", "Dissonant Chord", "Stratagem", "Pheroblast",
            "High-Pitch Screech", "Landslide", "Psycho Blast", "Repeating Tune", "Resonate",
            "Square One", "Dodge", "Mud Splatter", "Peace of Mind", "Rejuvenate", "Spare",
            "Discordance", "Air Blade", "Tear Down", "Mudslide", "Hullabaloo", "Tone Barrier",
            "Gust"
        ]
    },

    goswing: {
        name: "Goswing",
        types: ["Air", "Simple"],
        abilities: ["Compliant", "Burglar"],
        sAbility: ["Hydrate"],
        finalEvo: false,
        tier: "LC",
        weight: 3,
        height: 13,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hydrate", typeChart: "Hydrate" }],
        baseStats: {
            hp: 50,
            energy: 92,
            attack: 59,
            defense: 43,
            attackR: 34,
            defenseR: 41,
            speed: 66
        },
        movepool: [
            "Peck", "Strike", "Air Shot", "Quick Pounce", "Charade", "Scavenge", "Slash", "Enamor",
            "Slap Down", "Chase Down", "Sharpen", "Nab", "Perch", "Nosedive", "Body Slam", "Baffle",
            "Barbs", "Empathize", "Examine", "Far Enchantment", "Icicle Trap", "Near Enchantment",
            "Poison Barbs", "Preemptive Strike", "Provoke", "Raging Tackle", "Rogue Assault",
            "Teamwork", "Wave Wrecker", "Barter", "Bulk Up", "Dodge", "Ill Will", "Plunge", "Spare",
            "Tear Down", "Gust"
        ]
    },

    ganderveil: {
        name: "Ganderveil",
        types: ["Air", "Simple"],
        abilities: ["Compliant", "Burglar"],
        sAbility: ["Hydrate"],
        weight: 15,
        height: 40,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hydrate", typeChart: "Hydrate" }],
        baseStats: {
            hp: 86,
            energy: 107,
            attack: 109,
            defense: 71,
            attackR: 56,
            defenseR: 68,
            speed: 93
        },
        movepool: [
            "Peck", "Strike", "Air Shot", "Quick Pounce", "Charade", "Scavenge", "Slash", "Enamor",
            "Slap Down", "Chase Down", "Sharpen", "Nab", "Perch", "Nosedive", "Body Slam", "Baffle",
            "Barbs", "Empathize", "Examine", "Far Enchantment", "Icicle Trap", "Near Enchantment",
            "Poison Barbs", "Preemptive Strike", "Provoke", "Raging Tackle", "Rogue Assault",
            "Teamwork", "Wave Wrecker", "Barter", "Bulk Up", "Dodge", "Ill Will", "Plunge", "Spare",
            "Double Beat", "Tear Down", "Gust"
        ]
    },

    banooh: {
        name: "Banooh",
        types: ["Simple"],
        abilities: ["Shakedown", "Assertive"],
        sAbility: ["Berserk"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 41,
            energy: 45,
            attack: 24,
            defense: 25,
            attackR: 24,
            defenseR: 25,
            speed: 66
        },
        movepool: [
            "Chase Down", "Daydream", "Stare", "Spare", "Teamwork", "Stretch", "Headbutt",
            "Wonder Herb", "Tamp", "Body Slam", "Banana Split", "Coconut Bomb", "Scapegoat",
            "Barter", "Dodge", "Raging Tackle"
        ]
    },

    banokey: {
        name: "Banokey",
        types: ["Simple", "Brawler"],
        abilities: ["Shakedown", "Assertive"],
        sAbility: ["Berserk"],
        weight: 17,
        height: 41,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 97,
            energy: 89,
            attack: 124,
            defense: 50,
            attackR: 74,
            defenseR: 50,
            speed: 96
        },
        movepool: [
            "Chase Down", "Daydream", "Stare", "Spare", "Teamwork", "Stretch", "Headbutt",
            "Wonder Herb", "Tamp", "Body Slam", "Banana Split", "Coconut Bomb", "Scapegoat",
            "Barter", "Dodge", "Banana Slam", "Brawn Boost", "Frost Punch", "Preemptive Strike",
            "Slap Down", "Icicle Trap", "Bulk Up", "Frost Beam", "Raging Tackle"
        ]
    },

    spirwix: {
        name: "Spirwix",
        types: ["Fire", "Spirit"],
        abilities: ["Disenchant", "Raging Fire"],
        sAbility: ["Devious"],
        finalEvo: false,
        tier: "LC",
        weight: 2,
        height: 8,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Raging Fire", typeChart: "RagingFire" }],
        baseStats: {
            hp: 40,
            energy: 61,
            attack: 29,
            defense: 50,
            attackR: 100,
            defenseR: 50,
            speed: 45
        },
        movepool: [
            "Startle", "Singe", "Chase Down", "Burn Up", "Shine", "Pepper Burst", "Fade Away",
            "Provoke", "Gamma Pulse", "Tribute", "Spectral Burst", "Scapegoat", "Fire Breath",
            "Raging Flame", "Rant", "Bequeath", "Flare Blast", "Phantom Blast", "Tricky Tactics",
            "Dodge", "Fade Away", "Ill Will", "Peace of Mind", "Spare", "Hullabaloo", "Safeguard",
            "Barbs"
        ]
    },

    malevowax: {
        name: "Malevowax",
        types: ["Fire", "Spirit"],
        abilities: ["Disenchant", "Raging Fire"],
        sAbility: ["Devious"],
        weight: 8,
        height: 25,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Raging Fire", typeChart: "RagingFire" }],
        baseStats: {
            hp: 85,
            energy: 81,
            attack: 49,
            defense: 95,
            attackR: 120,
            defenseR: 95,
            speed: 75
        },
        movepool: [
            "Startle", "Singe", "Chase Down", "Burn Up", "Shine", "Pepper Burst", "Fade Away",
            "Provoke", "Gamma Pulse", "Tribute", "Spectral Burst", "Scapegoat", "Fire Breath",
            "Raging Flame", "Rant", "Bequeath", "Flare Blast", "Phantom Blast", "Tricky Tactics",
            "Dodge", "Ill Will", "Peace of Mind", "Spare", "Incinerate", "Hullabaloo", "Safeguard",
            "Barbs"
        ]
    },

    grievestone: {
        name: "Grievestone",
        types: ["Earth", "Spirit"],
        abilities: ["Sob", "Bitter Touch"],
        sAbility: ["Seize"],
        finalEvo: false,
        tier: "LC",
        weight: 86,
        height: 35,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 48,
            energy: 43,
            attack: 38,
            defense: 85,
            attackR: 85,
            defenseR: 30,
            speed: 30
        },
        movepool: [
            "Pebble Toss", "Stupefy", "Shriek", "Examine", "Empathize", "Quicksand",
            "Spectral Burst", "Dissonant Chord", "Scapegoat", "Rock Slide", "Soul Storm",
            "Body Crash", "Deja Vu", "Splitting Headache", "Bane of Haste", "Landslide", "Mudslide",
            "Phantom Slash", "Provoke", "Sap Plant", "Dodge", "Ill Will", "Mud Spatter",
            "Peace of Mind", "Spare", "Slumber", "Barbs"
        ]
    },

    obelost: {
        name: "Obelost",
        types: ["Earth", "Spirit"],
        abilities: ["Wail", "Bitter Touch"],
        sAbility: ["Seize"],
        weight: 339,
        height: 86,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 84,
            energy: 73,
            attack: 50,
            defense: 135,
            attackR: 135,
            defenseR: 50,
            speed: 60
        },
        movepool: [
            "Pebble Toss", "Stupefy", "Shriek", "Examine", "Empathize", "Quicksand",
            "Spectral Burst", "Dissonant Chord", "Scapegoat", "Rock Slide", "Soul Storm",
            "Body Crash", "Deja Vu", "Splitting Headache", "Bane of Haste", "Landslide", "Mudslide",
            "Phantom Slash", "Provoke", "Sap Plant", "Dodge", "Ill Will", "Mud Spatter",
            "Peace of Mind", "Spare", "Trick Shot", "Slumber", "Barbs"
        ]
    },

    jimby: {
        name: "Jimby",
        types: ["Simple"],
        abilities: ["Fortissimo", "Carol"],
        sAbility: ["Virtuoso"],
        finalEvo: false,
        tier: "LC",
        weight: 4,
        height: 13,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 40,
            energy: 58,
            attack: 28,
            defense: 27,
            attackR: 81,
            defenseR: 100,
            speed: 90
        },
        movepool: [
            "Spare", "Shriek", "Scapegoat", "Flurry", "Sap Plant", "Harmonious Chord", "Empathize",
            "Tear Down", "Repeating Tune", "Power Focus", "Frost Breath", "Wonder Herb",
            "Dissonant Chord", "Tribute", "Frost Beam", "Health Gift", "Icicle Trap", "Magnify",
            "Raging Howl", "Dodge", "Peace of Mind", "Deja Vu", "Slumber", "Tone Barrier"
        ]
    },

    piccolio: {
        name: "Piccolio",
        types: ["Simple"],
        abilities: ["Fortissimo", "Carol"],
        sAbility: ["Virtuoso"],
        weight: 11,
        height: 32,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 80,
            energy: 79,
            attack: 48,
            defense: 47,
            attackR: 111,
            defenseR: 120,
            speed: 90
        },
        movepool: [
            "Spare", "Shriek", "Scapegoat", "Flurry", "Sap Plant", "Harmonious Chord", "Empathize",
            "Tear Down", "Repeating Tune", "Power Focus", "Frost Breath", "Wonder Herb",
            "Dissonant Chord", "Tribute", "Frost Beam", "Health Gift", "Icicle Trap", "Magnify",
            "Raging Howl", "Dodge", "Peace of Mind", "Hullabaloo", "Deja Vu", "Slumber",
            "Tone Barrier"
        ]
    },

    wassel: {
        name: "Wassel",
        types: ["Ice"],
        abilities: ["Adorable"],
        sAbility: ["Elusive"],
        finalEvo: false,
        tier: "LC",
        weight: 7,
        height: 15,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 29,
            energy: 35,
            attack: 38,
            defense: 10,
            attackR: 14,
            defenseR: 21,
            speed: 53
        },
        movepool: [
            "Flurry", "Stretch", "Gnaw", "Sleet Shot", "Light Dash", "Nab", "Chilly Chomp",
            "Chase Down", "Blindspot Batter", "Psychal Chomp", "Undermine", "Icicle Trap",
            "Deep Freeze", "Radiant Rush", "Bitter Cold", "Deja Vu", "Disperse", "Far Enchantment",
            "Near Enchantment", "Nova Blast", "Provoke", "Slumber", "Stratagem", "Bulk Up", "Dodge",
            "Frost Beam", "Gamma Pulse", "Ill Will", "Spare"
        ]
    },

    borealisk: {
        name: "Borealisk",
        types: ["Ice"],
        abilities: ["Upper Hand"],
        sAbility: ["Elusive"],
        weight: 85,
        height: 113,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 98,
            energy: 70,
            attack: 118,
            defense: 57,
            attackR: 68,
            defenseR: 101,
            speed: 103
        },
        movepool: [
            "Flurry", "Stretch", "Gnaw", "Sleet Shot", "Light Dash", "Nab", "Chilly Chomp",
            "Chase Down", "Blindspot Batter", "Psychal Chomp", "Undermine", "Icicle Trap",
            "Deep Freeze", "Radiant Rush", "Bitter Cold", "Deja Vu", "Disperse", "Far Enchantment",
            "Near Enchantment", "Nova Blast", "Provoke", "Slumber", "Stratagem", "Bulk Up", "Dodge",
            "Frost Beam", "Gamma Pulse", "Ill Will", "Spare", "Icicle Tremor"
        ]
    },

    snicle: {
        name: "Snicle",
        types: ["Ice", "Dark"],
        abilities: ["Puncture"],
        sAbility: ["Toxic Sac"],
        finalEvo: false,
        tier: "LC",
        weight: 11,
        height: 37,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 30,
            energy: 30,
            attack: 53,
            defense: 49,
            attackR: 34,
            defenseR: 29,
            speed: 47
        },
        movepool: [
            "Gnaw", "Daydream", "Flurry", "Chomp", "Poison", "Chase Down", "Chilly Chomp",
            "Bamboozle", "Provoke", "Icicle Trap", "Venom Chomp", "Power Focus", "Frost Breath",
            "Mega Chomp", "Spike Rush", "Eerie Stare", "Charade", "Deja Vu", "Final Ruse", "Harrow",
            "Nab", "Preemptive Strike", "Quick Pounce", "Rough Up", "Slumber", "Square One",
            "Tricky Tactics", "Bulk Up", "Dark Surge", "Dodge", "Frost Beam", "Ill Will",
            "Vice Jaws", "Drudge", "Soul Storm"
        ]
    },

    slivyce: {
        name: "Slivyce",
        types: ["Ice", "Dark"],
        abilities: ["Puncture"],
        sAbility: ["Toxic Sac"],
        weight: 25,
        height: 86,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 83,
            energy: 83,
            attack: 102,
            defense: 103,
            attackR: 73,
            defenseR: 61,
            speed: 88
        },
        movepool: [
            "Gnaw", "Daydream", "Flurry", "Chomp", "Poison", "Chase Down", "Chilly Chomp",
            "Bamboozle", "Provoke", "Icicle Trap", "Venom Chomp", "Power Focus", "Frost Breath",
            "Mega Chomp", "Spike Rush", "Eerie Stare", "Charade", "Deja Vu", "Final Ruse", "Harrow",
            "Nab", "Preemptive Strike", "Quick Pounce", "Rough Up", "Slumber", "Square One",
            "Tricky Tactics", "Bulk Up", "Dark Surge", "Dodge", "Frost Beam", "Ill Will",
            "Icicle Fangs", "Vice Jaws", "Drudge", "Soul Storm"
        ]
    },

    nukichi: {
        name: "Nukichi",
        types: ["Simple"],
        abilities: ["Lucky", "Sly"],
        sAbility: ["Handy"],
        finalEvo: false,
        tier: "LC",
        weight: 6,
        height: 21,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 54,
            energy: 75,
            attack: 89,
            defense: 45,
            attackR: 53,
            defenseR: 37,
            speed: 96
        },
        movepool: [
            "Emulate", "Pounce", "Stupefy", "Scapegoat", "Headbutt", "Swat", "Shadow Sprint",
            "Sharpen", "Bamboozle", "Slash", "Tease", "Phantom Slash", "Body Slam", "Tricky Tactics",
            "Enamor", "Harrow", "Bag of Tricks", "Coconut Bomb", "Far Enchantment", "Impersonate",
            "Near Enchantment", "Raging Tackle", "Teamwork", "Tease", "Vital Jab", "Wonder Herb",
            "Barter", "Bulk Up", "Dodge", "Rejuvenate", "Spare"
        ]
    },

    dainuki: {
        name: "Dainuki",
        types: ["Simple"],
        abilities: ["Lucky", "Sly"],
        sAbility: ["Handy"],
        weight: 31,
        height: 42,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 108,
            energy: 96,
            attack: 89,
            defense: 93,
            attackR: 53,
            defenseR: 61,
            speed: 96
        },
        movepool: [
            "Emulate", "Pounce", "Stupefy", "Scapegoat", "Headbutt", "Swat", "Shadow Sprint",
            "Sharpen", "Bamboozle", "Slash", "Tease", "Phantom Slash", "Body Slam", "Tricky Tactics",
            "Enamor", "Harrow", "Bag of Tricks", "Coconut Bomb", "Far Enchantment", "Impersonate",
            "Near Enchantment", "Raging Tackle", "Teamwork", "Tease", "Vital Jab", "Wonder Herb",
            "Barter", "Bulk Up", "Dodge", "Rejuvenate", "Spare", "Hoodwink"
        ]
    },

    terracolt: {
        name: "Terracolt",
        types: ["Fire", "Earth"],
        finalEvo: false,
        tier: "NFE",
        weight: 40,
        height: 42,
        baseStats: {
            hp: 57,
            energy: 71,
            attack: 73,
            defense: 68,
            attackR: 46,
            defenseR: 42,
            speed: 68
        }
    },

    broncotta: {
        name: "Broncotta",
        types: ["Fire", "Earth"],
        weight: 158,
        height: 80,
        baseStats: {
            hp: 98,
            energy: 82,
            attack: 107,
            defense: 87,
            attackR: 58,
            defenseR: 61,
            speed: 102
        }
    },

    minink: {
        name: "Minink",
        types: ["Simple"],
        finalEvo: false,
        tier: "NFE",
        weight: 6,
        height: 21,
        baseStats: {
            hp: 59,
            energy: 59,
            attack: 53,
            defense: 61,
            attackR: 41,
            defenseR: 52,
            speed: 68
        }
    },

    erspring: {
        name: "Erspring",
        types: ["Simple"],
        weight: 26,
        height: 67,
        baseStats: {
            hp: 85,
            energy: 89,
            attack: 96,
            defense: 86,
            attackR: 54,
            defenseR: 72,
            speed: 94
        }
    },

    'wolkin-metal': {
        name: "Wolkin-Metal",
        types: ["Simple", "Metal"],
        finalEvo: false,
        tier: "NFE",
        weight: 10,
        height: 25,
        baseStats: {
            hp: 33,
            energy: 61,
            attack: 60,
            defense: 64,
            attackR: 36,
            defenseR: 41,
            speed: 69
        }
    },

    'wolkin-ice': {
        name: "Wolkin-Ice",
        types: ["Simple", "Ice"],
        finalEvo: false,
        tier: "NFE",
        weight: 10,
        height: 25,
        baseStats: {
            hp: 33,
            energy: 61,
            attack: 60,
            defense: 64,
            attackR: 36,
            defenseR: 41,
            speed: 69
        }
    },

    'fenreign-metal': {
        name: "Fenreign-Metal",
        types: ["Metal", "Simple"],
        weight: 24,
        height: 51,
        baseStats: {
            hp: 67,
            energy: 78,
            attack: 120,
            defense: 94,
            attackR: 54,
            defenseR: 64,
            speed: 102
        }
    },

    'fenreign-ice': {
        name: "Fenreign-Ice",
        types: ["Ice", "Simple"],
        weight: 24,
        height: 51,
        baseStats: {
            hp: 67,
            energy: 78,
            attack: 120,
            defense: 94,
            attackR: 54,
            defenseR: 64,
            speed: 102
        }
    },

    vermador: {
        name: "Vermador",
        types: ["Brawler", "Earth"],
        weight: 44,
        height: 50,
        baseStats: {
            hp: 60,
            energy: 73,
            attack: 108,
            defense: 98,
            attackR: 34,
            defenseR: 81,
            speed: 71
        }
    },

    puppear: {
        name: "Puppear",
        types: ["Plant", "Earth"],
        finalEvo: false,
        tier: "NFE",
        weight: 5,
        height: 14,
        baseStats: {
            hp: 56,
            energy: 49,
            attack: 43,
            defense: 46,
            attackR: 36,
            defenseR: 40,
            speed: 42
        }
    },

    pubble: {
        name: "Pubble",
        types: ["Plant", "Earth"],
        finalEvo: false,
        tier: "NFE",
        weight: 34,
        height: 53,
        baseStats: {
            hp: 93,
            energy: 68,
            attack: 91,
            defense: 76,
            attackR: 48,
            defenseR: 61,
            speed: 51
        }
    },

    pompamol: {
        name: "Pompamol",
        types: ["Plant", "Earth"],
        weight: 55,
        height: 63,
        baseStats: {
            hp: 124,
            energy: 82,
            attack: 101,
            defense: 98,
            attackR: 62,
            defenseR: 76,
            speed: 60
        }
    },

    cubscoot: {
        name: "Cubscoot",
        types: ["Simple"],
        finalEvo: false,
        tier: "NFE",
        weight: 10,
        height: 26,
        baseStats: {
            hp: 52,
            energy: 68,
            attack: 67,
            defense: 47,
            attackR: 30,
            defenseR: 47,
            speed: 44
        }
    },

    grizzol: {
        name: "Grizzol",
        types: ["Simple"],
        finalEvo: false,
        tier: "NFE",
        weight: 44,
        height: 42,
        baseStats: {
            hp: 93,
            energy: 76,
            attack: 92,
            defense: 81,
            attackR: 38,
            defenseR: 53,
            speed: 57
        }
    },

    grizurus: {
        name: "Grizurus",
        types: ["Simple", "Brawler"],
        weight: 181,
        height: 73,
        baseStats: {
            hp: 126,
            energy: 86,
            attack: 135,
            defense: 103,
            attackR: 43,
            defenseR: 67,
            speed: 65
        }
    },

    larvoll: {
        name: "Larvoll",
        types: ["Bug"],
        finalEvo: false,
        tier: "NFE",
        weight: 4,
        height: 14,
        baseStats: {
            hp: 10,
            energy: 55,
            attack: 5,
            defense: 10,
            attackR: 5,
            defenseR: 10,
            speed: 5
        }
    },

    helmant: {
        name: "Helmant",
        types: ["Bug", "Metal"],
        weight: 34,
        height: 42,
        baseStats: {
            hp: 73,
            energy: 76,
            attack: 116,
            defense: 114,
            attackR: 39,
            defenseR: 81,
            speed: 91
        }
    },

    regaliant: {
        name: "Regaliant",
        types: ["Bug", "Metal"],
        weight: 30,
        height: 51,
        baseStats: {
            hp: 73,
            energy: 76,
            attack: 116,
            defense: 144,
            attackR: 44,
            defenseR: 111,
            speed: 51
        }
    },

    spinette: {
        name: "Spinette",
        types: ["Bug"],
        finalEvo: false,
        tier: "NFE",
        weight: 4,
        height: 15,
        baseStats: {
            hp: 44,
            energy: 76,
            attack: 40,
            defense: 56,
            attackR: 33,
            defenseR: 40,
            speed: 57
        }
    },

    spinder: {
        name: "Spinder",
        types: ["Bug"],
        finalEvo: false,
        tier: "NFE",
        weight: 17,
        height: 47,
        baseStats: {
            hp: 66,
            energy: 81,
            attack: 79,
            defense: 91,
            attackR: 54,
            defenseR: 53,
            speed: 68
        }
    },

    silegant: {
        name: "Silegant",
        types: ["Bug", "Dark"],
        weight: 22,
        height: 51,
        baseStats: {
            hp: 88,
            energy: 86,
            attack: 101,
            defense: 111,
            attackR: 66,
            defenseR: 78,
            speed: 79
        }
    },

    trilobit: {
        name: "Trilobit",
        types: ["Bug"],
        finalEvo: false,
        tier: "NFE",
        weight: 8,
        height: 26,
        baseStats: {
            hp: 53,
            energy: 56,
            attack: 70,
            defense: 93,
            attackR: 26,
            defenseR: 46,
            speed: 57
        }
    },

    skirmapod: {
        name: "Skirmapod",
        types: ["Bug", "Brawler"],
        weight: 38,
        height: 58,
        baseStats: {
            hp: 87,
            energy: 70,
            attack: 118,
            defense: 114,
            attackR: 53,
            defenseR: 72,
            speed: 87
        }
    },

    curccul: {
        name: "Curccul",
        types: ["Bug"],
        finalEvo: false,
        tier: "NFE",
        weight: 3,
        height: 15,
        baseStats: {
            hp: 48,
            energy: 99,
            attack: 48,
            defense: 51,
            attackR: 26,
            defenseR: 43,
            speed: 57
        }
    },

    culstrum: {
        name: "Culstrum",
        types: ["Bug"],
        finalEvo: false,
        tier: "NFE",
        weight: 8,
        height: 41,
        baseStats: {
            hp: 77,
            energy: 88,
            attack: 91,
            defense: 88,
            attackR: 41,
            defenseR: 61,
            speed: 73
        }
    },

    culiosaur: {
        name: "Culiosaur",
        types: ["Bug", "Ancient"],
        weight: 222,
        height: 161,
        baseStats: {
            hp: 110,
            energy: 77,
            attack: 114,
            defense: 109,
            attackR: 54,
            defenseR: 82,
            speed: 73
        }
    },

    esperae: {
        name: "Esperae",
        types: ["Mind"],
        finalEvo: false,
        tier: "NFE",
        weight: 10,
        height: 27,
        baseStats: {
            hp: 103,
            energy: 83,
            attack: 20,
            defense: 20,
            attackR: 41,
            defenseR: 82,
            speed: 47
        }
    },

    infaella: {
        name: "Infaella",
        types: ["Mind", "Light"],
        weight: 20,
        height: 49,
        baseStats: {
            hp: 145,
            energy: 110,
            attack: 35,
            defense: 35,
            attackR: 79,
            defenseR: 118,
            speed: 57
        }
    },

    ponite: {
        name: "Ponite",
        types: ["Light"],
        finalEvo: false,
        tier: "NFE",
        weight: 25,
        height: 33,
        baseStats: {
            hp: 48,
            energy: 66,
            attack: 67,
            defense: 54,
            attackR: 44,
            defenseR: 42,
            speed: 71
        }
    },

    krystallion: {
        name: "Krystallion",
        types: ["Light", "Metal"],
        weight: 135,
        height: 88,
        baseStats: {
            hp: 73,
            energy: 81,
            attack: 101,
            defense: 98,
            attackR: 62,
            defenseR: 66,
            speed: 99
        }
    },

    sylphairi: {
        name: "Sylphairi",
        types: ["Air"],
        finalEvo: false,
        tier: "NFE",
        weight: 3,
        height: 30,
        baseStats: {
            hp: 33,
            energy: 50,
            attack: 35,
            defense: 33,
            attackR: 37,
            defenseR: 63,
            speed: 52
        }
    },

    sylphae: {
        name: "Sylphae",
        types: ["Air"],
        finalEvo: false,
        tier: "NFE",
        weight: 7,
        height: 37,
        baseStats: {
            hp: 51,
            energy: 62,
            attack: 70,
            defense: 45,
            attackR: 72,
            defenseR: 79,
            speed: 81
        }
    },

    sylphyr: {
        name: "Sylphyr",
        types: ["Air", "Brawler"],
        weight: 19,
        height: 74,
        baseStats: {
            hp: 72,
            energy: 83,
            attack: 96,
            defense: 54,
            attackR: 99,
            defenseR: 100,
            speed: 105
        }
    },

    humby: {
        name: "Humby",
        types: ["Air"],
        finalEvo: false,
        tier: "NFE",
        weight: 1,
        height: 8,
        baseStats: {
            hp: 61,
            energy: 66,
            attack: 60,
            defense: 52,
            attackR: 26,
            defenseR: 59,
            speed: 70
        }
    },

    kolipeep: {
        name: "Kolipeep",
        types: ["Air"],
        weight: 7,
        height: 29,
        baseStats: {
            hp: 90,
            energy: 93,
            attack: 95,
            defense: 72,
            attackR: 52,
            defenseR: 88,
            speed: 100
        }
    },

    cubali: {
        name: "Cubali",
        types: ["Mind", "Earth"],
        finalEvo: false,
        tier: "NFE",
        weight: 16,
        height: 28,
        baseStats: {
            hp: 59,
            energy: 73,
            attack: 62,
            defense: 53,
            attackR: 62,
            defenseR: 53,
            speed: 52
        }
    },

    psygris: {
        name: "Psygris",
        types: ["Mind", "Earth"],
        weight: 115,
        height: 89,
        baseStats: {
            hp: 91,
            energy: 73,
            attack: 109,
            defense: 84,
            attackR: 109,
            defenseR: 84,
            speed: 65
        }
    },

    arketta: {
        name: "Arketta",
        types: ["Water", "Brawler"],
        finalEvo: false,
        tier: "NFE",
        weight: 3,
        height: 13,
        baseStats: {
            hp: 43,
            energy: 56,
            attack: 48,
            defense: 37,
            attackR: 82,
            defenseR: 61,
            speed: 65
        }
    },

    brawfin: {
        name: "Brawfin",
        types: ["Water", "Brawler"],
        finalEvo: false,
        tier: "NFE",
        weight: 26,
        height: 51,
        baseStats: {
            hp: 56,
            energy: 69,
            attack: 62,
            defense: 50,
            attackR: 101,
            defenseR: 78,
            speed: 85
        }
    },

    gajahra: {
        name: "Gajahra",
        types: ["Light", "Brawler"],
        weight: 61,
        height: 98,
        baseStats: {
            hp: 67,
            energy: 82,
            attack: 77,
            defense: 64,
            attackR: 126,
            defenseR: 91,
            speed: 97
        }
    },

    'glintera-fire': {
        name: "Glintera-Fire",
        types: ["Earth", "Fire"],
        weight: 68,
        height: 30,
        baseStats: {
            hp: 50,
            energy: 75,
            attack: 111,
            defense: 96,
            attackR: 60,
            defenseR: 93,
            speed: 40
        }
    },

    'glintera-water': {
        name: "Glintera-Water",
        types: ["Earth", "Water"],
        weight: 68,
        height: 30,
        baseStats: {
            hp: 111,
            energy: 75,
            attack: 50,
            defense: 60,
            attackR: 93,
            defenseR: 96,
            speed: 40
        }
    },

    'glintera-electric': {
        name: "Glintera-Electric",
        types: ["Earth", "Electric"],
        weight: 68,
        height: 30,
        baseStats: {
            hp: 60,
            energy: 75,
            attack: 96,
            defense: 93,
            attackR: 111,
            defenseR: 50,
            speed: 40
        }
    },

    'glintera-light': {
        name: "Glintera-Light",
        types: ["Earth", "Light"],
        weight: 68,
        height: 30,
        baseStats: {
            hp: 93,
            energy: 75,
            attack: 60,
            defense: 50,
            attackR: 96,
            defenseR: 111,
            speed: 40
        }
    },

    'glintera-dark': {
        name: "Glintera-Dark",
        types: ["Earth", "Dark"],
        weight: 68,
        height: 30,
        baseStats: {
            hp: 96,
            energy: 75,
            attack: 93,
            defense: 111,
            attackR: 50,
            defenseR: 60,
            speed: 40
        }
    },

    'glintera-fire-geoknight': {
        name: "Glintera-Fire-Geoknight",
        types: ["Earth", "Fire"],
        ability: "Merge",
        soulMove: "Fusion Barrage",
        item: "Glintburst",
        weight: 340,
        height: 121,
        baseStats: {
            hp: 111,
            energy: 0,
            attack: 111,
            defense: 111,
            attackR: 111,
            defenseR: 111,
            speed: 70
        }
    },

    'glintera-water-geoknight': {
        name: "Glintera-Water-Geoknight",
        types: ["Earth", "Water"],
        ability: "Merge",
        soulMove: "Fusion Barrage",
        item: "Glintburst",
        weight: 340,
        height: 121,
        baseStats: {
            hp: 111,
            energy: 0,
            attack: 111,
            defense: 111,
            attackR: 111,
            defenseR: 111,
            speed: 70
        }
    },

    'glintera-electric-geoknight': {
        name: "Glintera-Electric-Geoknight",
        types: ["Earth", "Electric"],
        ability: "Merge",
        soulMove: "Fusion Barrage",
        item: "Glintburst",
        weight: 340,
        height: 121,
        baseStats: {
            hp: 111,
            energy: 0,
            attack: 111,
            defense: 111,
            attackR: 111,
            defenseR: 111,
            speed: 70
        }
    },

    'glintera-light-geoknight': {
        name: "Glintera-Light-Geoknight",
        types: ["Earth", "Light"],
        ability: "Merge",
        soulMove: "Fusion Barrage",
        item: "Glintburst",
        weight: 340,
        height: 121,
        baseStats: {
            hp: 111,
            energy: 0,
            attack: 111,
            defense: 111,
            attackR: 111,
            defenseR: 111,
            speed: 70
        }
    },

    'glintera-dark-geoknight': {
        name: "Glintera-Dark-Geoknight",
        types: ["Earth", "Dark"],
        ability: "Merge",
        soulMove: "Fusion Barrage",
        item: "Glintburst",
        weight: 340,
        height: 121,
        baseStats: {
            hp: 111,
            energy: 0,
            attack: 111,
            defense: 111,
            attackR: 111,
            defenseR: 111,
            speed: 70
        }
    },

    noctulite: {
        name: "Noctulite",
        types: ["Metal", "Ancient"],
        finalEvo: false,
        tier: "NFE",
        weight: 25,
        height: 21,
        baseStats: {
            hp: 43,
            energy: 68,
            attack: 81,
            defense: 37,
            attackR: 69,
            defenseR: 34,
            speed: 91
        }
    },

    bismyotis: {
        name: "Bismyotis",
        types: ["Metal", "Ancient"],
        weight: 70,
        height: 56,
        baseStats: {
            hp: 73,
            energy: 86,
            attack: 114,
            defense: 57,
            attackR: 101,
            defenseR: 49,
            speed: 112
        }
    },

    pikbug: {
        name: "Pikbug",
        types: ["Bug", "Metal"],
        finalEvo: false,
        tier: "NFE",
        weight: 6,
        height: 18,
        baseStats: {
            hp: 30,
            energy: 63,
            attack: 37,
            defense: 68,
            attackR: 21,
            defenseR: 38,
            speed: 31
        }
    },

    crawlley: {
        name: "Crawlley",
        types: ["Bug", "Metal"],
        finalEvo: false,
        tier: "NFE",
        weight: 86,
        height: 38,
        baseStats: {
            hp: 53,
            energy: 83,
            attack: 51,
            defense: 99,
            attackR: 30,
            defenseR: 53,
            speed: 56
        }
    },

    carapede: {
        name: "Carapede",
        types: ["Bug", "Metal"],
        weight: 308,
        height: 160,
        baseStats: {
            hp: 74,
            energy: 96,
            attack: 83,
            defense: 140,
            attackR: 49,
            defenseR: 76,
            speed: 91
        }
    },

    kumiro: {
        name: "Kumiro",
        types: ["Ice", "Spirit"],
        finalEvo: false,
        tier: "NFE",
        weight: 11,
        height: 28,
        baseStats: {
            hp: 53,
            energy: 66,
            attack: 37,
            defense: 51,
            attackR: 65,
            defenseR: 59,
            speed: 67
        }
    },

    vixumi: {
        name: "Vixumi",
        types: ["Ice", "Spirit"],
        weight: 81,
        height: 75,
        baseStats: {
            hp: 88,
            energy: 83,
            attack: 54,
            defense: 82,
            attackR: 96,
            defenseR: 103,
            speed: 106
        }
    },

    vollops: {
        name: "Vollops",
        types: ["Spirit", "Electric"],
        weight: 2,
        height: 28,
        baseStats: {
            hp: 69,
            energy: 75,
            attack: 20,
            defense: 59,
            attackR: 96,
            defenseR: 86,
            speed: 120
        }
    },

    snifflin: {
        name: "Snifflin",
        types: ["Ice", "Simple"],
        finalEvo: false,
        tier: "NFE",
        weight: 40,
        height: 37,
        baseStats: {
            hp: 90,
            energy: 96,
            attack: 48,
            defense: 43,
            attackR: 36,
            defenseR: 38,
            speed: 52
        }
    },

    nostroll: {
        name: "Nostroll",
        types: ["Ice", "Simple"],
        weight: 233,
        height: 102,
        baseStats: {
            hp: 132,
            energy: 96,
            attack: 81,
            defense: 76,
            attackR: 53,
            defenseR: 70,
            speed: 72
        }
    },

    svelpup: {
        name: "Svelpup",
        types: ["Water", "Ice"],
        finalEvo: false,
        tier: "NFE",
        weight: 8,
        height: 21,
        baseStats: {
            hp: 55,
            energy: 49,
            attack: 34,
            defense: 25,
            attackR: 34,
            defenseR: 26,
            speed: 36
        }
    },

    sigleo: {
        name: "Sigleo",
        types: ["Water", "Ice"],
        finalEvo: false,
        tier: "NFE",
        weight: 61,
        height: 56,
        baseStats: {
            hp: 83,
            energy: 68,
            attack: 70,
            defense: 57,
            attackR: 53,
            defenseR: 61,
            speed: 78
        }
    },

    berserus: {
        name: "Berserus",
        types: ["Water", "Ice"],
        weight: 187,
        height: 92,
        baseStats: {
            hp: 101,
            energy: 78,
            attack: 98,
            defense: 108,
            attackR: 59,
            defenseR: 113,
            speed: 42
        }
    },

    tadplode: {
        name: "Tadplode",
        types: ["Ice"],
        finalEvo: false,
        tier: "NFE",
        weight: 6,
        height: 8,
        baseStats: {
            hp: 50,
            energy: 60,
            attack: 37,
            defense: 42,
            attackR: 88,
            defenseR: 45,
            speed: 34
        }
    },

    nitroad: {
        name: "Nitroad",
        types: ["Ice", "Fire"],
        weight: 105,
        height: 62,
        baseStats: {
            hp: 100,
            energy: 86,
            attack: 86,
            defense: 81,
            attackR: 119,
            defenseR: 87,
            speed: 41
        }
    },

    snugguin: {
        name: "Snugguin",
        types: ["Ice"],
        finalEvo: false,
        tier: "NFE",
        weight: 5,
        height: 13,
        baseStats: {
            hp: 32,
            energy: 26,
            attack: 40,
            defense: 19,
            attackR: 21,
            defenseR: 18,
            speed: 44
        }
    },

    penguard: {
        name: "Penguard",
        types: ["Ice"],
        finalEvo: false,
        tier: "NFE",
        weight: 39,
        height: 45,
        baseStats: {
            hp: 63,
            energy: 63,
            attack: 70,
            defense: 91,
            attackR: 48,
            defenseR: 66,
            speed: 59
        }
    },

    frigicrest: {
        name: "Frigicrest",
        types: ["Ice"],
        weight: 115,
        height: 73,
        baseStats: {
            hp: 88,
            energy: 81,
            attack: 101,
            defense: 110,
            attackR: 62,
            defenseR: 87,
            speed: 69
        }
    },

    plasmite: {
        name: "Plasmite",
        types: ["Bug", "Fire"],
        finalEvo: false,
        tier: "NFE",
        weight: 11,
        height: 31,
        baseStats: {
            hp: 84,
            energy: 75,
            attack: 53,
            defense: 56,
            attackR: 48,
            defenseR: 56,
            speed: 57
        }
    },

    coagulex: {
        name: "Coagulex",
        types: ["Bug", "Fire"],
        weight: 44,
        height: 109,
        baseStats: {
            hp: 84,
            energy: 75,
            attack: 96,
            defense: 56,
            attackR: 82,
            defenseR: 56,
            speed: 130
        }
    },

    embryx: {
        name: "Embryx",
        types: ["Dark"],
        ability: "Conditioned",
        finalEvo: false,
        tier: "NFE",
        weight: 16,
        height: 29,
        baseStats: {
            hp: 33,
            energy: 75,
            attack: 53,
            defense: 53,
            attackR: 89,
            defenseR: 57,
            speed: 91
        }
    },

    cocoonyx: {
        name: "Cocoonyx",
        types: ["Dark"],
        ability: "Conditioned",
        finalEvo: false,
        tier: "NFE",
        weight: 18,
        height: 30,
        baseStats: {
            hp: 49,
            energy: 75,
            attack: 53,
            defense: 93,
            attackR: 89,
            defenseR: 97,
            speed: 53
        }
    },

    archanox: {
        name: "Archanox",
        types: ["Dark", "Ancient"],
        ability: "Black Heart",
        weight: 120,
        height: 135,
        baseStats: {
            hp: 78,
            energy: 75,
            attack: 67,
            defense: 83,
            attackR: 129,
            defenseR: 87,
            speed: 106
        }
    },

    'koz-moh': {
        name: "Koz-Moh",
        types: ["Metal", "Simple"],
        finalEvo: false,
        tier: "NFE",
        weight: 16,
        height: 29,
        baseStats: {
            hp: 73,
            energy: 61,
            attack: 46,
            defense: 54,
            attackR: 27,
            defenseR: 27,
            speed: 58
        }
    },

    'ohni-on': {
        name: "Ohni-On",
        types: ["Metal", "Simple"],
        finalEvo: false,
        tier: "NFE",
        weight: 55,
        height: 52,
        baseStats: {
            hp: 98,
            energy: 78,
            attack: 62,
            defense: 68,
            attackR: 38,
            defenseR: 38,
            speed: 67
        }
    },

    'koz-mech': {
        name: "Koz-Mech",
        types: ["Metal", "Simple"],
        weight: 81,
        height: 57,
        baseStats: {
            hp: 130,
            energy: 99,
            attack: 90,
            defense: 83,
            attackR: 49,
            defenseR: 49,
            speed: 83
        }
    },

    navilite: {
        name: "Navilite",
        types: ["Metal"],
        finalEvo: false,
        tier: "NFE",
        weight: 106,
        height: 55,
        baseStats: {
            hp: 60,
            energy: 60,
            attack: 60,
            defense: 60,
            attackR: 60,
            defenseR: 60,
            speed: 60
        }
    },

    xenark: {
        name: "Xenark",
        types: ["Metal", "Dark"],
        weight: 86,
        height: 92,
        baseStats: {
            hp: 60,
            energy: 90,
            attack: 120,
            defense: 75,
            attackR: 90,
            defenseR: 90,
            speed: 90
        }
    },

    radiarc: {
        name: "Radiarc",
        types: ["Metal", "Electric"],
        weight: 161,
        height: 74,
        baseStats: {
            hp: 90,
            energy: 90,
            attack: 60,
            defense: 90,
            attackR: 90,
            defenseR: 120,
            speed: 75
        }
    },

    eagrim: {
        name: "Eagrim",
        types: ["Electric", "Air"],
        finalEvo: false,
        tier: "NFE",
        weight: 16,
        height: 27,
        baseStats: {
            hp: 60,
            energy: 55,
            attack: 85,
            defense: 55,
            attackR: 50,
            defenseR: 40,
            speed: 55
        }
    },

    fowlgur: {
        name: "Fowlgur",
        types: ["Electric", "Air"],
        finalEvo: false,
        tier: "NFE",
        weight: 44,
        height: 53,
        baseStats: {
            hp: 75,
            energy: 65,
            attack: 105,
            defense: 65,
            attackR: 60,
            defenseR: 55,
            speed: 80
        }
    },

    fulgurath: {
        name: "Fulgurath",
        types: ["Electric", "Air"],
        weight: 153,
        height: 101,
        baseStats: {
            hp: 95,
            energy: 75,
            attack: 125,
            defense: 85,
            attackR: 70,
            defenseR: 75,
            speed: 100
        }
    },

    sprigna: {
        name: "Sprigna",
        types: ["Ice", "Plant"],
        finalEvo: false,
        tier: "NFE",
        weight: 5,
        height: 19,
        baseStats: {
            hp: 53,
            energy: 72,
            attack: 40,
            defense: 39,
            attackR: 72,
            defenseR: 63,
            speed: 65
        }
    },

    kelpos: {
        name: "Kelpos",
        types: ["Ice", "Plant"],
        finalEvo: false,
        tier: "NFE",
        weight: 5,
        height: 19,
        baseStats: {
            hp: 70,
            energy: 83,
            attack: 51,
            defense: 46,
            attackR: 96,
            defenseR: 74,
            speed: 86
        }
    },

    slugoona: {
        name: "Slugoona",
        types: ["Ice", "Plant"],
        weight: 5,
        height: 19,
        baseStats: {
            hp: 87,
            energy: 91,
            attack: 64,
            defense: 59,
            attackR: 126,
            defenseR: 90,
            speed: 108
        }
    },

    ignigrub: {
        name: "Ignigrub",
        types: ["Bug", "Fire"],
        finalEvo: false,
        tier: "NFE",
        weight: 5,
        height: 13,
        baseStats: {
            hp: 38,
            energy: 52,
            attack: 62,
            defense: 61,
            attackR: 38,
            defenseR: 44,
            speed: 48
        }
    },

    caranade: {
        name: "Caranade",
        types: ["Bug", "Fire"],
        finalEvo: false,
        tier: "NFE",
        weight: 17,
        height: 37,
        baseStats: {
            hp: 52,
            energy: 68,
            attack: 77,
            defense: 80,
            attackR: 48,
            defenseR: 61,
            speed: 67
        }
    },

    stagnite: {
        name: "Stagnite",
        types: ["Bug", "Fire"],
        finalEvo: false,
        tier: "NFE",
        weight: 76,
        height: 78,
        baseStats: {
            hp: 75,
            energy: 81,
            attack: 115,
            defense: 101,
            attackR: 58,
            defenseR: 82,
            speed: 113
        }
    },

    duskit: {
        name: "Duskit",
        types: ["Mind", "Spirit"],
        abilities: ["Harmonize"],
        sAbility: ["Mean Spirited"],
        weight: 16,
        height: 37,
        gender: ["Ungendered"],
        baseStats: {
            hp: 74,
            energy: 100,
            attack: 100,
            defense: 81,
            attackR: 132,
            defenseR: 104,
            speed: 109
        },
        movepool: [
            "Startle", "Final Ruse", "Brainwash", "Stupefy", "Return to Sender", "Oppress",
            "Spectral Burst", "Peace of Mind", "Phantom Slash", "Deja Vu", "Cerebral Slash",
            "Chase Down", "Dark Surge", "Fade Away", "Flabbergast", "Harrow", "Outburst",
            "Psycho Blast", "Pyrokinesis", "Raging Flame", "Shadow Sprint", "Spare", "Tribute",
            "Dodge", "Hypnotize", "Rainbow Blast", "Provoke", "Phantom Blast", "Hasten",
            "Bitter Cold", "Poison", "Stun"
        ]
    },

    ikazune: {
        name: "Ikazune",
        types: ["Fire", "Electric"],
        abilities: ["Raging Fire"],
        sAbility: ["Rechargeable"],
        weight: 38,
        height: 69,
        gender: ["Ungendered"],
        typeVariants: [{ ability: "Raging Fire", typeChart: "RagingFire" }, { ability: "Rechargeable", typeChart: "Rechargeable" }],
        baseStats: {
            hp: 72,
            energy: 115,
            attack: 119,
            defense: 62,
            attackR: 149,
            defenseR: 89,
            speed: 94
        },
        movepool: [
            "Stun", "Singe", "Static Shock", "Thunder Chomp", "Blaze Chomp", "Electro Burst",
            "Fire Breath", "Power Focus", "Thunder Crash", "Energy Surge", "Nature's Force",
            "Burn Up", "Energize", "Jolt", "Magnify", "Raging Flame", "Thunderstrike", "Zip-Zap",
            "Dodge", "Spare", "Blaze Rush", "Blaze of Glory", "Charred Claws"
        ]
    },

    protogon: {
        name: "Protogon",
        types: ["Metal"],
        abilities: ["Analyze"],
        sAbility: ["Replicate"],
        weight: 135,
        height: 103,
        gender: ["Ungendered"],
        baseStats: {
            hp: 58,
            energy: 118,
            attack: 82,
            defense: 99,
            attackR: 121,
            defenseR: 101,
            speed: 121
        },
        movepool: [
            "Bash", "Tail Slap", "Tune-Up", "Metal Swipes", "Power Siphon", "Dart Burst",
            "Energy Surge", "Augment", "Metal Blast", "Deja Vu", "Electro-Punch", "Steel Crusher",
            "Thunderstrike", "Dodge", "Spare", "Zip-Zap", "Barbs"
        ]
    },

    dakuda: {
        name: "Dakuda",
        types: ["Water"],
        abilities: ["Brute Force"],
        sAbility: ["Hydrate"],
        weight: 135,
        height: 86,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Hydrate", typeChart: "Hydrate" }],
        baseStats: {
            hp: 99,
            energy: 119,
            attack: 127,
            defense: 86,
            attackR: 95,
            defenseR: 77,
            speed: 97
        },
        movepool: [
            "Spray", "Growl", "Static Shock", "Water Bomb", "Stun", "Torrential Slash", "Swipe",
            "Power Focus", "Thunder Slam", "Energize", "Provoke", "Slap Down", "Thunder Crash",
            "Bulk Up", "Dodge", "Gamma Pulse", "Ill Will", "Maroon", "Plunge", "Spare",
            "Thunderstrike", "Tsunami", "Thunder Blast"
        ]
    },

    'dakuda-overcharged': {
        name: "Dakuda-Overcharged",
        types: ["Water", "Electric"],
        ability: "Railgun",
        soulMove: "Electro Blast",
        item: "Dakuburst",
        weight: 135,
        height: 86,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 119,
            energy: 119,
            attack: 95,
            defense: 96,
            attackR: 157,
            defenseR: 87,
            speed: 77
        },
        movepool: [
            "Spray", "Growl", "Static Shock", "Water Bomb", "Tase", "Torrential Slash", "Swipe",
            "Power Focus", "Thunder Slam", "Energize", "Provoke", "Slap Down", "Thunder Crash",
            "Venom Slash", "Bulk Up", "Dodge", "Gamma Pulse", "Ill Will", "Maroon", "Plunge",
            "Spare", "Thunderstrike", "Tsunami", "Electro Blast", "Thunder Blast"
        ]
    },

    yamashkigal: {
        name: "Yamashkigal",
        types: ["Metal", "Toxic"],
        weight: 423,
        height: 337,
        baseStats: {
            hp: 115,
            energy: 90,
            attack: 140,
            defense: 100,
            attackR: 55,
            defenseR: 85,
            speed: 115
        }
    },

    cosmeleon: {
        name: "Cosmeleon",
        types: ["Simple"],
        ability: "Adaptable",
        weight: 8,
        height: 66,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 100,
            energy: 100,
            attack: 100,
            defense: 100,
            attackR: 100,
            defenseR: 100,
            speed: 100
        },
        movepool: [
            "Strike", "Shriek", "Heat Wave", "Downpour", "Gale Force", "Hazy Shroud", "Thunderstorm",
            "Singe", "Spray", "Air Shot", "Stupefy", "Static Shock", "Power Focus",
            "Harmonious Chord", "Swipe", "Climate Cannon", "Blaze Chomp", "Hydro Slash",
            "Cyclone Slam", "Phantom Slash", "Thunder Slam", "Slash", "High-Pitch Screech",
            "Tribute", "Pepper Burst", "Maroon", "Air Blade", "Spectral Burst", "Precision Bolt",
            "Flare Blast", "Hydro Blast", "Typhoon", "Phantom Blast", "Thunder Blast",
            "Far Enchantment", "Gust", "Impersonate", "Near Enchantment", "Raging Flame",
            "Soft Water", "Peace of Mind", "Bulk Up", "Dodge", "Spare"
        ]
    },

    mutagon: {
        name: "Mutagon",
        types: ["Mind", "Brawler"],
        abilities: ["Tank"],
        sAbility: ["Heavy Fists"],
        weight: 125,
        height: 92,
        gender: ["Ungendered"],
        baseStats: {
            hp: 107,
            energy: 123,
            attack: 114,
            defense: 139,
            attackR: 78,
            defenseR: 68,
            speed: 71
        },
        movepool: [
            "Brainwash", "Punch", "Stare", "Swipe", "Chop", "Telekinetic Sweep", "Frost Punch",
            "Brawn Boost", "Mega Punch", "Cerebral Slash", "Body Crash", "Boom Bash", "Psycho Blast",
            "Spare", "Barter", "Bulk Up", "Dodge", "Ill Will", "Peace of Mind", "Spare", "Provoke"
        ]
    },

    cephalops: {
        name: "Cephalops",
        types: ["Water", "Dark"],
        abilities: ["Bloodsucker"],
        sAbility: ["Nightmarish"],
        weight: 141,
        height: 99,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 164,
            energy: 116,
            attack: 96,
            defense: 69,
            attackR: 129,
            defenseR: 74,
            speed: 52
        },
        movepool: [
            "Spray", "Tease", "Rant", "Water Bomb", "Soul Drain", "Tsunami", "Eerie Stare",
            "Bug Bite", "Square One", "Dark Surge", "Parasitize", "Icicle Trap", "Dodge",
            "Hypnotize", "Plunge", "Spare", "Wave Wrecker"
        ]
    },

    elephage: {
        name: "Elephage",
        types: ["Electric"],
        abilities: ["Malware"],
        sAbility: ["Replicate"],
        finalEvo: false,
        tier: "NFE",
        weight: 10,
        height: 35,
        gender: ["Ungendered"],
        baseStats: {
            hp: 105,
            energy: 90,
            attack: 55,
            defense: 55,
            attackR: 125,
            defenseR: 55,
            speed: 110
        },
        movepool: [
            "Static Shock", "Memorize", "Examine", "Jolt", "Jump Start", "Stun", "Thunder Slam",
            "Power Siphon", "Precision Bolt", "Energize", "Zip-Zap", "Thunder Clap", "Thunder Crash",
            "Body Slam", "Deja Vu", "Dissonant Chord", "Final Ruse", "Harmonious Chord",
            "High-Pitch Screech", "Magnify", "Provoke", "Quick Pounce", "Rant", "Repeating Tune",
            "Tear Down", "Dodge", "Flash 'n Flee", "Ill Will", "Rejuvenate", "Spare",
            "Thunderstrike", "Thunder Blast", "Thunderstorm", "Hullabaloo"
        ]
    },

    phagenaut: {
        name: "Phagenaut",
        types: ["Electric"],
        abilities: ["Malware"],
        sAbility: ["Overcharged"],
        weight: 114,
        height: 107,
        gender: ["Ungendered"],
        baseStats: {
            hp: 105,
            energy: 105,
            attack: 75,
            defense: 120,
            attackR: 145,
            defenseR: 55,
            speed: 95
        },
        movepool: [
            "Static Shock", "Memorize", "Examine", "Jolt", "Jump Start", "Stun", "Thunder Slam",
            "Power Siphon", "Precision Bolt", "Energize", "Zip-Zap", "Thunder Clap", "Thunder Crash",
            "Body Slam", "Deja Vu", "Dissonant Chord", "Final Ruse", "Harmonious Chord",
            "High-Pitch Screech", "Magnify", "Provoke", "Quick Pounce", "Rant", "Repeating Tune",
            "Tear Down", "Dodge", "Flash 'n Flee", "Ill Will", "Rejuvenate", "Spare",
            "Thunderstrike", "Power Draw", "Thunder Blast", "Thunderstorm", "Hullabaloo"
        ]
    },

    arceros: {
        name: "Arceros",
        types: ["Fire", "Ancient"],
        abilities: ["Burning Rage"],
        sAbility: ["Third-degree Burn"],
        weight: 198,
        height: 116,
        gender: ["Ungendered"],
        baseStats: {
            hp: 96,
            energy: 115,
            attack: 119,
            defense: 112,
            attackR: 88,
            defenseR: 79,
            speed: 91
        },
        movepool: [
            "Singe", "Dino Claws", "Gnaw", "Sharpen", "Slash", "Burn Up", "Primal Slash",
            "Flaming Kick", "Slumber", "Blaze Chomp", "Draco Beam", "High-Pitch Screech",
            "Near Enchantment", "Outburst", "Pyrokinesis", "Raging Howl", "Raging Tackle",
            "Shrewd Blast", "Bulk Up", "Dodge", "Fire Breath", "Ill Will", "Spare", "Raging Flame",
            "Blaze Rush", "Charred Claws", "Blaze of Glory"
        ]
    },

    glacadia: {
        name: "Glacadia",
        types: ["Ice", "Ancient"],
        abilities: ["Chilling Passion"],
        sAbility: ["Frostbite"],
        weight: 236,
        height: 122,
        gender: ["Ungendered"],
        baseStats: {
            hp: 96,
            energy: 115,
            attack: 88,
            defense: 69,
            attackR: 119,
            defenseR: 102,
            speed: 111
        },
        movepool: [
            "Flurry", "Confound", "Gnaw", "Disperse", "Frost Breath", "Slash", "Icicle Trap",
            "Shrewd Blast", "Frost Beam", "Slumber", "Chilly Chomp", "Draco Beam", "Energy Break",
            "Far Enchantment", "High-Pitch Screech", "Ice Hammer", "Outburst", "Primal Slash",
            "Raging Howl", "Raging Tackle", "Dodge", "Ill Will", "Peace of Mind", "Spare",
            "Bitter Cold", "Frost Blast"
        ]
    },

    novadeaus: {
        name: "Novadeaus",
        types: ["Fire", "Ice"],
        ability: "Obsidian Heart",
        weight: 429,
        height: 145,
        gender: ["Ungendered"],
        baseStats: {
            hp: 96,
            energy: 115,
            attack: 134,
            defense: 90,
            attackR: 134,
            defenseR: 80,
            speed: 101
        },
        movepool: [
            "Flurry", "Confound", "Gnaw", "Disperse", "Frost Breath", "Slash", "Icicle Trap",
            "Shrewd Blast", "Frost Beam", "Slumber", "Chilly Chomp", "Draco Beam", "Energy Break",
            "Far Enchantment", "High-Pitch Screech", "Ice Hammer", "Outburst", "Primal Slash",
            "Raging Howl", "Raging Tackle", "Dodge", "Ill Will", "Peace of Mind", "Spare", "Singe",
            "Dino Claws", "Gnaw", "Sharpen", "Burn Up", "Flaming Kick", "Blaze Chomp",
            "Near Enchantment", "Pyrokinesis", "Bulk Up", "Fire Breath", "Blaze Rush",
            "Charred Claws", "Blaze of Glory", "Frost Blast"
        ]
    },

    morphezu: {
        name: "Morphezu",
        types: ["Air"],
        abilities: ["Sky-Borne"],
        sAbility: ["All Seeing"],
        weight: 198,
        height: 116,
        gender: ["Ungendered"],
        baseStats: {
            hp: 115,
            energy: 90,
            attack: 55,
            defense: 55,
            attackR: 150,
            defenseR: 100,
            speed: 85
        },
        movepool: [
            "Expert Onslaught", "Stare", "Air Shot", "Air Whip", "Eerie Stare", "Cyclone Slam",
            "Power Focus", "Headbutt", "Air Blade", "Slumber", "High-Pitch Screech", "Nosedive",
            "Jet Stream", "Metal Blast", "Primal Slash", "Psycho Blast", "Shrewd Blast", "Dodge",
            "Hypnotize", "Peace of Mind", "Spare", "Typhoon"
        ]
    },

    behemoroth: {
        name: "Behemoroth",
        types: ["Earth"],
        abilities: ["Land-Borne"],
        sAbility: ["All Seeing"],
        weight: 198,
        height: 116,
        gender: ["Ungendered"],
        baseStats: {
            hp: 115,
            energy: 90,
            attack: 150,
            defense: 100,
            attackR: 55,
            defenseR: 55,
            speed: 85
        },
        movepool: [
            "Expert Onslaught", "Stare", "Burrow", "Quicksand", "Eerie Stare", "Clay Slap",
            "Power Focus", "Headbutt", "Mudslide", "Slumber", "High-Pitch Screech", "Earthquake",
            "Driving Force", "Landslide", "Primal Slash", "Shrewd Blast", "Timber Thrash", "Bulk Up",
            "Dodge", "Hypnotize", "Mud Spatter", "Spare", "Rogue Assault"
        ]
    },

    leviatross: {
        name: "Leviatross",
        types: ["Water"],
        abilities: ["Depths-Borne"],
        sAbility: ["All Seeing"],
        weight: 198,
        height: 116,
        gender: ["Ungendered"],
        baseStats: {
            hp: 115,
            energy: 90,
            attack: 100,
            defense: 55,
            attackR: 85,
            defenseR: 55,
            speed: 150
        },
        movepool: [
            "Expert Onslaught", "Stare", "Soft Water", "Water Bomb", "Eerie Stare", "Aqua Jaws",
            "Power Focus", "Headbutt", "Maroon", "Slumber", "High-Pitch Screech", "Wave Wrecker",
            "Dark Surge", "Mega Chomp", "Phantom Slash", "Primal Slash", "Shrewd Blast",
            "Spectral Burst", "Bulk Up", "Dodge", "Hypnotize", "Peace of Mind", "Plunge", "Spare",
            "Tsunami", "Icicle Trap", "Hydro Blast", "Harrow", "Provoke", "Lunge"
        ]
    },

    'cosmiore-encased': {
        name: "Cosmiore-Encased",
        types: ["Ancient", "Mind"],
        abilities: ["Enchanted Coat"],
        sAbility: ["Quick Recovery"],
        weight: 123,
        height: 37,
        gender: ["Ungendered"],
        formerNames: ["Cosmiore"],
        icon: "cosmiore",
        baseStats: {
            hp: 99,
            energy: 145,
            attack: 68,
            defense: 135,
            attackR: 84,
            defenseR: 98,
            speed: 46
        },
        movepool: [
            "Brace", "Confound", "Brainwash", "Bane of Haste", "Spare", "Power Focus",
            "Cerebral Slash", "Meteor Crash", "Meteor Smash", "Headbutt", "Slumber", "Psycho Blast",
            "Bulk Up", "Dissipate", "Fire Slam", "Icicle Trap", "Peace of Mind", "Dodge",
            "Hypnotize", "Ill Will", "Rainbow Blast", "Frost Breath", "Judgement", "Slap Down",
            "Wonder Herb"
        ]
    },

    'cosmiore-cracked': {
        name: "Cosmiore-Cracked",
        types: ["Ancient", "Mind"],
        abilities: ["Enchanted Coat"],
        sAbility: ["Eager"],
        weight: 123,
        height: 37,
        gender: ["Ungendered"],
        baseStats: {
            hp: 99,
            energy: 115,
            attack: 68,
            defense: 115,
            attackR: 124,
            defenseR: 78,
            speed: 76
        },
        movepool: [
            "Brace", "Confound", "Brainwash", "Bane of Haste", "Spare", "Power Focus",
            "Cerebral Slash", "Meteor Crash", "Meteor Smash", "Headbutt", "Slumber", "Psycho Blast",
            "Bulk Up", "Dissipate", "Fire Slam", "Icicle Trap", "Peace of Mind", "Dodge",
            "Hypnotize", "Ill Will", "Rainbow Blast", "Frost Breath", "Judgement", "Slap Down"
        ]
    },

    'cosmiore-unleashed': {
        name: "Cosmiore-Unleashed",
        types: ["Ancient", "Mind"],
        abilities: ["Cosmic Pressure"],
        sAbility: ["Idiosyncratic"],
        weight: 123,
        height: 37,
        gender: ["Ungendered"],
        baseStats: {
            hp: 99,
            energy: 105,
            attack: 134,
            defense: 105,
            attackR: 68,
            defenseR: 68,
            speed: 96
        },
        movepool: [
            "Brace", "Confound", "Brainwash", "Bane of Haste", "Spare", "Power Focus",
            "Cerebral Slash", "Meteor Crash", "Meteor Smash", "Headbutt", "Slumber", "Psycho Blast",
            "Bulk Up", "Dissipate", "Fire Slam", "Icicle Trap", "Peace of Mind", "Dodge",
            "Hypnotize", "Ill Will", "Rainbow Blast", "Frost Breath", "Judgement", "Slap Down"
        ]
    },

    solnecta: {
        name: "Solnecta",
        types: ["Bug", "Light"],
        abilities: ["Night Light"],
        sAbility: ["Intensify"],
        weight: 13,
        height: 40,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 111,
            energy: 81,
            attack: 96,
            defense: 80,
            attackR: 129,
            defenseR: 92,
            speed: 86
        },
        movepool: [
            "Shine", "Bug Bite", "Flash", "Sting", "Singe", "Mind's Eye", "Luster Loot", "Pester",
            "Air Shot", "Pepper Burst", "Flabbergast", "Blindspot Batter", "Counter Poise",
            "Air Whip", "Magnify", "Gamma Pulse", "Lunge", "Air Blade", "Blaze Rush",
            "Cerebral Slash", "Disperse", "Double Beat", "Double Sting", "Energy Surge",
            "Health Gift", "Hyper Sting", "Judgement", "Light Dash", "Lightspeed Ray", "Parasitize",
            "Pheroblast", "Psycho Blast", "Radiant Rush", "Tear Down", "Wonder Herb", "Barter",
            "Bulk Up", "Dodge", "Fire Breath", "Peace of Mind", "Rejuvenate", "Spare"
        ]
    },

    nymaurae: {
        name: "Nymaurae",
        types: ["Light", "Air"],
        abilities: ["Quick Recovery"],
        sAbility: ["Incandescent"],
        weight: 10,
        height: 27,
        gender: ["Ungendered"],
        baseStats: {
            hp: 76,
            energy: 115,
            attack: 66,
            defense: 77,
            attackR: 119,
            defenseR: 122,
            speed: 100
        },
        movepool: [
            "Shine", "Air Shot", "Tail Slap", "Disperse", "Air Whip", "Luster Loot",
            "Harmonious Chord", "Deja Vu", "Air Blade", "Dissonant Chord", "Gamma Pulse",
            "Jet Stream", "Peace of Mind", "Perch", "Wonder Herb", "Barter", "Dodge",
            "Flash 'n Flee", "Hypnotize", "Spare", "Rainbow Blast", "Tear Down", "Gust"
        ]
    },

    nymesis: {
        name: "Nymesis",
        types: ["Dark", "Air"],
        abilities: ["Impose"],
        sAbility: ["Pitch-Black"],
        weight: 10,
        height: 27,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 76,
            energy: 115,
            attack: 66,
            defense: 77,
            attackR: 119,
            defenseR: 122,
            speed: 100
        },
        movepool: [
            "Air Shot", "Aggravate", "Tail Slap", "Provoke", "Air Whip", "Bamboozle", "Swipe",
            "Deja Vu", "Air Blade", "High-Pitch Screech", "Shadow Pulse", "Jet Stream",
            "Pepper Burst", "Perch", "Barter", "Dodge", "Dark Surge", "Hypnotize", "Peace of Mind",
            "Spare", "Tear Down"
        ]
    },

    metronette: {
        name: "Metronette",
        types: ["Dark", "Mind"],
        abilities: ["Mysterious Cloak"],
        sAbility: ["Applied Frustration"],
        weight: 31,
        height: 38,
        gender: ["Ungendered"],
        baseStats: {
            hp: 83,
            energy: 128,
            attack: 84,
            defense: 69,
            attackR: 127,
            defenseR: 79,
            speed: 105
        },
        movepool: [
            "Chomp", "Brainwash", "Stupefy", "Mind's Eye", "Flabbergast", "Eerie Stare",
            "Pyrokinesis", "Deja Vu", "Phantom Slash", "Dark Surge", "Charade", "Bag of Tricks",
            "Cerebral Slash", "Gnarly Gash", "Mega Punch", "Peace of Mind", "Provoke",
            "Psycho Blast", "Soul Storm", "Barter", "Bulk Up", "Dodge", "Hypnotize", "Ill Will",
            "Mud Spatter", "Spare", "Mind Drain", "Judgement", "Rogue Assault", "Power Focus",
            "Harrow", "Barbs"
        ]
    },

    'metronette-willbound': {
        name: "Metronette-Willbound",
        types: ["Dark", "Mind"],
        ability: "Demanding",
        soulMove: "Sinister Shackles",
        item: "Metroburst",
        weight: 31,
        height: 38,
        gender: ["Ungendered"],
        baseStats: {
            hp: 83,
            energy: 98,
            attack: 134,
            defense: 69,
            attackR: 147,
            defenseR: 79,
            speed: 115
        },
        movepool: [
            "Chomp", "Brainwash", "Stupefy", "Mind's Eye", "Flabbergast", "Eerie Stare",
            "Pyrokinesis", "Deja Vu", "Phantom Slash", "Dark Surge", "Charade", "Bag of Tricks",
            "Cerebral Slash", "Gnarly Gash", "Mega Punch", "Peace of Mind", "Provoke",
            "Psycho Blast", "Soul Storm", "Splitting Headache", "Barter", "Bulk Up", "Dodge",
            "Hypnotize", "Ill Will", "Mud Spatter", "Spare", "Sinister Shackles", "Mind Drain",
            "Judgement", "Rogue Assault", "Power Focus", "Harrow", "Barbs"
        ]
    },

    nevermare: {
        name: "Nevermare",
        types: ["Plant", "Spirit"],
        abilities: ["Razor Sharp"],
        sAbility: ["Frenzy"],
        weight: 221,
        height: 86,
        gender: ["Ungendered"],
        baseStats: {
            hp: 66,
            energy: 120,
            attack: 113,
            defense: 89,
            attackR: 66,
            defenseR: 110,
            speed: 111
        },
        movepool: [
            "Petal Pummel", "Stupefy", "Stretch", "Startle", "Rant", "Bush Whack", "Sharpen",
            "Headbutt", "Thistle Slash", "Phantom Slash", "Provoke", "Bulk Up", "Primal Slash",
            "Wonder Herb", "Dark Surge", "Dodge", "Ill Will", "Mud Spatter", "Spare",
            "Spectral Burst", "Harrow", "Vine Lash", "Parasitize", "Barbs"
        ]
    },

    gargolem: {
        name: "Gargolem",
        types: ["Earth", "Air"],
        abilities: ["Immunized"],
        sAbility: ["Master"],
        weight: 155,
        height: 73,
        gender: ["Ungendered"],
        baseStats: {
            hp: 55,
            energy: 105,
            attack: 120,
            defense: 85,
            attackR: 120,
            defenseR: 85,
            speed: 105
        },
        movepool: [
            "Air Shot", "Dino Claws", "Wing Slap", "Clay Slap", "Slash", "Tamp", "Accelerate",
            "Air Blade", "Mudslide", "Barbs", "Nosedive", "Earthquake", "Bane of Haste", "Body Slam",
            "Boom Bash", "Cerebral Slash", "Chase Down", "Driving Force", "Gnarly Gash",
            "Icicle Trap", "Jet Stream", "Landslide", "Nab", "Primal Slash", "Provoke",
            "Return to Sender", "Rogue Assault", "Scapegoat", "Slap Down", "Swat", "Tribute",
            "Dark Surge", "Dodge", "Mud Spatter", "Spare", "Tear Down"
        ]
    },

    'gargolem-attack': {
        name: "Gargolem-Attack",
        types: ["Earth", "Air"],
        abilities: ["Immunized"],
        sAbility: ["Master"],
        weight: 171,
        height: 77,
        gender: ["Ungendered"],
        baseStats: {
            hp: 55,
            energy: 105,
            attack: 165,
            defense: 40,
            attackR: 165,
            defenseR: 40,
            speed: 105
        },
        movepool: [
            "Air Shot", "Dino Claws", "Wing Slap", "Clay Slap", "Slash", "Tamp", "Accelerate",
            "Air Blade", "Mudslide", "Barbs", "Nosedive", "Earthquake", "Bane of Haste", "Body Slam",
            "Boom Bash", "Cerebral Slash", "Chase Down", "Driving Force", "Gnarly Gash",
            "Icicle Trap", "Jet Stream", "Landslide", "Nab", "Primal Slash", "Provoke",
            "Return to Sender", "Rogue Assault", "Scapegoat", "Slap Down", "Swat", "Tribute",
            "Dark Surge", "Dodge", "Mud Spatter", "Spare", "Tear Down"
        ]
    },

    'gargolem-defense': {
        name: "Gargolem-Defense",
        types: ["Earth", "Air"],
        abilities: ["Immunized"],
        sAbility: ["Master"],
        weight: 181,
        height: 78,
        gender: ["Ungendered"],
        baseStats: {
            hp: 55,
            energy: 105,
            attack: 60,
            defense: 165,
            attackR: 60,
            defenseR: 165,
            speed: 65
        },
        movepool: [
            "Air Shot", "Dino Claws", "Wing Slap", "Clay Slap", "Slash", "Tamp", "Accelerate",
            "Air Blade", "Mudslide", "Barbs", "Nosedive", "Earthquake", "Bane of Haste", "Body Slam",
            "Boom Bash", "Cerebral Slash", "Chase Down", "Driving Force", "Gnarly Gash",
            "Icicle Trap", "Jet Stream", "Landslide", "Nab", "Primal Slash", "Provoke",
            "Return to Sender", "Rogue Assault", "Scapegoat", "Slap Down", "Swat", "Tribute",
            "Dark Surge", "Dodge", "Mud Spatter", "Spare", "Tear Down"
        ]
    },

    'gargolem-speed': {
        name: "Gargolem-Speed",
        types: ["Earth", "Air"],
        abilities: ["Immunized"],
        sAbility: ["Master"],
        weight: 64,
        height: 61,
        gender: ["Ungendered"],
        baseStats: {
            hp: 55,
            energy: 105,
            attack: 90,
            defense: 85,
            attackR: 90,
            defenseR: 85,
            speed: 165
        },
        movepool: [
            "Air Shot", "Dino Claws", "Wing Slap", "Clay Slap", "Slash", "Tamp", "Accelerate",
            "Air Blade", "Mudslide", "Barbs", "Nosedive", "Earthquake", "Bane of Haste", "Body Slam",
            "Boom Bash", "Cerebral Slash", "Chase Down", "Driving Force", "Gnarly Gash",
            "Icicle Trap", "Jet Stream", "Landslide", "Nab", "Primal Slash", "Provoke",
            "Return to Sender", "Rogue Assault", "Scapegoat", "Slap Down", "Swat", "Tribute",
            "Dark Surge", "Dodge", "Mud Spatter", "Spare", "Tear Down"
        ]
    },

    odoyaga: {
        name: "Odoyaga",
        types: ["Mind", "Air"],
        abilities: ["Hag"],
        sAbility: ["Frenzy"],
        weight: 191,
        height: 74,
        gender: ["Female"],
        baseStats: {
            hp: 93,
            energy: 95,
            attack: 103,
            defense: 109,
            attackR: 131,
            defenseR: 73,
            speed: 71
        },
        movepool: [
            "Gust", "Brainwash", "Mind's Eye", "Cyclone Slam", "Flabbergast", "Scapegoat",
            "Phantom Slash", "Peace of Mind", "Shrewd Blast", "Air Blade", "Splitting Headache",
            "Blaze Punch", "Cerebral Slash", "Electro-Punch", "Frost Punch", "Gnarly Gash",
            "High-Pitch Screech", "Jet Stream", "Nosedive", "Outburst", "Primal Slash", "Provoke",
            "Psycho Blast", "Summon", "Tear Down", "Bulk Up", "Dark Surge", "Dodge", "Fire Breath",
            "Frost Beam", "Ill Will", "Peace of Mind", "Spare", "Spectral Burst", "Thunderstrike",
            "Icicle Trap", "Bane of Haste", "Typhoon"
        ]
    },

    wabalisc: {
        name: "Wabalisc",
        types: ["Ice"],
        abilities: ["Ignorant"],
        sAbility: ["Hasty"],
        weight: 131,
        height: 86,
        gender: ["Ungendered"],
        baseStats: {
            hp: 106,
            energy: 103,
            attack: 99,
            defense: 88,
            attackR: 112,
            defenseR: 98,
            speed: 69
        },
        movepool: [
            "Flurry", "Growl", "Headbutt", "Sharpen", "Chilly Chomp", "Eerie Stare", "Sleet Shot",
            "Talent Trade", "Frost Punch", "Body Slam", "Frost Beam", "Barbs", "Clay Slap",
            "Deep Freeze", "Driving Force", "Earthquake", "Electro-Punch", "Ice Hammer",
            "Icicle Trap", "Luster Loot", "Power Focus", "Rant", "Rogue Assault", "Scapegoat",
            "Dodge", "Ill Will", "Mud Spatter", "Spare", "Vital Jab", "Slap Down", "Bitter Cold"
        ]
    },

    akhalos: {
        name: "Akhalos",
        types: ["Ice", "Water"],
        abilities: ["Aqua Body"],
        sAbility: ["Aggressive"],
        weight: 221,
        height: 86,
        gender: ["Male", "Female"],
        typeVariants: [{ ability: "Aqua Body", typeChart: "AquaBody" }],
        baseStats: {
            hp: 116,
            energy: 94,
            attack: 120,
            defense: 97,
            attackR: 73,
            defenseR: 91,
            speed: 84
        },
        movepool: [
            "Spray", "Flurry", "Growl", "Water Bomb", "Chilly Chomp", "Slash", "Icicle Trap",
            "Hydro Slash", "Deep Freeze", "Brawn Boost", "Aqua Jaws", "Body Slam", "Driving Force",
            "Drudge", "Gnarly Gash", "Ice Hammer", "Rogue Assault", "Soft Water", "Tsunami",
            "Wave Wrecker", "Dodge", "Frost Beam", "Maroon", "Plunge", "Spare"
        ]
    },

    celesting: {
        name: "Celesting",
        types: ["Metal", "Light"],
        abilities: ["Reverberate"],
        sAbility: ["Mystic Tone"],
        weight: 21,
        height: 33,
        gender: ["Ungendered"],
        baseStats: {
            hp: 125,
            energy: 125,
            attack: 63,
            defense: 79,
            attackR: 108,
            defenseR: 84,
            speed: 91
        },
        movepool: [
            "Summon", "Shine", "Flash", "Bash", "Mind's Eye", "Harmonious Chord", "Lightspeed Ray",
            "Heavy Bash", "Disperse", "Energy Surge", "Metal Blast", "Barbs", "Deja Vu",
            "Dissonant Chord", "Gamma Pulse", "Health Gift", "Icicle Trap", "Luster Loot",
            "Nova Blast", "Reflection Burst", "Repeating Tune", "Resonate", "Tear Down", "Barter",
            "Dodge", "Flash 'n Flee", "Peace of Mind", "Spare", "Hullabaloo", "Tone Barrier"
        ]
    },

    'celesting-stellarchime': {
        name: "Celesting-Stellarchime",
        types: ["Metal", "Light"],
        ability: "Effulgent",
        soulMove: "Miracle Beam",
        item: "Celeburst",
        weight: 21,
        height: 33,
        gender: ["Ungendered"],
        baseStats: {
            hp: 150,
            energy: 111,
            attack: 82,
            defense: 19,
            attackR: 128,
            defenseR: 114,
            speed: 121
        },
        movepool: [
            "Summon", "Shine", "Flash", "Bash", "Mind's Eye", "Harmonious Chord", "Lightspeed Ray",
            "Heavy Bash", "Disperse", "Energy Surge", "Metal Blast", "Barbs", "Deja Vu",
            "Dissonant Chord", "Gamma Pulse", "Health Gift", "Icicle Trap", "Luster Loot",
            "Nova Blast", "Reflection Burst", "Repeating Tune", "Resonate", "Tear Down", "Barter",
            "Dodge", "Flash 'n Flee", "Peace of Mind", "Spare", "Miracle Beam", "Cosmic Chime",
            "Tone Barrier"
        ]
    },

    mimask: {
        name: "Mimask",
        types: ["Dark"],
        abilities: ["Mask Swap"],
        sAbility: ["Facade"],
        weight: 34,
        height: 59,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 95,
            energy: 113,
            attack: 117,
            defense: 65,
            attackR: 107,
            defenseR: 65,
            speed: 113
        },
        movepool: [
            "Quick Pounce", "Chomp", "Provoke", "Bamboozle", "Slash", "Sharpen", "Pilfer",
            "Phantom Slash", "Body Slam", "Slap Down", "Harrow", "Bag of Tricks", "Baneful Bash",
            "Barbs", "Chase Down", "Gnarly Gash", "Muck Blast", "Poison Barbs", "Power Focus",
            "Primal Slash", "Shadow Sprint", "Shrewd Blast", "Soul Storm", "Tear Down",
            "Tricky Tactics", "Barter", "Bulk Up", "Dark Surge", "Dodge", "Fade Away", "Ill Will",
            "Mud Spatter", "Peace of Mind", "Spare", "Spectral Burst", "Emulate", "Climate Cannon"
        ]
    },

    grimyuline: {
        name: "Grimyuline",
        types: ["Dark", "Brawler"],
        abilities: ["Sharp Edges"],
        sAbility: ["Sharp Claws"],
        weight: 106,
        height: 98,
        gender: ["Male", "Female"],
        baseStats: {
            hp: 101,
            energy: 78,
            attack: 107,
            defense: 110,
            attackR: 84,
            defenseR: 97,
            speed: 98
        },
        movepool: [
            "Chomp", "Punch", "Swipe", "Provoke", "Preemptive Strike", "Pilfer", "Quick Pounce",
            "Boom Bash", "Dark Surge", "Chase Down", "High-Pitch Screech", "Gain Drain", "Sharpen",
            "Mega Chomp", "Vital Jab", "Slumber", "Barbs", "Briar Block", "Gnarly Gash", "Nab",
            "Pep Jab", "Poison Barbs", "Quick Punch", "Raging Howl", "Raging Tackle",
            "Rogue Assault", "Slap Down", "Bulk Up", "Dodge", "Ill Will", "Peace of Mind", "Spare",
            "Thistle Slash", "Body Crash", "Luster Loot"
        ]
    }
};

var moves = {
    pounce: {
        name: "Pounce",
        power: 40,
        energy: 15,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    stalk: {
        name: "Stalk",
        power: 80,
        energy: 40,
        accuracy: "N/A",
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    singe: {
        name: "Singe",
        power: 40,
        energy: 20,
        accuracy: 100,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    eruption: {
        name: "Eruption",
        power: 125,
        energy: 0,
        accuracy: "N/A",
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    hellstorm: {
        name: "Hellstorm",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    meltdown: {
        name: "Meltdown",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Fire",
        mr: "Ranged",
        mr1: "Melee Attack",
        mr2: "Ranged Defense",
        knockOff: true
    },

    spray: {
        name: "Spray",
        power: 40,
        energy: 20,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    gulp: {
        name: "Gulp",
        power: 65,
        energy: 45,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        knockOff: true
    },

    strike: {
        name: "Strike",
        power: 40,
        energy: 15,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    shine: {
        name: "Shine",
        power: 40,
        energy: 20,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    miracleBeam: {
        name: "Miracle Beam",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    novaBlast: {
        name: "Nova Blast",
        power: 95,
        energy: 52,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    lightspeedRay: {
        name: "Lightspeed Ray",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    gnaw: {
        name: "Gnaw",
        power: 40,
        energy: 15,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    chomp: {
        name: "Chomp",
        power: 45,
        energy: 20,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    trickyTactics: {
        name: "Tricky Tactics",
        power: 95,
        energy: 55,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    gnarlyGash: {
        name: "Gnarly Gash",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slash: true
    },

    flurry: {
        name: "Flurry",
        power: 40,
        energy: 22,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    outOfOrder: {
        name: "Out of Order",
        power: 150,
        energy: 60,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    petalPummel: {
        name: "Petal Pummel",
        power: 40,
        energy: 20,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense"
    },

    thornSlam: {
        name: "Thorn Slam",
        power: 110,
        energy: 55,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        stat: {amount: -1, battle: "Offense", stat: "AttackM"}
    },

    staticShock: {
        name: "Static Shock",
        power: 40,
        energy: 20,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    swipe: {
        name: "Swipe",
        power: 60,
        energy: 22,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    bugBite: {
        name: "Bug Bite",
        power: 30,
        energy: 20,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true,
        drain: 1/2
    },

    carnivorousSnap: {
        name: "Carnivorous Snap",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true,
        drain: 1/2,
    },

    peck: {
        name: "Peck",
        power: 35,
        energy: 15,
        accuracy: 100,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    sting: {
        name: "Sting",
        power: 15,
        energy: 10,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true,
        contact: true
    },

    banefulGnash: {
        name: "Baneful Gnash",
        power: 95,
        energy: 50,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true,
        contact: true,
        bite: true
    },

    pestilence: {
        name: "Pestilence",
        power: 60,
        energy: 35,
        accuracy: 100,
        type: "Bug",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    steelTrap: {
        name: "Steel Trap",
        power: 60,
        energy: 35,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense"
    },

    discordance: {
        name: "Discordance",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        secondaryEffect: true
    },

    bloodDrain: {
        name: "Blood Drain",
        power: 20,
        energy: 30,
        accuracy: 90,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    diveBomb: {
        name: "Dive Bomb",
        power: 50,
        energy: 26,
        accuracy: 90,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    bamboozle: {
        name: "Bamboozle",
        power: 60,
        energy: 26,
        accuracy: "N/A",
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    scavenge: {
        name: "Scavenge",
        power: 60,
        energy: 32,
        accuracy: 100,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    doubleBeat: {
        name: "Double Beat",
        power: 40,
        energy: 40,
        accuracy: 90,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        hits: 2
    },

    submerge: {
        name: "Submerge",
        power: 75,
        energy: 30,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    heedlessRush: {
        name: "Heedless Rush",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    torrentialSlash: {
        name: "Torrential Slash",
        power: 95,
        energy: 50,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slash: true
    },

    mudSpatter: {
        name: "Mud Spatter",
        power: 55,
        energy: 30,
        accuracy: 100,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    landslide: {
        name: "Landslide",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    pebbleToss: {
        name: "Pebble Toss",
        power: 30,
        energy: 15,
        accuracy: 100,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    doubleSting: {
        name: "Double Sting",
        power: 25,
        energy: 28,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        hits: 2,
        secondaryEffect: true,
        contact: true
    },

    lusterLoot: {
        name: "Luster Loot",
        power: 50,
        energy: 35,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        drain: 3/4
    },

    mysticBreeze: {
        name: "Mystic Breeze",
        power: 60,
        energy: 30,
        accuracy: 100,
        type: "Bug",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    pilfer: {
        name: "Pilfer",
        power: 60,
        energy: 32,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    tase: {
        name: "Tase",
        power: 20,
        energy: 35,
        accuracy: 100,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    radiantForecast: {
        name: "Radiant Forecast",
        power: 110,
        energy: 44,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    corrode: {
        name: "Corrode",
        power: 40,
        energy: 24,
        accuracy: 100,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    quickPounce: {
        name: "Quick Pounce",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        priority: true
    },

    nab: {
        name: "Nab",
        power: 75,
        energy: 35,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    cycloneSlam: {
        name: "Cyclone Slam",
        power: 60,
        energy: 26,
        accuracy: "N/A",
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    stormSummon: {
        name: "Storm Summon",
        power: 50,
        energy: 46,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    chillyChomp: {
        name: "Chilly Chomp",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    icicleFangs: {
        name: "Icicle Fangs",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    spikeRush: {
        name: "Spike Rush",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        priority: true,
    },

    naturesRage: {
        name: "Nature's Rage",
        power: 70,
        energy: 55,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    slime: {
        name: "Slime",
        power: 65,
        energy: 32,
        accuracy: 100,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    rapidFire: {
        name: "Rapid Fire",
        power: 20,
        energy: 32,
        accuracy: 95,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 3,
        secondaryEffect: true
    },

    pepperBurst: {
        name: "Pepper Burst",
        power: 35,
        energy: 40,
        accuracy: 100,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 2,
    },

    waterBomb: {
        name: "Water Bomb",
        power: 60,
        energy: 26,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        bomb: true
    },

    leafBarrage: {
        name: "Leaf Barrage",
        power: 65,
        energy: 30,
        accuracy: 90,
        type: "Plant",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    spare: {
        name: "Spare",
        power: 40,
        energy: 15,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    hopKick: {
        name: "Hop Kick",
        power: 60,
        energy: 30,
        accuracy: 90,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        kick: true
    },

    airWhip: {
        name: "Air Whip",
        power: 60,
        energy: 32,
        accuracy: 100,
        type: "Air",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    airShot: {
        name: "Air Shot",
        power: 40,
        energy: 20,
        accuracy: 100,
        type: "Air",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    gloomFangs: {
        name: "Gloom Fangs",
        power: 75,
        energy: 36,
        accuracy: 90,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    holySlash: {
        name: "Holy Slash",
        power: 75,
        energy: 35,
        accuracy: 100,
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        typeModifier: { type: "Dark", modifier: 2 },
        contact: true,
        slash: true
    },

    muckBuck: {
        name: "Muck Buck",
        power: 95,
        energy: 40,
        accuracy: 100,
        type: "Earth",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/4
    },

    quicksand: {
        name: "Quicksand",
        power: 60,
        energy: 35,
        accuracy: 100,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    rant: {
        name: "Rant",
        power: 65,
        energy: 32,
        accuracy: 90,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        sound: true,
        aoe: true
    },

    lastLaugh: {
        name: "Last Laugh",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
    },

    aggravate: {
        name: "Aggravate",
        power: 30,
        energy: 20,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        drain: 1/2
    },

    eggStorm: {
        name: "Egg Storm",
        power: 90,
        energy: 52,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        aoe: true
    },

    eggOnslaught: {
        name: "Egg Onslaught",
        power: 125,
        energy: 0,
        accuracy: "N/A",
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    lightDash: {
        name: "Light Dash",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Light",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        priority: true
    },

    pester: {
        name: "Pester",
        power: 50,
        energy: 32,
        accuracy: 100,
        type: "Bug",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    slapDown: {
        name: "Slap Down",
        power: 65,
        energy: 45,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        knockOff: true,
        slap: true
    },

    spite: {
        name: "Spite",
        power: 0,
        energy: 40,
        accuracy: 90,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
    },

    startle: {
        name: "Startle",
        power: 30,
        energy: 15,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    frightfulSurprise: {
        name: "Frightful Surprise",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    shatter: {
        name: "Shatter",
        power: 70,
        energy: 50,
        accuracy: 90,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    brainwash: {
        name: "Brainwash",
        power: 50,
        energy: 24,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    stupefy: {
        name: "Stupefy",
        power: 30,
        energy: 25,
        accuracy: 100,
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    skulk: {
        name: "Skulk",
        power: -1,
        energy: 30,
        accuracy: 100,
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        weightBased: true
    },

    apparition: {
        name: "Apparition",
        power: 90,
        energy: 55,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        typeModifier: { type: "Dark", modifier: 4 },
        bomb: true
    },

    bushWhack: {
        name: "Bush Whack",
        power: 65,
        energy: 35,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true
    },

    oppress: {
        name: "Oppress",
        power: 60,
        energy: 45,
        accuracy: 100,
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    spectralBurst: {
        name: "Spectral Burst",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    phantomBlast: {
        name: "Phantom Blast",
        power: 110,
        energy: 60,
        accuracy: 80,
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    phantomSlash: {
        name: "Phantom Slash",
        power: 70,
        energy: 36,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    harrow: {
        name: "Harrow",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    venomChomp: {
        name: "Venom Chomp",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    elementalBurst: {
        name: "Elemental Burst",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Ancient",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    parasitize: {
        name: "Parasitize",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true,
        drain: 1/2
    },

    bloodmeal: {
        name: "Bloodmeal",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true,
        regen: 1/5
    },

    savageHorn: {
        name: "Savage Horn",
        power: 120,
        energy: 60,
        accuracy: 85,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    counterPoise: {
        name: "Counter Poise",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        priority: true,
    },

    lunge: {
        name: "Lunge",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
    },

    stealthAssault: {
        name: "Stealth Assault",
        power: 90,
        energy: 60,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        priority: true,
    },

    headbutt: {
        name: "Headbutt",
        power: 60,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    wingSlap: {
        name: "Wing Slap",
        power: 60,
        energy: 26,
        accuracy: 100,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    gammaPulse: {
        name: "Gamma Pulse",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    naturesForce: {
        name: "Nature's Force",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Plant",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    floraBlast: {
        name: "Flora Blast",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Plant",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        typeModifier: { type: "Plant", modifier: 4 }
    },

    lifeDrain: {
        name: "Life Drain",
        power: 75,
        energy: 48,
        accuracy: 100,
        type: "Plant",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        drain: 1/2
    },

    mindDrain: {
        name: "Mind Drain",
        power: 75,
        energy: 48,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        drain: 1/2
    },

    snowdozer: {
        name: "Snowdozer",
        power: 30,
        energy: 24,
        accuracy: 90,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    frigidFrenzy: {
        name: "Frigid Frenzy",
        power: 25,
        energy: 25,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true,
        hits: 5
    },

    dualFrostblade: {
        name: "Dual Frostblade",
        power: 50,
        energy: 50,
        accuracy: 90,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true,
        hits: 2
    },

    searingSteel: {
        name: "Searing Steel",
        power: 85,
        energy: 48,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true,
        contact: true,
        typeModifier: { type: "Water", modifier: 2 }
    },

    wintersFury: {
        name: "Winter's Fury",
        power: 30,
        energy: 55,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        hits: 3
    },

    thunderstrike: {
        name: "Thunderstrike",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    electroBlast: {
        name: "Electro Blast",
        power: 125,
        energy: 0,
        accuracy: "N/A",
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    maroon: {
        name: "Maroon",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    flashPulse: {
        name: "Flash Pulse",
        power: 85,
        energy: 42,
        accuracy: 90,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    sleetShot: {
        name: "Sleet Shot",
        power: 55,
        energy: 28,
        accuracy: 95,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    bodySlam: {
        name: "Body Slam",
        power: 90,
        energy: 35,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    slash: {
        name: "Slash",
        power: 75,
        energy: 36,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    grappleGrip: {
        name: "Grapple Grip",
        power: 60,
        energy: 35,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    nosedive: {
        name: "Nosedive",
        power: 95,
        energy: 40,
        accuracy: 100,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/4
    },

    cycloneVortex: {
        name: "Cyclone Vortex",
        power: 100,
        energy: 52,
        accuracy: 80,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true,
        secondaryEffect: true
    },

    blusterBurst: {
        name: "Bluster Burst",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Air",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true
    },

    flamingKick: {
        name: "Flaming Kick",
        power: 90,
        energy: 40,
        accuracy: 90,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        kick: true
    },

    boilingPress: {
        name: "Boiling Press",
        power: 75,
        energy: 40,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        typeModifier: { type: "Water", modifier: 4 }
    },

    yetisWrath: {
        name: "Yeti's Wrath",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Earth",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    junglejutsu: {
        name: "Junglejutsu",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    allOrNothing: {
        name: "All or Nothing",
        power: 150,
        energy: 60,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    doubleSwipe: {
        name: "Double Swipe",
        power: 50,
        energy: 45,
        accuracy: 90,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true,
        hits: 2
    },

    counterAssault: {
        name: "Counter Assault",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    ragingTackle: {
        name: "Raging Tackle",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/3
    },

    megaChomp: {
        name: "Mega Chomp",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    revolution: {
        name: "Revolution",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    calamitousCrash: {
        name: "Calamitous Crash",
        power: 70,
        energy: 50,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        crit: true
    },

    rancorousRollout: {
        name: "Rancorous Rollout",
        power: 85,
        energy: 44,
        accuracy: 100,
        type: "Dark",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    luminousRoar: {
        name: "Luminous Roar",
        power: 75,
        energy: 36,
        accuracy: 90,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true
    },

    fireSlam: {
        name: "Fire Slam",
        power: 65,
        energy: 26,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    shadowSprint: {
        name: "Shadow Sprint",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        priority: true
    },

    airBlade: {
        name: "Air Blade",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Air",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        slash: true
    },

    boulderBlast: {
        name: "Boulder Blast",
        power: 25,
        energy: 25,
        accuracy: 90,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 5
    },

    darkSurge: {
        name: "Dark Surge",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    lashOut: {
        name: "Lash Out",
        power: 140,
        energy: 50,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    shadowLurk: {
        name: "Shadow Lurk",
        power: 100,
        energy: 55,
        accuracy: "N/A",
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    shadowPulse: {
        name: "Shadow Pulse",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    sinisterShackles: {
        name: "Sinister Shackles",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    earSlap: {
        name: "Ear Slap",
        power: 15,
        energy: 18,
        accuracy: 85,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slap: true,
        hits: 5
    },

    muckBlast: {
        name: "Muck Blast",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    pheroblast: {
        name: "Pheroblast",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    pineShot: {
        name: "Pine Shot",
        power: 25,
        energy: 25,
        accuracy: 100,
        type: "Plant",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 5
    },

    quickPunch: {
        name: "Quick Punch",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        priority: true
    },

    punch: {
        name: "Punch",
        power: 45,
        energy: 20,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        secondaryEffect: true
    },

    bananaSlam: {
        name: "Banana Slam",
        power: 95,
        energy: 55,
        accuracy: "N/A",
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    ragingHowl: {
        name: "Raging Howl",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        recoil: 1/3
    },

    thunderChomp: {
        name: "Thunder Chomp",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    thunderSlam: {
        name: "Thunder Slam",
        power: 65,
        energy: 26,
        accuracy: 100,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true
    },

    toxicTail: {
        name: "Toxic Tail",
        power: 50,
        energy: 30,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    returnToSender: {
        name: "Return to Sender",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    foulChant: {
        name: "Foul Chant",
        power: 110,
        energy: 45,
        accuracy: 70,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        sound: true
    },

    earthquake: {
        name: "Earthquake",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Earth",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true,
        grounded: true,
    },

    capriole: {
        name: "Capriole",
        power: 105,
        energy: 52,
        accuracy: 85,
        type: "Earth",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        kick: true
    },

    fireBreath: {
        name: "Fire Breath",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    geyser: {
        name: "Geyser",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    shellShrapnel: {
        name: "Shell Shrapnel",
        power: 110,
        energy: 56,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    hydroSlash: {
        name: "Hydro Slash",
        power: 70,
        energy: 36,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    shellBash: {
        name: "Shell Bash",
        power: 110,
        energy: 56,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    magmaBurst: {
        name: "Magma Burst",
        power: 85,
        energy: 45,
        accuracy: 100,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    tripRoot: {
        name: "Trip Root",
        power: 1,
        energy: 30,
        accuracy: 100,
        type: "Plant",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        weightBased: true
    },

    savageGreed: {
        name: "Savage Greed",
        power: 95,
        energy: 52,
        accuracy: 90,
        type: "Ancient",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    expertOnslaught: {
        name: "Expert Onslaught",
        power: 75,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    energyBreak: {
        name: "Energy Break",
        power: 85,
        energy: 54,
        accuracy: 100,
        type: "Ancient",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    blazeChomp: {
        name: "Blaze Chomp",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    primalSlash: {
        name: "Primal Slash",
        power: 80,
        energy: 45,
        accuracy: 100,
        type: "Ancient",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    coconutBomb: {
        name: "Coconut Bomb",
        power: 90,
        energy: 45,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true,
        contact: true,
        bomb: true,
        recoil: 1/4
    },

    lavaSlash: {
        name: "Lava Slash",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slash: true
    },

    electroburst: {
        name: "Electroburst",
        power: 100,
        energy: 54,
        accuracy: 90,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        aoe: true
    },

    strategicSurge: {
        name: "Strategic Surge",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        priority: true
    },

    thunderBlast: {
        name: "Thunder Blast",
        power: 110,
        energy: 60,
        accuracy: 80,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
    },

    chaseDown: {
        name: "Chase Down",
        power: 40,
        energy: 30,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    thunderCrash: {
        name: "Thunder Crash",
        power: 95,
        energy: 40,
        accuracy: 100,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/4
    },

    ghostlyHowl: {
        name: "Ghostly Howl",
        power: 75,
        energy: 38,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        secondaryEffect: true
    },

    trickShot: {
        name: "Trick Shot",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Spirit",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        priority: true
    },

    resonate: {
        name: "Resonate",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        secondaryEffect: true
    },

    explosion: {
        name: "Explosion",
        power: 200,
        energy: 75,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        bomb: true,
        aoe: true
    },

    climateCannon: {
        name: "Climate Cannon",
        power: 90,
        energy: 45,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    repeatingTune: {
        name: "Repeating Tune",
        power: 25,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 3,
        sound: true,
    },

    gloominousRoar: {
        name: "Gloominous Roar",
        power: 85,
        energy: 46,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true
    },

    gloominousFangs: {
        name: "Gloominous Fangs",
        power: 85,
        energy: 46,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        bite: true
    },

    gobbleGoop: {
        name: "Gobble Goop",
        power: 60,
        energy: 40,
        accuracy: 100,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    harmoniousChord: {
        name: "Harmonious Chord",
        power: 60,
        energy: 35,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        secondaryEffect: true
    },

    dissonantChord: {
        name: "Dissonant Chord",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        secondaryEffect: true
    },

    flabbergast: {
        name: "Flabbergast",
        power: 70,
        energy: 36,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    cerebralSlash: {
        name: "Cerebral Slash",
        power: 70,
        energy: 36,
        accuracy: 100,
        type: "Mind",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        slash: true
    },

    flashNFlee: {
        name: "Flash 'n Flee",
        power: 70,
        energy: 50,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        pivot: true
    },

    flare: {
        name: "Flare",
        power: 70,
        energy: 50,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    focusBeam: {
        name: "Focus Beam",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    glowBeam: {
        name: "Glow Beam",
        power: 130,
        energy: 60,
        accuracy: 90,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        stat: {amount: -2, battle: "Offense", stat: "AttackR"}
    },

    fadeAway: {
        name: "Fade Away",
        power: 70,
        energy: 50,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        pivot: true
    },

    roughUp: {
        name: "Rough Up",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    heavyBash: {
        name: "Heavy Bash",
        power: 70,
        energy: 36,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    razorSlash: {
        name: "Razor Slash",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    bash: {
        name: "Bash",
        power: 50,
        energy: 20,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    steelGrit: {
        name: "Steel Grit",
        power: -1,
        energy: 40,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        healthBased: true
    },

    rocketJab: {
        name: "Rocket Jab",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        priority: true
    },

    massImpact: {
        name: "Mass Impact",
        power: -1,
        energy: 45,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        heavyBased: true
    },

    forgedClaws: {
        name: "Forged Claws",
        power: 100,
        energy: 52,
        accuracy: 80,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    mandibleCrusher: {
        name: "Mandible Crusher",
        power: 100,
        energy: 54,
        accuracy: 80,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    skilledSwipe: {
        name: "Skilled Swipe",
        power: 20,
        energy: 40,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        statBuff: true
    },

    metalSwipes: {
        name: "Metal Swipes",
        power: 20,
        energy: 20,
        accuracy: 95,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true,
        hits: 2
    },

    ruthlessFeast: {
        name: "Ruthless Feast",
        power: 35,
        energy: 0,
        accuracy: "N/A",
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true,
        hits: 3
    },

    clamp: {
        name: "Clamp",
        power: 45,
        energy: 22,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    dartBurst: {
        name: "Dart Burst",
        power: 15,
        energy: 40,
        accuracy: 85,
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 10,
        secondaryEffect: true
    },

    doubleWhack: {
        name: "Double Whack",
        power: 35,
        energy: 34,
        accuracy: 90,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        hits: 2
    },

    completeDemolition: {
        name: "Complete Demolition",
        power: 150,
        energy: 50,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    frostBeam: {
        name: "Frost Beam",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    precisionBolt: {
        name: "Precision Bolt",
        power: 60,
        energy: 26,
        accuracy: "N/A",
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    metalBlast: {
        name: "Metal Blast",
        power: 85,
        energy: 42,
        accuracy: 100,
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    airstrike: {
        name: "Airstrike",
        power: 125,
        energy: 0,
        accuracy: "N/A",
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        bomb: true
    },

    cosmicChime: {
        name: "Cosmic Chime",
        power: 100,
        energy: 58,
        accuracy: 100,
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true
    },

    reflectionBurst: {
        name: "Reflection Burst",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    shardStorm: {
        name: "Shard Storm",
        power: 100,
        energy: 55,
        accuracy: 90,
        type: "Metal",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    batteringRam: {
        name: "Battering Ram",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Defense",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    graffiti: {
        name: "Graffiti",
        power: 70,
        energy: 50,
        accuracy: 90,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    canisterBurst: {
        name: "Canister Burst",
        power: 25,
        energy: 35,
        accuracy: 95,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        hits: 3
    },

    claySlap: {
        name: "Clay Slap",
        power: 60,
        energy: 35,
        accuracy: 100,
        type: "Earth",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slap: true,
        kick: true
    },

    undermine: {
        name: "Undermine",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Earth",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    tailSlap: {
        name: "Tail Slap",
        power: 40,
        energy: 10,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    energySurge: {
        name: "Energy Surge",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Light",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    illWill: {
        name: "Ill Will",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    stampede: {
        name: "Stampede",
        power: 30,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    steelCrusher: {
        name: "Steel Crusher",
        power: 90,
        energy: 50,
        accuracy: 90,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    viceJaws: {
        name: "Vice Jaws",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Metal",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    frostPunch: {
        name: "Frost Punch",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        secondaryEffect: true
    },

    electroPunch: {
        name: "Electro Punch",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        secondaryEffect: true
    },

    megaPunch: {
        name: "Mega Punch",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        secondaryEffect: true
    },

    telekineticSweep: {
        name: "Telekinetic Sweep",
        power: 90,
        energy: 45,
        accuracy: 90,
        type: "Mind",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true,
        slap: true,
        secondaryEffect: true
    },

    psychalChomp: {
        name: "Psychal Chomp",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Mind",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        bite: true,
    },

    chop: {
        name: "Chop",
        power: 60,
        energy: 30,
        accuracy: 90,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    rogueAssault: {
        name: "Rogue Assault",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    pyrokinesis: {
        name: "Pyrokinesis",
        power: 65,
        energy: 38,
        accuracy: 100,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    flareBlast: {
        name: "Flare Blast",
        power: 110,
        energy: 60,
        accuracy: 80,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    incinerate: {
        name: "Incinerate",
        power: 130,
        energy: 60,
        accuracy: 80,
        type: "Fire",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    clampClaw: {
        name: "Clamp Claw",
        power: 85,
        energy: 50,
        accuracy: 100,
        type: "Bug",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true,
        slash: true
    },

    tsunami: {
        name: "Tsunami",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    seaSong: {
        name: "Sea Song",
        power: 60,
        energy: 60,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        pivot: true
    },

    hydroBlast: {
        name: "Hydro Blast",
        power: 110,
        energy: 60,
        accuracy: 80,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    soulDrain: {
        name: "Soul Drain",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        drain: 1/2
    },

    confound: {
        name: "Confound",
        power: 40,
        energy: 18,
        accuracy: 100,
        type: "Ancient",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    dracoBeam: {
        name: "Draco Beam",
        power: 130,
        energy: 60,
        accuracy: 90,
        type: "Ancient",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        stat: {amount: -2, battle: "Offense", stat: "AttackR"}
    },

    piercingDrive: {
        name: "Piercing Drive",
        power: 85,
        energy: 40,
        accuracy: 90,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    dinoClaws: {
        name: "Dino Claws",
        power: 45,
        energy: 24,
        accuracy: 100,
        type: "Ancient",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slash: true
    },

    shrewdBlast: {
        name: "Shrewd Blast",
        power: 70,
        energy: 42,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    aquaJaws: {
        name: "Aqua Jaws",
        power: 65,
        energy: 38,
        accuracy: 90,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true,
        stat: {amount: -1, battle: "Defense", stat: "DefenseM"}
    },

    thunderClap: {
        name: "Thunder Clap",
        power: 80,
        energy: 45,
        accuracy: 100,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true,
        contact: true,
        slap: true
    },

    fulgurFangs: {
        name: "Fulgur Fangs",
        power: 100,
        energy: 0,
        accuracy: "N/A",
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true,
        contact: true,
        bite: true
    },

    eggLob: {
        name: "Egg Lob",
        power: 100,
        energy: 46,
        accuracy: 100,
        type: "Dark",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        bomb: true
    },

    marshWave: {
        name: "Marsh Wave",
        power: 75,
        energy: 45,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true,
        stat: {amount: -1, battle: "Defense", stat: "DefenseR"}
    },

    psychalSlap: {
        name: "Psychal Slap",
        power: 85,
        energy: 45,
        accuracy: 100,
        type: "Mind",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Ranged Defense",
        slap: true
    },

    judgement: {
        name: "Judgement",
        power: 85,
        energy: 45,
        accuracy: 100,
        type: "Mind",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        secondaryEffect: true
    },

    viciousSnap: {
        name: "Vicious Snap",
        power: 75,
        energy: 45,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        bite: true
    },

    iceHammer: {
        name: "Ice Hammer",
        power: 95,
        energy: 50,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
    },

    icicleTremor: {
        name: "Icicle Tremor",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Ice",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true
    },

    timberThrash: {
        name: "Timber Thrash",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/3
    },

    timberSweep: {
        name: "Timber Sweep",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true,
    },

    vineLash: {
        name: "Vine Lash",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    douse: {
        name: "Douse",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    reservoirDeluge: {
        name: "Reservoir Deluge",
        power: 110,
        energy: 55,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    fountainBeam: {
        name: "Fountain Beam",
        power: 100,
        energy: 55,
        accuracy: 100,
        type: "Water",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    rainbowBlast: {
        name: "Rainbow Blast",
        power: 100,
        energy: 50,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    hullabaloo: {
        name: "Hullabaloo",
        power: 75,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        sound: true
    },

    twirlyWhirl: {
        name: "Twirly Whirl",
        power: 75,
        energy: 40,
        accuracy: 100,
        type: "Bug",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    peppermintBreath: {
        name: "Peppermint Breath",
        power: 75,
        energy: 40,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    fieryFondant: {
        name: "Fiery Fondant",
        power: 90,
        energy: 55,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/4,
        secondaryEffect: true
    },

    charredClaws: {
        name: "Charred Claws",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slash: true
    },

    blazeOfGlory: {
        name: "Blaze of Glory",
        power: 120,
        energy: 60,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/3,
        secondaryEffect: true
    },

    flail: {
        name: "Flail",
        power: 30,
        energy: 0,
        accuracy: 100,
        type: "Null",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
    },

    fusionBarrage: {
        name: "Fusion Barrage",
        power: 25,
        energy: 0,
        accuracy: "N/A",
        type: "Null",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        hits: 5
    },

    heartBreak: {
        name: "Heart Break",
        power: 50,
        energy: 25,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    powerSiphon: {
        name: "Power Siphon",
        power: 20,
        energy: 32,
        accuracy: 90,
        type: "Electric",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    adaptiveAssault: {
        name: "Adaptive Assault",
        power: 75,
        energy: 35,
        accuracy: 100,
        type: "Simple",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    meteorSmash: {
        name: "Meteor Smash",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Ancient",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        aoe: true
    },

    meteorCrash: {
        name: "Meteor Crash",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Ancient",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    psychoBlast: {
        name: "Psycho Blast",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    drivingForce: {
        name: "Driving Force",
        power: 60,
        energy: 40,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    outburst: {
        name: "Outburst",
        power: 125,
        energy: 60,
        accuracy: 100,
        type: "Ancient",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    dragonHorn: {
        name: "Dragon Horn",
        power: 100,
        energy: 50,
        accuracy: 80,
        type: "Ancient",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    blazePunch: {
        name: "Blaze Punch",
        power: 70,
        energy: 35,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        secondaryEffect: true
    },

    blazeRush: {
        name: "Blaze Rush",
        power: 60,
        energy: 45,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    kindledRage: {
        name: "Kindled Rage",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    burnTrue: {
        name: "Burn True",
        power: 85,
        energy: 48,
        accuracy: 100,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
    },

    pileBunker: {
        name: "Pile Bunker",
        power: 20,
        energy: 42,
        accuracy: 90,
        type: "Fire",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
    },

    boomBash: {
        name: "Boom Bash",
        power: 80,
        energy: 45,
        accuracy: 100,
        type: "Brawler",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        punch: true,
        kick: true
    },

    hookWave: {
        name: "Hook Wave",
        power: 50,
        energy: 20,
        accuracy: 100,
        type: "Brawler",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    auraBurst: {
        name: "Aura Burst",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Brawler",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
    },

    vitalSurge: {
        name: "Vital Surge",
        power: 110,
        energy: 55,
        accuracy: 80,
        type: "Brawler",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    banefulBash: {
        name: "Baneful Bash",
        power: 85,
        energy: 45,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    boneCrunch: {
        name: "Bone Crunch",
        power: 80,
        energy: 46,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        bite: true
    },

    venomSlash: {
        name: "Venom Slash",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Toxic",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true,
        slash: true
    },

    thistleSlash: {
        name: "Thistle Slash",
        power: 70,
        energy: 36,
        accuracy: 100,
        type: "Plant",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        slash: true
    },

    soulHarvest: {
        name: "Soul Harvest",
        power: 60,
        energy: 30,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    soulStorm: {
        name: "Soul Storm",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Spirit",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    brainFreeze: {
        name: "Brain Freeze",
        power: 80,
        energy: 44,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        typeModifier: { type: "Mind", modifier: 2 }
    },

    deepFreeze: {
        name: "Deep Freeze",
        power: 75,
        energy: 40,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        typeModifier: { type: "Water", modifier: 4 }
    },

    snotShot: {
        name: "Snot Shot",
        power: 60,
        energy: 30,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    frostBreath: {
        name: "Frost Breath",
        power: 60,
        energy: 38,
        accuracy: 100,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        aoe: true
    },

    frostBlast: {
        name: "Frost Blast",
        power: 110,
        energy: 60,
        accuracy: 80,
        type: "Ice",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
    },

     bodyCrash: {
        name: "Body Crash",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Defense",
        mr2: "Melee Defense",
        contact: true
    },

    toxiblast: {
        name: "Toxiblast",
        power: 75,
        energy: 36,
        accuracy: 100,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        bomb: true,
        secondaryEffect: true
    },

    paintShower: {
        name: "Paint Shower",
        power: 110,
        energy: 50,
        accuracy: 100,
        type: "Toxic",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        stat: {amount: -1, battle: "Offense", stat: "AttackR"}
    },

    plunge: {
        name: "Plunge",
        power: 90,
        energy: 35,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    waveWrecker: {
        name: "Wave Wrecker",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Water",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    jetStream: {
        name: "Jet Stream",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Air",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    tempest: {
        name: "Tempest",
        power: -1,
        energy: 40,
        accuracy: 100,
        type: "Air",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    typhoon: {
        name: "Typhoon",
        power: 110,
        energy: 60,
        accuracy: 80,
        type: "Air",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true
    },

    counterStance: {
        name: "Counter Stance",
        power: 70,
        energy: 45,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true
    },

    clawber: {
        name: "Clawber",
        power: 100,
        energy: 55,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        recoil: 1/3,
        slash: true
    },

    bludgeon: {
        name: "Bludgeon",
        power: 65,
        energy: 36,
        accuracy: 90,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        secondaryEffect: true
    },

    swat: {
        name: "Swat",
        power: 45,
        energy: 32,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,

        typeModifier: { type: "Air", modifier: 2 }
    },

    preemptiveStrike: {
        name: "Preemptive Strike",
        power: 20,
        energy: 25,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        priority: true,
        secondaryEffect: true
    },

    hornDashi: {
        name: "Horn-Dashi",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    blindspotBatter: {
        name: "Blindspot Batter",
        power: 75,
        energy: 38,
        accuracy: 100,
        type: "Light",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    radiantRush: {
        name: "Radiant Rush",
        power: 100,
        energy: 50,
        accuracy: 90,
        type: "Light",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    solarPunch: {
        name: "Solar Punch",
        power: 100,
        energy: 50,
        accuracy: 100,
        type: "Light",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        stat: {amount: 1, battle: "Offense", stat: "AttackM", first: true},
        wait: {wait: 1, bypass: 0}
    },

    hyperSting: {
        name: "Hyper Sting",
        power: 90,
        energy: 55,
        accuracy: 100,
        type: "Light",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
    },

    splittingHeadache: {
        name: "Splitting Headache",
        power: 70,
        energy: 40,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense"
    },

    mudslide: {
        name: "Mudslide",
        power: 50,
        energy: 35,
        accuracy: 100,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true
    },

    rockSlide: {
        name: "Rock Slide",
        power: 60,
        energy: 40,
        accuracy: 100,
        type: "Earth",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        typeModifier: { type: "Air", modifier: 2 }
    },

    dazzlingBarrage: {
        name: "Dazzling Barrage",
        power: 25,
        energy: 25,
        accuracy: 100,
        type: "Light",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        hits: 5
    },

    stratagem: {
        name: "Stratagem",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Mind",
        mr: "Ranged",
        mr1: "Ranged Defense",
        mr2: "Ranged Defense"
    },

    pepJab: {
        name: "Pep Jab",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        regen: 1/5
    },

    vitalJab: {
        name: "Vital Jab",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        punch: true,
        drain: 1/2
    },

    powerDraw: {
        name: "Power Draw",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        regen: 1/5
    },

    powerSurge: {
        name: "Power Surge",
        power: 80,
        energy: 50,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        aoe: true,
        secondaryEffect: true
    },

    megaKick: {
        name: "Mega Kick",
        power: 100,
        energy: 45,
        accuracy: 90,
        type: "Brawler",
        mr: "Melee",
        mr1: "Melee Attack",
        mr2: "Melee Defense",
        contact: true,
        kick: true
    },

    highPitchScreech: {
        name: "High-Pitch Screech",
        power: 80,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        sound: true,
        secondaryEffect: true
    },

    spitOut: {
        name: "Spit Out",
        power: 90,
        energy: 50,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
    },

    spit: {
        name: "Spit",
        power: 50,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        secondaryEffect: true,
        stat: {amount: -1, battle: "Defense", stat: "DefenseR"}
    },

    jolt: {
        name: "Jolt",
        power: 40,
        energy: 25,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        priority: true
    },

    zipZap: {
        name: "Zip-Zap",
        power: 70,
        energy: 50,
        accuracy: 100,
        type: "Electric",
        mr: "Ranged",
        mr1: "Ranged Attack",
        mr2: "Ranged Defense",
        pivot: true
    },



    //Support Moves -----------------------------------------------------------------------------------------------------------------------------------------

    noMove: {
        name: "(No Move)",
        power: 0,
        energy: 0,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    accelerate: {
        name: "Accelerate",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    daydream: {
        name: "Daydream",
        power: 0,
        energy: 0,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    summon: {
        name: "Summon",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    aim: {
        name: "Aim",
        power: 0,
        energy: 10,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    ancientRoar: {
        name: "Ancient Roar",
        power: 0,
        energy: 50,
        accuracy: 100,
        type: "Ancient",
        mr: "Support",
        sound: true,
        pivot: true
    },

    brace: {
        name: "Brace",
        power: 0,
        energy: 15,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    burrow: {
        name: "Burrow",
        power: 0,
        energy: 15,
        accuracy: "N/A",
        type: "Earth",
        mr: "Support"
    },

    tamp: {
        name: "Tamp",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Earth",
        mr: "Support"
    },

    charade: {
        name: "Charade",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Dark",
        mr: "Support"
    },

    dawdle: {
        name: "Dawdle",
        power: 0,
        energy: 10,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    disperse: {
        name: "Disperse",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Light",
        mr: "Support"
    },

    flash: {
        name: "Flash",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Light",
        mr: "Support"
    },

    dodge: {
        name: "Dodge",
        power: 0,
        energy: 20,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support",
        protect: true
    },

    recycle: {
        name: "Recycle",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    eerieStare: {
        name: "Eerie Stare",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    energize: {
        name: "Energize",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Electric",
        mr: "Support"
    },

    stun: {
        name: "Stun",
        power: 0,
        energy: 35,
        accuracy: 90,
        type: "Electric",
        mr: "Support"
    },

    thunderstorm: {
        name: "Thunderstorm",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Electric",
        mr: "Support"
    },

    recharge: {
        name: "Recharge",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Electric",
        mr: "Support"
    },

    examine: {
        name: "Examine",
        power: 0,
        energy: 15,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    finalRuse: {
        name: "Final Ruse",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Support"
    },

    growl: {
        name: "Growl",
        power: 0,
        energy: 10,
        accuracy: 100,
        type: "Simple",
        mr: "Support",
        sound: true
    },

    icicleTrap: {
        name: "Icicle Trap",
        power: 0,
        energy: 45,
        accuracy: "N/A",
        type: "Ice",
        mr: "Support"
    },

    bitterCold: {
        name: "Bitter Cold",
        power: 0,
        energy: 35,
        accuracy: 90,
        type: "Ice",
        mr: "Support"
    },

    mindsEye: {
        name: "Mind's Eye",
        power: 0,
        energy: 15,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },

    peaceOfMind: {
        name: "Peace Of Mind",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },

    brainExercise: {
        name: "Brain Exercise",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },

    perch: {
        name: "Perch",
        power: 0,
        energy: 72,
        accuracy: "N/A",
        type: "Air",
        mr: "Support"
    },

    gust: {
        name: "Gust",
        power: 0,
        energy: 40,
        accuracy: 100,
        type: "Air",
        mr: "Support"
    },

    ruffledFeathers: {
        name: "Ruffled Feathers",
        power: 0,
        energy: 35,
        accuracy: "N/A",
        type: "Air",
        mr: "Support",
        protect: true
    },

    barbTrap: {
        name: "Barb Trap",
        power: 0,
        energy: 35,
        accuracy: "N/A",
        type: "Toxic",
        mr: "Support",
        protect: true
    },

    poison: {
        name: "Poison",
        power: 0,
        energy: 25,
        accuracy: 90,
        type: "Toxic",
        mr: "Support"
    },

    goopSpout: {
        name: "Goop Spout",
        power: 0,
        energy: 35,
        accuracy: 90,
        type: "Ancient",
        mr: "Support",
        aoe: true
    },

    poisonBarbs: {
        name: "Poison Barbs",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Toxic",
        mr: "Support"
    },

    powerFocus: {
        name: "Power Focus",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    provoke: {
        name: "Provoke",
        power: 0,
        energy: 25,
        accuracy: 100,
        type: "Dark",
        mr: "Support"
    },

    revival: {
        name: "Revival",
        power: 0,
        energy: 72,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Support"
    },

    sapPlant: {
        name: "Sap Plant",
        power: 0,
        energy: 30,
        accuracy: 90,
        type: "Plant",
        mr: "Support"
    },

    scapeGoat: {
        name: "Scapegoat",
        power: 0,
        energy: 20,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support",
        contact: true
    },

    sharpen: {
        name: "Sharpen",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Dark",
        mr: "Support"
    },

    snoreSpores: {
        name: "Snore Spores",
        power: 0,
        energy: 40,
        accuracy: 90,
        type: "Plant",
        mr: "Support"
    },

    softWater: {
        name: "Soft Water",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Water",
        mr: "Support"
    },

    squawk: {
        name: "Squawk",
        power: 0,
        energy: 10,
        accuracy: 100,
        type: "Simple",
        mr: "Support",
        sound: true
    },

    stare: {
        name: "Stare",
        power: 0,
        energy: 10,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    battleChime: {
        name: "Battle Chime",
        power: 0,
        energy: 50,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    staticSpores: {
        name: "Static Spores",
        power: 0,
        energy: 25,
        accuracy: 90,
        type: "Plant",
        mr: "Support"
    },

    stretch: {
        name: "Stretch",
        power: 0,
        energy: 15,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    safeguard: {
        name: "Safeguard",
        power: 0,
        energy: 35,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    takeRoot: {
        name: "Take Root",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support"
    },

    herbalRememdy: {
        name: "Herbal Remedy",
        power: 0,
        energy: 70,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support"
    },

    tease: {
        name: "Tease",
        power: 0,
        energy: 20,
        accuracy: 100,
        type: "Dark",
        mr: "Support"
    },

    toxicSpores: {
        name: "Toxic Spores",
        power: 0,
        energy: 25,
        accuracy: 90,
        type: "Toxic",
        mr: "Support"
    },

    webShot: {
        name: "Web Shot",
        power: 0,
        energy: 10,
        accuracy: 90,
        type: "Bug",
        mr: "Support"
    },

    magmaBlock: {
        name: "Magma Block",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Fire",
        mr: "Support",
        protect: true
    },

    wonderHerb: {
        name: "Wonder Herb",
        power: 0,
        energy: 35,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support"
    },

    photosynthesis: {
        name: "Photosynthesis",
        power: 0,
        energy: 72,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support"
    },

    healthGift: {
        name: "Health Gift",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },

    /*energyGift: {
        name: "Energy Gift",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },*/

    briarBlock: {
        name: "Briar Block",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support",
        protect: true
    },

    beastSlumber: {
        name: "Beast's Slumber",
        power: 0,
        energy: 65,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },

    burnUp: {
        name: "Burn Up",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Fire",
        mr: "Support"
    },

    ragingFlame: {
        name: "Raging Flame",
        power: 0,
        energy: 35,
        accuracy: 90,
        type: "Fire",
        mr: "Support"
    },

    battleHorn: {
        name: "Battle Horn",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support",
        sound: true
    },

    toneBarrier: {
        name: "Tone Barrier",
        power: 0,
        energy: 20,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support",
        sound: true,
        protect: true
    },

    impersonate: {
        name: "Impersonate",
        power: 0,
        energy: 45,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Support"
    },

    gainDrain: {
        name: "Gain Drain",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Dark",
        mr: "Support"
    },

    magnify: {
        name: "Magnify",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Light",
        mr: "Support"
    },

    swiften: {
        name: "Swiften",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Light",
        mr: "Support"
    },

    memorize: {
        name: "Memorize",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },

    baneOfHaste: {
        name: "Bane of Haste",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },

    baneOfWielding: {
        name: "Bane of Wielding",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },

    hypnotize: {
        name: "Hypnotize",
        power: 0,
        energy: 40,
        accuracy: 90,
        type: "Mind",
        mr: "Support"
    },
    
    rejuvenate: {
        name: "Rejuvenate",
        power: 0,
        energy: 72,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    metalShriek: {
        name: "Metal Shriek",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Metal",
        mr: "Support"
    },

    oilLeak: {
        name: "Oil Leak",
        power: 0,
        energy: 10,
        accuracy: "N/A",
        type: "Toxic",
        mr: "Support"
    },

    secondWind: {
        name: "Second Wind",
        power: 0,
        energy: 0,
        accuracy: "N/A",
        type: "Air",
        mr: "Support"
    },

    tuneUp: {
        name: "Tune-up",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Metal",
        mr: "Support"
    },

    augment: {
        name: "Augment",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },
    
    jumpStart: {
        name: "Jump Start",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Electric",
        mr: "Support"
    },
    
    barter: {
        name: "Barter",
        power: 0,
        energy: 50,
        accuracy: 100,
        type: "Simple",
        mr: "Support"
    },

    conclusion: {
        name: "Conclusion",
        power: 0,
        energy: 40,
        accuracy: 100,
        type: "Simple",
        mr: "Support",
        sound: true
    },

    brawnBoost: {
        name: "Brawn Boost",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Brawler",
        mr: "Support"
    },

    molt: {
        name: "Molt",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Bug",
        mr: "Support"
    },

    baffle: {
        name: "Baffle",
        power: 0,
        energy: 50,
        accuracy: 100,
        type: "Dark",
        mr: "Support",
        pivot: true
    },

    phoenixFlame: {
        name: "Phoenix Flame",
        power: 0,
        energy: 0,
        accuracy: "N/A",
        type: "Fire",
        mr: "Support"
    },

    heatWave: {
        name: "Heat Wave",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Fire",
        mr: "Support"
    },

    squareOne: {
        name: "Square One",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Dark",
        mr: "Support"
    },

    bulkUp: {
        name: "Bulk Up",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Brawler",
        mr: "Support"
    },

    shadowbox: {
        name: "Shadowbox",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Brawler",
        mr: "Support"
    },

    discipline: {
        name: "Discipline",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Brawler",
        mr: "Support"
    },


    talentTrade: {
        name: "Talent Trade",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Dark",
        mr: "Support"
    },

    bait: {
        name: "Bait",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    enamor: {
        name: "Enamor",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    bequeath: {
        name: "Bequeath",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    dejaVu: {
        name: "Deja Vu",
        power: 0,
        energy: 30,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support"
    },

    dissipate: {
        name: "Dissipate",
        power: 0,
        energy: 45,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support",
        pivot: true
    },

    sereneGift: {
        name: "Serene Gift",
        power: 0,
        energy: 72,
        accuracy: "N/A",
        type: "Mind",
        mr: "Support",
        pivot: true
    },

    nearEnchantment: {
        name: "Near Enchantment",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },

    farEnchantment: {
        name: "Far Enchantment",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },

    fungusCurse: {
        name: "Fungus Curse",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support"
    },

    slumber: {
        name: "Slumber",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    teamwork: {
        name: "Teamwork",
        power: 0,
        energy: 20,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    buckUp: {
        name: "Buck Up",
        power: 0,
        energy: 20,
        accuracy: "N/A",
        type: "Brawler",
        mr: "Support"
    },

    bagOfTricks: {
        name: "Bag of Tricks",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Ancient",
        mr: "Support"
    },

    harvest: {
        name: "Harvest",
        power: 0,
        energy: 72,
        accuracy: "N/A",
        type: "Plant",
        mr: "Support"
    },

    barbs: {
        name: "Barbs",
        power: 0,
        energy: 20,
        accuracy: "N/A",
        type: "Metal",
        mr: "Support"
    },

    cleanUp: {
        name: "Clean Up",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Metal",
        mr: "Support"
    },

    armorDown: {
        name: "Armor Down",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Metal",
        mr: "Support"
    },

    tearDown: {
        name: "Tear Down",
        power: 0,
        energy: 35,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    drudge: {
        name: "Drudge",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    hasten: {
        name: "Hasten",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    tribute: {
        name: "Tribute",
        power: 0,
        energy: 50,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    empathize: {
        name: "Empathize",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    hoodwink: {
        name: "Hoodwink",
        power: 0,
        energy: 35,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    bindingOath: {
        name: "Binding Oath",
        power: 0,
        energy: 40,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    parasomnia: {
        name: "Parasomnia",
        power: 0,
        energy: 0,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    bananaSplit: {
        name: "Banana Split",
        power: 0,
        energy: 100,
        accuracy: "N/A",
        type: "Simple",
        mr: "Support"
    },

    emulate: {
        name: "Emulate",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Support"
    },

    hazyShroud: {
        name: "Hazy Shroud",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Spirit",
        mr: "Support"
    },

    downpour: {
        name: "Downpour",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Water",
        mr: "Support"
    },

    galeForce: {
        name: "Gale Force",
        power: 0,
        energy: 25,
        accuracy: "N/A",
        type: "Air",
        mr: "Support"
    },

};


var types = {
    simple: {
        weaknesses: ["mind", "brawler"],
        resistances: ["spirit"],
        immunities: [],
        otherName: "plain"
    },

    fire: {
        weaknesses: ["water", "earth", "air"],
        resistances: ["fire", "plant", "ice", "metal", "bug"],
        immunities: [],
        otherName: "flame"
    },

    water: {
        weaknesses: ["plant", "electric", "toxic"],
        resistances: ["fire", "water", "ice", "metal"],
        immunities: [],
        otherName: "wave"
    },

    plant: {
        weaknesses: ["fire", "ice", "dark", "bug", "toxic"],
        resistances: ["plant", "water", "earth", "electric"],
        immunities: ["light"],
        otherName: "blossom",
        fungusWeaknesses:["fire", "ice", "light", "bug", "toxic"],
        fungusImmunities: ["dark"]
    },

    electric: {
        weaknesses: ["water", "earth"],
        resistances: ["electric", "metal", "air"],
        immunities: [],
        otherName: "volt"
    },

    ice: {
        weaknesses: ["fire", "metal", "brawler"],
        resistances: ["ice", "air", "simple"],
        immunities: [],
        otherName: "frost"
    },

    earth: {
        weaknesses: ["water", "plant", "ice"],
        resistances: ["toxic"],
        immunities: ["electric"],
        otherName: "terra"
    },

    light: {
        weaknesses: ["dark", "metal"],
        resistances: ["fire", "light", "ancient"],
        immunities: ["spirit"],
        otherName: "shine"
    },

    dark: {
        weaknesses: ["fire", "light", "bug"],
        resistances: ["dark", "mind", "spirit"],
        immunities: [],
        otherName: "shade"
    },

    bug: {
        weaknesses: ["ice", "air", "brawler"],
        resistances: ["earth", "dark", "plant", "bug"],
        immunities: [],
        otherName: "web"
    },

    metal: {
        weaknesses: ["fire", "electric", "earth", "brawler"],
        resistances: ["air", "bug", "metal", "ancient", "simple", "ice", "mind"],
        immunities: [],
        otherName: "metalic"
    },

    air: {
        weaknesses: ["ice", "electric"],
        resistances: ["brawler", "bug"],
        immunities: ["earth"],
        otherName: "draft"
    },

    toxic: {
        weaknesses: ["earth", "mind"],
        resistances: ["toxic", "plant", "brawler"],
        immunities: [],
        otherName: "noxious"
    },

    spirit: {
        weaknesses: ["light", "ancient", "spirit"],
        resistances: ["dark", "toxic", "electric", "simple"],
        immunities: ["brawler"],
        otherName: "spectral"
    },

    mind: {
        weaknesses: ["dark", "bug", "spirit"],
        resistances: ["light", "mind", "brawler"],
        immunities: [],
        otherName: "mental"
    },

    ancient: {
        weaknesses: ["light", "metal", "ancient"],
        resistances: ["fire", "water", "plant", "spirit", "electric"],
        immunities: [],
        otherName: "archaic"
    },

    brawler: {
        weaknesses: ["air", "spirit", "mind", "toxic"],
        resistances: ["bug", "ice"],
        immunities: [],
        otherName: "martial"
    },

    heavybag: {
        weaknesses: ["brawler"],
        resistances: [],
        immunities: [],
        otherName: "heavybag"
    }
};

var abilities = ["Ability Thief", "Ace", "Adorable", "Aggressive", "Ambush", "Analyze", "Anomaly", "Applied Frustration", "Apprehension", "Aqua Body", "Awakening", "Baneful", "Bitter Touch",
                 "Bloodsucker", "Boast", "Brute Force", "Bug Fever", "Bully", "Burglar", "Bursting Seams", "Caddie", "Chaperone", "Chill", "Circadian", "Clingy", "Clutch", "Combative", "Combustible",
                 "Communication", "Compliant", "Confidence", "Contact Curse", "Coursing Venom", "Dawn", "Defensive Priority", "Devious", "Double Strike", "Drainage", "Driven", "Dusk", "Early Bird",
                 "Enchant", "Enchanted Coat", "Expertise", "Finesse", "Flutter", "Frail Armor", "Frenzy", "Glide", "Guardian", "Guru", "Handy", "Hard Candy", "Harmonize", "Hasty", "Heavy Fists",
                 "High Explosive", "Idiosyncratic", "Ignorant", "Illuminate", "Immunized", "Incandescent", "Lazy", "Life Force", "Lightning Rod", "Lucky", "Madcap", "Marksman", "Mean Spirited",
                 "Mysterious Cloak", "Mystery Toxins", "Neutralize", "Nightmarish", "Noxious Weeds", "Odd Husk", "Overcharged", "Overshadow", "Oxidize", "Parting Gift", "Pincer Trap", "Playful",
                 "Power Jaw", "Power Napper", "Premonition", "Prismatic", "Protective Shell", "Pyro", "Quick Recovery", "Radiance", "Raging Fire", "Razor Sharp", "Rechargeable", "Regift", "Replicate",
                 "Repugnant", "Resilience", "Rev Up", "Salvage", "Scorching Skin", "Shakedown", "Sharp Claws", "Sharp Edges", "Sharp Focus", "Slick Shell", "Slimy", "Sly", "Specialization", "Staunch",
                 "Sugar Rush", "Surrogate", "Swampy", "Sweet Aroma", "Sweet Touch", "Tank", "Temper", "Terrifying", "Territorial", "Thriving Pace", "Tone Deaf", "Total Eclipse", "Toxic Filter",
                 "Toxic Spines", "Toxic Touch", "Trash Armor", "Turbulent", "Ungracious Host", "Vengeance", "Vigilant", "Vigorous", "Virtuoso", "Vivid Sight", "Volcanic", "Watcher", "Webbing",
                 "Woodsman", "Two Face", "Insulated", "Wise", "Malware", "Fanning Flame", "Appetite", "Gummy", "Viscid", "Glutton", "Resentful", "Pitch-Black", "Master", "Reverberate", "Mystic Tone",
                 "Dauntless", "Festive Spirit", "Vicious", "Reaper", "Captivating", "Forge", "Blistering Heat", "Herd Behavior", "Regurgitate", "Wholesome", "Pyro Pro", "Persistence", "One of Many",
                 "Mesmerizing", "Hydrate", "Railgun", "Spine Break", "Sponge", "Burning Rage", "Third-Degree Burn", "Deep Frostbite", "Chilling Passion", "Obsidian Heart", "Luck Of The Sea", "Intern",
                 "Partnership", "Rush Hour", "Trader", "Safety Pot", "Gloomy", "Mimic", "Reflective", "Hag", "Foresight", "Demanding", "Ravenous", "Designated Chompers", "Battle Armor", "Mask Swap",
                 "Facade", "Party Trick", "Do or Die", "Wildfire", "Sendoff", "Hydro Vortex", "Motivational", "Soul Siphon", "Pluvial", "Petrifying", "Tumultuous", "Venomous", "Brutal Wrath",
                 "Sky-Borne", "Land-Borne", "Depths-Borne", "All Seeing", "Rain Rush", "Triumph", "Royal Decree", "Thunder Summon", "Recurrent", "Charged Arc","Adaptable", "Heat Summon",
                 "Rain Summon", "Fog Summon", "Wind Summon", "Inferno", "Cosmic Pressure", "Conspire", "Metamorphosis", "Sob", "Wail", "Seize", "Assertive", "Berserk", "Disenchant", "Impose", "Gorge",
                 "Carol", "Fortissimo", "Elusive", "Upper Hand", "Effulgent", "Dummy", "Puncture", "Toxic Sac", "Hover", "Eager", "Reign", "Overclock", "Prowler", "Hotfoot", "Mycotic", "Remorseless",
                 "Night Light", "Intensify", "Power Claw", "Medic", "Boneheaded", "Metallic", "Power Legs", "Merge", "Greed", "Energy-Feeding", "Gain-Feeding", "Self-Destruct", "Snowball",
                 "Snow Glider", "Recruit", "Veteran", "Spoils of War", "Sticky", "Stoked", "Electrify", "Cavernous", "Conditioned", "Black Heart", "Extended Reach", "High-Strung", "Dirt Dash",
                 "Earthmover", "Dust Devil", "Arctic", "Dead of Winter", "Soul Hoarder", "Brave Cub", "Elder Mane", "Shifty", "Solar Powered", "Extraterrestrial", "Noxious Razorback", "Virulent Hypnosis",
                 "High Pressure", "Slick Scales", "Pugilist"];

var typeModAbilities = {
    coursingVenom: {
        name: "Coursing Venom",
        typeModifier: { type: "Toxic", modifier: 0 },
        powerMod: false
    },
    
    lightningRod: {
        name: "Lightning Rod",
        typeModifier: { type: "Electric", modifier: 0 },
        powerMod: false
    },
    
    prismatic: {
        name: "Prismatic",
        typeModifier: { type: "Light", modifier: 0 },
        powerMod: false
    },

    hover: {
        name: "Hover",
        typeModifier: { type: "Earth", modifier: 0 },
        powerMod: false
    },

    reflective: {
        name: "Reflective",
        typeModifier: { type: "Light", modifier: 0 },
        powerMod: false
    },
    
    woodsman: {
        name: "Woodsman",
        typeModifier: { type: "Plant", modifier: 0 },
        powerMod: false
    },
    
    combustible: {
        name: "Combustible",
        typeModifier: { type: "Fire", modifier: 0 },
        powerMod: false
    },
    
    noxiousWeeds: {
        name: "Noxious Weeds",
        typeModifier: { type: "Plant", modifier: 0 },
        powerMod: false
    },
    
    pyro: {
        name: "Pyro",
        typeModifier: { type: "Fire", modifier: 1.25 },
        powerMod: true
    },

    pyroPro: {
        name: "Pyro Pro",
        typeModifier: { type: "Fire", modifier: 1.25 },
        powerMod: true
    },
    
    volcanic: {
        name: "Volcanic",
        typeModifier: { type: "Fire", modifier: 2 },
        powerMod: true
    },

    ragingFire: {
        name: "Raging Fire",
        typeModifier: { type: "Fire", modifier: 0},
        powerMod: false
    },
    
    rechargeable: {
        name: "Rechargeable",
        typeModifier: { type: "Electric", modifier: 0},
        powerMod: false
    },

    totalEclipse: {
        name: "Total Eclipse",
        typeModifier: { type: "Light", type2: "Dark", modifier: 0},
        powerMod: false
    },

    toxicFilter: {
        name: "Toxic Filter",
        typeModifier: { type: "Toxic", modifier: 0},
        powerMod: false
    },

    aquaBody: {
        name: "Aqua Body",
        typeModifier: { type: "Fire", modifier: 0.5},
        powerMod: false
    },

    hardCandy: {
        name: "Hard Candy",
        typeModifier: { type: "Water", modifier: 2},
        powerMod: false
    },

    incandescent: {
        name: "Incandescent",
        typeModifier: { type: "Light", modifier: 1.25},
        powerMod: true
    },

    'pitch-black': {
        name: "Pitch-Black",
        typeModifier: { type: "Dark", modifier: 1.25},
        powerMod: true
    },

    insulated: {
        name: "Insulated",
        typeModifier: { type: "Fire", type2: "Ice", modifier: 0.5},
        powerMod: false
    },

    fanningTheFlame: {
        name: "Fanning Flame",
        typeModifier: { type: "Air", modifier: 0.5},
        powerMod: false
    },

    forge: {
        name: "Forge",
        typeModifier: { type: "Fire", modifier: 0.5},
        powerMod: false
    },

    wholesome: {
        name: "Wholesome",
        typeModifier: { type: "Brawler", type2: "Mind", modifier: 0.5},
        powerMod: false
    },

    hydrate: {
        name: "Hydrate",
        typeModifier: { type: "Water", modifier: 0},
        powerMod: false
    },

    sponge: {
        name: "Sponge",
        typeModifier: { type: "Water", modifier: 0},
        powerMod: false
    },

    hydroVortex: {
        name: "Hydro Vortex",
        typeModifier: { type: "Water", modifier: 0},
        powerMod: false
    },

    railgun: {
        name: "Railgun",
        typeModifier: { type: "Electric", modifier: 1.5},
        powerMod: true
    },

    burningRage: {
        name: "Burning Rage",
        typeModifier: { type: "Fire", modifier: 1.25},
        powerMod: true
    },

    chillingPassion: {
        name: "Chilling Passion",
        typeModifier: { type: "Ice", modifier: 1.25},
        powerMod: true
    },

    obsidianHeart: {
        name: "Obsidian Heart",
        typeModifier: { type: "Ancient", modifier: 1.5},
        powerMod: true
    },

    'sky-borne': {
        name: "Sky-Borne",
        typeModifier: { type: "Air", modifier: 1.25},
        powerMod: true
    },

    'land-borne': {
        name: "Land-Borne",
        typeModifier: { type: "Earth", modifier: 1.25},
        powerMod: true
    },

    'depths-borne': {
        name: "Depths-Borne",
        typeModifier: { type: "Water", modifier: 1.25},
        powerMod: true
    },

    blackHeart: {
        name: "Black Heart",
        typeModifier: { type: "Dark", type2: "Light", modifier: 0.5},
        powerMod: false
    },

    earthmover: {
        name: "Earthmover",
        typeModifier: { type: "Earth", modifier: 0},
        powerMod: false
    },

    solarPowered: {
        name: "Solar Powered",
        typeModifier: { type: "Light", modifier: 0},
        powerMod: false
    },

    deadOfWinter: {
        name: "Dead of Winter",
        typeModifier: { type: "Brawler", modifier: 0},
        powerMod: false
    },

    braveCub: {
        name: "Brave Cub",
        typeModifier: { type: "Dark", type2: "Spirit", type3: "Bug", modifier: 0.75},
        powerMod: false
    },

    elderMane: {
        name: "Elder Mane",
        typeModifier: { type: "Dark", type2: "Spirit", type3: "Bug", modifier: 0.5},
        powerMod: false
    },

    highPressure: {
        name: "High Pressure",
        typeModifier: { type: "Water", modifier: 1.25},
        powerMod: true
    },
}

var items = [
    "Heavy Shield", "Heavy Armor", "Power Cuffs", "Health Amulet", "Drain Orb",
    "Mystic Wand", "Drop of Youth", "Energy Orb", "Chocolate Bar", "Mysterious Dust",
    "Heavy Shackles", "Thunder Orb", "Volcanic Ash", "Rageful Plushie", "Clutch Plushie",
    "Specialty Boots", "Milkshake", "Kabunga Coffee", "Specialty Goggles",
    "Specialty Gloves", "Restrictive Armor", "Restrictive Shield", "Dry Ice",
    "Virulent Fang", "Clear Lens", "Scrap Metal", "Spare Cable", "Quantum Core",
    "Power Core", "Freezer Core", "Voltaic Core", "Flame Core", "Rain Globe", "Wind Globe",
    "Fog Globe", "Heat Globe", "Storm Globe", "Rain Scale", "Wind Scale", "Fog Scale",
    "Heat Scale", "Storm Scale", "Simple Essence", "Plain Pearl", "Plain Shell",
    "Fire Essence", "Flame Pearl", "Flame Shell", "Water Essence", "Wave Pearl",
    "Wave Shell", "Plant Essence", "Blossom Pearl", "Blossom Shell", "Electric Essence",
    "Volt Pearl", "Volt Shell", "Ice Essence", "Frost Pearl", "Frost Shell", "Earth Essence",
    "Terra Pearl", "Terra Shell", "Light Essence", "Shine Pearl", "Shine Shell",
    "Dark Essence", "Shade Pearl", "Shade Shell", "Bug Essence", "Web Pearl", "Web Shell",
    "Metal Essence", "Metallic Pearl", "Metallic Shell", "Air Essence", "Draft Pearl",
    "Draft Shell", "Toxic Essence", "Noxious Pearl", "Noxious Shell", "Spirit Essence",
    "Spectral Pearl", "Spectral Shell", "Mind Essence", "Mental Pearl", "Mental Shell",
    "Ancient Essence", "Archaic Pearl", "Archaic Shell", "Brawler Essence", "Martial Pearl",
    "Martial Shell", "Floraburst", "Gastroburst", "Eruptiburst", "Krakaburst", "Iciburst",
    "Stratuburst", "Skeliburst", "Joltburst", "Noshburst", "Imperiburst", "Dreggoburst",
    "Kramburst", "Glintburst", "Dakuburst", "Metroburst", "Celeburst"
];

// App-only item details (icons live in src/assets/icons/<icon>.png).
var itemInfo = {
    "Air Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Air-type moves in battle.", icon: "airessence" },
    "Ancient Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Ancient-type moves in battle.", icon: "ancientessence" },
    "Archaic Pearl": { description: "Absorbs half the power of a Ancient-type attack used against the Loomian equipped with this item.", icon: "archaicpearl" },
    "Archaic Shell": { description: "Increases the Strength of one Ancient-type attack used by the Loomian equipped with this item.", icon: "archaicshell" },
    "Blossom Pearl": { description: "Absorbs half the power of a Plant-type attack used against the Loomian equipped with this item.", icon: "blossompearl" },
    "Blossom Shell": { description: "Increases the Strength of one Plant-type attack used by the Loomian equipped with this item.", icon: "blossomshell" },
    "Brawler Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Brawler-type moves in battle.", icon: "brawleressence" },
    "Bug Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Bug-type moves in battle.", icon: "bugessence" },
    "Celeburst": { description: "Empowers Celesting to Soul Burst. Enables one use of Miracle Beam: Light-type, Ranged, 100 Strength. Absorb heavenly light that cleanses your team of its status ailments, then focus that light into a fierce beam directed at your opponent.", icon: "celeburst" },
    "Chocolate Bar": { description: "Reduces the energy consumption of the first move a Loomian uses in a battle to zero.", icon: "chocolatebar" },
    "Clear Lens": { description: "Clear Lens, when held, makes all of the holder's moves become Sure Hit moves, able to bypass Dodge.", icon: "clear-lens" },
    "Clutch Plushie": { description: "When equipped, a Loomian at full Health may barely withstand an attack that would otherwise knock it out. The item will be used up for the remainder of the battle, and the holder will lose one-tenth of its energy.", icon: "clutchplushie" },
    "Dakuburst": { description: "Empowers Dakuda to Soul Burst. Enables one use of Electro Blast: Electric-type, Ranged, 125 Strength. Zap the foe with a powerful, focused beam of electricity. Bypasses fortifications.", icon: "dakuburst" },
    "Dark Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Dark-type moves in battle.", icon: "darkessence" },
    "Draft Pearl": { description: "Absorbs half the power of a Air-type attack used against the Loomian equipped with this item.", icon: "draftpearl" },
    "Draft Shell": { description: "Increases the Strength of one Air-type attack used by the Loomian equipped with this item.", icon: "draftshell" },
    "Drain Orb": { description: "When held, increases the amount of Health gained when using moves that drain the opponents Health.", icon: "drainorb" },
    "Dreggoburst": { description: "Empowers Dreggodyne to Soul Burst. Enables one use of Egg Onslaught: Dark-type, Ranged, 125 Strength. Blast the battlefield with a deluge of egg-like charges, dealing significant damage to all nearby Loomians.", icon: "dreggoburst" },
    "Drop of Youth": { description: "Boosts the Ranged and Melee Defense stats of the holder by 50% but prevents it from evolving. Has no effect if the holder is fully evolved.", icon: "dropofyouth" },
    "Dry Ice": { description: "When held by a Loomian, it will be inflicted with frostbite at the end of the turn, unless it already has a non-volatile status ailment, is an Ice-type Loomian, or possesses the Immunized Ability.", icon: "dryice" },
    "Earth Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Earth-type moves in battle.", icon: "earthessence" },
    "Electric Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Electric-type moves in battle.", icon: "electricessence" },
    "Energy Orb": { description: "Decreases the Energy Cost of the holder's moves by 25%.", icon: "energyorb" },
    "Eruptiburst": { description: "Empowers Eruptidon to Soul Burst. Enables one use of Hellstorm: Fire-type, Ranged, 100 Strength. Engulf your foes in a storm of raging flames. This will also deal significant residual damage to them for three turns.", icon: "eruptiburst" },
    "Fire Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Fire-type moves in battle.", icon: "fireessence" },
    "Flame Core": { description: "Flame Core, when held, gives the holder the Fire Type, slightly altering their appearance, and boosts the Strength of their Fire-type moves by 20%.", icon: "flame-core" },
    "Flame Pearl": { description: "Absorbs half the power of a Fire-type attack used against the Loomian equipped with this item.", icon: "flamepearl" },
    "Flame Shell": { description: "Increases the Strength of one Fire-type attack used by the Loomian equipped with this item.", icon: "flameshell" },
    "Floraburst": { description: "Empowers Florant to Soul Burst. Enables one use of Carnivorous Snap: Plant-type, Melee, 100 Strength. Bite down on the foe and drain their Health. Your Health is restored by half of the damage dealt..[sic]", icon: "floraburst" },
    "Fog Globe": { description: "This trinket can be used by a Loomian when entering battle to summon dense fog for 3 turns.", icon: "fogglobe" },
    "Fog Scale": { description: "When a Loomian equipped with Fog Scale summons dense fog in battle, the fog will last 3 turns longer.", icon: "fogscale" },
    "Freezer Core": { description: "Freezer Core, when held, gives the holder the Ice Type, slightly altering their appearance, and boosts the Strength of their Ice-type moves by 20%.", icon: "freezer-core" },
    "Frost Pearl": { description: "Absorbs half the power of a Ice-type attack used against the Loomian equipped with this item.", icon: "frostpearl" },
    "Frost Shell": { description: "Increases the Strength of one Ice-type attack used by the Loomian equipped with this item.", icon: "frostshell" },
    "Gastroburst": { description: "Empowers Gastroak to Soul Burst. Enables one use of Flora Blast: Plant-type, Ranged, 100 Strength. Absorb energy from the surrounding plant life to charge up a huge blast of energy. Super effective against Plant-type Loomians.", icon: "gastroburst" },
    "Health Amulet": { description: "The holder recovers 1/16 of its max Health every turn.", icon: "healthamulet" },
    "Heat Globe": { description: "This trinket can be used by a Loomian when entering battle to summon a smoldering heat wave for 3 turns.", icon: "heatglobe" },
    "Heat Scale": { description: "When a Loomian equipped with Heat Scale summons a smoldering heat wave in battle, the heat wave will last 3 turns longer.", icon: "heatscale" },
    "Heavy Armor": { description: "Decreases the damage of Melee Attacks done to the holder by 20%, but increases the Energy Cost of the holder's moves by 15%.", icon: "heavyarmor" },
    "Heavy Shackles": { description: "Makes the holder go last in battle.", icon: "heavyshackles" },
    "Heavy Shield": { description: "Decreases the damage of Ranged Attacks done to the holder by 20%, but increases the Energy Cost of the holder's moves by 15%.", icon: "heavyshield" },
    "Ice Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Ice-type moves in battle.", icon: "iceessence" },
    "Iciburst": { description: "Empowers Icigool to Soul Burst. Enables one use of Frightful Surprise: Spirit-type, Melee, 100 Strength. Fill your foe with dread and attack them unexpectedly. This also casts or breaks the Bane of Haste curse.", icon: "iciburst" },
    "Imperiburst": { description: "Empowers Imperior to Soul Burst. Enables one use of Last Laugh: Dark-type, 100 Strength. Melee or Ranged based on your greater Attack stat. Deals damage than lowers your opponent's matching Defense stat.", icon: "imperiburst" },
    "Joltburst": { description: "Empowers Joltooth to Soul Burst. Enables one use of Fulgur Fangs: Electric-type, Melee, 100 Strength. Electrocute the foe with a charged bite. They will be left unable to use Support moves for a few turrns.", icon: "joltburst" },
    "Kabunga Coffee": { description: "Gives the holder a 10% chance to replenish 1/8 of its max Energy per turn. Evolves Fentern into Weaselin when held by one and reaching Level 18.", icon: "kabungacoffee" },
    "Krakaburst": { description: "Empowers Krakaloa to Soul Burst. Enables one use of Eruption: Fire-type, Ranged, 125 Strength. Bury your foes in a stream of magma.", icon: "krakaburst" },
    "Light Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Light-type moves in battle.", icon: "lightessence" },
    "Martial Pearl": { description: "Absorbs half the power of a Brawler-type attack used against the Loomian equipped with this item.", icon: "martialpearl" },
    "Martial Shell": { description: "Increases the Strength of one Brawler-type attack used by the Loomian equipped with this item.", icon: "martialshell" },
    "Mental Pearl": { description: "Absorbs half the power of a Mind-type attack used against the Loomian equipped with this item.", icon: "mentalpearl" },
    "Mental Shell": { description: "Increases the Strength of one Mind-type attack used by the Loomian equipped with this item.", icon: "mentalshell" },
    "Metal Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Metal-type moves in battle.", icon: "metalessence" },
    "Metallic Pearl": { description: "Absorbs half the power of a Metal-type attack used against the Loomian equipped with this item.", icon: "metallicpearl" },
    "Metallic Shell": { description: "Increases the Strength of one Metal-type attack used by the Loomian equipped with this item.", icon: "metallicshell" },
    "Metroburst": { description: "Empowers Metronette to Soul Burst. Enables one use of Sinister Shackles: Dark-type, Ranged, 100 Strength. Blind your foes and torment them as you play puppeteer. Bypasses fortifications.", icon: "metroburst" },
    "Milkshake": { description: "If the possessor drops below 50% HP, it restores 25% of its health.", icon: "milkshake" },
    "Mind Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Mind-type moves in battle.", icon: "mindessence" },
    "Mysterious Dust": { description: "Gives the holder a 1/3 chance to be cured of any major status ailments it has every turn.", icon: "mysteriousdust" },
    "Mystic Wand": { description: "When held by Shawchi, this mysterious stick boosts its Ranged Attack and Ranged Defense.", icon: "mysticwand" },
    "Noshburst": { description: "Empowers Hoganosh to Soul Burst. Enables one use of Meltdown: Fire-type, Melee, 100 Strength.", icon: "noshburst" },
    "Noxious Pearl": { description: "Absorbs half the power of a Toxic-type attack used against the Loomian equipped with this item.", icon: "noxiouspearl" },
    "Noxious Shell": { description: "Increases the Strength of one Toxic-type attack used by the Loomian equipped with this item.", icon: "noxiousshell" },
    "Plain Pearl": { description: "Absorbs half the power of a Simple-type attack used against the Loomian equipped with this item.", icon: "plainpearl" },
    "Plain Shell": { description: "Increases the Strength of one Simple-type attack used by the Loomian equipped with this item.", icon: "plainshell" },
    "Plant Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Plant-type moves in battle.", icon: "plantessence" },
    "Power Core": { description: "Power Core, when held, boosts the Strength of the holder's moves by 20%, but makes them cost 25% more Energy to use. The holder's appearance will also be slightly altered if held.", icon: "power-core" },
    "Power Cuffs": { description: "Increases the damage of the holder's offensive attacks by 20% and Energy Cost by 25%.", icon: "powercuffs" },
    "Quantum Core": { description: "Quantum Core, when held, decreases the Energy Costs of the holder's moves by 25% and slightly alters their appearance.", icon: "quantum-core" },
    "Rageful Plushie": { description: "A Loomian equipped with Rageful Plushie, when strucked by a super-effective move, will become enraged, greatly boosting its Melee Attack and Ranged Attack.", icon: "ragefulplushie" },
    "Rain Globe": { description: "This trinket can be used by a Loomian when entering battle to summon heavy rainfall for 3 turns.", icon: "rainglobe" },
    "Rain Scale": { description: "When a Loomian equipped with Rain Scale summons a downpour in battle, the rain will last 3 turns longer.", icon: "rainscale" },
    "Restrictive Armor": { description: "When held by a Loomian, it will increase its Melee Defense by 33%. However, the holder can no longer use Support Moves in battle.", icon: "restrictivearmor" },
    "Restrictive Shield": { description: "When held by a Loomian, it will increase its Ranged Defense by 33%. However, the holder can no longer use Support Moves in battle.", icon: "restrictiveshield" },
    "Scrap Metal": { description: "Scrap Metal, when held by a Scorb or Veylens, increases their Melee Defense and Ranged Defense by 40%.", icon: "scrap-metal" },
    "Shade Pearl": { description: "Absorbs half the power of a Dark-type attack used against the Loomian equipped with this item.", icon: "shadepearl" },
    "Shade Shell": { description: "Increases the Strength of one Dark-type attack used by the Loomian equipped with this item.", icon: "shadeshell" },
    "Shine Pearl": { description: "Absorbs half the power of a Light-type attack used against the Loomian equipped with this item.", icon: "shinepearl" },
    "Shine Shell": { description: "Increases the Strength of one Light-type attack used by the Loomian equipped with this item.", icon: "shineshell" },
    "Simple Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Simple-type moves in battle.", icon: "simpleessence" },
    "Skeliburst": { description: "Empowers Skelic to Soul Burst. Enables one use of Heedless Rush: Water-type, Melee, 100 Strength. Ram into the target, removing anything blocking your way. Breaks down Scapegoats.", icon: "skeliburst" },
    "Spare Cable": { description: "Spare Cable, when the holder's Health drops below 50%, is consumed and heals the holder for 25% of their max Health.", icon: "spare-cable" },
    "Specialty Boots": { description: "A Loomian equipped with Specialty Boots will have increased Speed, but will only be able to use the first move it uses in battle.", icon: "specialtyboots" },
    "Specialty Gloves": { description: "A Loomian equipped with Specialty Gloves will have increased Melee Attack, but will only be able to use the first move it uses in battle.", icon: "specialtygloves" },
    "Specialty Goggles": { description: "A Loomian equipped with Specialty Boots will have increased Ranged Attack, but will only be able to use the first move it uses in battle.", icon: "specialtygoggles" },
    "Spectral Pearl": { description: "Absorbs half the power of a Spirit-type attack used against the Loomian equipped with this item.", icon: "spectralpearl" },
    "Spectral Shell": { description: "Increases the Strength of one Spirit-type attack used by the Loomian equipped with this item.", icon: "spectralshell" },
    "Spirit Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Spirit-type moves in battle.", icon: "spiritessence" },
    "Storm Globe": { description: "This trinket can be used by a Loomian when entering battle to summon a thunderstorm for 3 turns.", icon: "stormglobe" },
    "Storm Scale": { description: "When a Loomian equipped with Storm Scale summons a thunderstorm in battle, the storm will last 3 turns longer.", icon: "stormscale" },
    "Stratuburst": { description: "Empowers Stratusoar to Soul Burst. Enables one use of Airstrike: Metal-type, Ranged, 125 Strength. Fire half a dozen target-locked missiles at the opponent.", icon: "stratuburst" },
    "Terra Pearl": { description: "Absorbs half the power of a Earth-type attack used against the Loomian equipped with this item.", icon: "terrapearl" },
    "Terra Shell": { description: "Increases the Strength of one Earth-type attack used by the Loomian equipped with this item.", icon: "terrashell" },
    "Thunder Orb": { description: "Paralyzes the holder.", icon: "thunderorb" },
    "Toxic Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Toxic-type moves in battle.", icon: "toxicessence" },
    "Virulent Fang": { description: "When held by a Loomian, it will be inflicted with bad poison at the end of the turn, unless it already has a non-volatile status ailment, is a Toxic-type Loomian, or possesses the Immunized Ability.", icon: "virulentfang" },
    "Volcanic Ash": { description: "Burns the holder.", icon: "volcanicash" },
    "Volt Pearl": { description: "Absorbs half the power of a Electric-type attack used against the Loomian equipped with this item.", icon: "voltpearl" },
    "Volt Shell": { description: "Increases the Strength of one Electric-type attack used by the Loomian equipped with this item.", icon: "voltshell" },
    "Voltaic Core": { description: "Voltaic Core, when held, gives the holder the Electric Type, slightly altering their appearance, and boosts the Strength of their Electric-type moves by 20%.", icon: "voltaic-core" },
    "Water Essence": { description: "When held by a Loomian, this strange substance will boost the strength of their Water-type moves in battle.", icon: "wateressence" },
    "Wave Pearl": { description: "Absorbs half the power of a Water-type attack used against the Loomian equipped with this item.", icon: "wavepearl" },
    "Wave Shell": { description: "Increases the Strength of one Water-type attack used by the Loomian equipped with this item.", icon: "waveshell" },
    "Web Pearl": { description: "Absorbs half the power of a Bug-type attack used against the Loomian equipped with this item.", icon: "webpearl" },
    "Web Shell": { description: "Increases the Strength of one Bug-type attack used by the Loomian equipped with this item.", icon: "webshell" },
    "Wind Globe": { description: "This trinket can be used by a Loomian when entering battle to summon strong gusts for 3 turns.", icon: "windglobe" },
    "Wind Scale": { description: "When a Loomian equipped with Wind Scale summons strong gusts in battle, the winds will last 3 turns longer.", icon: "windscale" },
    "Kramburst": { description: "" },
    "Glintburst": { description: "" }
};

var sets = [];

var changelog = "Route 9 Loomians added.";

export { loomians, moves, types, abilities, typeModAbilities, items, itemInfo, sets, changelog };
