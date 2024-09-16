import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;