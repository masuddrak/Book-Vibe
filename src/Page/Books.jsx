import { useEffect, useState } from "react";
import Book from "../components/Book";
import { Audio } from "react-loader-spinner";

const Books = () => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        fetch('fackData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        setTimeout(() => {
            setIsloading(false)
        }, 1000);
    }, [])
    // console.log(books)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Books</h2>
            <div className="md:grid grid-cols-3 gap-8 mx-2 md:mx-0  relative">
                {
                    isLoading == true ? <div className=" flex justify-center ">
                        <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="green"
                            ariaLabel="three-dots-loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </div> : books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;