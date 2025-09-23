import { useCallback, useEffect, useState } from 'react';
import { generateDeck } from '../../utils/cardsUtil';
import { shuffleList } from '../../utils/shuffleUtil';
import { TCard } from '../../types';

import { CardCarousel } from './CardCarousel';

export const CardContainer = () => {
    // 1) Able to change properties on existing cards

    const [deck, setDeck] = useState<TCard[]>([]);
    const [hand, setHand] = useState<TCard[]>([]);
    
    useEffect(() => setDeck(generateDeck()), []);

    const handleShuffle = useCallback(() => {
        const newCards = shuffleList(deck.slice());
        setDeck(newCards);
    }, [deck]);

    const handleDraw = useCallback(() => {
        setHand([...hand, deck[0]]);
        setDeck(deck.slice(1));
    }, [hand, deck]);

    const handleReset = useCallback(() => {
        setHand([]);
        setDeck(generateDeck());
    }, []);

    return (
        <div id="card-container">
            <div className="card-controls">
                <button type="button" onClick={handleShuffle}>
                    Shuffle
                </button>
                <button type="button" onClick={handleDraw}>
                    Draw
                </button>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </div>
            <CardCarousel description={'Hand'} cards={hand} />
            <CardCarousel description={'Deck'} cards={deck} />
        </div>
    );
};
