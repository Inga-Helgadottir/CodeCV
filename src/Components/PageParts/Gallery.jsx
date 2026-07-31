import "../../Styles/Gallery.css";
import { useState } from "react";
import Arrow from "./Arrow";

const Gallery = () => {
  const [currentImgId, setCurrentImgId] = useState(0);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const images = importAll(
    require.context("../../images/Jordan-pics", false, /\.(jpg)$/),
  );

  const thumbnailClicked = (id) => {
    let intId = Number(id);
    setCurrentImgId(intId);
  };

  const nextId = (whichArrow) => {
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
  };

  return (
    <div className="gallery">
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
        <Arrow onClick={() => nextId("left")} />
        <Arrow onClick={() => nextId("right")} />
      </div>
    </div>
  );
};

export default Gallery;
