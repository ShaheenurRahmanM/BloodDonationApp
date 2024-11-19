// import React, { useState } from 'react';
// import { TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';
// import { useNavigate, Link } from 'react-router-dom';
// import donate from '../Components/donate.mp4'


// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleSignup = () => {
//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     if (password === '') {
//       setErrorMessage('Password cannot be empty.');
//       return;
//     }

    
//     setErrorMessage('');
//     navigate('/login');
//   };

//   const styles = {
//     container: {
//       backgroundImage: 'url("https://example.com/blood-donation-bg.jpg")', 
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     card: {
//       width: '30%', 
//       padding: '20px',
//       borderRadius: '15px',
//       backgroundColor: 'white', 
//       boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
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
//       <video style={videoStyle} src={donate} autoPlay loop muted />
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h4" gutterBottom align="center">
//             Signup
//           </Typography>
//           {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
//           <form style={styles.form}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
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
//             <Button variant="contained" fullWidth onClick={handleSignup} style={styles.button}>
//               Signup
//             </Button>
//             <Typography variant="body2" align="center">
//               Already have an account?{' '}
//               <Link to="/login" style={styles.link}>
//                 Login
//               </Link>
//             </Typography>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// import { TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios'; 
// import donate from '../Components/donate.mp4';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleSignup = async () => {
//     setErrorMessage('');
    
//     // Validation checks
//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }
  
//     if (password === '') {
//       setErrorMessage('Password cannot be empty.');
//       return;
//     }
  
//     try {
//       // Make a POST request to json-server's /users endpoint
//       const response = await axios.post('http://localhost:3000/users', { name, email, password });
  
//       // Check if the signup is successful
//       if (response.status === 201) { // Status 201 indicates resource creation
//         setErrorMessage('');
//         setSuccessMessage('Signup successful! Redirecting to login...');
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//       } else {
//         setErrorMessage('Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
      
//       // if (error.response) {
//       //   if (error.response.status === 409) {
//       //     setErrorMessage('Email already in use. Please try another.');
//       //   } else {
//       //     setErrorMessage("Error ${error.response.status}: ${error.response.data.message" || 'Signup failed.'});
//       //   }
//       // } else if (error.request) {
//       //   setErrorMessage('No response from server. Please try again later.');
//       // } else {
//       //   setErrorMessage('An error occurred while setting up the request.');
//       // }
//     }
//   };

//   const styles = {
//     container: {
//       //backgroundImage: 'url("https://example.com/blood-donation-bg.jpg")', 
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     card: {
//       width: '30%', 
//       padding: '20px',
//       borderRadius: '15px',
//       backgroundColor: 'white', 
//       boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
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
//       <video style={videoStyle} src={donate} autoPlay loop muted />
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h4" gutterBottom align="center">
//             Signup
//           </Typography>
//           {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
//           {successMessage && <Alert severity="success">{successMessage}</Alert>}
//           <form style={styles.form}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
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
//             <Button variant="contained" fullWidth onClick={handleSignup} style={styles.button}>
//               Signup
//             </Button>
//             <Typography variant="body2" align="center">
//               Already have an account?{' '}
//               <Link to="/login" style={styles.link}>
//                 Login
//               </Link>
//             </Typography>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; 
import donate from '../Components/donate.mp4';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password === '') {
      setErrorMessage('Password cannot be empty.');
      return;
    }

    setErrorMessage('');

    try {
      // Make a POST request to your signup endpoint
      await axios.post('http://localhost:3000/users', {
        name,
        email,
        password,
      });
      navigate('/login');
    } catch (error) {
      // Handle errors from the API
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Signup failed. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const styles = {
    container: {
      //backgroundImage: 'url("https://example.com/blood-donation-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '30%',
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: 'white',
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
            Signup
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <form style={styles.form}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <Button variant="contained" fullWidth onClick={handleSignup} style={styles.button}>
              Signup
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?{' '}
              <Link to="/login" style={styles.link}>
                Login
              </Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;