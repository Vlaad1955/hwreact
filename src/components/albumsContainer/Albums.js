import React, {useState} from 'react';
import {albumService} from "../service/albumService";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    albumService.getAll().then(({data}) => setAlbums(data))
    return (
        <div>
            {albums.map(album=><Album key = {album.id} album={album}/>)}
        </div>
    );
};

export default Albums;