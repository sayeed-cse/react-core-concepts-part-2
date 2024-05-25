import './Friend.css'
export default function Friend({friend}){
    return(
        <>
            <div className='friend'>
                <h3>Name : {friend.name}</h3>
                <h4>User Name: {friend.username}</h4>
                <h4>Email: {friend.email}</h4>
                <p>Address: {friend.address.street} , {friend.address.suite} , {friend.address.city} , {friend.address.zipcode}</p>
            </div>
        </>
    )
}