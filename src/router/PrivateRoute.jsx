import { useContext } from "react";
import { AuthContext } from "../provider/AuthPorvider";
import { Navigate, useLocation } from "react-router-dom";
import LazyLoad from 'react-lazy-load';



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LazyLoad height={762}>
        <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
      </LazyLoad>
    }


    if(user){
        return children;
    }

    return <Navigate to = '/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;