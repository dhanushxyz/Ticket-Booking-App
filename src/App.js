import Main from './components/Main';
import ContactUS from './pages/ContactUS';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Userdetails from './pages/Userdetails';

import Bookseat from './pages/Bookseat';
import Userlog from './pages/Userlog';
import Seldate from './pages/Seldate';
import Payment from './pages/Payment';
import Adminlog from './pages/Adminlog';
import Adminloggedin from './pages/Adminloggedin';
import Removeuse from './pages/Removeuse';
import Edit from './pages/Edit';
import Show from './pages/Show';
import Editscreen from './pages/Editscreen';
import Signup from './pages/Signup'


function App() {
  return (
    <div>
    <BrowserRouter >
    <div className="App">
      <Main/>
    </div>
    <>
      <div className='navbar'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/">Logout</Link></li>
            <li><Link to="/Signup">Sign up</Link></li>
          </ul>
        </nav>
      </div>
    </>

        
      
      
    
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/ContactUs" element={<ContactUS/>} />
      <Route path="/Adminlog" element={<Adminlog/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/Seldate" element={<Seldate/>}/>
      <Route path="/Remove" element={<Removeuse/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Bookseat" element={<Bookseat/>}/>
      <Route path="/Userlog" element={<Userlog/>}/>
      <Route path="/Userdetails" element={<Userdetails/>}/>
      <Route path="/Adminloggedin" element={<Adminloggedin/>} />
      <Route path="/Edit" element={<Edit/>} />
      <Route path="/Show" element={<Show/>} />
      <Route path="/Editscreen" element={<Editscreen/>} />
    </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;
