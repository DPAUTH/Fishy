import React from 'react';
import "./Feed.css";
import Share from '../Share';
import Post from '../Post';

export default function Feed() {
    return(
        <div className="feedWrapper">
            <Share />
            <Post />
            <Post />
        </div>
    )
}