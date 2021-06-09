import React from 'react';
import "./Share.css";
import {PermMedia} from "@material-ui/icons"
import { Button } from './Button'

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <input
                        placeholder="Share your status"
                        className="shareInput"
                    />
                </div>
                
                <div className="shareBottom">
                    <Button className="sharePhotoWrapper">
                        <PermMedia className="shareIcon"/>
                        <span className="sharePhoto">Share your photo</span>
                    </Button>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
        
    )
}
