import React from 'react'
import Card2 from '../assets/03_Card2.png'

const Page3 = () => {
  return (
    <div className="flex gap-5 w-full p-5">
        <div className="flex flex-col gap-10 w-[50%] rounded-xl bg-[#191919] p-10">
            <h2 className="text-gray-200">ABOUT</h2>
            <div className="flex flex-col gap-7">
                <h1 className="text-5xl font-light text-gray-200">WHERE FASHION MEETS FREEDOM</h1>
                <div className="flex gap-8">
                    <h4 className="text-sm text-gray-400">We belive that fashion should be an expression of individuality. We encourage creativity and originality in every times we offer, presenting customers with exclusive collections from independent designer. With a commitment to fosering a community of creativity and innovation.</h4>
                    <h4 className="text-sm text-gray-400">We stand to connect designers with fashion emthesists who appreciate the activity and individuality behind each piece. Driven by our dedication to authentic. We create each collection with a keen eye for unique designs that inspire confidence and self-expression.</h4>
                </div>
            </div>
        </div>
        <div className="w-[50%] rounded-2xl bg-cover" style={{backgroundImage : `url(${Card2})`}}></div>
    </div>
  )
}

export default Page3