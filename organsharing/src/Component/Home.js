// import React from "react";
// import { Container, Row, Col, Button, Card, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
// function Home() {
//   return (
//     <>
//       <Navbar className="bg-body-tertiary ">
//         <Container>
//           <Navbar.Brand href="#home">
//             <div className="m-auto text-center ">
//               <h1>ORGAN SHARING DONATOR AND FINDER APPLICATION</h1>
//             </div>
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//   {/* <div style={{ height: '100vh' }}> */}
//   <div style={{ position: 'relative', height: '100vh' }}>
//     <Carousel style={{ height: '100%' }}>
//       <Carousel.Item interval={500}>
//         <img
//           src="https://media.istockphoto.com/id/1169662101/photo/adult-and-child-hands-holding-red-heart-on-aqua-background-heart-health-donation-csr-concept.jpg?s=1024x1024&w=is&k=20&c=XW_U6wOtUaQ5USnoACNc5aVF4z9O8-1Vwq_7jfR3kro="
//           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
//         />
//       
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           src="https://media.istockphoto.com/id/1129642531/photo/doctor-with-stethoscope-holding-heart-doctor-and-patient-sitting-in-the-room-concept.jpg?s=1024x1024&w=is&k=20&c=4UHrtiuk3oDJg7Uc9AdqqOF61Yh0JJXiOVu87iK8vDY="
//           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
//         />
//       
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           src="https://media.istockphoto.com/id/1333961968/photo/group-of-young-volunteers-woman-smiling-happy-make-heart-symbol-with-hands-together-at.jpg?s=612x612&w=0&k=20&c=54esvhycPH0X3L4YRt1MPmHrAmv-52T_X25QlDmq84c="
//           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
//         />
//       
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           src="https://media.istockphoto.com/id/1333328712/photo/medical-technology-concept-remote-medicine-electronic-medical-record.jpg?s=612x612&w=0&k=20&c=K2nFEtk2cz9pEj5b8DF61eRjmvRDLfTQ3HyJrFR8rPU="
//           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
//         />
//       
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           src="https://media.istockphoto.com/id/953685706/photo/child-and-adult-holding-red-heart-with-stethoscope-heart-health-health-insurance-concept.jpg?s=2048x2048&w=is&k=20&c=4vKH4RvPaUQmCwIVAe8yR_ngdJnEEE1Q7Bm30WKo0DU="
//           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
//         />
//       
//       </Carousel.Item>
//     </Carousel>
//     <div style={{
//       position: 'absolute',
//       width:'50%',
//       top: '25%',
//       // left: '5%',
//       // transform: 'translate(-50%, -50%)',
//       color: 'rgb(0,5,50)',
//       backgroundColor:'transparent',
//       // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       padding: '20px',
//       borderRadius: '10px',
//       // textAlign: 'center',
//       zIndex: 10
//     }}>
//       <h2>
//         Our project is focused on providing services to the needy through a
//         single application, making the donation process easy. Donors can
//         easily reach the needy through the consent of the admin.
//       </h2>
//       <div className="m-auto mt-5 text-center">
//             <Link to={'/login'}>
//           <Button className=" glow-on-hover ">Login</Button></Link>
//           </div>
//     </div>
  
//   </div>
//         <div className="w-50 m-auto p-5 mt-5 mb-4 homecontentdiv">
//           <h2>
//             Connecting hearts and hands to uplift the needy through seamless
//             donations
//           </h2>
//           <p>
//             Welcome to the future of giving! Our platform is designed to bridge
//             the gap between generous donors and those in need, all while keeping
//             it as easy as pie. Forget the complicated processes; we’re here to
//             make donating as simple as clicking a button! With our app, donors
//             can reach out to the needy with just a few taps, and our admin team
//             ensures that every donation goes to the right place. We’re not just
//             about collecting donations; we’re about creating a community of
//             kindness and transparency. Who knew giving could be this fun? Join
//             us in our mission to spread love and support to those who need it
//             most. Together, we can make a difference, one donation at a time.
//             So, what are you waiting for? Let’s get this generosity party
//             started!
//           </p>
          
//         </div>
      
//       <div as={Row} className="w-100 d-flex">
//   <Col xs={12} md={4} sm={12}>
//     <img
//       src="https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs="
//       style={{ height: "auto", width: "100%" }}
//       // className="img-fluid"
//     />
    
//   </Col>
//   <Col xs={12} md={4} sm={12}>
//   <Card style={{border:'none'}}>
//       <Card.Body className="p-3 text-center">
//         <Card.Title className="pb-3"><h3>Our Services</h3></Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//         Visiting your doctor on a regular basis is key to a healthy life. Whether you're feeling the effects of the common cold or just coming in for a checkup, we want to make sure you have all the facts you need to make an educated decision.
//         </Card.Text>
        
      

