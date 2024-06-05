import { useState } from "react";
import Imagenes from "../assets/gistImages";
import "../styles/ImageGallery.css";

const ImageGallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  console.log(Imagenes);
  const selectHero = (data) => {
    setSelectedImage(data.target)
    console.log(selectedImage)
    setOpenModal(true);
  }

  return (
    <>
      <h2>Disfruta tu estadia en la galeria!</h2>
      <div className="galeria">
        {Imagenes.map((element) => (
          <img
            key={element.img}
            src={element.img}
            alt="image"
            loading="lazy"
            className="heroImg"
            onClick={selectHero}
          />
        ))}
      </div>
      {!!openModal && (
        <img src={selectedImage.src}/>
      )}
    </>
  );
};

export default ImageGallery;
