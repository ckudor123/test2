import React, { useContext, useEffect, useState } from 'react';
import { CardContext } from '../Homepage';

const Card = () => {
    const context = useContext(CardContext);
    const [card, setCard] = useState('none');

    useEffect(() => {
        console.log('efect');
    }, []);

    console.log(context);

    return (
        <div onClick={() => setCard('many')}>
            Card {context} {card}
        </div>
    )
}

export default Card;