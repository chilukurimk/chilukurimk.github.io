import logo from './logo.svg';
import './App.css';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div></div>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
      <p>
          Madhu Kiran Chilukuri
        </p>
        <p>B.tech in Computer Science and Engineering, Kalasalingam Academy of Research and Education</p>
        <p>Passionate about software development and technology, Open to collaboration and learning new technologies.</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/madhu-kiran-chilukuri-003b481a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin 
        </a>
        <p>Here are some of my projects that I have worked on:</p>
      </div>
      <Projects />
    </div>
  );
}
export default App;
