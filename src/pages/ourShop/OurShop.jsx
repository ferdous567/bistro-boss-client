import { Helmet } from "react-helmet-async";
import image from '../../assets/shop/banner2.jpg';
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/foodCard/FoodCard";
import { useParams } from "react-router-dom";


const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIdx, setTabIdx] = useState(initialIndex);

    const [menu] = useMenu();
    // console.log(menu);
    

    const deserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Shop
                </title>
            </Helmet>

            <Cover img={image} title={"Our Shop"}></Cover>
            <Tabs className='max-w-screen-lg mx-auto my-20 ' defaultIndex={tabIdx} onClick={(index) => setTabIdx(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
               <div className="py-20">
               <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 " >
                        {
                            salads.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        {
                            pizzas.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 " >
                        {
                            soups.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
                        {
                            deserts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
                        {
                            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
               </div>
            </Tabs>
        </div>
    );
};

export default OurShop;