import Instructors from "../Instructors/Instructors";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClass></PopularClass>
      <Instructors></Instructors>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
