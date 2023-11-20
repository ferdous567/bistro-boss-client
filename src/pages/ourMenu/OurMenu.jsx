import { Helmet } from "react-helmet-async";
import image from '../../assets/menu/banner3.jpg';
import image2 from '../../assets/menu/dessert-bg.jpeg';
import image3 from '../../assets/menu/salad-bg.jpg';
import image4 from '../../assets/menu/pizza-bg.jpg';
import image5 from '../../assets/menu/soup-bg.jpg';
import Cover from "../../shared/cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";


const OurMenu = () => {

    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            
            <Cover img={image} title={"Our Menu"}></Cover>
            <div className=" mx-auto mb-10">
            <SectionTitle
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={deserts}
            title={'dessert'} coverImg={image2}></MenuCategory>

            {/* salads menu items */}
            <MenuCategory items={salads}
            title={'salad'} coverImg={image3}></MenuCategory>

            {/* pizzas menu items */}
            <MenuCategory items={pizzas}
            title={'pizza'} coverImg={image4}></MenuCategory>

            {/* soups menu items */}
            <MenuCategory items={soups}
            title={'soup'} coverImg={image5}></MenuCategory>
        </div>
            
        </div>
    );
};

export default OurMenu;