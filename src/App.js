import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Card from './components/Card/Card';

function App() {
  const aboutDesc = [
    `My name is Alex Yoza and I am currently 
    a student at the University of California San Diego. 
    I am motivated by my desire to learn and improve as 
    I believe there is too much information in this world for 
    someone ever stop exploring it. I am pursing a degree in 
    Computer Science and I am captivated by the puzzle-like tasks 
    that come with my classes. During my free time, I enjoy playing beach
     volleyball, surfing and playing video games.`,
     "hello",
     "whats up"
  ];
  const skillsDesc = [
    "cardsec"
  ];
  const expDesc = [
    "cardsec"
  ];
  const projDesc = [
    "cardsec"
  ];

  return (
    <div className="App">
      <Top/>
      <Card id = "about-me" desc = {aboutDesc}/>
      <Card id = "skills" desc = {skillsDesc}/>
      <Card id = "experience" desc = {expDesc}/>
      <Card id = "projects" desc = {projDesc}/>
    </div>
  );
}

export default App;
