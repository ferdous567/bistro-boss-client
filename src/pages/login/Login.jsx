import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signInUser(email, password)
        .then(result => {
            form.reset();
            const user = result.user;
            console.log(user);
            
            Swal.fire({
                title: "Good job!",
                text: "You are successfully logged in!",
                icon: "success"
              });

              const from = location.state?.from?.pathname || '/';

              navigate(from, {replace: true});
        })
        .catch(err => console.error(err))

    }
    

    return (
        <div className="h-full  m-10 p-10 bg-stone-300 relative">
            <Helmet>
                <title>
                    Bistro Boss | Login
                </title>
            </Helmet>
            <div className="absolute top-8 left-[44%] rounded-xl bg-stone-200">
                <h2 className="text-5xl font-extrabold  p-5 w-1/3  pl-4">Login</h2>
            </div>
            <div className="h-auto w-1/2 mt-10 border-2 mx-auto">
            <form onSubmit={handleLogin} className=" p-8 ">
            
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="p-3 w-full" required />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="p-3 w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="p-3 w-full" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        <Link to = '/register' className="text-xl text-blue-500 font-semibold  hover:underline">Register</Link>
                    </label>
                </div>
                <div className=" mt-6">
                    <input className="btn btn-primary w-full" type="submit" value="Login" />
                </div>
            </form>
            <div className="text-center pb-5"><GoogleLogin></GoogleLogin></div>
            </div>
            
        </div>
    );
};

export default Login;