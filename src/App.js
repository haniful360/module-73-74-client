
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Apointment from './Pages/Apointment/Apointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'; 
import SingUp from './Pages/Login/SignUp';
// import SignUp from './Pages/SignUp/SignUp'; 
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appiontment" element={<Apointment />} />
        <Route path="/login" element={<Login/>} />
        <Route path = '/signup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
