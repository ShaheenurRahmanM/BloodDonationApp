import React, { useState } from 'react';
import { Container, Grid, Box, Button, Typography, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import recipeint from '../Components/recipeint.mp4'

const RecipientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    unitsRequired: '',
    hospitalName: '',
    location: '',
    donationDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, bloodGroup, unitsRequired, hospitalName, location, donationDate } = formData;

    if (!name || !bloodGroup || !unitsRequired || !hospitalName || !location || !donationDate) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Form Data Submitted:', formData);
    alert('Recipient request created successfully!');

    setFormData({
      name: '',
      bloodGroup: '',
      unitsRequired: '',
      hospitalName: '',
      location: '',
      donationDate: '',
    });
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video width="100%" height="800px" controls autoPlay loop muted>
          <source src={recipeint} type="video/mp4" />
          Your browser does not support the video tag.
          </video>

          </Grid>

          
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ p: 4, backgroundColor: 'white', borderRadius: '10px', boxShadow: 3 }}>
              <Typography variant="h4" align="center" mb={3}>Recipient Registration</Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
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
                      <MenuItem value=""><em>Select Blood Group</em></MenuItem>
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
                  <TextField
                    fullWidth
                    label="Number of Units Required"
                    name="unitsRequired"
                    type="number"
                    value={formData.unitsRequired}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Hospital Name"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Blood Needed By"
                    name="donationDate"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formData.donationDate}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button fullWidth type="submit" variant="contained" color="error" sx={{ py: 1.5 }}>
                    Request Blood
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecipientForm;
