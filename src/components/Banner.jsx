import bannerImage from '../../src/assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className="hero py-20 bg-base-200 my-16 rounded-md">
            <div className="hero-content flex-col gap-80 lg:flex-row-reverse">
                <img src={bannerImage} className="max-w-sm rounded-lg " />
                <div className="space-y-10">
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-500 text-xl text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;