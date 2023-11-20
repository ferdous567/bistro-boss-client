import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imagebb and get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                // show success alert
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your ${data.name} has been successfully added.`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        }
        console.log('with image url',res.data);
    };
    return (
        <div>
            <SectionTitle heading="ADD AN ITEM" subHeading="----What's new?----"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>

                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name", {required: true})}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-3">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select defaultValue='default'  {...register("category", {required: true})}
                                className="select select-bordered w-full ">
                                <option disabled value = 'default' >Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("price", {required: true})}
                                className="input input-bordered w-full " />

                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                            
                        </label>
                        <textarea {...register("recipe", {required: true})}
                        className="textarea textarea-bordered h-24" 
                        placeholder="Description"></textarea>
                       
                    </div>

                    <div className="form-control w-full my-6">
                    <input {...register("image", {required: true})}
                    type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    {/* <input type="submit" value='Add Item'  className="btn btn-info my-3" /> */}
                    <button className="btn  btn-info my-3 text-white font-bold">
                        Add Items <FaUtensils className="text-xl"></FaUtensils>
                        </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;