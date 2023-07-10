import React  from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify'
 import { useNavigate } from "react-router-dom";
 import { useRef } from "react";


const ResetPassword=()=>{

    const formRef = useRef(null);

    let navigate=useNavigate();

    const handleSignup=async(e)=>{
        e.preventDefault()

    let data={

       
        email:e.target.email.value,
        token:e.target.token.value,
        newPassword:e.target.newPassword.value,

    }

   

   
        try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/reset-password`,data)
            console.log(res);
            if(res.status===200)
            {
                toast.success(res.data)
                formRef.current.reset();
                 navigate('/signin')
            }
        } catch (error) {
             toast.error(error.response.data.error || error.response.data.message)
        }
    }

    

    return<div className='container-fluid'>

    
    
    <h1 className='title'>Reset-Password</h1>
    <div className='signup-wrapper'>
    <Form onSubmit={handleSignup} ref={formRef}>
   
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
      </Form.Group>
   <Form.Group className="mb-3" >
        <Form.Label>Token</Form.Label>
        <Form.Control type="text" placeholder="token" name="token"/>
      </Form.Group> 
      <Form.Group className="mb-3" >
        <Form.Label>New Password</Form.Label>
        <Form.Control type="text" placeholder="New Password" name="newPassword"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Reset Password
      </Button>
    </Form>
    </div>
  </div>
    
}
export default ResetPassword;