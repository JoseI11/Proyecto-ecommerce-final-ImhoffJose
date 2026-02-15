
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemdetailcontainer from './components/ItemDetailListContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';

function App() {

   return (

      <div className="App">

         <CartProvider>
            <BrowserRouter>
               <Navbar />
               <main className="main-content">
                  <Routes>
                     <Route path='/' element={<Itemlistcontainer greetings={"Insumos en venta"} />} />
                     <Route path='/category/:categoryId' element={<Itemlistcontainer greetings={"Productos a vender"} />} />
                     <Route path='/producto/:productoId' element={<Itemdetailcontainer />} />
                     <Route path='/cart' element={<Cart />} />
                     <Route path='/checkout' element={<Checkout />} />
                  </Routes>
               </main>
               <Footer />
            </BrowserRouter>
         </CartProvider>


      </div>
   );
}

export default App;
