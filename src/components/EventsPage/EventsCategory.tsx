import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

//  COMPONENTS
import EventsCard from "./EventsCard";
import { IoIosTrendingUp } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

//  TYPES
import { TEventsCategory } from "../../types/Components";

const EventsCategory = ({ data }: TEventsCategory) => {
  const options = {
    loop: false,
    startIndex: 0,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative z-40 w-full h-full text-white">
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-2">
            <IoIosTrendingUp />
            <span className="text-xl text-white">{data.title}</span>
          </div>
          <button className="text-white/70 text-sm">View All</button>
        </div>
        <div ref={emblaRef} className="embla__viewport relative w-full h-full">
          <div className="embla__container items-center">
            {data.carousel.map((obj, index) => (
              <EventsCard key={index} data={obj} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 relative !z-50 flex justify-end w-full">
        <div className="embla__buttons ">
          <button
            className="embla__prev hover:bg-white/70 p-3 mr-4 text-black transition-all ease-out bg-white rounded"
            onClick={scrollPrev}
          >
            <MdArrowBackIos />
          </button>
          <button
            className="embla__next hover:bg-white/70 p-3 text-black transition-all ease-out bg-white rounded"
            onClick={scrollNext}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCategory;
