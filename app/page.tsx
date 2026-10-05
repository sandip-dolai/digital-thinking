import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TechCard from './components/TechCard';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';

export default function Home() {
  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, 
              mb: 4, 
              maxWidth: '900px', 
              mx: 'auto',
              color: '#FFFFFF',
              lineHeight: 1.1
            }}
          >
            Software engineered for growth.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ mb: 6, maxWidth: '600px', mx: 'auto', fontSize: '1.25rem', color: 'text.secondary' }}
          >
            Learn system design with our community, or hire our agency to build scalable custom software for your business.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="contained" href="/contact" size="large" sx={{ py: { xs: 1.5, md: 1.5 } }}>
              Book a Discovery Call
            </Button>
            <Button variant="outlined" href="/learn" size="large" sx={{ py: { xs: 1.5, md: 1.5 } }}>
              Start Learning
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>High-Impact Engineering</Typography>
          <Typography variant="body1" sx={{ mb: 8, textAlign: 'center', maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
            We leverage modern stacks like Next.js, Node, and Python to build robust systems. No fluff, just scalable architecture.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {[
              {
                title: 'Modern Frontends',
                desc: 'Lightning fast React and Next.js applications with perfect Lighthouse scores and sleek UI/UX.',
                icon: <CodeIcon sx={{ fontSize: 32, color: '#FFFFFF', mb: 2 }} />
              },
              {
                title: 'Backend & APIs',
                desc: 'Scalable microservices, REST/GraphQL APIs, and robust database architectures built for heavy load.',
                icon: <StorageIcon sx={{ fontSize: 32, color: '#FFFFFF', mb: 2 }} />
              },
              {
                title: 'System Integration',
                desc: 'Connecting disparate systems, automating complex workflows, and deploying on cloud infrastructure.',
                icon: <ApiIcon sx={{ fontSize: 32, color: '#FFFFFF', mb: 2 }} />
              }
            ].map((service, index) => (
              <TechCard key={index}>
                {service.icon}
                <Typography variant="h4" sx={{ mb: 2, fontSize: '1.5rem', mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {service.desc}
                </Typography>
              </TechCard>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
