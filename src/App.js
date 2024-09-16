
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import AfterSchool from './pages/AfterSchool';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   {/* <Projects/> */}
   <AfterSchool/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;