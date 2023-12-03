import { useEffect, useState } from 'react';
import Card from './CardComponent';

import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const initialCardData = [
  { type: 'svg', name: 'Oreo', id: uuidv4(), urlID: 1 },
  { type: 'svg', name: 'Gizmo', id: uuidv4(), urlID: 2 },
  { type: 'svg', name: 'Angel', id: uuidv4(), urlID: 3 },
  { type: 'svg', name: 'Samantha', id: uuidv4(), urlID: 4 },
  { type: 'svg', name: 'Lily', id: uuidv4(), urlID: 5 },
  { type: 'svg', name: 'Baby', id: uuidv4(), urlID: 6 },
  { type: 'svg', name: 'Sandie', id: uuidv4(), urlID: 7 },
  { type: 'svg', name: 'Sam', id: uuidv4(), urlID: 8 },
];

export default function CardContainerComponent({
  addPoint,
  addBestScore,
  playing,
  endGame,
  resetPoint,
}) {
  // Game object
  const [imgUrlObj, setImgUrlObj] = useState({});

  // For when the game is reset
  useEffect(() => {
    // Check if game is over
    if (!playing) {
      setImgUrlObj({});
    }
  }, [playing]);

  //shuffle at the start of the game
  shuffle(initialCardData);

  const [randomCards, setRandomCards] = useState(initialCardData);

  // Shuffle function declaration
  function shuffle(array) {
    // const shuffle = (array) => {
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
  }

  const handleClick = (e) => {
    // Check if game is playable
    if (playing) {
      // get only the id
      const imgID = e.target.src.split('/').pop();

      if (!(imgID in imgUrlObj)) {
        // Shuffle the cards
        const shuffledData = shuffle([...randomCards]);
        setRandomCards(shuffledData);
        imgUrlObj[imgID] = true;

        // Add point
        addPoint();
      } else {
        // Add current Score to best score
        addBestScore();
        endGame();
        resetPoint();
      }
    }
  };

  return (
    <div className={`container card-container grid`}>
      {randomCards.map((card) => {
        return (
          <Card
            key={card.id}
            type={card.type}
            name={card.name}
            urlID={card.urlID}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}
