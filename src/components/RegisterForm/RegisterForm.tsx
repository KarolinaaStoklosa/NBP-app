import react from "react"
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useForm} from "react-hook-form";
import { RegisterFormData } from "../../helpers/interfaces";
import {Card, Typography, TextField, Button } from '@mui/material'

const RegisterForm = () => {

const {register, handleSubmit} = useForm<RegisterFormData>()

const submitHandler = ({email, password, password2}: RegisterFormData) => {

    if (password === password2) {
        createUserWithEmailAndPassword(auth,email,password).then(()=> console.log('Successfully registered')).catch((err)=> console.log(err.message))} else { alert('Passwords are diffrent!')}
}

return (

    <form onSubmit={handleSubmit(submitHandler)}>
<Typography>Register new account</Typography>
<TextField 
type='email'
placeholder="email"
{...register('email', {required: true})}></TextField>

<TextField 
type='password'
placeholder="password"
{...register('password', {required: true})}></TextField>

<TextField 
type='password'
placeholder="repeat password"
{...register('password2', {required: true})}></TextField>

<Button variant='contained' type='submit'>Register</Button>
</form>
)}

export default RegisterForm;