import React from 'react'

export default function PetItem({pet}) {
  return (
    <li>
        {`${pet.name}는 ${pet.species}입니다. 그리고 ${pet.age}살 입니다.`}
    </li>
  )
}
