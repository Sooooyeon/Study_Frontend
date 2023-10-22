import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { petState } from './atom';




function MainPet() {

    const [pets, setPets] = useRecoilState(petState);

    return (
        <>
            <AddPetForm setPets={setPets}/>
            <ul>
                {pets.map((item) => {
                    return <PetItem key={item.id} data={item}/>
                })}
            </ul>
        </>
    )
}

function AddPetForm({setPets}) {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState(0);

    function handleSubmit(event){
        event.preventDefault();
        setPets((prev)=>{
            return [...prev, { name, species, age, id: Date.now() }]
        });
        setName('');
        setSpecies('');
        setAge(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>새로운 애완동물을 추가해주세요!</legend>
                <label>
                    이름 :
                    <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
                </label>
                <label>
                    종류 :
                    <input type="text"  value={species} onChange={(event)=>setSpecies(event.target.value)}/>
                </label>
                <label>
                    나이 :
                    <input type="number"  value={age} onChange={(event)=>setAge(event.target.value)}/>
                </label>
                <button onClick={handleSubmit}>추가하기</button>
            </fieldset>
        </form>
    )
}


function PetItem({data}) {
    return (
        <li>{data.name}는 {data.species}입니다. 그리고 {data.age}살 입니다.</li>
    )
}

export default function Pet() {
    return (
        <div>
            <h1>애완동물 정보 리스트</h1>
            <MainPet />
        </div>
    )
}