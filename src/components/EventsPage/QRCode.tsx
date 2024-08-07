const QRCode = () => {
  const handleBtn = (e: React.MouseEvent, btn?: string) => {
    try {
      e.preventDefault();
      if (btn == "PS") console.log("Play store clicked!");
      else console.log("APp store clicked!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-fit z-40 flex w-full">
      <div className="mt-10 bg-white/25 w-full relative px-10 py-10 rounded-[40px] h-[350px] lg:h-fit lg:items-center justify-between flex">
        <div className="flex flex-col">
          <span className="lg:text-3xl xl:text-4xl text-4xl text-white">
            Check out our mobile app as well!!
          </span>
          <span className="text-white/80 lg:mt-1 xl:mt-4 mt-4 text-base font-light">
            Scan the QR code to download the app
          </span>

          {/* BTN */}
          <div className="flex gap-4 mt-16">
            <button
              onClick={(e) => handleBtn(e, "PS")}
              className="bg-website-purple-dark p-[12px] w-[228px] lg:w-[200px] xl:w-[228px] text-left rounded-[12px] flex gap-[12px] text-base text-white"
            >
              <img
                src="/icons/PlayStore.png"
                alt="PS"
                className="object-fit w-6 h-6"
              />
              Download the app on Playstore
            </button>
            <button
              onClick={(e) => handleBtn(e)}
              className="bg-website-purple-dark p-[12px] w-[228px] lg:w-[200px] xl:w-[228px] text-left rounded-[12px] flex gap-[12px] text-base text-white"
            >
              <img
                src="/icons/AppStore.png"
                alt="PS"
                className="object-fit w-6 h-6"
              />
              Download the app on Appstore
            </button>
          </div>
        </div>
        <div className="w-[260px] h-[260px] lg:w-[200px] xl:w-[260px] lg:h-[200px] xl:h-[260px] p-3 bg-white overflow-hidden rounded-[20px]">
          <img src="/QR.png" alt="QR" className="object-fit w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default QRCode;
