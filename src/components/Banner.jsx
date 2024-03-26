import { Link } from 'react-router-dom';
import bannerImage from '../../src/assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className="hero py-10 lg:py-20 bg-base-200 md:my-16 rounded-md">
            <div className="hero-content flex-col md:gap-80 lg:flex-row-reverse">
                <img src={bannerImage} className="md:max-w-sm rounded-lg " />
                <div className="space-y-10">
                    <h1 className="text-2xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to='/listedBook' className="btn bg-green-500 text-xl text-white">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;