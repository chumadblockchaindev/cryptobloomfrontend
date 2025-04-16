import Stats from '@/components/Stats';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const Home = () => {
  const [currentClient, setCurrentClient] = useState(0); // For client logos

  const clientLogos = [
    'assets/img/clients/client-1.png',
    'assets/img/clients/client-2.png',
    'assets/img/clients/client-3.png',
    'assets/img/clients/client-4.png',
    'assets/img/clients/client-5.png',
    'assets/img/clients/client-6.png',
    'assets/img/clients/client-7.png',
    'assets/img/clients/client-8.png'
  ];

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % clientLogos.length);
    }, 3000); // Adjust interval as needed

    return () => clearInterval(clientInterval);
  }, []);

  return (
    <div className="index-page">   
      <main className="main">

        {/* Hero Section */}
        <section id="hero" className="hero section">

        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 data-aos="fade-up" data-aos-delay="100">Bettter investing experience with Binary Bloom</h2>
                <p data-aos="fade-up" data-aos-delay="200">We are team of renouned investors changing the dynamics of investing</p>
                <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                  <Link to="/register" className="btn-get-started">Get Started</Link>
                  <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>

              </div>
            </div>
          </div>

        </section>
        {/* /Hero Section */}

              {/* Tabs Section */}
              <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
            {[
              { icon: "bi-binoculars", title: "Crypto Investments", target: "tabs-tab-1" },
              { icon: "bi-box-seam", title: "Agro Business", target: "tabs-tab-2" },
              { icon: "bi-brightness-high", title: "Real Estate", target: "tabs-tab-3" },
              { icon: "bi-command", title: "Smart Integration", target: "tabs-tab-4" },
            ].map((tab, index) => (
              <button
                key={index}
                className={`flex flex-col items-center w-1/2 sm:w-1/4 px-4 py-2 border-b-4 transition-colors duration-200 ${
                  index === 0 ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
                }`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.target}`}
              >
                <i className={`bi ${tab.icon} text-2xl mb-2`}></i>
                <h4 className="text-sm sm:text-base font-semibold">{tab.title}</h4>
              </button>
            ))}
          </div>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {/* Crypto Tab */}
            <div className="tab-pane active" id="tabs-tab-1">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Revolutionizing Digital Finance</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We offer secure, high-yield investment opportunities in digital assets. Our platform simplifies crypto
                    investments for both beginners and seasoned traders.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li>✔ Industry-leading security protocols</li>
                    <li>✔ Real-time portfolio tracking</li>
                    <li>✔ Access to top-performing digital currencies</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 text-center">
                  <img src="assets/img/working-1.jpg" alt="Crypto Investment" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Agriculture Tab */}
            <div className="tab-pane" id="tabs-tab-2">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Growing Futures with Agriculture</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Invest in sustainable farming and agritech ventures that power communities and feed the future.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li>✔ Eco-friendly farming initiatives</li>
                    <li>✔ Direct farm-to-market supply chains</li>
                    <li>✔ Measurable social and financial impact</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 text-center">
                  <img src="assets/img/working-2.jpg" alt="Agriculture Sector" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Real Estate Tab */}
            <div className="tab-pane" id="tabs-tab-3">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Transforming Real Estate Access</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We provide innovative real estate investment models, allowing clients to own, lease, or invest in
                    high-potential properties.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li>✔ Digitally managed property portfolios</li>
                    <li>✔ Transparent returns & flexible entry points</li>
                    <li>✔ Urban and rural investment options</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 text-center">
                  <img src="assets/img/working-3.jpg" alt="Real Estate Solutions" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Integration Tab */}
            <div className="tab-pane" id="tabs-tab-4">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Smart Integration of Opportunities</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our platform harmonizes investment in crypto, agriculture, and real estate—making diversification simple and
                    seamless.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li>✔ Unified dashboard for all sectors</li>
                    <li>✔ AI-driven analytics & reporting</li>
                    <li>✔ Diversification with a single platform</li>
                  </ul>
                </div>
                <div className="lg:w-1/2 text-center">
                  <img src="assets/img/working-4.jpg" alt="Integrated Investment" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* /Tabs Section */}

      {/* Services Section */}
      <section id="services" className="bg-gray-900 text-white py-20">
  {/* Section Title */}
  <div className="container mx-auto px-4 text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
    <p className="text-gray-300">
      Empowering growth across Crypto, Agriculture, and Real Estate through trusted and innovative solutions.
    </p>
  </div>

  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Service 1 */}
      <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start hover:bg-gray-700 transition">
        <i className="bi bi-currency-bitcoin text-4xl text-yellow-400"></i>
        <div>
          <h4 className="text-xl font-semibold mb-2">Crypto Investment</h4>
          <p className="text-gray-300">
            Explore secure and high-yield cryptocurrency investment opportunities tailored to your financial goals.
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start hover:bg-gray-700 transition">
        <i className="bi bi-graph-up-arrow text-4xl text-green-400"></i>
        <div>
          <h4 className="text-xl font-semibold mb-2">AgroTech Development</h4>
          <p className="text-gray-300">
            Leveraging technology to revolutionize farming practices and boost agricultural productivity.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start hover:bg-gray-700 transition">
        <i className="bi bi-house-door text-4xl text-blue-400"></i>
        <div>
          <h4 className="text-xl font-semibold mb-2">Real Estate Solutions</h4>
          <p className="text-gray-300">
            Discover smart, sustainable property investment and development across urban and rural landscapes.
          </p>
        </div>
      </div>

      {/* Service 4 */}
      <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start hover:bg-gray-700 transition">
        <i className="bi bi-lightning-charge text-4xl text-purple-400"></i>
        <div>
          <h4 className="text-xl font-semibold mb-2">Energy-Efficient Systems</h4>
          <p className="text-gray-300">
            Integrating renewable energy solutions into real estate and agriculture for a sustainable future.
          </p>
        </div>
      </div>

      {/* Service 5 */}
      <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start hover:bg-gray-700 transition">
        <i className="bi bi-wallet2 text-4xl text-pink-400"></i>
        <div>
          <h4 className="text-xl font-semibold mb-2">Digital Wallet Integration</h4>
          <p className="text-gray-300">
            Secure crypto wallet systems that streamline your investment deposits, withdrawals, and earnings.
          </p>
        </div>
      </div>

      {/* Service 6 */}
      <div className="bg-gray-800 p-6 rounded-lg flex gap-4 items-start hover:bg-gray-700 transition">
        <i className="bi bi-people text-4xl text-indigo-400"></i>
        <div>
          <h4 className="text-xl font-semibold mb-2">Consulting & Advisory</h4>
          <p className="text-gray-300">
            Get expert insights and strategic guidance on blockchain, agribusiness, and real estate ventures.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* /Services Section */}

        {/* Stats Section */}
    <Stats />

        {/* /Stats Section */}

                {/* Pricing Section */}
{/* Section Title */}
      <section id="pricing" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">

        {/* Section Title */}
        <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4">Choose Your Investment Plan</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select a plan that fits your goals. Whether you're a beginner or a seasoned investor, we have the perfect option to grow your wealth.
          </p>
        </div>

        {/* Plans */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Bronze Plan */}
            <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Bronze Plan</h3>
              <h4 className="text-4xl font-bold text-center text-blue-600 mb-6">
                1.8% <span className="text-lg text-gray-600">Daily for 7 Days</span>
              </h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Minimum Investment: $50</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> ROI paid every 24 hours</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> 24/7 Support</li>
                <li className="flex items-center"><i className="bi bi-x-circle-fill text-red-500 mr-2"></i> No Early Withdrawal</li>
              </ul>
              <div className="text-center">
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Invest Now</a>
              </div>
            </div>

            {/* Diamond Plan */}
            <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 border-4 border-blue-600 transform hover:scale-105 transition duration-300" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Diamond Plan</h3>
              <h4 className="text-4xl font-bold text-center text-blue-600 mb-6">
                2.0% <span className="text-lg text-gray-600">Daily for 7 Days</span>
              </h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Minimum Investment: $200</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> ROI paid daily</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Priority Support</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Early Withdrawal Fee: 10%</li>
              </ul>
              <div className="text-center">
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Invest Now</a>
              </div>
            </div>

            {/* Gold Plan */}
            <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Gold Plan</h3>
              <h4 className="text-4xl font-bold text-center text-blue-600 mb-6">
                2.5% <span className="text-lg text-gray-600">Daily for 7 Days</span>
              </h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Minimum Investment: $500</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Highest ROI Plan</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Dedicated Account Manager</li>
                <li className="flex items-center"><i className="bi bi-check-circle-fill text-green-500 mr-2"></i> Instant Withdrawal</li>
              </ul>
              <div className="text-center">
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">Invest Now</a>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* /Pricing Section */}

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-900 py-16 text-white">
  {/* Section Title */}
  <div className="container mx-auto px-4 text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-4">What Our Investors Say</h2>
    <p className="text-gray-400">Hear directly from our trusted clients who have grown their portfolios with us.</p>
  </div>

  <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
    <div className="swiper init-swiper">
      <div className="swiper-wrapper">

        {/* Testimonial Item */}
        {[
          {
            name: "Saul Goodman",
            title: "Crypto Trader",
            image: "assets/img/testimonials/testimonials-1.jpg",
            feedback: "I’ve seen consistent returns since I started. The platform is intuitive, secure, and transparent. Highly recommend to any serious investor.",
          },
          {
            name: "Sara Wilsson",
            title: "Real Estate Investor",
            image: "assets/img/testimonials/testimonials-2.jpg",
            feedback: "The real estate investment options here are top-tier. I feel confident knowing my money is working for me with a trustworthy company.",
          },
          {
            name: "Jena Karlis",
            title: "Agritech Entrepreneur",
            image: "assets/img/testimonials/testimonials-3.jpg",
            feedback: "As someone in the agriculture industry, I’m impressed with the investment opportunities that support sustainable farming. Excellent service.",
          },
          {
            name: "Matt Brandon",
            title: "Full-time Investor",
            image: "assets/img/testimonials/testimonials-4.jpg",
            feedback: "I’ve diversified my portfolio across crypto, agriculture, and real estate using this platform. The returns are fantastic and the support team is always helpful.",
          },
          {
            name: "John Larson",
            title: "Tech Entrepreneur",
            image: "assets/img/testimonials/testimonials-5.jpg",
            feedback: "Investing with this platform has been a game-changer. The referral bonuses and daily ROIs are unmatched in the industry.",
          }
        ].map((testimonial, index) => (
          <div className="swiper-slide" key={index}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-gray-700"
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <h4 className="text-sm text-indigo-400">{testimonial.title}</h4>
              <div className="flex justify-center text-yellow-400 mt-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill mx-0.5"></i>
                ))}
              </div>
              <p className="italic text-gray-300">
                <i className="bi bi-quote quote-icon-left mr-1"></i>
                {testimonial.feedback}
                <i className="bi bi-quote quote-icon-right ml-1"></i>
              </p>
            </div>
          </div>
        ))}

      </div>
      <div className="swiper-pagination mt-8"></div>
    </div>
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
        <section id="team" className="team section section-bg dark-background">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Meet Our Experts</h2>
  <p>Our dedicated leadership team brings decades of experience in finance, crypto, agriculture, and real estate investments. Together, we drive innovation and trust for our global clientele.</p>
</div>{/* End Section Title */}

<div className="container">
  <div className="row gy-4">

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="Walter White" />
          <div className="social">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>With over 20 years in financial leadership, Walter ensures our strategic growth and investor confidence remain unmatched.</p>
        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="Sarah Johnson" />
          <div className="social">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info">
          <h4>Sarah Johnson</h4>
          <span>Chief Investment Officer</span>
          <p>Sarah leads our investment strategies across crypto, agriculture, and real estate — delivering consistent ROI for clients worldwide.</p>
        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="William Anderson" />
          <div className="social">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info">
          <h4>William Anderson</h4>
          <span>Chief Technology Officer</span>
          <p>From blockchain security to scalable fintech systems, William ensures our platform stays cutting-edge and investor-friendly.</p>
        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="Amanda Jepson" />
          <div className="social">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info">
          <h4>Amanda Jepson</h4>
          <span>Chief Financial Officer</span>
          <p>Amanda oversees our financial planning and regulatory compliance — guaranteeing transparency and investor security.</p>
        </div>
      </div>
    </div>{/* End Team Member */}

  </div>
</div>
</section>

        {/* /Team Section */}

              {/* Clients Section */}
              <section id="clients" className="clients section">

<div className="container" data-aos="fade-up" data-aos-delay="100">
  {/* Section Title */}
  <div className="section-title text-center mb-4">
    <h2 className="text-black">Our Trusted Partners</h2>
    <p className="text-muted">We proudly collaborate with industry-leading organizations across crypto, agriculture, and real estate.</p>
  </div>

  {/* Client Logo Slider */}
  <div className="client-slide text-center">
    <img 
      src={clientLogos[currentClient]} 
      alt={`Partner ${currentClient + 1} Logo`} 
      className="client-logo img-fluid" 
    />
  </div>

  {/* Pagination if needed */}
  <div className="swiper-pagination mt-3"></div>
</div>

</section>

              
              {/* /Clients Section */}
              
        {/* Contact Section */}
        <section id="contact" className="contact section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Contact Us</h2>
  <p>Have questions about our investment plans or services? Reach out to our team — we’re here to help you grow your future.</p>
</div>{/* End Section Title */}

<div className="container" data-aos="fade-up" data-aos-delay="100">
  <div className="row gy-4">
    
    {/* Contact Info */}
    <div className="col-lg-6">
      <div className="row gy-4">

        <div className="col-lg-12">
          <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt"></i>
            <h3>Our Address</h3>
            <p>Suite 108, Finance District, New York, NY 10001</p>
          </div>
        </div>{/* End Info Item */}

        <div className="col-md-6">
          <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+1 (800) 555-8899</p>
          </div>
        </div>{/* End Info Item */}

        <div className="col-md-6">
          <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>support@yourcompany.com</p>
          </div>
        </div>{/* End Info Item */}

      </div>
    </div>

    {/* Contact Form */}
    <div className="col-lg-6">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="500">
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
          </div>

          <div className="col-md-6">
            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="message" rows={4} placeholder="Your Message" required></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you for reaching out!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>{/* End Contact Form */}

  </div>
</div>
</section>

        {/* /Contact Section */}

      </main>
    </div>
  )
}

export default Home