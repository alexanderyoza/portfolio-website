import './SkillSection.css';

function SkillSection(props) {

  const image = () => {
    if (props.info[1] !== 'none'){
      return (
        <div className='skillsect-img-cont'>
          <img className='skillsect-img' src={props.info[1]} style={{height: props.info[2]}} alt="img" />
        </div>
      );
    } else {
      return <noscript></noscript>;
    }
  }

  return (
    <div className='skillsect'> 
      {image()}
      <div className='skillsect-header'>
        {props.info[0]}
      </div>
    </div>
  )
}

export default SkillSection;