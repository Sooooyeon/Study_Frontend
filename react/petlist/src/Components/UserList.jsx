import React from 'react';
import UserItem from './UserItem'

export default function UserList({users}) {

    return (
        <ul>
            {users.map((item)=>{
                return <UserItem key={users.id} user={item}/>
            })}
        </ul>
    )
}
