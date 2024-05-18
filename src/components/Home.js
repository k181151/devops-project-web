// src/pages/Home.js
import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import ResponsiveAppBar from './AppBar';

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Box sx={{ maxWidth: 880, height: '100%', margin: 'auto', alignContent: 'center' }}>
        <Typography variant="h3" mt={20} align="center" component="h1" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" align="center">
          Hi, I'm Hizber Ali, aka. 18K-1151, developing this project for the DevOps Assignment 1. If this text appears, this means that componenets are successfully integrated.
        </Typography>
        <div class="line"></div>
      </Box>
    </div>
  );
};

export default Home;
