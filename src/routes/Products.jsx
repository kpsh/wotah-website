import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaDollarSign } from "react-icons/fa";

export const Products = () => {
  const products = [
    {
      id: 1,
      url: "/products/prod1",
      title: "Product 1",
      image: "/pexels-cottonbro-studio-4068321.jpg",
      price: "19.99",
    },
    {
      id: 2,
      url: "/products/prod2",
      title: "Product 2",
      image: "/pexels-ekaterina-bolovtsova-6766258.jpg",
      price: "29.99",
    },
    {
      id: 3,
      url: "/products/prod3",
      title: "Product 3",
      image: "/pexels-mart-production-8217434.jpg",
      price: "39.99",
    },
    {
      id: 4,
      url: "/products/prod4",
      title: "Product 4",
      image: "/pexels-tima-miroshnichenko-6612380.jpg",
      price: "49.99",
    },
    {
      id: 5,
      url: "/products/prod5",
      title: "Product 5",
      image: "/pexels-cottonbro-studio-4068321.jpg",
      price: "59.99",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [numOfItems, setNumOfItems] = useState(1);

  const handlePrevClick = () => {
    setActiveIndex(
      activeIndex === 0 ? products.length - numOfItems : activeIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex(
      activeIndex === products.length - numOfItems ? 0 : activeIndex + 1
    );
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1366) {
      setNumOfItems(4);
    } else if (width >= 1024) {
      setNumOfItems(3);
    } else {
      setNumOfItems(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProducts = products.slice(activeIndex, activeIndex + numOfItems);

  return (
    <section className="bg-[url('/pexels-pixabay-355518.jpg')] bg-cover bg-no-repeat bg-center h-screen flex items-center">
      <div className="container mx-auto text-white">
        <h2 className="text-5xl font-semibold text-center pt-12 pb-8 drop-shadow-lg">
          Products
        </h2>

        <div className="flex items-center ml-5">
          <button
            className="p-2 mr-1 rounded-l-full bg-gray-100/50 backdrop-blur hover:bg-gray-100/70 focus:outline-none"
            onClick={handlePrevClick}
          >
            <FaArrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="p-2 rounded-r-full bg-gray-100/50 backdrop-blur hover:bg-gray-100/70 focus:outline-none"
            onClick={handleNextClick}
          >
            <FaArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className={`flex transition-all duration-300 min-h-3/4 ease-in-out ${
              numOfItems === 1 ? "w-full" : ""
            }`}
          >
            {visibleProducts.map((product) => (
              <a
                // href={product.url}
                key={product.id}
                className={`w-full md:w-1/${numOfItems} hover:animate-color-change-2x p-2 md:p-4 bg-gray-100/50 backdrop-blur rounded-lg m-5`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="inset-0 w-full h-fit aspect-square object-cover transition-all duration-300 rounded-md"
                />
                <li className="flex justify-between items-end mt-5">
                  <h3 className="text-lg text-gray-900 font-medium">
                    {product.title}
                  </h3>
                  <p className="text-white px-2 py-1 rounded-md bg-gray-800/60 flex items-center gap-1">
                    <FaDollarSign />
                    {product.price}
                  </p>
                </li>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
