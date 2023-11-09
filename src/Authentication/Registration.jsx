/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
// import registerPng from "../assets/images/register.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import lottieAnimation from '../assets/lottie-animation/registation.json'
import Lottie from "lottie-react";

const Registration = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    // const form = target.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo,email, password);

    //create user with firebase
    createUser(email, password)
      .then(() => {
        // console.log(res.user);

        //update profile
        profileUpdate(name, photo)
          .then(() => {
            navigate("/");
            toast.success("Registration success !");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    Aos.init({
      duration: 1500, 
      // offset: 200,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Worker | Registration</title>
      </Helmet>

      <Navber />
      <h3 className="text-4xl text-center font-bold border-b-2 border-[#005d45] w-fit mx-auto mt-5">
        Registration Now
      </h3>
      <div  className="hero overflow-x-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos='fade-left' className="md:max-w-lg">
            {/* <img src={registerPng} className="md:max-w-md" alt="" /> */}
            <Lottie animationData={lottieAnimation} loop={true}></Lottie>
          </div>
          <div data-aos='fade-right' className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered input-success w-full max-w-xs"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  placeholder="Enter your Photo URL"
                  className="input input-bordered input-success w-full max-w-xs"
                  name="photo"
                  required
                />
              </div>
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
                <button
                  type="submit"
                  className="bg-[#005d45] hover:bg-[#104235]  py-2 rounded text-white text-xl font-medium">
                  Registration
                </button>
                <p className="mt-2 font-medium">
                  Already have an account ?
                  <Link to="/login" className="link link-success">
                    Login
                  </Link>
                </p>
              </div>
            </form>
            {/* <div className="px-7 pb-5">
              <button className="btn btn-outline btn-success normal-case w-full text-xl font-medium"><FaGoogle/> Google Sign-in</button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
