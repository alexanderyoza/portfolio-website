import './Card.css';
import CardSection from '../CardSection/CardSection';

function Card(props) {


  return (
    <div className='card' id={props.id}>
      <div className='card-title'>
        {props.title}
      </div>
      {props.info.map((value) => {
        return (
          <CardSection info = {value}/>
        );
      })}
    </div>
  )
}

export default Card;