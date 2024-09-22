import { useContext, useEffect, useState } from "react";
import { backend, createActor } from "../declarations";
import "../css/productos.css";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

function Productos() {
  const { isAuthenticaded, Identidad } = useContext(AuthContext);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  let Canister = process.env.CANISTER_ID_BACKEND;

  let backend = createActor(Canister, {
    agentOptions: {
        identity: Identidad,
      host: "http://localhost:4943",
    },
  });

  async function getProducts() {
    try {
      const result = await backend.getProducts();
      setProductos(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function AgregarCarrito(id, cantidad) {
    if (isAuthenticaded) {
      if (cantidad) {
        if (cantidad > 0 && cantidad < 99) {
          try {
            await backend.addToCart(id, BigInt(cantidad));
            Swal.fire({
              title: "Se ha agregado",
              text: "Se ha agregado al carrito.",
              icon: "success",
            });
          } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error...",
                text: "Hubo un error al guardar en el carrito: " + err,
              });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Ingrese un numero válido.",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "Favor de ingresar una cantidad.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Debes de estar autenticado para agregar productos a tu carrito",
      });
    }
  }

  return (
    <div class="master">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto, id) => (
          <div class="col">
            <div class="card h-100" key={id}>
              <img src={producto.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{producto.name}</h5>
                <p class="card-text">{producto.description}</p>
                <p class="card-text text-body-secondary">
                  Precio: {producto.price}
                </p>
                <input
                  type="number"
                  placeholder="0"
                  class="cantidad"
                  onChange={(e) => (producto.quantity = e.target.value)}
                />
                <button
                  class="btn btn-primary"
                  onClick={() => AgregarCarrito(producto.id, producto.quantity)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
