import { useEffect, useState } from 'react';
import Card from './CardComponent';

import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const initialCardData = [
  { type: 'svg', name: 'Oreo', gridArea: 'one', id: uuidv4() },
  { type: 'svg', name: 'Gizmo', gridArea: 'two', id: uuidv4() },
  { type: 'svg', name: 'Angel', gridArea: 'three', id: uuidv4() },
  { type: 'svg', name: 'Samantha', gridArea: 'four', id: uuidv4() },
  { type: 'svg', name: 'Lily', gridArea: 'five', id: uuidv4() },
  { type: 'svg', name: 'Baby', gridArea: 'six', id: uuidv4() },
  { type: 'svg', name: 'Sandie', gridArea: 'seven', id: uuidv4() },
  { type: 'svg', name: 'Sam', gridArea: 'eight', id: uuidv4() },
];

export default function CardContainerComponent() {
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
    const shuffledData = shuffle([...randomCards]);
    setRandomCards(shuffledData);
    console.log(randomCards);
  };

  return (
    <div className='container card-container grid'>
      {randomCards.map((card) => {
        return (
          <Card
            key={card.id}
            type={card.type}
            name={card.name}
            gridArea={card.gridArea}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}
