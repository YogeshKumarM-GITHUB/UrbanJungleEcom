import { MdOutlinePayment } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import React from 'react'
const Herodetails = [
    {
        icon: <MdOutlinePayment />,
        Heading: "Secure Payment",
        Paragraph: "Elementum feugiat diam"
    },
    {
        icon: <LiaShippingFastSolid />,
        Heading: "Free Shipping",
        Paragraph: "For $50 order"
    },
    {
        icon: <CiHeart />,
        Heading: "Delivered with Care",
        Paragraph: "Lacinia pellentesque leo"
    }
    ,
    {
        icon: <FaBox />,
        Heading: "Excellent Service",
        Paragraph: "Blandit gravida viverra"
    }
]


const HeroDetails = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:space-x-48 space-y-10 md:space-y-0 items-center justify-center px-4 py-10">
                {Herodetails.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        {React.cloneElement(item.icon, {
                            className:
                                "w-20 h-20 p-4 bg-[#ECF4D3] rounded-full text-black mb-4",
                        })}
                        <h1 className="text-2xl font-bold mb-2">{item.Heading}</h1>
                        <p className="text-[#454545]">{item.Paragraph}</p>
                    </div>
                ))}
            </div>
            <div className="container mx-auto px-4">
                <hr className="w-full h-[1px] bg-gray-300 border-none my-4" />
            </div>
        </div>

    )
}
export default HeroDetails