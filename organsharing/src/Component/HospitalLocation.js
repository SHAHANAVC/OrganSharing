import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas, Navbar } from "react-bootstrap";
import uuid from 'react-uuid';
function HospitalLocation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [id,setid] =useState(uuid().slice(0,4))
    const [hospitalName,setHospital] = useState()
    const [location,setlocation] = useState()
    const [hospital,sethospital] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate()
    const createLocation =async (e)=>{
        e.preventDefault()
        const body = {id,hospitalName,location}
        try {
          const result=   await  axios.post("http://localhost:5000/addlocation",body)
     console.log(result);
     alert(result.data.status)
          navigate('/admin')
        } catch (error) {
          alert(error,'error for creation')
        }
     
     
    }
    const fetchlocation = async ()=>{
      const result = await axios.get("http://localhost:5000/getlocation")
      console.log(result);
      sethospital(result.data)
    }
    const filteredHospitals = hospital.filter((data) =>
      data.hospitalName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    useEffect(()=>{
      fetchlocation()
    },[])
    const deletelocation=async(id)=>{
      console.log(id);
      const result = await axios.delete(`http://localhost:5000/deletelocation/${id}`)
      console.log(result);
      alert(result.data.message)

      fetchlocation()
    }
  return (
    <div>
      <Navbar className="bg-body-tertiary">
          <Container>
          

            <Button variant="primary" onClick={handleShow}>
            <i class="bi bi-list"></i>
            </Button>

            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ width: "40%" }}
              className="bg-light"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Admin</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="overlay-content p-3">
                  <Link
                    to={"/vieworganrequest"}
                    style={{ textDecoration: "none" }}
                  >
                    <h2>Organ Request</h2>
                  </Link>
                  <Link
                    to={"/organcollection"}
                    style={{ textDecoration: "none" }}
                  >
                    
                    <h2>Organ Collection</h2>
                  </Link>
                  <Link
                    to={"/doctorregistration"}
                    style={{ textDecoration: "none" }}
                  >
                    <h2>ADD Doctor</h2>
                  </Link>
                  <Link to={"/viewdoctor"} style={{ textDecoration: "none" }}>
                    <h2>View Doctor</h2>
                  </Link>
                  <Link to={"/location"} style={{ textDecoration: "none" }}>
                    <h2>ADD location</h2>
                  </Link>
                  <Link to={"/viewuser"} style={{ textDecoration: "none" }}>
                    <h2>View User</h2>
                  </Link>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            <div className='d-flex justify-content-end me-5'>
        <Button className='logout-button '> <i class="bi bi-box-arrow-right"></i>
        <Link to={'/'} > 
        <span className="logout-text">Logout</span></Link></Button>
      </div>
          </Container>
        </Navbar>
        <Container >
 <Form className='w-50 m-auto mt-5' onSubmit={ createLocation}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Hospital Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>setHospital(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={(e)=>setlocation(e.target.value)}/>
      </Form.Group>
      <Button type='submit'>Add Location</Button>
    </Form>
    </Container>
    <Container className='mt-5'>
    <Form.Control
          type='text'
          placeholder='Search by hospital name'
          className='mb-3 w-50'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
    <Row>
    {filteredHospitals.map((data) => (
      <Col className='mt-3'>
      <Card style={{ width: '18rem'  }}>
      <Card.Body>
        <Card.Title>{data.hospitalName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
     
        {/* <Button>update</Button> */}
      
          </Card.Body>
          <Card.Footer>
          <Button onClick={()=>deletelocation(data.id)}>Delete</Button>
          </Card.Footer>
    </Card>
      </Col>
      ))}
    </Row>
    </Container>


    </div>
  )
}

export default HospitalLocation