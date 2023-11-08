import { useEffect } from "react";
import addAppBg from "../../../assets/images/addApp.jpg";
import adds from '../../../assets/images/adds.png'
import Aos from "aos";
import 'aos/dist/aos.css';
const MobileAddApp = () => {

  useEffect(() => {
    Aos.init({
      duration: 1500, 
      // offset: 200,
    });
  }, []);
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${addAppBg})`,
        }}>
        <div className="hero-overlay"></div>

          <div className=" flex gap-5 flex-col md:flex-row px-5 w-full max-w-6xl mx-auto py-10">
            <div data-aos='fade-right' className="flex-1 flex justify-center">
              <img
                src={adds}
                className="max-w-md rounded-lg shadow-2xl"
              />
            </div>
            <div data-aos='fade-left' className="flex-1 space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Download our mobile app</h1>
              <p className=" text-white">
                Search through millions of jobs and find the right fit. Simply
                swipe right to apply.
              </p>
              <p className="text-success"><i className="fa-solid fa-check"></i> Save jobs and searches</p>
              <p className="text-success"><i className="fa-solid fa-check"></i> Apply direct from the job app</p>
              <p className="text-success"><i className="fa-solid fa-check"></i> Get instant job notifications</p>
              <div className="flex items-center gap-1">
                <div data-aos="fade-up" className="flex items-center gap-2 bg-black w-fit p-3 rounded-md">
                <i className="fa-brands fa-apple text-4xl text-white"></i> 
                <div>
                    <p className="text-white">Download on the</p>
                    <h2 className="text-2xl font-medium text-white">App Store</h2>
                </div>
                </div>
                <div data-aos="fade-down" className="flex items-center gap-2 bg-black w-fit p-3 rounded-md">
                <i className="fa-brands fa-google-play text-4xl text-white"></i> 
                <div>
                    <p className="text-white">Download on the</p>
                    <h2 className="text-2xl font-medium text-white">Play Store</h2>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAddApp;
