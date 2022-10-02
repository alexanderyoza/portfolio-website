import './Card.css';
import CardSection from '../CardSection/CardSection';

function Card(props) {


  return (
    <div>
      {props.info.map((value) => {
        return (
          <CardSection info = {value}/>
        );
      })}
    </div>
  )
}

export default Card;