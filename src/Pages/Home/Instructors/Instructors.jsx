import { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-coderhasib23.vercel.app/class")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

  return (
    <div>
      <div className="divider"></div>
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4 m-8">
        {classData.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl ">
            <img
              className="px-10 pt-10"
              src={item.instructor_image}
              alt={item.image}
            />
            <div className="card-body">
              <div className="text-2xl font-bold text-gray-500 dark:text-gray-200">
                <span>Instructor: {item.instructor_name}</span>
                <p className="text-lg font-bold text-black dark:text-white">
                  Email: {item.instructor_email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
