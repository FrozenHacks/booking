import { useMemo, useState } from "react";

//  COMPONENTS
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaRegStar,
  FaRegStarHalfStroke,
} from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

//  TYPES
import { TEventsCard } from "../../types/Components";

const EventsCard = ({ data }: TEventsCard) => {
  const [liked, setLiked] = useState(false);

  const starCalc = useMemo(() => {
    const whole = Math.floor(data.rating);
    const half = data.rating - whole !== 0;
    const empty = 5 - whole - (half ? 1 : 0);
    return { complete: whole, half, empty };
  }, [data.rating]);

  const toggleLike = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      setLiked(!liked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-2xl flex flex-col h-full ml-4 mr-4 text-white">
      {/* IMAGE CODE */}
      <div className="w-[230px] rounded-xl overflow-hidden h-[300px] text-black relative">
        <img
          src={"/".concat(data.image)}
          alt="Madison"
          className="object-cover w-full h-full"
        />
        <div className="top-4 right-4 absolute">
          {liked ? (
            <button onClick={toggleLike}>
              <FaHeart className="text-red-600" />
            </button>
          ) : (
            <button onClick={toggleLike}>
              <FaRegHeart className="text-white" />
            </button>
          )}
        </div>
      </div>
      {/* INFORMATIONAL CODE */}
      <div className="h-fit flex flex-col w-full mt-2">
        <div className="flex flex-col text-white">
          <span>{data.title}</span>
          <div className="flex items-center gap-2">
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
            </div>
            <p className="text-[12px] font-light">{data.rating} out of 5</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="/icons/calender.png"
              alt="cal"
              className="object-fit w-4 h-4"
            />
            <p className="text-white/70 text-[13px]">{data.dateTime}</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <IoLocationSharp />
            <p className="text-white/70 text-[13px]">{data.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
