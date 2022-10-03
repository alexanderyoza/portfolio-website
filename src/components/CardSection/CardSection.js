import './CardSection.css';

function CardSection(props) {

  const image = () => {
    if (props.info[2] !== 'none'){
      return (
        <div>
          <img src={props.info[2]} alt="img" />
        </div>
      );
    }
  }

  return (
    <div> 
      {image()}
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