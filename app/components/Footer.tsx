import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)', pt: 8, pb: 4, mt: 'auto' }}>
      
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 3fr 4fr' }, gap: 4 }}>
          <Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
                Digital Thinking
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 350 }}>
              Learn to think like an engineer, and let us build the software that grows your business.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Email: <a href="mailto:digital.thinking@zohomail.in" style={{ color: '#00F0FF', textDecoration: 'none' }}>digital.thinking@zohomail.in</a>
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Services</Link>
              <Link href="/learn" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Learn</Link>
              <Link href="/about" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>About</Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>Join our Newsletter</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Get articles on system design, APIs, and backend development straight to your inbox.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField 
                variant="outlined" 
                placeholder="Email address" 
                size="small" 
                fullWidth
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.05)', 
                  borderRadius: '24px',
                  '& .MuiOutlinedInput-root': { borderRadius: '24px' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              />
              <Button variant="contained" disableElevation sx={{ minWidth: '100px' }}>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 8, pt: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', color: 'text.secondary' }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} Digital Thinking. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="https://www.youtube.com/@Digital-Thinking" target="_blank" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>YouTube</Link>
            <Link href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>LinkedIn</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
