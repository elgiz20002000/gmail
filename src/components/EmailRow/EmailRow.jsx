import './EmailRow.scss'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import {IconButton } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

const EmailRow = ({title , subject ,  description ,  time , selected , id}) => {
  const navigate = useNavigate() 
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(selectMail({
      title ,
      subject,
      description,
      time,
      id
    }))
    navigate('/mail')
  }
  return (
    <div className='email_row' onClick={onClick}>
        <div className="email_row_options">
        <IconButton >
          <CheckBoxOutlineBlankIcon/>
        </IconButton>
          
        <IconButton>
          <StarOutlineOutlinedIcon/>
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon/>
        </IconButton>

        </div>
        <h3 className="email_row_title">{title}</h3>
        <div className="email_row_message">
            <h4>{subject}</h4> -
            <span className="description">{description}</span>
        </div>
        <div className="email_row_time">{time}</div>
        
    </div>
  )
}

export default EmailRow