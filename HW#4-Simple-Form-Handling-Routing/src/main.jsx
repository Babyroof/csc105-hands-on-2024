import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SignUpPage from "./pages/SingUpPage.jsx";

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },


  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },

  {
    path: "/fav",
    element: <FavouritesPage />,
  },

  {
    path: "/fav/:id",
    element: <FavouriteDetailPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
