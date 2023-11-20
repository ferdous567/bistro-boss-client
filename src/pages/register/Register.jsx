import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthPorvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";




const Register = () => {

    const navigate = useNavigate();

    const {createUser, updateUserProfile} = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onsubmit =(data) => {
        console.log(data);
        
        createUser(data.email, data.password)
        .then(result => {
            
            const user = result.user;
            console.log(user);
            
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const newUser = {
                    name: data.name,
                    email: data.email,

                }
                axiosPublic.post('/users', newUser)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('profile updated, and user added to the database.');
                        reset();
                        Swal.fire({
                            title: "Good job!",
                            text: "Register successfull and updated!",
                            icon: "success"
                          });
                          navigate('/')
                    }
                })
                
                  
            })
        
            .catch(err => console.error(err));
            
        })
        .catch(err => console.error(err))

        
    };

    return (
        <div className="h-screen  m-10 p-10 bg-stone-300 relative">
            <Helmet>
                <title>
                    Bistro Boss | Register
                </title>
            </Helmet>
            <div className="absolute top-8 left-[40%] rounded-xl bg-stone-200">
                <h2 className="text-5xl font-extrabold  p-5 w-1/3  pl-4">Register</h2>
            </div>
            <div className="h-auto w-1/2 mt-10 border-2 mx-auto">
            <form onSubmit={handleSubmit(onsubmit)} className=" p-8 ">
            
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register('name', { required: true })} name="name" placeholder="Name" className="p-3 w-full"  />
                    {errors.name && <p className="text-red-500">Name is required.</p>}
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" {...register('PhotoURL', { required: true })} name="PhotoURL" placeholder="PhotoURL" className="p-3 w-full"  />
                    {errors.PhotoURL && <p className="text-red-500">PhotoURL is required.</p>}
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="p-3 w-full"  />
                    {errors.email && <p className="text-red-500">Email is required.</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register('password', { required: true, 
                        minLength: 6, 
                        maxLength:20, 
                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} name="password" placeholder="password" className="p-3 w-full"  />
                    {errors.password && <p className="text-red-500">Password is required.</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters.</p>}

                    {errors.password?.type === 'maxLength' && <p className="text-red-500">Please less then 20 characters.</p>}

                    {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase, one lowercase, one digit and one special characters.</p>}
                    <h3>Have an account? Please <Link to = '/login' className="text-blue-400 text-xl font-semibold
                     hover:text-blue-600 hover:underline"> Login</Link></h3>
                </div>
                <div className=" mt-6">
                    <input className="btn btn-primary w-full" type="submit" value="Register" />
                </div>
            </form>
            </div>
        </div>
    );
};
export default Register;