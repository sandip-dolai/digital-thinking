import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface OSWindowProps {
  title: string;
  children: React.ReactNode;
  sx?: object;
}

export default function OSWindow({ title, children, sx = {} }: OSWindowProps) {
  return (
    <Box sx={{ 
      border: '1px solid rgba(255,255,255,0.1)', 
      bgcolor: 'rgba(30, 30, 35, 0.65)', 
      backdropFilter: 'blur(20px)', 
      display: 'flex', 
      flexDirection: 'column',
      boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
      borderRadius: '16px',
      overflow: 'hidden',
      ...sx 
    }}>
      {/* Title Bar (macOS style) */}
      <Box sx={{ 
        bgcolor: 'rgba(255,255,255,0.03)', 
        px: 2, 
        py: 1.5, 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Window Controls */}
        <Box sx={{ display: 'flex', gap: 1, position: 'absolute', left: 16 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FF5F56' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27C93F' }} />
        </Box>
        {/* Title */}
        <Typography variant="body2" sx={{ 
          fontWeight: 600, 
          color: 'text.secondary', 
          width: '100%',
          textAlign: 'center',
          fontSize: '0.85rem'
        }}>
          {title}
        </Typography>
      </Box>
      {/* Content */}
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
    </Box>
  );
}
