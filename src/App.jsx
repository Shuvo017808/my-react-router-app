import './App.css';
import Navbar from './components/Nav';
import { Routes,Route } from 'react-router';
import Products from './components/Products';
import ProductsDetails from './components/Prodetaisl';

function App() {
  

  return (
    <>
      <Navbar/>
     <Routes >
      <Route path = "/" element={<h1 className='text-red-500 text-xl'> home</h1>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path = "/products/:id" element = {<ProductsDetails/>}/>
     </Routes>
    </>
  );
}

export default App;
