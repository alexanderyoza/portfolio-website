import './App.css';
import Top from './components/Top/Top';
import Card from './components/Card/Card';
import Skills from './components/Skills/Skills';

import spain from './images/spain-girona.jpg';

import alex from './images/alex.png';
import angular from './images/angular.png';
import boh from './images/boh.png';
import xxi from './images/xxi.JPG';
import c from './images/c.png';
import java from './images/java.png';
import javascript from './images/javascript.png';
import mongo from './images/mongo.png';
import node from './images/node.png';
import projdest from './images/projdest.png';
import python from './images/python.png';
import react from './images/react.png';
import typescript from './images/typescript.png';
import cpp from './images/cpp.png';

function App() {
    // header, subheader, description, imagelink on each inner array
    const about = [
        [
        'Hello, I\'m Alex',
        'none',
        <div>
            I am currently 
            a student at the University of California San Diego. 
            I am motivated by my desire to learn and improve as 
            I believe there is too much information in this world for 
            someone to ever stop exploring. I am pursing a degree in 
            Computer Science and I am captivated by the puzzle-like tasks 
            that come with my classes. During my free time, I enjoy playing beach
            volleyball, surfing and playing video games.
        </div>,
        alex,
        500
        ],
    ];

    const skill = [
        [
            'Python',
            python,
        ],
        [
            'C',
            c,
        ],
        [
            'C++',
            cpp,
        ],
        [
            'Java',
            java,
        ],
        [
            'React',
            react,
        ],
        [
            'MongoDB',
            mongo,
        ],
        [
            'Javascript',
            javascript,
        ],
        [
            'Typescript',
            typescript,
        ],
        [
            'Angular',
            angular,
        ],
        [
            'Node',
            node,
        ]
    ];
    const experience = [
        [
            "AGY LLC - Freelance Website Development",
            'July 2023 - Present, Phoenix, AZ',
            <div>
                <ul>
                    <li>
                        Expanded communication skills in order to understand the goals of the clients’ business.
                    </li>
                    <li>
                        Researched design techniques to grab attention and create simple yet effective website designs.
                    </li>
                    <li>
                        Developed my understanding of various website testing techniques to enhance the consistency
                        and reliability of websites, ensuring an optimal user experience and minimizing potential errors.
                    </li>
                </ul>
            </div>,
            'none',
        ],
        [
            "Project Destined - Commercial Real Estate Intern",
            'September 2022 - December 2022, Virtual',
            <div>
                <ul>
                <li>
                    Worked with professionals at Marcus and Millichap Vancouver
                    to build 10-year cash flow projections and sensitivity analysis
                    based on various growth rates, hold periods, and exit cap rates.
                </li>
                <li>
                    Received 60+ hours of training on real estate fundamentals, property
                    valuation, deal financing, financial modeling, and market research.
                </li>
                <li>
                    Prepared and presented investment memos to real estate professionals 
                    from private equity, brokerages, investment banks, and other real estate firms.
                </li>
                </ul>
            </div>,
            projdest,
        ],
        [
            "Bank of Hawaii - eSolutions Development Intern",
            'June 2022 - August 2022, Honolulu, Hawaii',
            <div>
                <ul>
                    <li>
                        Expanded technical skills by automating bank processes using Microsoft Power Automate.
                    </li>
                    <li>
                        Collaborated with the Software Engineering team to breakdown and delegate project tasks.
                    </li>
                    <li>
                        Automated 1500+ hours per year of previously manual bank reporting and processing.
                    </li>
                    <li>
                        Developed Python scripts that are currently in production to process thousands of daily 
                        bank transactions and reports.
                    </li>
                </ul>
            </div>,
            boh,
        ],
        [
            "Private Event Organizer",
            'February 2021 - May 2021, Phoenix, AZ',
            <div>
                <ul>
                    <li>
                        Privately fundraised and organized a high school prom.
                    </li>
                    <li>
                        Worked in a team of three in order to effectively advertise on social media, set up ticket payment options, and arrange accommodations including the venue, a DJ, live performers, and decorations for about 700 people.
                    </li>
                    <li>
                        Approximate Gross Revenue: $50,000
                    </li>
                </ul>
            </div>,
            xxi,
        ],
    ];
    const project = [
        [
            'Website Development Portfolio - July 2023',
            'none',
            <div>
                <ul>
                    <li>
                        Created an online accessible overview of my web development experience to summarize my work experiences, and projects.
                    </li>
                    <li>
                        Skill(s) Used: React
                    </li>
                </ul>
            </div>,
            'none'
        ],
        [
            'Stock Market Trends Analysis - January 2023 (Ongoing)',
            'none',
            <div>
                <ul>
                    <li>
                        Explores the effectiveness of Technical Analysis Measurements as well as the correlation between real-world events and their effect on the financial markets.
                    </li>
                    <li>
                        Skill(s) Used: Python Pandas, Alpaca Historical Data API
                    </li>
                </ul>
            </div>,
            'none'
        ],
        [
            'Workout Planner Website - September 2022',
            'none',
            <div>
                <ul>
                    <li>
                        Website using a MERN stack that can design a workout 
                        split based on the chosen sport and amount of desired workouts per week.
                    </li>
                    <li>
                        Skill(s) Used: MongoDB, Express, React, Node
                    </li>
                </ul>
            </div>,
            'none'
        ],
    ];
    const contact = [
        [
        'Contact Info',
        'none',
        <div className='cardsect-contact'>
            <div className='cardsect-contact-cont'>
            <div>Email: <a href='mailto:alex.yoza@gmail.com' className='cardsect-link'>alex.yoza@gmail.com</a> </div>
            <div>Phone Number: (623)399-2062</div>
            </div>
        </div>,
        'none'
        ],
    ];

    return (
        <div className="App">
            <Top />
            <img className='background' src={spain} alt='background' />
            <div className='app-flex'>
                <Card id='about-me' title='About Me' info = {about}/>
                <Card id='experience' title='Experience' info = {experience}/>
                <Card id='projects' title='Projects' info = {project}/>
                <Skills id = 'skills' title='Skills' info = {skill}/>
                <Card id='contact' title='Contact' info = {contact}/>
            </div>
        </div>
    );
}

export default App;
