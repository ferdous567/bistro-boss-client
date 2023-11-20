import { Helmet } from "react-helmet-async";
import Featured from "../../featured/Featured";
import PopularMenu from "../../popularMenu/PopularMenu";
import Testimonials from "../../testimonials/Testimonials";
import Category from "../category/Category";
import Banner from "./banner/Banner";
import Cover from "../../../shared/cover/Cover";
import image from '../../../assets/menu/banner3.jpg';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Cover img={image} title={"Bistro Boss"}></Cover>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;