import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div>
                <h1 className=" text-4xl font-bold  ">OOOP!</h1>
                <div className="mt-5">
                    <Link to='/' className="bg-green-600 p-2 rounded ">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;