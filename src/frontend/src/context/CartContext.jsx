import { createContext, useContext, useEffect, useState } from "react";
import { backend, createActor } from "../declarations";
import { AuthContext } from "./AuthContext";
import Carrito from "../components/carrito";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const { isAuthenticaded, Identidad } = useContext(AuthContext);
  const [Cart, setCart] = useState([]);
  

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

  const getCarrito = async () => {
    if (isAuthenticaded) {
      try {
        const resultado = await backend.getCart();
        if ("ok" in resultado) {
          setCart(resultado.ok);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const AnadirCarrito = async (id, cantidad) => {
    try {
      await backend.addToCart(id, BigInt(cantidad));
      await getCarrito();
      console.log(Cart);
    } catch (err) {
      console.log(err);
    }
  };

  const ActualizarCar = async (id, cantidad) => {
    if (isAuthenticaded) {
      try {
        await backend.updateQuantity(id, BigInt(cantidad));
        await getCarrito();
      } catch (err) {
        console.log(err);
      }
    }
  };

const borrarCar = async (id) => {
if(isAuthenticaded){
    try{
        await backend.removeFromCart(id);
        console.log("morto");
        await getCarrito();
    }catch(err){
        console.log(err);
    }
}
}

  return (
    <CartContext.Provider
      value={{ Cart, getCarrito, ActualizarCar, AnadirCarrito, borrarCar }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const usarCarrito = () => useContext(CartContext);
