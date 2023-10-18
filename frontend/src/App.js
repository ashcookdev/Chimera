import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home'; // Assuming you have these components
import AboutUs from './AboutUs';
import Contact from './Contact';
import Projects from './Projects';
import Companies from './Companies';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  );
}

export default App;
