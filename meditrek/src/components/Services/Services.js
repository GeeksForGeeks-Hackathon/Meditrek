import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '80px 0',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  serviceItem: {
    marginBottom: 30,
    textAlign: 'center',
  },
  serviceImage: {
    width: '100%',
    marginBottom: 20,
  },
  serviceTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Our Services
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.serviceItem}>
            <img src="/images/service1.jpg" alt="Service 1" className={classes.serviceImage} />
            <Typography variant="h6" className={classes.serviceTitle}>
              Get AI Guidance
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate quam vel lorem tincidunt
              consectetur.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.serviceItem}>
            <img src="/images/service2.jpg" alt="Service 2" className={classes.serviceImage} />
            <Typography variant="h6" className={classes.serviceTitle}>
              Schedule an Appointment
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate quam vel lorem tincidunt
              consectetur.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.serviceItem}>
            <img src="/images/service3.jpg" alt="Service 3" className={classes.serviceImage} />
            <Typography variant="h6" className={classes.serviceTitle}>
              Download HealthReport
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate quam vel lorem tincidunt
              consectetur.
            </Typography>
            <Button variant="contained" color="primary" href="#">
              Learn More
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;