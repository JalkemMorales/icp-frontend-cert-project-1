import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { backend, createActor } from "../declarations";
import "../css/carrito.css";
import { CartContext } from "../context/CartContext";

function Carrito() {
  const { isAuthenticaded, Identidad } = useContext(AuthContext);
  const { Cart, getCarrito, ActualizarCar, borrarCar } = useContext(CartContext);

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
    obtenerCar();
  }, []);

  async function obtenerCar() {
    if(isAuthenticaded){
        getCarrito();
    }else{
        window.location.href = '/';
    }
    
  }

  return (
    <div class="master">
      {Cart.map((producto, id) => (
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
                <h5 class="card-title">
                  <b>Nombre:</b> {producto.product.name}
                  <br />
                  Descripcion: {producto.product.description}
                  <br />
                  Precio: {producto.product.price}
                  <br />
                </h5>
                <p class="card-text">Cantidad:</p>
                <input
                  type="number"
                  defaultValue={String(producto.quantity)}
                  onChange={(e) => (producto.Newquantity = e.target.value)}
                />
                &nbsp;
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    Actualizar(producto.product.id, producto.Newquantity)
                  }
                >
                  Actualizar cantidad
                </button>
                <p class="card-text">
                  Precio total:{" "}
                  {Number(producto.quantity) * Number(producto.product.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btn btn-primary"
        onClick={() => {
          ConfirmarCompra();
        }}
      >
        Confirmar compra
      </button>
    </div>
  );

  async function Actualizar(id, cantidad) {
    if (isAuthenticaded) {
      if (cantidad <= 0) {
        try {
          Swal.fire({
            title: "Deseas borrar este producto?",
            icon: "question",
            showCancelButton: true,
            showConfirmButton: true,
          }).then(async (result) => {
            if(result.isConfirmed){
                try{
                    Swal.fire({
                        title: "",
                        html: "<p>Por favor, espere a que se elimine el producto de su carrito.</p><div class='spinner-border text-success' role='status'><span class='visually-hidden'>Loading...</span></div>",
                        showConfirmButton: false,
                        backdrop: 'rgba(0, 0, 0, 0.5)',
                        allowOutsideClick: false
                      });
                    await borrarCar(id);
                    Swal.fire({
                        title: "Logrado",
                        text: "Se ha borrado exitosamente",
                        icon: "success",
                        allowOutsideClick: false
                      }).then((result) => {
                        if (result.isConfirmed || result.dismiss) {
                            window.location.href = '/';
                        }});
                }catch(err){
                    console.log(err);
                }
            }
        });
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
        Swal.fire({
                title: "",
                html: "<p>Por favor, espere a que se actualice su carrito.</p><div class='spinner-border text-success' role='status'><span class='visually-hidden'>Loading...</span></div>",
                showConfirmButton: false,
                backdrop: 'rgba(0, 0, 0, 0.5)',
                allowOutsideClick: false
              });
          await ActualizarCar(id, BigInt(cantidad));
          await getCarrito();
          Swal.fire({
            title: "Logrado",
            text: "Se ha actualizado la cantidad",
            icon: "success",
          }).then(() => {});
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Hubo un error al guardar: " + err,
          });
        }
      }
    }
  }

  async function ConfirmarCompra() {
    try {
      await Cart.map((producto, id) => {
        Total =
          Total + Number(producto.quantity) * Number(producto.product.price);
        TotalProd = TotalProd + Number(producto.quantity);
      });
      Swal.fire({
        title: "Quieres confirmar tu compra?",
        html:
          "<p>Total a pagar: $" +
          Total +
          "<br>Total de productos: " +
          TotalProd +
          "</p>",
        icon: "question",
        showCancelButton: true,
        showConfirmButton: true,
      });
      TotalProd = 0;
      Total = 0;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Carrito;
