import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '@/components/Navbar';

export interface LayoutProps {  // Define the props for the Layout component
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
   

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <main>
        {children}
      </main>
      <footer id="footer" className="footer dark-background text-light pt-5 pb-4">
  <div className="container footer-top">
    <div className="row gy-4">
      {/* About Section */}
      <div className="col-lg-4 col-md-6 footer-about">
        <a href="/" className="logo d-flex align-items-center mb-3">
          <h2 className="sitename m-0">Binary Bloom</h2>
        </a>
        <div className="footer-contact">
          <p>📍 A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p className="mt-3">
            <strong>📞 Phone:</strong> <span>+1 5589 55488 55</span>
          </p>
          <p>
            <strong>📧 Email:</strong> <span>info@example.com</span>
          </p>
        </div>
        <div className="social-links d-flex mt-4 gap-3">
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

      {/* Useful Links */}
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacypolicy">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Services Links */}
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#">Crypto Investment</a></li>
          <li><a href="#">Agricultural Funding</a></li>
          <li><a href="#">Real Estate</a></li>
          <li><a href="#">Market Analysis</a></li>
          <li><a href="#">Consultancy</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="col-lg-4 col-md-12 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Subscribe to receive updates and insights from the Binary Bloom team.</p>
        <form action="forms/newsletter.php" method="post" className="php-email-form">
          <div className="newsletter-form d-flex">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="form-control me-2"
            />
            <input type="submit" value="Subscribe" className="btn btn-primary" />
          </div>
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your subscription request has been sent. Thank you!</div>
        </form>
      </div>
    </div>
  </div>

  <div className="container text-center mt-5">
    <p>
      © {new Date().getFullYear()} <strong className="sitename">Binary Bloom</strong>. All Rights Reserved
    </p>
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">Chumatech</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Layout;