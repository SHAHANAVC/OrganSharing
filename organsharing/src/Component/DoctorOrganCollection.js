import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// function DoctorOrganCollection() {
//   const [organDetails, setDetails] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDetails, setFilteredDetails] = useState([]);
//   const [statusUpdates, setStatusUpdates] = useState({});
//   const [selectedOrgan, setSelectedOrgan] = useState("all");


//   const organs = [
//     { name: "Eye"},
//     { name: "Kidney"},
//     { name: "Heart" },
//     { name: "Lungs"},
//   ];
//   const fetchOrgan = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/organcollection`);
//       console.log(res);
//       setDetails(res.data);
//       setFilteredDetails(res.data); // Set filtered details initially
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };
//   const handleStatusChange = (organId, newStatus) => {
//     setStatusUpdates((prevUpdates) => ({
//       ...prevUpdates,
//       [organId]: newStatus,
//     }));
//   };

//   const updateOrganStatus = async (organId) => {
//     const newStatus = statusUpdates[organId];
//     if (!newStatus) {
//       console.error(`No status found for organ ID: ${organId}`);
//       return;
//     }

//     try {
//       console.log(`Updating organ ID: ${organId} with status: ${newStatus}`);
//       const response = await axios.put(
//         `http://localhost:5000/organcollection/${organId}/updateStatus`,
//         { status: newStatus }
//       );
//       const updatedOrgan = response.data;

//       setDetails((prevDetails) =>
//         prevDetails.map((organ) =>
//           organ._id === updatedOrgan._id ? updatedOrgan : organ
//         )
//       );

      // Clear the temporary status update
  //     setStatusUpdates((prevUpdates) => {
  //       const { [organId]: _, ...rest } = prevUpdates;
  //       return rest;
  //     });
  //   } catch (error) {
  //     console.error("Error updating organ status:", error.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchOrgan();
  // }, []);

  // useEffect(() => {
  //   const results = organDetails.filter(
  //     (data) =>
  //       data.donator_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       data.donator_organ.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       data.donator_city.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredDetails(results);
  // }, [searchTerm, organDetails,selectedOrgan]);
  // return (
  //   <>
  //     <Navbar className="bg-body-tertiary">
  //       <Container>
  //         <Navbar.Brand>
  //           <Button>
  //             <Link
  //               to={"/doctorhome"}
  //               style={{ textDecorationColor: "none", color: "inherit" }}
  //             >
  //               <i class="bi bi-house-fill"></i>
  //             </Link>
  //           </Button>
  //         </Navbar.Brand>
  //         <div className="d-flex justify-content-end me-5">
  //           <Button className="logout-button ">
  //             {" "}
  //             <i class="bi bi-box-arrow-right"></i>
  //             <Link to={"/login"}>
  //               <span className="logout-text">Logout</span>
  //             </Link>
  //           </Button>
  //         </div>
  //       </Container>
  //     </Navbar>
  //     <div className="text-center">
  //       <h1>Organ Collection</h1>
  //     </div>
  //     <Container className="m-auto bg-light">
  //       <Form className="mb-4 pt-4 m-auto w-75">
  //         <InputGroup>
  //           <FormControl
  //             type="text"
  //             placeholder="Search by donor name, organ, or city"
  //             className="mr-sm-2"
  //             onChange={(e) => setSearchTerm(e.target.value)}
  //           />
  //           <InputGroup.Text>
  //             <i className="bi bi-search"></i>
  //           </InputGroup.Text>
  //         </InputGroup>
  //       </Form>
  //       <div className="d-flex justify-content-center mb-4">
  //         {organs.map((organ) => (
  //           <Button
  //             key={organ.name}
  //             variant={selectedOrgan === organ.name.toLowerCase() ? "primary" : "light"}
  //             onClick={() => setSelectedOrgan(organ.name.toLowerCase())}
  //             className="me-2"
  //           >
  //             {organ.icon} {organ.name}
  //           </Button>
  //         ))}
  //         <Button
  //           variant={selectedOrgan === "all" ? "primary" : "light"}
  //           onClick={() => setSelectedOrgan("all")}
  //         >
  //           All
  //         </Button>
  //       </div>

  //       <Row>
  //         {filteredDetails.map((data) => (
  //           <Col key={data._id} xs={12} md={6} lg={4}>
  //             {/* Add Col for responsive grid layout */}
  //             <Card
  //               style={{ width: "18rem", boxShadow: "15px 20px 5px lightblue" }}
  //               className="mt-4"
  //             >
  //               <Card.Body>
  //                 <Card.Title>{data.donator_organ}</Card.Title>
  //                 <Card.Text>
  //                   <h3>{data.donator_name}</h3>
  //                   Phone Number: {data.donator_phone}
  //                   <br />
  //                   Email: {data.donator_email}
  //                   <br />
  //                   Age: {data.donator_age}
  //                   <br />
  //                   BloodGroup:{data.donator_blood}
  //                   <br></br>
  //                   Place: {data.donator_city}
  //                   <br />
  //                   Hospital: <b>{data.hospitalId}</b>
  //                   <br />
  //                   status:{statusUpdates[data._id] || data.status}
  //                 </Card.Text>
                  {/* <Form.Control
                    as="select"
                    value={statusUpdates[data._id] || data.status}
                    
                    onChange={(e) =>
                      handleStatusChange(data._id, e.target.value)
                    }
                    className="mt-2"
                  >
                    <option value="" disabled >
                      Change Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Expired">Expired</option>
                  </Form.Control> */}
                  {/* <Form.Select
  value={statusUpdates[data._id] || ""}
  onChange={(e) => handleStatusChange(data._id, e.target.value)}
  className="mt-2"
>
  <option value="" disabled>
    Change Status
  </option>
  <option value="Available">Available</option>
  <option value="Assigned">Assigned</option>
  <option value="Expired">Expired</option>
</Form.Select>
                  <Button
                    variant="primary"
                    onClick={() => updateOrganStatus(data._id)}
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default DoctorOrganCollection; */}

