import cat1 from '../assets/Cat1.jpg'
import cat2 from '../assets/Cat2.jpg'
import cat3 from '../assets/Cat3.jpg'
import cat4 from '../assets/Cat4.jpg'

const cat = [
    {
        img: cat1,
        text: "Houseplants"
    }, {
        img: cat2,
        text: "Outdoor Plants"
    }, {
        img: cat3,
        text: "Succulents"
    }, {
        img: cat4,
        text: "Desert Bloom"
    }
]

const OurCategories = () => {
    return (
        <div className="mt-20">
            <h1 className="text-center font-bold text-4xl">Our Categories</h1>

            <div className='flex flex-col md:flex-row  lg:flex-row items-center justify-center gap-10  mt-8'>
                {
                    cat.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col'>
                                <img className='h-72' src={item.img} alt="" />
                                <p className='text-center text-2xl font-bold'>{item.text}</p>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    )
}
export default OurCategories;