import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        photo: loggedInUser.photoURL,
        name: loggedInUser.displayName,
        email: loggedInUser.email,
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
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <hr />
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          style={{ color: "#0072A1" }}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle style={{ color: "#0072A1" }}></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
