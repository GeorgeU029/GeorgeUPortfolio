import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 


function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
