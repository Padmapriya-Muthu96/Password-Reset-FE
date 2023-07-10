import React  from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify';
import { useRef } from "react";



const ForgetPassword=()=>{

    const formRef = useRef(null);

    const handleSignup=async(e)=>{
        e.preventDefault()

    let data={

        
        email:e.target.email.value,
        

    }

   try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/forget-password`,data)
            console.log(res);
            if(res.status===200)
            {
                toast.success(res.data)
                formRef.current.reset();
            }
        } catch (error) {
             toast.error(error.response.data.error || error.response.data.message)
        }
    }

    

    return<>

    
    <div className='container-fluid'>
    <h1 className='title'>Forget-Password</h1>
    <div className='signup-wrapper'>
    <Form onSubmit={handleSignup} ref={formRef}>
    
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Generate Reset-Token
      </Button>
    </Form>
    </div>
  </div>
    </>
}
export default ForgetPassword;