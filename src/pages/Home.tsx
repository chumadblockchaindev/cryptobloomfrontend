import ServicesSection from '@/components/Services';
import Stats from '@/components/Stats';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { GiMetalBar, GiCutDiamond, GiGoldBar } from 'react-icons/gi';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabs = [
  { icon: "bi-binoculars", title: "Crypto Investments", id: "tabs-tab-1" },
  { icon: "bi-box-seam", title: "Agro Business", id: "tabs-tab-2" },
  { icon: "bi-brightness-high", title: "Real Estate", id: "tabs-tab-3" },
  { icon: "bi-command", title: "Smart Integration", id: "tabs-tab-4" },
];

const Home = () => {
  const [currentClient, setCurrentClient] = useState(0); // For client logos
  const [activeTab, setActiveTab] = useState("tabs-tab-1");
  const clientLogos = [
    '/logo-dropbox.png',
    '/logo-github.png',
    '/logo-lyft.png',
    '/logo-medium.png',
    '/logo-slack.png',
    '/logo-squarespace.png',
    '/logo-squarespace.png',
    '/logo-squarespace.png'
  ];

  const TabContent = ({ title, desc, bullets, imgSrc, imgAlt }:{ title: string, desc: string, bullets: Array<string>, imgSrc: string, imgAlt: string }) => (
    <div className="flex flex-col lg:flex-row items-center gap-12"> 
    <div className="lg:w-1/2"> 
    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
      {title}
    </h3> 
    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{desc}</p> 
    <ul className="space-y-3 text-gray-700 dark:text-gray-200 font-medium"> 
      {bullets.map((point, index) => ( <li key={index} className="flex items-start"> 
        <span className="mr-2 text-green-500">✔</span> 
        {point.replace("✔ ", "")} </li> ))} </ul> 
        </div> <div className="lg:w-1/2 text-center"> 
        <img src={imgSrc} alt={imgAlt} className="rounded-xl shadow-lg w-full max-w-md mx-auto" /> 
        </div> 
        </div> );

  useEffect(() => {
    AOS.init();

    const clientInterval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % clientLogos.length);
    }, 3000); // Adjust interval as needed

    return () => clearInterval(clientInterval);
  }, []);

  return (
    <div  className="index-page">   
      <main className="main">

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden bg-gray-900 text-white min-h-screen flex items-center justify-center"> {/* Background Image */} <img src="assets/img/hero-bg.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
{/* Overlay */}

<div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
{/* Hero Content */}

<div className="relative z-10 container mx-auto px-6 py-24"> <div className="max-w-2xl mx-auto text-center"> <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" data-aos="fade-up" data-aos-delay="100"> Better Investing Experience with <span className="text-blue-500">Binary Bloom</span> </h1> <p className="text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200"> We are a team of renowned investors changing the dynamics of investing. </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="fade-up" data-aos-delay="300">
    <Link
      to="/register"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
    >
      Get Started
    </Link>
  </div>
</div>
</div> </section>
        {/* /Hero Section */}

              {/* Tabs Section */}
<section id="about" className="py-20 bg-gray-50 dark:bg-gray-900"> <div className="container mx-auto px-4"> {/* Tabs Navigation */} <div className="flex flex-wrap justify-center mb-12" data-aos="fade-up" data-aos-delay="100"> {tabs.map((tab) => ( <button key={tab.id} className={`flex flex-col items-center justify-center w-1/2 sm:w-1/4 px-6 py-4 border-b-4 transition-all duration-300 ease-in-out hover:text-blue-600 ${ activeTab === tab.id ? "border-blue-600 text-blue-600 bg-white dark:bg-gray-800 shadow" : "border-transparent text-gray-500 dark:text-gray-400" }`} onClick={() => setActiveTab(tab.id)} > <i className={`bi ${tab.icon} text-2xl mb-2`}></i> <span className="text-sm sm:text-base font-medium">{tab.title}</span> </button> ))} </div>
{/* Tab Content */}
<div className="tab-content" data-aos="fade-up" data-aos-delay="200">
  {/* Reusable Content Component */}
  {activeTab === "tabs-tab-1" && (
    <TabContent
      title="Revolutionizing Digital Finance"
      desc="We offer secure, high-yield investment opportunities in digital assets. Our platform simplifies crypto investments for both beginners and seasoned traders."
      bullets={[
        "✔ Industry-leading security protocols",
        "✔ Real-time portfolio tracking",
        "✔ Access to top-performing digital currencies",
      ]}
      imgSrc="digital-finance.jpg"
      imgAlt="Crypto Investment"
    />
  )}
  {activeTab === "tabs-tab-2" && (
    <TabContent
      title="Growing Futures with Agriculture"
      desc="Invest in sustainable farming and agritech ventures that power communities and feed the future."
      bullets={[
        "✔ Eco-friendly farming initiatives",
        "✔ Direct farm-to-market supply chains",
        "✔ Measurable social and financial impact",
      ]}
      imgSrc="agric-image.jpg"
      imgAlt="Agriculture Sector"
    />
  )}
  {activeTab === "tabs-tab-3" && (
    <TabContent
      title="Transforming Real Estate Access"
      desc="We provide innovative real estate investment models, allowing clients to own, lease, or invest in high-potential properties."
      bullets={[
        "✔ Digitally managed property portfolios",
        "✔ Transparent returns & flexible entry points",
        "✔ Urban and rural investment options",
      ]}
      imgSrc="real-estate.jpg"
      imgAlt="Real Estate Solutions"
    />
  )}
  {activeTab === "tabs-tab-4" && (
    <TabContent
      title="Smart Integration of Opportunities"
      desc="Our platform harmonizes investment in crypto, agriculture, and real estate—making diversification simple and seamless."
      bullets={[
        "✔ Unified dashboard for all sectors",
        "✔ AI-driven analytics & reporting",
        "✔ Diversification with a single platform",
      ]}
      imgSrc="smart-investment.jpg"
      imgAlt="Integrated Investment"
    />
  )}
</div>
</div> </section>


        {/* /Tabs Section */}

{/* Services Section */}
<ServicesSection />

        {/* Stats Section */}
    <Stats />

        {/* /Stats Section */}

{/* Pricing Section */}
<section id="pricing" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"> 
      {/* Section Title */} 
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up"> 
        <h2 className="text-4xl font-extrabold mb-4">Choose Your Investment Plan</h2> 
        <p className="text-lg text-gray-300 max-w-2xl mx-auto"> Select a plan that fits your goals. Whether you're a beginner or a seasoned investor, we have the perfect option to grow your wealth. </p> </div>
{/* Plans */}

<div className="container mx-auto px-4"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {/* Bronze Plan */}
  <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300" data-aos="zoom-in" data-aos-delay="100">
  <div className="flex justify-center mb-4">
    <GiMetalBar className="text-5xl text-yellow-700" />
  </div>
    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Bronze Plan</h3>
    <h4 className="text-4xl font-bold text-center text-blue-600 mb-6">
      1.8% <span className="text-lg text-gray-600">Daily for 7 Days</span>
    </h4>
    <ul className="space-y-4 mb-6">
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Minimum Investment: $50</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> ROI paid every 24 hours</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 24/7 Support</li>
      <li className="flex items-center"><FaTimesCircle className="text-red-500 mr-2" /> No Early Withdrawal</li>
    </ul>
    <div className="text-center">
      <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Invest Now</a>
    </div>
  </div>

  {/* Diamond Plan */}
  <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 border-4 border-blue-600 transform hover:scale-105 transition duration-300" data-aos="zoom-in" data-aos-delay="200">
  <div className="flex justify-center mb-4">
    <GiCutDiamond className="text-5xl text-blue-500" />
  </div>
    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Diamond Plan</h3>
    <h4 className="text-4xl font-bold text-center text-blue-600 mb-6">
      2.0% <span className="text-lg text-gray-600">Daily for 7 Days</span>
    </h4>
    <ul className="space-y-4 mb-6">
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Minimum Investment: $200</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> ROI paid daily</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Priority Support</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Early Withdrawal Fee: 10%</li>
    </ul>
    <div className="text-center">
      <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Invest Now</a>
    </div>
  </div>

  {/* Gold Plan */}
  <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300" data-aos="zoom-in" data-aos-delay="300">
  <div className="flex justify-center mb-4">
  <GiGoldBar className="text-5xl text-yellow-500" />
  </div>
    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Gold Plan</h3>
    <h4 className="text-4xl font-bold text-center text-blue-600 mb-6">
      2.5% <span className="text-lg text-gray-600">Daily for 7 Days</span>
    </h4>
    <ul className="space-y-4 mb-6">
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Minimum Investment: $500</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Highest ROI Plan</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Dedicated Account Manager</li>
      <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Instant Withdrawal</li>
    </ul>
    <div className="text-center">
      <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Invest Now</a>
    </div>
  </div>

</div>
</div> </section>


      {/* /Pricing Section */}

        {/* Testimonials Section */}
  <section id="testimonials" className="bg-gray-900 py-16 text-white">
  <div className="container mx-auto px-4 text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-4">What Our Investors Say</h2>
    <p className="text-gray-400">Hear directly from our trusted clients who have grown their portfolios with us.</p>
  </div>

  <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={30}
      className="pb-10"
    >
      {[
        {
          name: "Saul Goodman",
          title: "Crypto Trader",
          image: "/testimonials-1.jpg",
          feedback: "I’ve seen consistent returns since I started. The platform is intuitive, secure, and transparent. Highly recommend to any serious investor.",
        },
        {
          name: "Sara Wilsson",
          title: "Real Estate Investor",
          image: "/testimonials-2.jpg",
          feedback: "The real estate investment options here are top-tier. I feel confident knowing my money is working for me with a trustworthy company.",
        },
        {
          name: "Jena Karlis",
          title: "Agritech Entrepreneur",
          image: "/testimonials-3.jpg",
          feedback: "As someone in the agriculture industry, I’m impressed with the investment opportunities that support sustainable farming. Excellent service.",
        },
        {
          name: "Matt Brandon",
          title: "Full-time Investor",
          image: "/testimonials-4.jpg",
          feedback: "I’ve diversified my portfolio across crypto, agriculture, and real estate using this platform. The returns are fantastic and the support team is always helpful.",
        },
        {
          name: "John Larson",
          title: "Tech Entrepreneur",
          image: "/testimonials-5.jpg",
          feedback: "Investing with this platform has been a game-changer. The referral bonuses and daily ROIs are unmatched in the industry.",
        },
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              src={testimonial.image}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-gray-700"
              alt={testimonial.name}
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <h4 className="text-sm text-indigo-400">{testimonial.title}</h4>
            <div className="flex justify-center text-yellow-400 mt-2 mb-4"> 
              {[...Array(5)].map((_, i) => ( <FaStar key={i} className="mx-0.5" /> ))} 
              </div> 
              <p className="italic text-gray-300"> <FaQuoteLeft className="inline-block mr-1" /> 
              {testimonial.feedback} <FaQuoteRight className="inline-block ml-1" /> 
              </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

        {/* /Testimonials Section */}

        {/* Faq Section */}
<section id="faq" className="bg-gray-900 text-white py-20">
  <div className="container mx-auto px-4 max-w-4xl" data-aos="fade-up">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-400">We’ve gathered the most common questions to help you make informed investment decisions.</p>
    </div>

    <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
      {[
        {
          question: "How does the daily ROI system work?",
          answer: "Our platform calculates ROI daily for 7 days based on the selected plan. Your earnings are automatically credited to your account each day you log in."
        },
        {
          question: "What are the available investment plans?",
          answer: "We offer Bronze (1.8%), Diamond (2%), and Gold (2.5%) plans. Each runs for 7 days and pays out daily returns."
        },
        {
          question: "Can I withdraw my full balance at any time?",
          answer: "Yes. You can withdraw your full balance anytime, as long as it’s not tied to an ongoing investment."
        },
        {
          question: "How do I make a deposit using crypto?",
          answer: "Choose your preferred coin (BTC, ETH, USDT), generate a wallet, and send the amount. Once confirmed, your account will be credited."
        },
        {
          question: "How does the referral system work?",
          answer: "When someone signs up using your referral link and makes a deposit, you earn 5% of their deposit directly to your referral earnings."
        },
        {
          question: "Can I invest using my referral or earnings balance?",
          answer: "Absolutely. You can transfer funds from your referral or earnings balance to your main wallet and invest from there."
        }
      ].map((faq, index) => (
        <details key={index} className="group bg-gray-800 p-5 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium group-open:text-indigo-400">
            {faq.question}
            <span className="ml-2 text-indigo-400 group-open:rotate-180 transition-transform duration-300">&#9660;</span>
          </summary>
          <p className="mt-3 text-gray-300 leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>

        {/* /Faq Section */}

        {/* Team Section */}
<section id="team" className="bg-gray-100 dark:bg-gray-900 py-16"> 
  <div className="container mx-auto px-4 text-center mb-12" data-aos="fade-up"> 
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Experts</h2> 
    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"> Our dedicated leadership team brings decades of experience in finance, crypto, agriculture, and real estate investments. Together, we drive innovation and trust for our global clientele. </p> 
    </div> 
    <div className="container mx-auto px-4"> 
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100"> 
        {[ { name: "Walter White", role: "Chief Executive Officer", image: "/team-1.jpg", desc: "With over 20 years in financial leadership, Walter ensures our strategic growth and investor confidence remain unmatched.", }, 
          { name: "Sarah Johnson", role: "Chief Investment Officer", image: "/team-2.jpg", desc: "Sarah leads our investment strategies across crypto, agriculture, and real estate — delivering consistent ROI for clients worldwide.", }, 
          { name: "William Anderson", role: "Chief Technology Officer", image: "/team-3.jpg", desc: "From blockchain security to scalable fintech systems, William ensures our platform stays cutting-edge and investor-friendly.", }, ].map((member, index) => ( <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={`${100 + index * 100}`}> <img src={member.image} alt={member.name} className="w-full h-60 object-cover" /> <div className="p-6 text-center"> <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h4> <span className="text-sm text-indigo-500">{member.role}</span> <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{member.desc}</p> <div className="flex justify-center gap-4 mt-4 text-gray-500 dark:text-gray-400"> <a href="#"><i className="bi bi-twitter-x hover:text-indigo-500"></i></a> <a href="#"><i className="bi bi-facebook hover:text-indigo-500"></i></a> <a href="#"><i className="bi bi-instagram hover:text-indigo-500"></i></a> <a href="#"><i className="bi bi-linkedin hover:text-indigo-500"></i></a> </div> </div> </div> ))} </div> </div> </section>

        {/* /Team Section */}

              {/* Clients Section */}
              <section id="clients" className="py-16 bg-white dark:bg-gray-900"> <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100"> <div className="text-center mb-8"> <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Trusted Partners</h2> <p className="text-gray-500 dark:text-gray-400 mt-2"> We proudly collaborate with industry-leading organizations across crypto, agriculture, and real estate. </p> </div>
                  <div className="flex justify-center items-center h-32">
                    <img
                      src={clientLogos[currentClient]}
                      alt={`Partner ${currentClient + 1}`}
                      className="max-h-20 object-contain transition duration-500 ease-in-out"
                    />
                  </div>
              
                  {/* Optional Pagination dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {clientLogos.map((_, index) => (
                      <span
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentClient ? 'bg-indigo-500' : 'bg-gray-300'} transition`}
                      ></span>
                    ))}
                  </div>
                </div>
              </section>

              
              {/* /Clients Section */}
              
<section id="contact" className="bg-white dark:bg-gray-900 py-16"> <div className="container mx-auto px-4" data-aos="fade-up"> {/* Section Title */} <div className="text-center mb-12"> <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h2> <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Have questions about our investment plans or services? Reach out to our team — we’re here to help you grow your future. </p> </div>
<div className="flex flex-col lg:flex-row gap-12" data-aos="fade-up" data-aos-delay="100">
  {/* Contact Info */}
  <div className="w-full lg:w-1/2 space-y-8">
    <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
      <i className="fa-solid fa-location-dot text-3xl text-indigo-500 mb-2"></i>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Our Address</h3>
      <p className="text-gray-600 dark:text-gray-300">Suite 108, Finance District, New York, NY 10001</p>
    </div>

    <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
      <i className="fa-solid fa-phone text-3xl text-indigo-500 mb-2"></i>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Call Us</h3>
      <p className="text-gray-600 dark:text-gray-300">+1 (800) 555-8899</p>
    </div>

    <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
      <i className="fa-solid fa-envelope text-3xl text-indigo-500 mb-2"></i>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email Us</h3>
      <p className="text-gray-600 dark:text-gray-300">support@yourcompany.com</p>
    </div>
  </div>

  {/* Contact Form */}
  <div className="w-full lg:w-1/2">
    <form action="forms/contact.php" method="post" className="space-y-6" data-aos="fade-up" data-aos-delay="500">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          placeholder="Your Email"
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
        placeholder="Subject"
        required
      />
      <textarea
        name="message"
        rows={5}
        className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
        placeholder="Your Message"
        required
      ></textarea>

      {/* Feedback Messages */}
      <div className="text-center">
        <div className="loading hidden text-gray-500">Loading...</div>
        <div className="error-message hidden text-red-500">There was an error sending your message.</div>
        <div className="sent-message hidden text-green-500">Your message has been sent. Thank you!</div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>
</div> </section>
      </main>
    </div>
  )
}

export default Home