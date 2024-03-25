import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Book = ({ book }) => {
    const {bookId ,tags, image,
        bookName,
        author,
        category,
        rating } = book

    return (
        <Link to={`/bookDetails/${bookId}`} className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-lg border">
            <div className="space-y-4">
                <div className="space-y-2 bg-base-200  flex justify-center rounded-lg">
                    <div className="m-5 w-[300px] h-[200px] text-center">
                        <img src={image} alt="" className="block  w-full h-full object-center  rounded-md  dark:bg-gray-500" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-3">
                        {
                            tags.map((tag, tagID) => <button key={tagID} className="btn bg-green-100 text-green-600">{tag}</button>)
                        }
                    </div>
                </div>
                <div className=" space-y-2">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="text-xl">By:{author}</p>
                    <hr className=" border-dotted border-gray-400" />
                </div>
                <div className="flex justify-between">
                    <p className="text-sm">{category}</p>
                    <div className="flex items-center">
                        <p >{rating}</p>
                        <IoMdStarOutline></IoMdStarOutline>
                    </div>
                </div>
            </div>
        </Link>
    );
};
Book.propTypes = {
    book: PropTypes.object,
}
export default Book;