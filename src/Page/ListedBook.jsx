import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { getLocalReadItems, getLocalWislistItems } from "../uitlity/utility";
import ReadBookCard from "../components/ReadBookCard";
import WishListCard from "../components/WishListCard";
import { IoIosArrowDown } from "react-icons/io";


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const books = getLocalReadItems()
    const [desendingData, setDesendingData] = useState(books)
    useEffect(() => {
        const loadReadData = getLocalReadItems()
        setDesendingData(loadReadData)
    }, [])

    const handelShortByData = (serachData) => {
        if (serachData == "rating") {
            const shortReadBooks = books.sort((a, b) => (b.rating) - (a.rating));
            setDesendingData(shortReadBooks)
        }
        else if (serachData == "pages") {
            const shortPages = books.sort((a, b) => (b.totalPages) - (a.totalPages))
            setDesendingData(shortPages)
        }
        else if (serachData == "years") {
            const shortYear = books.sort((a, b) => (b.yearOfPublishing) - Number(a.yearOfPublishing))
            setDesendingData(shortYear)
        }
    }


    // wishlist data
    const wishListItems = getLocalWislistItems()

    // console.log(readItems)
    return (
        <section>
            <h1 className="text-3xl font-bold text-center bg-base-200 p-6 my-10 rounded-lg">Books</h1>
            <div className="flex justify-center">
                <details className="dropdown ">
                    <summary className="m-1 bg-green-500 btn text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-300 rounded-box w-52">
                        <li onClick={() => handelShortByData("rating")}><a>Reating</a></li>
                        <li onClick={() => handelShortByData("pages")}><a>Number of pages</a></li>
                        <li onClick={() => handelShortByData("years")}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <article>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="mt-10">
                            {
                                desendingData.map(readBook => <ReadBookCard key={readBook.bookId} readBook={readBook}></ReadBookCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-10">
                            {
                                wishListItems.map(wishlistBook => <WishListCard key={wishlistBook.bookId} wishlistBook={wishlistBook}></WishListCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </article>

        </section>
    );
};

export default ListedBook;