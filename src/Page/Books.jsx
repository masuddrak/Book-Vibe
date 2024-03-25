import { useEffect, useState } from "react";
import Book from "../components/Book";

const Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('fackData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    console.log(books)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Books</h2>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;