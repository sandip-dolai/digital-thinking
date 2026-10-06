'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
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
    '50%':  { transform: 'translateY(-6px)' },
    '100%': { transform: 'translateY(0)' },
  },
};

export default function Learn() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [hoveredVid, setHoveredVid] = React.useState<number | null>(null);

  const categories = ['All', 'System Design', 'Backend', 'Databases', 'Interview Prep'];

  const videos = [
    {
      title: 'Rate Limiting Algorithms',
      desc: 'Learn how Token Bucket, Leaky Bucket, and Sliding Window algorithms work to protect your APIs from abuse.',
      category: 'System Design',
      duration: '14:23',
      color: '#3B82F6',
      bgGradient: 'linear-gradient(135deg, #2563EB, #60A5FA)'
    },
    {
      title: 'Django vs FastAPI',
      desc: 'Which Python framework should you choose for your next project? A detailed comparison of speed and developer experience.',
      category: 'Backend',
      duration: '18:05',
      color: '#A78BFA',
      bgGradient: 'linear-gradient(135deg, #7C3AED, #C4B5FD)'
    },
    {
      title: 'Database Indexing',
      desc: 'Under the hood of B-Trees and exactly why your SQL queries are running slow without them.',
      category: 'Databases',
      duration: '12:45',
      color: '#34D399',
      bgGradient: 'linear-gradient(135deg, #059669, #6EE7B7)'
    },
    {
      title: 'Arrays & Strings',
      desc: 'Step-by-step walkthrough of common array and string manipulation problems for technical interviews.',
      category: 'Interview Prep',
      duration: '22:10',
      color: '#F472B6',
      bgGradient: 'linear-gradient(135deg, #DB2777, #F9A8D4)'
    }
  ];

  return (
    <Box sx={shimmerBorder}>
      {/* ═══════════════════════════════════════════════════════════
          HERO  — Animated background & glowing elements
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ position: 'relative', pt: { xs: 22, md: 30 }, pb: { xs: 10, md: 16 }, overflow: 'hidden' }}>
        {/* Ambient meshes */}
        <Box sx={{ position: 'absolute', top: '-10%', left: '10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 15s ease-in-out infinite', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '-20%', right: '5%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(90px)', animation: 'float 12s ease-in-out infinite reverse', pointerEvents: 'none' }} />

        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 3, fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Open Source Education
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.8rem' }, mb: 4, lineHeight: 1.1 }}>
            Learn. Build.<br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #3B82F6, #A78BFA, #3B82F6)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'borderShimmer 4s linear infinite' }}>
              Think like an engineer.
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', mb: 6, maxWidth: 650, mx: 'auto', lineHeight: 1.6 }}>
            Join a community of developers learning backend engineering, system design, and practical software development for real-world applications.
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large" 
              href="https://www.youtube.com/@Digital-Thinking" 
              target="_blank" 
              startIcon={<YouTubeIcon />}
              sx={{ 
                py: 1.5, px: 4, 
                background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                border: '1px solid rgba(255,0,0,0.3)',
                boxShadow: '0 8px 24px rgba(255,0,0,0.25)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #FF3333 0%, #FF0000 100%)',
                  boxShadow: '0 12px 32px rgba(255,0,0,0.35)',
                  transform: 'translateY(-2px)'
                }
              }}>
              Subscribe on YouTube
            </Button>
            <Button variant="outlined" size="large" href="/ide" startIcon={<CodeIcon />} sx={{ py: 1.5, px: 4, borderColor: 'rgba(255,255,255,0.15)', '&:hover': { borderColor: 'rgba(255,255,255,0.3)' } }}>
              Python IDE
            </Button>
            <Button variant="outlined" size="large" href="/api-tester" startIcon={<TerminalIcon />} sx={{ py: 1.5, px: 4, borderColor: 'rgba(255,255,255,0.15)', '&:hover': { borderColor: 'rgba(255,255,255,0.3)' } }}>
              API Client
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          VIDEO GRID  — Categories & Shimmer Cards
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ pb: { xs: 12, md: 20 } }}>
        <Container maxWidth="lg">
          
          {/* Categories */}
          <Box sx={{ 
            display: 'flex', gap: 1.5, mb: 8, flexWrap: 'wrap', justifyContent: 'center',
            background: 'rgba(255,255,255,0.02)', p: 1, borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
            width: 'fit-content', mx: 'auto'
          }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <Button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  sx={{ 
                    px: 3, py: 1, borderRadius: '100px',
                    textTransform: 'none', fontWeight: isActive ? 600 : 500,
                    fontSize: '0.9rem',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                    background: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(37,99,235,0.3)' : 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: isActive ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.05)',
                      color: '#fff'
                    }
                  }}>
                  {cat}
                </Button>
              );
            })}
          </Box>

          {/* Videos Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {videos.filter(v => activeCategory === 'All' || v.category === activeCategory).map((vid, i) => {
              const isHovered = hoveredVid === i;
              
              return (
                <Box
                  key={i}
                  onMouseEnter={() => setHoveredVid(i)}
                  onMouseLeave={() => setHoveredVid(null)}
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    p: '1px',
                    background: isHovered ? vid.bgGradient : 'rgba(255,255,255,0.06)',
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'borderShimmer 3s linear infinite' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 20px 60px ${vid.color}15` : '0 4px 20px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                  }}
                >
                  <Box sx={{
                    p: 2.5,
                    borderRadius: '23px',
                    background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)',
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                  }}>
                    {/* Thumbnail placeholder */}
                    <Box sx={{ 
                      aspectRatio: '16/9', 
                      background: 'rgba(0,0,0,0.4)', 
                      borderRadius: '16px', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      mb: 3, position: 'relative', overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.03)',
                      '&::before': {
                        content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: `radial-gradient(circle at center, ${vid.color}15 0%, transparent 60%)`,
                        opacity: isHovered ? 1 : 0.3,
                        transition: 'opacity 0.4s ease'
                      }
                    }}>
                      {/* Play Button */}
                      <Box sx={{ 
                        width: 64, height: 64, borderRadius: '50%', 
                        background: 'rgba(255,255,255,0.08)', 
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        boxShadow: isHovered ? `0 0 30px ${vid.color}40` : 'none',
                        zIndex: 1
                      }}>
                        <PlayArrowIcon sx={{ fontSize: 32, color: isHovered ? '#fff' : 'rgba(255,255,255,0.8)', ml: 0.5 }} />
                      </Box>
                      
                      {/* Duration badge */}
                      <Box sx={{ 
                        position: 'absolute', bottom: 12, right: 12, 
                        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)',
                        px: 1.5, py: 0.5, borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)',
                        zIndex: 1
                      }}>
                        <Typography sx={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                          {vid.duration}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ px: 1, pb: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ 
                        color: vid.color, fontWeight: 700, fontSize: '0.7rem', 
                        textTransform: 'uppercase', letterSpacing: '0.12em', mb: 1.5 
                      }}>
                        {vid.category}
                      </Typography>
                      
                      <Typography variant="h4" sx={{ mb: 1.5, fontSize: '1.4rem', color: '#F1F5F9', fontWeight: 700, lineHeight: 1.3 }}>
                        {vid.title}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: '#94A3B8', mb: 4, flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {vid.desc}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                        <Typography sx={{ 
                          color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                          transition: 'color 0.3s', color: isHovered ? vid.color : '#fff'
                        }}>
                          Watch Video
                        </Typography>
                        <EastIcon sx={{ 
                          fontSize: 16, color: isHovered ? vid.color : '#fff',
                          transition: 'transform 0.3s',
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                        }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
