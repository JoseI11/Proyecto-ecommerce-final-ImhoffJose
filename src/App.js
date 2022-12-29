
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemdetailcontainer from './components/ItemDetailListContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';

function App() {

   return (

      <div className="App">

         <CartProvider>
            <BrowserRouter>
               <Navbar />
               <Routes>
                  <Route path='/' element={<Itemlistcontainer greetings={"Insumos en venta"} />} />
                  <Route path='/category/:categoryId' element={<Itemlistcontainer greetings={"Productos a vender"} />} />
                  <Route path='/producto/:productoId' element={<Itemdetailcontainer />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checkout' element={<Checkout />} />
                  
               </Routes>

            </BrowserRouter>
         </CartProvider>


      </div>
   );
}

export default App;
