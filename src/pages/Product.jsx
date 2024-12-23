import React, { useEffect, useState } from "react";
import Card from "../components/Cards";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/product/getProduct");

      const data = await res.json();
      console.log(data)
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-10 py-10">
        {products &&
          products.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.images[0]}
                  price={item.price}
                />
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default Product;