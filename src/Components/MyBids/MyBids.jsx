import Navber from "../../shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const MyBids = () => {
  //   const bidsLoad = useLoaderData();
  const { bids, handleComplete } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Worker | My Bids</title>
      </Helmet>

      <Navber />

      <div>
        <h3 className="text-3xl font-bold text-center my-5">My Bids</h3>
        <div className="overflow-x-auto max-w-6xl mx-auto">
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
              {bids.map((bid, index) => (
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
