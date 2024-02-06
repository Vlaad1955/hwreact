import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {postService} from "../services/postService";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
postService.getAll().then(({data}) => setPosts(data))
    }, []);
    const getCurrentPost = (post) => {
        setPostDetails(post)
    }
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            <hr/>
            {postDetails !== null && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default Posts;