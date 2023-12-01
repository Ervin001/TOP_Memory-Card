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

  const addBestScore = () => {
    setBestScore(currentScore);
  };

  const endGame = () => {
    setPlaying(false);
  };

  return (
    <>
      <InfoComponent currentScore={currentScore} bestScore={bestScore} />
      <CardContainerComponent
        addPoint={addPoint}
        addBestScore={addBestScore}
        playing={playing}
        endGame={endGame}
      />
    </>
  );
}

export default App;
