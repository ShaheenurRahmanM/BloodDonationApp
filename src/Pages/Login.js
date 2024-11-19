
// import React, { useState } from 'react';
// import { TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';
// import { useNavigate, Link } from 'react-router-dom';
// //import ecg from '../Components/ecg.mp4'
// import donate from '../Components/donate.mp4'

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleLogin = () => {
//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     if (password === '') {
//       setErrorMessage('Password cannot be empty.');
//       return;
//     }

//     // Simulate successful login and redirect
//     setErrorMessage('');
//     navigate('/'); // Redirect to homepage after login
//   };

//   const styles = {
//     container: {
//       position: 'relative',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       overflow: 'hidden',
//     },
//     videoBackground: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       zIndex: -1,
//       pointerEvents: 'none',
//     },
//     card: {
//       width: '30%',
//       padding: '20px',
//       borderRadius: '15px',
//       backgroundColor: 'white',
//       boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
//       zIndex: 1,
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//     },
//     button: {
//       backgroundColor: '#f44336',
//       color: '#fff',
//       '&:hover': {
//         backgroundColor: '#d32f2f',
//       },
//     },
//     link: {
//       color: '#1976d2',
//       textDecoration: 'none',
//     },
//   };
//   const videoStyle = {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     zIndex: '-1',
//   };

//   return (
//     <div style={styles.container}>
//     <video style={videoStyle} src={donate} autoPlay loop muted />
//       <Card style={styles.card}>
//         <CardContent>
//           {/* <Typography variant="h4" gutterBottom align="center">Welcome Back!</Typography> */}
//           <Typography variant="h4" gutterBottom align="center">Login</Typography>
//           {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
//           <form style={styles.form}>
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               error={!validateEmail(email) && email !== ''}
//               helperText={!validateEmail(email) && email !== '' ? 'Enter a valid email address' : ''}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button variant="contained" fullWidth onClick={handleLogin} style={styles.button}>
//               Login
//             </Button>
//             <Typography variant="body2" align="center">
//               New User?{' '}
//               <Link to="/signup" style={styles.link}>
//                 Signup
//               </Link>
//             </Typography>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import donate from '../Components/donate.mp4';

// Replace with your actual API endpoint
const API_URL = 'http://localhost:3000/users';  

const Login = ({ setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Regex to check if the email contains "admin"
  const adminRegex = /admin/i;

  // Handle login
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
  
    if (password === '') {
      setErrorMessage('Password cannot be empty.');
      return;
    }
  
    try {
      // Fetch all users
      const response = await axios.get(`${API_URL}`);
      const users = response.data;
  
      // Find a user with matching email and password
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        console.log('Login successful:', user);
        setErrorMessage('');
        
        const isAdmin = email.includes('admin');
        setIsAdmin(isAdmin); 

        
        if (adminRegex.test(email)) {
          
          navigate('/admin/home'); 
        } 
        else {
          
          navigate('/'); 
        }
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  useEffect(() => {
    // You can fetch user data or perform any initial setup here if needed
  }, []);

  const styles = {
    container: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    card: {
      width: '30%',
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: 'white',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      zIndex: 1,
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
    link: {
      color: '#1976d2',
      textDecoration: 'none',
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
    <div style={styles.container}>
      <video style={videoStyle} src={donate} autoPlay loop muted />
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <form style={styles.form}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!validateEmail(email) && email !== ''}
              helperText={!validateEmail(email) && email !== '' ? 'Enter a valid email address' : ''}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" fullWidth onClick={handleLogin} style={styles.button}>
              Login
            </Button>
            <Typography variant="body2" align="center">
              New User?{' '}
              <Link to="/signup" style={styles.link}>
                Signup
              </Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

