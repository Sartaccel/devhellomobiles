import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import TestimonialCarousel from "./TestimonialCarousel";

function Home() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
{/* ------------------------------------------------------Hero section------------------------------------------*/}
      <section
        className="hero-section text-light d-flex align-items-center"
        style={{ backgroundImage: "url(/images/herobg.png)" }}
      >
        <div className="homecontainer">
          <div className="row align-items-center">
            <div className="content col-lg-6 col-md-8 col-sm-12 text-start">
              <h1 className="display-5 fw-bold mb-3">
                Welcome to <br />
                HELLO MOBILES
              </h1>
              <h5 className="mb-4">The Future, in Your Hands.</h5>
              <p>
                Explore mobiles, accessories, perfumes, toys, gifts and more all under one roof.

              </p>
              
            </div>
            <div className="homebutton d-flex flex-wrap gap-3">
                <a
                  href="/products"
                  className="btn1 btn-custom btn-lg px-4 fw-semibold"
                >
                  Explore Our Collections
                </a>
                <a
                  href="/contact"
                  className="btn2 btn-custom btn-lg px-4 fw-semibold"
                >
                  Visit Our Store
                </a>
              </div>
          </div>
        </div>
      </section>

{/* ------------------------------------------------------About section------------------------------------------*/}
      <section
        ref={aboutRef}
        className={`about-section ${isVisible ? "active" : ""}`}
      >
        <div className="container about-container d-flex align-items-center justify-content-between flex-wrap">
          <div className="about-img">
            <img src="/images/abouthero.png" alt="About Hello Mobiles" />
          </div>
          <div className="about-text text-light">
            <h2>About Hello Mobiles</h2>
            <p>
              At Hello Mobiles we bring you the latest in technology and lifestyle products. 
              From smartphones and accessories to gifts perfumes and toys our store is your 
              one-stop destination for innovation and quality. Discover top brands great deals 
              and friendly service all designed to make your shopping experience exceptional.
            </p>
          </div>
        </div>
        
      </section>
{/* ------------------------------------------------------category section------------------------------------------*/}
  <section className="catalog-section py-5">
  <div className="container">
    <header className="catalog-header text-center mb-5">
      <h2 className="fw-bold mb-2">Explore Our Product Range</h2>
      <p className="text-muted mb-0">
        From gadgets to gifts, discover everything in one place!
      </p>
    </header>

    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/mobacces.png"
              alt="Mobiles & Accessories"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Mobiles & Accessories</h5>
            <p className="card-text">
             Find smartphones, chargers, cables, Bluetooth headsets and mobile cases from trusted brands.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/comaccess.png"
              alt="Computer & Electronic Accessories"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Computer & Electronic Accessories</h5>
            <p className="card-text">
              Keyboards, mice, pen drives, speakers, adapters, and home gadgets.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/flowperfume.png"
              alt="Perfumes & Artificial Flowers"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Perfumes & Artificial Flowers</h5>
            <p className="card-text">
              Imported fragrances and elegant artificial flowers for gifting and decor.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/kidstoys.png"
              alt="Gifts, Toys & Kids’ World"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Gifts, Toys & Kids’ World</h5>
            <p className="card-text">
              Educational toys, soft toys, and creative gifts that bring joy to every age.
            </p>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/bags.png"
              alt="Ladies Handbags & Fashion Items"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Ladies Handbags & Fashion Items</h5>
            <p className="card-text">
              Trendy handbags and stylish accessories for every occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/sweetsnuts.png"
              alt="Exported Sweets & Nuts"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Imported Sweets & Nuts</h5>
            <p className="card-text">
              Imported dry fruits, chocolates, and premium nuts packed with flavor and freshness.
            </p>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/kitchen.png"
              alt="Kitchen Utilities"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Kitchen Utilities</h5>
            <p className="card-text">
              Smart and stylish kitchen tools that make cooking easy and efficient.
            </p>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card product-card h-100 border-0 shadow-sm rounded-4">
          <div className="img-wrapper">
            <img
              src="/images/watchclock.png"
              alt="Watches & Clocks"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Watches & Clocks</h5>
            <p className="card-text">
              A wide variety of modern, classic, and exported watches for men and women.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* -------------------------Why Customers Love Shopping With Us ---------------*/}
<section className="customer-section">
  <h1 className="customer-heading">Why Customers Love Shopping With Us</h1>

  <div className="customer-timeline">
    <div className="customer-item">
      <div className="customer-icon">
        <img src="/images/one.png" alt="Experience Icon" />
      </div>
      <div className="customer-content">
        <h4>13+ Years of Experience</h4>
        <p>A trusted brand since 2012.</p>
      </div>
    </div>

    <div className="customer-item">
      <div className="customer-icon">
        <img src="/images/two.png" alt="Genuine Products Icon" />
      </div>
      <div className="customer-content">
        <h4>Genuine Products</h4>
        <p>100% quality assured.</p>
      </div>
    </div>

    <div className="customer-item">
      <div className="customer-icon">
        <img src="/images/three.png" alt="Best Prices Icon" />
      </div>
      <div className="customer-content">
        <h4>Best Prices</h4>
        <p>Great value without compromise.</p>
      </div>
    </div>

    <div className="customer-item">
      <div className="customer-icon">
        <img src="/images/four.png" alt="Huge Range Icon" />
      </div>
      <div className="customer-content">
        <h4>Huge Product Range</h4>
        <p>Everything you need in one store.</p>
      </div>
    </div>

    <div className="customer-item">
      <div className="customer-icon">
        <img src="/images/five.png" alt="For Every Lifestyle Icon" />
      </div>
      <div className="customer-content">
        <h4>For Every Lifestyle</h4>
        <p>From daily essentials to special occasions.</p>
      </div>
    </div>

    <div className="customer-item">
      <div className="customer-icon">
        <img src="/images/six.png" alt="Friendly Service Icon" />
      </div>
      <div className="customer-content">
        <h4>Friendly Service</h4>
        <p>Our team ensures a smooth shopping experience.</p>
      </div>
    </div>
  </div>
</section>

<TestimonialCarousel/>
    </>
  );
}

export default Home;
