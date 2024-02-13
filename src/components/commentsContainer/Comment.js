import React from 'react';
import { useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
    const { postId, id, name, email, body } = comment;

    const navigate = useNavigate();
    return (
        <div>
            <div>Ідентифікатор поста - {postId}</div>
            <div>{id}. {name}</div>
            <div>Email - {email}</div>
            <div>{body}</div>
            <button onClick={() => navigate(`posts`, { state: { postId } })}>Post</button>
        </div>
    );
};

export default Comment;