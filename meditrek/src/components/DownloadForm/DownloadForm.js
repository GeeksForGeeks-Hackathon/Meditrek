import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    title: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    logo: {
      height: 50,
      marginBottom: theme.spacing(2),
    },
  }));

const DownloadForm = (theme) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
 const classes=useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and download document
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Download Health Documents
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Download
        </Button>
      </form>
    </Container>
  );
};

export default DownloadForm;
