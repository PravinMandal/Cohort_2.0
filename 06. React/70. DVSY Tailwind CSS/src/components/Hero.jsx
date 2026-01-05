import React from 'react'
import heroImg from '../assets/02_Card1.png'
const Hero = () => {
  return (
    <div className="w-full h-[95vh] px-5">
        <div className="flex flex-col justify-between p-20 w-full h-full rounded-lg bg-cover bg-" style={{backgroundImage : `url(${heroImg})`}}>
            <div>
                <h1 className="text-8xl font-extralight tracking-widest font-sans mt-80 ml-30">DESIGN</h1>
                <h1 className="text-8xl font-extralight tracking-widest font-sans ml-60">& FREEDOM</h1>
            </div>
            <div className="flex justify-between">
                <div className="ml-60 mt-8">
                    <h3 className="text-sm text-gray-400">Explore Independent Style by Embracing Uniqueness</h3>
                    <h3 className="text-sm text-gray-400">with Our Exclusive Designer Apparel</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <div className="flex justify-center items-center rounded-full border border-gray-600 h-8 w-8 bg-[rgba(131,124,124,0.28)]">
                        <i class="ri-arrow-down-line"></i>
                    </div>
                    <h3 className="text-sm text-gray-300">LEARN MORE</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero