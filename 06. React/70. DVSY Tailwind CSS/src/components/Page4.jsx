import React from 'react'
import Card3 from '../assets/04_Card3.png'
import Card4 from '../assets/05_Card4.png'

const Page4 = () => {
  return (
    <div className="flex flex-col p-5 gap-5">
        <h1 className="ml-10 text-3xl">OUR ADVANTAGES</h1>
        <div className="flex gap-5">
            <div className="w-[50%] rounded-xl bg-cover" style={{backgroundImage : `url(${Card3})`}}></div>
            <div className="flex flex-col w-[50%] gap-5">
                <div className="flex flex-col gap-5 p-10 bg-[#191919] rounded-xl">
                    <h2 className="text-gray-300">INDEPENDENCY</h2>
                    <h4 className="text-gray-400 text-sm">Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creatively and innovation of the artists behind them. Explore carfted collections showcasing unique creations by independent desginers.</h4>
                    <div className="flex gap-2 mt-5 items-center">
                        <div className="flex justify-center items-center rounded-full border border-gray-600 h-8 w-8 bg-[rgba(131,124,124,0.28)]">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                        <h3 className="text-sm text-gray-400">EXPLORE</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-10 bg-[#191919] rounded-xl">
                    <h2 className="text-gray-300">EXCLUSIVE & UNIQUITY</h2>
                    <h4 className="text-gray-400 text-sm">Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.</h4>
                    <div className="flex gap-2 mt-5 items-center">
                        <div className="flex justify-center items-center rounded-full border border-gray-600 h-8 w-8 bg-[rgba(131,124,124,0.28)]">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                        <h3 className="text-sm text-gray-400">EXPLORE</h3>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="flex gap-5">
            <div className="flex flex-col w-[50%] gap-5">
                <div className="flex flex-col gap-5 p-10 bg-[#191919] rounded-xl">
                    <h2 className="text-gray-300">HIGH QUALITY</h2>
                    <h4 className="text-gray-400 text-sm">Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.</h4>
                    <div className="flex gap-2 mt-5 items-center">
                        <div className="flex justify-center items-center rounded-full border border-gray-600 h-8 w-8 bg-[rgba(131,124,124,0.28)]">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                        <h3 className="text-sm text-gray-400">EXPLORE</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-10 bg-[#191919] rounded-xl">
                    <h2 className="text-gray-300">ECO-FRIENDLY</h2>
                    <h4 className="text-gray-400 text-sm">Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices.</h4>
                    <div className="flex gap-2 mt-5 items-center">
                        <div className="flex justify-center items-center rounded-full border border-gray-600 h-8 w-8 bg-[rgba(131,124,124,0.28)]">
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                        <h3 className="text-sm text-gray-400">EXPLORE</h3>
                    </div>
                </div>
            </div>
            <div className="w-[50%] rounded-xl bg-cover" style={{backgroundImage : `url(${Card4})`}}></div>
        </div>
    </div>
  )
}

export default Page4