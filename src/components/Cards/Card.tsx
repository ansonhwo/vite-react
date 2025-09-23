import { useCallback, useEffect, useRef } from 'react';
import { JSAnimation, animate } from 'animejs';

import { TPositionedCard } from '../../types';

export type CardProps = {
    card: TPositionedCard;
};

const getCardHoverUpAnimation = (target: HTMLImageElement): JSAnimation => {
    return animate(target, {
        y: [
            {
                to: '-2rem', ease: 'linear', duration: 80
            },
        ],
        ease: 'inOutCirc',
        autoplay: false,
    });
};

const getCardHoverDownAnimation = (target: HTMLImageElement): JSAnimation => {
    return animate(target, {
        y: [
            {
                to: 0, ease: 'easeOutSine', duration: 150
            }
        ],
        ease: 'inOutCirc',
        autoplay: false,
    });
};

export const Card = ({ card }: CardProps) => {
    const CLASS_NAME = `card-${card.suit}${card.displayValue}`;

    const hoverAnimation = useRef<JSAnimation | null>(null);
    const cardRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (hoverAnimation.current) {
            hoverAnimation.current.pause();
        }
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (hoverAnimation.current) {
            hoverAnimation.current.pause();
        }
        hoverAnimation.current = getCardHoverUpAnimation(cardRef.current!);
        hoverAnimation.current.play();
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (hoverAnimation.current) {
            hoverAnimation.current.pause();
        }
        hoverAnimation.current = getCardHoverDownAnimation(cardRef.current!);
        hoverAnimation.current.play();
    }, []);

    return <img
        ref={cardRef}
        src={card.img}
        style={{ zIndex: card.index }}
        className={[
            'card',
            CLASS_NAME
        ].join(' ')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    />;
};
