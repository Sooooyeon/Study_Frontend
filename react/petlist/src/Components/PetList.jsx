import React from 'react'
import PetItem from './PetItem'

export default function PetList({pets}) {
    return (
        <ul>
            {pets.map((item)=>{
                return <PetItem key={item.id} pet={item}/>
            })}
        </ul>
    )
}
