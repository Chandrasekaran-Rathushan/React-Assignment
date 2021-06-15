import React, { useState } from 'react';
import { connect } from 'react-redux';
import { load_thumbnails } from '../../redux/actions/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ALBUM_ID } from '../album/Album.js';
import ModalView from '../modal/ModalView';
import './thumbnail.css';

const Thumbnails = ({ load_thumbnails }) => {
    // thumbnails is an array where all thumbnail elements are stored.
    const thumbnails = useSelector(state => state.auth.thumbnails);

    /*
     * selctedThumnails array is used to filter thumbnail elements 
        which matches with selected album id by the user.
    */
    const selectedThumbnails = thumbnails.filter((element) => {
        return element.albumId === ALBUM_ID;
      }
    );

    /*
    * title useState used to store state of the title of the thumbnail.
    * url useState used to store the state of the thumnail url.
    * modalShow useState used to  change the state of the modal by the user.
    */
    
    const [title, setTitle] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [url, setUrl] = useState('');

    // when user presses close button on the modal, modal will be closed.
    const onHide = e => {
        setModalShow(false);
    };


    const renderSelectedthumbnails = selectedThumbnails.map((thumbnail) => {

        // when user clicks on a thumbnail, title and image url will be stored. 
        const onClick = e => {
            setUrl(thumbnail.url);
            setTitle(thumbnail.title);
            setModalShow(true);
        };

        return (
            <div className="card" key={thumbnail.id} onClick={e => onClick(e)}>
                <img class="card-img-top" src={thumbnail.thumbnailUrl} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{thumbnail.title}</h5>
                </div>
            </div>
        );
    })

    const renderAllthumbnails = thumbnails.map((thumbnail) => {

        // when user clicks on a thumbnail, title and image url will be stored. 
        const onClick = e => {
            setUrl(thumbnail.url);
            setTitle(thumbnail.title);
            setModalShow(true);
        };

        return (
            <div className="card" key={thumbnail.id} onClick={e => onClick(e)}>
                <img class="card-img-top" src={thumbnail.thumbnailUrl} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{thumbnail.title}</h5>
                </div>
            </div>
        );
    })

    // useEffect Hook used to get data from api.
    useEffect(() => {
        load_thumbnails();
        // eslint-disable-next-line
    }, [])


    return (
        <div className="container">
            {
                selectedThumbnails.length === 0 ? renderAllthumbnails : renderSelectedthumbnails
            }

            {/* ModaL has been used to show the relevent image of the thumbnail.S */}
            <ModalView show={modalShow} onHide={e => onHide(e)} url={url} title={title}/>
        </div>
    );
}



export default connect(null, { load_thumbnails })(Thumbnails);