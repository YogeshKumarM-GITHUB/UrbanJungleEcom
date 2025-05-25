const custsays = [
  {
    text: "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
    name: "Yogesh Kumar M",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!",
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "Fantastic experience from start to finish. The service was impeccable, and the result was just what we needed.",
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  }
];

const CustomerSays = () => {
  return (
    <div className="bg-[#ECF4D3] w-full py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-gray-700 text-lg">
            Discover the reasons why people love us and why we might become your go-to partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {custsays.map((cust, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
              <div className="text-green-600 text-3xl font-bold">“</div>
              <p className="text-lg text-gray-700">{cust.text}</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={cust.image}
                  alt={cust.name}
                />
                <span className="text-sm text-gray-800 font-medium">
                  {cust.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;
