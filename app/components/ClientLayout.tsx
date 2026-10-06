'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import theme from '../theme';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ 'html, body': { overflowX: 'hidden', maxWidth: '100vw' } }} />
      
      {/* Midnight Sapphire Ambient Background */}
      <Box sx={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden',
        background: 'linear-gradient(180deg, #060A16 0%, #0A0F1E 50%, #060A16 100%)',
      }}>
        <Box sx={{
          position: 'absolute', top: '-15%', left: '-10%', width: '55vw', height: '55vw',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          animation: 'float 20s infinite ease-in-out alternate',
          '@keyframes float': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(15%, 20%)' }
          }
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-15%', right: '-10%', width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
          animation: 'float2 25s infinite ease-in-out alternate',
          '@keyframes float2': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(-15%, -20%)' }
          }
        }} />
        <Box sx={{
          position: 'absolute', top: '30%', right: '15%', width: '35vw', height: '35vw',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(100px)',
          animation: 'float3 18s infinite ease-in-out alternate',
          '@keyframes float3': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(-20%, 10%)' }
          }
        }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', position: 'relative', zIndex: 1 }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
