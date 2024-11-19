import React, { useRef, useState } from 'react';
import { Container, Grid, Box, Button, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MapComponent from '../Components/MapComponent';

const SearchDonors = () => {
  const bloodTypeRef = useRef(null);
  const locationRef = useRef(null);
  const [filteredDonors, setFilteredDonors] = useState([]);

  const donors = [
    { name: 'Shaheenur Rahman M', bloodType: 'A+', location: 'Coimbatore' },
    { name: 'Saifullah A', bloodType: 'B+', location: 'Mayiladuthurai' },
    { name: 'Sanjael Raja', bloodType: 'B+', location: 'Ariyalur' },
    { name: 'Siva D', bloodType: 'AB-', location: 'Karur' },
    { name: 'Sujan G', bloodType: 'O+', location: 'Coimbatore' },
    { name: 'Seeniselvam B', bloodType: 'A+', location: 'Virudhunagar' },
    { name: 'Saravanakumar M', bloodType: 'B+', location: 'Dharapuram' },
    { name: 'Rohit T J', bloodType: 'A+', location: 'Coimbatore' },
    { name: 'Sheik Irfan Bashaa S A', bloodType: 'A+', location: 'Namakkal' },
    { name: 'Varun', bloodType: 'A+', location: 'Pudukkottai' },
    { name: 'Vijayakumar', bloodType: 'O+', location: 'Namakkal' },
    { name: 'Rajesh', bloodType: 'O-', location: 'Thanjavur' },
    { name: 'Rakesh', bloodType: 'B+', location: 'Thiruvarur' },
    { name: 'Ranjeet', bloodType: 'AB-', location: 'Tiruchirappalli' },
    { name: 'Niranjan P', bloodType: 'O+', location: 'Tirupur' },
    { name: 'Roshan', bloodType: 'A+', location: 'Coimabatore' },
    { name: 'Siva Perumal', bloodType: 'O-', location: 'Chidambaram' },
    { name: 'Mugilan', bloodType: 'B+', location: 'Dharmapuri' },
    { name: 'Tharun', bloodType: 'AB-', location: 'Erode' },
    { name: 'Sriganth', bloodType: 'A+', location: 'Dindigul' },
    { name: 'Surjith', bloodType: 'A+', location: 'Kanyakumari' },
    { name: 'Pugal', bloodType: 'O-', location: 'Thiruchirappalli' },
    { name: 'Rishi', bloodType: 'A+', location: 'Thirunelveli' },
    { name: 'Nagaraj', bloodType: 'O-', location: 'Thirunelveli' },
    { name: 'Rhenison', bloodType: 'B+', location: 'Tiruchirapalli' },
    { name: 'Sanjay', bloodType: 'AB-', location: 'Krishnagiri' },
    { name: 'Sakthi', bloodType: 'A+', location: 'Salem' },
    { name: 'Nithish', bloodType: 'A+', location: 'Tirupur' },
    { name: 'Ratheesh', bloodType: 'B+', location: 'Kanyakumari' },
    { name: 'Dharshan', bloodType: 'AB-', location: 'Madurai' },
    { name: 'Iniyan', bloodType: 'A+', location: 'Mannarkudi' },
    { name: 'Vishali', bloodType: 'A+', location: 'Thanjavur' },
    { name: 'Priyadharshini', bloodType: 'AB+', location: 'Ramnathapuram' },
    { name: 'Navya', bloodType: 'O-', location: 'Karur' },
    { name: 'Neela Rathnam', bloodType: 'O+', location: 'Nagercoil' },
    { name: 'Nashifa', bloodType: 'B+', location: 'Coimbatore' },
    
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const bloodType = bloodTypeRef.current.value;
    const location = locationRef.current.value.toLowerCase();

    const results = donors.filter(
      (donor) =>
        (bloodType === '' || donor.bloodType === bloodType) &&
        (location === '' || donor.location.toLowerCase().includes(location))
    );

    setFilteredDonors(results);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '10px', boxShadow: 3 }}>
        <Typography variant="h4" align="center" mb={3}>Search Donors</Typography>

        <form onSubmit={handleSearch}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Blood Type</InputLabel>
                <Select inputRef={bloodTypeRef} defaultValue="">
                  <MenuItem value=""><em>Select blood type</em></MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                inputRef={locationRef}
                variant="outlined"
                
              />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth type="submit" variant="contained" color="error" sx={{ py: 1.5 }}>
                Search Donors
              </Button>
            </Grid>
          </Grid>
        </form>

        {filteredDonors.length > 0 && (
          <TableContainer sx={{ mt: 3, mb: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Blood Type</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDonors.map((donor, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{donor.name}</TableCell>
                    <TableCell>{donor.bloodType}</TableCell>
                    <TableCell>{donor.location}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="success">Message</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {filteredDonors.length === 0 && (
          <Typography align="center" color="textSecondary">No donors found matching the criteria.</Typography>
        )}
      </Box>

      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" mb={2}>Location of Nearby Donors</Typography>
        <div style={{ height: '300px' }}>
          <MapComponent />
        </div>
      </Box>
    </Container>
  );
};

export default SearchDonors;
