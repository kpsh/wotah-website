import { BsChevronDoubleDown } from "react-icons/bs";
import intro from "/pexels-mikhail-nilov-7677910.mp4";
import introSM from "/pexels-pixabay-461337.jpg";

export const Home = () => {
  return (
    <div className="bg-slate-900 relative">
      <video
        src={intro}
        autoPlay
        loop
        width={"100%"}
        className="hidden xl:block"
      ></video>
      <img
        src={introSM}
        alt="heroimg"
        className="block w-full h-screen object-cover xl:hidden"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-7xl xl:text-9xl font-bold text-white text-center">
        Wotah you waiting for?
        <br />
        <span className="animate-color-change-4x">Stay hydrated!</span>
      </h1>
    </div>
  );
};
