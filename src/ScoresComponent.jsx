import './css/scores.css';
import { useState } from 'react';

export default function ScoresComponent() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <div className='current-score score'>Current Score: {currentScore}</div>
      <div className='best-score score'>Best Score: {bestScore}</div>
    </>
  );
}
