import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function ViewDoctor() {
  const [doctor, setdoctor] = useState([]);
  const navigate= useNavigate()
  const fetchDoctor = async () => {
    const result = await axios.get("http://localhost:5000/getdoctor");
    console.log(result);
    setdoctor(result.data);
  };

  const deleteDoctor = async(id)=>{
    const result = await axios.delete(`http://localhost:5000/deleteDoctor/${id}`);
    console.log(result); 
    // alert(result.data.message)
    fetchDoctor()
  }
  useEffect(() => {
    fetchDoctor();
  }, []);
  console.log(doctor);
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Button><Link to={'/admin'} style={{textDecorationColor: 'none', color: 'inherit'}}><i class="bi bi-house-fill"></i></Link></Button></Navbar.Brand>
          <div className='d-flex justify-content-end me-5'>
        <Button className='logout-button '> <i class="bi bi-box-arrow-right"></i>
        <Link to={'/'} > 
        <span className="logout-text">Logout</span></Link></Button>
      </div>
        </Container>
      </Navbar>
      <Container className="mt-5 ">
        <div className="text-center">
        <h2>View Doctors</h2>
        </div>
        <Row>
          {doctor.map((doctor) => (
            <Col key={doctor.id} sm={12} md={6} lg={4} className="mb-4 mt-4">
              <Card style={{boxShadow: '15px 20px 5px lightblue'}}>
                <Card.Body>
                  <Card.Title>{doctor.d_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doctor.d_department}
                  </Card.Subtitle>
                  <strong>{doctor.hospital}</strong><br/>
                  <strong>{doctor.d_email}</strong><br/>
                  <p>{doctor.place}<br/>
                  {doctor.phoneNumber}<br/>
                  </p>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                  <Button className=" w-50 button assign" > <span onClick={() => navigate(`/doctorProfile/${doctor.id}`)}>Update</span></Button>
                  <Button  className="button danger w-50" onClick={()=>deleteDoctor(doctor.commonKey)}><span className="text-green">Delete</span></Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ViewDoctor;
