import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { getLocalReadItems, getLocalWislistItems } from "../uitlity/utility";
import ReadBookCard from "../components/ReadBookCard";
import WishListCard from "../components/WishListCard";


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // read data
    const [readItems,setReaditems] = useState(getLocalReadItems())

    const books=getLocalReadItems()
    const [desendingData,setDesendingData]=useState(getLocalReadItems())
    useEffect(()=>{
        const loadReadData=getLocalReadItems()
        setDesendingData(loadReadData)
    },[books])

    const handelShortByData=(serachData)=>{
            if(serachData=="rating"){
                const shortReadBooks= desendingData.sort((firstItem, secondItem) => {
                    if(firstItem.rating < secondItem.rating){
                        return -1;
                    }
                    if(firstItem.rating > secondItem.rating){
                        return 1;
                    }
                
                    return 0;
                });
               console.log(shortReadBooks)
               setDesendingData(shortReadBooks)
            }
    }
    // wishlist data
    const wishListItems = getLocalWislistItems()

    console.log(readItems)
    return (
        <section>
            <h1 className="text-3xl font-bold text-center bg-base-200 p-6 my-10 rounded-lg">Books</h1>
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handelShortByData("rating")}><a>Reating</a></li>
                        <li><a>Item 2</a></li>
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