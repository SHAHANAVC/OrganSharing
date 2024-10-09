import { logDOM } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DoctorHome() {
  const [doctorData,setData] = useState('')
  const doctorid = localStorage.getItem('doctorid')
  console.log(doctorid);
  const fetchDoctor = async() =>{
      const {data} = await axios.get(`http://localhost:5000/doctor/${doctorid}`)
      console.log(data);
      setData(data)
  }
 useEffect(()=>{
  fetchDoctor()
 },[])
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Button><Link to={'/doctorhome'} style={{textDecorationColor: 'none', color: 'inherit'}}><i class="bi bi-house-fill"></i></Link></Button></Navbar.Brand>
          <div className='d-flex justify-content-end me-5'>
        <Button className='logout-button '> <i class="bi bi-box-arrow-right"></i>
        <Link to={'/login'} > 
        <span className="logout-text">Logout</span></Link></Button>
      </div>
        </Container>
      </Navbar>
      <Container className=' mt-5'>
      <div className='text-center'>
      <Image src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?w=740&t=st=1721715518~exp=1721716118~hmac=6f1f28b036eec3ccd99badc6683acaa4067c5717279eb6bf9c38affa26393ef1" roundedCircle style={{width:'180px',height:'200px'}}/>
      
      <h1>{doctorData.d_name}</h1>
      <p>{doctorData.d_email},{doctorData.hospital}<br/>
      {doctorData.d_department}</p>
      </div>
      <Row>
        <Col >
        <Card className=' m-2 text-center'>
          <Image src='https://media.gettyimages.com/id/1296965182/vector/surgeon-with-organ-donation.jpg?s=612x612&w=0&k=20&c=T2msIGj60m85QxokRXYpPjQFAgInzizCJHL7q_C6bmw=' rounded style={{height:'80px',width:'100px'}} className='m-auto mt-3'/>
       <Link to={'/doctorvieworgancollection'} style={{textDecorationLine:'none'}} > <h2>organcollection</h2></Link>
       </Card>
       </Col>
       <Col>
       <Card className='m-2 text-center'>
       <Image src="https://cdn-icons-png.flaticon.com/512/7000/7000572.png" style={{height:'80px',width:'100px'}} className='m-auto mt-3'/>
        <Link to={'/doctorvieworganrequest'} style={{textDecorationLine:'none'}}> <h2>organrequest</h2></Link>
        </Card>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default DoctorHome