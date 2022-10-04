import './CardSection.css';

function CardSection(props) {

  const image = () => {
    if (props.info[3] !== 'none'){
      return (
        <div className='cardsect-img-cont'>
          <img className='cardsect-img' src={props.info[3]} alt="img" />
        </div>
      );
    } else {
      return <noscript></noscript>;
    }
  }

  const subheader = () => {
    if (props.info[1] !== 'none'){
      return (
        <div className='cardsect-subheader'>
          {props.info[1]}
        </div>
      );
    } else {
      return <noscript></noscript>;
    }
  };

  return (
    <div> 
      {image()}
      <div className='cardsect-header'>
        {props.info[0]}
      </div>
      {subheader()}
      <div className='cardsect-text'>
        {props.info[2]}
      </div>
    </div>
  )
}

export default CardSection;