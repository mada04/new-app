
import './App.css';

import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';

import Contact from './pages/Contact';
import Footer from './pages/Footer';
import AfterSchool from './pages/AfterSchool';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Grupe from './pages/Grupe';
import ToDoList from './pages/ToDoList';
import Copii from './pages/Copii';
import EditChild from './pages/EditChild';
import TestQuiz from './quiz/TestQuiz';
import NavbarApp from './pages/Navbar';
import Educatoare from './pages/Educatoare';
import TaxeScolarizare from './pages/TaxeScolarizare';
import EditMeniu from './taxe/EditMeniu';
import EditProgramZilei from './taxe/EditProgramZilei';
import EditTarife from './taxe/EditTarife';
function App() {
  return (
   <>
   <NavbarApp/>

    <Routes>
      <Route exact path='/' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/afterSchools' element={<AfterSchool/>}/>
      {/* <Route path='/grupe' element={<Grupe/>}/> */}
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/todo' element={<ToDoList/>}/> */}
      <Route path='/copiiList' element={<Copii/>}/>
      <Route path='/editeaza/:id' element={<EditChild/>}/>
      <Route path='/editMeniu/:id' element={<EditMeniu/>}/>
      <Route path='/editProgram/:id' element={<EditProgramZilei/>}/>
      <Route path='/editTarife/:id' element={<EditTarife/>}/>
      <Route path='/quizApp' element={<TestQuiz/>}/>
      <Route path='/educatoare' element={<Educatoare/>}/>
      <Route path='/taxe' element={<TaxeScolarizare/>}/>
    </Routes>

   </>
  );
}

export default App;