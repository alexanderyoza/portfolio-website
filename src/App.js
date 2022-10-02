import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Card from './components/Card/Card';
import alex from './images/alex.png';

function App() {
  // title, description, imagelink on each inner array
  const about = [
    [
      'Hello, I\'m Alex',
      `I am currently 
      a student at the University of California San Diego. 
      I am motivated by my desire to learn and improve as 
      I believe there is too much information in this world for 
      someone ever stop exploring it. I am pursing a degree in 
      Computer Science and I am captivated by the puzzle-like tasks 
      that come with my classes. During my free time, I enjoy playing beach
      volleyball, surfing and playing video games.`,
      alex,
    ],
  ];

  const skill = [
    [

    ],
    [
    
    ],
    [

    ]
  ];
  const experience = [
    [

    ],
    [
      
    ],
    [

    ]
  ];
  const project = [
    [

    ],
    [
      
    ],
    [

    ]
  ];

  return (
    <div className="App">
      <Top/>
      <Card id = "about-me" info = {about}/>
      <Card id = "skills" info = {skill}/>
      <Card id = "experience" info = {experience}/>
      <Card id = "projects" info = {project}/>
    </div>
  );
}

export default App;
