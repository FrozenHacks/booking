import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//  COMPONENTS
import { IoMdClose, IoMdTrendingUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuHistory } from "react-icons/lu";

//  SLICES
import { toggleSearchBarState } from "../slices/AppMechanics";

//  TYPES
import { RootState } from "../types/Slices";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const searchBarState = useSelector(
    (state: RootState) => state.AppMechanics.value.isSearchBarVisible
  );

  const closeSearchBar = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      dispatch(toggleSearchBarState(!searchBarState));
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-[60] absolute top-0 left-0 bg-white h-screen overflow-y-scroll flex flex-col w-screen px-40 pt-10 pb-20">
      <div className="h-fit flex items-center justify-between w-full">
        <h3 className="text-website-purple text-2xl font-medium">
          Search your event
        </h3>
        <button onClick={closeSearchBar} className="w-fit h-fit">
          <IoMdClose />
        </button>
      </div>

      <div className="flex items-center gap-4 w-full h-[44px] flex-shrink-0 px-4 border border-gray-400 mt-8 rounded-lg outline-none border-1">
        <button className="w-fit h-fit">
          <CiSearch />
        </button>
        <input
          required
          type="text"
          value={search}
          placeholder="Type to search"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-none outline-none"
        />
      </div>

      {/* RECENT SEARCH */}
      <div className="flex flex-col w-full mt-10">
        <div className="flex items-center gap-2">
          <LuHistory className="text-website-purple/70 text-lg" />
          <h4 className="text-website-purple/70 text-lg">Recent Search</h4>
        </div>
        <div className="flex flex-col gap-0.5 w-full mt-2">
          {new Array(3).fill(null).map((_, index) => {
            return (
              <div
                key={index}
                className="bg-yellow-0 flex items-center gap-4 py-2 border-b border-gray-300"
              >
                <img
                  src="/madison.jpeg"
                  alt="mad"
                  className="w-9 h-9 object-cover rounded-full"
                />
                <p className="text-base tracking-wide text-gray-600">
                  Some Event at Singapore
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* TRENDING */}
      <div className="flex flex-col w-full mt-6">
        <div className="flex items-center gap-2">
          <IoMdTrendingUp className="text-website-purple/70 text-lg" />
          <h4 className="text-website-purple/70 text-lg">Trending Events</h4>
        </div>
        <div className="flex flex-col gap-0.5 w-full mt-2">
          {new Array(4).fill(null).map((_, index) => {
            return (
              <div
                key={index}
                className="bg-yellow-0 flex items-center gap-4 py-2 border-b border-gray-300"
              >
                <img
                  src="/madison.jpeg"
                  alt="mad"
                  className="w-9 h-9 object-cover rounded-full"
                />
                <p className="text-base tracking-wide text-gray-600">
                  Some Event at chennai
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
