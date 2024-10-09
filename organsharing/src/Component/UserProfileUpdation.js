import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

function UserProfileUpdation() {
  const [validated, setValidated] = useState(false);
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [age, setage] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [adharNumber, setAdhar] = useState("");
  const id = localStorage.getItem("userid");
  const navigate= useNavigate()
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    try {
      await axios.get(`http://localhost:5000/getuser/${id}`).then((res) => {
        // setUserdata(res.data);
        setName(res.data.name)
        setEmail(res.data.email)
        setPlace(res.data.place)
        setPhone(res.data.phoneNumber)
        setage(res.data.age)
        setAdhar(res.data.adharNumber)
      });
    } catch (error) {}
  };
  const updateUser = async(e)=>{ 
    e.preventDefault()
    const body = { name, email, place, age, phoneNumber, adharNumber}
    try{
        await axios.put(`http://localhost:5000/updateuser/${id}`,body).then((res)=>{
            console.log(res);
            // getuser()
            alert(res.data.message)
            navigate('/userhome')
        })
    }catch{
        console.log('error');
    }
  }
 
  return (
    <div>
       <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height:'180px'}}>
         <Button><Link to={'/userhome'} style={{textDecorationColor: 'none', color: 'inherit'}}><i class="bi bi-house-fill"></i></Link></Button>
         </div>
         <Container  style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
          
         <Form noValidate validated={validated}  onSubmit={updateUser} className=' mb-5 pt-5 p-5'>
      {/* <Container className="mt-5 w-75 ">
        <div className="text-center  mt-4 mb-5">
          <h1>USER REGISTRATION</h1>
        </div>
        <Form noValidate validated={validated} registrationform 
        onSubmit={updateUser}
        > */}
         <div className='text-center mb-3'>
    <h2 className="fw-bold mb-5">PROFILE</h2>
    </div>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              NAME
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                required
                // placeholder={userdata.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Place
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                required
                placeholder="location"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                required
                placeholder="Age"
                value={age}
                onChange={(e) => setage(e.target.value)}
              />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              PhoneNumber
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                minLength={10}
                maxLength={10}
                placeholder="phoneNumber"
                required
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phoneNumber
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              AdharNumber
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Adharnumber"
                required
                value={adharNumber}
                onChange={(e) => setAdhar(e.target.value)}
              />
            </Col>
          </Form.Group>
          
          <div className="text-center mt-5 mb-5">
            <Button variant="outline-primary" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default UserProfileUpdation;
