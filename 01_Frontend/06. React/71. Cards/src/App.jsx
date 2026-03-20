import React from "react";
import Cards from "./components/Cards";

import img1 from "./assets/01_img.png";
import img2 from "./assets/02_img.png";
import img3 from "./assets/03_img.png";
import img4 from "./assets/04_img.png";
import img5 from "./assets/05_img.png";
import img6 from "./assets/06_img.png";
import img7 from "./assets/07_img.png";
import img8 from "./assets/08_img.png";
import img9 from "./assets/09_img.png";

const App = () => {
  const profiles = [
    {
      name: "Sophie Bennett",
      bio: "Product Designer who focuses on simplicity & usability",
      followers: 312,
      posts: 48,
      image: img1,
    },
    {
      name: "Luna Parker",
      bio: "Designing intuitive digital experiences with empathy",
      followers: 428,
      posts: 62,
      image: img2,
    },
    {
      name: "Mia Thompson",
      bio: "Building responsive interfaces with React & Tailwind",
      followers: 289,
      posts: 37,
      image: img3,
    },
    {
      name: "Ava Richardson",
      bio: "Turning ideas into visually compelling stories",
      followers: 354,
      posts: 54,
      image: img4,
    },
    {
      name: "Isabella Moore",
      bio: "Creating strong brands through thoughtful design",
      followers: 501,
      posts: 71,
      image: img5,
    },
    {
      name: "Emily Carter",
      bio: "Illustrations that bring products and interfaces to life",
      followers: 267,
      posts: 29,
      image: img6,
    },
    {
      name: "Harper Lee",
      bio: "Designing smooth and meaningful user interactions",
      followers: 319,
      posts: 42,
      image: img7,
    },
    {
      name: "Olivia Martinez",
      bio: "Animating interfaces to feel alive and human",
      followers: 386,
      posts: 58,
      image: img8,
    },
    {
      name: "Natalie Brooks",
      bio: "Leading creative vision with clarity and purpose",
      followers: 612,
      posts: 89,
      image: img9,
    },
  ];

  return (
    <div className="flex justify-around gap-20 h-screen p-20 flex-wrap">
      {profiles.map((elem, index) => (
        <Cards key={index} {...elem} />
      ))}
    </div>
  );
};

export default App;
