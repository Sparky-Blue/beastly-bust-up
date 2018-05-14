export function getRandomCards(number, cards) {
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
}
