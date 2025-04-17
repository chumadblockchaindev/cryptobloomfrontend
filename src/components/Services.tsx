import { FaBitcoin, FaChartLine, FaHome, FaBolt, FaWallet, FaUsers, } from "react-icons/fa";

const services = [ { icon: <FaBitcoin className="text-yellow-500 text-4xl mb-4" />, title: "Crypto Investment", desc: "Explore secure and high-yield cryptocurrency investment opportunities tailored to your financial goals.", }, { icon: <FaChartLine className="text-green-500 text-4xl mb-4" />, title: "AgroTech Development", desc: "Leveraging technology to revolutionize farming practices and boost agricultural productivity.", }, { icon: <FaHome className="text-blue-500 text-4xl mb-4" />, title: "Real Estate Solutions", desc: "Discover smart, sustainable property investment and development across urban and rural landscapes.", }, { icon: <FaBolt className="text-purple-500 text-4xl mb-4" />, title: "Energy-Efficient Systems", desc: "Integrating renewable energy solutions into real estate and agriculture for a sustainable future.", }, { icon: <FaWallet className="text-pink-500 text-4xl mb-4" />, title: "Digital Wallet Integration", desc: "Secure crypto wallet systems that streamline your investment deposits, withdrawals, and earnings.", }, { icon: <FaUsers className="text-indigo-500 text-4xl mb-4" />, title: "Consulting & Advisory", desc: "Get expert insights and strategic guidance on blockchain, agribusiness, and real estate ventures.", }, ];

export default function ServicesSection() { 
    
    return ( 
<section id="services" className="bg-white dark:bg-gray-950 py-20"> <div className="container mx-auto px-4"> {/* Section Header */} <div className="text-center mb-16 max-w-2xl mx-auto"> <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2> <p className="text-gray-600 dark:text-gray-400 text-lg"> Empowering growth across Crypto, Agriculture, and Real Estate through trusted and innovative solutions. </p> </div>

    {/* Services Grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-1 transition-all duration-300 p-8 border border-gray-100 dark:border-gray-800"
        >
          <div>{service.icon}</div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
); }