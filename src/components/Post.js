import React from 'react'
import './Post.css'
import {MoreVert} from "@material-ui/icons"
import {FavoriteBorder} from "@material-ui/icons"
import {Favorite} from "@material-ui/icons"
import {Checkbox} from "@material-ui/core"
import {FormControlLabel} from "@material-ui/core"
import { Button } from './Button'
import { useState } from 'react'


export default function Post() {
    const [open, setOpen] = useState(false);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <span className="postUsername">Username</span>
                    <Button className="postOptions" onClick={() => setOpen(!open)}>
                        <MoreVert />
                        <div className ="dropDownMenu">
                            {open && <Button className="dropDown">
                                Edit post
                            </Button>}
                        </div>
                        
                    </Button>
                </div>
                <div className="postMid">
                    <span className="postText">Photo description </span>
                    <img className="postImg" src="images/AtlanticBluefin.jpg"/>
                </div>
                <div className="postBottom">
                    <FormControlLabel
                        control={<Checkbox 
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                    name="checkedH" />}
                        
                    />
                    <span className="likeCounter">5k.</span>
                </div>
            </div>
        </div>
    )
}
