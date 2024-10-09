import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";

export const AddorganForm = () => {
  const [validated, setValidated] = useState(false);
  const [hospital, sethospital] = useState([]);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      addOrgan(event);
    }
    setValidated(true);
  };
  // form post
  const [organ_id, setid] = useState(uuid().slice(0, 4));
  const [donator_name, setDonator_name] = useState("");
  const [donator_email, setDonator_email] = useState("");
  const [donator_phone, setDonator_phone] = useState("");
  const [donator_adhar, setDonator_adhar] = useState("");
  const [donator_city, setDonator_city] = useState("");
  const [donator_blood,setDonator_blood]=useState('')
  const [donator_state, setDonator_state] = useState("");
  const [donator_organ, setDonator_organ] = useState("");
  const [donator_address, setDonator_address] = useState("");
  const [donator_age, setDonator_age] = useState("");
  const user_id = localStorage.getItem("userid");
  const [hospitalId, sethospitalId] = useState("");
  const navigate = useNavigate()

  const addOrgan = async (event) => {
    event.preventDefault();
    // console.log(hospitalId);
    const body = {
      organ_id,
      donator_name,
      donator_email,
      donator_phone,
      donator_adhar,
      donator_city,
      donator_blood,
      donator_state,
      donator_organ,
      donator_address,
      donator_age,
      user_id,
      hospitalId
    };
    // console.log(body);
    try {
      const result = await axios.post(
        "http://localhost:5000/donateorgan",
        body
      );
      console.log(result);
      
      if(result){
        alert(result.data.status)
        navigate('/userhome')
      }
      else{
        alert('registration incomplete')
      }
      // console.log(result);
    } catch (error) {
      // Extract error message from response data
      const errorMessage = error.response?.data?.status || 'An error occurred';
      console.error('Error:', errorMessage);
      alert(errorMessage);
    }
  };
  const viewLocation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getlocation");
      // console.log(result.data);
      sethospital(result.data);
    
    } catch (error) {
      console.log(error, "error");
    }
  };
  // console.log(hospitalId);
  useEffect(() => {
    viewLocation();
  }, []);
  return (
    <div>
              <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height:'180px'}}>
              <Button><Link to={'/userhome'} style={{textDecorationColor: 'none', color: 'inherit'}}><i class="bi bi-house-fill"></i></Link></Button>
              </div>
             <Container  style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
  <Form noValidate validated={validated}  onSubmit={handleSubmit} className=' mb-5 pt-5 p-5'>
    <div className='text-center mb-3 '>
    <h2 className="fw-bold mb-5">ADD ORGAN</h2>
    </div>
    
          <Row className="mb-3 ">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e) => {
                  setDonator_name(e.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  // aria-describedby="inputGroupPrepend"
                  required
                  onChange={(e) => {
                    setDonator_email(e.target.value);
                  }}
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
              <Form.Control
                type="text"
                required
                onChange={(e) => {
                  setDonator_organ(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Organ.
              </Form.Control.Feedback>
            </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Blood Group</Form.Label>
          <Form.Select aria-label="Default select example" required
           onChange={(e)=>{setDonator_blood(e.target.value)}}
           >
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
        </Row>
          <Row className="mb-3">
           
            <Form.Group as={Col} md="4">
              <Form.Label>Hospital</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  sethospitalId(e.target.value);
                }}
              >
                <option>Select location</option>
                {hospital.map((hospitaldata) => (
                  // <option value={hospitaldata.id}>
                    <option value= {hospitaldata.hospitalName}>
                    {hospitaldata.hospitalName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                required
                onChange={(e) => {
                  setDonator_city(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                required
                onChange={(e) => {
                  setDonator_state(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="PhoneNumber"
                required
                minLength={10}
                onChange={(e) => {
                  setDonator_phone(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="age"
                  required
                  onChange={(e) => {
                    setDonator_age(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>AdharNumber</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adharnumber"
                  required
                  onChange={(e) => {
                    setDonator_adhar(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adress"
                  required
                  onChange={(e) => {
                    setDonator_address(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Row>
          <Form.Group className="mb-3 mt-4">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <div className="text-center mt-3">
          <Button type="submit">Submit form</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};
