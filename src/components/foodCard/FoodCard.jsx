import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {user} = useAuth();
    const { name, image, price, recipe, _id } = item;
    const location = useLocation();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();


    const handleAddToCart = () =>{
        
        if(user && user.email){
            
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, image, price
            };
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your food successfully added to cart",
                        showConfirmButton: false,
                        timer: 1500
                      });

                    //   refetch cart to update the cart items count
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in.",
                text: "Please login to add to the cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              });
              
        }
    }

    return (
        <div className="flex">
            <div className="card card-compact  bg-stone-200 m-3 shadow-xl flex-grow">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name} ($ {price})</h2>
                    <p className="">{recipe}</p>
                    <div onClick={handleAddToCart}
                    className="card-actions justify-center text-stone-600">
                        <button className="btn  btn-outline border-0 border-b-4 
                        border-b-stone-600">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;