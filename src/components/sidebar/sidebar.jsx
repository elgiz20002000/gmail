import { Button } from "@mui/material"
import plus from '../../icon/plus.svg'
import SideBarOption from "../SideBarOption/SideBarOption"
import './sidebar.scss'
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

export const Sidebar =  () => {
    const dispatch = useDispatch()
    return ( 
        <div className="sidebar">
            <Button onClick={() => dispatch(openSendMessage())} size="medium" className="plus" startIcon={<img src={plus} alt='plus'/>}>Compose</Button>

            <SideBarOption Icon={InboxIcon}  title='Inbox' number='3' selected ={true}/>

            <SideBarOption Icon={StarOutlinedIcon}  title='Starred' number=''/>

            <SideBarOption Icon={WatchLaterIcon}  title='Snoozed' number=''/>

            <SideBarOption Icon={SendIcon}  title='Sent' number='3'/>

            <SideBarOption Icon={InsertDriveFileIcon}  title='Drafts' number='1'/>

            <SideBarOption Icon={KeyboardArrowDownIcon}  title='More' number=''/>

            <div className="sidebar_footer">
                <div className="meet">
                    <h3 className="f_title">Meet</h3>
                    <SideBarOption Icon={VideocamIcon} title='New metting' />
                    <SideBarOption Icon={KeyboardIcon} title='Join a meeting' />
                </div>
                <div className="hangouts">
                    <h3 className="f_title">Hangouts</h3>
                    <Button variant="contained" size="medium" className="sign_in" style={{"height":"32px" , "width":"100%"}} >Sign in</Button>
                </div>
            </div>

        </div>
     )
}



