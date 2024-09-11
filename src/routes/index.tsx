import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import App from "../App";
import Rooms from "../pages/Rooms";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Error from "../components/Error";
import RoomDetails from "../components/RoomComponents/RoomDetails";
import Slots from "../components/Slot/Slots";
import PrivateRoute from "./PrivateRoute";
import MyBooking from "../pages/MyBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/slots/:id",
        element: (
          <PrivateRoute>
            <Slots />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
