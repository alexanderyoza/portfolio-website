import './CardSection.css';

function CardSection(props) {


  return (
    <div> 
      <div>
        <img src={props.info[2]} alt="img" />
      </div>
      <div>
        {props.info[0]}
      </div>
      <div>
        {props.info[1]}
      </div>
    </div>
  )
}

export default CardSection;