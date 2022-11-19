
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Itemlistcontainer greetings={"Productos a vender"}/>
    </div>
  );
}

export default App;
