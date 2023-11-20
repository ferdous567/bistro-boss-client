
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import SingleMenu from "./SingleMenu";

const PopularMenu = () => {

  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');
    return (
        <div className="max-w-screen-lg mx-auto mb-10">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-2">
                {
                    popularItems.map(singleMenu => <SingleMenu key={singleMenu._id}
                    singleMenu={singleMenu}></SingleMenu>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-b-4 ">view full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;