import './Comment.css';


export default function Comment({comment}) {
    const {name,email,body} = comment;
    return (
        <>
            <div className="comment-box">
                <h4>Name: {name}</h4>
                <h5>Email: {email}</h5>
                <p>Comment : {body}</p>
            </div>
        </>
    );
}