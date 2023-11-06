import Navber from "../../../shared/Navber/Navber";
import heroPng from "../../../assets/images/hero.png";
import candidateMan1 from "../../../assets/candidate-man/man1.jpeg";
import candidateMan2 from "../../../assets/candidate-man/man2.jpeg";
import candidateMan3 from "../../../assets/candidate-man/man3.jpeg";
import candidateMan4 from "../../../assets/candidate-man/man4.jpeg";
import candidateMan5 from "../../../assets/candidate-man/man5.jpeg";

const Banner = () => {
  return (
    <div className="bg-[#ecf2f0]">
      <Navber />
      <div className="hero max-w-6xl mx-auto">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="relative">
            <img src={heroPng} className="w-[400px] md:max-w-sm rounded-lg" />
            <div className="bg-[#e8e8e8] p-5 rounded-3xl w-fit absolute right-0 bottom-8">
              <h3 className="text-xl font-semibold mb-2">99+ Candidates get job</h3>
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
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-[#005d45]">Got Talent ?</span>
              Meet Opportunity
            </h1>
            <p className="py-6">Company reviews. Salaries. Interviews. Jobs.</p>
            <button className="bg-[#005d45] hover:bg-[#104235] px-4 py-2 rounded text-white text-xl font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
