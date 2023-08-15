import './SkillSection.css';

function SkillSection(props) {

  const image = () => {
    if (props.info[1] !== 'none'){
      return (
        <img className='skillsect-img' src={props.info[1]} alt="img" />
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