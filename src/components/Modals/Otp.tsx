import axios from "axios";
import { useState } from "react";

const Otp = () => {
  const phone = 9988000099;
  const [otp, setOtp] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const BASEURL = import.meta.env.VITE_BACKEND_BASE_URL;

  const sendOTP = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      const resp = await axios({
        url: `${BASEURL}/SMS/verify.php`,
        method: "POST",
        headers: {},
        data: {
          code: `${otp[1]
            .toString()
            .concat(otp[2].toString())
            .concat(otp[3].toString())
            .concat(otp[4].toString())
            .concat(otp[5].toString())
            .concat(otp[6].toString())}`,
          phone_number: phone,
          ccode: "+91",
        },
      });
      if (resp.status === 200) {
        //  TODO: NOTIFY USER
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  ! THERE IS NO <ENDPOINT></ENDPOINT> FOR THIS IG JUST USE THE SENDOTP
  const resendOtp = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      const resp = await axios({
        method: "POST",
        headers: {},
        data: {},
      });
      if (resp.status == 200) {
        //  TBD
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-8 px-2 py-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/otp.gif"
          alt="OTP"
          className="w-[120px] h-[120px] rounded-full object-cover"
        />
        <h2 className="text-3xl font-medium">Enter OTP</h2>
        <p className="text-sm">
          Please enter the OTP sent to +91{" "}
          {phone.toString().replace(/^\d{6}/, "******")}
        </p>
      </div>

      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex items-center gap-5">
          {new Array(6).fill(null).map((_, index) => {
            return (
              <input
                required
                key={index}
                inputMode="numeric"
                maxLength={1}
                type="number"
                className="border-[#808080]/70 text-center rounded-lg w-16 h-16 border-[0.5px] no-spinners"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.slice(0, 1);
                }}
                onChange={(e) => {
                  if (e.target.value.length > 1) return;
                  const numb = parseInt(e.target.value) || 0;
                  setOtp((prev) => ({
                    ...prev,
                    [index]: numb,
                  }));
                }}
              />
            );
          })}
        </div>
        <span className="text-sm">
          Do not press the back or refresh button, if OTP is not received in 60
          seconds, click{" "}
          <button
            onClick={resendOtp}
            className="text-website-purple font-medium"
          >
            Resend OTP
          </button>
        </span>
      </div>
      <button
        onClick={sendOTP}
        className="w-[120px] text-center h-[40px] rounded-lg bg-website-purple text-xl text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Otp;
