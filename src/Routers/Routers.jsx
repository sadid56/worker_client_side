import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Error from "../shared/Error/Error";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            }
        ]
    }
])
 
export default Routers;