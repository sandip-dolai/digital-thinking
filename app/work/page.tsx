import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TechCard from '../components/TechCard';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Work() {
  const caseStudies = [
    {
      title: 'Digital Thinking Platform',
      problem: 'Needed a central hub to convert YouTube viewers into agency clients without sacrificing performance.',
      solution: 'Built a lightning-fast static site using Next.js and a minimal modern design.',
      result: 'Unified brand identity with perfect 100 Lighthouse performance scores.'
    },
    {
      title: 'Local Clinic Booking',
      problem: 'Handling patient appointments over WhatsApp was chaotic and losing leads for a local clinic.',
      solution: 'Custom web dashboard with calendar integrations and automated SMS reminders via Twilio.',
      result: 'Reduced no-shows by 30% and saved 15 hours of manual admin work weekly.'
    }
  ];

  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, mb: 4, lineHeight: 1.1 }}>
            Results we've delivered.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary' }}>
            We don't just write code. We solve business problems. Here is how we've helped others scale their operations and grow.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {caseStudies.map((study, i) => (
              <TechCard key={i}>
                <Typography variant="h4" sx={{ mb: 4, fontSize: '1.5rem' }}>{study.title}</Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flexGrow: 1 }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <ErrorIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF' }}>The Problem</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{study.problem}</Typography>
                  </Box>
                  
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF' }}>The Solution</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{study.solution}</Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 'auto', pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <EmojiEventsIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF' }}>The Result</Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>{study.result}</Typography>
                </Box>
              </TechCard>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
