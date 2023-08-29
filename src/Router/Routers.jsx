import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../Pages/HomePage/home";
import { PeopleShow } from "../Pages/PeopleShow/PeopleShow";
import { Login } from "../Pages/Components/Shared/Login";
import { Signup } from "../Pages/Components/Shared/Signup";

export const router = createBrowserRouter([
    {path: "/", element: <Layout></Layout>, children: [
        {path: "/", element: <PeopleShow></PeopleShow>},
        {path: "/home", element: <Home></Home>},
        {path: "/login", element: <Login></Login>},
        {path: "/signup", element: <Signup></Signup>}
    ]}
])
