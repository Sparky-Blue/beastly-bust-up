const FIERCE = "FIERCE",
  HEFTY = "HEFTY",
  QUICK = "QUICK",
  BRAVE = "BRAVE",
  UNRELIABLE = "UNRELIABLE",
  TOUGH = "TOUGH",
  AGILE = "AGILE",
  AQUATIC = "AQUATIC",
  HORNS = "HORNS",
  FLY = "FLY",
  FANCY = "FANCY",
  DIRTY = "DIRTY";

const fighters = [
  {
    name: "Boar",
    habitat: "forest",
    traits: [FIERCE],
    // traits: { FIERCE: "GORE" },
    rank: 3
  },
  {
    name: "Camel",
    habitat: "dessert",
    traits: [QUICK.TOUGH],
    // traits: { QUICK: "HURRY", TOUGH: "STUBBORN" },
    rank: 3
  },
  {
    name: "Cat",
    habitat: "nigth",
    traits: [AGILE, UNRELIABLE],
    // traits: { AGILE: "WRIGGLE", UNRELIABLE: "SELFISH" },
    rank: 2
  },
  {
    name: "Chameleon",
    habitat: "rainforest",
    traits: [FANCY],
    // traits: { FANCY: "GAUDY" },
    rank: 1
  },
  {
    name: "Cheetah",
    habitat: "savanna",
    traits: [QUICK, AGILE],
    // traits: { QUICK: "SPRINT", AGILE: "SPRING" },
    rank: 4
  },
  {
    name: "Chicken",
    habitat: "field",
    traits: [AGILE, UNRELIABLE],
    // traits: { AGILE: "FLAP", UNRELIABLE: "SQUAWK" },
    rank: 1
  },
  {
    name: "Chimpanzee",
    habitat: "rainforest",
    traits: [AGILE],
    // traits: { AGILE: "CLIMB" },
    rank: 3
  },
  {
    name: "Cobra",
    habitat: "forest",
    traits: [FIERCE, HORNS],
    // traits: { FIERCE: "STRIKE", HORNS: "VENOM" },
    rank: 4
  },
  {
    name: "Cow",
    habitat: "field",
    traits: [HEFTY],
    // traits: { HEFTY: "BARGE" },
    rank: 1
  },
  {
    name: "Crab",
    habitat: "beach",
    traits: [TOUGH, UNRELIABLE],
    // traits: { TOUGH: "SHELL", UNRELIABLE: "HIDE" },
    rank: 2
  },
  {
    name: "Crocodile",
    habitat: "swamp",
    traits: [FIERCE, TOUGH, AQUATIC],
    // traits: { FIERCE: "SNAP", TOUGH: "LEATHERY", AQUATIC: "FLOAT" },
    rank: 5
  },
  {
    name: "Dog",
    habitat: "urban street",
    traits: [BRAVE],
    // traits: { BRAVE: "LOYAL" },
    rank: 3
  },
  {
    name: "Dolphin",
    habitat: "sea",
    traits: [QUICK, BRAVE, AQUATIC],
    // traits: { QUICK: "RAPID", BRAVE: "BOLD", AQUATIC: "SWIM" },
    rank: 3
  },
  // {
  //   name: "Eagle",
  //   habitat: "mountains",
  //   traits: [FIERCE],
  //   // traits: { FIERCE: "TALONS" },
  //   rank: 4
  // },
  {
    name: "Elephant",
    habitat: "savanna",
    traits: [HEFTY, HORNS],
    // traits: { HEFTY: "SQUASH", HORNS: "TUSKS" },
    rank: 4
  }
  // {
  //   name: "Falcon",
  //   habitat: "hills",
  //   traits: [QUICK, FLY],
  //   // traits: { QUICK: "DIVE", FLY: "FLY" },
  //   rank: 3
  // },
  // {
  //   name: "GIRAFFE",
  //   habitat: "savanna",
  //   traits: [QUICK, HEFTY],
  //   // traits: { QUICK: "RUN", HEFTY: "SCATTER" },
  //   rank: 2
  // },
  // {
  //   name: "GOAT",
  //   habitat: "foothills",
  //   traits: [BRAVE, HORNS],
  //   // traits: { BRAVE: "BUTT", HORNS: "HORNS" },
  //   rank: 2
  // },
  // {
  //   name: "GORILLA",
  //   habitat: "rainforest",
  //   traits: [AGILE, TOUGH],
  //   // traits: { AGILE: "CLIMB", TOUGH: "GRITTY" },
  //   rank: 5
  // }
  // ,
  // {
  //   name: "GRIZZLY",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "caves",
  //   traits: [FIERCE, TOUGH],
  //   // traits: { FIERCE: "BITE", TOUGH: "SHAGGY" },
  //   rank: 5
  // },
  // {
  //   name: "HIPPO",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "river",
  //   traits: { HEFTY: "WALLOP", BRAVE: "FURIOUS" },
  //   // traits: { HEFTY: "WALLOP", BRAVE: "FURIOUS" },
  //   rank: 4
  // },
  // {
  //   name: "HORSE",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "field",
  //   traits: { QUICK: "GALLOP", UNRELIABLE: "AIMLESS" },
  //   // traits: { QUICK: "GALLOP", UNRELIABLE: "AIMLESS" },
  //   rank: 3
  // },
  // {
  //   name: "HYENA",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "savanna",
  //   traits: { DIRTY: "LAUGH" },
  //   // traits: { DIRTY: "LAUGH" },
  //   rank: 2
  // },
  // {
  //   name: "JELLYFISH",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "under the sea",
  //   traits: { BRAVE: "BRAINLESS", AQUATIC: "FLOAT" },
  //   // traits: { BRAVE: "BRAINLESS", AQUATIC: "FLOAT" },
  //   rank: 1
  // },
  // {
  //   name: "KANGAROO",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "savanna",
  //   traits: { QUICK: "BOUND", AGILE: "SPRING" },
  //   // traits: { QUICK: "BOUND", AGILE: "SPRING" },
  //   rank: 2
  // },
  // {
  //   name: "LION",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "savanna",
  //   traits: { FIERCE: "JAWS", BRAVE: "LIONHEART" },
  //   // traits: { FIERCE: "JAWS", BRAVE: "LIONHEART" },
  //   rank: 5
  // },
  // {
  //   name: "MACAW",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "rainforest",
  //   traits: { FLY: "FLY", FANCY: "PLUMAGE" },
  //   // traits: { FLY: "FLY", FANCY: "PLUMAGE" },
  //   rank: 1
  // },
  // {
  //   name: "MAGPIE",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "field",
  //   traits: { AGILE: "FLAP", FLY: "FLY", DIRTY: "THIEF" },
  //   // traits: { AGILE: "FLAP", FLY: "FLY", DIRTY: "THIEF" },
  //   rank: 1
  // },
  // {
  //   name: "MANDRILL",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "savanna",
  //   traits: { FANCY: "BLUE BUM" },
  //   // traits: { FANCY: "BLUE BUM" },
  //   rank: 2
  // },
  // {
  //   name: "MONGOOSE",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "forest",
  //   traits: { BRAVE: "PLUCKY", AGILE: "JUMP" },
  //   // traits: { BRAVE: "PLUCKY", AGILE: "JUMP" },
  //   rank: 2
  // },
  // {
  //   name: "MOUSE",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "night",
  //   traits: { AGILE: "SCAMPER" },
  //   // traits: { AGILE: "SCAMPER" },
  //   rank: 1
  // },
  // {
  //   name: "OCTOPUS",
  //   img:
  //     "http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg",
  //   habitat: "under the sea",
  //   traits: [AGILE, AQUATIC],
  //   // traits: { AGILE: "TENTACLES", AQUATIC: "SWOOSH" },
  //   rank: 3
  // }
  // ,
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 },
  // { name: "", img: 'http://2.bp.blogspot.com/-bGM3srfaPkQ/T_c0EpnxrcI/AAAAAAAAAns/1Zbg69NK0Q8/s1600/octopus1.jpg', habitat: "", traits: {:''}, rank: 1 }
];

export default fighters;
