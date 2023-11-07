import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Error from "../shared/Error/Error";
import JobsDetails from "../Components/JobsDetails/JobsDetails";
import AddJob from "../Components/AddJob/AddJob";
import MyPostedJobs from "../Components/MyPostedJobs/MyPostedJobs";
import UpdateModal from "../Components/UpdateModal/UpdateModal";
import MyBids from "../Components/MyBids/MyBids";
import BidRequests from "../Components/BidsRequest/BidRequests";
import PrivateRoute from "../Private/PrivateRoute";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/job-details/:id",
        element: <PrivateRoute><JobsDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/add-job",
        element: <PrivateRoute><AddJob /></PrivateRoute>,
      },
      {
        path: "/my-posted-job",
        element: <PrivateRoute><MyPostedJobs /></PrivateRoute>,
      },
      {
        path: "/update-jobs/:id",
        element: <UpdateModal />,
        loader: ({ params }) =>
          fetch(`https://assignment11-server-side-962kmdaat-sadids-projects.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/my-bids",
        element: <PrivateRoute><MyBids /></PrivateRoute>,
      },
      {
        path: "/bids-requests",
        element:<PrivateRoute> <BidRequests /></PrivateRoute>,
        // loader: ()=> fetch()
      },
    ],
  },
]);

export default Routers;
