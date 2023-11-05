// import { useLoaderData } from "react-router-dom";
import Navber from "../../shared/Navber/Navber";
import { useContext } from "react";
// import MyBids from "../MyBids/MyBids";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BidRequests = () => {
  const { handleAccept, hanldeReject, bids } = useContext(AuthContext);
  //   const bids = useLoaderData();
  //   const [bids, setBids] = useState([])

  //     useEffect(()=>{
  //         fetch('http://localhost:5000/bids')
  //         .then(res => res.json())
  //         .then(data => setBids(data))
  //     },[])

  //     const handleAccept = id =>{
  //         // console.log('updare');
  //         fetch(`http://localhost:5000/bids/${id}`, {
  //             method: 'PATCH',
  //             headers: {
  //                 'content-type': 'application/json'
  //             },
  //             body: JSON.stringify({status: 'accept'})
  //         })
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data);
  //             if(data.acknowledged){
  //                 const remaining = bids.filter(bid => bid._id !== id)
  //                 const update = bids.find(bid => bid._id === id)
  //                 update.status = 'accept'
  //                 const updateAccept = [update, ...remaining]
  //                 setBids(updateAccept)
  //             }
  //         })
  //     }

  return (
    <div>
      <Navber />
      <div>
        <h3 className="text-3xl font-bold text-center my-5">Bids Requests</h3>
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="text-xl font-bold"></th>
                <th className="text-xl font-bold">Job Title</th>
                <th className="text-xl font-bold">Eamil</th>
                <th className="text-xl font-bold">Deadline</th>
                <th className="text-xl font-bold">Price</th>
                <th className="text-xl font-bold">Status</th>
                <th className="text-xl font-bold">Accept</th>
                <th className="text-xl font-bold">Reject</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <th className="text-xl font-semibold">{index + 1}</th>
                  <td className="text-xl font-semibold">{bid?.job_title}</td>
                  <td className="text-xl font-semibold">{bid?.email}</td>
                  <td className="text-xl font-semibold">{bid?.deadline}</td>
                  <td className="text-xl font-semibold">{bid?.price}</td>
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
                        Rejected
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
                      )
                    
                    }
                  </td>

                  <td>
                    {bid.status === "accept" || bid.status === "reject" ? (
                      <button className="btn" disabled="disabled">
                        Accept
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAccept(bid._id)}
                        className="btn btn-outline btn-success">
                        Accept{" "}
                      </button>
                    )
                    && bid.status === 'complete' ? (
                        <button className="btn" disabled="disabled">
                          Accept
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAccept(bid._id)}
                          className="btn btn-outline btn-success">
                          Accept{" "}
                        </button>
                      )
                    
                    }
                  </td>
                  <td>
                    {bid.status === "accept" || bid.status === "reject" ? (
                      <button className="btn" disabled="disabled">
                        Reject
                      </button>
                    ) : (
                      <button
                        onClick={() => hanldeReject(bid._id)}
                        className="btn btn-outline btn-error">
                        Reject{" "}
                      </button>
                    ) && bid.status === 'complete' ? (
                        <button className="btn" disabled="disabled">
                          Reject
                        </button>
                      ) : (
                        <button
                          onClick={() => hanldeReject(bid._id)}
                          className="btn btn-outline btn-error">
                          Reject{" "}
                        </button>
                      )
                    
                    }
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

export default BidRequests;
