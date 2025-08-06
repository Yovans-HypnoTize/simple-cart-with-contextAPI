import { useState } from "react";
import { CartContext } from "./Context";

const ContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
