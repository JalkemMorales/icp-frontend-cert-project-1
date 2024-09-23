import { Route, Routes } from "react-router-dom";
import Carrito from "./components/carrito";
import Productos from "./components/productos";
import Navbar from "./components/navbar";
import PageNotFound from "./components/PageNotFound";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import "./css/main.css";
import OpenChatFrame from "./components/OpenChatFrame";
import Pie from "./components/footer";

function App() {
  const {} = useContext(AuthContext);
  const [rightChat, setRightChat] = useState({
    path: "",
    title: "Contacto",
  });
  return (
    <div className="App">
      <div className="Main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Pie></Pie>
        <button
            id="btnfixed"
            class="btn btn-success fixeado"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
            onClick={() => {
              const sidebar = document.getElementById('sidebar');
              if(sidebar.classList.contains('show')){
                sidebar.classList.remove('show');
              }else{
                sidebar.classList.add('show');
              }
              const button = document.getElementById('btnfixed');
              if(button.classList.contains('move-button')){
                button.classList.remove('move-button');
              }else{
                button.classList.add('move-button');
              }
            }}
          >
            OpenChat
          </button>
      </div>
      <div id="sidebar">
        <div>
          <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div style={{ width: "350px", height: '100vh'}}>
             <OpenChatFrame {...rightChat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
