import * as React from 'react';
import Box from '@mui/material/Box';

interface TechCardProps {
  children: React.ReactNode;
  sx?: object;
}

export default function TechCard({ children, sx = {} }: TechCardProps) {
  return (
    <Box sx={{
      p: { xs: 3, md: 4 },
      height: '100%',
      borderRadius: '32px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      borderLeft: '1px solid rgba(255,255,255,0.15)',
      boxShadow: '0 8px 32px 0 rgba(0,0,0,0.3)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0, left: '-100%', width: '50%', height: '100%',
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
        transform: 'skewX(-20deg)',
        transition: 'all 0.7s ease',
      },
      '&:hover': {
        borderColor: 'rgba(37, 99, 235, 0.5)',
        boxShadow: '0 15px 45px rgba(37, 99, 235, 0.12)',
        transform: 'translateY(-4px)',
        '&::before': {
          left: '200%'
        }
      },
      ...sx
    }}>
      {children}
    </Box>
  );
}
