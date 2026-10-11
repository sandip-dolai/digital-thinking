'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';

const navItems = [
  { name: 'Home', path: '/', icon: HomeRoundedIcon },
  { name: 'Services', path: '/services', icon: LayersRoundedIcon },
  { name: 'Learn', path: '/learn', icon: AutoStoriesRoundedIcon },
  { name: 'About', path: '/about', icon: InfoRoundedIcon },
  { name: 'Contact', path: '/contact', icon: ChatBubbleOutlineRoundedIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      aria-label="Mobile Bottom Navigation"
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        height: 'calc(64px + env(safe-area-inset-bottom, 0px))',
        pb: 'env(safe-area-inset-bottom, 0px)',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: 'rgba(6, 10, 22, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);

        return (
          <Link
            key={item.name}
            href={item.path}
            style={{
              textDecoration: 'none',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              userSelect: 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                position: 'relative',
                transition: 'all 0.2s ease',
                color: isActive ? '#3B82F6' : 'rgba(255, 255, 255, 0.55)',
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
            >
              <IconComponent sx={{ fontSize: '1.4rem' }} />
              <Typography
                component="span"
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.01em',
                  color: 'inherit',
                  lineHeight: 1,
                }}
              >
                {item.name}
              </Typography>
              {isActive && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -6,
                    width: 18,
                    height: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, #2563EB, #3B82F6)',
                    boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                  }}
                />
              )}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
