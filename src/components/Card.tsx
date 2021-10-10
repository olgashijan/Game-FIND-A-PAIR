import React from 'react';
import {useDispatch} from "react-redux";
import {changeActiveCard, openCard} from "../store/actions";
import {DISTANCE_CARD, SIZE_CARD} from "../store/constsns";
import {CardType} from "../store/interface";

interface CounterProps {
  item: CardType;
}

function Card({item}: CounterProps) {
  const dispatch = useDispatch()

  function onClickCard(id: number): void {
    dispatch(openCard(id))
    setTimeout(() => {
      dispatch(changeActiveCard(id))
    }, 1000)
  }

  return (
    <div>
      <div className='card' style={{'width': SIZE_CARD, 'height': SIZE_CARD, 'margin': DISTANCE_CARD}}>
        <div className={'card__front ' + (item.show ? 'show' : '')} onClick={() => onClickCard(item.id)}/>
        <div className={'card__back ' + (item.show ? 'show' : '')}
             style={{'backgroundColor': item.color}}>{item.name}</div>
      </div>
    </div>
  );
}

export default Card;
