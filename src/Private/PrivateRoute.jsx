/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    
    if(loading){
        return <div className="flex items-center justify-center h-[100vh]"><span className="loading loading-bars loading-lg text-success"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>
}
 
export default PrivateRoute;