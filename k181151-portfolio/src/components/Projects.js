// src/pages/Projects.js
import React, { useState } from 'react';
import { TextField, Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const projectList = [
  { name: 'Network Sniffer', tech: 'Java' },
  { name: 'Intrusion Detection System', tech: 'Python, PHP' },
  { name: 'Contacts Logger and Chat', tech: 'HTML, CSS, PHP, SQL' },
  { name: 'AI-Powered LaTeX Editor', tech: 'MERN, MongoDB, Express.js, React.js, Node.js' },
  { name: 'Project 3', tech: 'Node.js' },
  { name: 'Project 4', tech: 'JavaScript' },
];

const Projects = () => {
  const [filter, setFilter] = useState('');

  const filteredProjects = projectList.filter(project =>
    project.tech.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        My Projects
      </Typography>
      <TextField
        label="Filter by Technology"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <List>
        {filteredProjects.map((project, index) => (
          <ListItem key={index}>
            <ListItemText primary={project.name} secondary={project.tech} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Projects;
