import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();

    const axiosSecure = useAxiosSecure();

    const hadleDeleteItem =  (item) =>{
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
            
            const res = await axiosSecure.delete(`/menu/${item._id}`);
            // console.log(res.data);
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:  `${item.name} has been Deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
            }
          });
    }
   

    return (
        <div>
            <SectionTitle heading='MANAGE ALL ITEMS' subHeading='----Hurry Up----'></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr><th>
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                          {
                            menu.map(item =>   <tr key={item._id} >
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                   <h3>{item.name}</h3>
                                </td>
                                <td>$ {item.price}</td>
                                <td>
                                    <Link to = {`/dashboard/updateItems/${item._id}`}>
                                    <button 
                                    className="btn btn-ghost btn-lg text-green-500"><FaEdit></FaEdit></button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => hadleDeleteItem(item)}
                                    className="btn btn-ghost btn-lg text-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                          }
                           
                        </tbody>
                       

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;