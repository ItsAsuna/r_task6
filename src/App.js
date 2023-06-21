import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Home-in" element={<Home/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
