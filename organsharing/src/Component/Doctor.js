// import React from 'react'
// import { Container } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function Doctor() {
//   return (
//     <>
//     <Container className='mt-5'>
//         <div className='text-center mb-5'>
//             <h1>DOCTOR</h1>
//         </div>
//        <Form>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Label column>
//           Doctor Name
//         </Form.Label>
        
//         <Col sm="5">
//           <Form.Control type="password" placeholder="FirstName" />
//         </Col>
//         <Col sm="5">
//           <Form.Control type="password" placeholder="LastName" />
//         </Col>

//       </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
//             <Col sm="6">
//         <Form.Label>Department</Form.Label>
//         <Form.Control type="email" placeholder="department" />
//         </Col>

//             <Col sm="6">
//         <Form.Label>Year of Experience</Form.Label>
//         <Form.Control type="email" placeholder="Experience"/>
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
//             <Col sm="10">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="email@gmail.com" />
//         </Col>
//         </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
//             <Col sm="10">
//         <Form.Label>Hospital</Form.Label>
//         <Form.Select aria-label="Default select example">
//       <option>select hospital</option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </Form.Select>
//         </Col>
//         </Form.Group>
//       <Form.Group as={Row} className="mb-3">
//         <Col>
//         <Form.Label column sm="2">
//           username
//         </Form.Label>
//           <Form.Control type="text" placeholder="username" />
//         </Col>
//         <Col>
//         <Form.Label>password</Form.Label>
//         <Form.Control type="password" placeholder="password" /></Col>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//         <Col>
//         <Form.Label column sm="4">
//          phone number
//         </Form.Label>
//           <Form.Control type="text" placeholder="username" />
//         </Col>
//         <Col>
//         <Form.Label>City</Form.Label>
//         <Form.Control type="password" placeholder="password" /></Col>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//         <Col sm="6">
//         <Form.Label>Gender</Form.Label>
//         <Form.Select aria-label="Default select example">
//       <option>gender</option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </Form.Select>
//         </Col>
//         <Col>
//         <Form.Group controlId="formFile" className="mb-3">
//         <Form.Label>photo</Form.Label>
//         <Form.Control type="file" />
//       </Form.Group>
//         </Col>
//     </Form.Group>
   
//     </Form>
//     </Container>
//     </>
//   )
// }

// export default Doctor
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Doctor() {
  const [ d_name, setName] = useState('');
  const [id,setid] =useState(uuid().slice(0,4))
  const [ d_department, setSpecialization] = useState('');
  const [d_email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [place,setplace] =useState("")
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const[passWord,setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [hospitalData, sethospitaldata] = useState([]);
  const [hospital, sethospital] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    const formData = {
      id,
       d_name, 
     d_department,
        d_email, 
        phoneNumber, 
        hospital,
        passWord,place
    };

    try {
      const response = await fetch('http://localhost:5000/api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // console.log(response);
      const data = await response.json();
      console.log(data);
      
      

      if (response.ok) {
        setAlertMessage('Doctor added successfully!');
        setAlertVariant('success');
        alert(data.status)
        navigate("/admin")
        
      } else {
        setAlertMessage(`Error: ${data.status}`);
        setAlertVariant('danger');
      }
    } catch (error) {
      setAlertMessage(`Error: ${error.message}`);
      setAlertVariant('danger');
    } finally {
      setShowAlert(true);
    }

    setValidated(true);
  };
  const viewLocation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getlocation");
      console.log(result.data);
      sethospitaldata(result.data);
    
    } catch (error) {
      console.log(error, "error");
    }
  };
   useEffect(()=>{
    viewLocation()
   },[])
  return (
    <div className='body-container'>
    <div className="p-5 bg-image" style={{backgroundColor: '#34506e', height:'180px'}}>
    <Link to={'/admin'} style={{textDecorationColor: 'none', color: 'inherit'}}><Button><i class="bi bi-house-fill"></i></Button></Link>         </div>

             <Container  style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
      <Row className="justify-content-md-center">
        <Col md={6}>
        <div className='text-center mt-5'>
          <h2>Add Doctor</h2>
          </div>
          {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Doctor's Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter doctor's name"
                // value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a doctor's name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Hospital</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  sethospital(e.target.value);
                }}
              >
                <option>Select location</option>
                {hospitalData.map((hospitaldata) => (
                  <option value={hospitaldata.hospitalName}>
                    {hospitaldata.hospitalName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="specialization">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter specialization"
                // value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a specialization.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Place</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="doctor current address"
                // value={name}
                onChange={(e) => setplace(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a hospital name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={8}>
            <InputGroup >
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

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="123-456-7890"
                minLength={'10'}
                // value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number (123-456-7890).
              </Form.Control.Feedback>
            </Form.Group>
          <div className='text-center mb-5'>
            <Button variant="primary" type="submit" className='p-2 mt-2'>
              Add Doctor
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Doctor
