// src/pages/Projects.js
import React, { useState } from 'react';
import { TextField, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import ResponsiveAppBar from './AppBar';


const projectList = [
  { name: 'Network Sniffer and Vulnerabilities Detecter', tech: 'Java' },
  { name: 'Intrusion Detection System', tech: 'Python, PHP' },
  { name: 'Contacts Logger and Chat', tech: 'HTML, CSS, PHP, SQL' },
  { name: 'AI-Powered LaTeX Editor', tech: 'MERN, MongoDB, Express.js, React.js, Node.js, GPT-4o' },
  { name: 'Crypto Chatting', tech: 'MERN, MongoDB, Express.js, React.js, Node.js, Web3' },
  { name: 'Mini Blockchain over LAN', tech: 'Python, MultiChain' },
  { name: 'Video Chatting Webapp - Omegle', tech: 'MERN, MongoDB, Express.js, React.js, Node.js, Next.js' },
];

const Projects = () => {
  const [filter, setFilter] = useState('');

  const filteredProjects = projectList.filter(project =>
    project.tech.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ResponsiveAppBar/>
      <Container>
        <Typography mt={20} variant="h3" component="h1" align="center" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" align="center" component="p" gutterBottom>
          Among various other projects, here are some notable mentions
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
    </div>
  );
};

export default Projects;
