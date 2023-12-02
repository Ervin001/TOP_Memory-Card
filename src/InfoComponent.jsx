export default function InfoComponent({
  currentScore,
  bestScore,
  playing,
  first,
}) {
  const content = first ? (
    <>
      <div className={`score current-score ${!playing && 'hidden'}`}>
        Current Score: {currentScore}{' '}
      </div>
      <div className={`score best-score ${!playing && 'hidden'}`}>
        Best Score: {bestScore}{' '}
      </div>
    </>
  ) : (
    <>
      {<div className='score game-over-score game-over-text'>Game Over</div>}

      <div className={`score current-score game-over-score`}>
        Current Score: {currentScore}{' '}
      </div>

      <div className={`score game-over-score`}>Best Score: {bestScore} </div>
      <button className='btn'>Start Over</button>
    </>
  );

  return (
    <div
      className={`container info-container ${!first && 'game-over-container'}`}
    >
      {content}
    </div>
  );
}
