import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/mobile/responsive.css'
import ResponsiveNav from './components/ResponsiveNav'
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import HomeCard from './components/pages/HomeCard';
import Projects from './components/pages/Projects';



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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
