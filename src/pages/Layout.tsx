import { useAuth } from '../context/AuthContext';
import Header from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const { isAuthenticated } = useAuth();
   

  return (
    <div data-aos="fade-up">
      <Header isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-gray-200 pt-12 pb-8">
  <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* About Section */}
      <div data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-white mb-4">Binary Bloom</h2>
        <p className="text-sm text-gray-400 mb-4">
          Empowering your investments across crypto, agriculture, and real estate with intelligent strategies and trusted support.
        </p>
        <div data-aos="fade-up" className="space-y-1 text-sm text-gray-400">
          <p><i className="fa-solid fa-location-dot text-indigo-400 mr-2"></i> A108 Adam Street, New York, NY</p>
          <p><i className="fa-solid fa-phone text-indigo-400 mr-2"></i> +1 5589 55488 55</p>
          <p><i className="fa-solid fa-envelope text-indigo-400 mr-2"></i> info@example.com</p>
        </div>
        <div data-aos="fade-up" className="flex space-x-4 mt-4 text-xl text-white">
          <a href="#" className="hover:text-indigo-400"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" className="hover:text-indigo-400"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="hover:text-indigo-400"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-indigo-400"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Quick Links */}
      <div data-aos="fade-up">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-indigo-400">Home</a></li>
          <li><a href="/#about" className="hover:text-indigo-400">About Us</a></li>
          <li><a href="/#services" className="hover:text-indigo-400">Services</a></li>
          <li><a href="/terms" className="hover:text-indigo-400">Terms of Service</a></li>
          <li><a href="/privacypolicy" className="hover:text-indigo-400">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Services */}
      <div data-aos="fade-up">
        <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-indigo-400">Crypto Investment</a></li>
          <li><a href="#" className="hover:text-indigo-400">Agricultural Funding</a></li>
          <li><a href="#" className="hover:text-indigo-400">Real Estate</a></li>
          <li><a href="#" className="hover:text-indigo-400">Market Analysis</a></li>
          <li><a href="#" className="hover:text-indigo-400">Consultancy</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div data-aos="fade-up">
        <h3 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h3>
        <p className="text-sm text-gray-400 mb-4">
          Stay informed with the latest updates and insights from our experts.
        </p>
        <form action="forms/newsletter.php" method="post" className="flex flex-col space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition"
          >
            Subscribe
          </button>
          <div data-aos="fade-up" className="loading text-sm text-gray-400">Loading...</div>
          <div data-aos="fade-up" className="error-message text-sm text-red-500"></div>
          <div data-aos="fade-up" className="sent-message text-sm text-green-500">Thank you for subscribing!</div>
        </form>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} <span className="text-white font-semibold">Binary Bloom</span>. All rights reserved.
      </p>
      <p className="mt-1">
        Designed by <a href="https://bootstrapmade.com/" className="text-indigo-400 hover:underline">Chumatech</a>
      </p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Layout;