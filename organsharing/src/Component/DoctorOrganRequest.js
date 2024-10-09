// import axios from 'axios'
// import React, { useEffect } from 'react'

// function DoctorOrganRequest() {
//     const doctorId= localStorage.getItem('doctorid')
//     console.log(doctorId);

//     const fetchOrganrequest =async()=>{
//         try {
//             const response = await axios.get(`http://localhost:5000/getorganrequest/${doctorId}`);
//             console.log(response.data); // Log the response data

//         } catch (error) {
//             console.log(error,'error');
//         }

//     }
//  useEffect(()=>{
//     fetchOrganrequest()
//  },[])
//   return (
//     <div>
//       <h1>Doctor Organ Request</h1>

//     </div>
//   )
// }

// export default DoctorOrganRequest

// import axios from 'axios';
// import React, { useEffect } from 'react';

// function DoctorOrganRequest() {
//     const doctorId = localStorage.getItem('doctorid');
//     console.log("Doctor ID:", doctorId);

//     const fetchOrganRequest = async () => {
//         if (!doctorId) {
//             console.error("No doctor ID found in localStorage");
//             return;
//         }

//         try {
//             const response = await axios.get(`http://localhost:5000/doctororganrequests/${doctorId}`);
//             console.log(response.data); // Log the response data
//         } catch (error) {
//             console.error("Error fetching organ request:", error.message);
//         }
//     }

//     useEffect(() => {
//         fetchOrganRequest();
//     }, []);

//     return (
//         <div>
//             <h1>Doctor Organ Request</h1>
//         </div>
//     );
// }

// export default DoctorOrganRequest;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function DoctorOrganRequest() {
  const doctorId = localStorage.getItem("doctorid");
  console.log("Doctor ID:", doctorId);

  const [organRequests, setOrganRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusUpdates, setStatusUpdates] = useState({});


  const fetchOrganRequest = async () => {
    if (!doctorId) {
      console.error("No doctor ID found in localStorage");
      setError("No doctor ID found in localStorage");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/doctororganrequests/${doctorId}`
      );
      console.log(response);
      setOrganRequests(response.data);
    } catch (error) {
      console.error("Error fetching organ request:", error.message);
      setError("Error fetching organ requests. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
//   console.log(organRequests);
const handleStatusChange = (requestId, newStatus) => {
  setStatusUpdates((prevUpdates) => ({
    ...prevUpdates,
    [requestId]: newStatus,
  }));
};
const updateOrganRequestStatus = async (requestId) => {
  const newStatus = statusUpdates[requestId];
  if (!doctorId) {
    console.error("No doctor ID found in localStorage");
    setError("No doctor ID found in localStorage");
    return;
  }

  try {
    console.log(`Updating request ID: ${requestId} with status: ${newStatus}`);
    const response = await axios.put(
      `http://localhost:5000/doctororganrequests/${doctorId}/updateStatus`,
      { requestId, status: newStatus }
    );
    const updatedRequest = response.data;

    setOrganRequests((prevRequests) =>
      prevRequests.map((request) =>
        request._id === updatedRequest._id ? updatedRequest : request
      )
    );

    // Clear the temporary status update
    setStatusUpdates((prevUpdates) => {
      const { [requestId]: _, ...rest } = prevUpdates;
      return rest;
    });
  } catch (error) {
    console.error("Error updating organ request status:", error.message);
    setError("Error updating organ request status. Please try again later.");
  }
};

  useEffect(() => {
    fetchOrganRequest();
  }, []);

  return (
    <div >
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
      <Container>
        <div className="mt-2 mb-5 text-center">
      
      <h1>Doctor Organ Request</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : organRequests.length > 0 ? (
      
        <Row>
          {organRequests.map((request, index) => (
            <Col key={index} md={4}>
              <Card style={{ marginBottom: "1rem" ,margin: '1rem',boxShadow: '15px 20px 5px lightblue' }}>
                <Card.Body>
                  <Card.Title className="text-center" ><h3>  {request.patient_name}</h3></Card.Title>
                  <Card.Text >
                   
                    <strong>Urgency :</strong> {request.patient_organ}
                    <br />
                    <strong>Blood Group:</strong> {request.patient_blood}
                    <br />
                    <strong>Phone number :</strong> {request.patient_phone}
                    <br />
                    <strong>Status:</strong>  {request.status === "available" ? (
                      <span className="text-success">Available</span>
                    ) : (
                      <span className="text-danger">Pending</span>
                    )}
                    {/* <strong>Status:</strong>{" "} */}
                     <Form.Control
                     className="mt-3"
                      as="select"
                      value={statusUpdates[request._id] || request.status}
                      onChange={(e) =>
                        handleStatusChange(request._id, e.target.value)
                      }
                    >
                      <option value="available">Available</option>
                      <option value="not available">Not Available</option>
                      <option value="pending">Pending</option>
                    </Form.Control>
                    <Button
                      variant="primary"
                      onClick={() =>
                        updateOrganRequestStatus(request._id)
                      }
                      style={{ marginTop: "10px" }}
                    >
                      Update
                    </Button>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No organ requests found for this doctor.</p>
      )}
      </Container>
    </div>
  );
}

export default DoctorOrganRequest;
