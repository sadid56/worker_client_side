/* eslint-disable react/jsx-key */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css';

const Jobs = () => {
  const {user} = useContext(AuthContext)
  const [loadjobs, setLoadJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectCategorie, setSelectCategorie] = useState("Web-development");
  const navigate = useNavigate()
  const [loading , isLoading] = useState(true)

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      // offset: 200,
    });
  }, []);
  const categoris = ["Web-development", "Digital-marketing", "Graphics-design"];

  //load jobs data
  useEffect(() => {
    axios.get(`https://assignment11-server-side-alpha.vercel.app/jobs`)
    .then(res => {
      setLoadJobs(res.data)
      isLoading(false)
    })
    .catch(error => console.log(error.message))
    // fetch("https://assignment11-server-side-alpha.vercel.app/jobs", {credentials: 'include'})
    //   .then((res) => res.json())
    //   .then((data) => setLoadJobs(data));
  }, [user?.email]);
  // console.log(jobs);

  useEffect(() => {
    if (selectCategorie) {
      const filterData = loadjobs?.filter(
        (job) => job?.category === selectCategorie
      );
      setJobs(filterData);
      isLoading(false)
    }
  }, [selectCategorie, loadjobs]);

  return (
    <div className="mt-5">
      <h3 className="text-4xl font-bold my-5 text-center">
        Our Jobs Categoris
      </h3>
      <Tabs>
        <div className="flex justify-center">
          <TabList className="flex flex-wrap justify-center gap-6">
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
            {
              loading ? <p className="text-center text-2xl font-medium my-10">Loading...</p> : <div className="grid md:grid-cols-2 px-5 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-5">
              {jobs.map((job) => (
                <div  data-aos='fade-right' key={job._id} className="card mt-5 rounded-md bg-[#ecf2f0] shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{job?.job_title}</h2>
                    <h4 className="text-gray-500 font-medium">
                      Deadline: {job?.deadline}
                    </h4>
                    <p className="text-gray-500 font-medium">
                      Price range: {job?.minPrice} - {job?.maxPrice}
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
            }
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Jobs;
