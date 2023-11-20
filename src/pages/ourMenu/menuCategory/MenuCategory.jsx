import { Link } from "react-router-dom";
import Cover from "../../../shared/cover/Cover";
import SingleMenu from "../../popularMenu/SingleMenu";


const MenuCategory = ({ items, coverImg, title }) => {



    return (
        <div className="my-20 max-w-screen-lg mx-auto">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto my-10">
                {
                    items.map(singleMenu => <SingleMenu key={singleMenu._id}
                        singleMenu={singleMenu}></SingleMenu>)
                }
            </div>
            <div className="text-center">
                <Link to={`/shop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;