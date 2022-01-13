import Main from './components/Main';
import ContactUS from './pages/ContactUS';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <Main/>
      </div>
      <div className='navbar'>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/ContactUs">ContactUs</a></li>
          </ul>
        </nav>
      </div>

        
      
      
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/ContactUs" element={<ContactUS/>} />
    </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;
