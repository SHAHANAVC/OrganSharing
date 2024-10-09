const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const server = express();
server.use(
  cors({
    origin: "http://localhost:3000",
  })
);
mongoose.connect("mongodb://localhost:27017/ORGANDONATION");
server.listen(5000, () => {
  console.log("server start");
});
server.use(express.json());
const doctorData = require("./models/doctor");
const loginData = require("./models/login");
const userData = require("./models/user");
const organData = require("./models/organDonation");
const organRequestData = require("./models/organRequest");
const locationData = require("./models/location");

server.post("/userregistration", async (req, res) => {
  const {
    id,
    name,
    email,
    place,
    gender,
    age,
    adharNumber,
    phoneNumber,
    userName,
    passWord,
  } = req.body;
  try {
    const existUser = await loginData.findOne({ userName });
    if (existUser) {
      return res.json({ status: "username already exist" });
    }
    const bcryptPassword = await bcrypt.hash(passWord, 8);
    const login = await loginData.create({
      userName: userName,
      passWord: bcryptPassword,
    });

    await userData.create({
      commonKey: login._id,
      id,
      name,
      email,
      place,
      gender,
      age,
      adharNumber,
      phoneNumber,
    });
    return res.json({ status: "Registerd succesfully" });
  } catch (error) {
    console.log("Error:", error);
    res.json({ status: 400 });
  }
});

// login
server.post("/login", async (req, res) => {
  const userName = req.body.userName;
  const passWord = req.body.passWord;
  // console.log(req.body);
  try {
    await loginData.findOne({ userName }).then((user) => {
      // console.log(user);
      if (user) {
        // console.log(user);
        bcrypt.compare(passWord, user.passWord, (err, resp) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ status: "internal error" });
          }
          if (resp) {
            console.log(resp, "response");
            return res.status(200).json({
              status: "successfully login",
              username: user.userName,
              role: user.role,
              id: user._id,
            });
          } else {
            return res.status(400).json({ status: "incorrect password" });
          }
        });
      } else {
        return res.status(400).json({
          status: "user not found",
        });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "internal error" });
  }
});

server.get("/getuser/:id", async (req, res) => {
  const paramsid = req.params.id;
  try {
    const userdata = await userData.findOne({ commonKey: paramsid });
    return res.status(200).json(userdata);
  } catch {
    return res.status(500).json(error);
  }
});

// update user data

