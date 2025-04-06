import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Dummy API Call
    const data = {
      name: "Bharat Singhani",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ LoggedInUser: userName }}>
      <div id="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
