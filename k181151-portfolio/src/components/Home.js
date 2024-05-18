// src/pages/Home.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        Hi, I'm Hizber Ali, aka. 18K-1151, developing this project for the DevOps Assignment 1. If this text appears, this means that componenets are successfully integrated.
      </Typography>
    </Container>
  );
};

export default Home;
