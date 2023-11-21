import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { CgShoppingCart } from "react-icons/cg";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    const handleLogout = () => {
        logOut()
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        {
            user && isAdmin && <li><NavLink to='/dashboard/adminHome'>Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink to='/dashboard/userHome'>Dashboard</NavLink></li>
        }
        
        <li><NavLink to='/shop/salad'>Our shop</NavLink></li>
        <li><NavLink to='/menu'>Our menu</NavLink></li>
        <li>
            <Link to = '/dashboard/carts'>
                <div>
                <div className="badge badge-secondary">+{cart.length}</div>
                    <CgShoppingCart className="text-2xl"></CgShoppingCart>
                    
                </div>
            </Link>
        </li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <>
                            <button onClick={handleLogout} className="btn btn-outline btn-info font-bold border-2">Logout</button>
                        </>
                            : <>
                                <Link to='/login'>
                                    <button className="btn btn-outline btn-info font-bold border-2">Login</button>
                                </Link>
                            </>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;