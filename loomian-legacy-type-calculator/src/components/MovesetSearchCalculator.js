import React, { useState } from 'react';
import '../App.css';

const loomiansData = [
    {
        name: "Embit",
        moves: [
            "Pounce", "Growl", "Singe", "Burrow", "Ear Slap", "Hop Kick", 
            "Fire Slam", "Power Focus", "Flaming Kick", "Barbs", "Body Crash", 
            "Boiling Press", "Chase Down", "Drudge", "Fire Breath", "Mega Punch", 
            "Raging Flame", "Slap Down", "Bait", "Dodge", "Fire Breath", "Preemptive Strike"
        ]
    },
    {
        name: "Rabburn",
        moves: [
            "Rapid Fire", "Hop Kick", "Fire Slam", "Power Focus", "Flaming Kick",
            "Barbs", "Body Crash", "Boiling Press", "Chase Down", "Drudge",
            "Fire Breath", "Mega Punch", "Raging Flame", "Slap Down", "Bait",
            "Bulk Up", "Dodge", "Fire Breath", "Pounce", "Growl", "Singe",
            "Burrow", "Ear Slap", "Preemptive Strike"
        ]
    },
    {
        name: "Searknight",
        moves: [
            "Searing Steel", "Flaming Kick", "Armor Down",
            "Barbs", "Body Crash", "Boiling Press", "Chase Down", "Drudge",
            "Fire Breath", "Mega Punch", "Raging Flame", "Slap Down", "Bait",
            "Bulk Up", "Dodge", "Fire Breath", "Pounce", "Growl", "Singe",
            "Burrow", "Ear Slap", "Rapid Fire", "Hop Kick", "Fire Slam",
            "Power Focus", "Preemptive Strike"
        ]
    },
    {
        name: "Dripple",
        moves: [
            "Strike", "Dawdle", "Spray", "Mind's Eye", "Swipe", "Water Bomb",
            "Soft Water", "Maroon", "Blindspot Batter", "Chilly Chomp",
            "Gamma Pulse", "Hydro Slash", "Mega Chomp", "Nova Blast",
            "Peace of Mind", "Radiant Rush", "Thunder Chomp", "Wave Wrecker",
            "Dodge", "Frost Beam", "Plunge", "Rejuvenate", "Tsunami"
        ]
    },
    {
        name: "Reptide",
        moves: [
            "Submerge", "Water Bomb", "Sleet Shot", "Soft Water", "Maroon",
            "Blindspot Batter", "Chilly Chomp", "Gamma Pulse", "Hydro Slash",
            "Mega Chomp", "Nova Blast", "Peace of Mind", "Radiant Rush",
            "Thunder Chomp", "Wave Wrecker", "Dodge", "Frost Beam", "Plunge",
            "Rejuvenate", "Tsunami", "Strike", "Dawdle", "Spray", "Mind's Eye", "Swipe"
        ]
    },
    {
        name: "Luminami",
        moves: [
            "Flash Pulse", "Maroon", "Blindspot Batter",
            "Chilly Chomp", "Gamma Pulse", "Hydro Slash", "Mega Chomp",
            "Nova Blast", "Peace of Mind", "Radiant Rush", "Thunder Chomp",
            "Wave Wrecker", "Dodge", "Flash 'n Flee", "Frost Beam", "Plunge", 
            "Rejuvenate", "Tsunami", "Strike", "Dawdle", "Spray", "Mind's Eye", 
            "Swipe", "Submerge", "Sleet Shot"
        ]
    },
    {
        name: "Fevine",
        moves: [
            "Pounce", "Growl", "Petal Pummel", "Stretch", "Swipe",
            "Leaf Barrage", "Life Drain", "Nature's Force", "Splitting Headache",
            "Boom Bash", "Bush Whack", "Poison", "Power Focus", "Tease",
            "Thistle Slash", "Timber Thrash", "Wonder Herb",
            "Barter", "Dodge", "Ill Will", "Mud Spatter",
        ]
    },
    {
        name: "Felver",
        moves: [
            "Nature's Rage", "Leaf Barrage", "Toxic Tail", "Life Drain", 
            "Nature's Force", "Splitting Headache", "Boom Bash", "Bush Whack", 
            "Poison", "Power Focus", "Tease", "Thistle Slash", "Timber Thrash", 
            "Wonder Herb", "Barter", "Bulk Up", "Dodge", "Ill Will", "Mud Spatter",
            "Pounce", "Growl", "Petal Pummel", "Stretch", "Swipe"
        ]
    },
    {
        name: "Tahtab",
        moves: [
            "Junglejutsu", "Nature's Force", "Splitting Headache",
            "Boom Bash", "Bush Whack", "Poison", "Power Focus", "Tease", 
            "Thistle Slash", "Timber Thrash", "Wonder Herb", "Barter", "Bulk Up", 
            "Dodge", "Ill Will", "Mud Spatter", "Pounce", "Growl", "Petal Pummel", 
            "Stretch", "Swipe", "Nature's Rage", "Leaf Barrage", "Toxic Tail", 
            "Life Drain"
        ]
    },
    {
        name: "Eaglit",
        moves: [
            "Pounce", "Stare", "Shine", "Growl", "Peck", "Luster Loot", "Cyclone Slam", 
            "Power Focus", "Gamma Pulse", "Air Blade", "Magnify", "Metal Blast", "Nosedive", 
            "Nova Blast", "Radiant Rush", "Raging Howl", "Dodge", "Flash 'n Flee"
        ]
    },
    {
        name: "Torprey",
        moves: [
            "Radiant Forecast", "Luster Loot", "Cyclone Slam", "Power Focus", 
            "Gamma Pulse", "Air Blade", "Magnify", "Metal Blast", "Nosedive", 
            "Nova Blast", "Radiant Rush", "Raging Howl", "Dodge", "Flash 'n Flee",
            "Pounce", "Stare", "Shine", "Growl", "Peck"
        ]
    },
    {
        name: "Falkyrie",
        moves: [
            "Holy Slash", "Gamma Pulse", "Armor Down", "Air Blade", "Magnify", 
            "Metal Blast", "Nosedive", "Nova Blast", "Radiant Rush", "Raging Howl",
            "Dodge", "Flash 'n Flee", "Rejuvenate", "Pounce", "Stare", "Shine", 
            "Growl", "Peck", "Radiant Forecast", "Luster Loot", "Cyclone Slam", "Power Focus"
        ]
    },
    {
        name: "Vambat",
        moves: [
            "Gnaw", "Growl", "Chomp", "Tease", "Dive Bomb", "Bamboozle", "Air Blade", 
            "Sharpen", "Shadow Sprint", "Phantom Slash", "Dark Surge", "Harrow", 
            "Mega Chomp", "Phantom Slash", "Slap Down", "Slash", "Spectral Burst", "Dodge"
        ]
    },
    {
        name: "Dimpire",
        moves: [
            "Gnaw", "Growl", "Chomp", "Tease", "Dive Bomb", "Blood Drain", "Bamboozle", "Air Blade", 
            "Sharpen", "Shadow Sprint", "Phantom Slash", "Dark Surge", "Harrow", 
            "Mega Chomp", "Phantom Slash", "Slap Down", "Slash", "Spectral Burst", "Dodge"
        ]
    },
    {
        name: "Vesperatu",
        moves: [
            "Revival", "Shadow Sprint", "Phantom Slash", "Dark Surge", "Harrow", "Mega Chomp", 
            "Phantom Slash", "Slap Down", "Slash", "Spectral Burst", "Dodge", "Spectral Burst",
            "Gnaw", "Growl", "Chomp", "Tease", "Dive Bomb", "Blood Drain", "Bamboozle", 
            "Air Blade", "Sharpen"
        ]
    },
    {
        name: "Snocub",
        moves: [
            "Strike", "Brace", "Flurry", "Dawdle", "Snowdozer", "Chilly Chomp",
            "Sleet Shot", "Icicle Trap", "Body Slam", "Earthquake", "Frost Beam",
            "Ice Hammer", "Rogue Assault", "Quicksand", "Dodge"
        ]
    },
    {
        name: "Snowki",
        moves: [
            "Winter's Fury", "Chilly Chomp", "Quick Punch", "Sleet Shot", "Icicle Trap", "Mudslide",
            "Body Slam", "Earthquake", "Frost Beam", "Ice Hammer", "Rogue Assault", "Quicksand",
            "Bulk Up", "Dodge",
            "Strike", "Brace", "Flurry", "Dawdle", "Snowdozer"
        ]
    },
    {
        name: "Himbrr",
        moves: [
            "Yeti's Wrath", "Icicle Trap", "Mudslide",
            "Body Slam", "Earthquake", "Frost Beam", "Ice Hammer", "Rogue Assault", "Quicksand",
            "Bulk Up", "Dodge",
            "Strike", "Brace", "Flurry", "Dawdle", "Snowdozer",
            "Winter's Fury", "Chilly Chomp", "Quick Punch", "Sleet Shot"
        ]
    },
    {
        name: "Weevolt",
        moves: [
            "Pounce", "Growl", "Static Shock", "Stretch", "Swipe", "Thunder Slam",
            "Thunder Chomp", "Thunderstrike", "Blaze Chomp", "Chilly Chomp", "Jolt",
            "Primal Slash", "Tase", "Zip-Zap", "Dodge"
        ]
    },
    {
        name: "Stozap",
        moves: [
            "Storm Summon", "Thunder Slam", "Elemental Burst", "Thunder Chomp", "Thunderstrike",
            "Shrewd Blast", "Blaze Chomp", "Chilly Chomp", "Jolt", "Primal Slash", "Tase",
            "Zip-Zap", "Dodge",
            "Pounce", "Growl", "Static Shock", "Stretch", "Swipe"
        ]
    },
    {
        name: "Zuelong",
        moves: [
            "Ancient Roar", "Thunderstrike", "Shrewd Blast", "Blaze Chomp", "Chilly Chomp",
            "Jolt", "Primal Slash", "Tase", "Zip-Zap", "Dodge", "Fire Breath",
            "Pounce", "Growl", "Static Shock", "Stretch", "Swipe",
            "Storm Summon", "Thunder Slam", "Elemental Burst", "Thunder Chomp"
        ]
    },
    {
        name: "Twilat",
        moves: [
            "Gnaw", "Dawdle", "Stretch", "Quick Pounce", "Swipe", "Scapegoat",
            "Body Slam", "Chase Down", "Disperse", "Gloominous Roar", "High-Pitch Screech",
            "Power Focus", "Raging Howl", "Raging Tackle", "Sharpen", "Dodge"
        ]
    },
    {
        name: "Umbrat",
        moves: [
            "Gloom Fangs", "Scapegoat", "Sharpen", "Raging Tackle", "Mega Chomp", "Bulk Up", 
            "Fade Away", "Body Slam", "Chase Down", "Disperse", "Gloominous Roar",
            "High-Pitch Screech", "Power Focus", "Raging Howl", "Dark Surge", "Dodge",
            "Gnaw", "Dawdle", "Stretch", "Quick Pounce", "Swipe"
        ]
    },
    {
        name: "Luxoar",
        moves: [
            "Luminous Roar", "Scapegoat", "Disperse", "Raging Howl", "Gamma Pulse", "Peace of Mind",
            "Resonate", "Body Slam", "Chase Down", "Disperse", "Gloominous Roar", "High-Pitch Screech",
            "Power Focus", "Raging Howl", "Raging Tackle", "Sharpen", "Dodge", "Gnaw", "Dawdle",
            "Stretch", "Quick Pounce", "Swipe"
        ]
    },
    {
        name: "Tiklipse",
        moves: [
            "Scapegoat", "Sharpen", "Disperse", "Raging Howl", "Raging Tackle", "Gamma Pulse",
            "Dark Surge", "Rant", "Body Slam", "Chase Down", "Disperse", "Gloominous Roar",
            "High-Pitch Screech", "Power Focus","Sharpen", "Bulk Up", "Dodge", 
            "Peace of Mind", "Gnaw", "Dawdle", "Stretch", "Quick Pounce", "Swipe"
        ]
    },
    // Add more Loomians and their moves here
];

