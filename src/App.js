import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveNav from './components/pages/ResponsiveNav';
import Footer from './components/pages/Footer';
import AboutMe from './components/pages/AboutMe';
import HomeCard from './components/pages/HomeCard';
import ProjectsSlider from './components/pages/ProjectsSlider';
import Inspiration from './components/pages/Inspiration';
import Hobbies from './components/pages/Hobbies';
import PhotoAlbum from './components/pages/PhotoAlbum';
import Contact from './components/pages/Contact';
import Cv from './components/pages/Cv';
import ParticlesComponent from './components/Particles';



function App() {
  
  return (
    <Router>
      <div>
        <ParticlesComponent />
        <div className="App" id="tsparticles">
        <ResponsiveNav />
        <div className="container">
          <Routes>
            <Route path='/' element={<HomeCard />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projectsslider' element={<ProjectsSlider />} />
            <Route path='/hobbies' element={<Hobbies />} />
            <Route path='/inspiration' element={<Inspiration />} />
            <Route path='/photoalbum' element={<PhotoAlbum />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cv' element={<Cv />} />
          </Routes>
        </div>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
