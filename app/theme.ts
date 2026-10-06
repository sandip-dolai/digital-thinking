'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Outfit } from 'next/font/google';

export const outfit = Outfit({ subsets: ['latin'], display: 'swap' });

let theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
    h1: { fontWeight: 800, letterSpacing: '-0.03em', color: '#F1F5F9', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', color: '#F1F5F9' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em', color: '#E2E8F0' },
    h4: { fontWeight: 600, letterSpacing: '0em', color: '#E2E8F0' },
    body1: { color: '#94A3B8', fontSize: '1.15rem', lineHeight: 1.7 },
    body2: { color: '#64748B' },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
  },
  palette: {
    mode: 'dark',
    primary: { main: '#2563EB' },       // Electric Blue
    secondary: { main: '#94A3B8' },     // Slate Grey
    background: { default: '#0A0F1E', paper: '#111827' },  // Deep Navy
    divider: 'rgba(37, 99, 235, 0.12)',
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    }
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '12px 32px',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
          color: '#FFFFFF',
          border: '1px solid rgba(37, 99, 235, 0.3)',
          '&:hover': { 
            background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            boxShadow: '0 4px 24px rgba(37, 99, 235, 0.35)',
            transform: 'translateY(-1px)'
          },
        },
        outlined: {
          borderColor: 'rgba(148, 163, 184, 0.2)',
          color: '#E2E8F0',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          '&:hover': { 
            background: 'rgba(37, 99, 235, 0.08)', 
            borderColor: 'rgba(37, 99, 235, 0.5)',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.15)'
          },
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { 
          backgroundColor: '#060A16',
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
