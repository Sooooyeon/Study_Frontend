import React from 'react';
import { useState } from 'react';

export default function UserItem({user}) {

    const [showInfo, setShowInfo] = useState(false);
    
    return (
        <li onClick={()=>{setShowInfo(!showInfo)}} style={{cursor:"pointer"}}>
            {user.name}
            { showInfo ? <div>
                <p>Email : {user.email}</p>
                <p>Job : {user.job}</p>
            </div> : null}
        </li>
    )
}
