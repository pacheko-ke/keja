import './App.css';
import {  Route, Routes, HashRouter } from 'react-router-dom'
import Newsletter from './components/dashboard/Newsletter';


function App() {
  return (


    <div className="App">
      <HashRouter>
        <Routes>
       
          <Route path="/" element={<Newsletter />} />
          
          
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
