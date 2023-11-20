import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;