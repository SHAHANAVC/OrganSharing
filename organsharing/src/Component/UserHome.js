import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function UserHome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = localStorage.getItem('userid')
  const [user,setuser] =useState([])
  console.log(id);
  const fetchUser = async()=>{
    try{
      await axios.get(`http://localhost:5000/getuser/${id}`).then((result)=>{
        console.log(result);
        setuser(result.data)

      })
    }catch{
       console.log("error");
    }
  }
  console.log(user)
  useEffect(()=>{
    fetchUser()
  },[])
    return (
      <>
      {/* <Button variant="primary" onClick={handleShow}>
      Home
      </Button>
      
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{user.name}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
         <h4>Donate Organ</h4>
         <h4>My Donation</h4>
         <h4>Request Organ</h4>
         <h4>my status</h4>
         <Link to={'/userupdation'}><h4>profile</h4></Link>
      </Offcanvas.Body>
      </Offcanvas> */}
      
     <div className='userhome pt-5  pb-5'>
      <div className='d-flex justify-content-end me-5'>
        <Button  className='logout-button '> <i class="bi bi-box-arrow-right"></i>
        <Link to={'/'} > 
        <span className="logout-text">Logout</span></Link></Button>
      </div>
     <div className='body-container text-center text-white'>
      {/* <h2>  USER HOME </h2> */}
      <h1>{user.name}</h1>
      <h4>{user.email},{user.phoneNumber}</h4>
      <h4>{user.place}</h4>
      </div>
        <Container className='container text-center' >
  <div class="row gx-4 mt-5">
    <div class="col-sm-4 mt-3 ">
    <Link to={`/addorgan`} style={{textDecorationLine:'none'}}>
      <div class="userdiv pt-2 pb-2">
        
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3V8xkBAc-B9zdQSsXFORUnn07P_LqDfxdSQ&s'  style={{height:'80px',width:'100px'}}/>
        <h3>
        Add Organ</h3>
      </div>
      </Link>
    </div>
    <div class="col-sm-4 mt-3"> 
      <Link to={`/viewmydonation`} style={{textDecorationLine:'none'}}>
      <div class="userdiv pt-2 pb-2">
      <Image src="https://cdn-icons-png.flaticon.com/512/7000/7000572.png" style={{height:'80px',width:'100px'}} />
       <h3>My Donation</h3>
      </div>
      </Link>
    </div>
    <div class="col-sm-4 mt-3">
    <Link to={`/organrequest`} style={{textDecorationLine:'none'}}>
      <div class="userdiv pt-2 pb-2">
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoVPqxebbwtekOqGbpxJk4X34DFvbnqMJ7g&s'  style={{height:'80px',width:'100px'}} />
        <h3>Add Organ Request</h3>
      </div>
      </Link>
    </div>
  </div>

        <Row  className='mt-3'>
        <Col sm={6}  >
        <Link to={`/mystatus`} style={{textDecorationLine:'none'}}>
        <div className='userdiv pt-2 pb-2 mt-3'>
          <Image src='https://hls.harvard.edu/wp-content/uploads/2022/05/organ_donation_red_cross_iStock-1213891617.jpg' style={{height:'80px',width:'100px'}} />
          <h3>
            MY Status</h3>
        </div>
        </Link>
        </Col>
        <Col sm={6} >
        <Link to={`/userupdation`} style={{textDecorationLine:'none'}}>
        <div className='userdiv pt-2 pb-2 mt-3'  >
          <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' style={{height:'80px',width:'100px'}} />
            <h3>VIEW PROFILE</h3>
        </div></Link>
        </Col>
        </Row>
        </Container>
        
    
        </div>
    </>
  )
}

export default UserHome