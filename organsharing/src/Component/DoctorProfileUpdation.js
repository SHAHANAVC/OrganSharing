import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

function DoctorProfileUpdation() {
  const  {id}  = useParams();
  const [d_name, setName] = useState('');
  const [d_department, setSpecialization] = useState('');
  const [d_email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [hospitalData, setHospitalData] = useState([]);
  const [hospital, setHospital] = useState('');
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const navigate = useNavigate();
// const doctorId = useParams()
console.log(id);
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/doctors/${id}`);
        const doctor = response.data;
        console.log(response);
        setName(doctor.d_name);
        setSpecialization(doctor.d_department);
        setEmail(doctor.d_email);
        setPhone(doctor.phoneNumber);
        setPlace(doctor.place);
        setHospital(doctor.hospital);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    const fetchHospitalData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getlocation');
        setHospitalData(response.data);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      }
    };

    fetchDoctorData();
    fetchHospitalData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const formData = {
      d_name,
      d_department,
    //   d_email,
      phoneNumber,
      hospital,
    //   passWord,
      place,
    };

    try {
      const response = await axios.put(`http://localhost:5000/updatedoctor/${id}`, formData);
      if (response.status === 200) {
        setAlertMessage('Doctor updated successfully!');
        setAlertVariant('success');
        alert(response.data.message)
        navigate('/admin');
      } else {
        setAlertMessage(`Error: ${response.data.message}`);
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

  return (
    <div className="body-container">
      <div className="p-5 bg-image" style={{ backgroundColor: '#34506e', height: '180px' }}>
        <Button onClick={() => navigate('/admin')}>
          <i className="bi bi-house-fill"></i>
        </Button>
      </div>

      <Container style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="text-center mt-5">
              <h2>Update Doctor Profile</h2>
            </div>
            {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Doctor's Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter doctor's name"
                  value={d_name}
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
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                >
                  <option>Select location</option>
                  {hospitalData.map((hospitaldata) => (
                    <option key={hospitaldata.hospitalName} value={hospitaldata.hospitalName}>
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
                  value={d_department}
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
                  value={d_email}
                  readOnly
                //   onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="place">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Doctor's current address"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a place.
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group as={Row} className="mb-3 mt-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={passWord}
                      required
                      maxLength="8"
                      minLength="4"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                      {!showPassword ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid">
                    Please provide a password with a minimum of 4 characters.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group> */}

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="123-456-7890"
                  value={phoneNumber}
                  minLength="10"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone number (123-456-7890).
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center mb-5">
                <Button variant="primary" type="submit" className="p-2 mt-2">
                  Update Doctor
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DoctorProfileUpdation;
