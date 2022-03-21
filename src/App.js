import React from 'react';
import {BrowserRouter,Routes,Route
} from "react-router-dom";
import LoginPage from './LoginPage';
import Home from './Home';
const App = () => {
  return (
 <BrowserRouter>
 <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;