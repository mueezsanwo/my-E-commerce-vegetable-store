import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Footer from './components/Footer';

function App(){
  return (
   <div className='App'> 
     <BrowserRouter>
     <ToastContainer />
      <NavBar />
      <Routes>
       <Route path="/product" element={<Product />} /> 
       <Route path="/cart" element={<Cart />} />
       <Route path="/"  element={<Home />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      
       
    </BrowserRouter> 
    </div>
  );
}

export default App;