// import { FaEye, FaKidneys, FaHeart, FaLungs } from "react-icons/fa"; 

function DoctorOrganCollection() {
  const [organDetails, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [statusUpdates, setStatusUpdates] = useState({});
  const [selectedOrgan, setSelectedOrgan] = useState("all");

  const organs = [
    { name: "Eye"},
    { name: "Kidney"},
    { name: "Heart" },
    { name: "Lungs"},
  ];

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

  const handleStatusChange = (organId, newStatus) => {
    setStatusUpdates((prevUpdates) => ({
      ...prevUpdates,
      [organId]: newStatus,
    }));
  };

  const updateOrganStatus = async (organId) => {
    const newStatus = statusUpdates[organId];
    if (!newStatus) {
      console.error(`No status found for organ ID: ${organId}`);
      return;
    }

    try {
      console.log(`Updating organ ID: ${organId} with status: ${newStatus}`);
      const response = await axios.put(
        `http://localhost:5000/organcollection/${organId}/updateStatus`,
        { status: newStatus }
      );
      const updatedOrgan = response.data;

      setDetails((prevDetails) =>
        prevDetails.map((organ) =>
          organ._id === updatedOrgan._id ? updatedOrgan : organ
        )
      );

      // Clear the temporary status update
      setStatusUpdates((prevUpdates) => {
        const { [organId]: _, ...rest } = prevUpdates;
        return rest;
      });
    } catch (error) {
      console.error("Error updating organ status:", error.message);
    }
  };

  useEffect(() => {
    fetchOrgan();
  }, []);

  useEffect(() => {
    const results = organDetails.filter(
           (data) =>
             data.donator_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             data.donator_organ.toLowerCase().includes(searchTerm.toLowerCase())||
             data.donator_city.toLowerCase().includes(searchTerm.toLowerCase())
        );

    if (selectedOrgan === "all") {
      setFilteredDetails(results);
    } else {
      // setFilteredDetails(results.filter((data) => data.donator_organ === selectedOrgan));
      setFilteredDetails(results.filter((data) => data.donator_organ.toLowerCase() === selectedOrgan.toLowerCase()))
    }
  }, [searchTerm, organDetails, selectedOrgan]);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Button>
              <Link
                to={"/doctorhome"}
                style={{ textDecorationColor: "none", color: "inherit" }}
              >
                <i className="bi bi-house-fill"></i>
              </Link>
            </Button>
          </Navbar.Brand>
          <div className="d-flex justify-content-end me-5">
            <Button className="logout-button ">
              {" "}
              <i className="bi bi-box-arrow-right"></i>
              <Link to={"/login"}>
                <span className="logout-text">Logout</span>
              </Link>
            </Button>
          </div>
        </Container>
      </Navbar>
      <div className="text-center">
        <h1>Organ Collection</h1>
      </div>
      <Container className="m-auto bg-light">
        <Form className="mb-4 pt-4 m-auto w-75">
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
        <div className="d-flex justify-content-center mb-4">
          {organs.map((organ) => (
            <Button
              key={organ.name}
              variant={selectedOrgan === organ.name ? "primary" : "light"}
              onClick={() => setSelectedOrgan(organ.name)}
              className="me-2"
            >
              {organ.name}
            </Button>
          ))}
          <Button
            variant={selectedOrgan === "all" ? "primary" : "light"}
            onClick={() => setSelectedOrgan("all")}
          >
            All
          </Button>
        </div>

        <Row>
          {filteredDetails.map((data) => (
            <Col key={data._id} xs={12} md={6} lg={4}>
              {/* Add Col for responsive grid layout */}
              <Card
                style={{ width: "18rem", boxShadow: "15px 20px 5px lightblue" }}
                className="mt-4"
              >
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
                    BloodGroup: {data.donator_blood}
                    <br />
                    Place: {data.donator_city}
                    <br />
                    Hospital: <b>{data.hospitalId}</b>
                    <br />
                    Status: {statusUpdates[data._id] || data.status}
                  </Card.Text>
                  <Form.Select
                    value={statusUpdates[data._id] || ""}
                    onChange={(e) => handleStatusChange(data._id, e.target.value)}
                    className="mt-2"
                  >
                    <option value="" disabled>
                      Change Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Expired">Expired</option>
                  </Form.Select>
                  <Button
                    variant="primary"
                    onClick={() => updateOrganStatus(data._id)}
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default DoctorOrganCollection;
