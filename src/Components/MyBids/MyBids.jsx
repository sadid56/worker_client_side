import Navber from "../../shared/Navber/Navber";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { useState } from "react";

const MyBids = () => {
  //   const bidsLoad = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const [sortValu, setSortValue] = useState();

  useEffect(() => {
    fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/bids?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user?.email]);

  const handleComplete = (id) => {
    fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/bids/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "complete" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const remaining = bids.filter((bid) => bid._id !== id);
          const update = bids.find((bid) => bid._id === id);
          update.status = "complete";
          const updateAccept = [update, ...remaining];
          setBids(updateAccept);
        }
      });
  };

  const HandleSort = () => {
    if (sortValu === "complete") {
      fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/bids?sortField=status&sortOrder=asc`)
        .then((res) => res.json())
        .then((data) => setBids(data));
    }
    if (sortValu === "cancele") {
      fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/bids?sortField=status&sortOrder=desc`)
        .then((res) => res.json())
        .then((data) => setBids(data));
    }
  };
  return (
    <div>
      <Helmet>
        <title>Worker | My Bids</title>
      </Helmet>

      <Navber />

      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center my-5">My Bids</h3>

        <div className="flex justify-center">
          <div className="form-control">
            <label className="input-group">
              <select
                value={sortValu}
                onChange={(e) => setSortValue(e.target.value)}
                className="input input-bordered input-success w-full max-w-xs">
                <option disabled selected>
                  Sort By
                </option>
                <option value="complete">Ascending</option>
                <option value="cancele">Descending</option>
              </select>
              <span
                onClick={HandleSort}
                className="bg-[#005d45] hover:bg-[#104235] w-full  py-2 text-white text-xl font-medium">
                Sort Now
              </span>
            </label>
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="table table-xs md:table-md lg:table-lg">
            <thead>
              <tr>
                <th className="text-xl font-bold"></th>
                <th className="text-xl font-bold">Job Title</th>
                <th className="text-xl font-bold">Eamil</th>
                <th className="text-xl font-bold">Deadline</th>
                <th className="text-xl font-bold">Status</th>
                <th className="text-xl font-bold">Condition</th>
              </tr>
            </thead>
            <tbody>
              {bids?.map((bid, index) => (
                <tr key={bid._id}>
                  <th>{index + 1}</th>
                  <td className="text-xl font-semibold">{bid?.job_title}</td>
                  <td className="text-xl font-semibold">{bid?.email}</td>
                  <td className="text-xl font-semibold">{bid?.deadline}</td>
                  <td>
                    {bid.status === "accept" ? (
                      <span className="text-success text-xl font-medium flex items-center gap-2">
                        <span className="loading loading-spinner text-success"></span>
                        In Progress
                      </span>
                    ) : (
                        <span className="text-red-500 text-xl font-medium flex items-center gap-2">
                          <span className="loading loading-spinner text-success"></span>{" "}
                          Pending...
                        </span>
                      ) && bid.status === "reject" ? (
                      <p className="text-xl font-medium text-red-500">
                        Canceled
                      </p>
                    ) : (
                        <span className="text-success text-xl font-medium flex items-center gap-2">
                          <span className="loading loading-spinner text-success"></span>{" "}
                          Pending...
                        </span>
                      ) && bid.status === "complete" ? (
                      <p className="text-xl font-medium text-success">
                        Completed
                      </p>
                    ) : (
                      <span className="text-success text-xl font-medium flex items-center gap-2">
                        <span className="loading loading-spinner text-success"></span>{" "}
                        Pending...
                      </span>
                    )}
                  </td>
                  <td>
                    {bid.status === "accept" ? (
                      <button
                        onClick={() => handleComplete(bid._id)}
                        className="btn btn-outline btn-success">
                        Complete
                      </button>
                    ) : (
                        <button className="btn" disabled="disabled">
                          Complete
                        </button>
                      ) || bid.status === "complete" ? (
                      <button className="btn" disabled="disabled">
                        Complete
                      </button>
                    ) : (
                      <button
                        onClick={() => handleComplete(bid._id)}
                        className="btn btn-outline btn-success">
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBids;
