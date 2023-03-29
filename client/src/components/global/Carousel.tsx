import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemCarousel from "./ItemCarousel";
import slider from "./slider.json";

function CarouselF() {
  return (
    <Carousel>
      {slider.map((item) => (
        <ItemCarousel key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
export default CarouselF;
