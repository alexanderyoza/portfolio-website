import './Top.css';

import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';


function Top() {

    return (
        <div>
            <div className='top-container'>
                <div className='top-name'>
                    Alexander Yoza
                </div>
                <div className = 'top-socials'>
                    <div className='top-linkedin'>
                        <a href='https://www.linkedin.com/in/alex-yoza/' target="_blank" rel="noreferrer"><img className='top-img' src={linkedin} alt='linkedin'/></a>
                    </div>
                    <div className='top-github'>
                        <a href='https://github.com/alexanderyoza' target="_blank" rel="noreferrer"><img className='top-img' src={github} alt='github'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;
