import './Card.css';
import CardSection from '../CardSection/CardSection';

function Card(props) {

  let section = () => {
    return <CardSection desc = {props.desc[0]}/>;
  }


  return (
    <div>
      {props.desc.map((value) => {
        return <CardSection desc = {value}/>;
      })}
    </div>
  )
}

export default Card;