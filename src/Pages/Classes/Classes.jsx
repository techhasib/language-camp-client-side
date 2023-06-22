import coverImg from "../../assets/coverpage.jpg";
import PopularClass from "../Home/PopularClass/PopularClass";
import PageCover from "../Shared/PageCover/PageCover";

const Classes = () => {
  return (
    <div>
      <PageCover img={coverImg} title="Classes"></PageCover>
      <PopularClass></PopularClass>
    </div>
  );
};

export default Classes;
