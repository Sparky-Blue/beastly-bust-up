export function getRandomCards(number, cards) {
  const randomCardsIndex = [];
  for (let n = number; n > 0; n--) {
    randomCardsIndex.push(Math.round(Math.random() * cards));
  }
  return randomCardsIndex;
}
