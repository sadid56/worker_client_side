import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navber from "../../shared/Navber/Navber";
// import UpdateModal from "../UpdateModal/UpdateModal";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://assignment11-server-side-alpha.vercel.app/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  const handleDeleteJobs = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to delete this job ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment11-server-side-alpha.vercel.app/jobs/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted Successfull !",
                text: "You have delete this job",
                icon: "success",
              });
              const remaining = jobs.filter((job) => job?._id !== id);
              setJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Worker | My Posted Job</title>
      </Helmet>

      <Navber />
      <h3 className="text-3xl text-center font-bold">
        My added total jobs: {jobs.length}
      </h3>

      <div className="grid px-5 md:grid-cols-2 gap-5 max-w-6xl mx-auto mt-10">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="flex justify-between bg-[#fde7de] p-5 rounded-md shadow-md">
            <div className="space-y-2">
              <h2 className="text-[#005d45] text-3xl font-semibold">
                {job?.job_title}
              </h2>
              <h2 className="text-2xl font-semibold">
                Category: {job?.category}
              </h2>
              <p className="text-xl font-semibold">Deadline: {job?.deadline}</p>
              <p className="text-gray-600 font-medium text-xl">
                Price Range: {job?.minPrice} - {job?.maxPrice}
              </p>
              <p className="text-gray-400 font-medium">Eamil: {job?.email}</p>
              <p className="text-gray-400">{job?.short_description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDeleteJobs(job?._id)}
                className="btn btn-circle">
                <i className="fa-solid fa-trash text-xl text-red-500"></i>
              </button>
              <button
                onClick={() => navigate(`/update-jobs/${job?._id}`)}
                className="btn btn-circle bg-[#005d45] hover:bg-[#104235] text-white text-xl font-medium rounded-full">
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
