import { useContext } from "react";
import { CartContext } from "./Context";

const SingleProduct = ({ product }: any) => {
  const { cart, setCart } = useContext<any>(CartContext);
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="productImg" />
      <div className="product_description">
        <p className="textCenter fw600">{product.name}</p>
        <p className="textCenter fw500">₹{product.price}</p>
        <div className="card-actions-container">
          {cart?.includes(product) ? (
            <button
              className="remove_from_cart_btn"
              onClick={() => {
                setCart(cart.filter((cp: any) => cp.id !== product.id));
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className="add_to_cart_btn"
              onClick={() => {
                setCart([...cart, product]);
              }}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
