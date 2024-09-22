import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { backend, createActor } from "../declarations";
import '../css/carrito.css'

function Carrito() {
  const { isAuthenticaded, Identidad } = useContext(AuthContext);
  const [carrito, setCarrito] = useState([]);
  const [TotCar, setTotal] = useState(0);
  const [TotProd, setNProd] = useState(0);
  let Total = 0;
  let TotalProd = 0;

  let Canister = process.env.CANISTER_ID_BACKEND;

  let backend = createActor(Canister, {
    agentOptions: {
      identity: Identidad,
      host: "http://localhost:4943",
    },
  });

  useEffect(() => {
    getCarrito();
  }, []);

  async function getCarrito() {
    if (isAuthenticaded) {
      try {
        const resultado = await backend.getCart();
        console.log(resultado);
        if ("ok" in resultado) {
          setCarrito(resultado.ok);
          console.log("logrado");
          console.log(carrito);
          carrito.map((producto, id) => {
            Total = Total + ((Number)(producto.quantity) * (Number)(producto.product.price));
            TotalProd = TotalProd + (Number)(producto.quantity);
            console.log(Total);
          });
          setTotal(Total);
          setNProd(TotalProd);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    carrito.length == 0 ? <p>No hay productos en el carrito </p> : 
    <div class="master">
      {carrito.map((producto, id) => (
        <div class="card mb-3" style={{ maxWidth: "100%" }}>
          <div class="row g-0" key={id}>
            <div class="col-md-2">
              <img
                src={producto.product.image}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title"><b>Nombre:</b> {producto.product.name}<br/>
                Descripcion: {producto.product.description}<br/>
                Precio: {producto.product.price}<br/>
                </h5>
                <p class="card-text">Cantidad: {String(producto.quantity)}</p>
                <p class="card-text">Precio total: {((Number)(producto.quantity) * (Number)(producto.product.price))}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h2>Total del carrito: {TotCar}</h2>
      <button className="btn btn-primary" onClick={() => {
        ConfirmarCompra();
      }}>Confirmar compra</button>
    </div>
  );

  function ConfirmarCompra(){
    Swal.fire({
        title: "Quieres confirmar tu compra?",
        html: "<p>Total a pagar: $" + TotCar + "<br>Total de productos: " + TotProd + "</p>",
        icon: "question",
        showCancelButton: true,
        showConfirmButton: true,
      });
  }
}

export default Carrito;
