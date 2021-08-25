import React from 'react';
import {Avatar,IconButton, Button, Divider} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./style.css";
function UserSection() {
    return (
        <div className="user_section">
            <div className="user_detail1">
                <div className="user_details_top">
                    <div>
                     <Avatar className="user_avatar" src='https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'/>
                    </div>
                    
                    <div className="user_details_top1">
                        <h4>SantosDave</h4>
                        <p>santosdave@gmail.com</p>
                    </div>
                </div>
                <div>
                    <IconButton>
                        <MoreVertIcon color="primary"/>
                    </IconButton>
                </div>
            </div>
            <div className="user_section_btn">
                <Button color="primary">
                    CHAT
                </Button>
                <Button color="primary">
                    PROFILE
                </Button>
            </div>
            <Divider/>
            <div>
                <p>Created 3 mins ago</p>
            </div>
        </div>
    )
}

export default UserSection
