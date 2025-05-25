import premdest from '../assets/premimage.jpg'

const PremieDestination = () => {
    return (
        <div className="bg-[#ECF4D3] px-4 md:px-[100px] py-[80px] mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Image Section */}
                <div>
                    <img src={premdest} alt="Destination" className="w-full h-auto" />
                </div>

                {/* Text Section */}
                <div className="space-y-6">
                    <div className="max-w-lg">
                        <p className="text-4xl font-bold">
                            Your Premier <br /> Destination for All Green.
                        </p>
                    </div>

                    <div className="max-w-xl">
                        <p className="text-gray-800">
                            At Urban Jungle Co., we believe in the transformative power of plants. Whether you’re a seasoned gardener or just starting your green journey, our curated selection of plants will inspire and enrich your living space.
                        </p>
                    </div>

                    <hr className="w-full h-[1px] bg-gray-300 border-none" />

                    <div className="flex flex-col sm:flex-row gap-10">
                        <div>
                            <h1 className="text-3xl font-bold">98%</h1>
                            <p className="text-gray-600">Customer Satisfaction</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">103K</h1>
                            <p className="text-gray-600">Plants Sold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PremieDestination;