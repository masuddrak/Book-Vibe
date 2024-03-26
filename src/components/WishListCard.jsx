import { AiOutlineFilePdf } from "react-icons/ai";
import { IoLocationOutline, IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const WishListCard = ({wishlistBook}) => {
    const {bookId, image, bookName,
        author,
        category,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating } = wishlistBook
    return (
        <div className="p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-lg border mb-10">
        <div className=" md:flex items-center justify-center w-full gap-5">
            <div className="space-y-2 bg-base-200  flex justify-center rounded-lg">
                <div className="m-5 w-[150px] md:w-[300px] md:h-[200px] text-center">
                    <img src={image} alt="" className="block  w-full h-full   rounded-md  dark:bg-gray-500" />
                </div>
            </div>
            <div className="w-full space-y-3">

                <div className=" space-y-2">
                    <h2 className="text-xl font-bold">{bookName}</h2>
                    <p className="font-semibold">By:{author}</p>

                </div>
                <div >
                    <div className="lg:flex space-y-3 md:gap-6 items-center">
                        <h4 className="font-semibold mb-3 md:mb-0">Tag</h4>
                        {
                            tags.map((tag, tagID) => <a key={tagID} className="p-2 mr-3 md:mr-0 rounded-lg bg-green-100 text-green-600">#{tag}</a>)
                        }
                        <div className="flex items-center gap-2">
                            <IoLocationOutline></IoLocationOutline>
                            <p>Year of Publishing : {yearOfPublishing}</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex md:gap-10">
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
                <div className="md:flex gap-5">
                    <button className="px-3 py-2 rounded-full bg-[#e0eeff] text-[#0060ce]">Category : {category}</button>
                    <br />
                    <button className="px-3 my-3 md:my-0 py-2 rounded-full bg-[#fff3e0] text-[#ce7b00]">Rating : {rating}</button>
                    <br />
                    <Link to={`/bookDetails/${bookId}`} className="btn rounded-full bg-green-500 text-white">View Details</Link>
                </div>
            </div>
        </div>
    </div>
    );
};
WishListCard.propTypes = {
    wishlistBook: PropTypes.object,
}
export default WishListCard;