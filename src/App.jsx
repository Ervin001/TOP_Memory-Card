import CardContainerComponent from './CardContainerComponent';
import InfoComponent from './InfoComponent';
import { useState, useEffect } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  //function for setting score
  const addPoint = () => {
    setCurrentScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    console.log(currentScore);
  }, [currentScore]);

  return (
    <>
      <InfoComponent currentScore={currentScore} />
      <CardContainerComponent addPoint={addPoint} />
    </>
  );
}

export default App;
