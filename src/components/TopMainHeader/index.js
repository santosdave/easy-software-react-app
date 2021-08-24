import React , {useState} from 'react';
import {
    Icon,
    IconButton,
    Button,
    Popover,
    Avatar,
    Badge,
    useMediaQuery,
    Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import "./style.css";
function TopMainHeader() {
    const [anchorEl, setAnchorEl]=useState(false);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleAvatarClick= async () => {
        if(anchorEl==false) setAnchorEl(true)
        else setAnchorEl(false)
    }
    return (
        <div className="top_header">
            <div className="top_header_container">
                <div className="top_header_area">
                    <div>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                        <IconButton>
                            <MailOutlineIcon/>
                        </IconButton>
                        <Badge color="primary" badgeContent={1}>
                            <IconButton>
                                <NotificationsNoneIcon/>
                            </IconButton>
                        </Badge>
                    </div>
                    <div className="search_container">
                        <input type="text"  placeholder="Search here..."/>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                    <div className="username_container">
                        <span>
                             Hi <strong>{"Santos Dave"}</strong>
                        </span>
                        <Avatar className="avatar" src='https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'/>
                        <IconButton aria-describedby={id}  onClick={handleAvatarClick}>
                            <MoreVertIcon/>
                        </IconButton>
                        <Popover 
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleAvatarClick}
                        
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        
                        >
                            <div className="username_container_menu">
                                <div>
                                    <IconButton>
                                        < HomeIcon/>
                                    </IconButton>
                                    <span > Home </span>
                                </div>
                                <div>
                                    <IconButton>
                                        <PersonIcon/>
                                    </IconButton>
                                    <span > Profile </span>
                                </div>
                                <div>
                                    <IconButton>
                                        <SettingsIcon/>
                                    </IconButton>
                                    <span > Settings </span>
                                </div>
                                <div>
                                    <IconButton>
                                        <PowerSettingsNewIcon/>
                                    </IconButton>
                                    <span > Logout </span>
                                </div>
                            </div>
                        </Popover>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default TopMainHeader
