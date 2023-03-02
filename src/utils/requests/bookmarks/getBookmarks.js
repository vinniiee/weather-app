import { server } from "./server"

export const getBookmarks = async (setBookmarks)=>{

    const response = await fetch(server+"/bookmarks");
    const data = await response.json();
    setBookmarks(data);
    return data;

}