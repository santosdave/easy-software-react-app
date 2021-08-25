import React,{useState} from 'react';
import {Avatar,IconButton, Button, Divider} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import ChatIcon from '@material-ui/icons/Chat';
import { parseISO, differenceInCalendarDays, format, formatDistanceToNow } from 'date-fns';
import "./style.css";
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

function UserSection({name,username,date,src,phonenumber,email}) {
    const [anchorEl, setAnchorEl]=useState(null)
    const [modalOpen, setModalOpen]= useState(false);
    const [modalStyle]= useState(getModalStyle);
    
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    const handleOpen = () => {
        setModalOpen(true);
      };
    
      const handleClose = () => {
        setModalOpen(false);
      };
    
    const formatDate = (date) => {
		return differenceInCalendarDays(new Date(), date) > 2
			? format(date, 'EEE MMM d h:m b')
			: formatDistanceToNow(date, { addSuffix: true });
	};
    return (
        <div className="user_section">
            <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       <div style={modalStyle} className="modal_container">
                <div className="user_details_top">
                    <div>
                     <Avatar className="user_avatar" src={src}/>
                    </div>
                    
                    <div className="user_details_top1">
                        <h4>{username}</h4>
                        <p>{email}</p>
                    </div>
                </div>
       </div>
      </Modal>
            <div className="user_detail1">
                <div className="user_details_top">
                    <div>
                     <Avatar className="user_avatar" src={src}/>
                    </div>
                    
                    <div className="user_details_top1">
                        <h4>{username}</h4>
                        <p>{email}</p>
                    </div>
                </div>
                <div>
                    <IconButton aria-describedby={id} onClick={handleClick}>
                        <MoreVertIcon color="primary"/>
                    </IconButton>
                    <Popper id={id} open={open} onClose={handleClick} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <div className="menu_list">
                                <div>
                                    <IconButton onClick={handleOpen}>
                                        < PersonIcon />
                                    </IconButton>
                                    <span > View Profile </span>
                                </div>
                                <div>
                                    <IconButton>
                                        <ChatIcon/>
                                    </IconButton>
                                    <span > Chat Now </span>
                                </div>
                                <div>
                                    <IconButton>
                                        <EditIcon/>
                                    </IconButton>
                                    <span > Edit Profile</span>
                                </div>
                            </div>
                            </Fade>
                        )}
                    </Popper>
                </div>
            </div>
            <div className="user_section_btn">
                <Button color="primary">
                    CHAT
                </Button>
                <Button color="primary" onClick={handleOpen} >
                    PROFILE
                </Button>
            </div>
            <Divider/>
            <div>
                <p>{formatDate(parseISO(date))}</p>
            </div>
            
            
        </div>
    )
}

export default UserSection
