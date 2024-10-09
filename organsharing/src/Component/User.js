

import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container , InputGroup} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const User = () => {
  // state for validate form
  const [validated, setValidated] = useState(false);
  const [genderValid, setGenderValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
//  state for db updation
  const[id,setId]=useState(uuid().slice(0,4))
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[place,setPlace] = useState("")
  const[age,setage] = useState("")
  const[gender,setGender] = useState("")
  const[userName,setUser] =useState("")
  const[passWord,setPassword] = useState("")
  const[phoneNumber,setPhone] =useState("")
  const[adharNumber,setAdhar] = useState("")
  // const[specialName,setSpecial]= useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || gender === "") {
      event.stopPropagation();
      if (gender === "") {
        setGenderValid(false);
      }
    } else {
      addUser();
    }
    setValidated(true);
  };

  // code for create data in  db
  const addUser = async () => {
    const body = { id, name, email, place, age, gender, userName, passWord, phoneNumber, adharNumber }

    try {
      const user = await axios.post("http://localhost:5000/userregistration", body)
      alert(user.data.status)
      navigate('/login')
    } catch (error) {
      console.log(error, 'error');
    }
  }

  return (
    <div className='body-container'>
       <div className="p-5 bg-image" style={{backgroundColor: '#34506e', height:'180px'}}>
    <Link to={'/login'} style={{textDecorationColor: 'none', color: 'inherit'}}><Button><i class="bi bi-house-fill"></i></Button></Link>
         </div>

             <Container  style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <div className='text-center  pt-4 mb-5'>
          <h1>USER REGISTRATION</h1>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit} registrationform  className='p-3'>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              NAME
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" required placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Control.Feedback type="invalid">
            Please provide a valid email address
          </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Place
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" required placeholder="location" onChange={(e) => setPlace(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="number"  required placeholder="Age" onChange={(e) => setage(e.target.value)} />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10} className="radio-inline">
                <Form.Check
                  type="radio"
                  label="Male"
                  name="genderRadios"
                  id="genderRadios1"
                  value="Male"
                  onChange={(e) => { setGender(e.target.value)
                  setGenderValid(true);
                    }}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="genderRadios"
                  id="genderRadios2"
                  value="Female"
                  onChange={(e) => {
                    setGender(e.target.value);
                    setGenderValid(true);
                  }}
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="genderRadios"
                  id="genderRadios3"
                  value="Other"
                  onChange={(e) => {
                    setGender(e.target.value);
                    setGenderValid(true);
                  }}
                />
                 {!genderValid && <div className="text-danger">Please select a gender.</div>}
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="username" required onChange={(e) => setUser(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={8}>
              {/* <Form.Control type="password" minLength={4} placeholder="Password" id='password' required onChange={(e) => setPassword(e.target.value)} /> */}
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  required
                  maxLength={'8'}
                  minLength={'4'}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
                </InputGroup.Text>
              </InputGroup>
              <Form.Control.Feedback type="invalid">
            Please provide minimum 4 letters
          </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              PhoneNumber
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" minLength={10} maxLength={10} placeholder="phoneNumber" required onChange={(e) => setPhone(e.target.value)} />
              <Form.Control.Feedback type="invalid">
            Please provide a valid phoneNumber
          </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              AdharNumber
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="Adharnumber" required onChange={(e) => setAdhar(e.target.value)} />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <label as={Row} >Forgot Password set a special name</label>
            <Form.Label column sm={2}>
              Special name
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="Special name" required onChange={(e) => setSpecial(e.target.value)} />
            </Col>
          </Form.Group> */}
          <div className='text-center mt-5 mb-5'>
            <Button variant="outline-primary" type='submit'>Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}
