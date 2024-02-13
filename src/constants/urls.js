const BaseURL = "https://jsonplaceholder.typicode.com";
const albums = "/albums";
const comments = "/comments";
const todos = "/todos";
const posts = "/posts";

const urls = {
    albums: {
        base: albums,
        ById: (id) => `${albums}/${id}`
    },
    comments: {
        base: comments,
        ById: (id) => `${comments}/${id}`
    },
    todos: {
        base: todos,
        ById: (id) => `${todos}/${id}`
    },
    posts: {
        ById: (id) => `${posts}/${id}`
    }
};

export {
    BaseURL,
    urls
};