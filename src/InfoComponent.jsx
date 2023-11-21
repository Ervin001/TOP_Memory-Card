import ScoresComponent from './ScoresComponent';

export default function InfoComponent({ currentScore }) {
  return (
    <div className='container info-container'>
      <ScoresComponent currentScore={currentScore} />
    </div>
  );
}
