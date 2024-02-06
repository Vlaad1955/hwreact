import React from 'react';

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;
    return (
        <div>
            <div>User - {userId}</div>
            <div>{id}. {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default PostDetails;