import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    return (
        <div>
            <div>{id}. {title}</div>
            <div>User - {userId}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};

export default Todo;