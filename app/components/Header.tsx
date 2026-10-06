'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

          {/* Mobile Menu Icon */}
          <IconButton 
            color="inherit" 
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </Container>

      {/* Mobile Full-Screen Overlay */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%', 
            height: '100vh', 
            background: 'rgba(5, 5, 10, 0.98)', 
            backdropFilter: 'blur(30px)',
            p: 4,
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Digital Thinking
          </Typography>
          <IconButton color="inherit" onClick={() => setMobileOpen(false)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <ListItem key={link.name} disablePadding sx={{ width: 'auto' }}>
                <Link href={link.path} style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }} onClick={() => setMobileOpen(false)}>
                  <Box sx={{
                    fontSize: '2rem',
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                    fontWeight: 700,
                    transition: 'color 0.3s',
                    '&:hover': { color: '#FFFFFF' }
                  }}>
                    {link.name}
                  </Box>
                </Link>
              </ListItem>
            );
          })}
          <ListItem disablePadding sx={{ mt: 4, width: '100%', justifyContent: 'center' }}>
            <Button variant="contained" href="/contact" size="large" onClick={() => setMobileOpen(false)} sx={{ py: 2, px: 6, fontSize: '1.2rem', borderRadius: '100px' }}>
              Get in touch
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
