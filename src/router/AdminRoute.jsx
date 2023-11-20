
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {

    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading]= useAdmin();


   const location = useLocation();

    if(loading || isAdminLoading){
        return <p className="text-2xl font-bold"> Loading...</p>
    }


    if(user && isAdmin){
        return children;
    }

    return <Navigate
     to = '/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;