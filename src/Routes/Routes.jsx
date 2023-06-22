import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/Notfound";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllStudents from "../Pages/Dashboard/AllStudents/AllStudents";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        ),
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "instructor",
            element: <Instructor></Instructor>,
          },
          {
            path: "classes",
            element: <Classes></Classes>,
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "signup",
            element: <SignUp></SignUp>,
          },
          {
            path: "secret",
            element: (
              <PrivateRoute>
                <Secret></Secret>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "*",
            element: <NotFound></NotFound>,
          },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment> </Payment>,
      },
      {
        path: "allstudents",
        element: (
          <AdminRoute>
            <AllStudents></AllStudents>
          </AdminRoute>
        ),
      },
      {
        path: "addcourse",
        element: (
          <AdminRoute>
            <AddCourse></AddCourse>
          </AdminRoute>
        ),
      },
    ],
  },
]);
