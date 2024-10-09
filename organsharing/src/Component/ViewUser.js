import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Navbar, Row, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function ViewUser() {
    const [userData,setUserdata]= useState([])
  const fetchuser =async()=>{

    const {data}= await axios.get('http://localhost:5000/viewuser')
    // console.log(data);
    setUserdata(data)


  }
  console.log(userData);
  
  useEffect(()=>{
    fetchuser()
},[])

  return (
//     <Container>
//     <Row>
//         {userData.map((user) => (
//             <Col key={user.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
//                 <Card style={{ width: '100%' }}>
//                     <Card.Body>
//                         <Card.Title>{user.name}</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
//                         <Card.Text>
//                             <h5>{user.phoneNumber}</h5>
//                         </Card.Text>
//                         <Card.Link href="#">Card Link</Card.Link>
//                         <Card.Link href="#">Another Link</Card.Link>
//                     </Card.Body>
//                 </Card>
//             </Col>
//         ))}
//     </Row>
// </Container>
<Container>
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
<Table striped bordered hover responsive>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Place</th>
        </tr>
    </thead>
    <tbody>
        {userData.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {user.phoneNumber}
                </td>
                <td>{user.place}</td>

            </tr>
        ))}
    </tbody>
</Table>
</Container>
  )
}

export default ViewUser