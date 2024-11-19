import React, { useState } from 'react';
import { Container, Grid, Box, Button, Typography, FormControl, InputLabel, MenuItem, Select, TextField, RadioGroup, FormControlLabel, Radio, Checkbox, FormHelperText } from '@mui/material';
import donor from '../Components/donor.mp4'

const DonorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    state: '',
    city: '',
    mobileNo: '',
    email: '',
    password: '',
    lastDonation: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullName, dob, gender, bloodGroup, state, city, mobileNo, email, password, lastDonation, termsAccepted
    } = formData;

    if (!fullName || !dob || !gender || !bloodGroup || !state || !city || !mobileNo || !email || !password || !lastDonation || !termsAccepted) {
      alert('Please fill in all fields and accept the terms and conditions');
      return;
    }

    alert("Registration Successful!");
    console.log('Form Data Submitted:', formData);
    setFormData({
      fullName: '',
      dob: '',
      gender: '',
      bloodGroup: '',
      state: '',
      city: '',
      mobileNo: '',
      email: '',
      password: '',
      lastDonation: '',
      termsAccepted: false,
    });
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Ladakh", "Jammu and Kashmir"
  ];

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} sx={{ p: 4, backgroundColor: 'white', borderRadius: '10px', boxShadow: 3 }}>
            <Typography variant="h4" align="center" mb={3}>Donor Registration</Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.dob}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <Typography variant="subtitle1" gutterBottom>Gender:</Typography>
                  <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Blood Group</InputLabel>
                  <Select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    label="Blood Group"
                  >
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    label="State"
                  >
                    {states.map((state, index) => (
                      <MenuItem key={index} value={state}>{state}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile No"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Last Time Blood Donated</InputLabel>
                  <Select
                    name="lastDonation"
                    value={formData.lastDonation}
                    onChange={handleChange}
                    label="Last Time Blood Donated"
                  >
                    <MenuItem value="Not donated ever">Not donated ever</MenuItem>
                    <MenuItem value="Less than 3 months">Less than 3 months</MenuItem>
                    <MenuItem value="More than 3 months">More than 3 months</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />}
                  label="Accept terms and conditions"
                />
                {!formData.termsAccepted && <FormHelperText error>Please accept the terms and conditions</FormHelperText>}
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth type="submit" variant="contained" color="error" sx={{ py: 1.5 }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center',  }}>
          <video width="100%" height="900px" controls autoPlay loop muted>
            <source src={donor} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DonorRegistration;
