// src/typeChart.js
const typeChart = {
    Fire: { Fire: 0.5, Water: 2, Plant: 0.5, Light: 1, Dark: 1, Ice: 0.5, Electric: 1, Air: 2, Bug: 0.5, Earth: 2, Toxic: 1, Metal: 0.5, Ancient: 1, Spirit: 1, Brawler: 1, Mind: 1, Simple: 1 },
    Water: { Fire: 0.5, Water: 0.5, Plant: 2, Light: 1, Dark: 1, Ice: 0.5, Electric: 2, Air: 1, Bug: 1, Earth: 1, Toxic: 2, Metal: 0.5, Ancient: 1, Spirit: 1, Brawler: 1, Mind: 1, Simple: 1  },
    Plant: { Fire: 2, Water: 0.5, Plant: 0.5, Light: 0, Dark: 2, Ice: 2, Electric: 0.5, Air: 1, Bug: 2, Earth: 0.5, Toxic: 2, Metal: 1, Ancient: 1, Spirit: 1, Brawler: 1, Mind: 1, Simple: 1  },
    Light: { Fire: 0.5, Water: 1, Plant: 1, Light: 0.5, Dark: 2, Ice: 1, Electric: 1, Air: 1, Bug: 1, Earth: 1, Toxic: 1, Metal: 2, Ancient: 0.5, Spirit: 0, Brawler: 1, Mind: 1, Simple: 1 },
    Dark: { Fire: 2, Water: 1, Plant: 1, Light: 2, Dark: 0.5, Ice: 1, Electric: 1, Air: 1, Bug: 2, Earth: 1, Toxic: 1, Metal: 1, Ancient: 1, Spirit: 0.5, Brawler: 1, Mind: 0.5, Simple: 1  },
    Ice: { Fire: 2, Water: 1, Plant: 1, Light: 1, Dark: 1, Ice: 0.5, Electric: 1, Air: 0.5, Bug: 1, Earth: 1, Toxic: 1, Metal: 2, Ancient: 1, Spirit: 1, Brawler: 2, Mind: 1, Simple: 0.5  },
    Electric: { Fire: 1, Water: 2, Plant: 1, Light: 1, Dark: 1, Ice: 1, Electric: 0.5, Air: 0.5, Bug: 1, Earth: 2, Toxic: 1, Metal: 0.5, Ancient: 1, Spirit: 1, Brawler: 1, Mind: 1, Simple: 1 },
    Air: { Fire: 1, Water: 1, Plant: 1, Light: 1, Dark: 1, Ice: 2, Electric: 2, Air: 1, Bug: 0.5, Earth: 0, Toxic: 1, Metal: 1, Ancient: 1, Spirit: 1, Brawler: 0.5, Mind: 1, Simple: 1  },
    Bug: { Fire: 1, Water: 1, Plant: 0.5, Light: 1, Dark: 0.5, Ice: 2, Electric: 1, Air: 2, Bug: 0.5, Earth: 0.5, Toxic: 1, Metal: 1, Ancient: 1, Spirit: 1, Brawler: 2, Mind: 1, Simple: 1  },
    Earth: { Fire: 1, Water: 2, Plant: 2, Light: 1, Dark: 1, Ice: 2, Electric: 0, Air: 1, Bug: 1, Earth: 1, Toxic: 0.5, Metal: 1, Ancient: 1, Spirit: 1, Brawler: 1, Mind: 1, Simple: 1 },
    Toxic: { Fire: 1, Water: 1, Plant: 0.5, Light: 1, Dark: 1, Ice: 1, Electric: 1, Air: 1, Bug: 1, Earth: 2, Toxic: 0.5, Metal: 1, Ancient: 1, Spirit: 1, Brawler: 0.5, Mind: 2, Simple: 1  },
    Metal: { Fire: 2, Water: 1, Plant: 1, Light: 1, Dark: 1, Ice: 0.5, Electric: 2, Air: 0.5, Bug: 0.5, Earth: 2, Toxic: 1, Metal: 0.5, Ancient: 0.5, Spirit: 1, Brawler: 2, Mind: 0.5, Simple: 0.5  },
    Ancient: { Fire: 0.5, Water: 0.5, Plant: 0.5, Light: 2, Dark: 1, Ice: 1, Electric: 0.5, Air: 1, Bug: 1, Earth: 1, Toxic: 1, Metal: 2, Ancient: 2, Spirit: 0.5, Brawler: 1, Mind: 1, Simple: 1  },
    Spirit: { Fire: 1, Water: 1, Plant: 1, Light: 2, Dark: 0.5, Ice: 1, Electric: 0.5, Air: 1, Bug: 1, Earth: 1, Toxic: 0.5, Metal: 1, Ancient: 2, Spirit: 2, Brawler: 0, Mind: 1, Simple: 0.5  },
    Brawler: { Fire: 1, Water: 1, Plant: 1, Light: 1, Dark: 1, Ice: 0.5, Electric: 1, Air: 2, Bug: 0.5, Earth: 1, Toxic: 2, Metal: 1, Ancient: 1, Spirit: 2, Brawler: 1, Mind: 2, Simple: 1 },
    Mind: { Fire: 1, Water: 1, Plant: 1, Light: 0.5, Dark: 2, Ice: 1, Electric: 1, Air: 1, Bug: 2, Earth: 1, Toxic: 1, Metal: 1, Ancient: 1, Spirit: 2, Brawler: 0.5, Mind: 0.5, Simple: 1  },
    Simple: { Fire: 1, Water: 1, Plant: 1, Light: 1, Dark: 1, Ice: 1, Electric: 1, Air: 1, Bug: 1, Earth: 1, Toxic: 1, Metal: 1, Ancient: 1, Spirit: 1, Brawler: 2, Mind: 2, Simple: 1  },
    // Add the rest of the types here
};

export default typeChart;
