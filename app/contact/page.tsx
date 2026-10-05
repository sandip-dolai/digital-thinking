import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TechCard from '../components/TechCard';

export default function Contact() {
  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, mb: 4, lineHeight: 1.1 }}>
            Let's talk about<br/>your project.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary' }}>
            Book a free discovery call below or send a message. We typically respond within 24 hours.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {/* Left Column: Form */}
            <TechCard>
              <Typography variant="h4" sx={{ mb: 4, fontSize: '1.5rem' }}>Send a Message</Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1 }}>
                <TextField 
                  label="Name" 
                  variant="outlined" 
                  fullWidth 
                  required
                  sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}
                />
                <TextField 
                  label="Email" 
                  type="email" 
                  variant="outlined" 
                  fullWidth 
                  required
                  sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}
                />
                <TextField 
                  label="Project Details" 
                  variant="outlined" 
                  multiline 
                  rows={6} 
                  fullWidth 
                  required
                  sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}
                />
                <Button variant="contained" size="large" sx={{ mt: 2 }}>
                  Send Message
                </Button>
              </Box>
              <Typography variant="body2" sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', color: 'text.secondary' }}>
                Or email directly at: <a href="mailto:digital.thinking@zohomail.in" style={{ color: '#00F0FF', textDecoration: 'none' }}>digital.thinking@zohomail.in</a>
              </Typography>
            </TechCard>

            {/* Right Column: Cal.com Placeholder */}
            <TechCard sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: '1.5rem' }}>Schedule a Call</Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                Select a 30-minute slot that works for you. We'll discuss your goals and see if custom software is the right fit.
              </Typography>
              <Box sx={{ flexGrow: 1, width: '100%', minHeight: '350px', bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.2)' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Cal.com Widget Area</Typography>
              </Box>
            </TechCard>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
