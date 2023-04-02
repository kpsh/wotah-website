import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 25,
      quantity: 1,
      image: "https://source.unsplash.com/random/200x200/?water",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 2,
      image: "https://source.unsplash.com/random/200x200/?water",
    },
    {
      id: 3,
      name: "Product 3",
      price: 100,
      quantity: 1,
      image: "https://source.unsplash.com/random/200x200/?water",
    },
  ]);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-cartbg bg-cover bg-no-repeat bg-center flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-3/4 container mx-auto p-12">
        <h2 className="text-5xl font-semibold text-center pt-32 lg:pt-0 pb-8 lg:pb-24 drop-shadow-lg text-white">
          Shop Items
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="hover:bg-white/80 bg-gray-100/50 backdrop-blur rounded-md flex items-center flex-col lg:flex-row lg:items-start p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <span className="p-0 lg:p-4 w-full lg:w-fit">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-white px-2 py-1 rounded-md bg-gray-800/60 flex items-center gap-1">
                  <FaDollarSign />
                  {item.price}
                </p>
                <p className="text-white px-2 py-1 my-2 rounded-md bg-gray-600/60">Quantity: {item.quantity}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/4 lg:h-screen bg-gray-300/80 backdrop-blur p-5 py-36">
        <h2 className="text-2xl font-semibold mb-8">Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.name}</p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between mb-2">
            <p className="font-semibold text-lg">Total:</p>
            <p>${getTotal()}</p>
          </div>
          <button
            type="button"
            className="bg-gray-900/50 backdrop-blur hover:bg-gray-900/80 text-white rounded-md font-bold text-xl py-4 px-4 focus:outline-none w-full"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
