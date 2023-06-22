import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post("/class", data);
      const { data: responseData } = response;

      if (responseData.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add item",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-full px-10">
      <SectionTitle heading="Add A Course" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Image</span>
          </label>
          <input
            type="text"
            placeholder="Class Image"
            {...register("Class Image", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            {...register("teacher", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="email"
            placeholder="Instructor Email"
            {...register("instructor_email", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Image</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Image"
            {...register("instructor_image", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Available Seats</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            {...register("available_seats", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            {...register("price", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <input className="btn m-4" type="submit" value="Add Course" />
      </form>
    </div>
  );
};

export default AddItem;
