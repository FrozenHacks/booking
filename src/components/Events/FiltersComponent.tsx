import axios from "axios";
import { useEffect, useRef, useState } from "react";

//  COMPONENTS
import Calendar from "react-calendar";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineDateRange, MdGroups } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";

//  TYPES
import { Value } from "../../types/Components";

const FiltersComponent = () => {
  //  ! REPLACE WITH BACKEND DATA
  const temp = useRef([
    "All",
    "Music",
    "Tech",
    "Travel Adventure",
    "Comedy",
    "Theatre",
    "UX Workshops",
    "Photography",
    "Fashion",
  ]);
  const priceFilters = useRef([
    {
      id: "less-500",
      desc: "< than 500",
    },
    {
      id: "500-2000",
      desc: "500 to 2000",
    },
    {
      id: "2000-5000",
      desc: "2000 than 5000",
    },
    {
      id: "more-5000",
      desc: "> than 5000",
    },
  ]);
  const tempArtists = useRef([
    {
      name: "Arijit Singh",
      img: "/madison.jpeg",
      selected: false,
    },
    {
      name: "AR Rehman",
      img: "/madison1.jpg",
      selected: false,
    },
    {
      name: "Post Malone",
      selected: false,
      img: "/madison2.jpg",
    },
    {
      name: "The Weeknd",
      selected: false,
      img: "/madison3.jpg",
    },
    {
      name: "Rosaria",
      selected: false,
      img: "/madisonp.jpg",
    },
    {
      name: "Ariana Grande",
      selected: false,
      img: "/madisonp5.jpg",
    },
    {
      name: "Madison Beer",
      selected: false,
      img: "/madisonp6.jpg",
    },
  ]);

  const [price, setPrice] = useState("");
  const [artist, setArtist] = useState("");
  const [value, onChange] = useState<Value>(new Date());
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const filterEvents = async () => {
      try {
        const resp = await axios({
          method: "GET",
          url: "",
          headers: { category, price, artist },
        });
        if (resp.status == 200) {
          //  TBD
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (value || category || artist || price) filterEvents();
  }, [value, category, price, artist]);

  return (
    <div className="z-20 mt-5 shrink-0 h-fit w-[280px] flex flex-col">
      <h4 className="text-2xl tracking-wide text-white">Filters</h4>
      <div className="flex items-center gap-2 mt-4">
        <BiSolidCategory className="text-xl text-white" />
        <h4 className="text-xl tracking-wide text-white">Category</h4>
      </div>
      <div className="h-fit flex flex-wrap flex-shrink-0 w-full gap-3 mt-4">
        {temp.current.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`${
              category === cat
                ? "text-website-purple bg-white"
                : "text-white/90"
            } shrink-0 px-3 py-1 text-center text-sm border-[0.5px] border-white/40 rounded`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CALENDAR */}
      <div className="h-fit flex flex-col items-start w-full mt-8">
        <div className="flex items-center gap-2">
          <MdOutlineDateRange className="text-xl text-white" />
          <h4 className="text-xl tracking-wide text-white">Date</h4>
        </div>
        <div className="h-fit w-full mt-4">
          <Calendar value={value} onChange={onChange} />
        </div>
      </div>

      {/* PRICE */}
      <div className="h-fit flex flex-col items-start w-full mt-8">
        <div className="flex items-center gap-2">
          <IoIosPricetag className="text-xl text-white" />
          <h4 className="text-xl tracking-wide text-white">Price</h4>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {priceFilters.current.map((obj) => {
            return (
              <div key={obj.id} className="flex items-center gap-4">
                <input
                  id="less-500"
                  type="checkbox"
                  name="less-500"
                  className="outline-none"
                  onChange={() => {
                    setPrice(obj.desc);
                  }}
                />
                <label
                  htmlFor="less-500"
                  className="tracking-whide text-white/70 text-base font-light"
                >
                  {obj.desc}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* ARTISTS */}
      <div className="h-fit flex flex-col items-start w-full mt-8">
        <div className="flex items-center gap-2">
          <MdGroups className="text-2xl text-white" />
          <h4 className="text-xl tracking-wide text-white">Artists</h4>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {tempArtists.current.map((obj) => {
            return (
              <div key={obj.name} className="flex items-center gap-4">
                <input
                  id="less-500"
                  type="checkbox"
                  name="less-500"
                  onChange={() => {
                    setArtist(obj.name);
                  }}
                />
                <div className="flex items-center gap-1.5">
                  <img
                    src={obj.img}
                    alt="Artist"
                    className="object-cover rounded-full w-[36px] h-[36px]"
                  />
                  <label
                    htmlFor="less-500"
                    className="tracking-whide text-white/70 text-base font-light"
                  >
                    {obj.name}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FiltersComponent;
