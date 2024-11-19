import React from 'react';
import { Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgvid from '../Components/bgvid.mp4';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      color: '#fff',
      padding: '20px',
    },
    videoBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      zIndex: 1,
    },
    content: {
      zIndex: 2,
      textAlign: 'left',
    },
    buttons: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    button: {
      backgroundColor: '#f44336',
      color: '#fff',
      padding: '10px 20px',
      '&:hover': {
        backgroundColor: '#d32f2f',
      },
    },
    card: {
      margin: '20px',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    benefitsSection: {
      padding: '20px',
    },
    preparationSection: {
      padding: '20px',
    },
  };

  const videoStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
  };

  return (
    <div>
      <div style={styles.container}>
        <video style={videoStyle} src={bgvid} autoPlay loop muted />
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <Typography variant="h3" gutterBottom>
            Welcome to Blood Donation Portal
          </Typography>
          <Typography variant="h5">
            Give the gift of life, donate blood!
          </Typography>
          <div style={styles.buttons}>
            <Button
              variant="contained"
              style={styles.button}
              onClick={() => navigate('/search-donor')}
            >
              Search Donor
            </Button>
            <Button
              variant="contained"
              style={styles.button}
              onClick={() => navigate('/donor-registration')}
            >
              Register as Donor
            </Button>
          </div>
        </div>
      </div>

      
      <Grid container spacing={2} style={{ padding: '50px' }}>
        
        <Grid item xs={12} sm={6}>
          <Card style={{ ...styles.card, backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Benefits of Blood Donation
              </Typography>
              <Typography variant="h6">1. Save Lives</Typography>
              <Typography>
                Every donation can save up to three lives. Your blood donation can make a huge difference.
              </Typography>
              <Typography variant="h6">2. Health Benefits</Typography>
              <Typography>
                Donating blood may lower the risk of certain diseases and provide health benefits to the donor.
              </Typography>
                <Typography variant="h6">3. Community Impact</Typography>
                <Typography>
                  Blood donation is a way to contribute to your community and help those in need.
                </Typography>
                <Typography variant="h6">4. Free Health Checkup</Typography>
                <Typography>
                  Each donation comes with a free health checkup, including blood pressure, hemoglobin levels, and more.
                </Typography>
              
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} sm={6}>
          <Card style={{ ...styles.card, backgroundColor: '#ffe0b2' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Preparation for Blood Donation
              </Typography>
              <Typography variant="h6">1. Stay Hydrated</Typography>
              <Typography>
                Drink plenty of water before your donation to stay hydrated.
              </Typography>
              <Typography variant="h6">2. Have a Healthy Meal</Typography>
              <Typography>
                Eat a healthy meal before your donation to ensure you have enough energy.
              </Typography>
              <Typography variant="h6">3. Avoid Alcohol</Typography>
              <Typography>
                Avoid alcohol for at least 24 hours before donating blood.
              </Typography>
              <Typography variant="h6">4. Bring ID</Typography>
              <Typography>
                Don't forget to bring a valid ID when you go to donate blood.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

       
        <Grid item xs={12} sm={6}>
          <Card style={{ ...styles.card, backgroundColor: '#cceeff' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Who Can Donate Blood?
              </Typography>
              <Typography>
                Most people can donate blood if they are healthy, at least 17 years old, and weigh at least 110 pounds.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

    
        <Grid item xs={12} sm={6}>
          <Card style={{ ...styles.card, backgroundColor: '#ffe0f2' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Blood Donation Process
              </Typography>
              <Typography>
                The blood donation process is simple, quick, and safe. It usually takes about an hour, including registration.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
