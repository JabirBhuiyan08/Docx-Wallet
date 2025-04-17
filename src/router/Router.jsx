import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Profile from "../Pages/Profile/Profile";
import DataPolicy from "../Pages/Data Policy/DataPolicy";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "profile",
                element: <Profile></Profile>,
            },
            {
                path: "data-policy",
                element: <DataPolicy></DataPolicy>,
            },
            {
                path: "help-center",
                element: <HelpCenter></HelpCenter>,
            },
            {
                path: "about-us",
                element: <AboutUs></AboutUs>,
            },
        ],
    },
]);
