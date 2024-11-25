import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ShopContextProvider from "./context/ShopContextProvider";
import DetailPage from "./pages/Shop/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
