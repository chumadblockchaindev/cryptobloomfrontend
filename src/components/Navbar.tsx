import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const Header = ({ isAuthenticated }: { isAuthenticated: boolean }) => { 
  const [isScrolled, setIsScrolled] = useState(false); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => { const handleScroll = () => { 
  setIsScrolled(window.scrollY > 50); };
   window.addEventListener("scroll", handleScroll); 
   return () => window.removeEventListener("scroll", handleScroll);
   }, []);

return ( 
<header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ isScrolled ? "bg-transparent shadow-md" : "bg-gray-900"}`} > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"> {/* Logo */} <Link to="/" className="text-white font-bold text-xl flex items-center gap-1"> Binary Bloom <span className="text-blue-500 text-2xl">.</span> </Link>

    {/* Desktop Menu */}
    <nav className="hidden xl:flex space-x-8 items-center">
      <a href="/" className="text-white hover:text-blue-400 transition">Home</a>
      <a href="/#about" className="text-white hover:text-blue-400 transition">About</a>
      <a href="/#services" className="text-white hover:text-blue-400 transition">Services</a>
      <a href="/#team" className="text-white hover:text-blue-400 transition">Team</a>
      <a href="/#contact" className="text-white hover:text-blue-400 transition">Contact Us</a>
      {isAuthenticated ? (
        <>
          <Link to="/dashboard" className="text-white hover:text-blue-400 transition">Dashboard</Link>
          <Link to="/logout" className="text-red-500 hover:text-red-400 transition">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login" className="text-white hover:text-blue-400 transition">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</Link>
        </>
      )}
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="xl:hidden text-white text-2xl focus:outline-none"
    >
      {
        mobileMenuOpen ? <MdOutlineCancel />
        :<GiHamburgerMenu />
      }
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {mobileMenuOpen && (
    <div className="xl:hidden bg-gray-900 text-white px-4 pt-4 pb-6 space-y-4">
      <a href="/" className="block hover:text-blue-400">Home</a>
      <a href="/#about" className="block hover:text-blue-400">About</a>
      <a href="/#services" className="block hover:text-blue-400">Services</a>
      <a href="/#team" className="block hover:text-blue-400">Team</a>
      <a href="/#contact" className="block hover:text-blue-400">Contact Us</a>
      {isAuthenticated ? (
        <>
          <Link to="/dashboard" className="block hover:text-blue-400">Dashboard</Link>
          <Link to="/logout" className="block text-red-500 hover:text-red-400">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login" className="block hover:text-blue-400">Login</Link>
          <Link
            to="/register"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </>
      )}
    </div>
  )}
</header>
); };

export default Header;