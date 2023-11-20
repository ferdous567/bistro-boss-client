
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10">
             <h2 className='text-center text-orange-500 font-normal text-xl mb-3'>{subHeading}</h2>
            <h1 className='p-2 border-t-2 border-b-2 text-center 
            w-[250px] mx-auto text-2xl font-bold'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;