import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaComment, FaContao, FaHome, FaList, FaRev, FaShoppingCart, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <div className="text-center p-3">
                    <h3 className="text-3xl font-bold uppercase">Bistro boss</h3>
                    <h4 className="text-xl font-bold uppercase">resturant</h4>
                </div>
                <ul className="menu">
                    {
                        isAdmin ? <>

                            <li>

                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome className="text-white text-2xl font-bold"></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensilSpoon className="text-white text-2xl font-bold"></FaUtensilSpoon>
                                    Add Items</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/manageItems'>
                                    <FaList className="text-white text-2xl font-bold"></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/allUsers'>
                                    <FaUsers className="text-white text-2xl font-bold"></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/bookings'>
                                    <FaBook className="text-white text-2xl font-bold"></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                        </>
                            : <>
                                <li>

                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome className="text-white text-2xl font-bold"></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/carts'>
                                        <FaShoppingCart className="text-white text-2xl font-bold"></FaShoppingCart>
                                        My Cart</NavLink>
                                </li>

                                <li>

                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensilSpoon className="text-white text-2xl font-bold"></FaUtensilSpoon>
                                        Add Items</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaCalendar className="text-white text-2xl font-bold"></FaCalendar>
                                        Payment History</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'>
                                        <FaRev className="text-white text-2xl font-bold"></FaRev>
                                        Add Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/payment'>
                                        <FaList className="text-white text-2xl font-bold"></FaList>
                                        Payment Real History</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>

                        <NavLink to='/'>
                            <FaHome className="text-white text-2xl font-bold"></FaHome>
                            Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/contact'>
                            <FaContao className="text-white text-2xl font-bold"></FaContao>
                            Contact</NavLink>
                    </li>
                    <li>

                        <NavLink to='/shop/salad'>
                            <FaComment className="text-white text-2xl font-bold"></FaComment>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;