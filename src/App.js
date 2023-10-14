import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Footer } from './components/Footer';
import Nav from './components/Nav';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./components/Main";
import 'F:/REACTJS/frontend6/src/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg';
import 'F:/REACTJS/frontend6/src/images/z-s-CdlDVEY6pcU-unsplash.jpg';

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>


    </div>
  );
}

export default App;