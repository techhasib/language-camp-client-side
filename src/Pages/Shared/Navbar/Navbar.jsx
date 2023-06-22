import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <span className="pt-2 pe-2">
            <strong>{user?.displayName}</strong>
          </span>
          <img
            src={user?.photoURL}
            alt="User"
            className="user-image rounded-full w-10 h-10"
          />
          <button onClick={handleLogOut} className="btn btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-20 bg-[#0072A1] max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {" "}
            <img src={logo} alt="Logo" width="50" height="50" />
            Language Camp
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
