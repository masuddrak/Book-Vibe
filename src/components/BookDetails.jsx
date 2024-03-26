import { useLoaderData, useParams } from "react-router-dom";
import { saveLocalStorageItem, saveWislistLocastorag } from "../uitlity/utility";

const BookDetails = () => {
    const detailsBookID = useParams()
    const books = useLoaderData()

    const detailsBook = books.find(book => book.bookId == detailsBookID.boodID)
    const { image, bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating } = detailsBook
    const handelReadItem = (detailsBook) => {
        saveLocalStorageItem(detailsBook)
    }
    const handelWilslistItem = (detailsBook) => {
        saveWislistLocastorag(detailsBook)
    }
    return (
        <div className="w-full mt-10 grid grid-cols-2 gap-10 justify-between">
            <div className="flex-shrink-0 w-full h-full mb-6 bg-base-200 rounded-md">
                <div className="m-20">
                    <img src={image} alt="" className="object-cover object-center w-full h-full  dark:bg-gray-500" />
                </div>
            </div>
            {/* book articel */}
            <div>

                <div className=" space-y-2">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="text-xl">By:{author}</p>
                </div>

                <hr className=" border-dotted border-gray-400 my-4" />
                <p className="text-sm">{category}</p>
                <hr className=" border-dotted border-gray-400 my-4" />
                <p><span className="font-bold">review:</span> {review}</p>
                <div className="space-y-2">
                    <div className="flex gap-3 items-center mt-4">
                        <h4 className="font-bold">Tag</h4>
                        {
                            tags.map((tag, tagID) => <button key={tagID} className="btn bg-green-100 text-green-600">#{tag}</button>)
                        }
                    </div>
                </div>
                <hr className=" border-dotted border-gray-400 my-4" />

                <div className="md:w-2/4">
                    <div className="flex justify-between">
                        <div>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div>
                            <p className="font-bold">{totalPages}</p>
                            <p className="font-bold">{publisher}</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                            <p className="font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                        <button onClick={() => handelReadItem(detailsBook)} className="btn btn-outline">Read</button>
                        <button onClick={()=>handelWilslistItem(detailsBook)} className="btn btn-active btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;