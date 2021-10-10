export type SoreCardsType = {
  CardList: CardType[];
  ActiveCards:CardType[];
}

export class CardType {
  id: number;
  name: number;
  color: string;
  show: boolean;

  constructor(id: number, name: number, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.show = false;
  }
}
