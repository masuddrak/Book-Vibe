export const getLocalReadItems=()=>{
    const getLocalItems=localStorage.getItem("readItem")
    if(getLocalItems){
       return JSON.parse(getLocalItems)
    }
return[]
}

export const saveLocalReadItem=(readItem)=>{
    const getReadItems=getLocalReadItems()
    const existItem=getReadItems.find(item=>item.bookId ==readItem.bookId )
    if(!existItem){
        getReadItems.push(readItem)
        localStorage.setItem("readItem",JSON.stringify(getReadItems))
    }
    else{
        return alert("already added")
    }
}