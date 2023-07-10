import React  from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify'
import { Link } from "react-router-dom";
import { useRef } from "react";



const SignIn=()=>{

    const formRef = useRef(null);

    const handleSignup=async(e)=>{
        e.preventDefault()

    let data={

       
        email:e.target.email.value,
        password:e.target.password.value

    }

   

   
        try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/signin`,data)
            console.log(res);
            if(res.status===200)
            {
                toast.success(res.data.message)
                formRef.current.reset();
                
            }
        } catch (error) {
             toast.error(error.response.data.error || error.response.data.message)
        }


    }

    

    return<div className='container-fluid'>

    
    
    <h1 className='title'>Sign In</h1>
    <div className='signup-wrapper'>
    <Form onSubmit={handleSignup} ref={formRef}>
   
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/forget-password" className="btn btn-link">Forget Password</Link>
    </Form>
    </div>
  </div>
    
}
export default SignIn;