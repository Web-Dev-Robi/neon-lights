import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/mobile/responsive.css';
import ResponsiveNav from './components/ResponsiveNav';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import HomeCard from './components/pages/HomeCard';
import Projects from './components/pages/Projects';
import Inspiration from './components/pages/Inspiration';
import Hobbies from './components/pages/Hobbies';
import PhotoAlbum from './components/pages/PhotoAlbum';
import Contact from './components/pages/Contact';
import Cv from './components/pages/Cv';
import TextToImage from './components/pages/TextToImage';
import GitHub from './components/pages/GitHub';
import Green from './components/pages/Green';
import AmazingSpace from './components/pages/AmazingSpace';
import MemeGen from './components/pages/MemeGen';
import Weather from './components/pages/Weather';



function App() {

  return (
    <Router>
      <div className="App">
        <ResponsiveNav />
        <main className="container">
          <Routes>
            <Route path='/' element={<HomeCard />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/hobbies' element={<Hobbies />} />
            <Route path='/inspiration' element={<Inspiration />} />
            <Route path='/photoalbum' element={<PhotoAlbum />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cv' element={<Cv />} />
            <Route path='/texttoimage' element={<TextToImage />} />
            <Route path='/github' element={<GitHub />} />
            <Route path='/green' element={<Green />} />
            <Route path='/amazingspace' element={<AmazingSpace />} />
            <Route path='/memegen' element={<MemeGen />} />
            <Route path='/weather' element={<Weather />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
