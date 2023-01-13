import './Mail.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../../features/mailSlice';

function Mail() {
  const navigate = useNavigate()
  const selectedMail= useSelector(selectOpenMail)
  
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="left_side">
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackOutlinedIcon/>
          </IconButton>

          <IconButton>
            <ArchiveIcon/>
          </IconButton>
          
          <IconButton>
            <ReportIcon/>
          </IconButton>

          <IconButton>
            <DeleteIcon/>
          </IconButton>

          <IconButton>
            <EmailIcon/>
          </IconButton>

          <IconButton>
            <WatchLaterIcon/>
          </IconButton>

          <IconButton>
            <TaskAltOutlinedIcon/>
          </IconButton>

          <IconButton>
            <LabelImportantOutlinedIcon/>
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon/>
          </IconButton>
        </div>
        <div className="right_side">
          <IconButton>
            <UnfoldMoreIcon/>
          </IconButton>

          <IconButton>
            <PrintIcon/>
          </IconButton>

          <IconButton>
            <ExitToAppIcon/>
          </IconButton>
        </div>      
      </div>
      <div className="mail_body">
        <div className="mail_header">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantOutlinedIcon className='important_icon'/>
          <p className="title">{selectedMail?.title}</p>
          <p className="time">{selectedMail?.time}</p>
        </div>
        <div className="message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail