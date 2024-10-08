import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
// import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy(() => import("./components/Grocery.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const appRoutetr = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..............................</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <ErrorElement />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRoutetr} />
  </>
);
