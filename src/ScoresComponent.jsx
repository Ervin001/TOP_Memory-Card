import { useState } from 'react';

export default function ScoresComponent({ currentScore }) {
  return (
    <>
      <div className='current-score score'>Current Score: {currentScore} </div>
      <div className='best-score score'>Best Score: </div>
    </>
  );
}
