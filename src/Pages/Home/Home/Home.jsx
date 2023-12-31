import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Jobs from "../Jobs/Jobs";
import MobileAddApp from "../MobileAppAdd/MobileAppAdd";
import Rivew from "../Rivew/Rivew";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
    return ( 
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Worker | Home</title>
            </Helmet>

            <Banner/>
            <Jobs/>
            <MobileAddApp/>
            <Rivew/>
            <Subscribe/>
        </div>
     );
}
 
export default Home;