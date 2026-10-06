'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import EastIcon from '@mui/icons-material/East';

/* ─── Shared animated-border keyframes ─── */
const shimmerBorder = {
  '@keyframes borderShimmer': {
    '0%':   { backgroundPosition: '0% 50%' },
    '50%':  { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes float': {
    '0%':   { transform: 'translateY(0)' },
    '50%':  { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
  '@keyframes pulseGlow': {
    '0%, 100%': { opacity: 0.5 },
    '50%':      { opacity: 0.8 },
  },
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  const capabilities = [
    {
      title: 'Modern Frontends',
      desc: 'Lightning fast React and Next.js applications with perfect Lighthouse scores and sleek UI/UX.',
      icon: <CodeIcon sx={{ fontSize: 28 }} />,
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)'
    },
    {
      title: 'Backend & APIs',
      desc: 'Scalable microservices, REST/GraphQL APIs, and robust database architectures built for heavy load.',
      icon: <StorageIcon sx={{ fontSize: 28 }} />,
      color: '#A78BFA',
      gradient: 'linear-gradient(135deg, #7C3AED, #C4B5FD)'
    },
    {
      title: 'System Integration',
      desc: 'Connecting disparate systems, automating complex workflows, and deploying on cloud infrastructure.',
      icon: <ApiIcon sx={{ fontSize: 28 }} />,
      color: '#34D399',
      gradient: 'linear-gradient(135deg, #059669, #6EE7B7)'
    }
  ];

  return (
    <Box sx={shimmerBorder}>
      {/* ═══════════════════════════════════════════════════════════
          HERO  — Animated background, glass stats, gradient text
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ position: 'relative', pt: { xs: 22, md: 30 }, pb: { xs: 12, md: 16 }, overflow: 'hidden' }}>
        {/* Ambient background meshes */}
        <Box sx={{ position: 'absolute', top: '-15%', left: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 12s ease-in-out infinite', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '0', right: '-10%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(90px)', animation: 'float 16s ease-in-out infinite reverse', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 3, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Software Engineering Agency & Community
          </Typography>
          
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' }, mb: 4, maxWidth: '1000px', mx: 'auto', lineHeight: 1.05, fontWeight: 800 }}>
            Software engineered<br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #2563EB, #A78BFA, #34D399, #2563EB)', backgroundSize: '300% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'borderShimmer 6s linear infinite' }}>
              for growth.
            </Box>
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, maxWidth: '650px', mx: 'auto', fontSize: '1.2rem', color: 'text.secondary', lineHeight: 1.7 }}>
            Learn system design with our community, or hire our agency to build scalable custom software for your business.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 10 }}>
            <Button variant="contained" href="/contact" size="large" endIcon={<ArrowForwardIcon />} sx={{ py: 1.5, px: 5 }}>
              Book a Discovery Call
            </Button>
            <Button variant="outlined" href="/learn" size="large" sx={{ py: 1.5, px: 5, borderColor: 'rgba(255,255,255,0.15)', '&:hover': { borderColor: 'rgba(255,255,255,0.3)' } }}>
              Start Learning
            </Button>
          </Box>

          {/* Floating Glass Stats Bar */}
          <Box sx={{ 
            display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2,
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            p: 4,
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          }}>
            {[
              { number: '5K+', label: 'Developers in Community' },
              { number: '100+', label: 'Videos Published' },
              { number: '15+', label: 'Projects Delivered' },
              { number: '100', label: 'Lighthouse Score' }
            ].map((stat, i) => (
              <Box key={i} sx={{ position: 'relative', '&:not(:last-child)::after': { content: '""', position: 'absolute', right: 0, top: '20%', bottom: '20%', width: '1px', background: 'rgba(255,255,255,0.05)', display: { xs: 'none', md: 'block' } } }}>
                <Typography sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#fff', mb: 0.5 }}>{stat.number}</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 500 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          SHOWCASE SECTION — Split layout with glowing images
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' }, gap: { xs: 6, md: 10 }, alignItems: 'center' }}>
            <Box>
              <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                What We Build
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1 }}>
                Custom dashboards<br />that drive decisions.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}>
                From analytics platforms to internal tools, we design and build production-ready systems that help businesses operate faster and smarter.
              </Typography>
              <Button variant="outlined" href="/services" endIcon={<EastIcon sx={{ fontSize: 18 }} />} sx={{ py: 1.5, px: 4, borderRadius: '100px' }}>
                Explore Capabilities
              </Button>
            </Box>
            
            {/* Glowing Image Box */}
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', background: '#2563EB', filter: 'blur(80px)', opacity: 0.2, animation: 'pulseGlow 6s infinite' }} />
              <Box sx={{ 
                borderRadius: '24px', overflow: 'hidden', position: 'relative', zIndex: 1,
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                transition: 'transform 0.5s ease',
                '&:hover': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' }
              }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
                <Box component="img" src="/dashboard-mockup.jpg" alt="Dashboard Preview" sx={{ width: '100%', display: 'block' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          CAPABILITIES GRID — Shimmer Border Cards
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 }, background: 'linear-gradient(180deg, rgba(10,15,30,0) 0%, rgba(37,99,235,0.03) 50%, rgba(10,15,30,0) 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Capabilities
            </Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>High-Impact Engineering</Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary', fontSize: '1.1rem' }}>
              We leverage modern stacks like Next.js, Node, and Python to build robust systems. No fluff, just scalable architecture.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3.5 }}>
            {capabilities.map((service, index) => {
              const isHovered = hoveredCard === index;
              return (
                <Box
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    position: 'relative', borderRadius: '24px', p: '1px',
                    background: isHovered ? service.gradient : 'rgba(255,255,255,0.06)',
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'borderShimmer 3s linear infinite' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 20px 40px ${service.color}15` : '0 4px 20px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  <Box sx={{
                    p: { xs: 4, md: 5 }, borderRadius: '23px', height: '100%',
                    background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)',
                    display: 'flex', flexDirection: 'column',
                  }}>
                    <Box sx={{ 
                      width: 56, height: 56, borderRadius: '16px', mb: 4,
                      background: `${service.color}15`, 
                      border: `1px solid ${service.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: service.color,
                      transition: 'all 0.3s ease',
                      ...(isHovered && { transform: 'scale(1.1)', boxShadow: `0 0 20px ${service.color}25`, background: `${service.color}25` })
                    }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h4" sx={{ mb: 2, fontSize: '1.4rem', color: '#F1F5F9', fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#94A3B8', lineHeight: 1.6 }}>
                      {service.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          LEARN SECTION — Split layout reversed
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'center' }}>
            {/* Glowing Image Box */}
            <Box sx={{ position: 'relative', order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', background: '#A78BFA', filter: 'blur(80px)', opacity: 0.15, animation: 'pulseGlow 7s infinite reverse' }} />
              <Box sx={{ 
                borderRadius: '24px', overflow: 'hidden', position: 'relative', zIndex: 1,
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                transform: 'perspective(1000px) rotateY(5deg) rotateX(2deg)',
                transition: 'transform 0.5s ease',
                '&:hover': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' }
              }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
                <Box component="img" src="/code-visual.jpg" alt="Code Editor" sx={{ width: '100%', display: 'block' }} />
              </Box>
            </Box>

            <Box sx={{ order: { xs: 1, md: 2 } }}>
              <Typography sx={{ color: '#A78BFA', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Learn With Us
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1 }}>
                Think like an<br />engineer.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Join our YouTube community and learn backend engineering, system design, and practical software development through real-world projects.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" href="/learn" endIcon={<EastIcon />} sx={{ py: 1.5, px: 4, background: '#7C3AED', '&:hover': { background: '#6D28D9' } }}>
                  Start Learning
                </Button>
                <Button variant="outlined" href="/ide" sx={{ py: 1.5, px: 4 }}>
                  Python Playground
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ 
        py: { xs: 12, md: 16 }, 
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 100%)',
        borderTop: '1px solid rgba(37,99,235,0.15)',
        borderBottom: '1px solid rgba(37,99,235,0.1)'
      }}>
        {/* Glow */}
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '80vw', height: '80vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800 }}>
            Ready to build<br />something great?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, maxWidth: 500, mx: 'auto', fontSize: '1.15rem' }}>
            Whether you need a custom platform, a workflow overhaul, or a fresh web presence — let's talk.
          </Typography>
          <Button variant="contained" href="/contact" size="large" endIcon={<ArrowForwardIcon />} sx={{ py: 2, px: 6, fontSize: '1.05rem', borderRadius: '100px' }}>
            Book a Free Discovery Call
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
