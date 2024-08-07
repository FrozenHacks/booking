import { useRef } from "react";

//  COMPONENTS
import Navbar from "../components/Navbar";
import FiltersComponent from "../components/Events/FiltersComponent";
import SearchResult from "../components/Events/SearchResult";
import Advertisement from "../components/Events/Advertisement";
import Footer from "../components/Footer";

const Events = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-fit relative flex flex-col items-center w-screen overflow-y-scroll">
      <Navbar ModalRef={ref} />
      <div className="py-28 bg-website-purple h-fit shrink-0 flex items-start w-full gap-5 px-40">
        <div className="opacity-40 absolute inset-0 z-10 bg-black"></div>
        <FiltersComponent />
        <SearchResult />
      </div>
      <Advertisement />
      <Footer />
    </div>
  );
};

export default Events;
