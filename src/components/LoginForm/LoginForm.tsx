import React from "react";
import { TextField, Button } from "@mui/material";
import {useForm} from 'react-hook-form'
import {auth} from '../../helpers/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import {LoginFormData} from "../../helpers/interfaces"


const LoginForm = () => {
const {register, handleSubmit} = useForm<LoginFormData> ();
const submitHandler = ({email, password}: LoginFormData) =>

{
  signInWithEmailAndPassword(auth, email, password).then(()=>console.log('Successfull login')).catch((err)=>console.error(err.message))
}

return (
<form onSubmit={handleSubmit(submitHandler)}>
<TextField {...register('email', {required: true})}></TextField>
<TextField variant="outlined" type='password' placeholder='password' {...register('password', {required: true})}></TextField>
<Button variant='contained' type='submit'>Log in</Button>
</form>

)

}

export default LoginForm