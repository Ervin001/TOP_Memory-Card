import ScoresComponent from './ScoresComponent';

export default function InfoComponent({ currentScore, bestScore }) {
  return (
    <div className='container info-container'>
      <ScoresComponent currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}
