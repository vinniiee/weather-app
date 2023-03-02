import { getBookmarks } from "./getBookmarks";
import { server } from "./server"


export const removeBookmark = async(city,setBookmarks)=>{

    try{
        const response = await fetch(server+"/bookmarks/remove",{
            method:"POST",
            body: JSON.stringify(city),
            headers:{
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        await getBookmarks(setBookmarks);
        return data.deleted;
    }
    catch(e){
        console.log(e);
        return false;
    }


}