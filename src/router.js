import {createBrowserRouter} from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import TodoPage from "./pages/TodoPage";
import MainLayout from "./layouts/MainLayout";
import PostsPage from "./pages/PostsPage";

const router =
 createBrowserRouter([
     {
         path: ``, element:<MainLayout/>, children: [
             {
                 path: `albums`, element: <AlbumsPage/>
             },
             {
                 path: `comments`, element: <CommentsPage/>, children:[
                     {
                         path:`posts`, element:<PostsPage/>
                     }
                 ]
             },
             {
                 path: `todo`, element: <TodoPage/>
             },
         ]
     }
]);
export {
    router
}