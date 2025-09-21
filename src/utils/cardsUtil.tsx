import { TCard, TSuit } from '../types';
import { cardToImageMap } from '../assets/cards';

export const generateDeck = (): TCard[] => {
    const deck = [
        ...generateSuits(TSuit.SPADE),
        ...generateSuits(TSuit.CLUB),
        ...generateSuits(TSuit.DIAMOND),
        ...generateSuits(TSuit.HEART),
    ];

    return deck;
}

export const generateSuits = (suit: TSuit): TCard[] => {
    return [
        {
            suit,
            value: 1,
            displayValue: 'A',
            img: cardToImageMap[`${suit}A`]
        },
        {
            suit,
            value: 2,
            displayValue: '2',
            img: cardToImageMap[`${suit}2`]
        },
        {
            suit,
            value: 3,
            displayValue: '3',
            img: cardToImageMap[`${suit}3`]
        },
        {
            suit,
            value: 4,
            displayValue: '4',
            img: cardToImageMap[`${suit}4`]
        },
        {
            suit,
            value: 5,
            displayValue: '5',
            img: cardToImageMap[`${suit}5`]
        },
        {
            suit,
            value: 6,
            displayValue: '6',
            img: cardToImageMap[`${suit}6`]
        },
        {
            suit,
            value: 7,
            displayValue: '7',
            img: cardToImageMap[`${suit}7`]
        },
        {
            suit,
            value: 8,
            displayValue: '8',
            img: cardToImageMap[`${suit}8`]
        },
        {
            suit,
            value: 9,
            displayValue: '9',
            img: cardToImageMap[`${suit}9`]
        },
        {
            suit,
            value: 10,
            displayValue: '10',
            img: cardToImageMap[`${suit}10`]
        },
        {
            suit,
            value: 10,
            displayValue: 'J',
            img: cardToImageMap[`${suit}J`]
        },
        {
            suit,
            value: 10,
            displayValue: 'Q',
            img: cardToImageMap[`${suit}Q`]
        },
        {
            suit,
            value: 10,
            displayValue: 'K',
            img: cardToImageMap[`${suit}K`]
        }
    ];
};
