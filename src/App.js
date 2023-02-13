import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main">
          <Home/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
