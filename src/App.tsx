import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat/:room' element={<Chat />} />
      </Routes>      
    </div>
  );
}

export default App;
