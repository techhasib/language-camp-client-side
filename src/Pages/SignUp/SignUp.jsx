import Swal from "sweetalert2";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/login.jpg";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            photo: data.photoURL,
            name: data.displayName,
            email: data.email,
          };
          fetch(
            "https://b7a12-summer-camp-server-side-coderhasib23.vercel.app/users",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="w-70 mr-12 mx-8">
            <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
            <img className="rounded-2xl mt-6" src={img} alt="" />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-yellow-600">Email field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-yellow-600">
                  Confirm Password field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-yellow-600">
                  Password Must be six characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-yellow-600">
                  Use Number and lowercase
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirm", { required: true, minLength: 6 })}
                name="confirm"
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              {errors.confirm?.type === "required" && (
                <span className="text-yellow-600">
                  Confirm Password field is required
                </span>
              )}
              {errors.confirm?.type === "minLength" && (
                <span className="text-yellow-600">
                  Password Must be six characters
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-yellow-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Registration Now"
              />
            </div>
          </form>
          <p className="text-center mb-3">
            Already Have an Account?{" "}
            <Link to="/login">
              <strong>Sign in</strong>
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
