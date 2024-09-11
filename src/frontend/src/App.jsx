import { Route, Routes } from "react-router-dom";
import Carrito from "./components/carrito";
import Productos from "./components/productos";
import Navbar from "./components/navbar";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ < Productos/> } />
        <Route path="carrito" element={ <Carrito /> } />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
