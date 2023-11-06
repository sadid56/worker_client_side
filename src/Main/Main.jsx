import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
// import Navber from "../shared/Navber/Navber";

const Main = () => {
    return ( 
        <div>
            <Toaster/>
            {/* <Navber/> */}
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Main;