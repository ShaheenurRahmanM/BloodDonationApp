import React from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #2196F3 30%, #0D47A1 100%)', // Blue gradient background
      transition: 'background 0.5s ease',
    },
    card: {
      width: '40%',
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    button: {
      backgroundColor: '#f44336',
      color: '#fff',
      marginTop: '20px',
      '&:hover': {
        backgroundColor: '#d32f2f',
      },
    },
  };

  return (
    <div style={styles.container}>
      <Card 
        style={styles.card}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} // Scale effect on hover
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Button 
            variant="contained" 
            fullWidth 
            style={styles.button}
            onClick={() => navigate('/admin/donors')}
          >
            See All Donors
          </Button>
          <Button 
            variant="contained" 
            fullWidth 
            style={styles.button}
            onClick={() => navigate('/admin/add-donor')}
          >
            Add Donor
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;
