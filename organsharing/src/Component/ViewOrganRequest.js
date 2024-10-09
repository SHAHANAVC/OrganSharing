// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Container, Navbar, Row } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";

// function ViewOrganRequest() {
//   const [assignedOrganRequestId, setAssignedOrganRequestId] = useState(null);
//   const [organData, setorgandata] = useState("");
//   const [show, setShow] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState("");
//   const [selectedOrganRequest, setSelectedOrganRequest] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = (organRequestId) => {
//     setSelectedOrganRequest(organRequestId);
//     setShow(true);
//   };
//   const [doctor, setdoctor] = useState([]);
//   const fetchDoctor = async () => {
//     const result = await axios.get("http://localhost:5000/getdoctor");
//     console.log(result);
//     setdoctor(result.data);
//   };
//   const organRequest = async () => {
//     try {
//       await axios.get(`http://localhost:5000/vieworganrequest`).then((res) => {
//         // console.log(res);
//         setorgandata(res.data);
//       });
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };
//   const handleAssignDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:5000/${selectedOrganRequest}/assign-doctor`,
//         { doctorId: selectedDoctor }
//       );
//       setShow(false);
//       setAssignedOrganRequestId(selectedOrganRequest);
//       organRequest(); // Refresh the organ request list
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     organRequest();
//     fetchDoctor();
//   }, []);
//   return (
//     <div>
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand>
//             <Link
//               to={"/admin"}
//               style={{ textDecorationColor: "none", color: "inherit" }}
//             >
//               <Button>
//                 <i class="bi bi-house-fill"></i>
//               </Button>
//             </Link>
//           </Navbar.Brand>
//           <div className="d-flex justify-content-end me-5">
//             <Button className="logout-button ">
//               {" "}
//               <i class="bi bi-box-arrow-right"></i>
//               <Link to={"/"}>
//                 <span className="logout-text">Logout</span>
//               </Link>
//             </Button>
//           </div>
//         </Container>
//       </Navbar>
//       <Container >
//         <div className="text-center">
//         <h1>Organ Request</h1>
//         </div>
//       <Row>
//         {organData.length > 0 ? (
//           organData.map((data) => (
//             <Card
//               key={data._id}
//               style={{
//                 width: "18rem",
//                 margin: "1rem",
//                 boxShadow: "15px 20px 5px lightblue",
//               }}
//             >
//               <Card.Body>
//                 <Card.Title>{data.patient_organ}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {data.patient_name}
//                 </Card.Subtitle>
//                 <Card.Text>Blood Type: {data.patient_blood}</Card.Text>
//                 <Card.Text>
//                   Status: {data.status}
//                   <Button
//                     variant={data.assignedDoctor ? "success" : "primary"}
//                     onClick={() => handleShow(data._id)}
//                   >
//                     {data.assignedDoctor ? "Doctor Assigned" : "Assign Doctor"}
//                   </Button>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           ))
//         ) : (
//           <p>No organ requests found.</p>
//         )}
//       </Row>
//       </Container>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Assign Doctor</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group>
//             <Form.Label>Select Doctor</Form.Label>
//             <Form.Select
//               onChange={(e) => setSelectedDoctor(e.target.value)}
//               value={selectedDoctor}
//             >
//               <option>Select Doctor</option>
//               {doctor.map((doctorData) => (
//                 <option key={doctorData._id} value={doctorData.commonKey}>
//                   {doctorData.d_name}
//                 </option>
//               ))}
//             </Form.Select>
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAssignDoctor}>
//             Assign Doctor
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default ViewOrganRequest;
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Row,
  Col,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ViewOrganRequest() {
  const [assignedOrganRequestId, setAssignedOrganRequestId] = useState(null);
  const [organData, setOrganData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedOrganRequest, setSelectedOrganRequest] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const [doctorMap, setDoctorMap] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (organRequestId) => {
    setSelectedOrganRequest(organRequestId);
    setShow(true);
  };

  const fetchDoctor = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getdoctor");
      console.log(result);
      setDoctor(result.data);

      // Create a map of doctors for quick lookup
      const doctorMap = result.data.reduce((map, doc) => {
        map[doc._id] = doc.d_name;
        return map;
      }, {});
      setDoctorMap(doctorMap);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const organRequest = async () => {
    try {
      const result = await axios.get("http://localhost:5000/vieworganrequest");
      console.log(result);
      setOrganData(result.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleAssignDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/${selectedOrganRequest}/assign-doctor`,
        { doctorId: selectedDoctor }
      );
      setShow(false);
      setAssignedOrganRequestId(selectedOrganRequest);

      organRequest(); // Refresh the organ request list
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    organRequest();
    fetchDoctor();
  }, []);

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link
              to={"/admin"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <i className="bi bi-house-fill"></i>
              </Button>
            </Link>
          </Navbar.Brand>
          <div className="d-flex justify-content-end me-5">
            <Button className="logout-button ">
              <i className="bi bi-box-arrow-right"></i>
              <Link to={"/"}>
                <span className="logout-text">Logout</span>
              </Link>
            </Button>
          </div>
        </Container>
      </Navbar>
      <Container>
        <div className="text-center">
          <h1>Organ Request</h1>
        </div>
        <Row>
          {organData.length > 0 ? (
            organData.map((data) => (
              <Col key={data._id} xs={12} md={6} lg={4}>
                <Card
                  className="mt-5"
                  style={{
                    width: "18rem",
                    // margin: "2rem",

                    boxShadow: "15px 20px 5px lightblue",
                  }}
                >
                  <Card.Body>
                    {data.assignedDoctor ? (
                      <></>
                    ) : (
                      <div className="text-danger">
                        <h3> Assign a Doctor</h3>
                      </div>
                    )}
                    <Card.Title>{data.patient_organ}</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      {data.patient_name}
                    </Card.Subtitle>
                    <Card.Text>
                      Blood Type: {data.patient_blood}
                      <br />
                      Email:{data.patient_email}
                    </Card.Text>
                    <Card.Text>
                      Status: {data.status}
                      {data.assignedDoctor ? (
                        <>
                          <Button
                            className="mt-3 button  w-75" // Apply 'btn' and 'rounded' classes
                            onClick={() => handleShow(data._id)}
                          >
                            <span>Change Doctor</span>
                          </Button>
                        </>
                      ) : (
                        <>
                          <br />
                          <Button
                            className="button assign  mt-4 mb-3 w-75"
                            onClick={() => handleShow(data._id)}
                          >
                            <span className="text-green"> Assign Doctor</span>
                          </Button>
                        </>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No organ requests found.</p>
          )}
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Select Doctor</Form.Label>
            <Form.Select
              onChange={(e) => setSelectedDoctor(e.target.value)}
              value={selectedDoctor}
            >
              <option>Select Doctor</option>
              {doctor.map((doctorData) => (
                <option key={doctorData._id} value={doctorData.commonKey}>
                  {doctorData.d_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAssignDoctor}>
            Assign Doctor
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewOrganRequest;
