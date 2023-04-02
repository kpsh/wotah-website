import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="bg-contactbg bg-cover bg-no-repeat bg-center h-screen flex items-center p-5">
      <div className="container mx-auto">
      <h2 className="text-5xl text-white font-semibold text-center pt-12 pb-8 drop-shadow-lg">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 bg-gray-100/50 backdrop-blur p-3 rounded-lg">
            <label
              htmlFor="name"
              className="block font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded-md bg-gray-100/60 backdrop-blur"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 bg-gray-100/50 backdrop-blur p-3 rounded-lg">
            <label
              htmlFor="email"
              className="block font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-md bg-gray-100/60 backdrop-blur"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 bg-gray-100/50 backdrop-blur p-3 rounded-lg">
            <label
              htmlFor="message"
              className="block font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full p-2 rounded-md bg-gray-100/60 backdrop-blur"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-100/50 backdrop-blur py-4 px-10 text-lg rounded-md hover:bg-gray-100/70 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
