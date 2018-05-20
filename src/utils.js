export const getRandomCards = (number, cards) => {
  const randomCardsIndex = [];
  for (let n = number; n > 0; n--) {
    const number = Math.floor(Math.random() * cards);
    if (randomCardsIndex.includes(number)) {
      n++;
      continue;
    }
    randomCardsIndex.push(number);
  }
  return randomCardsIndex;
};

export const calculateHabitatScores = habitats => {
  const newHabitats = habitats.map(habitat => {
    const { computerCards, cards, points } = habitat;
    const newPoints = updatePoints(computerCards, points);
    habitat.points = updatePoints(cards, newPoints);
    return habitat;
  });
  return newHabitats;
};

export const calculateFighterRanks = habitats => {
  const newHabitats = habitats.map(habitat => {
    habitat.computerCards = updateRanks(habitat.computerCards);
    habitat.cards = updateRanks(habitat.cards);
    return habitat;
  });
  return newHabitats;
};

const updatePoints = (cards, points) => {
  let newPoints = points;
  cards.forEach(card => {
    if (card.traits.includes("DIRTY")) --newPoints;
    if (card.traits.includes("FANCY")) ++newPoints;
  });
  return newPoints;
};

const updateRanks = cards => {
  return cards.map(card => {
    let newRank = card.rank;
    if (card.traits.includes("BRAVE") && cards.length === 1) newRank += 2;
    if (card.traits.includes("UNRELIABLE") && cards.length < 2)
      newRank = card.rank <= 2 ? 0 : newRank - 2;
    card.rank = newRank;
    return card;
  });
};

export const calculateHabitatWinner = habitats => {
  return habitats.map(habitat => {
    const pointTally = { computer: 0, player: 0 };
    const { computerCards, cards, points, name } = habitat;
    let computerScore = calculateScores(computerCards);
    let playerScore = calculateScores(cards);
    if (computerScore === playerScore) {
      checkHabitatMatch(computerCards, name) && (computerScore += 1);
      checkHabitatMatch(cards, name) && (playerScore += 1);
    }
    if (computerScore === playerScore) return pointTally;
    computerScore > playerScore
      ? (pointTally.computer += points)
      : (pointTally.player += points);
    return pointTally;
  });
};

const calculateScores = fighters => {
  return fighters.reduce((score, fighter) => {
    score += fighter.rank;
    return score;
  }, 0);
};

const checkHabitatMatch = (cards, habitat) => {
  let match = false;
  cards.forEach(card => {
    if (card.habitat === habitat) match = true;
  });
  return match;
};

export const calculateOverAllWinner = scoreTally => {
  return scoreTally.reduce(
    (totalScores, scores) => {
      totalScores.computer += scores.computer;
      totalScores.player += scores.player;
      return totalScores;
    },
    { computer: 0, player: 0 }
  );
};

export const getWinnerMessage = finalScores => {
  if (finalScores.computer > finalScores.player) return "Computer wins!";
  if (finalScores.computer < finalScores.player) return "Player wins!";
  return "Draw!";
};
