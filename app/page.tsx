import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TechCard from './components/TechCard';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  return (
    <Box>
      {/* Hero Section with Image */}
      <Box sx={{ position: 'relative', pt: { xs: 18, md: 24 }, pb: { xs: 10, md: 16 }, overflow: 'hidden' }}>
        {/* Hero background image with overlay */}
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0,
          backgroundImage: 'url(/hero-abstract.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          '&::after': {
            content: '""', position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(to top, #0A0F1E, transparent)'
          }
        }} />
        
        <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 3, display: 'block',
              fontSize: '0.85rem'
            }}
          >
            SOFTWARE ENGINEERING AGENCY
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, 
              mb: 3, 
              maxWidth: '900px', 
              mx: 'auto',
              lineHeight: 1.1
            }}
          >
            Software engineered<br />for growth.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ mb: 6, maxWidth: '600px', mx: 'auto', fontSize: '1.25rem', color: 'text.secondary' }}
          >
            Learn system design with our community, or hire our agency to build scalable custom software for your business.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="contained" href="/contact" size="large" endIcon={<ArrowForwardIcon />} sx={{ py: { xs: 1.5, md: 1.5 } }}>
              Book a Discovery Call
            </Button>
            <Button variant="outlined" href="/learn" size="large" sx={{ py: { xs: 1.5, md: 1.5 } }}>
              Start Learning
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ py: 6, borderTop: '1px solid rgba(37, 99, 235, 0.1)', borderBottom: '1px solid rgba(37, 99, 235, 0.1)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, textAlign: 'center' }}>
            {[
              { number: '5K+', label: 'Developers in Community' },
              { number: '100+', label: 'Videos Published' },
              { number: '15+', label: 'Projects Delivered' },
              { number: '100', label: 'Lighthouse Score' }
            ].map((stat, i) => (
              <Box key={i}>
                <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#2563EB' }}>{stat.number}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Dashboard Showcase */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block' }}>
                WHAT WE BUILD
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
                Custom dashboards<br />that drive decisions.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                From analytics platforms to internal tools, we design and build production-ready systems that help businesses operate faster and smarter.
              </Typography>
              <Button variant="outlined" href="/work" endIcon={<ArrowForwardIcon />}>
                View Case Studies
              </Button>
            </Box>
            <Box sx={{ 
              borderRadius: '24px', overflow: 'hidden', 
              border: '1px solid rgba(37, 99, 235, 0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              position: 'relative',
              '&::before': {
                content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 50%)',
                zIndex: 1, pointerEvents: 'none'
              }
            }}>
              <Box component="img" src="/dashboard-mockup.jpg" alt="Dashboard Preview" sx={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block' }}>
              CAPABILITIES
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>High-Impact Engineering</Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
              We leverage modern stacks like Next.js, Node, and Python to build robust systems. No fluff, just scalable architecture.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {[
              {
                title: 'Modern Frontends',
                desc: 'Lightning fast React and Next.js applications with perfect Lighthouse scores and sleek UI/UX.',
                icon: <CodeIcon sx={{ fontSize: 32, color: '#2563EB' }} />
              },
              {
                title: 'Backend & APIs',
                desc: 'Scalable microservices, REST/GraphQL APIs, and robust database architectures built for heavy load.',
                icon: <StorageIcon sx={{ fontSize: 32, color: '#2563EB' }} />
              },
              {
                title: 'System Integration',
                desc: 'Connecting disparate systems, automating complex workflows, and deploying on cloud infrastructure.',
                icon: <ApiIcon sx={{ fontSize: 32, color: '#2563EB' }} />
              }
            ].map((service, index) => (
              <TechCard key={index}>
                <Box sx={{ 
                  width: 56, height: 56, borderRadius: '16px', 
                  background: 'rgba(37, 99, 235, 0.1)', 
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h4" sx={{ mb: 2, fontSize: '1.5rem' }}>
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

      {/* Code Visual + Learn CTA */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ 
              borderRadius: '24px', overflow: 'hidden', 
              border: '1px solid rgba(37, 99, 235, 0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              order: { xs: 2, md: 1 }
            }}>
              <Box component="img" src="/code-visual.jpg" alt="Code Editor" sx={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ order: { xs: 1, md: 2 } }}>
              <Typography variant="overline" sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block' }}>
                LEARN WITH US
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
                Think like an<br />engineer.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Join our YouTube community and learn backend engineering, system design, and practical software development through real-world projects.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" href="/learn" endIcon={<ArrowForwardIcon />}>
                  Start Learning
                </Button>
                <Button variant="outlined" href="/ide">
                  Python Playground
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box sx={{ 
        py: { xs: 10, md: 12 }, 
        background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 100%)',
        borderTop: '1px solid rgba(37,99,235,0.1)',
        borderBottom: '1px solid rgba(37,99,235,0.1)'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
            Ready to build something great?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 500, mx: 'auto' }}>
            Whether you need a custom platform, a workflow overhaul, or a fresh web presence — let's talk.
          </Typography>
          <Button variant="contained" href="/contact" size="large" endIcon={<ArrowForwardIcon />} sx={{ py: 2, px: 5 }}>
            Book a Free Discovery Call
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
