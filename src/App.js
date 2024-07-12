import './App.css';
import MainContent from './MainContent';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <MainContent />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
