import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TechCard from '../components/TechCard';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HistoryIcon from '@mui/icons-material/History';

export default function About() {
  const timelineEvents = [
    { date: 'February 2021', text: 'Channel started and first video uploaded.' },
    { date: 'September 2021', text: 'Hit the 500 subscriber milestone.' },
    { date: 'February 2022', text: 'Crossed 1,000 developers learning with us.' },
    { date: 'August 2022', text: 'Reached 2,000 subscribers.' },
    { date: 'Today', text: 'Approaching 5,000 subscribers and launching the agency to build software that grows businesses.' }
  ];

  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, mb: 4, lineHeight: 1.1 }}>
            The story behind<br />Digital Thinking.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary' }}>
            From teaching thousands of developers on YouTube to building scalable software for businesses.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            
            {/* Mission Card */}
            <TechCard>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <RocketLaunchIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />
                <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>Our Mission</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flexGrow: 1 }}>
                {/* Profile Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Box 
                    component="img" 
                    src="/profile.jpg" 
                    alt="Sandip Dolai" 
                    sx={{ 
                      width: 100, height: 100, borderRadius: '50%', objectFit: 'cover',
                      border: '2px solid rgba(37,99,235,0.5)',
                      boxShadow: '0 0 20px rgba(37,99,235,0.2)',
                      flexShrink: 0
                    }} 
                  />
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography variant="h5" sx={{ color: '#F1F5F9', fontWeight: 700, mb: 0.5 }}>Sandip Dolai</Typography>
                    <Typography variant="body2" sx={{ color: '#2563EB', fontWeight: 600 }}>Founder, Digital Thinking</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    I started the Digital Thinking YouTube channel on February 1, 2021. My goal was simple: to help developers and tech enthusiasts learn Software Engineering, Backend Development, and System Design by breaking down complex concepts practically.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Over the years, our learning community grew rapidly. But as I taught others how to build, I realized there was a massive gap in the market. Business owners needed the very systems I was teaching, but they didn't want to learn how to build them—they just wanted their businesses to run better.
                  </Typography>
                </Box>
              </Box>
            </TechCard>
            
            {/* Timeline Card */}
            <TechCard>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <HistoryIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />
                <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>Timeline</Typography>
              </Box>
              
              <Box sx={{ 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {timelineEvents.map((event, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 3, position: 'relative', pb: index !== timelineEvents.length - 1 ? 4 : 0 }}>
                    {/* Segmented Line */}
                    {index !== timelineEvents.length - 1 && (
                      <Box sx={{
                        position: 'absolute',
                        left: '5px', // 12px dot / 2 - 1px line = 5px
                        top: '20px', // Below the dot
                        bottom: '0px', // Stretches through the padding to the next dot
                        width: '2px',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        zIndex: 0
                      }} />
                    )}
                    
                    {/* Timeline Node (The glowing dot) */}
                    <Box sx={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      bgcolor: '#FFFFFF',
                      boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                      mt: '6px', // Align with the first line of text
                      flexShrink: 0,
                      zIndex: 1
                    }} />
                    
                    <Box>
                      <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
                        {event.date}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {event.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </TechCard>

          </Box>
        </Container>
      </Box>
    </Box>
  );
}
