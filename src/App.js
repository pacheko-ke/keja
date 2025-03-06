import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';
import RequestCall from './components/RequestCall';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
      <RequestCall/>
      <Footer/>
      
    </div>
  );
}

export default App;
