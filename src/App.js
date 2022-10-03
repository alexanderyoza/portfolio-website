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
  // title, description, imagelink on each inner array
  const about = [
    [
      'Hello, I\'m Alex',
      `I am currently 
      a student at the University of California San Diego. 
      I am motivated by my desire to learn and improve as 
      I believe there is too much information in this world for 
      someone ever stop exploring. I am pursing a degree in 
      Computer Science and I am captivated by the puzzle-like tasks 
      that come with my classes. During my free time, I enjoy playing beach
      volleyball, surfing and playing video games.`,
      alex,
    ],
  ];

  const skill = [
    [
      'Java',
      'desc',
      java
    ],
    [
      'Python',
      'desc',
      python
    ],
    [
      'C',
      'desc',
      c
    ],
    [
      'HTML/CSS',
      'desc',
      htmlcss
    ],
    [
      'Javascript',
      'desc',
      javascript
    ],
    [
      'Typescript',
      'desc',
      typescript
    ],
    [
      'Angular',
      'desc',
      angular
    ],
    [
      'React',
      'desc',
      react
    ],
    [
      'MongoDB',
      'desc',
      mongo
    ],
    [
      'Express',
      'desc',
      express
    ],
    [
      'Node',
      'desc',
      node
    ]
  ];
  const experience = [
    [
      "Project Destined - Commercial Real Estate Intern",
      'desc',
      projdest
    ],
    [
      "Bank of Hawaii - eSolutions Development Intern",
      'desc',
      boh
    ],
  ];
  const project = [
    [
      'Workout Planner Website',
      'MongoDB, Express, React, Node',
      'none'
    ],
    [
      'Dental Practice Website',
      'Angular',
      'none'
    ],
    [
      'Affordable Housing Development Website',
      'HTML, CSS, Javascript',
      'none'
    ],
    [
      'Air Hockey Computer Game',
      'Python, PyGame module',
      'none'
    ]
  ];
  const contact = [
    [
      'Contact Info',
      `
      Email: alex.yoza@gmail.com
      Phone Number: (623)399-2062
      `,
      'none'
    ],
  ];

  return (
    <div className="App">
      <Top/>
      <Card id = "about-me" info = {about}/>
      <Card id = "skills" info = {skill}/>
      <Card id = "experience" info = {experience}/>
      <Card id = "projects" info = {project}/>
      <Card id = "contact" info = {contact}/>
    </div>
  );
}

export default App;
