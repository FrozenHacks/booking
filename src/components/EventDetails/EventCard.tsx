import { useRef } from "react";

//  COMPONENTS
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const EventCard = () => {
  //  * TEMP STUFF
  const data = useRef({
    image: "madisonp.jpg",
    title: "Sunburn Music Fest",
    rating: 4.5,
    dateTime: "June 10th | 5PM Onwards",
    location: "Nehru Park, Chennai",
  });

  const notes = useRef([
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem, ipsum.",
    "Lorem ipsum dolor sit amet consectetur.",
  ]);

  const starCalc = (() => {
    const whole = Math.floor(data.current.rating);
    const half = data.current.rating - whole !== 0;
    const empty = 5 - whole - (half ? 1 : 0);
    return { complete: whole, half, empty };
  })();

  const showOnMap = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      //  TBD
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-20 flex flex-col w-full mt-5">
      <img
        src="/madison.jpeg"
        alt="Madison"
        className="w-full h-[340px] object-cover"
      />

      {/* TOP DETAILS */}
      <div className="flex mt-4 w-full h-[66px] items-center justify-between">
        <div className="flex flex-col items-start justify-between w-1/2 h-full">
          <h3 className="text-xl text-white">{data.current.title}</h3>

          {/* PARTICULARS */}
          <div className="flex items-end gap-4">
            <div className="flex items-center gap-1">
              {new Array(starCalc.complete).fill(null).map((_, index) => {
                return (
                  <FaStar key={index} className="text-amber-400 text-[10px]" />
                );
              })}
              {starCalc.half && (
                <FaRegStarHalfStroke className="text-amber-400 text-[10px]" />
              )}
              {new Array(starCalc.empty).fill(null).map((_, index) => {
                return (
                  <FaRegStar
                    key={index}
                    className="text-amber-400 text-[10px]"
                  />
                );
              })}
              <p className="text-white/80 ml-1">
                {data.current.rating} out of 5
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="/icons/calender.png"
                alt="cal"
                className="object-fit w-4 h-4"
              />
              <p className="text-white/70 text-[13px]">
                {data.current.dateTime}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <IoLocationSharp className="text-white/80" />
              <p className="text-white/70 text-[13px]">
                {data.current.location}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={showOnMap}
          className="flex border-[0.5px] border-white/50 bg-white/20 items-center justify-center w-[28px] rounded-lg p-1 h-[28px]"
        >
          <img src="/icons/map.png" alt="map" />
        </button>
      </div>

      {/* DETAILS */}
      <div className="h-fit flex items-start justify-between w-full mt-4">
        {/* ORGANISED BY */}
        <div className="flex flex-col flex-wrap w-3/12 h-full gap-3">
          <h5 className="font-medium text-white">Organised by</h5>
          <div className="flex items-center gap-2">
            <img
              src="/madisonp.jpg"
              alt="madison"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <p className="text-white/80 text-base font-light">Madison Beer</p>
          </div>
          <p className="text-white/70 text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            autem earum possimus voluptates, laborum quis architecto! Reiciendis
            cum facilis eos.
          </p>
        </div>

        {/* NOTE */}
        <div className="flex flex-wrap w-3/12 h-full gap-3">
          <h5 className="font-medium text-white">Note</h5>
          <div className="flex flex-col gap-0">
            {notes.current.map((str, index) => {
              return (
                <div key={index} className="flex items-center gap-1">
                  <BsDot className="text-white" />
                  <p className="text-white/70 text-sm font-light">{str}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ATTENDIES */}
        <div className="flex flex-col flex-wrap w-2/12 h-full gap-3">
          <h5 className="font-medium text-white">Attendies Info</h5>
          <div className="flex items-center">
            {new Array(5).fill(null).map((_, index) => {
              return (
                <img
                  key={index}
                  src="/madison1.jpg"
                  alt="madison"
                  className={`${
                    index === 0 ? null : "-ml-[20px]"
                  } w-[50px] h-[50px] object-cover rounded-full`}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-white/70 text-sm font-light">15 + Attendees</p>
            <button className="text-white/70 text-sm font-light">
              View All
            </button>
          </div>
        </div>

        {/* BUYING */}
        <div className="flex flex-col flex-wrap w-2/12 h-full gap-3">
          <h5 className="font-medium text-white">Rs. 70K</h5>
          <div className="flex flex-col items-start gap-3">
            <button className="bg-website-purple text-center text-white font-medium rounded-lg w-[194px] h-[48px]">
              Book Now
            </button>
            <button className="bg-inherit border-white border text-center text-white font-medium rounded-lg w-[194px] h-[48px]">
              Add to Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
