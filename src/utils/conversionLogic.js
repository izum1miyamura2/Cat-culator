// Conversion factors (completely made up and silly)
const CONVERSION_FACTORS = {
  length: {
    meters: 5, // 1 meter = 5 cats laid head-to-tail
    feet: 1.5,
    kilometers: 5000,
    miles: 8000,
    centimeters: 0.05
  },
  weight: {
    kilograms: 0.2, // 1 kg = 0.2 fat cats
    pounds: 0.09,
    grams: 0.0002,
    tons: 200
  },
  time: {
    hours: 2.5, // 1 hour = 2.5 cat naps
    minutes: 0.042,
    days: 60,
    weeks: 420,
    months: 1800
  },
  volume: {
    liters: 6, // 1 liter = 6 bowls of milk
    milliliters: 0.006,
    gallons: 22.7,
    cups: 1.4
  },
  random: {
    bananas: 0.3, // 1 banana = 0.3 cats (because why not?)
    pizzas: 0.8,
    coffee_cups: 0.15,
    books: 0.4,
    socks: 0.1
  }
};

// Funny descriptions for each category
const DESCRIPTIONS = {
  length: [
    "That's like lining up cats head-to-tail! 🐱➡️🐱",
    "Enough cats to reach the moon (if they could fly)! 🌙",
    "A cat parade that would make any neighborhood jealous! 🎉",
    "More cats than you can count while they're moving! 😸",
    "A feline conga line that never ends! 💃"
  ],
  weight: [
    "That's a lot of chonky cats! 😺",
    "Enough fat cats to sink a boat! 🚢",
    "A purr-fect amount of fluff! 🧶",
    "More cat than you can handle! 😅",
    "A weight that would make any scale meow! ⚖️"
  ],
  time: [
    "That's a lot of cat naps! 😴",
    "Enough time for a cat to plan world domination! 👑",
    "A feline siesta marathon! 🌅",
    "More naps than a lazy Sunday! 🛏️",
    "Time enough for a cat to change its mind 100 times! 🤔"
  ],
  volume: {
    liters: [
      "That's a lot of milk bowls! 🥛",
      "Enough milk to satisfy even the thirstiest cat! 😺",
      "A dairy dream come true! 🐄",
      "More milk than a cat convention! 🎪",
      "A liquid feast fit for feline royalty! 👑"
    ],
    milliliters: [
      "A tiny sip for a tiny cat! 🐱",
      "Just a drop in the milk bucket! 💧",
      "A cat-sized portion! 🥄",
      "A mini milk adventure! 🚀",
      "A sip that would make a kitten happy! 😸"
    ],
    gallons: [
      "A swimming pool of milk! 🏊‍♂️",
      "Enough milk to fill a cat-sized hot tub! 🛁",
      "A dairy ocean for cats! 🌊",
      "More milk than a dairy farm! 🐄",
      "A milk tsunami! 🌊"
    ],
    cups: [
      "A perfect cup of cat comfort! ☕",
      "Just the right amount for a cat party! 🎉",
      "A cozy cat-sized serving! 🥤",
      "A milk break for the whole cat family! 👨‍👩‍👧‍👦",
      "A cup that says 'I care about cats'! 💝"
    ]
  },
  random: {
    bananas: [
      "That's bananas! Literally! 🍌",
      "A monkey's dream come true! 🐒",
      "More bananas than a minion convention! 🟡",
      "A potassium party! 🎉",
      "Banana math that makes no sense! 🤪"
    ],
    pizzas: [
      "That's a lot of pizza! 🍕",
      "Enough pizza to feed a cat army! 🐱‍👥",
      "A cheesy cat celebration! 🧀",
      "More pizza than a cat can handle! 😸",
      "A pizza party that would make any cat happy! 🎉"
    ],
    coffee_cups: [
      "That's a lot of caffeine! ☕",
      "Enough coffee to keep cats awake forever! 😺",
      "A java jamboree! 🎊",
      "More coffee than a cat should drink! 😅",
      "A caffeine cat-astrophe! ⚡"
    ],
    books: [
      "That's a lot of reading! 📚",
      "Enough books to build a cat library! 📖",
      "A literary cat adventure! 🧠",
      "More books than a cat can read! 😸",
      "A bookworm's cat paradise! 📚"
    ],
    socks: [
      "That's a lot of socks! 🧦",
      "Enough socks to keep all cat paws warm! 🐾",
      "A sock collection that would make any cat jealous! 😺",
      "More socks than a cat can steal! 😸",
      "A sock party for the ages! 🎉"
    ]
  }
};

// Loading messages
const LOADING_MESSAGES = [
  "Calculating Cat-ness... 🐱",
  "Counting Meowgabytes... 💻",
  "Tuning Catitudes... 🎵",
  "Processing Purr-formance... ⚡",
  "Measuring Feline Physics... 🔬",
  "Converting to Cat Units... 📊",
  "Summoning Cat Spirits... 👻",
  "Brewing Cat Coffee... ☕",
  "Warming Up Cat Engines... 🔥",
  "Preparing Cat-tastic Results... ✨"
];

// Conversion function
export const convertToCatUnits = (value, category, unit) => {
  const factor = CONVERSION_FACTORS[category]?.[unit];
  if (!factor) {
    return {
      result: "Error: Invalid conversion",
      description: "Even cats can't convert that! 😿",
      factor: 0
    };
  }

  const result = value * factor;
  
  // Get random description
  let description;
  if (category === 'volume') {
    description = DESCRIPTIONS.volume[unit]?.[Math.floor(Math.random() * DESCRIPTIONS.volume[unit].length)] || 
                  "That's a lot of liquid cats! 💧";
  } else if (category === 'random') {
    description = DESCRIPTIONS.random[unit]?.[Math.floor(Math.random() * DESCRIPTIONS.random[unit].length)] || 
                  "That's totally random! 🎲";
  } else {
    description = DESCRIPTIONS[category]?.[Math.floor(Math.random() * DESCRIPTIONS[category].length)] || 
                  "That's a lot of cats! 😸";
  }

  return {
    result: result.toFixed(2),
    description,
    factor,
    originalValue: value,
    originalUnit: unit,
    category
  };
};

// Get available units for a category
export const getAvailableUnits = (category) => {
  return Object.keys(CONVERSION_FACTORS[category] || {});
};

// Get random loading message
export const getRandomLoadingMessage = () => {
  return LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
};

// Get category info
export const getCategoryInfo = (category) => {
  const categoryNames = {
    length: "Length",
    weight: "Weight", 
    time: "Time",
    volume: "Volume",
    random: "Random"
  };

  const categoryIcons = {
    length: "📏",
    weight: "⚖️",
    time: "⏰",
    volume: "🥛",
    random: "🍌"
  };

  return {
    name: categoryNames[category] || "Unknown",
    icon: categoryIcons[category] || "❓",
    units: getAvailableUnits(category)
  };
};

// Get all categories
export const getAllCategories = () => {
  return Object.keys(CONVERSION_FACTORS);
}; 