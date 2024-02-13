import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { postService } from "../service/postService";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const { state: { postId } } = useLocation();

    useEffect(() => {
        if (postId) {
            postService.getById(postId).then(({ data }) => setPosts(data))
        }
    }, [postId]);

    return (
        <div>
            {posts && <Post key={posts.id} post={posts} />}
        </div>
    );
};

export default Posts;