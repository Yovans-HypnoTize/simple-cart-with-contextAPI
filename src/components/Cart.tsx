import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "./Context";

const Cart = () => {
  const { cart } = useContext<any>(CartContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart?.reduce((acc: number, currentVal: any) => acc + currentVal.price, 0)
    );
  }, [cart]);
  return (
    <div>
      <div className="cart-header" style={{ margin: "5px 40px" }}>
        <p style={{ fontSize: 30, fontWeight: 600 }}>My Cart</p>
        <p style={{ color: "#474646ff" }}>
          Total Items: <b>{cart.length}</b>
        </p>
        <p style={{ color: "#474646ff" }}>
          Total Amount: Rs. <b>{total}</b>
        </p>
      </div>
      <div className="productContainer">
        {cart.length > 0 ? (
          cart?.map((product: any) => <SingleProduct product={product} />)
        ) : (
          <div
            className="empty-cart"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              width: "100vw",
            }}
          >
            <p style={{ fontSize: 30, fontWeight: 600, color: "gray" }}>
              No items added yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
