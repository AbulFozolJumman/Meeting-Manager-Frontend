import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to="/dashboard/my-dashboard" />,
  //     },
  //     {
  //       path: "my-dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "events",
  //       element: <Events />,
  //     },
  //     {
  //       path: "event-services",
  //       element: <EventServices />,
  //     },
  //     {
  //       path: "event-items",
  //       element: <EventItems />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
