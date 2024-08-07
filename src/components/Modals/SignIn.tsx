import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//  COMPONENTS
import { IoMdClose } from "react-icons/io";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

//  SLICES
import {
  toggleModalState,
  toggleSignInModalState,
  toggleSignUpModalState,
} from "../../slices/AppMechanics";

//  TYPES
import { RootState } from "../../types/Slices";

const SignIn = () => {
  const dispatch = useDispatch();

  const BASEURL = import.meta.env.VITE_BACKEND_BASE_URL;
  const modalState = useSelector(
    (state: RootState) => state.AppMechanics.value.isModalVisible
  );
  const signInModalState = useSelector(
    (state: RootState) => state.AppMechanics.value.isSignInModalVisible
  );
  const [userDetails, setUserDetails] = useState({
    phone: "",
    password: "",
    rememberPassword: false,
  });
  const [hidden, setHidden] = useState(true);

  const generateToken = async (authenticator?: string) => {
    try {
      const URL =
        authenticator === "Google"
          ? `${BASEURL}/user_api/u_google_reg.php`
          : authenticator === "Apple"
          ? "apple's endpoint"
          : `${BASEURL}/user_api/u_login_user.php`;

      const resp = await axios({
        url: URL,
        method: "POST",
        headers: {},
        data: {
          name: "",
          email: "",
        },
      });
      if (resp.status === 200) {
        // ! TBD
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInWith = async (e: React.MouseEvent, string?: string) => {
    try {
      e.preventDefault();
      if (string === "Google") {
        //  TODO: USE GOOGLE AUTH
        // AFTER THAN SHAKE HAND WITH BACKEND WITH USER DETAILS
        generateToken(string);
      } else if (string === "Apple") {
        //  TODO: USE APPLE AUTH
        // AFTER THAN SHAKE HAND WITH BACKEND WITH USER DETAILS
        generateToken(string);
      } else {
        generateToken();
      }
      dispatch(toggleSignInModalState(!signInModalState));
      dispatch(toggleModalState(!modalState));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-2">
      <div className="relative flex items-center justify-center w-full">
        <span className="text-3xl font-medium">Sign in</span>
        <button
          onClick={() => {
            dispatch(toggleModalState(false));
            dispatch(toggleSignInModalState(false));
            dispatch(toggleSignUpModalState(false));
          }}
          className="absolute right-0"
        >
          <IoMdClose className="text-lg" />
        </button>
      </div>
      <span className="mt-5 text-lg">Welcome back you have been missed!</span>

      <div className="flex flex-col items-center gap-5 mt-8">
        <button
          onClick={(e) => signInWith(e, "Google")}
          className="gap-4 border-[#808080] border-[0.5px] w-[400px] h-[44px] justify-center rounded-md flex items-center"
        >
          <FcGoogle className="text-2xl" />
          <p className="text-lg font-light">Login with Google</p>
        </button>
        <button
          onClick={(e) => signInWith(e, "Apple")}
          className="gap-4 border-[#808080] border-[0.5px] w-[400px] h-[44px] justify-center rounded-md flex items-center"
        >
          <GrApple className="text-2xl text-[#A2AAAD]" />
          <p className="text-lg font-light">Login with Apple</p>
        </button>
      </div>
      <div className="flex items-center w-full gap-8 mt-8">
        <div className="w-full h-[1px] bg-slate-800"></div>
        <p className="">Or</p>
        <div className="w-full h-[1px] bg-slate-800"></div>
      </div>

      <div className="flex flex-col items-start w-full gap-4 mt-4">
        <span>Enter details to Login</span>

        <form className="flex flex-col w-full gap-4">
          <div className="flex rounded-md items-center px-4 h-[44px] border-[#808080] border-[0.5px]">
            <div className="shrink-0 flex gap-4 px-2">
              <div className="flex border-r-2 pr-2 border-[#808080] gap-2">
                <img
                  src="/icons/india-flag-icon.svg"
                  alt="Flag"
                  className="w-[24px] h-[16px] object-contain"
                />
                <button>
                  <FaCaretDown />
                </button>
              </div>
            </div>
            <span className="w-10">+ 91</span>
            <input
              className="w-full px-2 tracking-wider border-none outline-none"
              value={userDetails.phone}
              type="text"
              placeholder="Enter your Phone Number"
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          </div>

          <div className="flex rounded-md items-center px-4 h-[44px] border-[#808080] border-[0.5px]">
            <div className="shrink-0 relative flex items-center w-full gap-4 px-2">
              <CiLock className="text-xl font-semibold text-black" />
              <input
                type={!hidden ? "text" : "password"}
                value={userDetails.password}
                placeholder="Password"
                className="w-full px-2 border-none outline-none"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <button onClick={() => setHidden(!hidden)}>
                {hidden ? (
                  <IoEyeOff className="text-[#808080] text-xl" />
                ) : (
                  <IoEyeSharp className="text-[#808080] text-xl" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="password-cb"
                id="password-cb"
                checked={userDetails.rememberPassword}
                onChange={() =>
                  setUserDetails((prev) => ({
                    ...prev,
                    rememberPassword: !prev.rememberPassword,
                  }))
                }
              />
              <label htmlFor="password-cb">Remember me</label>
            </div>
            <span className="text-red-400 cursor-pointer pointer-events-auto">
              Forgot password?
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-website-purple text-white text-xl flex items-center justify-center w-[120px] h-[40px] rounded-[8px]">
              Sign in
            </button>
            <span className="flex items-center gap-1">
              <p>Don't have an account?</p>
              <button
                onClick={() => {
                  dispatch(toggleSignUpModalState(true));
                  dispatch(toggleSignInModalState(false));
                }}
                className="text-website-purple font-medium"
              >
                Create one
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
