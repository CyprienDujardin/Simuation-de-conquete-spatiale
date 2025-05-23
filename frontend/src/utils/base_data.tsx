import { SpaceData } from "./model.tsx";

export const solar_system: SpaceData = {
  planets: {
    mercury: {
      maxDistance: 467,
      minDistance: 307,
      size: 1,
      velocity: 0.158,
      revolution: 0.0016,
      x: 0,
      y: 0,
      z: 0,
      color: "#A85BA8",
      owners: [],
      resources: 0,
    },
    venus: {
      maxDistance: 728,
      minDistance: 718,
      size: 2.48,
      velocity: 0.11666666666666665,
      revolution: 0.00005,
      x: 0,
      y: 0,
      z: 0,
      color: "#EE9A14",
      owners: [],
      resources: 0,
    },
    earth: {
      maxDistance: 1017,
      minDistance: 983,
      size: 2.61,
      velocity: 0.09933333333333333,
      revolution: 0.01,
      x: 0,
      y: 0,
      z: 0,
      color: "#1DC1E4",
      satellites: ["moon"],
      owners: [],
      resources: 0,
    },
    mars: {
      maxDistance: 1666,
      minDistance: 1382,
      size: 1.39,
      velocity: 0.08033333333333333,
      revolution: 0.0035,
      x: 0,
      y: 0,
      z: 0,
      color: "#DE7630",
      owners: [],
      resources: 0,
    },
    jupiter: {
      maxDistance: 5455,
      minDistance: 4951,
      size: 28.7,
      velocity: 0.043666666666666666,
      revolution: 0.007,
      x: 0,
      y: 0,
      z: 0,
      color: "#DA8B56",
      satellites: ["io", "europa", "ganymede", "callisto"],
      owners: [],
      resources: 0,
    },

    saturn: {
      maxDistance: 10044,
      minDistance: 9014,
      size: 23.87,
      velocity: 0.032,
      revolution: 0.006,
      x: 0,
      y: 0,
      z: 0,
      color: "#EEE452",
      ring: true,
      ringRotation: Math.PI / 4,
      ringTextureRotation: Math.PI / 2,
      ringDistance: 71.603 / 3 + 24,
      ringSize: 10,
      satellites: ["titan"],
      owners: [],
      resources: 0,
    },
    uranus: {
      maxDistance: 20070,
      minDistance: 18310,
      size: 10.4,
      velocity: 0.02266666666666667,
      revolution: 0.02,
      x: 0,
      y: 0,
      z: 0,
      color: "#87CEFA",
      ring: true,
      ringRotation: Math.PI / 2,
      ringDistance: 31.1866 / 3 + 10,
      ringSize: 1,
      satellites: ["triton"],
      owners: [],
      resources: 0,
    },
    neptune: {
      maxDistance: 30360,
      minDistance: 29160,
      size: 10.09,
      velocity: 0.018,
      revolution: 0.015,
      x: 0,
      y: 0,
      z: 0,
      color: "#3f54ba",
      owners: [],
      resources: 0,
    },
    pluto: {
      maxDistance: 49330,
      minDistance: 29730,
      size: 0.49,
      velocity: 0.00027666666666666665,
      revolution: 0.015,
      x: 0,
      y: 0,
      z: 0,
      color: "#DE420B",
      owners: [],
      resources: 0,
    },
  },
  satellites: {
    io: {
      size: 0.7466,
      distance: 20,
      velocity: 0,
      revolution: 0,
      x: 0,
      y: 0,
      z: 0,
      parent: "jupiter",
      owners: [],
      resources: 0,
    },
    europa: {
      size: 0.6397,
      distance: 35,
      velocity: 0,
      revolution: 0.002,
      x: 0,
      y: 0,
      z: 0,
      parent: "jupiter",
      owners: [],
      resources: 0,
    },
    ganymede: {
      size: 1.0796,
      distance: 70,
      velocity: 0,
      revolution: 0.002,
      x: 0,
      y: 0,
      z: 0,
      parent: "jupiter",
      owners: [],
      resources: 0,
    },
    callisto: {
      size: 0.9879,
      distance: 90,
      velocity: 0,
      revolution: 0.002,
      x: 0,
      y: 0,
      z: 0,
      parent: "jupiter",
      owners: [],
      resources: 0,
    },
    moon: {
      size: 1.3,
      distance: 20,
      velocity: 0,
      revolution: 0.002,
      x: 0,
      y: 0,
      z: 0,
      parent: "earth",
      owners: [],
      resources: 0,
    },
    triton: {
      size: 0.49,
      distance: 35,
      velocity: 0,
      revolution: 0.002,
      x: 0,
      y: 0,
      z: 0,
      parent: "uranus",
      owners: [],
      resources: 0,
    },
    titan: {
      size: 1,
      distance: 85,
      velocity: 0,
      revolution: 0.002,
      x: 0,
      y: 0,
      z: 0,
      parent: "saturn",
      owners: [],
      resources: 0,
    },
  },
  rockets: {},
  countries: {},
};
