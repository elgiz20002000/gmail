import './LoginPage.scss'
import GmailLogo from '../../icon/icons8-gmail-logo.svg'
import { Button } from '@mui/material'
import { auth, provider } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

const LoginPage = () => {
    const dispatch = useDispatch()
    const Auth = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                name:user.displayName,
                mail:user.email,
                photo:user.photoURL
            }))
        })
        .catch(error => {
            alert(error)
        })
    }
  return (
    <div className="login">
        <div className="login_container">
            <img src={GmailLogo} alt="logo" />
            <Button onClick={Auth} variant='contained'  size='medium'>Login</Button>
        </div>
    </div>
  )
}

export default LoginPage