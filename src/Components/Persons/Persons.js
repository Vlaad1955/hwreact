import React from 'react';
import Person from "./Person";
import person from "./Person";

const Persons = () => {
    const persons = [
        {
            id: 1,
            name: `Rick Sanchez`,
            status: `Alive`,
            species: `Human`,
            gender: `Male`,
            image:`https://rickandmortyapi.com/api/character/avatar/1.jpeg`
        },
        {
            "id":2,
            "name":"Morty Smith",
            "status":"Alive",
            "species":"Human",
            "gender":"Male",
            "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            "id":3,
            "name":"Summer Smith",
            "status":"Alive",
            "species":"Human",
            "gender":"Female",
            "image":"https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
            "id":4,
            "name":"Beth Smith",
            "status":"Alive",
            "species":"Human",
            "gender":"Female",
            "image":"https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        },
        {
            "id":5,
            "name":"Jerry Smith",
            "status":"Alive",
            "species":"Human",
            "gender":"Male",
            "image":"https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        },
        {
            "id":6,
            "name":"Abadango Cluster Princess",
            "status":"Alive",
            "species":"Alien",
            "gender":"Female",
            "image":"https://rickandmortyapi.com/api/character/avatar/6.jpeg"
        },
    ];
    return (
        <div>
            {persons.map(person => <Person key={person.id} person = {person}/>)}
        </div>
    );
};

export default Persons;