import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./TestimonialCarousel.css";

function TestimonialCarousel() {
  return (
    <div className="tcontainer d-flex justify-content-center align-items-center flex-column my-5">
      <h1>Testimonial</h1>

      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-caption">
              <p>
                Surprised and delighted by Hello Mobiles and Future Store! 
                I was super excited to be their very first customer to grab the new iPhone 17 Pro 
                - such a cool moment! Their baby section stole the show too, with adorable clothes, 
                must-have essentials, and cozy blankets. The staff were friendly experts who made the 
                setup a breeze. Five-star service and definitely a must-visit store!

              </p>

              <div id="image-caption"> Mr. SREE RAM J.R <br /> AWECRAZ BRAND SOLUTIONS</div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-caption">
              <p>
                My experience at Hello Mobiles was fantastic! The friendly staff guided me in 
                selecting the ideal iPad and smartwatch that fit my needs and budget. 
                They provided clear explanations and assisted with setting up my devices 
                on the spot. I'm thoroughly enjoying my new gadgets and appreciate the excellent 
                service. I'll definitely be recommending Hello Mobiles & Future Store to my loved ones!
              </p>

              <div id="image-caption">Mrs. SMITHA O.M <br /> DEE VIPANI
</div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-caption">
              <p>
                I am impressed with Hello mobiles and future stores about their outstanding service.
                 So happy with my purchase of a 32-inch TV from them. Highly recommended!!!!!
              </p>

              <div id="image-caption">Mr. Sunjay Jegathish <br /> KVJ sign Industry</div>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="carousel-item">
            <div className="carousel-caption">
              <p>
                Recently I wanted to purchase a mobile phone. Hence I contacted Mr. Mohamed Rafeek,
                owner of Hello Mobiles and future store. His customer service is excellent, 
                he prompted very quickly. He understood my needs and gave me the phone,
                exactly what wanted. He delivered the phone to my place by himself. 
                I was very happy about the purchase and the timely delivery of my phone.
              </p>

              <div id="image-caption">Mrs. Bindhu sumika <br /> Rehoboth Travels</div>
            </div>
          </div>
          {/* Slide 5 */}
          <div className="carousel-item">
            <div className="carousel-caption">
              <p>
                I had a great experience at Hello Mobile- they helped me choose the perfect smart tab,
                 answered all my questions and the purchase process was smooth and friendly. 
                 The price was fair and I've been very happy with how the tab performs. 
                 I highly recommend Hello mobile shop for anyone looking for good service and great tech products!!!!
              </p>

              <div id="image-caption">Mr. GODSAY <br /> NEETX COACHING ACADEMY</div>
            </div>
          </div>

        </div>

        {/* Prev Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <i className="fas fa-arrow-right"></i>
        </button>

      </div>
    </div>
  );
}

export default TestimonialCarousel;
