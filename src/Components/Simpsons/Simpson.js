import React from 'react';

const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;
    return (
        <div>
            <h1>Name- {name} {surname}</h1>
            <h1>Age- {age}</h1>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;