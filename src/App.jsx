import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenida a Checkmate!" />
    </>
  );
}

export default App;