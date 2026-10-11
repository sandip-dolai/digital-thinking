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
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', email: '', details: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', details: '' });
    }, 700);
  };

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
      <Box sx={{ position: 'relative', pt: { xs: 13, sm: 18, md: 26 }, pb: { xs: 8, md: 12 }, overflow: 'hidden' }}>
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
            Send us a message below or mail us directly. We typically respond within 24 hours.
          </Typography>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT CARDS
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ pb: { xs: 8, md: 16 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: { xs: 3, md: 4 },
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            
            {/* ─── Left Column: Direct Message Form ─── */}
            <Box
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                position: 'relative', 
                borderRadius: { xs: '20px', md: '24px' }, 
                p: '1px',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                background: hoveredCard === 0 ? 'linear-gradient(135deg, #2563EB, #60A5FA)' : 'rgba(255,255,255,0.06)',
                backgroundSize: '200% 200%',
                animation: hoveredCard === 0 ? 'borderShimmer 3s linear infinite' : 'none',
                transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: hoveredCard === 0 ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 0 ? '0 20px 60px rgba(37,99,235,0.15)' : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <Box sx={{
                p: { xs: 2.5, sm: 3.5, md: 5 }, 
                borderRadius: { xs: '19px', md: '23px' }, 
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)',
                display: 'flex', 
                flexDirection: 'column',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 3, md: 4 } }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', flexShrink: 0 }}>
                    <EmailOutlinedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, fontWeight: 700, color: '#F1F5F9' }}>
                    Send a Message
                  </Typography>
                </Box>

                {submitted ? (
                  <Box sx={{
                    p: { xs: 3, md: 4 }, my: 'auto', textAlign: 'center', borderRadius: '16px',
                    background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}>
                    <Typography variant="h5" sx={{ color: '#4ADE80', fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                      Message Received!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#94A3B8', mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </Typography>
                    <Button variant="outlined" onClick={() => setSubmitted(false)} sx={{ borderRadius: '100px' }}>
                      Send Another Message
                    </Button>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, flexGrow: 1, width: '100%' }}>
                    <TextField 
                      label="Name" 
                      variant="outlined" 
                      fullWidth 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      sx={inputSx} 
                    />
                    <TextField 
                      label="Email" 
                      type="email" 
                      variant="outlined" 
                      fullWidth 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      sx={inputSx} 
                    />
                    <TextField 
                      label="Project Details" 
                      variant="outlined" 
                      multiline 
                      rows={4} 
                      fullWidth 
                      required 
                      value={formData.details}
                      onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                      sx={inputSx} 
                    />
                    
                    <Button 
                      type="submit"
                      variant="contained" 
                      size="large" 
                      disabled={isSubmitting}
                      endIcon={<SendIcon />}
                      sx={{ 
                        mt: 1, py: 1.5, borderRadius: '12px',
                        background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                        boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
                        '&:hover': { background: 'linear-gradient(135deg, #1D4ED8, #4338CA)', boxShadow: '0 12px 32px rgba(37,99,235,0.35)' }
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Box>
                )}

                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 0.75, textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>Or email directly at:</Typography>
                  <Typography component="a" href="mailto:digital.thinking@zohomail.in" sx={{ color: '#3B82F6', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem', wordBreak: 'break-all', '&:hover': { textDecoration: 'underline' } }}>
                    digital.thinking@zohomail.in
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* ─── Right Column: Direct Mail Card ─── */}
            <Box
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                position: 'relative', 
                borderRadius: { xs: '20px', md: '24px' }, 
                p: '1px',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                background: hoveredCard === 1 ? 'linear-gradient(135deg, #7C3AED, #C4B5FD)' : 'rgba(255,255,255,0.06)',
                backgroundSize: '200% 200%',
                animation: hoveredCard === 1 ? 'borderShimmer 3s linear infinite' : 'none',
                transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: hoveredCard === 1 ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 1 ? '0 20px 60px rgba(124,58,237,0.15)' : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <Box sx={{
                p: { xs: 2.5, sm: 3.5, md: 5 }, 
                borderRadius: { xs: '19px', md: '23px' }, 
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 2, md: 3 }, alignSelf: 'flex-start' }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A78BFA', flexShrink: 0 }}>
                    <EmailOutlinedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, fontWeight: 700, color: '#F1F5F9' }}>
                    Mail Us Directly
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: '#94A3B8', mb: 3, alignSelf: 'flex-start', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  Prefer writing via your own email client? Send us your requirements, project brief, or questions directly to our inbox.
                </Typography>

                {/* Direct Mail Box */}
                <Box sx={{ 
                  flexGrow: 1, 
                  width: '100%', 
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  minHeight: { xs: '260px', md: '340px' }, 
                  background: 'rgba(0,0,0,0.25)', 
                  borderRadius: '16px', 
                  p: { xs: 2.5, sm: 3.5 },
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textAlign: 'center',
                  border: '1px solid rgba(124,58,237,0.25)',
                  position: 'relative', 
                  overflow: 'hidden'
                }}>
                  {/* Glowing core */}
                  <Box sx={{ position: 'absolute', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)', filter: 'blur(35px)', pointerEvents: 'none' }} />
                  
                  <EmailOutlinedIcon sx={{ fontSize: { xs: 40, md: 52 }, color: '#A78BFA', mb: 1.5, zIndex: 1 }} />
                  <Typography variant="h6" sx={{ color: '#F1F5F9', fontWeight: 700, mb: 1, zIndex: 1, fontSize: { xs: '1rem', sm: '1.2rem' }, wordBreak: 'break-all' }}>
                    digital.thinking@zohomail.in
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94A3B8', mb: 3, maxWidth: 320, zIndex: 1, fontSize: { xs: '0.82rem', sm: '0.88rem' } }}>
                    We answer all client queries, proposal reviews, and partnership requests within 24 hours.
                  </Typography>
                  <Button 
                    variant="contained" 
                    component="a"
                    href="mailto:digital.thinking@zohomail.in?subject=Project%20Inquiry%20-%20Digital%20Thinking"
                    size="large"
                    endIcon={<EmailOutlinedIcon />}
                    sx={{ 
                      zIndex: 1, 
                      py: 1.25, 
                      px: { xs: 3, sm: 4 }, 
                      borderRadius: '100px',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                      boxShadow: '0 8px 24px rgba(124,58,237,0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)',
                        boxShadow: '0 12px 32px rgba(124,58,237,0.45)'
                      }
                    }}
                  >
                    Open Mail App
                  </Button>
                </Box>

              </Box>
            </Box>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}
