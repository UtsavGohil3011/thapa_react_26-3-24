import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Service from './Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Navbar from './Navbar';
import User from './User';



function App() {
  return (
    <>

      {/* <Home />
      <Aboutus />
      <Contactus />
      <Service /> */}
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/user/:name/:name2' element={<User/>}/>
      </Routes>
     

    </>

  );
}

export default App;
