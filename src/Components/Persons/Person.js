import React from 'react';

const Person = ({person}) => {
    const { id, name, status, species, gender, image } = person;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{status}</h2>
            <p>{gender}</p>
            <p>{species}</p>
            <img src = {image} alt = {name}/>
        </div>
    );
};

export default Person;