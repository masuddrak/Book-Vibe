// get read items
export const getLocalReadItems = () => {
    const getLocalItems = localStorage.getItem("readItem")
    if (getLocalItems) {
        return JSON.parse(getLocalItems)
    }
    return []
}
// get wislist
export const getLocalWislistItems = () => {
    const getLocalItems = localStorage.getItem("wislistItem")
    if (getLocalItems) {
        return JSON.parse(getLocalItems)
    }
    return []
}


// sav read item
export const saveLocalStorageItem = (Item) => {
    const getReadItems = getLocalReadItems()
    const existItem = getReadItems.find(item => item.bookId == Item.bookId)

    if (!existItem) {
        getReadItems.push(Item)
        localStorage.setItem("readItem", JSON.stringify(getReadItems))
    }

    else {
        return alert("already added red")
    }


}
// sav wislist items
export const saveWislistLocastorag = (Item) => {
    const getWistListItem = getLocalWislistItems()
    const existItemWislist = getWistListItem.find(item => item.bookId == Item.bookId)

    const getReadItems = getLocalReadItems()
    const existReadItem = getReadItems.find(item => item.bookId == Item.bookId)

    if (!existItemWislist) {
        if (existReadItem) {
            return alert("already added read item")
        }

        getWistListItem.push(Item)
        localStorage.setItem("wislistItem", JSON.stringify(getWistListItem))
    }
    else {
        return alert("already added wislist")
    }
}