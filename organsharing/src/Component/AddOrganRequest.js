import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function AddOrganRequest() {
    const [validated, setValidated] = useState(false);
const handleSubmit = (event) => {
const form = event.currentTarget;
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}else{
    addRequest(event)
}setValidated(true);
};
const[organ_id,setid] = useState(uuid().slice(0,4))
const[patient_name,setpatient_name]=useState('')
const[patient_email,setpatient_email]=useState('')
const[patient_phone,setpatient_phone]=useState('')
const[patient_adhar,setpatient_adhar]=useState('')
const[ patient_city,setpatient_city]=useState('')
const[ patient_state,setpatient_state]=useState('')
const[patient_organ,setpatient_organ]=useState('')
const[patient_blood,setpatient_blood]=useState('')
const[patient_address,setpatient_address]=useState('')
const[date,setdate,]=useState('')
const[patient_age,setpatient_age]=useState('')
const user_id=localStorage.getItem('userid') 
const navigate = useNavigate()
    
    const addRequest = async(event)=>{
        event.preventDefault()
        const body={organ_id,
            user_id,
            patient_name,
            patient_email,
            patient_phone,
            patient_adhar,
            patient_city,
            patient_state,
            patient_organ,
            patient_blood,
            patient_address,
            date,
            patient_age,}
            
            try {
                const result = await axios.post('http://localhost:5000/organrequest',body)
                console.log(result);
                if(result){
                    navigate('/userhome')
                }
            } catch (error) {
                console.log(error,'error');
            }
        }
    
    
  return (

    <div>
        
         <div className="p-5 bg-image" style={{backgroundColor: '#34506e', height:'180px'}}>
         <Button><Link to={'/userhome'} style={{textDecorationColor: 'none', color: 'inherit'}}><i class="bi bi-house-fill"></i></Link></Button>
         </div>

             <Container  style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
  <Form noValidate validated={validated}  onSubmit={handleSubmit} className=' mb-5 pt-5 p-5'>
    <div className='text-center mb-3'>
    <h2 className="fw-bold mb-5">Organ Request</h2>
    </div>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Patient name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First name"
          onChange={(e)=>{setpatient_name(e.target.value)}}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>ExpectedDate</Form.Label>
        <Form.Control
          required
          type="date"
          placeholder="dd/mm/yyyy"
          onChange={(e)=>{setdate(e.target.value)}}
        /></Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Email</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text>@</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="example@gmail.com"
            // aria-describedby="inputGroupPrepend"
            required
            onChange={(e)=>{setpatient_email(e.target.value)}}
          />
          <Form.Control.Feedback type="invalid">
            Please choose correct email
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>OrganType</Form.Label>
        <Form.Control type="text"  required
         onChange={(e)=>{setpatient_organ(e.target.value)}}
         />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Blood Group</Form.Label>
          <Form.Select aria-label="Default select example" required
           onChange={(e)=>{setpatient_blood(e.target.value)}}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a valid blood group.
          </Form.Control.Feedback>
        </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required 
        onChange={(e)=>{setpatient_city(e.target.value)}}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" required 
        onChange={(e)=>{setpatient_state(e.target.value)}}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="text" placeholder="PhoneNumber" minLength={10} required
         onChange={(e)=>{setpatient_phone(e.target.value)}}
         />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>
     
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>age</Form.Label>
        <Form.Control type="text" placeholder="age" required 
        onChange={(e)=>{setpatient_age(e.target.value)}}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>AdharNumber</Form.Label>
        <Form.Control type="text" placeholder="AdharNumber" required 
        onChange={(e)=>{setpatient_adhar(e.target.value)}}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" required
         onChange={(e)=>{setpatient_address(e.target.value)}}
         />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>
    
    </Row>
    <Form.Group className="mb-3 mt-4">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
      />
    </Form.Group>
    <div className='text-center mt-3'>
    <Button type="submit">Submit form</Button>
    </div>
  </Form>
  </Container>
    </div>
  )
}

export default AddOrganRequest