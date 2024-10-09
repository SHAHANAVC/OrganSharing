// import logo from './logo.svg';
import './App.css';
import Doctor from './Component/Doctor';
import { User } from './Component/User';
import { Route, Routes } from 'react-router-dom';
import UserHome from './Component/UserHome';
import Login from './Component/Login';
import UserLogin from './Component/UserLogin';
import Admin from './Component/Admin';
import UserProfileUpdation from './Component/UserProfileUpdation';
import ViewUser from './Component/ViewUser';
import { AddorganForm } from './Component/AddorganForm';
import ViewDonation from './Component/ViewDonation';
import OrganCollection from './Component/OrganCollection';
import AddOrganRequest from './Component/AddOrganRequest';
import UserStatus from './Component/UserStatus';
import ViewOrganRequest from './Component/ViewOrganRequest';
import ViewDoctor from './Component/ViewDoctor';
import DoctorHome from './Component/DoctorHome';
import HospitalLocation from './Component/HospitalLocation';
import DoctorOrganCollection from './Component/DoctorOrganCollection';
import DoctorOrganRequest from './Component/DoctorOrganRequest';
import Home from './Component/Home';
import DoctorProfileUpdation from './Component/DoctorProfileUpdation';
// import Login from './Component/Login';
function App() {
  return (
 <>
 {/* <Doctor/> */}
 {/* <Login/> */}
 
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  {/* <Route path='/userlogin' element={<UserLogin/>}/> */}
  <Route path='/userregistration' element={<User/>}/>
  <Route path='/userhome' element={<UserHome/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/userupdation' element={<UserProfileUpdation/>}/>
  <Route path='/viewuser' element={<ViewUser/>}/>
  <Route path='/addorgan' element={<AddorganForm/>}/>
  <Route path='viewmydonation' element={<ViewDonation/>}/>
  <Route path='/organcollection' element={<OrganCollection/>}/>
  <Route path='/organrequest' element={<AddOrganRequest/>}/>
  <Route path='/mystatus' element={<UserStatus/>}/>
  <Route path='/vieworganrequest' element={<ViewOrganRequest/>}/>
  <Route path='/doctorregistration' element={<Doctor/>}/>
  <Route path='/viewdoctor' element={<ViewDoctor/>}/>
  <Route path='/doctorhome' element={<DoctorHome/>}/>
  <Route path='/location' element={<HospitalLocation/>}/>
  <Route path='/doctorvieworgancollection' element={<DoctorOrganCollection/>}/>
  <Route path='/doctorvieworganrequest' element={<DoctorOrganRequest/>}/>
  <Route path='/doctorProfile/:id' element={<DoctorProfileUpdation/>}/>
  </Routes>
 </>
  );
}

export default App;
