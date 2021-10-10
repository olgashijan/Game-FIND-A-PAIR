import {CardType, SoreCardsType} from "./interface";
import {colors, COUNT_CARD} from "./constsns";

export const createCardList = (): CardType[] => {
  const arr = []
  for (let i = 1; i <= COUNT_CARD * 2; i++) {
    if (i > COUNT_CARD) {
      arr.push(new CardType(i, i - COUNT_CARD, colors[i - (COUNT_CARD + 1)]))
    } else {
      arr.push(new CardType(i, i, colors[i - 1]))
    }
  }
  return getRandomCards(arr)
}

export const getRandomCards = (cards: CardType[]): CardType[] => {
  const copyCards: CardType[] = [...cards]
  const randomCards: CardType[] = []
  for (let i = 0; i < cards.length; i++) {
    const num = Math.floor(Math.random() * copyCards.length)
    randomCards.push(copyCards.splice(num, 1)[0])
  }
  return randomCards
}

export const changeActiveCards = (cards: CardType[], active: CardType[], id: number): SoreCardsType => {
  let card: CardType = cards.filter((e: CardType) => e.id === id)[0]
  if (!active.length) {
    active = [card]
  } else {
    if (active[0].name !== card.name) {
      cards = cards.map((card) => {
        return card.id === id || active[0].id === card.id ? {...card, show: false} : card
      })
    }
    active = []
  }
  return {CardList: cards, ActiveCards: active}
}
