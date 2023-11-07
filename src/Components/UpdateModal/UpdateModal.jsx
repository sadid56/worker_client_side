import { useState } from "react";
import Navber from "../../shared/Navber/Navber";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const UpdateModal = () => {
    // const {user} = useContext(AuthContext)
    const [categoris, setCategories] = useState('Web development')
    const job = useLoaderData()
    const navigate = useNavigate()

    const handleUpdate = e =>{
        e.preventDefault()
        // const email = e.target.email.value;
        const job_title = e.target.job_title.value;
        const deadline = e.target.deadline.value;
        const short_description = e.target.short_description.value;
        const category = categoris;

        const minPrice = e.target.minPrice.value;
        const maxPrice = e.target.maxPrice.value;
        // const price_range = minPrice + '-' + maxPrice

        const UpdateJob = {job_title, minPrice, maxPrice, deadline, short_description,category}
        // console.log(addJob);
        // console.log(addJob);
        fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/jobs/${job?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
              Swal.fire({
                title: "Updated Successfull !",
                text: "You have update this job",
                icon: "success",
              });
              navigate(-1)
            }
        })
      
    }
    const handleCategorieSet =e =>{
        setCategories(e.target.value)
    }
    return ( 
        <div>

        <Helmet>
          <title>Worker | Update Job</title>
        </Helmet>

            <Navber/>
            <div className="max-w-2xl mx-auto">
             <form onSubmit={handleUpdate} className="card-body">
            <h3 className="text-2xl font-bold text-center">Update Job</h3>

          <div className="flex justify-end">
          <select onChange={handleCategorieSet} value={categoris} className="input input-bordered input-success w-fit" required>
                <option value="Web development">Web development</option>
                <option value="Digital marketing">Digital marketing</option>
                <option value="Graphics design">Graphics design</option>
            </select>
          </div>
          
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Eamil</span>
                </label>
                <input
                  name="email"
                  disabled
                  defaultValue={job?.email}
                  required
                  type="email"
                  placeholder="Your Eamil"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job title</span>
                </label>
                <input
                required
                  name="job_title"
                  defaultValue={job?.job_title}
                  type="text"
                  placeholder="Job title"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  name="deadline"
                  defaultValue={job?.deadline}
                  required
                //   defaultValue={user?.email}
                  type="date"
                  placeholder="Deadline"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  name="short_description"
                  required
                  defaultValue={job?.short_description}
                //   defaultValue={job?.email}
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum price</span>
                </label>
                <input
                  name="minPrice"
                //   defaultValue={job?.email}
                required
                defaultValue={job?.minPrice}
                  type="text"
                  placeholder="Minimum price"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Maximum price</span>
                </label>
                <input
                  name="maxPrice"
                  required
                  defaultValue={job?.maxPrice}
                //   defaultValue={job?.email}
                  type="text"
                  placeholder="Maximum price"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="bg-[#005d45] hover:bg-[#104235]  py-2 rounded text-white text-xl font-medium">
                Update
              </button>
            </div>
          </form>
             </div>
        </div>
     );
}
 
export default UpdateModal;