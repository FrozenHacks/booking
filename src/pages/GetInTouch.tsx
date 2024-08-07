//  COMPONENTS
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className="bg-website-purple bg-gradient-to-b from-website-purple-dark to-website-purple relative flex flex-col w-screen h-screen gap-20 px-40 py-10">
      <img
        src="/telephone.png"
        alt="tele"
        className="absolute top-0 left-0 object-cover w-full h-full bg-center"
      />
      <div className="z-30 flex flex-col items-center w-full h-full text-white">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-5xl tracking-wide">Get in touch with us!!</h2>
          <h4 className="text-lg font-light tracking-wide">
            For any further queries, drop in a mail or a call and we will get
            back to you
          </h4>
        </div>

        <div className="w-fit flex gap-60 mt-36">
          <div className="flex items-center gap-2">
            <FaPhone />
            <p className="text-sm font-light">+91 - 9999999999</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <p className="text-sm font-light">abc@email.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationPin />
            <p className="text-sm font-light">Chennai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
