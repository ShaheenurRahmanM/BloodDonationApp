import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminDonors = () => {
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setDonors(response.data))
      .catch(error => console.error('Error fetching donors:', error));
  }, []);

  const deleteDonor = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => setDonors(donors.filter(donor => donor.id !== id)))
      .catch(error => console.error('Error deleting donor:', error));
  };

  const styles = {
    container: {
      padding: '40px',
    },
    table: {
      minWidth: 650,
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
      <Typography variant="h4" gutterBottom>
        All Donors
      </Typography>
      <Paper>
        <Table style={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donors.map(donor => (
              <TableRow key={donor.id}>
                <TableCell>{donor.id}</TableCell>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.bloodType}</TableCell>
                <TableCell>{donor.location}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/admin/edit-donor/${donor.id}`)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => deleteDonor(donor.id)}>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default AdminDonors;
