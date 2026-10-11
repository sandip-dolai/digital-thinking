'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)', pt: { xs: 6, md: 8 }, pb: 4, mt: 'auto' }}>
      
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '4fr 2fr 2.5fr 3.5fr' }, gap: 4 }}>
          <Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                Digital Thinking
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 350, lineHeight: 1.6 }}>
              Learn to think like an engineer, and let us build the software that grows your business.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Email: <a href="mailto:digital.thinking@zohomail.in" style={{ color: '#00F0FF', textDecoration: 'none' }}>digital.thinking@zohomail.in</a>
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Navigation</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Link href="/services" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>Services</Link>
              <Link href="/learn" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>Learn</Link>
              <Link href="/about" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>About</Link>
              <Link href="/contact" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>Contact</Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Dev Tools</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Link href="/ide" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>Python IDE</Link>
              <Link href="/api-tester" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>API Tester</Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Newsletter</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.88rem' }}>
              System design and engineering insights directly to your inbox.
            </Typography>
            {subscribed ? (
              <Box sx={{ p: 1.5, borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                <Typography variant="body2" sx={{ color: '#4ADE80', fontWeight: 600 }}>
                  ✓ Subscribed! Thanks for joining.
                </Typography>
              </Box>
            ) : (
              <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', gap: 1 }}>
                <TextField 
                  variant="outlined" 
                  placeholder="Email address" 
                  size="small" 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    borderRadius: '24px',
                    '& .MuiOutlinedInput-root': { borderRadius: '24px', color: '#fff' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.1)' }
                  }}
                />
                <Button type="submit" variant="contained" disableElevation sx={{ minWidth: '95px', px: 2 }}>
                  Join
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: { xs: 6, md: 8 }, pt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2, color: 'text.secondary' }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} Digital Thinking. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="https://www.youtube.com/@Digital-Thinking" target="_blank" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>YouTube</Link>
            <Link href="https://github.com" target="_blank" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>GitHub</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
