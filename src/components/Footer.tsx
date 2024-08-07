//  COMPONENTS
import {
  FaSquareFacebook,
  FaInstagram,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigateToSocials = (e: React.MouseEvent, social: string) => {
    try {
      e.preventDefault();
      switch (social) {
        case "Facebook":
          console.log(social);
          break;
        case "Instagram":
          console.log(social);
          break;
        case "X":
          console.log(social);
          break;
        default:
          console.log(social);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="bg-website-purple-dark h-fit flex flex-col items-center justify-center w-screen gap-8 px-40 py-8">
      <div className="h-fit border-white/40 z-40 flex flex-col w-full pb-8 border-b">
        <div className="flex items-start justify-between w-full">
          {/* SECTOR 1 */}
          <div className="flex flex-col gap-0">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <div className="bg-white h-[30px] w-[30px] rounded-full"></div>
              <p className="text-website-offwhite text-xl font-normal">
                Event Booking
              </p>
            </button>
            <span className="w-52 mt-4 text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>

          {/* SECTOR 2 */}
          <div className="flex flex-col items-start gap-5">
            <button className="text-sm font-light text-white">Events</button>
            <button className="text-sm font-light text-white">Bookings</button>
            <button
              onClick={() => navigate("/contact-us")}
              className="text-sm font-light text-white"
            >
              Contact Us
            </button>
          </div>

          {/* SECTOR 3 */}
          <div className="flex flex-col items-start gap-5">
            <button
              onClick={() => navigate("/terms-and-conditions")}
              className="text-sm font-light text-white"
            >
              Terms and Conditions
            </button>
            <button
              onClick={() => navigate("/privacy-policy")}
              className="text-sm font-light text-white"
            >
              Privacy Policy
            </button>
          </div>

          {/* SECTOR 4*/}
          <div className="flex flex-col items-start gap-5">
            <span className="text-sm font-light text-white">Socials</span>
            <div className="flex gap-2">
              <button onClick={(e) => navigateToSocials(e, "Facebook")}>
                <FaSquareFacebook className="text-white" />
              </button>
              <button onClick={(e) => navigateToSocials(e, "Instagram")}>
                <FaInstagram className="text-white" />
              </button>
              <button onClick={(e) => navigateToSocials(e, "X")}>
                <FaXTwitter className="text-white" />
              </button>
              <button onClick={(e) => navigateToSocials(e, "Threads")}>
                <FaThreads className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <span className="text-sm font-light text-white">Copy right BS</span>
      </div>
    </div>
  );
};

export default Footer;
