import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const styles = {
    appBar: {
      backgroundColor: '#b71c1c', // Blood donation color
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      cursor: 'pointer',
    },
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar style={styles.toolbar}>
        <Typography variant="h6" style={styles.logo} onClick={() => navigate('/')}>
          Blood Donation Application
        </Typography>
        <div>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/donor-registration')}>
            Donor Registration
          </Button>
          <Button color="inherit" onClick={() => navigate('/recipient-registration')}>
            Recipient Registration
          </Button>
          <Button color="inherit" onClick={() => navigate('/search-donor')}>
            Search Donor
          </Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
          {/* <Button color="inherit" onClick={() => navigate('/signup')}>
            Signup
          </Button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#b71c1c' }}>  {/* Blood red color */}
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Blood Donation App
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/login">Login</Button>
//         <Button color="inherit" component={Link} to="/signup">Signup</Button>
//         <Button color="inherit" component={Link} to="/donor-registration">Donor Registration</Button>
//         <Button color="inherit" component={Link} to="/recipient-registration">Recipient Registration</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
