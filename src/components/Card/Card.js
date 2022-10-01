import './Card.css';
import CardSection from '../CardSection/CardSection';

function Card(props) {
  return (
    <div>
        {props.name[0]}
        {props.name[1]}
        <CardSection/>
    </div>
  )
}

export default Card;