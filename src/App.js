import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';
import RequestCall from './components/RequestCall';
import Cookies from './components/Cookies';
import Landlord from './components/dashboard/Landlord';
import Landing from './components/Landing';

function App() {
  return (


    <div className="App">
      <HashRouter>
        <Routes>
       
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Landlord />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
