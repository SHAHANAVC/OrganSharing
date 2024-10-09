import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ViewDonation() {
  const userId = localStorage.getItem("userid");
  const [organDetails, setdetails] = useState([]);
  const fetchOrgan = async () => {
    await axios
      .get(`http://localhost:5000/organdetails/${userId}`)
      .then((res) => {
        console.log(res);
        setdetails(res.data);
      });
  };
  useEffect(() => {
    fetchOrgan();
  }, []);
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
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
      <Container className="mb-5 pb-5">
        <div className="text-center mt-5 ">
          <h3>VIEW DONATION</h3>
        </div>
        <Row>
          {organDetails.length > 0 ? (
            organDetails.map((data) => (
              // <h1>{data.donator_organ}</h1>
              <Col className="mt-5">
                <Card
                  style={{
                    width: "18rem",
                    boxShadow: "15px 20px 5px lightblue",
                  }}
                >
                  <Card.Img
                    variant="top"
                    alt="holder.js/100px180"
                    src="https://static.india.com/wp-content/uploads/2022/11/Organ-Donation-5-Things-to-Keep-in-Mind-When-Considering-to-Donate-Organ.jpeg?impolicy=Medium_Widthonly&w=700"
                    style={{height:'150px'}}
                  />
                  <Card.Body>
                    <Card.Title><b>{data.donator_organ}</b></Card.Title>
                    <Card.Text>
                      <h2> {data.donator_name}</h2>
                      {data.donator_email}<br/>
                      {data.
donator_city
}
                      <br />
                      <b>{data.hospitalId}</b>
                      <br />
                      PhoneNumber: {data.donator_phone}<br/>
                      AdharNumber:{data.donator_adhar
                      }
                    </Card.Text>
                    <Card.Footer>
                      status:{data.status}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No organ Donations</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ViewDonation;
