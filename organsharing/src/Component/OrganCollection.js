import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, InputGroup, Navbar, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function OrganCollection() {
  const [organDetails, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDetails, setFilteredDetails] = useState([]);

  const fetchOrgan = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/organcollection`);
      console.log(res);
      setDetails(res.data);
      setFilteredDetails(res.data); // Set filtered details initially
    } catch (error) {
      console.log(error, "error");
    }
  };
  const deleteOrgan = async (organId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this organ entry?");
  
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/organcollection/${organId}`);
        
        // Remove the deleted organ from the state to update the UI
        setDetails((prevDetails) => prevDetails.filter((organ) => organ._id !== organId));
        setFilteredDetails((prevDetails) => prevDetails.filter((organ) => organ._id !== organId));
        
        // Optionally, show a success message or handle post-deletion logic
        alert("Organ entry deleted successfully.");
      } catch (error) {
        console.error("Error deleting organ:", error);
        alert("Failed to delete the organ entry. Please try again.");
      }
    } else {
      // Optionally, handle the cancellation (e.g., log it or show a message)
      console.log("Deletion cancelled");
    }
  };

  useEffect(() => {
    fetchOrgan();
  }, []);

  useEffect(() => {
    const results = organDetails.filter((data) =>
      data.donator_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.donator_organ.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.donator_city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDetails(results);
  }, [searchTerm, organDetails]);

  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Button><Link to={'/admin'} style={{textDecorationColor: 'none', color: 'inherit'}}><i class="bi bi-house-fill"></i></Link></Button></Navbar.Brand>
          <div className='d-flex justify-content-end me-5'>
        <Button className='logout-button '> <i class="bi bi-box-arrow-right"></i>
        <Link to={'/login'} > 
        <span className="logout-text">Logout</span></Link></Button>
      </div>
        </Container>
      </Navbar>
      <div className="text-center mt-5">
        <h1>Organ Collection</h1>
      </div>
      <Container className="m-auto bg-light">
      <Form className="mb-4 mt-4 m-auto w-75">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search by donor name, organ, or city"
              className="mr-sm-2"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <Row>
          {filteredDetails.map((data) => (
            <Col key={data._id} xs={12} md={6} lg={4}>
              {/* Add Col for responsive grid layout */}
              <Card style={{ width: '18rem', boxShadow: "15px 20px 5px lightblue" }} className="mt-4">
                <Card.Body>
                  <Card.Title>{data.donator_organ}</Card.Title>
                  <Card.Text>
                    <h3>{data.donator_name}</h3>
                    Phone Number: {data.donator_phone}
                    <br />
                    Email: {data.donator_email}
                    <br />
                    Age: {data.donator_age}
                    <br />
                    Place: {data.donator_city}
                    <br />
                    Hospital: <b>{data.hospitalId}</b>
                  </Card.Text>
                  <Card.Footer>
                    Status:{data.status}
                  </Card.Footer>
                  <section className="text-center">
                  <Button variant="outline-danger"  
                  onClick={() => deleteOrgan(data._id)} className="mt-4 "
                  >
                    Delete
                  </Button>
                  </section>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default OrganCollection;
