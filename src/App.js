
import { Route, Routes, HashRouter } from 'react-router-dom'
import Newsletter from './components/dashboard/Newsletter';
import Header from './components/dashboard/Header';
import LoginTest from './components/LoginTest';
import Landing from './components/Landing'


function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>

          <Route path="/" element={<Landing />} />
          {/* <Route path="/header" element={<Header />} /> */}
          <Route path="/Login" element={<LoginTest />} />


        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
