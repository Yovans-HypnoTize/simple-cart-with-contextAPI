import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import AppLayout from "../layout/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not found</div>,
  },
]);

export default router;
