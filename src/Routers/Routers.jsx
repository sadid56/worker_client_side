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

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path: '/job-details/:id',
                element: <JobsDetails/>,
                loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/add-job',
                element: <AddJob/>
            },
            {
                path: '/my-posted-job',
                element: <MyPostedJobs/>
            },
            {
                path: '/update-jobs/:id',
                element: <UpdateModal/>,
                loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <MyBids/>,
                loader: ()=> fetch('http://localhost:5000/bids')
            },
            {
                path: '/bids-requests',
                element: <BidRequests/>,
                // loader: ()=> fetch()
            }
        ]
    }
])
 
export default Routers;