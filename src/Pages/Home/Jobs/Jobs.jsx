/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Jobs = () => {
  const [loadjobs, setLoadJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectCategorie, setSelectCategorie] = useState(null);
  const navigate = useNavigate()

  const categoris = ["Web development", "Digital marketing", "Graphics design"];

  //load jobs data
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setLoadJobs(data));
  }, []);
  // console.log(jobs);

  useEffect(() => {
    if (selectCategorie) {
      const filterData = loadjobs.filter(
        (job) => job?.category === selectCategorie
      );
      setJobs(filterData);
    }
  }, [selectCategorie, loadjobs]);

  return (
    <div className="mt-5">
      <h3 className="text-4xl font-bold my-5 text-center">
        Our Jobs Categoris
      </h3>
      <Tabs>
        <div className="flex justify-center">
          <TabList className="flex gap-6">
            {categoris.map((categorie) => (
              <Tab
                key={categorie}
                onClick={() => setSelectCategorie(categorie)}
                className={`cursor-pointer outline-none  text-xl font-semibold ${
                  selectCategorie === categorie
                    ? "border-b-2 border-[#0f4936]"
                    : undefined
                }`}>
                {categorie}
              </Tab>
            ))}
          </TabList>
        </div>

        {categoris.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-4 gap-5">
              {jobs.map((job) => (
                <div className="card mt-5 rounded-md bg-[#ecf2f0] shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{job?.job_title}</h2>
                    <h4 className="text-gray-500 font-medium">
                      Deadline: {job?.deadline}
                    </h4>
                    <p className="text-gray-500 font-medium">
                      Price range: {job?.price_range}
                    </p>
                    <p className="text-gray-400 font-medium">
                      {job?.short_description}
                    </p>
                    <div className="card-actions">
                      <button onClick={()=> navigate(`/job-details/${job?._id}`)} className="bg-[#005d45] hover:bg-[#104235] px-4  py-2 rounded text-white text-xl font-medium">
                        Bid Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Jobs;
