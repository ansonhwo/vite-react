export enum TSuit {
    SPADE = 'spade',
    HEART = 'heart',
    DIAMOND = 'diamond',
    CLUB = 'club'
}

export type TCardDisplayValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export type TCard = {
    suit: TSuit;
    value: number;
    displayValue: TCardDisplayValue;
    img: string;
};

export type TPositionedCard = TCard & {
    position: number;
    offsetX: number;
};
