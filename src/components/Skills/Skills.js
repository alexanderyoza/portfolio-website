import './Skills.css';
import SkillSection from '../SkillSection/SkillSection';



function Skills(props) {

    return (
        <div className='skill' id={props.id}>
            <div className='skill-title'>
            {props.title}
            </div>
            <div className='skill-section'>
                {props.info.map((value) => {
                return (
                    <SkillSection info={value}/>
                );
                })}
            </div>
        </div>
    )
}

export default Skills