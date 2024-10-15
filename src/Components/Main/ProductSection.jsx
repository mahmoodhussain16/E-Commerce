import { useEffect, useState } from "react";

const API = "https://fakestoreapi.com/products";

const ProductSection = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []); 

  return (
    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((product) => (
          <div
            key={product.id}
            className="border-green-200 overflow-hidden rounded-lg border bg-white"
          >
            <img
              className="h-48 w-full object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="mb-4 text-gray-600">${product.price}</p>
              <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
