import img from "../../assets/404.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="text-center card w-100 bg-base-100 shadow-xl rounded-xl ">
        <figure>
          <img className="max-h-screen" src={img} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default NotFound;