import React from "react";
import { Container, Row, Col, Button, Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


function Home() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand  className="text-center w-100">
            <h1>ORGAN SHARING DONATOR AND FINDER APPLICATION</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div style={{ position: 'relative', height: '100vh' }}>
        <Carousel style={{ height: '100%' }}>
          <Carousel.Item interval={500}>
            <img
              src="https://media.istockphoto.com/id/1169662101/photo/adult-and-child-hands-holding-red-heart-on-aqua-background-heart-health-donation-csr-concept.jpg?s=1024x1024&w=is&k=20&c=XW_U6wOtUaQ5USnoACNc5aVF4z9O8-1Vwq_7jfR3kro="
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              alt="Carousel slide 1"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
        <img
           src="https://media.istockphoto.com/id/1129642531/photo/doctor-with-stethoscope-holding-heart-doctor-and-patient-sitting-in-the-room-concept.jpg?s=1024x1024&w=is&k=20&c=4UHrtiuk3oDJg7Uc9AdqqOF61Yh0JJXiOVu87iK8vDY="
           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
         />
       
       </Carousel.Item>
       <Carousel.Item interval={500}>
         <img
           src="https://media.istockphoto.com/id/1333961968/photo/group-of-young-volunteers-woman-smiling-happy-make-heart-symbol-with-hands-together-at.jpg?s=612x612&w=0&k=20&c=54esvhycPH0X3L4YRt1MPmHrAmv-52T_X25QlDmq84c="
           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
         />
       
       </Carousel.Item>
       <Carousel.Item interval={500}>
         <img
           src="https://media.istockphoto.com/id/1333328712/photo/medical-technology-concept-remote-medicine-electronic-medical-record.jpg?s=612x612&w=0&k=20&c=K2nFEtk2cz9pEj5b8DF61eRjmvRDLfTQ3HyJrFR8rPU="
           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
         />
       
       </Carousel.Item>
       <Carousel.Item interval={500}>
         <img
           src="https://media.istockphoto.com/id/953685706/photo/child-and-adult-holding-red-heart-with-stethoscope-heart-health-health-insurance-concept.jpg?s=2048x2048&w=is&k=20&c=4vKH4RvPaUQmCwIVAe8yR_ngdJnEEE1Q7Bm30WKo0DU="
           style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
         />
       
      </Carousel.Item>
          {/* Repeat for other slides */}
        </Carousel>
        <div className="overlay-text">
          <h2>
            Our project is focused on providing services to the needy through a
            single application, making the donation process easy. Donors can
            easily reach the needy through the consent of the admin.
          </h2>
          <div className="text-center mt-5">
            <Link to={'/login'}>
              <Button className="glow-on-hover">Login</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="content-section  m-auto p-5 mt-5 mb-5">
        <h2>
          Connecting hearts and hands to uplift the needy through seamless
          donations
        </h2>
        <p>
          Welcome to the future of giving! Our platform is designed to bridge
          the gap between generous donors and those in need, all while keeping
          it as easy as pie. Forget the complicated processes; we’re here to
          make donating as simple as clicking a button! With our app, donors
          can reach out to the needy with just a few taps, and our admin team
          ensures that every donation goes to the right place. We’re not just
          about collecting donations; we’re about creating a community of
          kindness and transparency. Who knew giving could be this fun? Join
          us in our mission to spread love and support to those who need it
          most. Together, we can make a difference, one donation at a time.
          So, what are you waiting for? Let’s get this generosity party
          started!
        </p>
      </div>

      <Row className="g-0 ">
        <Col xs={12} md={4}>
          <img
            src="https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs="
            style={{ height: "auto", width: "100%" }}
            alt="Doctors"
          />
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center border-0">
            <Card.Body>
              <Card.Title><h3>Our Services</h3></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Visiting your doctor on a regular basis is key to a healthy life.
                Whether you're feeling the effects of the common cold or just coming
                in for a checkup, we want to make sure you have all the facts you
                need to make an educated decision.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <img
            src="https://media.istockphoto.com/id/1329039896/photo/young-doctor-asking-senior-impaired-male-patient-in-wheelchair-to-sign-insurance-policy-at.jpg?s=612x612&w=0&k=20&c=R4upVNBIIfZY3biFdivbrRei-paJuiQuLwYlkxx0dto="
            style={{ height: "auto", width: "100%" }}
            alt="Doctor asking patient"
          />
        </Col>
      </Row>

      <div className="loginBackground p-3">
       <div className='mb-5' >
       <img className='mb-5' src='https://www.sakraworldhospital.com/spl_splimgs/organ-donation-2020-1.jpg' style={{width:'150px'}} />
     </div>
     <div className='logincard d-flex flex-column align-items-end mt-5'>
     <Card body  style={{ width: '18rem' }} className='lcard mt-1'><Link to={'/login'} className='link' style={{textDecoration:'none'}}>ADMIN LOGIN</Link></Card>
     <Card body  style={{ width: '18rem' }} className='lcard mt-1'><Link to={'/login'} className='link' style={{textDecoration:'none'}}>USER LOGIN</Link></Card>
     <Card body  style={{ width: '18rem' }}className='lcard mt-1'><Link to={'/userregistration'} className='link' style={{textDecoration:'none'}}>USER REGISTRATION</Link></Card>
     <Card body  style={{ width: '18rem' }}className='lcard mt-1'><Link to={'/login'} className='link' style={{textDecoration:'none'}}>DOCTOR LOGIN</Link></Card>
      </div>
   {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
