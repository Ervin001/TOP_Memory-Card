import CardContainerComponent from './CardContainerComponent';
import InfoComponent from './InfoComponent';

import { useState, useEffect } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playing, setPlaying] = useState(true);

  // Check if game is playing

  //function for setting score
  const addPoint = () => {
    setCurrentScore((prevScore) => prevScore + 1);
  };

  const resetPoint = () => {
    setCurrentScore(0);
  };

  const addBestScore = () => {
    setBestScore(currentScore);
  };

  const endGame = () => {
    setPlaying(false);
  };

  // useEffect(() => {
  //   console.log(playing);
  // }, [playing]);

  return (
    <>
      <InfoComponent
        currentScore={currentScore}
        bestScore={bestScore}
        playing={playing}
        first={true}
      />

      <CardContainerComponent
        addPoint={addPoint}
        resetPoint={resetPoint}
        addBestScore={addBestScore}
        playing={playing}
        endGame={endGame}
      />
      {!playing && (
        <InfoComponent
          currentScore={currentScore}
          bestScore={bestScore}
          playing={playing}
          first={false}
        />
      )}
    </>
  );
}

export default App;
