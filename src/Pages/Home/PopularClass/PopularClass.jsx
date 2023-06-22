import Swal from "sweetalert2";
import { useState, useEffect, } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const PopularClass = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-coderhasib23.vercel.app/class")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("https://b7a12-summer-camp-server-side-coderhasib23.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Buy This Course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <SectionTitle heading={"Popular Classes"}></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4 m-8">
        {classData.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl ">
            <img className="px-10 pt-10" src={item.image} alt={item.name} />
            <div className="card-body">
              <div className="text-2xl font-medium text-gray-800 dark:text-white">
                Language Name: {item.name}
              </div>
              <h2 className="card-title"></h2>
              <h2 className="card-title">
                Instructor name: {item.instructor_name}
              </h2>
              <p></p>
              <p className="text-lg font-bold text-black dark:text-white">
                Available seats: {item.available_seats}
              </p>
              <div className="text-2xl font-bold text-gray-500 dark:text-gray-200">
                <span>Price: ${item.price}</span>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn bg-[#0072A1] text-white hover:text-black "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
