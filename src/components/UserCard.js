import React from 'react';

function UserCard({user}) {
    return (
        <div className='user-card'>
            <h3>{user.firstname} {user.lastname}</h3>
            <h4>email: {user.email}</h4>
        </div>
    )
}

export default UserCard;