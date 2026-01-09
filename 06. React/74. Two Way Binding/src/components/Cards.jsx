import React from "react";
import img1 from "../assets/01_img.png";
import img2 from "../assets/02_img.png";
import img3 from "../assets/03_img.png";
import img4 from "../assets/04_img.png";
import img5 from "../assets/05_img.png";
import img6 from "../assets/06_img.png";
import img7 from "../assets/07_img.png";
import img8 from "../assets/08_img.png";
import img9 from "../assets/09_img.png";

const Cards = ({id, name, email, role, desc, imageIndex, removeHandler }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div
      className="
        flex flex-col justify-between w-[20%] h-100 text-white font-sans
        border-5 border-[rgba(73,70,70,0.28)] 
        rounded-4xl overflow-hidden
        group relative
        bg-cover
        bg-clip-padding
        backdrop-blur
      "
      style={{ backgroundImage: `url(${images[imageIndex]})` }}
    >
      <div className="flex items-center justify-end w-full opacity-0 group-hover:opacity-100">
        <button onClick={()=> {
          removeHandler(id);
        }} className="flex justify-center items-center active:scale-95 m-3 w-6 h-6 rounded-xl bg-[rgba(25,25,25,0.6)]">
            <i className="ri-close-line text-white"></i>
        </button>
      </div>
      <div
        className="
          flex flex-col gap-1 w-full pt-15 p-5
          bg-white/15
          backdrop-blur-lg
          mask-[linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]
        "
      >
        <h1 className="font-semibold text-xl flex gap-3">
          {name}
          <span className="text-blue-500">
            <i className="ri-verified-badge-fill"></i>
          </span>
        </h1>

        <h3 className=" text-sm">{role}</h3>
        <h3 className="font-extralight text-xs">{desc}</h3>
        <h3 className="font-extralight"><i className="ri-mail-line text-sm pr-2"></i>{email}</h3>
      </div>
    </div>
  );
};

export default Cards;