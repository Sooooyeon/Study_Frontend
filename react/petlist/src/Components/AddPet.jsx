import React from 'react';
import {useState} from 'react';

export default function AddPet({setPets}) {

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState("");

    function handleInputName(e){
        console.log(e.target.value );
        return setName(e.target.value)
    }

    function handleInputSpecies(e){
        console.log(e.target.value );
        return setSpecies(e.target.value)
    }

    function handleInputAge(e){
        console.log(e.target.value );
        return setAge(e.target.value)
    }

    function add(event){
        event.preventDefault();
        setPets((prev)=>{
            console.log({ name, species, age, id: Date.now() })
            return [...prev, { name, species, age, id: Date.now() }]
        });
        // 초기화
        setName('');
        setSpecies('');
        setAge(0);
    }

    return (
        <form onSubmit={add}>
            <fieldset>
                <legend>새로운 애완동물을 추가하세요!</legend>
                <input type='text' value={name} onChange={handleInputName} placeholder="이름" />
                <input type='text' value={species} onChange={handleInputSpecies} placeholder="species" />
                <input type='Number' value={age} onChange={handleInputAge} placeholder="나이" />
                <button>추가하기</button>
            </fieldset>
        </form>
    )
}
