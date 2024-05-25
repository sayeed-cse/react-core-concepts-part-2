
import { useEffect, useState } from 'react';
import './Comments.css';
import Comment from './Comment';


export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])
    return (
        <>
            <div className="comment-box">
                <h3>Total Comments : {comments.length}</h3>
                {
                    comments.map((comment) => <Comment comment={comment}></Comment>)
                }
            </div>
        </>
    );
}