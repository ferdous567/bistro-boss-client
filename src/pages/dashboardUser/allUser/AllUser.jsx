import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Swal from "sweetalert2";

import { FaUsers } from "react-icons/fa";

const AllUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: `${user.name} is admin now.`,
                        icon: "success"
                    });
                }

            })
    }

    const handleDeleteUser = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            console.log('data deleted');

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }

                    })
            }
        });

    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {allUsers.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {
                                    user.role === 'admin' ? <div>
                                        <h3 className="text-lg font-bold text-green-500 pt-2">Admin</h3>
                                    </div> : <td><Tippy content="Make Admin" >
                                        <button onClick={() => handleMakeAdmin(user)}
                                            className="text-xl text-orange-600">
                                            <FaUsers></FaUsers>
                                        </button></Tippy></td>
                                }
                                <td><Tippy content="Delete" >
                                    <button onClick={() => handleDeleteUser(user)}
                                    ><RiDeleteBin6Line className="text-xl text-red-500 "></RiDeleteBin6Line></button>
                                </Tippy></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;