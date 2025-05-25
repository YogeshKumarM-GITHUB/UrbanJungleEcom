import logo from '../assets/footerlogo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#ECF4D3] w-full'>
            <div className="w-full flex items-center justify-around  p-8">
                <img src={logo} alt="" className='cursor-pointer' />
                <ul className="flex space-x-6 text-black items-center px-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className='flex flex-row gap-6'>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaYoutube /></li>
                </ul>

            </div>
            <div>
                <p className='text-center'>Copyright © 2025 eCommerce</p>
            </div>
        </div>
    )
}
export default Footer;