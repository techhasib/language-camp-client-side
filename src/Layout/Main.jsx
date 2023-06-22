import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname !== "/"; 
  return (
    <div>
      {!hideNavAndFooter && <Navbar />}
      <Outlet></Outlet> 
    </div>
  );
};

export default Main;
