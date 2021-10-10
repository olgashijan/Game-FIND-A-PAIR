import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setCards} from "../store/actions";
import {SoreCardsType} from "../store/interface";
import Card from "./Card";
import {COUNT_LINE, SIZE_CARDS} from "../store/constsns";

function CardList() {
  const dispatch = useDispatch()
  const cards = useSelector((state: SoreCardsType) => state.CardList)

  useEffect(() => {
    dispatch(setCards())
  }, [dispatch])

  return (
    <div className="cards__list" style={{'width': SIZE_CARDS*COUNT_LINE}}>
      {cards?.map((card, i) => (
          <Card key={`card_${i}`} item={card}/>
        )
      )}
    </div>
  );
}

export default CardList

