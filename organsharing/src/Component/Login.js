import React, { useState } from 'react';
import { Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import axios from 'axios';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userName,setUsername] = useState()
  const [passWord,setPassword]= useState()
  const navigate=useNavigate()

const loginForm = async (e)=>{
    e.preventDefault()
     await axios.post("http://localhost:5000/login",{userName,passWord}).then((result)=>{
        console.log(result);

        if(result.data.role==='admin'){
            navigate('/admin')
        }
        else if(result.data.role ==='user'){
            localStorage.setItem('userid',result.data.id)
            navigate(`/userhome`)
        }
        else if(result.data.role ==='doctor'){
          localStorage.setItem('doctorid',result.data.id)
          navigate('/doctorhome')
        }
    }).catch((error) => {
        // console.log(err.response.data.status);
        console.error(error);
        if (error.response.data.status === "user not found") {
          alert("incorrect usernanme");
        } else {
          alert("incorrect password");
        }
      });
}
  return (
    <>
    {/* <header className='loginHeader'>
     <div className='m-auto text-center '>
      <h1>ORGAN SHARING DONATOR AND FINDER APPLICATION</h1>
      </div>
      </header>
    <div className=' p-3'>
      <div className='mb-5' >
      <img className='mb-5' src='https://www.sakraworldhospital.com/spl_splimgs/organ-donation-2020-1.jpg' style={{width:'150px'}} />
    </div>
    <div className='logincard d-flex flex-column align-items-end mt-5'>
    <Card body  style={{ width: '18rem' }} className='lcard'><Link to={'/userlogin'} className='link' style={{textDecoration:'none'}}>ADMIN LOGIN</Link></Card>
    <Card body  style={{ width: '18rem' }} className='lcard'><Link to={'/userlogin'} className='link' style={{textDecoration:'none'}}>USER LOGIN</Link></Card>
    <Card body  style={{ width: '18rem' }}className='lcard'><Link to={'/userregistration'} className='link' style={{textDecoration:'none'}}>USER REGISTRATION</Link></Card>
    <Card body  style={{ width: '18rem' }}className='lcard'><Link to={'/userlogin'} className='link' style={{textDecoration:'none'}}>DOCTOR LOGIN</Link></Card> */}
    {/* <Card body  style={{ width: '18rem' }}>USER LOGIN</Card> */}
    {/* </div>
    </div> */}
           <header className='loginHeader'>
        <div className='m-auto text-center'>
          <h1>ORGAN SHARING DONATOR AND FINDER APPLICATION</h1>
        </div>
      </header>
      <div className='loginBackground p-3'>
        <Container >
          <Row className='justify-content-start'>
            <Col xs={12} md={4} className=' mb-3'>
              <img
                className='mb-3'
                src='https://www.sakraworldhospital.com/spl_splimgs/organ-donation-2020-1.jpg'
                style={{ width: '150px' }}
                alt='Organ Donation'
              />
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
              {/* <div className='divform p-5 pt-2 mb-3 bg-white rounded shadow'> */}
              <div className='p-5 mb-5 shadow-5 rounded' style={{background:' hsla(0, 0%, 100%, 0.363);',backdropFilter:'blur(30px)'}}>
                <div className='text-center mb-4'>
                  <h1 className='fw-bold'>LOGIN</h1>
                  <h4>
                    Not registered yet? <Link to='/userregistration'>Sign Up</Link>
                  </h4>
                </div>
                <Form onSubmit={loginForm}>
                  <Form.Group className='mb-3'>
                    <Form.Label>USER NAME</Form.Label>
                    <Form.Control type='text' placeholder='Username' required 
                    onChange={(e)=>{setUsername(e.target.value)}}/>
                  </Form.Group>
                  <Form.Label>PASSWORD</Form.Label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      required
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                      {!showPassword ? (
                        <i className='bi bi-eye-slash-fill'></i>
                      ) : (
                        <i className='bi bi-eye-fill'></i>
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type='invalid'>
                    Please provide minimum 4 letters
                  </Form.Control.Feedback>
                  <div className='d-grid'>
                    <Button variant='primary' type='submit'>
                      SUBMIT
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>  
    </>
  )
}

export default Login