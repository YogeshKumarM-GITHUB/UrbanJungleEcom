import plant1 from '../assets/plant1.jpg'
import plant2 from '../assets/plant2.jpg'
import plant3 from '../assets/plant3.jpg'
import { FaShoppingBag } from "react-icons/fa";

const plants = [
    {
        plantname: "Zen Bamboo Grove",
        img: plant1,
        plants: "Indore Plants",
        price: "$90.22"
    }, {
        plantname: "StarLight Succulent",
        img: plant2,
        plants: "Indore Plants",
        price: "$90.22"
    }, {
        plantname: "Zen Bamboo Grove",
        img: plant3,
        plants: "Indore Plants",
        price: "$90.22"
    }
]

const TrendingProducts = () => {
    return (
        <div className="mt-20">
            <h1 className="text-center font-bold text-4xl">Trending Products</h1>

            <div className=" flex flex-col gap-4 mt-10 md:flex-row px-[100px]  lg:flex-row sm:flex-col">
                {plants.map((item, index) => {
                    return (
                        <div key={index} className='relative flex flex-col'>
                            <div className='relative cursor-pointer group'>
                                <img className='h-[450px]' src={item.img} alt="" >
                                </img>
                                <span className='absolute  sm:right-7 top-2 md:top-3 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black p-2 rounded-full'>
                                    <FaShoppingBag />
                                </span>
                            </div>
                            <p className='text-1xl font-bold'>{item.plantname}</p>
                            <p className='text-gray-600'>{item.plants}</p>
                            <p className='text-1xl font-bold'>{item.price}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}
export default TrendingProducts;