
const SingleMenu = ({ singleMenu }) => {
    const { name, image, price, recipe } = singleMenu;
    return (
        <div className="h-[150px] mb-8 flex">
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img style={{borderRadius: '0 200px 200px 200px'}} 
                className="h-[100px] " src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                    <h2 className="card-title">{name}-----------</h2>
                    <h2 className="text-blue-500 font-bold">$ {price}</h2>
                    </div>
                    <p>{recipe}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleMenu;