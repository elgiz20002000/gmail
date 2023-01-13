import  './header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import gmail from '../../icon/gmail.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, User } from '../../features/userSlice';
import { auth } from '../../firebase';

export const Header =  () => {
    const user = useSelector(User)
    const dispatch = useDispatch()
    const Logout = () => {
        auth.signOut()
        .then(dispatch(logout()))
        .catch(err => alert(err))
        
    }
    return ( 
        <div className='header'>
            <div className="left_item">
            <IconButton>
                <MenuIcon fontSize='medium'/>
            </IconButton>
            <img src={gmail} alt="gmail" />
            </div>
            <div className="middle_item">
                <SearchIcon/>
                <input type="text" placeholder='Search mail' name="" id="" />
                <ArrowDropDownIcon/>
            </div>
            <div className="right_item">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton onClick={Logout}>
                <Avatar  src={user?.photo}/>
                </IconButton>
            </div>
        </div>
     );
}
