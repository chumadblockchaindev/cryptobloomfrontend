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

        </section>{/* /Hero Section */}

        {/* Tabs Section */}
        <section id="about" className="tabs section">

          <div className="container">

            <ul className="nav nav-tabs row  d-flex" data-aos="fade-up" data-aos-delay="100">
              <li className="nav-item col-3">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tabs-tab-1">
                  <i className="bi bi-binoculars"></i>
                  <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tabs-tab-2">
                  <i className="bi bi-box-seam"></i>
                  <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tabs-tab-3">
                  <i className="bi bi-brightness-high"></i>
                  <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tabs-tab-4">
                  <i className="bi bi-command"></i>
                  <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
                </a>
              </li>
            </ul>{/* End Tab Nav */}

            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

              <div className="tab-pane fade active show" id="tabs-tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i>
                        <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                      </li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit</span>.</li>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-1.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>{/* End Tab Content Item */}

              <div className="tab-pane fade" id="tabs-tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-2.jpg" alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>{/* End Tab Content Item */}

              <div className="tab-pane fade" id="tabs-tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-3.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>{/* End Tab Content Item */}

              <div className="tab-pane fade" id="tabs-tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/working-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>{/* End Tab Content Item */}

            </div>

          </div>

        </section>{/* /Tabs Section */}

      {/* Services Section */}
      <section id="services" className="services section section-bg dark-background">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>{/* End Section Title */}

        <div className="container">

          <div className="row gy-4">

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-briefcase icon flex-shrink-0"></i>
                <div>
                  <h4 className="title"><a href="service-details.html" className="stretched-link">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
            </div>{/* End Service Item */}

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-card-checklist icon flex-shrink-0"></i>
                <div>
                  <h4 className="title"><a href="service-details.html" className="stretched-link">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
            </div>{/* End Service Item */}

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-bar-chart icon flex-shrink-0"></i>
                <div>
                  <h4 className="title"><a href="service-details.html" className="stretched-link">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
            </div>{/* End Service Item */}

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-binoculars icon flex-shrink-0"></i>
                <div>
                  <h4 className="title"><a href="service-details.html" className="stretched-link">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
            </div>{/* End Service Item */}

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-brightness-high icon flex-shrink-0"></i>
                <div>
                  <h4 className="title"><a href="service-details.html" className="stretched-link">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>
            </div>{/* End Service Item */}

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-calendar4-week icon flex-shrink-0"></i>
                <div>
                  <h4 className="title"><a href="service-details.html" className="stretched-link">Eiusmod Tempor</a></h4>
                  <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>{/* End Service Item */}

          </div>

        </div>

      </section>{/* /Services Section */}

        {/* Stats Section */}
        <section id="stats" className="stats section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-emoji-smile"></i>
                <div className="stats-item">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>2345</p>
                  <p>Happy Clients</p>
                </div>
              </div>{/* End Stats Item */}

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-journal-richtext"></i>
                <div className="stats-item">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>10000</p>
                  <p>Payouts</p>
                </div>
              </div>{/* End Stats Item */}

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-headset"></i>
                <div className="stats-item">
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                  <p>24/7</p>
                  <p>Hours Of Support</p>
                </div>
              </div>{/* End Stats Item */}

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-people"></i>
                <div className="stats-item">
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                  <p>150</p>
                  <p>Dedicated Team</p>
                </div>
              </div>{/* End Stats Item */}

            </div>

          </div>

        </section>{/* /Stats Section */}

                {/* Pricing Section */}
    <section id="pricing" className="pricing section section-bg dark-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Investment Plans</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="row g-4 g-lg-0">

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Bronze Plan</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>{/* End Pricing Item */}

          <div className="col-lg-4 featured" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item">
              <h3>Diamond Plan</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>{/* End Pricing Item */}

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Gold Plan</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>{/* End Pricing Item */}

        </div>

      </div>

      </section>{/* /Pricing Section */}

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="swiper init-swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>{/* End testimonial item */}

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>

        </section>{/* /Testimonials Section */}

        {/* Faq Section */}
        <section id="faq" className="faq section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">

                <div className="faq-container">

                  <div className="faq-item faq-active">
                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item*/}

                  <div className="faq-item">
                    <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item*/}

                  <div className="faq-item">
                    <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item*/}

                  <div className="faq-item">
                    <h3>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item*/}

                  <div className="faq-item">
                    <h3>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
                    <div className="faq-content">
                      <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item*/}

                  <div className="faq-item">
                    <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                    <div className="faq-content">
                      <p>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{/* End Faq item*/}

                </div>

              </div>{/* End Faq Column*/}

            </div>

          </div>

        </section>{/* /Faq Section */}

        {/* Team Section */}
        <section id="team" className="team section section-bg dark-background">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>{/* End Team Member */}

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>{/* End Team Member */}

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>{/* End Team Member */}

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>{/* End Team Member */}

            </div>

          </div>

        </section>{/* /Team Section */}

              {/* Clients Section */}
              <section id="clients" className="clients section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2 className='text-black'>Our Partners</h2>
                    <div className="client-slide">
                      <img src={clientLogos[currentClient]} alt={`Client ${currentClient + 1} Logo`} className="client-logo" />
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
              </section>{/* /Clients Section */}
              
        {/* Contact Section */}
        <section id="contact" className="contact section">

          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>{/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">
              <div className="col-lg-6 ">
                <div className="row gy-4">

                  <div className="col-lg-12">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>{/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>{/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>{/* End Info Item */}

                </div>
              </div>

              <div className="col-lg-6">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="500">
                  <div className="row gy-4">

                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>

                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={4} placeholder="Message" required />
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit">Send Message</button>
                    </div>

                  </div>
                </form>
              </div>{/* End Contact Form */}

            </div>

          </div>

        </section>{/* /Contact Section */}

      </main>
    </div>
  )
}

export default Home