import React, {useEffect, useState} from 'react';

import {commentsService} from "../service/commentService";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;