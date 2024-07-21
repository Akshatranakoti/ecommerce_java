import { Grid, TextField,Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

function LoginForm() {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSubmit=(event)=>{
event.preventDefault()
const data=new FormData(event.currentTarget);
const userData={
  
  email:data.get("email"),
  password:data.get("password"),
  
}
dispatch(login(userData))
console.log("userDAta:",userData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
      
          <Grid item xs={12} >
            <TextField className='w-full' required id='email' name='email' label="Email" autoComplete='email'/>
          </Grid>
          <Grid item xs={12} >
            <TextField className='w-full'required id='password' name='password' label="Password" autoComplete='password'/>
          </Grid>
          <Grid item xs={12}>
            <Button className='bg-[#9155fd] w-full' type='submit' variant='contained' size='large' sx={{padding:".8rem 0",bgcolor:"#9155fd"}}>Login</Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>Dont have an account?</p>
          <Button onClick={()=>navigate("/register")} className='ml-5 ' size='small'>Register</Button>
        </div>
        </div>
    </div>
  )
}

export default LoginForm;