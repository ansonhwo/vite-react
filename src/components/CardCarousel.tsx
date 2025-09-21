import { useMemo } from 'react';

import { Card } from './Card';

import { TCard, TPositionedCard } from '../types';

export type CardCarouselProps = {
    cards: TCard[];
}

export const CardCarousel = ({ cards }: CardCarouselProps) => {
    const positionedCards: TPositionedCard[] = useMemo(() => {
        return cards.map((card, index) => {
            const position = (index / (cards.length - 1)) * 0.8 - 0.4;
            return {
                ...card,
                index,
                offsetX: position * 5,
            }
        });
    }, [cards]);

    return (
        <div id="card-carousel">
            {
                positionedCards.map(card => (
                    <Card card={card}  />
                ))
            }
        </div>
    );
};