const allMoves = [
    'Accelerate', 'Aim', 'Bait', 'Barter', 'Battle Chime', 'Battle Horn', 'Bequeath',
    'Body Slam', 'Brace', 'Chase Down', 'Climate Cannon', 'Conclusion', 'Dawdle', 'Daydream',
    'Dissonant Chord', 'Dodge', 'Drudge', 'Ear Slap', 'Eerie Stare', 'Enamor', 'Examine', 
    'Give Up', 'Gnaw', 'Growl', 'Harmonious Chord', 'Headbutt', 'High-Pitch Screech',
    'Ill Will', 'Nab', 'Pounce', 'Power Focus', 'Quick Pounce', 'Raging Howl', 'Raging Tackle',
    'Rainbow Blast', 'Recycle', 'Rejuvenate', 'Repeating Tune', 'Resonate', 'Scapegoat',
    'Shriek', 'Slash', 'Slumber', 'Spare', 'Spit', 'Spit Out', 'Squawk', 'Stampede', 'Stare',
    'Stretch', 'Strike', 'Summon', 'Swipe', 'Tail Slap', 'Teamwork', 'Tear Down', 'Tone Barrier',
    'Tribute', 'Blaze Chomp', 'Blaze Punch', 'Boiling Press', 'Burn Up', 'Eruption', 'Fiery Fondant',
    'Fire Breath', 'Fire Slam', 'Flaming Kick', 'Flare Blast', 'Heat Wave', 'Hellstorm', 
    'Kindled Rage', 'Lava Slash', 'Magma Block', 'Magma Burst', 'Pepper Burst', 'Phoenix Flame',
    'Pyrokinesis', 'Raging Flame', 'Rapid Fire', 'Singe', 'Aqua Jaws', 'Douse', 'Downpour', 
    'Geyser', 'Headless Rush', 'Hydro Blast', 'Hydro Slash', 'Maroon', 'Marsh Wave', 'Piercing Drive',
    'Plunge', 'Shell Bash', 'Shell Shrapnel', 'Soft Water', 'Spray', 'Submerge', 'Torrential Slash',
    'Tsunami', 'Vicious Snap', 'Water Bomb', 'Wave Wrecker', 'Briar Block', 'Bush Whack', 
    'Carnivorous Snap', 'Coconut Bomb', 'Flora Blast', 'Fungus Curse', 'Harvest', 'Leaf Barrage',
    'Life Drain', 'Nature\'s Force', 'Nature\'s Rage', 'Petal Pummel', 'Photosynthesis', 
    'Pine Shot', 'Sap Plant', 'Snore Spores', 'Static Spores', 'Take Root', 'Thistle Slash',
    'Thorn Slam', 'Timber Thrash', 'Trip root', 'Wonder Herb', 'Blindspot Batter', 'Dazzling Barrage',
    'Disperse', 'Energy Surge', 'Flare', 'Flash', 'Flash \'n Flee', 'Flash Pulse', 'Gamma Pulse',
    'Hyper String', 'Light Dash', 'Lightspeed Ray', 'Luminous Roar', 'Luster Loot', 'Magnify',
    'Nova Blast', 'Radiant Forecast', 'Radiant Rush', 'Shine', 'Solar Punch', 'Baffle',
    'Bag of Tricks', 'Bamboozle', 'Blood Drain', 'Charade', 'Chomp', 'Dark Surge', 'Dive Bomb',
    'Egg Lob', 'Egg Storm', 'Gain Drain', 'Gloom Fangs', 'Gnarly Gash', 'Mega Chomp', 'Pilfer',
    'Provoke', 'Rant', 'Revolution', 'Shadow Lurk', 'Shadow Pulse', 'Sharpen', 'Sinister Shackles',
    'Slap Down', 'Soul Drain', 'Spite', 'Square One', 'Talent Trade', 'Tricky Tactics', 'Tease',
    'Brain Freeze', 'Chilly Chomp', 'Deep Freeze', 'Flurry', 'Frost Beam', 'Frost Breath',
    'Frost Punch', 'Ice Hammer', 'Icicle Trap', 'Icicle Tremor', 'Out of Order', 'Peppermint Breath',
    'Sleet Shot', 'Snot Shot', 'Snowdozer', 'Winter\'s Fury', 'Electro Blast', 'Electro-Punch',
    'Electroburst', 'Energize', 'Fulgur Fangs', 'Jolt', 'Jump Start', 'Power Draw', 'Power Siphon',
    'Power Surge', 'Precision Bolt', 'Static Shock', 'Storm Summon', 'Tase', 'Thunder Blast',
    'Thunder Chomp', 'Thunder Clap', 'Thunder Crash', 'Thunder Slam', 'Thunderstorm',
    'Thunderstrike', 'Zip-Zap', 'Air Blade', 'Air Shot', 'Air Whipe', 'Cyclone Slam', 'Double Beat',
    'Gale Force', 'Gust', 'Jet Stream', 'Nosedive', 'Peck', 'Perch', 'Ruffled Feathers',
    'Scavenge', 'Second Wind', 'Tempest', 'Typhoon', 'Wing Slap', 'Battering Ram', 'Bug Bite',
    'Clamp Claw', 'Discordance', 'Double Sting', 'Molt', 'Mystic Breeze', 'Parasitize',
    'Pester', 'Pestilence', 'Pheroblast', 'Twirly Whirl', 'Web Shot', 'Boulder Blast', 'Burrow',
    'Clay Slap', 'Earthquake', 'Landslide', 'Muck Buck', "Mud Spatter", "Mudslide", "Quicksand", 
    "Tamp", "Yeti's Wrath", "Baneful Bash", "Barb Trap", "Canister Burst", "Corrode", "Gobble Goop",
    "Graffiti", "Muck Blast", "Oil Leak", "Paint Shower", "Poison",
    "Poison Barbs", "Slime", "Sting", "Toxiblast", "Toxic Spores",
    "Toxic Tail", "Venom Chomp", "Venom Slash", "Airstrike", "Armor Down",
    "Barbs", "Bash", "Clamp", "Complete Demolition", "Dart Burst",
    "Double Whack", "Heavy Bash", "Holy Slash", "Metal Blast", "Metal Shriek",
    "Metal Swipes", "Razor Slash", "Reflection Burst", "Searing Steel", "Steel Crusher",
    "Steel Trap", "Tune-up", "Vice Jaws", "Ancient Roar", "Augment",
    "Bane of Haste", "Beast's Slumber", "Confound", "Dino Claws", "Draco Beam",
    "Elemental Burst", "Energy Break", "Far Enchantment", "Goop Spout", "Meteor Crash",
    "Meteor Smash", "Near Enchantment", "Outburst", "Primal Slash", "Savage Greed",
    "Shrewd Blast", "Apparition", "Emulate", "Fade Away", "Final Ruse",
    "Frightful Surprise", "Ghostly Howl", "Harrow", "Hazy Shroud", "Impersonate",
    "Oppress", "Phantom Blast", "Phantom Slash", "Revival", "Shadow Sprint",
    "Shatter", "Soul Harvest", "Soul Storm", "Spectral Burst", "Startle",
    "Stupefy", "Bludgeon", "Body Crash", "Boom Bash", "Brawn Boost",
    "Buck Up", "Bulk Up", "Chop", "Clawber", "Counter Stance",
    "Driving Force", "Heart Break", "Hop Kick", "Horn-Dashi", "Junglejutsu",
    "Mega Kick", "Mega Punch", "Pep Jab", "Preemptive Strike", "Punch",
    "Quick Punch", "Rogue Assault", "Rough Up", "Shadowbox", "Swat",
    "Vital Jab", "Brain Exercise", "Brainwash", "Cerebral Slash", "Déjà Vu",
    "Dissipate", "Empathize", "Energy Gift", "Flabbergast", "Foul Chant",
    "Health Gift", "Hypnotize", "Memorize", "Mind's Eye", "Peace of Mind",
    "Psychal Slap", "Psycho Blast", "Return to Sender", "Splitting Headache", "Stratagem",
    "Telekinetic Sweep", "Adaptive Assault", "Expert Onslaught", "Gloominous Roar" 
]; 

