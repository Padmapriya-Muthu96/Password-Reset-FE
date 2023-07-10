import React  from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";





const SignUp=()=>{

    const formRef = useRef(null);


    let navigate=useNavigate();

    const handleSignup=async(e)=>{
        e.preventDefault()

    let data={

        name:e.target.name.value,
        mobile:e.target.mobile.value,
        email:e.target.email.value,
        password:e.target.password.value

    }

    try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/signup`,data)
            console.log(res);
            if(res.status===200)
            {
                toast.success(res.data.message)
                formRef.current.reset();
                navigate('/signin')
            }
        } catch (error) {
             toast.error(error.response.data.error || error.response.data.message)
        }
    }

    

    return<div className='container-fluid' >

    
    <h1 className='title'>Sign Up</h1>
    <div className='signup-wrapper'>
    <Form onSubmit={handleSignup} ref={formRef}>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name"/>
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" name="mobile"/>
      </Form.Group>
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
      <br></br>
      <p>Alreay have Account? <Link to="/signin" className="btn btn-link">Sign In</Link></p>
      
    </Form>
    </div>
  </div>
    
}
export default SignUp;
