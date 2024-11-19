import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditDonor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donor, setDonor] = useState({
    name: '',
    bloodType: '',
    location: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(response => setDonor(response.data))
      .catch(error => console.error('Error fetching donor data:', error));
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/users/${id}`, donor)
      .then(() => {
        console.log('Donor updated successfully');
        navigate('/admin/donors');
      })
      .catch(error => console.error('Error updating donor:', error));
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    card: {
      width: '50%',
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    button: {
      backgroundColor: '#f44336',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#d32f2f',
      },
    },
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Edit Donor
          </Typography>
          <form style={styles.form}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={donor.name}
              onChange={(e) => setDonor({ ...donor, name: e.target.value })}
            />
            <TextField
              label="Blood Type"
              variant="outlined"
              fullWidth
              value={donor.bloodType}
              onChange={(e) => setDonor({ ...donor, bloodType: e.target.value })}
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={donor.location}
              onChange={(e) => setDonor({ ...donor, location: e.target.value })}
            />
            <Button variant="contained" fullWidth style={styles.button} onClick={handleUpdate}>
              Update Donor
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditDonor;
