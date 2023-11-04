import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])
 
export default Routers;