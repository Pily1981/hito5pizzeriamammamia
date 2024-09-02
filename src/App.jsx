import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/NavBar';
import Home from './pages/Home';
import Footer from './Componentes/Footer';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';


function App() {
  
  return (
    <BrowserRouter>      
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/Pizzas" element={<Pizza></Pizza>}></Route>
          <Route path="/Profile" element={<Profile></Profile>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>

  );
}

export default App;