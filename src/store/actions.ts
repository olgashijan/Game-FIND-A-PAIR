export const TYPES = {
  SET_CARDS: 'SET_CARDS',
  OPEN_CARD: 'OPEN_CARD',
  CHANGE_ACTIVE_CARD:'CHANGE_ACTIVE_CARD',
};

export const setCards = () => {
  return {
    type: TYPES.SET_CARDS,
  }
};

export const openCard = (id: number) => {
  return {
    type: TYPES.OPEN_CARD,
    payload: id,
  }
};

export const changeActiveCard = (id: number) => {
  return {
    type: TYPES.CHANGE_ACTIVE_CARD,
    payload: id,
  }
};
