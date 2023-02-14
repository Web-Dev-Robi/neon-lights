import './App.css';
import './components/mobile/responsive.css'
import ResponsiveNav from './components/ResponsiveNav'
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <ResponsiveNav/>
      <main className="home">
          <Home/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
