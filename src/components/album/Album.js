import React from 'react';
import { connect } from 'react-redux';
import { load_albums } from '../../redux/actions/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './album.css';

// ALBUM_ID used to store selected album id by the user
export var ALBUM_ID = 0;

const Album = ({ load_albums }) => {
    // albums is an array where all album elements are stored
    const albums = useSelector(state => state.auth.albums);

    const renderAlbums = albums.map((album) => {
        // when user clicks on a album, album id will be stored in ALBUM_ID variable.
        const onClick = e => {
            ALBUM_ID = album.id;
        };

        return (
            <div className="card" key={album.id}>
                <Link to="/photos" className="link">
                <div className="card-body" onClick={e => onClick(e)}>
                    <h5 className="card-title">Album {album.id}</h5>
                    <p className="card-text">{album.title}</p>
                </div>
                </Link>
            </div>
        );
    })

    // useEffect Hook used to get data from api.
    useEffect(() => {
       load_albums();
       // eslint-disable-next-line
    }, [])


    return (
        <div className="container-fluid">
            {renderAlbums}  
        </div>
    );
}
export default connect(null, { load_albums })(Album);