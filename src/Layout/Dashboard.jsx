import { Link, Outlet } from "react-router-dom";
import { FaShoppingBag, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const Dashboard = () => {
  const [cart] = useCart();

  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  // const isInstuctor = true
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <AdminHome></AdminHome>
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link>
                  <FaWallet></FaWallet>Admin Home
                </Link>
              </li>
              <li>
                <Link to="mycart">
                  <FaShoppingBag></FaShoppingBag>My Cart
                  <span className="badge badge-secondary">
                    {cart?.length || 0}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="addcourse">
                  <FaWallet></FaWallet>Add A Course
                </Link>
              </li>

              <li>
                <Link>
                  <FaWallet></FaWallet>Payment Area
                </Link>
              </li>
              <li>
                <Link to="allstudents">
                  <FaWallet></FaWallet>All Student
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="mycart">
                  <FaShoppingBag></FaShoppingBag>My Cart
                  <span className="badge badge-secondary">
                    {cart?.length || 0}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaWallet></FaWallet>Payment Area
                </Link>
              </li>
              <li>
                <Link>
                  <FaWallet></FaWallet>User Home
                </Link>
              </li>
              <li>
                <Link>
                  <FaWallet></FaWallet>Payment History
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaWallet></FaWallet>Website Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
