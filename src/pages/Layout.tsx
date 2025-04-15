import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export interface LayoutProps {  // Define the props for the Layout component
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
   

  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <a href="index.html" className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className="sitename">Binary Bloom</h1>
            <span>.</span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/" className="active">Home<br /></a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#team">Team</a></li>
              <li><a href="contact">Contact us</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          {isAuthenticated ? (
            <div className='ml-4 space-x-4 hidden sm:block'> 
                <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
                <a href='logout' className="hover:text-yellow-300">Logout</a>
            </div>
            ) : (
                <div className='ml-4 space-x-4 hidden sm:block'>
                    <Link to="/login" className="hover:text-yellow-300">Login</Link>
                    <Link className="btn-getstarted" to="/register">Get Started</Link>
                </div>
            )}
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">Presento</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                  <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="about">About us</a></li>
                  <li><a href="services">Services</a></li>
                  <li><a href="terms">Terms of service</a></li>
                  <li><a href="privacypolicy">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                </form>
              </div>
            </div>
          </div>

          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Presento</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by <a href="https://bootstrapmade.com/">Chumatech</a>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Layout;