import React from 'react';
import css from "./Post.module.css"

const Post = ({ post }) => {
    const { title, body } = post;
    return (
        <div>
            <div className={css.Post}>{title}</div>
            <div className={css.Post}>{body}</div>
        </div>
    );
};

export default Post;