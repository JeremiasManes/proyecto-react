import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const handleonAdd = () => {
    alert("Se agrego al carrito")
  }

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Counter stock={5} onAdd={handleonAdd} />
    </div>
  );
}

export default App;
