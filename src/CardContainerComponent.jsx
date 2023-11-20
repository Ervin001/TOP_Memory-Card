import Card from './CardComponent';
import './css/cardContainer.css';
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const cardData = [
  { type: 'svg', name: 'Oreo', gridArea: 'one', id: uuidv4() },
  { type: 'svg', name: 'Gizmo', gridArea: 'two', id: uuidv4() },
  { type: 'svg', name: 'Angel', gridArea: 'three', id: uuidv4() },
  { type: 'svg', name: 'Samantha', gridArea: 'four', id: uuidv4() },
  { type: 'svg', name: 'Lily', gridArea: 'five', id: uuidv4() },
  { type: 'svg', name: 'Baby', gridArea: 'six', id: uuidv4() },
  { type: 'svg', name: 'Sandie', gridArea: 'seven', id: uuidv4() },
  { type: 'svg', name: 'Sam', gridArea: 'eight', id: uuidv4() },
];

export default function CardContainerComponent() {
  return (
    <div className='container card-container grid'>
      {cardData.map((card) => {
        return (
          <Card
            key={card.id}
            type={card.type}
            name={card.name}
            gridArea={card.gridArea}
          />
        );
      })}
    </div>
  );
}
