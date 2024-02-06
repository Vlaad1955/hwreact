import React from 'react';
import Simpsons from "./Components/Simpsons/Simpsons";
import Simpson from "./Components/Simpsons/Simpson";
import Persons from "./Components/Persons/Persons";

const App = () => {
    return (
        <div>
            <Persons/>
            <Simpsons/>
        </div>
    );
};

export default App;