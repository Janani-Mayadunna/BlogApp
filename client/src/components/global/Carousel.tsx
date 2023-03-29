import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemCarousel from "./ItemCarousel";
import slider from "./slider.json";
import image1 from "../../images/cover1.jpg";
import image2 from "../../images/cover2.jpg";

function CarouselF() {
  const imageList = [image1, image2, image2];

  return (
    <Carousel>
      {slider.map((item) => (
        <ItemCarousel key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
export default CarouselF;
