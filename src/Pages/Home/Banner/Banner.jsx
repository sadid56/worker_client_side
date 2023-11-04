import Navber from "../../../shared/Navber/Navber";
import heroPng from '../../../assets/images/hero.png'

const Banner = () => {
    return ( 
        <div className="bg-[#ecf2f0]">
            <Navber/>
            <div className="hero max-w-6xl mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="">
    <img src={heroPng} className="max-w-sm rounded-lg" />
    </div>
    <div className="flex-1">
      <h1 className="text-6xl font-bold"><span className="text-[#005d45]">Got Talent ?</span>
Meet Opportunity</h1>
      <p className="py-6">Company reviews. Salaries. Interviews. Jobs.</p>
      <button className="bg-[#005d45] hover:bg-[#104235] px-4 py-2 rounded text-white text-xl font-medium">Get Started</button>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default Banner;