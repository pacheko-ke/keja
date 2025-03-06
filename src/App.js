import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';
import RequestCall from './components/RequestCall';
import Cookies from './components/Cookies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
      <RequestCall/>
      <Footer/>
      {/* <Cookies/> */}
      
    </div>
  );
}

export default App;
