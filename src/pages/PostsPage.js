import React from 'react';
import Posts from "../components/postsContainer/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <Posts/>
        </div>
    );
};

export default PostsPage;