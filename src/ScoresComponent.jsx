import { useState } from 'react';

export default function ScoresComponent({ currentScore, bestScore }) {
  return (
    <>
      <div className='current-score score'>Current Score: {currentScore} </div>
      <div className='best-score score'>Best Score: {bestScore} </div>
    </>
  );
}
