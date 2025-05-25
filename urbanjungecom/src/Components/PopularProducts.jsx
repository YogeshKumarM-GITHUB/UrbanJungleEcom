import popprod1 from '../assets/popprod1.jpg'
import popprod2 from '../assets/popprod2.jpg'
import popprod3 from '../assets/popprod3.jpg'

const popproducts = [
    {
        img: popprod1,
        text: "Desert Bloom",
        name: "Indoor Plants",
        price: "$900.00"
    },
    {
        img: popprod2,
        text: "Golden Bloom",
        name: "Outdoor Plants",
        price: "$800.00"
    },
    {
        img: popprod3,
        text: "Silver Bloom",
        name: "Outdoor Plants",
        price: "$700.00"
    }
]

const PopularProducts = () => {
    return (
        <div className="mt-16">
            <h1 className="text-center text-3xl font-medium">Popular Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center px-24 mt-10">
                {
                    popproducts.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-start justify-center cursor-pointer'>
                                <img className='w-full h-auto' src={item.img} alt="" />
                                <p className="text-2xl font-bold">{item.text}</p>
                                <p className='text-gray-600 font-medium'>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    )
}
export default PopularProducts;