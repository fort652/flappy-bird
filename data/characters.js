const characters = [
  {
    id: "default",
    name: "Default Bird",
    category: "starter",
    image: "../assets/images/characters/default.png",
    unlocked: true,
    requirement: "Default character",
    stats: {
      speed: 1.0,
      agility: 1.0,
      size: 1.0,
      special: "None",
    },
    description: "A balanced bird with no special abilities.",
  },
  {
    id: "blue",
    name: "Blue Bird",
    category: "starter",
    image: "../assets/images/characters/blue-bird.png",
    unlocked: false,
    requirement: "Complete first game",
    stats: {
      speed: 1.1,
      agility: 1.0,
      size: 0.9,
      special: "Speed Boost",
    },
    description: "Slightly faster than the default bird.",
  },
  {
    id: "purple",
    name: "Purple Bird",
    category: "advanced",
    image: "../assets/images/characters/purple-bird.png",
    unlocked: false,
    requirement: "Score 25 points",
    stats: {
      speed: 1.0,
      agility: 1.2,
      size: 0.8,
      special: "Agility Boost",
    },
    description: "More agile and smaller hitbox.",
  },
  {
    id: "golden",
    name: "Golden Bird",
    category: "legendary",
    image: "../assets/images/characters/tweety.png",
    unlocked: false,
    requirement: "Score 100 points",
    stats: {
      speed: 1.2,
      agility: 1.1,
      size: 0.9,
      special: "Double Points",
    },
    description: "Rare bird that earns double points!",
  },
];

export default characters;
