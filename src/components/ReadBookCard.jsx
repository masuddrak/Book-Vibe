import { IoLocationOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReadBookCard = ({ readBook }) => {
    const {bookId, image, bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating } = readBook
    return (
        <div className="p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-lg border mb-10">
            <div className=" flex items-center justify-center w-full gap-5">
                <div className="space-y-2 bg-base-200  flex justify-center rounded-lg">
                    <div className="m-5 w-[300px] h-[200px] text-center">
                        <img src={image} alt="" className="block  w-full h-full object-center  rounded-md  dark:bg-gray-500" />
                    </div>
                </div>
                <div className="w-full space-y-3">

                    <div className=" space-y-2">
                        <h2 className="text-xl font-bold">{bookName}</h2>
                        <p className="font-semibold">By:{author}</p>

                    </div>
                    <div >
                        <div className="flex gap-6 items-center">
                            <h4 className="font-semibold">Tag</h4>
                            {
                                tags.map((tag, tagID) => <p key={tagID} className="p-2 rounded-lg bg-green-100 text-green-600">#{tag}</p>)
                            }
                            <div className="flex items-center gap-2">
                                <IoLocationOutline></IoLocationOutline>
                                <p>Year of Publishing : {yearOfPublishing}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex items-center gap-2">
                            <IoPersonAddOutline></IoPersonAddOutline>
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineFilePdf></AiOutlineFilePdf>
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>
                    <hr className=" border-dotted border-gray-400" />
                    <div className="flex gap-5">
                        <p className="px-3 py-2 rounded-full bg-[#e0eeff] text-[#0060ce]">Category : {category}</p>
                        <p className="px-3 py-2 rounded-full bg-[#fff3e0] text-[#ce7b00]">Rating : {rating}</p>
                        <Link to={`/bookDetails/${bookId}`} className="btn rounded-full bg-green-500 text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;