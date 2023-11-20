import SectionTitle from "../../components/sectionTitle/SectionTitle";

import featured from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed
        max-w-6xl mx-auto my-10 pt-5">
            <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-16 pb-8">
                <div className=" ">
                    <img className=" rounded-lg " src={featured} alt="" />
                </div>
                <div className="md:ml-10 space-y-4 py-20 px-16">
                    <h2 className="font-bold text-white">March 20, 2023</h2>
                    <h1 className="font-bold text-2xl text-white">WHERE CAN I GET SOME?</h1>
                    <p className="text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Error voluptate facere, deserunt dolores
                    maiores quod nobis quas quasi. Eaque repellat
                    recusandae ad laudantium tempore consequatur 
                    consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;