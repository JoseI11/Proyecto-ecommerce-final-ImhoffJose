
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemdetailcontainer from './components/ItemDetailListContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  

 // const arraytrans=productos1.map(prod=><h2 key={prod.id}>{prod.name}</h2>)
  return (

    <div className="App">
    <BrowserRouter>
       <Navbar/>
       <Routes>

          <Route path='/' element={<Itemlistcontainer greetings={"Productos a vender"} />} />
          <Route path='/category/:categoryId' element={<Itemlistcontainer greetings={"Productos a vender"} />} />
          
          <Route path='/producto/:productoId' element= {<Itemdetailcontainer />}/>
       </Routes>
    </BrowserRouter>
     
  
     
   
 


    </div>
  );
}

export default App;
