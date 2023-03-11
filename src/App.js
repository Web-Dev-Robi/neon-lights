import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import ResponsiveNav from './components/pages/ResponsiveNav';
import Footer from './components/pages/Footer';
import AboutMe from './components/pages/AboutMe';
import Landing from './components/pages/Landing';
import ProjectsSlider from './components/pages/ProjectsSlider';
import Inspiration from './components/pages/Inspiration';
import Hobbies from './components/pages/Hobbies';
import PhotoAlbum from './components/pages/PhotoAlbum';
import Contact from './components/pages/Contact';
import Cv from './components/pages/Cv';
import MyParicles from './components/MyParticles';





function App() {


  return (
    <BrowserRouter>
      {/* <MyParicles /> */}
      <div className="App">
        <ResponsiveNav />
        <div className="container">
          {/* <MyParicles /> */}
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/aboutme' element={<AboutMe />} />
            <Route exact path='/projectsslider' element={<ProjectsSlider />} />
            <Route exact path='/hobbies' element={<Hobbies />} />
            <Route exact path='/inspiration' element={<Inspiration />} />
            <Route exact path='/photoalbum' element={<PhotoAlbum />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/cv' element={<Cv />} />
          </Routes>
        </div>
        <Footer />
        <MyParicles />
      </div>
    </BrowserRouter>
  );
}

export default App;