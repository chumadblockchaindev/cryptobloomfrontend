import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated }: {isAuthenticated: boolean}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll listener for background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      id="header"
      className={`header sticky-top d-flex align-items-center ${
        isScrolled ? "bg-dark shadow-sm" : "bg-transparent"
      } transition-all`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center text-decoration-none">
          <h1 className={`sitename mb-0 ${isScrolled && "text-white"}`}>Binary Bloom</h1>
          <span className="text-primary fs-4">.</span>
        </Link>

        {/* Nav Menu */}
        <nav id="navmenu" className={`navmenu ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="d-flex align-items-center gap-4 mb-0 flex-column flex-xl-row">
            <li><a href="/" className={`${isScrolled && "text-white"}`}>Home</a></li>
            <li><a href="/#about" className={`${isScrolled && "text-white"}`}>About</a></li>
            <li><a href="/#services" className={`${isScrolled && "text-white"}`}>Services</a></li>
            <li><a href="/#team" className={`${isScrolled && "text-white"}`}>Team</a></li>
            <li><a href="/contact" className={`${isScrolled && "text-white"}`}>Contact Us</a></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout" className="text-danger">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className={`${isScrolled && "text-white"}`}>Login</Link></li>
                <li><Link className="btn btn-primary" to="/register">Get Started</Link></li>
              </>
            )}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${mobileMenuOpen ? "bi-x" : "bi-list"}`}
          onClick={toggleMobileMenu}
          style={{ fontSize: "28px", cursor: "pointer", color: "#fff" }}
          aria-label="Toggle navigation"
        ></i>
      </div>
    </header>
  );
};

export default Header;
