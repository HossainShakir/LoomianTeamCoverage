// Lookups over data.js shaped for the UI components.
import { loomians, moves, items, itemInfo, abilities } from './data';

const iconContext = require.context('../assets/icons', false, /\.png$/);
const iconFiles = new Set(iconContext.keys());

// Shown for Loomians/items that don't have an icon file yet. Sized like the real icons
// (Loomians 53x40, items 32x32) so it lays out the same wherever CSS doesn't set a size.
function placeholderIcon(width, height) {
    const r = Math.min(width, height) * 0.3;
    const cx = width / 2;
    const cy = height / 2;
    return (
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">` +
            `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#bbb"/>` +
            `<text x="${cx}" y="${cy + r * 0.45}" font-size="${r * 1.3}" font-family="sans-serif" text-anchor="middle" fill="#fff">?</text></svg>`
        )
    );
}
const LOOMIAN_PLACEHOLDER = placeholderIcon(53, 40);
const ITEM_PLACEHOLDER = placeholderIcon(32, 32);

export function getIcon(fileName, placeholder = LOOMIAN_PLACEHOLDER) {
    const path = `./${fileName}.png`;
    return iconFiles.has(path) ? iconContext(path) : placeholder;
}

function toListEntry(key, l) {
    const [primaryType, secondaryType = 'None'] = l.types;
    const b = l.baseStats;
    return {
        key,
        name: l.name,
        types: l.types,
        primaryType,
        secondaryType,
        tier: l.tier,
        icon: getIcon(l.icon || key),
        moves: l.movepool || [],
        stats: {
            hp: b.hp,
            energy: b.energy,
            attack: b.attack,
            defense: b.defense,
            rattack: b.attackR,
            rdefense: b.defenseR,
            speed: b.speed,
        },
        gender: l.gender || [],
        abilities: l.abilities || (l.ability ? [l.ability] : []),
        secretAbility: l.sAbility ? l.sAbility[0] : undefined,
        requiredItem: l.item,
        specialTypeChart: l.specialTypeChart,
    };
}

// Every Loomian the app can use, in data.js order.
export const loomianList = Object.entries(loomians).map(([key, l]) => toListEntry(key, l));

// Type-coverage rows: each Loomian plus one "Name (Ability)" row per ability that changes its type chart.
export const typeCoverageList = loomianList.flatMap((l) => {
    const variants = loomians[l.key].typeVariants || [];
    return [
        l,
        ...variants.map((v) => ({ ...l, name: `${l.name} (${v.ability})`, specialTypeChart: v.typeChart })),
    ];
});

const loomianByName = new Map();
for (const l of loomianList) {
    loomianByName.set(l.name.toLowerCase(), l);
    for (const old of loomians[l.key].formerNames || []) loomianByName.set(old.toLowerCase(), l);
}

// Accepts current names and names used before a rename (e.g. in saved teams).
export function getLoomian(name) {
    return name ? loomianByName.get(name.toLowerCase()) : undefined;
}

const moveByName = new Map(Object.values(moves).map((m) => [m.name.toLowerCase(), m]));

export function getMove(name) {
    return name ? moveByName.get(name.toLowerCase()) : undefined;
}

export const moveNames = Object.values(moves)
    .map((m) => m.name)
    .filter((n) => n !== '(No Move)');

// Every ability named anywhere in the data, for free-text suggestions.
export const abilityNames = [
    ...new Set([
        ...abilities,
        ...Object.values(loomians).flatMap((l) => [...(l.abilities || []), ...(l.sAbility || []), ...(l.ability ? [l.ability] : [])]),
    ]),
].sort();

// Turns typed text into the official spelling when it matches a known name, otherwise keeps it as typed.
export function canonicalName(text, names) {
    const match = names.find((n) => n.toLowerCase() === text.trim().toLowerCase());
    return match || text;
}

// Items for the item picker: everything with details, plus any battle item missing from itemInfo.
export const itemList = [...new Set([...Object.keys(itemInfo), ...items])].map((name) => ({
    name,
    description: itemInfo[name]?.description || '',
    icon: getIcon(itemInfo[name]?.icon || name.toLowerCase().replace(/[^a-z0-9]/g, ''), ITEM_PLACEHOLDER),
}));

const itemByName = new Map(itemList.map((i) => [i.name, i]));

export function getItem(name) {
    return name ? itemByName.get(name) : undefined;
}
