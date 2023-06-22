import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from "../../../assets/home/sliderone.jpg";
import slider2 from "../../../assets/home/slidertwo.jpg";
import slider3 from "../../../assets/home/sliderthree.jpg";

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src={slider1} />
      </div>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
    </Carousel>
  );
};

export default Slider;