server.put("/updateuser/:id", async (req, res) => {
  const paramsid = req.params.id;
  console.log(paramsid);
  console.log(req.body);
  const { name, email, place, age, phoneNumber, adharNumber } =
    req.body;

  try {
    const userdata = await userData.findOne({ commonKey: paramsid });

    if (userdata) {
      console.log(userdata);
      await userData.updateMany(
        { commonKey: paramsid },
        {
          $set: {
            name,
            email,
            place,
            age,
            phoneNumber,
            adharNumber
          },
        }
      );
      return res.status(200).json({ message: "User updated successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch {
    return res.status(500).json("error");
  }
});

// get all users
server.get("/viewuser", async (req, res) => {
  try {
    await userData.find().then((result) => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json({ message: "no users" });
      }
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});
// post  organ donation  form

server.post("/donateorgan", async (req, res) => {
  const {
    organ_id,
    user_id,
    donator_name,
    donator_email,
    donator_phone,
    donator_adhar,
    donator_city,
    donator_blood,
    donator_state,
    donator_organ,
    donator_address,
    donator_age,
    hospitalId,
  } = req.body;

  try {
    const existingDonator = await organData.findOne({ donator_email });

    if (existingDonator) {
      return res.status(400).json({ status: "Donar already Exist" });
    }
    await organData.create({
      organ_id,
      user_id,
      donator_name,
      donator_email,
      donator_phone,
      donator_adhar,
      donator_city,
      donator_blood,
      donator_state,
      donator_organ,
      donator_address,
      donator_age,
      hospitalId,
    });
    return res.json({ status: "Registerd succesfully" });
  } catch (error) {
    console.log("Error:", error);
    res
      .status(400)
      .json({ status: "Error registering donation", error: error.message });
  }
});
// get donator details to user

server.get("/organdetails/:id", async (req, res) => {
  const paramsuserid = req.params.id;
  try {
    const data = await organData.find({ user_id: paramsuserid });
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ message: "no organ donations" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.json({ status: 500 });
  }
});

// get all donators details for admin

server.get("/organcollection", async (req, res) => {
  try {
    const result = await organData.find();
    // console.log(result);
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ message: "db is empty" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.json({ status: 500 });
  }
});
// organ request form

server.post("/organrequest", async (req, res) => {
  const {
    organ_id,
    user_id,
    patient_name,
    patient_email,
    patient_phone,
    patient_adhar,
    patient_city,
    patient_state,
    patient_organ,
    patient_blood,
    patient_address,
    date,
    patient_age,
  } = req.body;
  try {
    await organRequestData.create({
      organ_id,
      user_id,
      patient_name,
      patient_email,
      patient_phone,
      patient_adhar,
      patient_city,
      patient_state,
      patient_organ,
      patient_blood,
      patient_address,
      date,
      patient_age,
    });
    return res.status(200).json({ status: "Registerd succesfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
// user want to view their organ request
server.get("/vieworganrequest/:id", async (req, res) => {
  const paramsid = req.params.id;
  try {
    const organrequest = await organRequestData.find({ user_id: paramsid });
    if (organrequest && organrequest.length > 0) {
      return res.status(200).json(organrequest);
    } else {
      return res
        .status(404)
        .json({ message: "No organ requests found for this user" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// admin get all organ request
server.get("/vieworganrequest", async (req, res) => {
  try {
    const organrequest = await organRequestData.find();
    if (organrequest && organrequest.length > 0) {
      return res.status(200).json(organrequest);
    } else {
      return res.status(404).json({ message: "No organ requests found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// add doctor
server.post("/api/doctors", async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const {
      d_department,
      d_name,
      d_email,
      phoneNumber,
      hospital,
      place,
      id,
      passWord,
    } = req.body;

    const existDoctor = await loginData.findOne({ userName: d_email });
    console.log("Existing doctor:", existDoctor);

    if (existDoctor) {
      return res.status(409).json({ status: "Doctor already exists with this email." });
    }

    const bcryptPassword = await bcrypt.hash(passWord, 8);
    console.log("Hashed password:", bcryptPassword);

    const login = await loginData.create({
      userName: d_email,
      passWord: bcryptPassword,
      role: "doctor",
    });
    console.log("Login data created:", login);
    const doctor = await doctorData.create({
      commonKey: login._id,
      id,
      d_department,
      d_name,
      d_email,
      phoneNumber,
      hospital,
      place,
    });
    console.log("Doctor data created:", doctor);
    return res.status(201).json({ status: "Registered successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: error.message });
  }
});

// view doctor

server.get("/getdoctor", async (req, res) => {
  try {
    const doctor = await doctorData.find();
    // console.log(doctor);
    if (!doctor) {
      return res.status(401).json({ message: "no doctors" });
    } else {
      return res.status(200).json(doctor);
    }
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "error" });
  }
});

// create location

server.post("/addlocation", async (req, res) => {
  const { id, hospitalName, location } = req.body;
  try {
    const existhospital = await locationData.findOne({ hospitalName });
    console.log(existhospital);
    if (existhospital) {
      return res.json({ status: "Hospital already exist" });
    }
    const hospital = await locationData.create({
      id,
      hospitalName,
      location,
    });
    return res.status(201).json({ status: "Registered successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: error.message });
  }
});
// getlocation
server.get("/getlocation", async (req, res) => {
  try {
    const hospitals = await locationData.find();
    if (!hospitals) {
      return res.status(400).json("no hospital found");
    } else {
      return res.status(200).json(hospitals);
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: error.message });
  }
});
// delete location
server.delete("/deletelocation/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteLocation = await locationData.deleteOne({ id });
    if (deleteLocation) {
      return res.status(200).json({ message: "succesfully deleted" });
    }
    return res.status(400).json({ message: "id not found" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

// PUT route to assign doctor
server.put("/:id/assign-doctor", async (req, res) => {
  const { id } = req.params;
  const { doctorId } = req.body;
  // console.log(doctorId);

  try {
    // Find the organ request by ID and update it with the doctorId
    const organRequest = await organRequestData.findByIdAndUpdate(
      id,
      { assignedDoctor: doctorId },
      { new: true }
    );
    console.log(organRequest);
    if (!organRequest) {
      return res.status(404).json({ message: "Organ request not found" });
    }

    res.json({ message: "Doctor assigned successfully", organRequest });
  } catch (error) {
    console.error("Error assigning doctor:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// doctor- organrequest view
server.get("/doctororganrequests/:doctorId", async (req, res) => {
  const { doctorId } = req.params;

  // Logging the received doctorId for debugging purposes
  console.log('doctorid', doctorId);

  try {
    // Query the database for organ requests assigned to the given doctorId
    const organRequests = await organRequestData.find({
      assignedDoctor: doctorId,
    });

    // Log the fetched organ requests for debugging purposes
    console.log(organRequests);

    // Check if any organ requests are found
    if (organRequests.length > 0) {
      // Return the found organ requests with a 200 status
      return res.status(200).json(organRequests);
    } else {
      // Return a 404 status if no organ requests are found for the doctor
      return res
        .status(404)
        .json({ message: "No organ requests found for this doctor" });
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.log("Error:", error);

    // Return a 500 status with the error message in case of an exception
    res.status(500).json({ error: error.message });
  }
});

// get doctor details for doctor login
server.get("/doctor/:id", async (req, res) => {
  const paramsid = req.params.id;
  //  console.log(paramsid);
  try {
    const doctorResult = await doctorData.findOne({ commonKey: paramsid });
    // console.log(doctorResult);
    if (doctorResult) {
      return res.status(200).json(doctorResult);
    } else {
      return res.status(400);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// doctor update status
server.put("/doctororganrequests/:doctorId/updateStatus", async (req, res) => {
  const doctorId = req.params.doctorId;
  const { requestId, status } = req.body;
  console.log(req.body);
  console.log(status);
  

  try {
    const updatedRequest = await organRequestData.findOneAndUpdate(
      { _id: requestId, assignedDoctor: doctorId },
      { status },
      { new: true }
    );
  
    if (!updatedRequest) {
      return res.status(404).json({ message: "Organ request not found" });
    }

    res.status(200).json(updatedRequest);
  } catch (error) {
    console.error("Error updating organ request status:", error);
    res.status(500).json({ message: "Error updating organ request status" });
  }
});

// delete doctor
server.delete("/deleteDoctor/:id", async (req, res) => {
  const commonKey  = req.params.id;
// console.log(id);

  try {
    const deleteDoctor = await doctorData.deleteOne({ commonKey });
    if (deleteDoctor.deletedCount > 0) {
      const deleteLoginData = await loginData.deleteOne({ _id:commonKey });
      if (deleteLoginData.deletedCount > 0) {
        return res.status(200).json({ message: "Successfully Deleted" });
      } else {
        return res.status(400).json({ message: "Doctor deleted, but login data not found" });
      }
    }
    return res.status(400).json({ message: "Doctor not found" });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "sever error" });
  }
});


// get doctor by id
server.get('/doctors/:id',async(req,res)=>{
  const id = req.params.id
  console.log(id);
  try {
    const doctor = await doctorData.findOne({id})
 if(doctor){
  return res.status(200).json(doctor)
 }
 else{
  return res.status(400).json({message:'client side error'})
 }
  } catch {
    return res.status(500).json("error");
  }
})
// update doctor
server.put("/updatedoctor/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  const {
    d_name,
    d_department,
    phoneNumber,
    hospital,
    place,
  } = req.body;

  try {
     const doctor = await doctorData.findOne({id})
     if(doctor){
      await doctorData.updateMany({id:id},{
        $set:{
          d_name,
    d_department,
    phoneNumber,
    hospital,
    place,
        }
      })
      return res.status(200).json({message:'Doctor updated succesfully'})
     }else{
      return res.status(400).json({message:'Doctor not found'})
     }
  } catch  {
    return res.status(500).json("error");
  }
});
// update organcollection data by doctor
server.put('/organcollection/:id/updateStatus', async (req, res) => {
  const { status } = req.body;
  console.log(req.body);
  try {
    const organ = await organData.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!organ) {
      return res.status(404).json({ message: 'Organ not found' });
    }
    res.json(organ);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Delete organ collection by admin
server.delete('/organcollection/:id', async (req, res) => {
  try {
    const organ = await organData.findByIdAndDelete(req.params.id);
    if (!organ) {
      return res.status(404).json({ message: 'Organ not found' });
    }
    res.json({ message: 'Organ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
