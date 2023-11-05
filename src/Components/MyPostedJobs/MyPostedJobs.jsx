import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navber from "../../shared/Navber/Navber";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  return (
    <div>
      <Navber />
      <h3 className="text-3xl text-center font-bold">
        My added total jobs: {jobs.length}
      </h3>

      <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto mt-10">
        {jobs.map((job) => (
          <div key={job._id} className="flex justify-between bg-[#fde7de] p-5 rounded-md shadow-md">
            <div className="space-y-2">
              <h2 className="text-[#005d45] text-3xl font-semibold">{job?.job_title}</h2>
              <h2 className="text-2xl font-semibold">Category: {job?.category}</h2>
              <p className="text-xl font-semibold">Deadline: {job?.deadline}</p>
              <p className="text-gray-600 font-medium text-xl">Price Range: {job?.price_range}</p>
              <p className="text-gray-400 font-medium">Eamil: {job?.email}</p>
              <p className="text-gray-400">{job?.short_description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="btn btn-circle">
                <i className="fa-solid fa-trash text-xl text-red-500"></i>
              </button>
              <button className="btn btn-circle bg-[#005d45] hover:bg-[#104235] text-white text-xl font-medium rounded-full">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
