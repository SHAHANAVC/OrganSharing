import React, { useState } from "react";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

function Admin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <Navbar className="bg-body-tertiary ">
          <Container>
          

            <Button variant="primary" onClick={handleShow}>
            <i class="bi bi-list"></i>Menu
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
<Container>
        <Row className="gx-4 mt-5">
          <Col sm={12} md={4} className="mt-5">
            <Link to={"/vieworganrequest"}>
              <div className="p-2 mt-2"  style={{border:'1px solid black',borderRadius:'10px'}} >
              <Image src="https://media.istockphoto.com/id/1489388296/photo/miniature-human-organs-in-a-gloved-hand-on-green.jpg?s=612x612&w=0&k=20&c=qEUSWT0pzGaATeRlLP0N_eE9rJSyn1abQb6EBJhTZ6g=" style={{ height: "100px", width: "120px" }}/>
            <b>  Organ Request</b></div>
            </Link>
          </Col>
          <Col sm={12} md={4} className="mt-5">
            <Link style={{ textDecoration: "none" }} to={"/organcollection"}>
              <div className="p-2 mt-2"  style={{border:'1px solid black',borderRadius:'10px'}} >
                <Image
                  src="https://media.istockphoto.com/id/472829838/photo/reminder-of-the-importance-of-being-an-organ-donor.jpg?s=612x612&w=0&k=20&c=ECXLuUSYmOP9SAW4MEm8zCC0M35xI8WVVo3oc79KrA4="
                  style={{ height: "100px", width: "120px",borderRadius:'10px' }}
                />
                <b>Organ Collection</b>
              </div>
            </Link>
          </Col>
          <Col sm={12} md={4} className="mt-5">
            <Link style={{ textDecoration: "none" }} to={"/doctorregistration"}>
              <div className="p-2 mt-2"  style={{border:'1px solid black',borderRadius:'10px'}}>
                <Image src="https://media.istockphoto.com/id/2152104099/photo/health-care-and-health-insurance-concept-doctor-hand-holding-plus-sign-medical-icon-and.jpg?s=612x612&w=0&k=20&c=p51mMYOLm28UauHsmPxWVqpnl8iDnKDzTS3fhqZ_Gp4=" style={{ height: "100px", width: "120px" }}/>
                <b>ADD DOCTOR</b></div>
            </Link>
          </Col>
          <Col sm={12} md={4} className="mt-5">
            <Link style={{ textDecoration: "none" }} to={"/viewdoctor"}>
              <div className="p-2 mt-2"  style={{border:'1px solid black',borderRadius:'10px'}}>
                <Image src="https://media.istockphoto.com/id/1465572741/photo/portrait-of-a-doctor-holding-a-heart-in-his-hands.jpg?s=612x612&w=0&k=20&c=zjg1-v_ii4U4Li-7NCmCqIU6L26zAWBgS2oMEG-O8RY=" style={{ height: "100px", width: "120px" }}/>
               <b> View Doctor</b></div>
            </Link>
          </Col>
          <Col sm={12} md={4} className="mt-5">
            <Link style={{ textDecoration: "none" }} to={"/location"}>
              <div className="p-2 mt-2"  style={{border:'1px solid black',borderRadius:'10px'}}>
                <Image src="https://www.shutterstock.com/image-vector/medical-concept-hospital-building-doctor-260nw-588196298.jpg" style={{ height: "100px", width: "120px" }}/>
                <b>ADD location</b></div>
            </Link>
          </Col>
          <Col sm={12} md={4} className="mt-5">
            <Link style={{ textDecoration: "none" }} to={"/viewuser"}>
              <div className="p-2 mt-2"  style={{border:'1px solid black',borderRadius:'10px'}}>
                <Image src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"  style={{ height: "100px", width: "120px" }}/>
             <b>   View User</b></div>
            </Link>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}

export default Admin;
