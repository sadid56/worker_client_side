import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
// import Navber from "../shared/Navber/Navber";

const Main = () => {
    return ( 
        <div>
            {/* <Navber/> */}
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default Main;