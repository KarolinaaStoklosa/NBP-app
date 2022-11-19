import react from "react"
import LoginForm from "../LoginForm/LoginForm";
import {Typography, Button } from '@mui/material'
import {Link} from 'react-router-dom'



const LoginPage = () => {
    return (

    <>
    <LoginForm />
    <Typography>Don't have an account yet? Register now!</Typography>
    <Link to ='/register'>
        <Button>Register</Button>
    </Link>
    
    </>
    )
}

export default LoginPage;