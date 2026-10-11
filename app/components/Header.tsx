'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Learn', path: '/learn' },
    { name: 'About', path: '/about' },
  ];

  return (
    <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none', pt: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              Digital Thinking
            </Typography>
          </Link>

          {/* Desktop Nav */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 1, 
            alignItems: 'center', 
            background: 'rgba(10,10,15,0.6)', 
            backdropFilter: 'blur(30px)',
            p: 1, 
            borderRadius: '100px', 
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
          }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link key={link.name} href={link.path} style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    px: 3.5, py: 1.5, borderRadius: '100px',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                    fontWeight: 600, fontSize: '0.95rem',
                    transition: 'all 0.3s',
                    border: isActive ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                    boxShadow: isActive ? '0 0 15px rgba(255,255,255,0.05)' : 'none',
                    '&:hover': { color: '#FFFFFF' }
                  }}>
                    {link.name}
                  </Box>
                </Link>
              );
            })}
          </Box>

          {/* Desktop Button */}
          <Button variant="contained" href="/contact" sx={{ px: 4, display: { xs: 'none', md: 'block' } }}>
            Get in touch
          </Button>

          {/* Mobile YouTube Channel Redirect Button */}
          <IconButton 
            component="a"
            href="https://www.youtube.com/@Digital-Thinking"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: '#FF0000',
              background: 'rgba(255, 0, 0, 0.1)',
              border: '1px solid rgba(255, 0, 0, 0.25)',
              backdropFilter: 'blur(10px)',
              p: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255, 0, 0, 0.2)',
                boxShadow: '0 0 16px rgba(255, 0, 0, 0.45)',
                transform: 'scale(1.05)'
              }
            }}
          >
            <YouTubeIcon sx={{ fontSize: '1.6rem' }} />
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
