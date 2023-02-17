import './App.css';
import './components/mobile/responsive.css'
import ResponsiveNav from './components/ResponsiveNav'
import Footer from './components/Footer';
import HomeCard from './components/HomeCard';



function App() {
  
  return (
    <div className="App">
      <ResponsiveNav/>
      <main className="container">
           <HomeCard/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
