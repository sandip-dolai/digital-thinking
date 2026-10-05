'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Outfit } from 'next/font/google';

export const outfit = Outfit({ subsets: ['latin'], display: 'swap' });

let theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
    h1: { fontWeight: 800, letterSpacing: '-0.03em', color: '#FFFFFF', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em', color: '#FFFFFF' },
    h4: { fontWeight: 600, letterSpacing: '0em', color: '#FFFFFF' },
    body1: { color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.15rem', lineHeight: 1.6 },
    body2: { color: 'rgba(255, 255, 255, 0.6)' },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
  },
  palette: {
    mode: 'dark',
    primary: { main: '#0066FF' }, // Deep Tech Blue
    secondary: { main: '#8BA3C4' }, // Slate Blue-Grey
    background: { default: '#05050A', paper: '#0A0A0F' },
    divider: 'rgba(0, 102, 255, 0.15)', // Subtle blue divider
  },
  shape: { borderRadius: 24 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '12px 32px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: '#0066FF',
          color: '#FFFFFF',
          border: 'none',
          '&:hover': { 
            background: '#0052CC',
            boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        outlined: {
          borderColor: 'rgba(0, 102, 255, 0.3)',
          color: '#FFFFFF',
          background: 'rgba(0, 102, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&:hover': { 
            background: 'rgba(0, 102, 255, 0.15)', 
            borderColor: '#0066FF',
            boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)'
          },
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { 
          backgroundColor: '#030308',
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
