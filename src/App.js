import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Card from './components/Card/Card';

import alex from './images/alex.png';
import angular from './images/angular.png';
import boh from './images/boh.png';
import c from './images/c.png';
import express from './images/express.png';
import htmlcss from './images/htmlcss.png';
import java from './images/java.png';
import javascript from './images/javascript.png';
import mongo from './images/mongo.png';
import node from './images/node.png';
import projdest from './images/projdest.png';
import python from './images/python.png';
import react from './images/react.png';
import typescript from './images/typescript.png';

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
        someone ever stop exploring. I am pursing a degree in 
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
      'Java',
      'none',
      <div>
        Java is a programming language and computing 
        platform first released by Sun Microsystems in 1995.
        It has evolved from humble beginnings to power a large
        share of today’s digital world, by providing the reliable
        platform upon which many services and applications are built.
        New, innovative products and digital services designed for
        the future continue to rely on Java, as well. <a href="https://www.java.com/en/download/help/whatis_java.html" style={{textDecoration:'none', color:'#8BD8BD'}}>Learn More</a>
      </div>,
      java,
      150
    ],
    [
      'Python',
      'none',
      <div>desc</div>,
      python,
      150
    ],
    [
      'C',
      'none',
      <div>desc</div>,
      c,
      150
    ],
    [
      'HTML/CSS',
      'none',
      <div>desc</div>,
      htmlcss,
      150
    ],
    [
      'Javascript',
      'none',
      <div>desc</div>,
      javascript,
      150
    ],
    [
      'Typescript',
      'none',
      <div>desc</div>,
      typescript,
      150
    ],
    [
      'Angular',
      'none',
      <div>desc</div>,
      angular,
      150
    ],
    [
      'React',
      'none',
      <div>desc</div>,
      react,
      150
    ],
    [
      'MongoDB',
      'none',
      <div>desc</div>,
      mongo,
      150
    ],
    [
      'Express',
      'none',
      <div>desc</div>,
      express,
      150
    ],
    [
      'Node',
      'none',
      <div>desc</div>,
      node,
      150
    ]
  ];
  const experience = [
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
      100
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
      200
    ],
  ];
  const project = [
    [
      'Workout Planner Website',
      'none',
      <div>MongoDB, Express, React, Node</div>,
      'none'
    ],
    [
      'Dental Practice Website',
      'none',
      <div>Angular</div>,
      'none'
    ],
    [
      'Affordable Housing Development Website',
      'none',
      <div>HTML, CSS, Javascript</div>,
      'none'
    ],
    [
      'Air Hockey Computer Game',
      'none',
      <div>Python, PyGame module</div>,
      'none'
    ]
  ];
  const contact = [
    [
      'Contact Info',
      'none',
      <div>
        <div>Email: alex.yoza@gmail.com</div>
        <div>Phone Number: (623)399-2062</div>
      </div>,
      'none'
    ],
  ];

  return (
    <div className="App">
      <Top/>
      <div className='app-flex'>
        <Card id='about-me' title='About Me' info = {about}/>
        <Card id='skills' title='Skills' info = {skill}/>
        <Card id='experience' title='Experience' info = {experience}/>
        <Card id='projects' title='Projects' info = {project}/>
        <Card id='contact' title='Contact' info = {contact}/>
      </div>
    </div>
  );
}

export default App;