function MovesetSearchCalculator() {
    const [selectedMoves, setSelectedMoves] = useState(Array(4).fill(''));
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleMoveChange = (index, value) => {
        const updatedMoves = selectedMoves.map((move, i) => (i === index ? value : move));
        setSelectedMoves(updatedMoves);
    };

    const searchLoomians = () => {
        const filteredMoves = selectedMoves.filter(move => move !== '');

        if (filteredMoves.length === 0) {
            setError('Select at least 1 move.');
            setSearchResults([]);
            return;
        }

        setError('');
        const results = loomiansData.filter(loomian =>
            filteredMoves.every(move => loomian.moves.includes(move))
        );

        setSearchResults(results);
    };

    const resetSearcher = () => {
        setSelectedMoves(Array(4).fill(''));
        setSearchResults([]);
        setError('');
    };

    const filterMoves = (input) => {
        if (!input) return [];
        return allMoves.filter(move => move.toLowerCase().includes(input.toLowerCase()));
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Moveset Searcher</h1>
            <p>Only works for loomians #1-#25, simply here for testing.</p>
            {selectedMoves.map((move, index) => (
                <div key={index} className="move-selector">
                    <label htmlFor={`move-${index}`}>Select Move {index + 1}: </label>
                    <input
                        type="text"
                        id={`move-${index}`}
                        value={move}
                        onChange={(e) => handleMoveChange(index, e.target.value)}
                        list={`move-options-${index}`}
                    />
                    <datalist id={`move-options-${index}`}>
                        {filterMoves(move).map((suggestion, i) => (
                            <option key={i} value={suggestion} />
                        ))}
                    </datalist>
                </div>
            ))}
            <button onClick={searchLoomians}>Search Loomians</button>
            <button onClick={resetSearcher}>Reset</button>
            {error && <div className="error">{error}</div>}
            <div className="search-results">
                <h2>Search Results</h2>
                {searchResults.length === 0 ? (
                    <div>No results found.</div>
                ) : (
                    searchResults.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <span>{loomian.name}</span>
                        </div>
                    ))
                )}
            </div>
            <div className="watermark">
                <a href="https://www.youtube.com/@SergeantShaky" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="youtube-icon" />
                </a>
                <span>Sergeant Shaky</span>
            </div>
        </div>
    );
}

export default MovesetSearchCalculator;
