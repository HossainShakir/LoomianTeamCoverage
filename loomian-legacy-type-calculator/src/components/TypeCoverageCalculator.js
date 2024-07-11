import React, { useState } from 'react';
import { typeChart, specialTypeCharts } from '../typechart';
import '../App.css';

const allTypes = [
    'None', 'Fire', 'Water', 'Plant', 'Light', 'Dark', 'Ice', 'Electric',
    'Air', 'Bug', 'Earth', 'Toxic', 'Metal', 'Ancient', 'Spirit', 'Brawler',
    'Mind', 'Simple'
];

const loomiansList = [
    { name: 'Embit', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/embit.png') },
    { name: 'Rabburn', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/rabburn.png') },
    { name: 'Searknight', primaryType: 'Fire', secondaryType: 'Metal', icon: require('../assets/icons/searknight.png') },
    { name: 'Dripple', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/dripple.png') },
    { name: 'Reptide', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/reptide.png') },
    { name: 'Luminami', primaryType: 'Water', secondaryType: 'Light', icon: require('../assets/icons/luminami.png') },
    { name: 'Fevine', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/fevine.png') },
    { name: 'Felver', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/felver.png') },
    { name: 'Tahtab', primaryType: 'Plant', secondaryType: 'Brawler', icon: require('../assets/icons/tahtab.png') },
    { name: 'Eaglit', primaryType: 'Light', secondaryType: 'None', icon: require('../assets/icons/eaglit.png') },
    { name: 'Torprey', primaryType: 'Light', secondaryType: 'None', icon: require('../assets/icons/torprey.png') },
    { name: 'Falkyrie', primaryType: 'Light', secondaryType: 'Metal', icon: require('../assets/icons/falkyrie.png') },
    { name: 'Vambat', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/vambat.png') },
    { name: 'Dimpire', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/dimpire.png') },
    { name: 'Vesperatu', primaryType: 'Dark', secondaryType: 'Spirit', icon: require('../assets/icons/vesperatu.png') },
    { name: 'Snocub', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/snocub.png') },
    { name: 'Snowki', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/snowki.png') },
    { name: 'Himbrr', primaryType: 'Ice', secondaryType: 'Earth', icon: require('../assets/icons/himbrr.png') },
    { name: 'Weevolt', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/weevolt.png') },
    { name: 'Stozap', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/stozap.png') },
    { name: 'Zuelong', primaryType: 'Electric', secondaryType: 'Ancient', icon: require('../assets/icons/zuelong.png') },
    { name: 'Twilat', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/twilat.png') },
    { name: 'Umbrat', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/umbrat.png') },
    { name: 'Luxoar', primaryType: 'Light', secondaryType: 'None', icon: require('../assets/icons/luxoar.png') },
    { name: 'Tiklipse', primaryType: 'Light', secondaryType: 'Dark', icon: require('../assets/icons/tiklipse.png') },
    { name: 'Tiklipse (Total Eclipse)', primaryType: 'Light', secondaryType: 'Dark', icon: require('../assets/icons/tiklipse.png'), specialTypeChart: 'TotalEclipse' },
    { name: 'Cathorn', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/cathorn.png') },
    { name: 'Propae', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/propae.png') },
    { name: 'Cynamoth', primaryType: 'Bug', secondaryType: 'Air', icon: require('../assets/icons/cynamoth.png') },
    { name: 'Sumobito', primaryType: 'Bug', secondaryType: 'Brawler', icon: require('../assets/icons/sumobito.png') },
    { name: 'Twittle', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/twittle.png') },
    { name: 'Paratweet', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/paratweet.png') },
    { name: 'Avitross', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/avitross.png') },
    { name: 'Pyder', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/pyder.png') },
    { name: 'Pyder (Coursing Venom)', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/pyder.png'), specialTypeChart: 'CoursingVenom' },
    { name: 'Swolder', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/swolder.png') },
    { name: 'Swolder (Coursing Venom)', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/swolder.png'), specialTypeChart: 'CoursingVenom' },
    { name: 'Antsee', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/antsee.png') },
    { name: 'Antsee (Woodsman)', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/antsee.png'), specialTypeChart: 'Woodsman' },
    { name: 'Florant', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/florant.png') },
    { name: 'Florant (Woodsman)', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/florant.png'), specialTypeChart: 'Woodsman' },
    { name: 'Florant-Flychomp', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/florant-flychomp.png') },
    { name: 'Grubby', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/grubby.png') },
    { name: 'Coonucopia', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/coonucopia.png') },
    { name: 'Terrafly', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/terrafly.png') },
    { name: 'Terraclaw', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/terraclaw.png') },
    { name: 'Kleptyke', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/kleptyke.png') },
    { name: 'Ragoon', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/ragoon.png') },
    { name: 'Babore', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/babore.png') },
    { name: 'Boarrok', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/boarrok.png') },
    { name: 'Geklow', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/geklow.png') },
    { name: 'Geklow (Prismatic)', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/geklow.png'), specialTypeChart: 'Prismatic' },
    { name: 'Geklow (Lightning Rod)', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/geklow.png'), specialTypeChart: 'LightningRod' },
    { name: 'Eleguana', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/eleguana.png') },
    { name: 'Eleguana (Prismatic)', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/eleguana.png'), specialTypeChart: 'Prismatic' },
    { name: 'Eleguana (Lightning Rod)', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/eleguana.png'), specialTypeChart: 'LightningRod' },
    { name: 'Slugling', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/slugling.png') },
    { name: 'Escargrow', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/escargrow.png') },
    { name: 'Gastroak', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/gastroak.png') },
    { name: 'Gastroak-Terraform', primaryType: 'Plant', secondaryType: 'Earth', icon: require('../assets/icons/gastroak-terraform.png'), specialTypeChart: 'Insulated' },
    { name: 'Kabunga', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/kabunga.png') },
    { name: 'Kabunga (Noxious Weeds)', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/kabunga.png'), specialTypeChart: 'NoxiousWeeds' },
    { name: 'Kabunga-Halloween', primaryType: 'Plant', secondaryType: 'Mind', icon: require('../assets/icons/kabunga-halloween.png') },
    { name: 'Kabunga-Halloween (Noxious Weeds)', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/kabunga-halloween.png'), specialTypeChart: 'NoxiousWeeds' },
    { name: 'Wiki-Wiki', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/wiki-wiki.png') },
    { name: 'Wiki-Wiki (Noxious Weeds)', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/wiki-wiki.png'), specialTypeChart: 'NoxiousWeeds' },
    { name: 'Chartiki', primaryType: 'Plant', secondaryType: 'Fire', icon: require('../assets/icons/chartiki.png') },
    { name: 'Chartiki (Noxious Weeds)', primaryType: 'Plant', secondaryType: 'Fire', icon: require('../assets/icons/chartiki.png'), specialTypeChart: 'NoxiousWeeds' },
    { name: 'Waka-Laka', primaryType: 'Plant', secondaryType: 'Mind', icon: require('../assets/icons/waka-laka.png') },
    { name: 'Shawchi', primaryType: 'Mind', secondaryType: 'None', icon: require('../assets/icons/shawchi.png') },
    { name: 'Rakrawla', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/rakrawla.png') },
    { name: 'Sedimars', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/sedimars.png') },
    { name: 'Gumpod', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/gumpod.png') },
    { name: 'Ventacean', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/ventacean.png') },
    { name: 'Phancub', primaryType: 'Spirit', secondaryType: 'Brawler', icon: require('../assets/icons/phancub.png') },
    { name: 'Phancub-Valentine', primaryType: 'Spirit', secondaryType: 'Brawler', icon: require('../assets/icons/phancub-valentine.png') },
    { name: 'Ursoul', primaryType: 'Spirit', secondaryType: 'Brawler', icon: require('../assets/icons/ursoul.png') },
    { name: 'Ursnac', primaryType: 'Spirit', secondaryType: 'Brawler', icon: require('../assets/icons/ursnac.png') },
    { name: 'Whispup', primaryType: 'Spirit', secondaryType: 'Fire', icon: require('../assets/icons/whispup.png') },
    { name: 'Revenine', primaryType: 'Spirit', secondaryType: 'Fire', icon: require('../assets/icons/revenine.png') },
    { name: 'Skilava', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/skilava.png') },
    { name: 'Skilava (Combustible)', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/skilava.png'), specialTypeChart: 'Combustible' },
    { name: 'Geksplode', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/geksplode.png') },
    { name: 'Geksplode (Combustible)', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/geksplode.png'), specialTypeChart: 'Combustible' },
    { name: 'Eruptidon', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/eruptidon.png') },
    { name: 'Eruptidon (Combustible)', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/eruptidon.png'), specialTypeChart: 'Combustible' },
    { name: 'Eruptidon-Magmadire', primaryType: 'Fire', secondaryType: 'Earth', icon: require('../assets/icons/eruptidon-magmadire.png') },
    { name: 'Craytal', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/craytal.png') },
    { name: 'Craytal (Combustible)', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/craytal.png'), specialTypeChart: 'Combustible' },
    { name: 'Craytal-Holiday', primaryType: 'Ice', secondaryType: 'Plant', icon: require('../assets/icons/craytal-holiday.png') },
    { name: 'Krakaloa', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/krakaloa.png') },
    { name: 'Krakaloa (Combustible)', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/krakaloa.png'), specialTypeChart: 'Combustible' },
    { name: 'Krakaloa-Lavafiend', primaryType: 'Fire', secondaryType: 'Spirit', icon: require('../assets/icons/krakaloa-lavafiend.png') },
    { name: 'Volkaloa', primaryType: 'Fire', secondaryType: 'Ancient', icon: require('../assets/icons/volkaloa.png') },
    { name: 'Volkaloa (Combustible)', primaryType: 'Fire', secondaryType: 'Ancient', icon: require('../assets/icons/volkaloa.png'), specialTypeChart: 'Combustible' },
    { name: 'Festifir', primaryType: 'Ice', secondaryType: 'Plant', icon: require('../assets/icons/festifir.png') },
    { name: 'Igneol', primaryType: 'Ancient', secondaryType: 'None', icon: require('../assets/icons/igneol.png') },
    { name: 'Chrysite', primaryType: 'Ancient', secondaryType: 'None', icon: require('../assets/icons/chrysite.png') },
    { name: 'Obsidrugon', primaryType: 'Ancient', secondaryType: 'None', icon: require('../assets/icons/obsidrugon.png') },
    { name: 'Cafnote-Male', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/cafnote-male.png') },
    { name: 'Cafnote-Female', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/cafnote-female.png') },
    { name: 'Trumbull', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/trumbull.png') },
    { name: 'Mootune', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/mootune.png') },
    { name: 'Gobbidemic', primaryType: 'Toxic', secondaryType: 'None', icon: require('../assets/icons/gobbidemic.png') },
    { name: 'Icigool', primaryType: 'Spirit', secondaryType: 'Ice', icon: require('../assets/icons/icigool.png') },
    { name: 'Icigool-Incarnate', primaryType: 'Spirit', secondaryType: 'Ice', icon: require('../assets/icons/icigool-incarnate.png') },
    { name: 'Pyramind', primaryType: 'Mind', secondaryType: 'None', icon: require('../assets/icons/pyramind.png') },
    { name: 'Pharoglyph', primaryType: 'Mind', secondaryType: 'None', icon: require('../assets/icons/pharoglyph.png') },
    { name: 'Burroach', primaryType: 'Bug', secondaryType: 'Earth', icon: require('../assets/icons/burroach.png') },
    { name: 'Garbantis', primaryType: 'Bug', secondaryType: 'Earth', icon: require('../assets/icons/garbantis.png') },
    { name: 'Whimpor', primaryType: 'Metal', secondaryType: 'Air', icon: require('../assets/icons/whimpor.png') },
    { name: 'Whimpor (Toxic Filter)', primaryType: 'Metal', secondaryType: 'Air', icon: require('../assets/icons/whimpor.png'), specialTypeChart: 'ToxicFilter' },
    { name: 'Stratusoar', primaryType: 'Metal', secondaryType: 'Air', icon: require('../assets/icons/stratusoar.png') },
    { name: 'Stratusoar (Toxic Filter)', primaryType: 'Metal', secondaryType: 'Air', icon: require('../assets/icons/stratusoar.png'), specialTypeChart: 'ToxicFilter' },
    { name: 'Stratusoar-Jetwing', primaryType: 'Metal', secondaryType: 'Air', icon: require('../assets/icons/stratusoar-jetwing.png') },
    { name: 'Territi', primaryType: 'Metal', secondaryType: 'Toxic', icon: require('../assets/icons/territi.png') },
    { name: 'Dyeborg', primaryType: 'Metal', secondaryType: 'Toxic', icon: require('../assets/icons/dyeborg.png') },
    { name: 'Operaptor', primaryType: 'Metal', secondaryType: 'Earth', icon: require('../assets/icons/operaptor.png') },
    { name: 'Concredon', primaryType: 'Metal', secondaryType: 'Earth', icon: require('../assets/icons/concredon.png') },
    { name: 'Tyrecks', primaryType: 'Metal', secondaryType: 'Earth', icon: require('../assets/icons/tyrecks.png') },
    { name: 'Chompactor', primaryType: 'Metal', secondaryType: 'None', icon: require('../assets/icons/chompactor.png') },
    { name: 'Munchwheel', primaryType: 'Metal', secondaryType: 'None', icon: require('../assets/icons/munchwheel.png') },
    { name: 'Scorb', primaryType: 'Metal', secondaryType: 'None', icon: require('../assets/icons/scorb.png') },
    { name: 'Veylens', primaryType: 'Metal', secondaryType: 'None', icon: require('../assets/icons/veylens.png') },
    { name: 'Gardrone', primaryType: 'Metal', secondaryType: 'None', icon: require('../assets/icons/gardrone.png') },
    { name: 'Poochrol', primaryType: 'Metal', secondaryType: 'Electric', icon: require('../assets/icons/poochrol.png') },
    { name: 'Hunder', primaryType: 'Metal', secondaryType: 'Electric', icon: require('../assets/icons/hunder.png') },
    { name: 'Goppie', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/goppie.png') },
    { name: 'Arapaigo', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/arapaigo.png') },
    { name: 'Pyke', primaryType: 'Ancient', secondaryType: 'Water', icon: require('../assets/icons/pyke.png') },
    { name: 'Skelic', primaryType: 'Ancient', secondaryType: 'Water', icon: require('../assets/icons/skelic.png') },
    { name: 'Skelic-Seascourge', primaryType: 'Ancient', secondaryType: 'Water', icon: require('../assets/icons/skelic-seascourge.png') },
    { name: 'Zaleo', primaryType: 'Ancient', secondaryType: 'Electric', icon: require('../assets/icons/zaleo.png') },
    { name: 'Joltooth', primaryType: 'Ancient', secondaryType: 'Electric', icon: require('../assets/icons/joltooth.png') },
    { name: 'Joltooth-Thunderking', primaryType: 'Ancient', secondaryType: 'Electric', icon: require('../assets/icons/joltooth-thunderking.png') },
    { name: 'Dobo', primaryType: 'Ancient', secondaryType: 'Fire', icon: require('../assets/icons/dobo.png') },
    { name: 'Infernix', primaryType: 'Ancient', secondaryType: 'Fire', icon: require('../assets/icons/infernix.png') },
    { name: 'Kyogo', primaryType: 'Ancient', secondaryType: 'Dark', icon: require('../assets/icons/kyogo.png') },
    { name: 'Dorogo', primaryType: 'Ancient', secondaryType: 'Dark', icon: require('../assets/icons/dorogo.png') },
    { name: 'Wiledile', primaryType: 'Water', secondaryType: 'Plant', icon: require('../assets/icons/wiledile.png') },
    { name: 'Wiledile (Woodsman)', primaryType: 'Water', secondaryType: 'Plant', icon: require('../assets/icons/wiledile.png'), specialTypeChart: 'Woodsman' },
    { name: 'Mawamurk', primaryType: 'Water', secondaryType: 'Plant', icon: require('../assets/icons/mawamurk.png') },
    { name: 'Mawamurk (Woodsman)', primaryType: 'Water', secondaryType: 'Plant', icon: require('../assets/icons/mawamurk.png'), specialTypeChart: 'Woodsman' },
    { name: 'Ampole', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/ampole.png') },
    { name: 'Amphiton', primaryType: 'Electric', secondaryType: 'Mind', icon: require('../assets/icons/amphiton.png') },
    { name: 'Meditoad', primaryType: 'Electric', secondaryType: 'Mind', icon: require('../assets/icons/meditoad.png') },
    { name: 'Pwuff', primaryType: 'Water', secondaryType: 'Toxic', icon: require('../assets/icons/pwuff.png') },
    { name: 'Bloatox', primaryType: 'Water', secondaryType: 'Toxic', icon: require('../assets/icons/bloatox.png') },
    { name: 'Barblast', primaryType: 'Water', secondaryType: 'Toxic', icon: require('../assets/icons/barblast.png') },
    { name: 'Swimp', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/swimp.png') },
    { name: 'Snapr', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/snapr.png') },
    { name: 'Garlash', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/garlash.png') },
    { name: 'Hydrini', primaryType: 'Bug', secondaryType: 'Water', icon: require('../assets/icons/hydrini.png') },
    { name: 'Hydrini (Aqua Body)', primaryType: 'Bug', secondaryType: 'Water', icon: require('../assets/icons/hydrini.png'), specialTypeChart: 'AquaBody' },
    { name: 'Bezeldew', primaryType: 'Bug', secondaryType: 'Water', icon: require('../assets/icons/bezeldew.png') },
    { name: 'Bezeldew (Aqua Body)', primaryType: 'Bug', secondaryType: 'Water', icon: require('../assets/icons/bezeldew.png'), specialTypeChart: 'AquaBody' },
    { name: 'Deludrix', primaryType: 'Bug', secondaryType: 'Water', icon: require('../assets/icons/deludrix.png') },
    { name: 'Deludrix (Aqua Body)', primaryType: 'Bug', secondaryType: 'Water', icon: require('../assets/icons/deludrix.png'), specialTypeChart: 'AquaBody' },
    { name: 'Ceratot', primaryType: 'Ancient', secondaryType: 'Plant', icon: require('../assets/icons/ceratot.png') },
    { name: 'Trepodon', primaryType: 'Ancient', secondaryType: 'Plant', icon: require('../assets/icons/trepodon.png') },
    { name: 'Colossotrops', primaryType: 'Ancient', secondaryType: 'Plant', icon: require('../assets/icons/colossotrops.png') },
    { name: 'Cupoink', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/cupoink.png') },
    { name: 'Hoganosh', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/hoganosh.png') },
    { name: 'Mochibi', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/mochibi.png') },
    { name: 'Totemochi', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/totemochi.png') },
    { name: 'Mocho', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/mocho.png') },
    { name: 'Gwurm', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/gwurm.png') },
    { name: 'Gwurm (Hard Candy)', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/gwurm.png'), specialTypeChart: 'HardCandy' },
    { name: 'Odasho', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/odasho.png') },
    { name: 'Odasho (Hard Candy)', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/odasho.png'), specialTypeChart: 'HardCandy' },
    { name: 'Spreezy', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/spreezy.png') },
    { name: 'Spreezy (Hard Candy)', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/spreezy.png'), specialTypeChart: 'HardCandy' },
    { name: 'Pipsee', primaryType: 'Plant', secondaryType: 'Air', icon: require('../assets/icons/pipsee.png') },
    { name: 'Dandylil', primaryType: 'Plant', secondaryType: 'Air', icon: require('../assets/icons/dandylil.png') },
    { name: 'Whippledriff', primaryType: 'Plant', secondaryType: 'Air', icon: require('../assets/icons/whippledriff.png') },
    { name: 'Vari', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/vari.png') },
    { name: 'Cervolen', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/cervolen.png') },
    { name: 'Wendolen', primaryType: 'Spirit', secondaryType: 'None', icon: require('../assets/icons/wendolen.png') },
    { name: 'Kirolen', primaryType: 'Ancient', secondaryType: 'None', icon: require('../assets/icons/kirolen.png') },
    { name: 'Zepholen', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/zepholen.png') },
    { name: 'Venolen', primaryType: 'Toxic', secondaryType: 'None', icon: require('../assets/icons/venolen.png') },
    { name: 'Wresolen', primaryType: 'Brawler', secondaryType: 'None', icon: require('../assets/icons/wresolen.png') },
    { name: 'Buzzolen', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/buzzolen.png') },
    { name: 'Tundrolen', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/tundrolen.png') },
    { name: 'Tundrolen (Insulated)', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/tundrolen.png'), specialTypeChart: 'Insulated' },
    { name: 'Pyrolen', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/pyrolen.png') },
    { name: 'Pyrolen (Fanning Flame)', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/pyrolen.png'), specialTypeChart: 'FanningFlame' },
    { name: 'Hydrolen', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/hydrolen.png') },
    { name: 'Hydrolen (Hydrate)', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/hydrolen.png'), specialTypeChart: 'Hydrate' },
    { name: 'Copling', primaryType: 'Ancient', secondaryType: 'Metal', icon: require('../assets/icons/copling.png') },
    { name: 'Copperage', primaryType: 'Ancient', secondaryType: 'Metal', icon: require('../assets/icons/copperage.png') },
    { name: 'Oxidrake', primaryType: 'Ancient', secondaryType: 'Metal', icon: require('../assets/icons/oxidrake.png') },
    { name: 'Spirivii', primaryType: 'Bug', secondaryType: 'Spirit', icon: require('../assets/icons/spirivii.png') },
    { name: 'Eidohusk', primaryType: 'Bug', secondaryType: 'Spirit', icon: require('../assets/icons/eidohusk.png') },
    { name: 'Harvesect', primaryType: 'Bug', secondaryType: 'Spirit', icon: require('../assets/icons/harvesect.png') },
    { name: 'Snowl', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/snowl.png') },
    { name: 'Stricicle', primaryType: 'Ice', secondaryType: 'Air', icon: require('../assets/icons/stricicle.png') },
    { name: 'Wintrix', primaryType: 'Ice', secondaryType: 'Air', icon: require('../assets/icons/wintrix.png') },
    { name: 'Snagull', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/snagull.png') },
    { name: 'Snagulp', primaryType: 'Air', secondaryType: 'Toxic', icon: require('../assets/icons/snagulp.png') },
    { name: 'Snagoop', primaryType: 'Air', secondaryType: 'Toxic', icon: require('../assets/icons/snagoop.png') },
    { name: 'Makame', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/makame.png') },
    { name: 'Makoro', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/makoro.png') },
    { name: 'Tsukame', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/tsukame.png') },
    { name: 'Cavenish', primaryType: 'Water', secondaryType: 'Plant', icon: require('../assets/icons/cavenish.png') },
    { name: 'Banfino', primaryType: 'Water', secondaryType: 'Plant', icon: require('../assets/icons/banfino.png') },
    { name: 'Kanki', primaryType: 'Water', secondaryType: 'Brawler', icon: require('../assets/icons/kanki.png') },
    { name: 'Kanibo', primaryType: 'Water', secondaryType: 'Brawler', icon: require('../assets/icons/kanibo.png') },
    { name: 'Sharpod', primaryType: 'Water', secondaryType: 'Metal', icon: require('../assets/icons/sharpod.png') },
    { name: 'Samarine', primaryType: 'Water', secondaryType: 'Metal', icon: require('../assets/icons/samarine.png') },
    { name: 'Lumica', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/lumica.png') },
    { name: 'Lumello', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/lumello.png') },
    { name: 'Polypi', primaryType: 'Water', secondaryType: 'Light', icon: require('../assets/icons/polypi.png') },
    { name: 'Laphyra', primaryType: 'Water', secondaryType: 'Light', icon: require('../assets/icons/laphyra.png') },
    { name: 'Jellusa', primaryType: 'Water', secondaryType: 'Light', icon: require('../assets/icons/jellusa.png') },
    { name: 'Taoshi', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/taoshi.png') },
    { name: 'Taoshinu', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/taoshinu.png') },
    { name: 'Kittone', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/kittone.png') },
    { name: 'Lyricat', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/lyricat.png') },
    { name: 'Boonary', primaryType: 'Spirit', secondaryType: 'None', icon: require('../assets/icons/boonary.png') },
    { name: 'Somata', primaryType: 'Water', secondaryType: 'Mind', icon: require('../assets/icons/somata.png') },
    { name: 'Clionae', primaryType: 'Water', secondaryType: 'Mind', icon: require('../assets/icons/clionae.png') },
    { name: 'Cinnaboo', primaryType: 'Spirit', secondaryType: 'None', icon: require('../assets/icons/cinnaboo.png') },
    { name: 'Cinnogre', primaryType: 'Spirit', secondaryType: 'None', icon: require('../assets/icons/cinnogre.png') },
    { name: 'Swirelle', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/swirelle.png') },
    { name: 'Swishy', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/swishy.png') },
    { name: 'Fiscarna', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/fiscarna.png') },
    { name: 'Bunpuff', primaryType: 'Plant', secondaryType: 'Earth', icon: require('../assets/icons/bunpuff.png') },
    { name: 'Bunpuff (Noxious Weeds)', primaryType: 'Plant', secondaryType: 'Earth', icon: require('../assets/icons/bunpuff.png'), specialTypeChart: 'NoxiousWeeds' },
    { name: 'Bunnecki', primaryType: 'Plant', secondaryType: 'Earth', icon: require('../assets/icons/bunnecki.png') },
    { name: 'Bunnecki (Noxious Weeds)', primaryType: 'Plant', secondaryType: 'Earth', icon: require('../assets/icons/bunnecki.png'), specialTypeChart: 'NoxiousWeeds' },
    { name: 'Dractus', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/dractus.png') },
    { name: 'Dractus (Insulated)', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/dractus.png'), specialTypeChart: 'Insulated' },
    { name: 'Frutress', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/frutress.png') },
    { name: 'Frutress (Insulated)', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/frutress.png'), specialTypeChart: 'Insulated' },
    { name: 'Seedrake', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/seedrake.png') },
    { name: 'Seedrake (Insulated)', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/seedrake.png'), specialTypeChart: 'Insulated' },
    { name: 'Volpup', primaryType: 'Electric', secondaryType: 'Toxic', icon: require('../assets/icons/volpup.png') },
    { name: 'Halvantic', primaryType: 'Electric', secondaryType: 'Toxic', icon: require('../assets/icons/halvantic.png') },
    { name: 'Impkin', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/impkin.png') },
    { name: 'Grimmick', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/grimmick.png') },
    { name: 'Imperior', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/imperior.png') },
    { name: 'Mistlebud', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/mistlebud.png') },
    { name: 'Hollibunch', primaryType: 'Plant', secondaryType: 'Light', icon: require('../assets/icons/hollibunch.png') },
    { name: 'Cryocub', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/cryocub.png') },
    { name: 'Barbadger', primaryType: 'Ice', secondaryType: 'Brawler', icon: require('../assets/icons/barbadger.png') },
    { name: 'Kyeggo', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/kyeggo.png') },
    { name: 'Doreggo', primaryType: 'Dark', secondaryType: 'Air', icon: require('../assets/icons/doreggo.png') },
    { name: 'Dreggodyne', primaryType: 'Dark', secondaryType: 'Air', icon: require('../assets/icons/dreggodyne.png') },
    { name: 'Wispur', primaryType: 'Spirit', secondaryType: 'Light', icon: require('../assets/icons/wispur.png') },
    { name: 'Lampurge', primaryType: 'Spirit', secondaryType: 'Light', icon: require('../assets/icons/lampurge.png') },
    { name: 'Charonyx', primaryType: 'Spirit', secondaryType: 'Light', icon: require('../assets/icons/charonyx.png') },
    { name: 'Smoal', primaryType: 'Fire', secondaryType: 'Toxic', icon: require('../assets/icons/smoal.png') },
    { name: 'Charkiln', primaryType: 'Fire', secondaryType: 'Toxic', icon: require('../assets/icons/charkiln.png') },
    { name: 'Billoforge', primaryType: 'Fire', secondaryType: 'Toxic', icon: require('../assets/icons/billoforge.png') },
    { name: 'Sherbot', primaryType: 'Ice', secondaryType: 'Metal', icon: require('../assets/icons/sherbot.png') },
    { name: 'Llamba', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/llamba.png') },
    { name: 'Llamba (Wholesome)', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/llamba.png'), specialTypeChart: 'Wholesome' },
    { name: 'Choochew', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/choochew.png') },
    { name: 'Choochew (Wholesome)', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/choochew.png'), specialTypeChart: 'Wholesome' },
    { name: 'Loomala', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/loomala.png') },
    { name: 'Loomala (Wholesome)', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/loomala.png'), specialTypeChart: 'Wholesome' },
    { name: 'Fentern', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/fentern.png') },
    { name: 'Weaselin', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/weaselin.png') },
    { name: 'Singeel', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/singeel.png') },
    { name: 'Moreel', primaryType: 'Electric', secondaryType: 'Dark', icon: require('../assets/icons/moreel.png') },
    { name: 'Crabushi', primaryType: 'Metal', secondaryType: 'Brawler', icon: require('../assets/icons/crabushi.png') },
    { name: 'Crabtana', primaryType: 'Metal', secondaryType: 'Brawler', icon: require('../assets/icons/crabtana.png') },
    { name: 'Teripod', primaryType: 'Ancient', secondaryType: 'Light', icon: require('../assets/icons/teripod.png') },
    { name: 'Teridescent', primaryType: 'Ancient', secondaryType: 'Light', icon: require('../assets/icons/teridescent.png') },
    { name: 'Skampi', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/skampi.png') },
    { name: 'Prawnsu', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/prawnsu.png') },
    { name: 'Shrimposte', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/shrimposte.png') },
    { name: 'Dokan', primaryType: 'Earth', secondaryType: 'Toxic', icon: require('../assets/icons/dokan.png') },
    { name: 'Dokan (Sponge)', primaryType: 'Earth', secondaryType: 'Toxic', icon: require('../assets/icons/dokan.png'), specialTypeChart: 'Sponge' },
    { name: 'Dokumori', primaryType: 'Earth', secondaryType: 'Toxic', icon: require('../assets/icons/dokumori.png') },
    { name: 'Dokumori (Sponge)', primaryType: 'Earth', secondaryType: 'Toxic', icon: require('../assets/icons/dokumori.png'), specialTypeChart: 'Sponge' },
    { name: 'Mirrami', primaryType: 'Spirit', secondaryType: 'Metal', icon: require('../assets/icons/mirrami.png') },
    { name: 'Mirrami (Reflective)', primaryType: 'Spirit', secondaryType: 'Metal', icon: require('../assets/icons/mirrami.png'), specialTypeChart: 'Reflective' },
    { name: 'Mirraith', primaryType: 'Spirit', secondaryType: 'Metal', icon: require('../assets/icons/mirraith.png') },
    { name: 'Mirraith (Reflective)', primaryType: 'Spirit', secondaryType: 'Metal', icon: require('../assets/icons/mirraith.png'), specialTypeChart: 'Reflective' },
    { name: 'Thawmin', primaryType: 'Ice', secondaryType: 'Mind', icon: require('../assets/icons/thawmin.png') },
    { name: 'Leshent', primaryType: 'Plant', secondaryType: 'Dark', icon: require('../assets/icons/leshent.png') },
    { name: 'Kayute', primaryType: 'Ice', secondaryType: 'Dark', icon: require('../assets/icons/kayute.png') },
    { name: 'Kayappa', primaryType: 'Ice', secondaryType: 'Dark', icon: require('../assets/icons/kayappa.png') },
    { name: 'Kramboss', primaryType: 'Ice', secondaryType: 'Dark', icon: require('../assets/icons/kramboss.png') },
    { name: 'Leopaw', primaryType: 'Light', secondaryType: 'Ice', icon: require('../assets/icons/leopaw.png') },
    { name: 'Leopaw (Prismatic)', primaryType: 'Light', secondaryType: 'Ice', icon: require('../assets/icons/leopaw.png'), specialTypeChart: 'Prismatic' },
    { name: 'Chienta', primaryType: 'Light', secondaryType: 'Ice', icon: require('../assets/icons/chienta.png') },
    { name: 'Chienta (Prismatic)', primaryType: 'Light', secondaryType: 'Ice', icon: require('../assets/icons/chienta.png'), specialTypeChart: 'Prismatic' },
    { name: 'Eyebrella', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/eyebrella.png') },
    { name: 'Eyebrella (Hydro Vortex)', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/eyebrella.png'), specialTypeChart: 'HydroVortex' },
    { name: 'Parasoul', primaryType: 'Water', secondaryType: 'Dark', icon: require('../assets/icons/parasoul.png') },
    { name: 'Parasoul (Hydro Vortex)', primaryType: 'Water', secondaryType: 'Dark', icon: require('../assets/icons/parasoul.png'), specialTypeChart: 'HydroVortex' },
    { name: 'Lissen', primaryType: 'Mind', secondaryType: 'None', icon: require('../assets/icons/lissen.png') },
    { name: 'Biwarned', primaryType: 'Mind', secondaryType: 'Simple', icon: require('../assets/icons/biwarned.png') },
    { name: 'Lantot', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/lantot.png') },
    { name: 'Lantorch', primaryType: 'Fire', secondaryType: 'Light', icon: require('../assets/icons/lantorch.png') },
    { name: 'Milgoo', primaryType: 'Toxic', secondaryType: 'None', icon: require('../assets/icons/milgoo.png') },
    { name: 'Rancidor', primaryType: 'Toxic', secondaryType: 'Ancient', icon: require('../assets/icons/rancidor.png') },
    { name: 'Nautling', primaryType: 'Ancient', secondaryType: 'Simple', icon: require('../assets/icons/nautling.png') },
    { name: 'Nautillect', primaryType: 'Ancient', secondaryType: 'Mind', icon: require('../assets/icons/nautillect.png') },
    { name: 'Naukout', primaryType: 'Ancient', secondaryType: 'Brawler', icon: require('../assets/icons/naukout.png') },
    { name: 'Yutiny', primaryType: 'Ancient', secondaryType: 'Air', icon: require('../assets/icons/yutiny.png') },
    { name: 'Yuteen', primaryType: 'Ancient', secondaryType: 'Air', icon: require('../assets/icons/yuteen.png') },
    { name: 'Yutyphoon', primaryType: 'Ancient', secondaryType: 'Air', icon: require('../assets/icons/yutyphoon.png') },
    { name: 'Venile', primaryType: 'Ancient', secondaryType: 'Toxic', icon: require('../assets/icons/venile.png') },
    { name: 'Verinox', primaryType: 'Ancient', secondaryType: 'Toxic', icon: require('../assets/icons/verinox.png') },
    { name: 'Verinosaur', primaryType: 'Ancient', secondaryType: 'Toxic', icon: require('../assets/icons/verinosaur.png') },
    { name: 'Nymvolt', primaryType: 'Electric', secondaryType: 'Bug', icon: require('../assets/icons/nymvolt.png') },
    { name: 'Ohmbolt', primaryType: 'Electric', secondaryType: 'Bug', icon: require('../assets/icons/ohmbolt.png') },
    { name: 'Plasmoth', primaryType: 'Electric', secondaryType: 'Bug', icon: require('../assets/icons/plasmoth.png') },
    { name: 'Cicalute', primaryType: 'Bug', secondaryType: 'Mind', icon: require('../assets/icons/cicalute.png') },
    { name: 'Violana', primaryType: 'Bug', secondaryType: 'Mind', icon: require('../assets/icons/violana.png') },
    { name: 'Goswing', primaryType: 'Air', secondaryType: 'Simple', icon: require('../assets/icons/goswing.png') },
    { name: 'Goswing (Hydrate)', primaryType: 'Air', secondaryType: 'Simple', icon: require('../assets/icons/goswing.png'), specialTypeChart: 'Hydrate' },
    { name: 'Ganderveil', primaryType: 'Air', secondaryType: 'Simple', icon: require('../assets/icons/ganderveil.png') },
    { name: 'Ganderveil (Hydrate)', primaryType: 'Air', secondaryType: 'Simple', icon: require('../assets/icons/ganderveil.png'), specialTypeChart: 'Hydrate' },
    { name: 'Duskit', primaryType: 'Spirit', secondaryType: 'Mind', icon: require('../assets/icons/duskit.png') },
    { name: 'Ikazune', primaryType: 'Fire', secondaryType: 'Electric', icon: require('../assets/icons/ikazune.png') },
    { name: 'Ikazune (Raging Fire)', primaryType: 'Fire', secondaryType: 'Electric', icon: require('../assets/icons/ikazune.png'), specialTypeChart: 'RagingFire' },
    { name: 'Ikazune (Rechargeable)', primaryType: 'Fire', secondaryType: 'Electric', icon: require('../assets/icons/ikazune.png'), specialTypeChart: 'Rechargeable' },
    { name: 'Protogon', primaryType: 'Metal', secondaryType: 'None', icon: require('../assets/icons/protogon.png') },
    { name: 'Dakuda', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/dakuda.png') },
    { name: 'Dakuda (Hydrate)', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/dakuda.png'), specialTypeChart: 'Hydrate' },
    { name: 'Dakuda-Overcharged', primaryType: 'Water', secondaryType: 'Electric', icon: require('../assets/icons/dakuda-overcharged.png') },
    { name: 'Cosmeleon', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/cosmeleon.png') },
    { name: 'Mutagon', primaryType: 'Mind', secondaryType: 'Brawler', icon: require('../assets/icons/mutagon.png') },
    { name: 'Cephalops', primaryType: 'Water', secondaryType: 'Dark', icon: require('../assets/icons/cephalops.png') },
    { name: 'Elephage', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/elephage.png') },
    { name: 'Phagenaut', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/phagenaut.png') },
    { name: 'Glacadia', primaryType: 'Ice', secondaryType: 'Ancient', icon: require('../assets/icons/glacadia.png') },
    { name: 'Arceros', primaryType: 'Fire', secondaryType: 'Ancient', icon: require('../assets/icons/arceros.png') },
    { name: 'Novadeaus', primaryType: 'Fire', secondaryType: 'Ice', icon: require('../assets/icons/novadeaus.png') },
    { name: 'Morphezu', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/morphezu.png') },
    { name: 'Behemoroth', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/behemoroth.png') },
    { name: 'Leviatross', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/leviatross.png') },
    { name: 'Metronette', primaryType: 'Dark', secondaryType: 'Mind', icon: require('../assets/icons/metronette.png') },
    { name: 'Metronette-Willbound', primaryType: 'Dark', secondaryType: 'Mind', icon: require('../assets/icons/metronette-willbound.png') },
    { name: 'Wabalisc', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/wabalisc.png') },
    { name: 'Nymaurae', primaryType: 'Light', secondaryType: 'Air', icon: require('../assets/icons/nymaurae.png') },
    { name: 'Cosmiore', primaryType: 'Ancient', secondaryType: 'Mind', icon: require('../assets/icons/cosmiore.png') },
    { name: 'Nevermare', primaryType: 'Plant', secondaryType: 'Spirit', icon: require('../assets/icons/nevermare.png') },
    { name: 'Akhalos', primaryType: 'Ice', secondaryType: 'Water', icon: require('../assets/icons/akhalos.png') },
    { name: 'Akhalos (Aqua Body)', primaryType: 'Ice', secondaryType: 'Water', icon: require('../assets/icons/akhalos.png'), specialTypeChart: 'AquaBody' },
    { name: 'Gargolem', primaryType: 'Earth', secondaryType: 'Air', icon: require('../assets/icons/gargolem.png') },
    { name: 'Celesting', primaryType: 'Metal', secondaryType: 'Light', icon: require('../assets/icons/celesting.png') },
    { name: 'Odoyaga', primaryType: 'Mind', secondaryType: 'Air', icon: require('../assets/icons/odoyaga.png') },
    { name: 'Mimask', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/mimask.png') },
];

function TypeCoverageCalculator() {
    const [selectedTypes, setSelectedTypes] = useState(Array(4).fill('None'));
    const [coverageResults, setCoverageResults] = useState({
        superEffective: [],
        normalEffectiveness: [],
        notVeryEffective: [],
        noEffect: []
    });
    const [error, setError] = useState('');
    const [excludeParentheses, setExcludeParentheses] = useState(false); // New state for checkbox

    const handleTypeChange = (index, value) => {
        const updatedTypes = selectedTypes.map((type, i) =>
            i === index ? value : type
        );
        setSelectedTypes(updatedTypes);
    };

    const handleCheckboxChange = (e) => {
        setExcludeParentheses(e.target.checked);
    };

    const calculateCoverage = () => {
        const selectedTypesFiltered = selectedTypes.filter(type => type !== 'None');
        
        if (selectedTypesFiltered.length === 0) {
            setError('Please select at least one type.');
            setCoverageResults({
                superEffective: [],
                normalEffectiveness: [],
                notVeryEffective: [],
                noEffect: []
            });
            return;
        }

        setError('');
        const results = {
            superEffective: [],
            normalEffectiveness: [],
            notVeryEffective: [],
            noEffect: []
        };

        loomiansList.forEach(loomian => {
            if (excludeParentheses && loomian.name.includes('(')) {
                return; // Skip Loomians with parentheses if checkbox is checked
            }

            let combinedEffects = {};

            // Calculate using primary and secondary types
            if (loomian.primaryType !== 'None') {
                const primaryWeaknesses = typeChart[loomian.primaryType] || {};
                for (const [attackType, effectiveness] of Object.entries(primaryWeaknesses)) {
                    combinedEffects[attackType] = effectiveness;
                }
            }

            if (loomian.secondaryType !== 'None') {
                const secondaryWeaknesses = typeChart[loomian.secondaryType] || {};
                for (const [attackType, effectiveness] of Object.entries(secondaryWeaknesses)) {
                    if (combinedEffects[attackType] !== undefined) {
                        combinedEffects[attackType] *= effectiveness;
                    } else {
                        combinedEffects[attackType] = effectiveness;
                    }
                }
            }

            // Adjust with special type chart if available
            if (loomian.specialTypeChart && specialTypeCharts[loomian.specialTypeChart]) {
                const specialWeaknesses = specialTypeCharts[loomian.specialTypeChart];
                for (const [attackType, effectiveness] of Object.entries(specialWeaknesses)) {
                    if (combinedEffects[attackType] !== undefined) {
                        combinedEffects[attackType] *= effectiveness;
                    } else {
                        combinedEffects[attackType] = effectiveness;
                    }
                }
            }

            const isSuperEffective = selectedTypesFiltered.some(type => combinedEffects[type] > 1);
            const isNormalEffectiveness = selectedTypesFiltered.some(type => combinedEffects[type] === 1 || combinedEffects[type] === undefined);
            const isNotVeryEffective = selectedTypesFiltered.some(type => combinedEffects[type] < 1 && combinedEffects[type] > 0);
            const isImmune = selectedTypesFiltered.every(type => combinedEffects[type] === 0);

            if (isImmune) {
                results.noEffect.push(loomian);
            } else if (isSuperEffective) {
                results.superEffective.push(loomian);
            } else if (isNormalEffectiveness) {
                results.normalEffectiveness.push(loomian);
            } else if (isNotVeryEffective) {
                results.notVeryEffective.push(loomian);
            }
        });

        setCoverageResults(results);
    };

    const resetCalculator = () => {
        setSelectedTypes(Array(4).fill('None'));
        setCoverageResults({
            superEffective: [],
            normalEffectiveness: [],
            notVeryEffective: [],
            noEffect: []
        });
        setError('');
        setExcludeParentheses(false); // Reset checkbox
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Type Coverage Calculator</h1>
            {selectedTypes.map((type, index) => (
                <div key={index} className="type-selector">
                    <label htmlFor={`type-${index}`}>Select Type {index + 1}:</label>
                    <select
                        id={`type-${index}`}
                        value={type}
                        onChange={(e) => handleTypeChange(index, e.target.value)}
                    >
                        {allTypes.map((typeOption) => (
                            <option key={typeOption} value={typeOption}>
                                {typeOption}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="exclude-parentheses"
                    checked={excludeParentheses}
                    onChange={handleCheckboxChange}
                    className="checkbox-input"
                />
                <label htmlFor="exclude-parentheses" className="checkbox-label">Exclude Abilities</label>
            </div>
            <button onClick={calculateCoverage}>Calculate Coverage</button>
            <button onClick={resetCalculator}>Reset</button>
            {error && <div className="error">{error}</div>}
            <div className="coverage-results">
                <div className="coverage-category">
                    <h2>Super Effective ({coverageResults.superEffective.length})</h2>
                    {coverageResults.superEffective.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
                <div className="coverage-category">
                    <h2>Normal Effectiveness ({coverageResults.normalEffectiveness.length})</h2>
                    {coverageResults.normalEffectiveness.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
                <div className="coverage-category">
                    <h2>Not Very Effective ({coverageResults.notVeryEffective.length})</h2>
                    {coverageResults.notVeryEffective.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
                <div className="coverage-category">
                    <h2>No Effect ({coverageResults.noEffect.length})</h2>
                    {coverageResults.noEffect.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
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

export default TypeCoverageCalculator;