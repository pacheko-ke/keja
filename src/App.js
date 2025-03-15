import './App.css';
import {  Route, Routes, HashRouter } from 'react-router-dom'
import Newsletter from './components/dashboard/Newsletter';
import Header from './components/dashboard/Header';


function App() {
  return (


    <div className="App">
      <HashRouter>
        <Routes>
       
          <Route path="/" element={<Newsletter />} />
          <Route path="/header" element={<Header />} />
          
          
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
