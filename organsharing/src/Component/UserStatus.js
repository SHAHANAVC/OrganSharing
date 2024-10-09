import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, CardFooter, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function UserStatus() {
  const userid = localStorage.getItem("userid");
  const [organdata, setorgan] = useState("");
  // console.log(userid);
  const fetchStatus = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/vieworganrequest/${userid}`
      );
      console.log(data);
      setorgan(data);
    } catch (error) {
      console.error("Error fetching organ request data:", error);
    }
  };
  const getStatusClass = (status) => {
    return status === "available" ? "text-success" : "text-danger";
  };
  const getBlinkClass = (status) => {
    return status === "available" ? "blink-success" : "blink-warning";
  };
  useEffect(() => {
    fetchStatus();
  }, []);
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Button>
              <Link
                to={"/userhome"}
                style={{ textDecorationColor: "none", color: "inherit" }}
              >
                <i class="bi bi-house-fill"></i>
              </Link>
            </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <div className="text-center mt-5">
          <h3>VIEW ORGAN REQUEST</h3>
        </div>
        <Row>
          {organdata.length > 0 ? (
            organdata.map((data) => (
              <Card
                key={data._id}
                style={{
                  width: "18rem",
                  margin: "1rem",
                  boxShadow: "10px 10px 5px lightblue",
                }}
              >
                <Card.Body>
                  {data.assignedDoctor && (
                    <Card.Text className={getBlinkClass(data.status)}>
                      {data.status === "available"
                        ? "Doctor will call you soon"
                        : "Waiting for doctor response"}
                    </Card.Text>
                  )}
                  <Card.Title>{data.patient_organ}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.patient_name}
                  </Card.Subtitle>
                  <Card.Text>
                    Blood Type: {data.patient_blood}
                    <br />
                    Age:{data.patient_age}<br/>
                    ExpectedDate:{data.date}
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    Address:{data.patient_city}
                    <br />
                    AdharNumber:{data.patient_adhar}
                    <br />
                    PhoneNumber:{data.patient_phone}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <h4 className={getStatusClass(data.status)}>
                    {" "}
                    Status: {data.status}
                  </h4>
                </Card.Footer>
              </Card>
            ))
          ) : (
            <p>No organ requests found.</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default UserStatus;
