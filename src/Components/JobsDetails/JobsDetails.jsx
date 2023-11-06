import { useLoaderData, useNavigate } from "react-router-dom";
import Navber from "../../shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const JobsDetails = () => {
  const job = useLoaderData();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
  // console.log(job);

    const handleBidNow = e =>{
        e.preventDefault()
        const price = e.target.price.value;
        const deadline = e.target.deadline.value;
        const email = e.target.email.value;
        const buyerEamil = e.target.buyerEamil.value;

        const bidNow = {price, deadline, email, buyerEamil, job_title:job?.job_title}
        // console.log(bidNow);

        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidNow)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data?.acknowledged){
                alert('bid success')
                navigate('/my-bids')
            }
        })
        .catch(error => {
            console.log(error.message);
        })

    }

  return (
    <div>

 <Helmet>
  <title>Worker | Job Details</title>
 </Helmet>

      <Navber />
      <div className="flex items-center gap-5 max-w-6xl mx-auto">
        <div className="flex-1 space-y-2 bg-[#fde7de] p-10 rounded shadow">
          <h2 className="text-3xl font-bold">{job?.job_title}</h2>
          <h5 className="text-xl font-semibold text-gray-500">
            Deadline: {job?.deadline}
          </h5>
          <h3 className="font-medium text-gray-400">
            Price Range: {job?.minPrice} - {job?.maxPrice}
          </h3>
          <p className="text-gray-400">{job?.short_description}</p>
        </div>
        <div className="flex-1">
          <form onSubmit={handleBidNow} className="card-body">
            <h3 className="text-2xl font-bold text-center">Your bid form</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  required
                  type="text"
                  placeholder="Your bidding ammount"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                required
                  name="deadline"
                  type="date"
                  placeholder="Deadline"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  required
                  disabled
                  defaultValue={user?.email}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer email</span>
                </label>
                <input
                  name="buyerEamil"
                  defaultValue={job?.email}
                  disabled
                  type="email"
                  placeholder="Buyer Email"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="bg-[#005d45] hover:bg-[#104235]  py-2 rounded text-white text-xl font-medium">
                Bid on the project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
