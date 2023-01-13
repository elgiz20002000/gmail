import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import './SendMail.scss'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';

export const SendMail = () => {

    const dispatch = useDispatch()
    const {register , handleSubmit , formState:{errors}} = useForm()

    const onSubmit = (data) => {
        db.collection('emails').add({
            ...data ,
            time:new Date().toUTCString()
        })
        dispatch(closeSendMessage())
    }
  return (
        <div className="send_mail">
            <div className="mail_header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input className='to' placeholder='To' type="email" name="to" {...register("to", { required: true })}/>
                {errors.to &&  <div className='mail_error'>To is required</div>}

                <input className='subject' placeholder='Subject' type="text" name="subject" {...register("subject", { required: true })}/>
                 {errors.subject &&  <div className='mail_error'>Subject is required</div> }

                <input className='message' placeholder='Message' type="text" name="message" {...register("message", { required: true })}/>
                 {errors.message &&  <div className='mail_error'>Message is required</div> }

                <div className="mail_options">
                    <Button variant="contained" type='submit' >Submit</Button>
                </div>
            </form>

        </div>
  )
}
