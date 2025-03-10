import './App.css';
import {  Route, Routes, HashRouter } from 'react-router-dom'

import Landlord from './components/dashboard/Landlord';
import Landing from './components/Landing';
import Login from './components/Login';
import ChatInbox from './components/dashboard/ChatInbox';

function App() {
  return (


    <div className="App">
      <HashRouter>
        <Routes>
       
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Landlord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ChatInbox />} />
          
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
