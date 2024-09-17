
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import AfterSchool from './pages/AfterSchool';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Grupe from './pages/Grupe';
function App() {
  return (
   <>
   <Navbar/>
   {/* <Hero/>
   <About/>
   <Skills/>
   <AfterSchool/>
   <Contact/>
   <Footer/> */}
   {/* <Projects/> */}

   {/* <Router> */}
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/afterSchools' element={<AfterSchool/>}/>
      <Route path='/grupe' element={<Grupe/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
   {/* </Router> */}
   </>
  );
}

export default App;