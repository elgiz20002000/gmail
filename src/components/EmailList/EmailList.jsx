import './EmailList.scss'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';




import React from 'react'
import { IconButton } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import Section from '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../firebase';
function EmailList() {
    const [mails , setMails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('time' , 'desc').onSnapshot(snapshot => {
            setMails(snapshot.docs.map(item => ({
                id:item.id ,
                data:item.data()
            })))
        })
    },[])


  return (
        <div className="email_list">
            <div className="email_list_settings">
                <div className="settings_left">
                    <IconButton>
                    <CheckBoxOutlineBlankIcon/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RefreshIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="settings_right">
                    <IconButton>
                        <ArrowBackIosIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="email_list_sections">
               
                <Section Icon={InboxIcon} title='Primary' color='#C84031' selected/>
                <Section Icon={LocalOfferIcon} title='Promotions' color='#3474E0'/>
                <Section Icon={GroupIcon} title='Social' color='#3C7D40'/>
            </div>

            <div className="email_list_list">
                {mails.map(({data:{to , subject , message , time} , id}) => (
                    <EmailRow 
                    key={id}
                    id={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={time}/>
                ))}
                {/* <EmailRow title='Leslie Alexander' subject='Hiya' time='10:41 PM' description='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' selected/>

                <EmailRow title='Leslie Alexander' subject='Hiya' time='10:41 PM' description='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/> */}
            </div>
        </div>
  )
}

export default EmailList