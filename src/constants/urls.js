const baseURL = `https://jsonplaceholder.typicode.com`;
const posts = `/posts`
const launches = `/launches`
const SpaceX = `https://api.spacexdata.com/v3`;
const urls = {
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    },
    spacex: {
        base: launches,
        byId: (id) => `${launches}/${id}`

    }
}
export {
    baseURL,
    urls,
    SpaceX
}