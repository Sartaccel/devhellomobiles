import React, { useRef, useState, useEffect } from "react";
import "./Product.css";
import Imagegallery from "./Imagegallery";

function Product() {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [opened, setOpened] = useState(null); // ← NEW

  const cards = [
    {
      bg: "./images/imageMA.png",
      thumb: "./images/mobileaccessories.png",
      title: "Mobiles & Accessories",
      desc: "Performance that keeps you moving.",
    },
    {
      bg: "./images/imagekids.png",
      thumb: "./images/toysgallery.png",
      title: "Kids toys & Gifts",
      desc: "Fun that follows their curiosity.",
    },
    {
      bg: "./images/imagesweet.png",
      thumb:  "./images/sweetgallery.png",
      title: "Imported Sweets & Nuts",
      desc: "Flavors from around the world.",
    },
    {
      bg: "./images/imagebags.png",
      thumb: "./images/bagsgallery.png",
      title: "Ladies Handbags",
      desc: "Style that carries confidence.",
    },
    {
      bg: "./images/imagewatch.png",
      thumb: "./images/watchgallery.png",
      title: "Watches & Clocks",
      desc: "Classic designs with modern touch.",
    },
    {
      bg: "./images/imageflower.png",
      thumb: "./images/perfumegallery.png",
      title: "Perfumes & Artificial Flowers",
      desc: "Style your space and yourself with elegance.",
    }
  ];

  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  const centerCard = (i) => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const card = track.children[i];

    if (!wrap || !track || !card) return;

    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";

    const start = isMobile() ? card.offsetTop : card.offsetLeft;

    wrap.scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: "smooth"
    });
  };

  const go = (step) => {
    const nextIndex = Math.min(Math.max(current + step, 0), cards.length - 1);
    setCurrent(nextIndex);
    setOpened(nextIndex); // NEXT/PREV should open the card
  };

  useEffect(() => {
    centerCard(current);
  }, [current]);

  return (
    <>
      <section className="services-section">

        {/* Header */}
        <div className="head d-flex justify-content-between align-items-center">
          <h2>Our Products</h2>

          <div className="controls">
            <button
              className="nav-btn"
              onClick={() => go(-1)}
              disabled={current === 0}
            >
              ‹
            </button>
            <button
              className="nav-btn"
              onClick={() => go(1)}
              disabled={current === cards.length - 1}
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="slider" ref={wrapRef}>
          <div className="track" ref={trackRef}>

            {cards.map((c, i) => (
              <article
                key={i}
                id={`card-${i}`}
                className={`
                  project-card 
                  ${current === i ? "active" : ""} 
                  ${opened === i ? "opened" : ""}
                `}
                onClick={() => {
  if (opened === i) {
    // If clicking the same opened card → CLOSE IT
    setOpened(null);
  } else {
    // Otherwise → OPEN NEW CARD
    setOpened(i);
    setCurrent(i);
  }
}}

// ← CLICK OPENS THE CARD
              >
                <img className="project-card__bg" src={c.bg} alt="" />

                <div className="project-card__content">
                  <img className="project-card__thumb" src={c.thumb} alt="" />

                  <div>
                    <h3 className="project-card__title">{c.title}</h3>
                    <p className="project-card__desc">{c.desc}</p>
                    <a href="/contact" className="project-card__btn">Details</a>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* Dots */}
        {!isMobile() && (
          <div className="dots">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => { setCurrent(i); setOpened(i); }}
              ></span>
            ))}
          </div>
        )}
      </section>

      <Imagegallery />
    </>
  );
}

export default Product;
