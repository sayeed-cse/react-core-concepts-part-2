import { useEffect, useState } from "react";

export default function Posts(){
    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data =>setPosts(data));
    },[])
    return(
        <>
        <div>
            <h3>Total Posts : {posts.length}</h3>
        </div>
    </>
    );
}