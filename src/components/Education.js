// src/pages/Education.js
import React from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import ResponsiveAppBar from './AppBar';

const educationList = [
  { level: '9th Grade', courses: ['Math', 'Chemistry', 'Biology', 'English'] },
  { level: '10th Grade', courses: ['Math', 'Sindhi', 'English'] },
  { level: '11th Grade', courses: ['Physics', 'Chemistry', 'Mathematics', 'Urdu Salees'] },
  { level: '12th Grade', courses: ['English', 'Biology', 'Mathematics', 'Physics'] },
  { level: 'Higher Ed.', courses: ['Programming Fundamentals', 'Object-Oriented Programming', 'Data Structures', 'Computer Networks', 'Blockchain & Cryptocurrency'] },
];

const Education = () => {
  return (
    <div>
      
      <ResponsiveAppBar/>
      <Container>
        <Typography mt={20} variant="h3" align="center" component="h1" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1" align="center" component="p" gutterBottom>
          Among various other courses, here are some notable mentions
        </Typography>
        <List>
          {educationList.map((edu, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={edu.level}
                secondary={edu.courses.join(', ')}
              />
            </ListItem>
          ))}
        </List>
      </Container>

    </div>
  );
};

export default Education;
