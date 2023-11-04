import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
])
 
export default Routers;