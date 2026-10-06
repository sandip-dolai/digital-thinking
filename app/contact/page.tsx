'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

/* ─── Shared animated-border keyframes ─── */
const contactThemeStyles = {
  '@keyframes borderShimmer': {
    '0%':   { backgroundPosition: '0% 50%' },
    '50%':  { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes pulseGlow': {
    '0%, 100%': { opacity: 0.5 },
    '50%':      { opacity: 0.8 },
  },
};

export default function Contact() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  // Common styles for TextFields
  const inputSx = {
    bgcolor: 'rgba(255,255,255,0.02)',
    borderRadius: '12px',
    input: { color: '#E2E8F0', py: 2 },
    textarea: { color: '#E2E8F0' },
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
      '&:hover fieldset': { borderColor: 'rgba(37,99,235,0.4)' },
      '&.Mui-focused fieldset': { borderColor: '#3B82F6', borderWidth: '2px' },
    },
    '& .MuiInputLabel-root': {
      color: '#64748B',
      '&.Mui-focused': { color: '#3B82F6' },
    }
  };

  return (
    <Box sx={contactThemeStyles}>
      
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ position: 'relative', pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 12 }, overflow: 'hidden' }}>
        {/* Ambient glows */}
        <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'pulseGlow 10s infinite' }} />
        <Box sx={{ position: 'absolute', top: '20%', right: '10%', width: '35vw', height: '35vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', animation: 'pulseGlow 12s infinite reverse' }} />

        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 3, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Get in touch
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' }, mb: 4, lineHeight: 1.05, fontWeight: 800 }}>
            Let's talk about<br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #3B82F6, #A78BFA, #3B82F6)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'borderShimmer 4s linear infinite' }}>
              your project.
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Book a free discovery call directly on our calendar, or send us a message below. We typically respond within 24 hours.
          </Typography>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT CARDS
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ pb: { xs: 12, md: 20 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            
            {/* ─── Left Column: Direct Message Form ─── */}
            <Box
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                position: 'relative', borderRadius: '24px', p: '1px',
                background: hoveredCard === 0 ? 'linear-gradient(135deg, #2563EB, #60A5FA)' : 'rgba(255,255,255,0.06)',
                backgroundSize: '200% 200%',
                animation: hoveredCard === 0 ? 'borderShimmer 3s linear infinite' : 'none',
                transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: hoveredCard === 0 ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 0 ? '0 20px 60px rgba(37,99,235,0.15)' : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <Box sx={{
                p: { xs: 4, md: 5 }, borderRadius: '23px', height: '100%',
                background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)',
                display: 'flex', flexDirection: 'column',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: '14px', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                    <EmailOutlinedIcon />
                  </Box>
                  <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#F1F5F9' }}>Send a Message</Typography>
                </Box>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1 }}>
                  <TextField label="Name" variant="outlined" fullWidth required sx={inputSx} />
                  <TextField label="Email" type="email" variant="outlined" fullWidth required sx={inputSx} />
                  <TextField label="Project Details" variant="outlined" multiline rows={5} fullWidth required sx={inputSx} />
                  
                  <Button 
                    variant="contained" 
                    size="large" 
                    endIcon={<SendIcon />}
                    sx={{ 
                      mt: 2, py: 1.5, borderRadius: '12px',
                      background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                      boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
                      '&:hover': { background: 'linear-gradient(135deg, #1D4ED8, #4338CA)', boxShadow: '0 12px 32px rgba(37,99,235,0.35)' }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>

                <Box sx={{ mt: 5, pt: 4, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Typography variant="body2" sx={{ color: '#64748B' }}>Or email directly at:</Typography>
                  <Typography component="a" href="mailto:digital.thinking@zohomail.in" sx={{ color: '#3B82F6', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    digital.thinking@zohomail.in
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* ─── Right Column: Calendar Booking ─── */}
            <Box
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                position: 'relative', borderRadius: '24px', p: '1px',
                background: hoveredCard === 1 ? 'linear-gradient(135deg, #7C3AED, #C4B5FD)' : 'rgba(255,255,255,0.06)',
                backgroundSize: '200% 200%',
                animation: hoveredCard === 1 ? 'borderShimmer 3s linear infinite' : 'none',
                transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: hoveredCard === 1 ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 1 ? '0 20px 60px rgba(124,58,237,0.15)' : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <Box sx={{
                p: { xs: 4, md: 5 }, borderRadius: '23px', height: '100%',
                background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, alignSelf: 'flex-start' }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: '14px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A78BFA' }}>
                    <EventAvailableOutlinedIcon />
                  </Box>
                  <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#F1F5F9' }}>Schedule a Call</Typography>
                </Box>

                <Typography variant="body1" sx={{ color: '#94A3B8', mb: 5, alignSelf: 'flex-start', lineHeight: 1.6 }}>
                  Select a 30-minute slot that works for you. We'll discuss your goals and see if custom software is the right fit. No pressure, just strategy.
                </Typography>

                {/* Cal.com Placeholder Area */}
                <Box sx={{ 
                  flexGrow: 1, width: '100%', minHeight: '380px', 
                  background: 'rgba(0,0,0,0.2)', 
                  borderRadius: '16px', 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
                  border: '1px dashed rgba(124,58,237,0.3)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  {/* Glowing core */}
                  <Box sx={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 60%)', filter: 'blur(30px)' }} />
                  
                  <EventAvailableOutlinedIcon sx={{ fontSize: 48, color: 'rgba(124,58,237,0.4)', mb: 2, zIndex: 1 }} />
                  <Typography sx={{ color: '#64748B', fontWeight: 600, zIndex: 1 }}>Cal.com Widget Area</Typography>
                  <Typography variant="caption" sx={{ color: '#475569', mt: 1, zIndex: 1 }}>(Embed script goes here)</Typography>
                </Box>

              </Box>
            </Box>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
