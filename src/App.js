import React from 'react';
import Posts from "./Components/Posts";
import Launches from "./Components/Launches";

const App = () => {
    return (
        <div>
          <Launches/>
            <Posts/>
        </div>
    );
};

export default App;