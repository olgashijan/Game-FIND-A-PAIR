import {SoreCardsType} from "./interface";
import {TYPES} from "./actions";
import {changeActiveCards, createCardList} from "./helper";

const initialState: SoreCardsType = {
  CardList: [],
  ActiveCards: []
}

export default function reducer(state: SoreCardsType = initialState, action: { type: string; payload: any; }) {
  switch (action.type) {
    case TYPES.SET_CARDS: {
      return {
        ...state,
        CardList: createCardList()
      };
    }

    case TYPES.OPEN_CARD: {
      return {
        ...state,
        CardList: state.CardList.map((item) => (item.id === action.payload ? {...item, show: true} : item))
      };
    }

    case TYPES.CHANGE_ACTIVE_CARD: {
      return {
        ...state,
        ...changeActiveCards(state.CardList, state.ActiveCards, action.payload),
      };
    }
    default:
      return state;
  }
}

