import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url("https://wallpapers.com/images/high/4k-avengers-title-logo-rqbrq32uc7af1dro.webp")`
      }}
    >
      <div className="text-white text-2xl bg-blue-900/60 w-full text-center p-4">Avengers EndGame</div>
    </div>
  );
};

export default Banner;
