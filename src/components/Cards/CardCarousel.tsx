import { useMemo } from 'react';

import { Card } from './Card';

import { TCard, TPositionedCard } from '../../types';

export type CardCarouselProps = {
    cards: TCard[];
    description?: string;
}

export const CardCarousel = ({ cards, description }: CardCarouselProps) => {
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
        <div className="card-carousel">
            { description && <span className="card-carousel-description">{description}</span> }
            <div className="card-scroll-wrapper">
                <div className="card-scroll">
                    {
                        positionedCards.map(card => (
                            <Card key={card.offsetX} card={card}  />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

