import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {MdError} from 'react-icons/md'
import { signInWithEmailAndPassword } from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from "./../../libs/firebase"
import { Label, Input } from "./../../ui/forms";
import { SubmitButton } from "../../ui/buttons";
import {LoginPageStyles, FormControl} from './styles'
 
 

function LoginPage(props) {
     const navigator = useNavigate()
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")


     const notify = (error) => toast.error(error.code,{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon:<MdError/>

  });


   function onLoginRequest(e){
     e.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then(userCredential=>{
         navigator('/dashboard') 
     })
     .catch(error=>{
       // add toast messages
       notify(error)
     })
  
   }
  return (
    <>
      <LoginPageStyles>
        <ToastContainer/>

        <header>
          <h2>RiseCoffee StoreFront Dashboard</h2>
        </header>

        <form onSubmit={onLoginRequest}>
          <FormControl className="form-control">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" placeholder="email@gmail.com" onChange={(e)=> setEmail(e.target.value)}/>
          </FormControl>

          <FormControl className="form-control">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" placeholder="**********" onChange={(e)=>setPassword(e.target.value)} />
          </FormControl>
          <FormControl className="form-control">
            <SubmitButton
              type="submit"
              padding="1rem"
              margin="2rem 0 0"
              fs="3rem"
              bg="green"
            >
              log in to dashboard
            </SubmitButton>
          </FormControl>
        </form>
      </LoginPageStyles>
    
    </>
  );
}

export default LoginPage;
