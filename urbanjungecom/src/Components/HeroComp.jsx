import Hero from '../assets/Hero.jpg';
import logo from '../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const HeroComp = () => {
    return (
        <div
            className="relative bg-cover bg-center h-screen w-full"
            style={{ backgroundImage: `url(${Hero})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <nav className="container max-auto  absolute top-0 left-0 w-full flex items-center justify-between px-[160px] py-4 z-20">
                <img src={logo} alt="" className='cursor-pointer' />
                <ul className="flex space-x-6 text-white items-center px-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaYoutube /></li>
                    <li className="relative"><FaShoppingBag />
                        <span className="absolute cursor-pointer -top-3 -right-2  bg-white text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                            0
                        </span>
                    </li>

                </ul>

            </nav>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <p className="text-white uppercase tracking-widest mb-2">Welcome to Urban Jungle Co.</p>
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
                    Discover the Beauty of<br />Nature at Your Fingertips
                </h1>
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default HeroComp;
