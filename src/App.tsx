import { useCallback, useEffect, useState } from 'react';
import { generateDeck } from './utils/cardsUtil';
import { shuffleList } from './utils/shuffleUtil';
import { TCard } from './types';

import { CardCarousel } from './components/CardCarousel';
import './App.css';

// 1) Display all cards in the deck
// 2) Shuffle cards on demand
// 3) Be able to hover over existing cards
// 4) Able to change properties on existing cards

function App() {
    const [cards, setCards] = useState<TCard[]>([]);

    useEffect(() => {
        setCards(generateDeck());
    }, []);

    const handleShuffle = useCallback(() => {
        const newCards = shuffleList(cards.slice());
        setCards(newCards);
    }, [cards]);

    return (
        <>
            <h1>Playing Cards</h1>
            <button onClick={handleShuffle}>
                Shuffle
            </button>
            <CardCarousel cards={cards} />
        </>
    );
}

export default App
