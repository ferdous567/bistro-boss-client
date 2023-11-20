import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/contact/Contact";
import Dashboard from "../pages/dashboard/Dashboard";
import OurShop from "../pages/ourShop/OurShop";
import OurMenu from "../pages/ourMenu/OurMenu";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/dashboardUser/Cart/Cart";
import AllUser from "../pages/dashboardUser/allUser/AllUser";
import AddItems from "../pages/dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import UpdateItem from "../pages/dashboard/updateItem/UpdateItem";
import Payment from "../pages/dashboard/payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
      },

      {
        path: '/shop/:category',
        element: <OurShop></OurShop>
      },
      {
        path: '/menu',
        element: <OurMenu></OurMenu>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/dashboard',
    element:
      <Dashboard></Dashboard>,
    children: [
      // normal user

      {
        path: 'carts',
        element: <PrivateRoute>
          <Cart></Cart>
        </PrivateRoute>
      },

      // admin pannel
      {
        path: 'addItems',
        element: <AdminRoute>
          <AddItems></AddItems>
        </AdminRoute>
      },

      {
        path: 'allUsers',
        element: <AdminRoute>
          <AllUser></AllUser>
        </AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute>
          <ManageItems></ManageItems>
        </AdminRoute>
      },
      {
        path: 'updateItems/:id',
        element: <AdminRoute>
          <UpdateItem></UpdateItem>
        </AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5100/menu/${params.id}`)
      },
      {
        path: 'payment',
        element: <AdminRoute>
          <Payment></Payment>
        </AdminRoute>
      }
    ]

  },
]);


export default router;