import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Service from './Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './Navbar';
import User from './User';
import Search from './Search';
import Error from './Error';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/user/:name' element={<User/>}/>
        <Route path='*' element={<Error/>}/> {/* This is the corrected route */}
      
      </Routes>
      <Search />
    </>
  );
}

export default App;
