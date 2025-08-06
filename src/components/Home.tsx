import { faker } from "@faker-js/faker";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: Math.floor(Number(faker.commerce.price())),
    image: faker.image.dataUri(),
  }));

  const [products] = useState(productArray);

  return (
    <div className="productContainer" style={{}}>
      {products.map((product) => {
        return <SingleProduct product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Home;
