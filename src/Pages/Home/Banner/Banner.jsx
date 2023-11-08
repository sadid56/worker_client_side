import Navber from "../../../shared/Navber/Navber";
import heroPng from "../../../assets/images/hero.png";
import candidateMan1 from "../../../assets/candidate-man/man1.jpeg";
import candidateMan2 from "../../../assets/candidate-man/man2.jpeg";
import candidateMan3 from "../../../assets/candidate-man/man3.jpeg";
import candidateMan4 from "../../../assets/candidate-man/man4.jpeg";
import candidateMan5 from "../../../assets/candidate-man/man5.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Banner = () => {

  const [isTopAdd, setIsTopAdd] = useState(true)

 
// console.log(isTopAdd);
  useEffect(() => {
    Aos.init({
      duration: 1500, 
      // offset: 200,
    });
  }, []);
  return (
    <div className="bg-[#ecf2f0] relative ">
      {
        isTopAdd ? <div className="bg-black flex items-center gap-3 justify-center md:justify-between py-2 px-5  md:px-20 ">
        <h2 className="text-sm md:text-xl font-medium text-white"><i className="fa-solid fa-bell text-red-400"></i> Job Alert Subscribe</h2>
        <h2 className="text-sm md:text-xl font-medium text-white"><i className="fa-solid fa-envelope"></i> worker@gmail.com <button onClick={()=>setIsTopAdd(!isTopAdd)} className="btn btn-sm btn-circle ml-5 text-red-500">X</button></h2>
        </div> : <button data-aos="fade-left" onClick={()=>setIsTopAdd(!isTopAdd)} className="glass text-xl font-medium border rounded-md p-2 absolute top-64 md:top-1/2 lg:right-[200px] right-3 z-10"><i className="fa-solid fa-eye"></i> Show Subscribe</button>
      }
      <Navber />
      <div className=" max-w-6xl mx-auto">
        <div className="py-5 md:py-0 grid md:grid-cols-2  w-full items-center md:gap-10">
          <div className="relative md:order-2">
            <img data-aos="fade-down"  src={heroPng} className="w-[400px] md:max-w-sm rounded-lg" />
            <div className="absolute md:-left-16 top-1/2">
              <h2 data-aos='fade-right' className="text-xl font-medium bg-[#e8e8e8] rounded-3xl p-5 w-fit"><i className="fa-solid fa-bell text-red-400"></i> Job Alert Subscribe</h2>
            </div>
            <div  data-aos="fade-left" className="bg-[#e8e8e8] p-5 rounded-3xl w-fit absolute right-16 bottom-8">
              <h3 className="text-xl font-semibold mb-2">
                99+ Candidates get job
              </h3>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src={candidateMan1} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={candidateMan2} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={candidateMan3} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={candidateMan4} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={candidateMan5} />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center md:text-start md:pl-10 ">
            {/* <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-[#005d45]">Got Talent ?</span> <br />

              
            </h1> */}
            <h1 className="text-5xl font-bold h-[120px] md:h-20">
              Got Talent ? <br />
              <span className="text-[#005d45]">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Meet Opportunity",
                    "Build Your career",
                    "Found Your goal",
                    "Submit Your job",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={30}
                  delaySpeed={1500}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </span>
            </h1>
            <p className="py-6">Company reviews. Salaries. Interviews. Jobs.</p>
            <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Get Started</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
