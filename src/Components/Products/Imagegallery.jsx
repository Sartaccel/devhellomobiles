
    

import React, { useState } from "react";
import "./Imagegallery.css";

function Imagegallery() {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const images = [
    "./images/IMG_0979.png",
    
    "./images/IMG_0984.png",
    "./images/IMG_0985.png",
    "./images/IMG_0986.png",
    "./images/IMG_0987.png",
    "./images/IMG_0983.png",
    "./images/IMG_0990.png",
    "./images/IMG_0991.png",
    "./images/IMG_0992.png",
    "./images/IMG_0993.png",
    "./images/IMG_0994.png",
    "./images/IMG_0995.png",
    "./images/IMG_0996.png",
    "./images/IMG_0997.png",
    "./images/IMG_0998.png",
    "./images/IMG_0999.png",
    "./images/IMG_1001.png",
    "./images/IMG_1003.png",
    "./images/IMG_1004.png",
    "./images/IMG_1006.png",
    "./images/IMG_1007.png",
    "./images/IMG_1008.png",
    "./images/IMG_1009.png",
    "./images/IMG_1010.png",
    "./images/IMG_1011.png",
    "./images/IMG_1012.png",
    "./images/IMG_1013.png",
    
    
    
  ];

  return (
    <>
     {/* Section Heading */}
      <h2 className="gallery-heading">Gallery</h2>
      {/* Masonry Grid */}
      <section className="masonry">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="masonry-img"
            onClick={() => setFullscreenImg(src)}
          />
        ))}
      </section>

      {/* Fullscreen Viewer */}
      {fullscreenImg && (
        <div className="viewer" onClick={() => setFullscreenImg(null)}>
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImg(null);
            }}
          >
            ✕
          </button>

          <img
            src={fullscreenImg}
            className="viewer-img"
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Imagegallery;
