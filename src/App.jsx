import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div>

    <NavBar />
  <ItemListContainer greeting ={'Bienvenidos a su espacio Gluten Free'}/>
  
    </div>
    );
}

export default App;
