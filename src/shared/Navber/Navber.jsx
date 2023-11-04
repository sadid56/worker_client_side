import { Link, NavLink } from "react-router-dom";
import './navber.css'

const Navber = () => {

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/add-job'>Add Job</NavLink></li>
    <li><NavLink to='/my-posted-job'>My Posted Job</NavLink></li>
    <li><NavLink to='/my-bids'>My Bids</NavLink></li>
    <li><NavLink to='/bids-requests'>Bids Requests</NavLink></li>
    </>

    return (  
        <nav id="nav">
            <div className="navbar max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <h3 className="text-3xl font-bold">Civi</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'><button className="bg-[#005d45] hover:bg-[#104235] px-4 py-2 rounded text-white">Login</button></Link>
  </div>
</div>
        </nav>
     );
}
 
export default Navber;