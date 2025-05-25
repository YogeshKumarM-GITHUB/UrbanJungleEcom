const custsays = [
    {
        text: "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
        name: "Your Client",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        text: "Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!",
        name: "Your Client",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        text: "Fantastic experience from start to finish. The service was impeccable, and the result was just what we needed.",
        name: "Your Client",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
    }
]

const CustomerSays = () => {
    return (
        <div className="bg-[#ECF4D3] py-20 px-[250px] md:px-24">
            <div className="flex justify-between items-center">
                <div className="w-1/2 bg-blue-100 p-4">
                    {/* <!-- Left Side Content --> */}
                    <h1 className="text-5xl font-bold">What Our Customers Say</h1>
                    <p>Discover the reasons why people loves us and become your go-to partner.</p>
                     <div className="mt-[250px] bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 relative max-w-[500px]">
                        <div className="text-green-600 text-3xl font-bold">“</div>
                        <p className="text-lg text-gray-700">I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.</p>
                        <div className="flex items-center gap-3 mt-4">
                            <img
                                className="w-10 h-10 rounded-full object-cover"
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Client"
                            />
                            <span className="text-sm text-gray-800 font-medium">
                                Yogesh Kumar M
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 bg-green-100 p-4">
                    {/* <!-- Right Side Content --> */}
                    <p>Right side content</p>
                </div>
            </div>
        </div>
    )
}
export default CustomerSays; 