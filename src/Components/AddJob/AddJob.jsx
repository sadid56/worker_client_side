import { useContext, useState } from "react";
import Navber from "../../shared/Navber/Navber";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddJob = () => {
    const {user} = useContext(AuthContext)
    const [categorie , setCategorie] = useState('Web development')




    const handleAddJob = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const job_title = e.target.job_title.value;
        const deadline = e.target.deadline.value;
        const short_description = e.target.short_description.value;
        const category = categorie;

        const minPrice = e.target.minPrice.value;
        const maxPrice = e.target.maxPrice.value;
        const price_range = minPrice + '-' + maxPrice

        const addJob = {email, job_title,deadline, short_description,category, price_range}
        // console.log(addJob);
        fetch('http://localhost:5000/jobs',{
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('job added succes')
            }
        })
    }

    const handleCategorieSet = e =>{
        setCategorie(e.target.value)
        // console.log(e.target.value);
        
    }
    return ( 
        <div>
            <Navber/>
             <div className="max-w-2xl mx-auto">
             <form onSubmit={handleAddJob} className="card-body">
            <h3 className="text-2xl font-bold text-center">Add Job</h3>

          <div className="flex justify-end">
          <select onChange={handleCategorieSet} value={categorie} className="input input-bordered input-success w-fit" required>
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
                  defaultValue={user?.email}
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
                Add Job
              </button>
            </div>
          </form>
             </div>
        </div>
     );
}
 
export default AddJob;