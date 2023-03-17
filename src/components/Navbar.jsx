import { useState } from "react";
import { Link } from "react-router-dom";
import { BsDropletFill } from "react-icons/bs";
import { FaBars, FaHeadset, FaShoppingCart, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="animate-slide-in-top bg-white bg-opacity-10 backdrop-blur-2xl lg:backdrop-blur-lg w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 hover:animate-scale-in-center">
            <Link
              to="/"
              className="text-white font-bold text-2xl inline-flex items-center"
            >
              <BsDropletFill className="text-4xl" />
              Wotah
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="text-white ml-10 flex items-baseline space-x-4">
              <Link
                to="/products"
                className="hover:bg-gray-100/10 hover:backdrop-blur-lg rounded-2xl px-3 py-2 text-xl font-medium"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="hover:bg-gray-100/10 hover:backdrop-blur-lg rounded-2xl px-3 py-2 text-xl font-medium"
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="hover:bg-gray-100/10 hover:backdrop-blur-lg rounded-2xl px-3 py-2 text-xl font-medium"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-white ml-4 gap-5 flex items-center md:ml-6">
              <Link
                to="/cart"
                className="hover:bg-gray-100/10 hover:backdrop-blur-lg hover:animate-scale-in-center p-3 rounded-full text-2xl font-medium"
              >
                <FaShoppingCart />
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden text-white">
            <Link
              to="/cart"
              className="bg-gray-700/40 hover:bg-gray-700/90 backdrop-blur-lg p-3 mr-3 rounded-md text-xl"
            >
              <FaShoppingCart />
            </Link>
            <button
              type="button"
              className="bg-gray-700/40 px-2.5 py-2 rounded-md hover:bg-gray-700/90"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="text-2xl" />
              ) : (
                <FaTimes className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={isOpen ? "block" : "hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white flex flex-col [&>a]:rounded-md [&>a]:px-3 [&>a]:py-2 text-base font-bold">
          <Link to="/products" className="hover:bg-gray-700/40">
            Products
          </Link>
          <Link to="/contact" className="hover:bg-gray-700/40">
            Contact
          </Link>
          <Link to="/faq" className="hover:bg-gray-700/40">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};
