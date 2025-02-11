import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "additems",
                element: <AddItems></AddItems>
            },
            {
                path: "manageItems",
                element: <ManageItems></ManageItems>
            }
        ]
    }
]);