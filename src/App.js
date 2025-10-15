//import logo from './logo.svg';
//import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Tools/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;