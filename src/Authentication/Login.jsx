import Navber from "../shared/Navber/Navber";
import loginPng from '../assets/images/login.png'

const Login = () => {
  return (
    <div>
      <Navber />
      <h3 className="text-4xl text-center font-bold border-b-2 border-[#005d45] w-fit mx-auto mt-5">Login Now</h3>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <img src={loginPng} className="max-w-md" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                  type="text"
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#005d45] hover:bg-[#104235]  py-2 rounded text-white text-xl font-medium">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
