import { Link, NavLink } from "react-router-dom";
import './navber.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from '../../assets/logo/logo.png';
import logoText from '../../assets/logo/logo-text.png'

const Navber = () => {
    const {user, logOut} = useContext(AuthContext)

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/add-job'>Add Job</NavLink></li>
    <li><NavLink to='/my-posted-job'>My Posted Job</NavLink></li>
    <li><NavLink to='/my-bids'>My Bids</NavLink></li>
    <li><NavLink to='/bids-requests'>Bids Requests</NavLink></li>
    </>

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            alert('log Out success')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

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
    <div className="flex items-center h-20">
      <img src={logo} className="w-24" alt="" />
      <img src={logoText} className="w-[150px] " alt="" />
    </div>
    {/* <h3 className="text-3xl font-bold">Civi</h3> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ?  <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL && user?.photoURL } />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li className="text-2xl font-semibold">{user?.displayName && user?.displayName}</li>
          <li><button onClick={handleLogOut} className="bg-[#005d45] hover:bg-[#104235]  py-2 rounded text-white text-xl font-medium mt-5">Log Out</button></li>
        </ul>
      </div>
     : <Link to='/login'><button className="bg-[#005d45] hover:bg-[#104235] px-4 py-2 rounded text-white">Login</button></Link>
    }
  </div>
</div>
        </nav>
     );
}
 
export default Navber;