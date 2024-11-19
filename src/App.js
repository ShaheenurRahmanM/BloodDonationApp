import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import DonorRegistration from './Pages/DonorRegistration';
import RecipientRegistration from './Pages/RecipientRegistration';
import 'leaflet/dist/leaflet.css';
import SearchDonorPage from './Pages/SearchDonor';
import AdminHome from './Admin/AdminHome';
import AdminDonors from './Admin/AdminDonor';
import EditDonor from './Admin/EditDonor';
import AdminNavbar from './Admin/AdminNavbar';


function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  return (
    
    <Router>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/recipient-registration" element={<RecipientRegistration />} />
        <Route path="/search-donor" element={<SearchDonorPage />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/donors" element={<AdminDonors />} />
        <Route path="/admin/edit-donor/:id" element={<EditDonor />} />
      </Routes>
    </Router>
  );
}

export default App;
