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

const Cards = ({ name, email, role, desc, index }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div
      className="
        flex flex-col justify-end w-[20%] h-100 text-white font-sans
        border-5 border-[rgba(73,70,70,0.28)] 
        rounded-4xl overflow-hidden
        
        bg-cover
        bg-clip-padding
        backdrop-blur
      "
      style={{ backgroundImage: `url(${images[index % images.length]})` }}
    >
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
        {/* <h3 className="font-extralight text-xs">{desc}</h3> */}
        <h3 className="font-extralight"><i class="ri-mail-line text-sm pr-2"></i>{email}</h3>
      </div>
    </div>
  );
};

export default Cards;