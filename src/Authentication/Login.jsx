/* eslint-disable react/no-unescaped-entities */
import Navber from "../shared/Navber/Navber";
import loginPng from "../assets/images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const Login = () => {
    const {googleLogin, loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    // console.log(location);
    //login login
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(() => {
            // console.log(res.user)
            toast.success(' Google login Successfully !')
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }

    const handleLogin = e =>{
        e.preventDefault()
        // const form = target.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        loginUser(email, password)
        .then(()=>{
           toast.success('Login Success !')
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }

  return (
    <div>

     <Helmet>
      <title>Worker | Login</title>
     </Helmet>

      <Navber />
      <h3 className="text-4xl text-center font-bold border-b-2 border-[#005d45] w-fit mx-auto mt-5">
        Login Now
      </h3>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <img src={loginPng} className="max-w-md" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-success w-full max-w-xs"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <button  type="submit" className="bg-[#005d45] hover:bg-[#104235]  py-2 rounded text-white text-xl font-medium">
                  Login
                </button>
                <p className="mt-2 font-medium">
                  Don't have an account ?
                  <Link to="/registration" className="link link-success">
                  Registration
                  </Link>
                </p>
              </div>
            </form>
            <div className="px-7 pb-5">
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-success normal-case w-full text-xl font-medium"><FaGoogle/> Google Sign-in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
