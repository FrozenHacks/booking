import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

//  COMPONENTS
import { IoSearchSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

//  SLICES
import {
  toggleCitiesModalState,
  toggleModalState,
  toggleSearchBarState,
  toggleSignInModalState,
} from "../slices/AppMechanics";

//  TYPES
import { RootState } from "../types/Slices";
import { TNavbar } from "../types/Components";

const Navbar = ({ ModalRef }: TNavbar) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const modalState = useSelector(
    (state: RootState) => state.AppMechanics.value.isModalVisible
  );
  const signInModalState = useSelector(
    (state: RootState) => state.AppMechanics.value.isSignInModalVisible
  );
  const searchBarState = useSelector(
    (state: RootState) => state.AppMechanics.value.isSearchBarVisible
  );

  const signIn = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      dispatch(toggleModalState(!modalState));
      dispatch(toggleSignInModalState(!signInModalState));
      if (ModalRef.current) {
        (() => {
          ModalRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        })();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white/30 flex z-50 fixed top-4 items-center justify-between w-[80%] h-[56px] px-6 py-4 mt-6 rounded-full backdrop-blur-md">
      <div className="flex items-center justify-between gap-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <div className="bg-white h-[40px] w-[40px] rounded-full"></div>
          <p className="text-website-offwhite text-2xl font-normal">Bukit</p>
        </button>
        <button
          onClick={() => navigate("/events")}
          className={`${
            location === "/events" ? "text-website-purple-dark" : "text-white"
          } text-base`}
        >
          Events
        </button>
        <button
          className={`${
            location === "/contact-us"
              ? "text-website-purple-dark"
              : "text-white"
          } text-base`}
        >
          Contact Us
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(toggleSearchBarState(!searchBarState))}
          >
            <IoSearchSharp className="text-xl font-extrabold text-white" />
          </button>
          <button
            onClick={() => dispatch(toggleCitiesModalState(true))}
            className="flex items-center hover:bg-white/20 duration-700 ease-in-out transition-all px-1.5 rounded-full py-1 gap-0"
          >
            <MdLocationOn className="mr-1 text-xl text-white" />
            <p className="text-base text-white">Chennai</p>
            <FaAngleDown className="ml-4 text-white" />
          </button>
        </div>

        <button
          onClick={signIn}
          className="bg-website-purple w-28 items-center justify-center py-2 rounded-md"
        >
          <p className="font-normal text-white">Sign In</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
