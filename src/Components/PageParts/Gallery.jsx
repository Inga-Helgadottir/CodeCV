import "../../Styles/Gallery.css";
import arrow from "../../images/arrow.svg";
import { useState } from "react";

const Gallery = () => {
  const [currentImgId, setCurrentImgId] = useState(0);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../images/Jordan-pics", false, /\.(jpg)$/)
  );

  function thumbnailClicked(id) {
    let intId = Number(id);
    setCurrentImgId(intId);
  }

  function nextId(whichArrow) {
    if (whichArrow === "left") {
      if (currentImgId === 0) {
        setCurrentImgId(images.length - 1);
      } else {
        setCurrentImgId(currentImgId - 1);
      }
    } else {
      if (currentImgId === images.length - 1) {
        setCurrentImgId(0);
      } else {
        setCurrentImgId(currentImgId + 1);
      }
    }
  }

  function arrowPressed(whichArrow) {
    let mainImg = document.getElementById("mainImg");
    mainImg.src = images[nextId(whichArrow)];
  }

  return (
    <section className="gallery">
      <img src={images[currentImgId]} alt="Jordan" id="mainImg" />
      <div className="thumbnails">
        {images.map((img, key) => {
          return (
            <img
              key={key}
              src={img}
              id={key}
              alt="thumbnail"
              onClick={(e) => thumbnailClicked(e.target.id)}
              className="thumbnail"
            ></img>
          );
        })}
      </div>
      <div className="arrows">
        <img
          src={arrow}
          onClick={() => arrowPressed("left")}
          alt="left arrow"
          className="arrow left-arrow"
        ></img>
        <img
          src={arrow}
          onClick={() => arrowPressed("right")}
          alt="right arrow"
          className="arrow"
        ></img>
      </div>
    </section>
  );
};

export default Gallery;
