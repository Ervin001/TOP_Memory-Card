import { useEffect, useState } from 'react';
import Card from './CardComponent';

import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const initialCardData = [
  { type: 'svg', name: 'Oreo', id: uuidv4() },
  { type: 'svg', name: 'Gizmo', id: uuidv4() },
  { type: 'svg', name: 'Angel', id: uuidv4() },
  { type: 'svg', name: 'Samantha', id: uuidv4() },
  { type: 'svg', name: 'Lily', id: uuidv4() },
  { type: 'svg', name: 'Baby', id: uuidv4() },
  { type: 'svg', name: 'Sandie', id: uuidv4() },
  { type: 'svg', name: 'Sam', id: uuidv4() },
];

export default function CardContainerComponent({ addPoint }) {
  const [randomCards, setRandomCards] = useState(initialCardData);

  // Shuffle function
  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const handleClick = () => {
    // Add point
    addPoint();

    // Shuffle the cards
    const shuffledData = shuffle([...randomCards]);
    setRandomCards(shuffledData);
  };

  return (
    <div className='container card-container grid'>
      {randomCards.map((card) => {
        return (
          <Card
            key={card.id}
            type={card.type}
            name={card.name}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}
