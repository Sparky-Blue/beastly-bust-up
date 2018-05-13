export function getRandomCards(number, cards) {
  const randomCardsIndex = [];
  for (let n = number; n > 0; n--) {
    randomCardsIndex.push(Math.floor(Math.random() * cards));
  }
  return randomCardsIndex;
}
