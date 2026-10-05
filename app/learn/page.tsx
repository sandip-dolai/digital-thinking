import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TechCard from '../components/TechCard';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Learn() {
  const videos = [
    {
      title: 'Rate Limiting Algorithms',
      desc: 'Learn how Token Bucket, Leaky Bucket, and Sliding Window algorithms work to protect your APIs from abuse.',
      category: 'System Design',
      duration: '14:23'
    },
    {
      title: 'Django vs FastAPI',
      desc: 'Which Python framework should you choose for your next project? A detailed comparison of speed and developer experience.',
      category: 'Backend',
      duration: '18:05'
    },
    {
      title: 'Database Indexing',
      desc: 'Under the hood of B-Trees and exactly why your SQL queries are running slow without them.',
      category: 'Databases',
      duration: '12:45'
    },
    {
      title: 'Arrays & Strings',
      desc: 'Step-by-step walkthrough of common array and string manipulation problems for technical interviews.',
      category: 'Interview Prep',
      duration: '22:10'
    }
  ];

  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, mb: 4, lineHeight: 1.1 }}>
            Learn. Build.<br />Think like an engineer.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 6, color: 'text.secondary' }}>
            Join a community of developers learning backend engineering, system design, and practical software development.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="contained" size="large" href="https://www.youtube.com/@Digital-Thinking" target="_blank" sx={{ py: { xs: 1.5, md: 1.5 } }}>
              Subscribe on YouTube
            </Button>
            <Button variant="outlined" size="large" href="/ide" sx={{ py: { xs: 1.5, md: 1.5 } }}>
              Python Playground
            </Button>
            <Button variant="outlined" size="large" href="/api-tester" sx={{ py: { xs: 1.5, md: 1.5 } }}>
              API Client
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 2, mb: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['All', 'System Design', 'Backend', 'Databases', 'Interview Prep'].map((cat) => (
              <Button key={cat} variant={cat === 'All' ? 'contained' : 'outlined'} sx={{ px: 3 }}>
                {cat}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {videos.map((vid, i) => (
              <TechCard key={i} sx={{ p: 3 }}>
                <Box sx={{ 
                  aspectRatio: '16/9', 
                  bgcolor: 'rgba(0,0,0,0.5)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mb: 4,
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}>
                    <PlayArrowIcon sx={{ fontSize: 28, color: '#fff' }} />
                  </Box>
                  <Typography variant="caption" sx={{ position: 'absolute', bottom: 12, right: 12, color: '#fff', bgcolor: 'rgba(0,0,0,0.7)', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 600 }}>
                    {vid.duration}
                  </Typography>
                </Box>
                <Box sx={{ px: 2, pb: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600, mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {vid.category}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 2, fontSize: '1.5rem' }}>{vid.title}</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, flexGrow: 1 }}>{vid.desc}</Typography>
                  <Button variant="text" sx={{ alignSelf: 'flex-start', p: 0, color: '#FFFFFF', '&:hover': { bgcolor: 'transparent', opacity: 0.8 } }}>
                    Watch Video →
                  </Button>
                </Box>
              </TechCard>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
