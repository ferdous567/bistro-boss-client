import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();


    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/payment/${user?.email}`)
                return res.data;
            }
        }
    })
    return (
        <div>
            <h3 className="text-3xl">Total Payment: {payments.length}</h3>
            <div>
                
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Total Item</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                    payments?.map((item, index) => <tr key={item._id}>
                        <th>{index + 1}</th>
                        <td>{user?.email} <br /> 
                        <span className="text-xs text-slate-400">{item.date}</span></td>
                        <td>{item.transactionId}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>
                        <td>Orderd {item.menuItemIds.length} items.</td>
                        
                    </tr>)
                }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;