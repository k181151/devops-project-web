// src/pages/Education.js
import React from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const educationList = [
  { level: '9th Grade', courses: ['Math', 'Chemistry', 'Biology', 'English'] },
  { level: '10th Grade', courses: ['Math', 'Sindhi', 'English'] },
  { level: '11th Grade', courses: ['Physics', 'Chemistry', 'Mathematics', 'Urdu Salees'] },
  { level: '12th Grade', courses: ['English', 'Biology', 'Mathematics', 'Physics'] },
  { level: 'Higher Ed.', courses: ['Programming Fundamentals', 'Object-Oriented Programming', 'Data Structures', 'Computer Networks', 'Blockchain & Cryptocurrency'] },
];

const Education = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        My Education
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
  );
};

export default Education;
