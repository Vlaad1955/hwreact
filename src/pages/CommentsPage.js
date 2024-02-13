import React from 'react';

import Comments from "../components/commentsContainer/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export default CommentsPage;