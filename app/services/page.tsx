'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
// Service Icons
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
// Process Icons
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// Why Us Icons
import TuneIcon from '@mui/icons-material/Tune';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import HubIcon from '@mui/icons-material/Hub';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckIcon from '@mui/icons-material/Check';

/* ─── Colour tokens per card ─── */
const accents = [
  { gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)', color: '#3B82F6', bg: '#2563EB' },
  { gradient: 'linear-gradient(135deg, #7C3AED, #C4B5FD)', color: '#A78BFA', bg: '#7C3AED' },
  { gradient: 'linear-gradient(135deg, #059669, #6EE7B7)', color: '#34D399', bg: '#059669' },
  { gradient: 'linear-gradient(135deg, #EA580C, #FDBA74)', color: '#FB923C', bg: '#EA580C' },
  { gradient: 'linear-gradient(135deg, #0891B2, #67E8F9)', color: '#22D3EE', bg: '#0891B2' },
  { gradient: 'linear-gradient(135deg, #DB2777, #F9A8D4)', color: '#F472B6', bg: '#DB2777' },
  { gradient: 'linear-gradient(135deg, #CA8A04, #FDE68A)', color: '#FACC15', bg: '#CA8A04' },
  { gradient: 'linear-gradient(135deg, #4F46E5, #A5B4FC)', color: '#818CF8', bg: '#4F46E5' },
];

/* ─── Shared animated-border keyframes (injected once via GlobalStyles-like sx) ─── */
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
  '@keyframes marquee': {
    '0%':   { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
  '@keyframes pulse': {
    '0%, 100%': { opacity: 0.4 },
    '50%':      { opacity: 1 },
  },
};

export default function Services() {
  const services = [
    { title: 'Custom ERP Solutions',          short: 'Sales, inventory, production, logistics — one connected system.', detail: 'Choose only the modules you need. Full reporting and real-time dashboards included.', icon: <DashboardCustomizeIcon sx={{ fontSize: 26 }} /> },
    { title: 'HRMS & Payroll',                short: 'Attendance, leave, payroll, and recruitment — fully automated.', detail: 'Biometric, mobile GPS, selfie check-in & employee self-service portal.', icon: <BadgeOutlinedIcon sx={{ fontSize: 26 }} /> },
    { title: 'Accounts & Finance',            short: 'Invoicing, GST/VAT billing, ledgers, and real-time reports.', detail: 'Payables, receivables, bank reconciliation — always audit-ready.', icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 26 }} /> },
    { title: 'E-commerce & Marketplace',      short: 'Single-vendor stores and multi-vendor marketplaces.', detail: 'Payments, shipping, inventory sync and powerful admin dashboards.', icon: <StorefrontOutlinedIcon sx={{ fontSize: 26 }} /> },
    { title: 'Mobile Apps',                   short: 'Android & iOS apps for business, delivery, and customers.', detail: 'Built with Flutter & React Native. Connected to your ERP or website.', icon: <PhoneIphoneOutlinedIcon sx={{ fontSize: 26 }} /> },
    { title: 'Social & Communication',        short: 'Chat, video calling, communities, and live streaming.', detail: 'Built for performance, scale, and real-time engagement.', icon: <ForumOutlinedIcon sx={{ fontSize: 26 }} /> },
    { title: 'Logistics & Supply Chain',      short: 'Production planning, warehouse, fleet & route optimization.', detail: 'Live visibility with delivery tracking and supply chain dashboards.', icon: <LocalShippingOutlinedIcon sx={{ fontSize: 26 }} /> },
    { title: 'Integration & Automation',      short: 'WhatsApp/SMS bots, APIs, payments, and cloud deployment.', detail: 'AI chatbots, third-party integrations, and ongoing maintenance.', icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 26 }} /> },
  ];

  const processSteps = [
    { title: 'Discover', desc: 'We understand your business and workflows.', icon: <SearchIcon /> },
    { title: 'Design',   desc: 'We plan the modules, screens, and architecture.', icon: <DesignServicesIcon /> },
    { title: 'Develop',  desc: 'We build in sprints with regular demos.', icon: <CodeIcon /> },
    { title: 'Deploy',   desc: 'We launch, train your team, and migrate data.', icon: <RocketLaunchIcon /> },
    { title: 'Support',  desc: 'Updates, monitoring, and maintenance — always.', icon: <SupportAgentIcon /> },
  ];

  const whyUs = [
    { title: 'Fully Customized',  desc: 'Every module built around your workflow — not a template.', icon: <TuneIcon sx={{ fontSize: 28 }} /> },
    { title: 'Modular & Scalable', desc: 'Start small, add capabilities as you grow.', icon: <ViewModuleIcon sx={{ fontSize: 28 }} /> },
    { title: 'All Under One Roof', desc: 'ERP, web, mobile, chat, video — a single partner.', icon: <HubIcon sx={{ fontSize: 28 }} /> },
    { title: 'Transparent Delivery', desc: 'Milestone pricing, regular demos, post-launch support included.', icon: <VerifiedIcon sx={{ fontSize: 28 }} /> },
  ];

  const techStack = [
    { category: 'Frontend',  items: ['React', 'Next.js'] },
    { category: 'Backend',   items: ['FastAPI', 'Django', 'Express'] },
    { category: 'Mobile',    items: ['Flutter', 'React Native'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  ];

  const industries = ['Manufacturing', 'Retail & Wholesale', 'Logistics & Transport', 'Education', 'Healthcare', 'Real Estate', 'Startups & SMEs'];

  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <Box sx={shimmerBorder}>

      {/* ═══════════════════════════════════════════════════════════
          HERO  — bold, asymmetric, with floating mesh orbs
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ position: 'relative', pt: { xs: 22, md: 30 }, pb: { xs: 10, md: 16 }, overflow: 'hidden' }}>
        {/* Mesh gradient orbs */}
        <Box sx={{ position: 'absolute', top: '-20%', right: '-15%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 12s ease-in-out infinite', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(90px)', animation: 'float 16s ease-in-out infinite reverse', pointerEvents: 'none' }} />

        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 6, alignItems: 'center' }}>
            {/* Left: Copy */}
            <Box>
              <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 3, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Our Services
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem' }, mb: 3, lineHeight: 1.08 }}>
                Software That Fits<br />
                <Box component="span" sx={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #2563EB)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'borderShimmer 4s linear infinite' }}>
                  Your Business.
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 5, maxWidth: 520, lineHeight: 1.7 }}>
                We design and build custom ERP systems, apps, and digital platforms that automate your operations and help you grow.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" href="/contact" size="large" endIcon={<ArrowForwardIcon />} sx={{ py: 1.5, px: 4 }}>
                  Get a Free Quote
                </Button>
                <Button variant="outlined" href="#services" size="large" sx={{ py: 1.5, px: 4 }}>
                  Explore Services
                </Button>
              </Box>
            </Box>

            {/* Right: Floating stats bento */}
            <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { num: '15+', label: 'Projects Delivered' },
                { num: '8+', label: 'Service Verticals' },
                { num: '100', label: 'Lighthouse Score' },
                { num: '24/7', label: 'Post-Launch Support' },
              ].map((stat, i) => (
                <Box key={i} sx={{
                  p: 3, borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: 'rgba(37,99,235,0.3)', transform: 'translateY(-2px)' },
                }}>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>{stat.num}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, fontSize: '0.8rem' }}>{stat.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          SERVICE CARDS  — 2-col horizontal layout with animated border
      ═══════════════════════════════════════════════════════════ */}
      <Box id="services" sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              What We Build
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
              End-to-End Solutions
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 560, mx: 'auto', color: 'text.secondary' }}>
              From enterprise resource planning to mobile apps — every solution is built to fit your workflow.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
            {services.map((service, index) => {
              const isHovered = hoveredCard === index;
              const { gradient, color } = accents[index];
              return (
                /* Outer wrapper — the animated gradient border */
                <Box
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    position: 'relative',
                    borderRadius: '18px',
                    p: '1px', // border thickness
                    background: isHovered
                      ? gradient
                      : 'rgba(255,255,255,0.06)',
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'borderShimmer 3s linear infinite' : 'none',
                    transition: 'background 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 16px 48px ${color}18` : '0 2px 12px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                  }}
                >
                  {/* Inner content */}
                  <Box sx={{
                    display: 'flex', flexDirection: 'row', gap: 2.5,
                    p: { xs: 2.5, md: 3 },
                    borderRadius: '17px',
                    background: 'linear-gradient(135deg, #0D1220 0%, #0A0F1E 100%)',
                    height: '100%',
                  }}>
                    {/* Left: badge + icon */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, pt: 0.25, flexShrink: 0 }}>
                      <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, color, opacity: 0.6, letterSpacing: '0.08em' }}>
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                      <Box sx={{
                        width: 44, height: 44, borderRadius: '12px',
                        background: `${color}10`,
                        border: `1px solid ${color}22`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color,
                        transition: 'all 0.35s ease',
                        ...(isHovered && { background: `${color}1A`, boxShadow: `0 0 18px ${color}20` }),
                      }}>
                        {service.icon}
                      </Box>
                    </Box>

                    {/* Right: text */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#F1F5F9', mb: 0.75, lineHeight: 1.3 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.55, mb: 1 }}>
                        {service.short}
                      </Typography>

                      {/* Hover-expand detail */}
                      <Box sx={{
                        maxHeight: isHovered ? '70px' : '0px',
                        opacity: isHovered ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                      }}>
                        <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.8rem', lineHeight: 1.5, pb: 0.5 }}>
                          {service.detail}
                        </Typography>
                      </Box>

                      <Box sx={{
                        display: 'inline-flex', alignItems: 'center', gap: 0.5,
                        color, fontWeight: 600, fontSize: '0.78rem',
                        '& .arrow': { transition: 'transform 0.3s ease', transform: isHovered ? 'translateX(5px)' : 'translateX(0)' },
                      }}>
                        Learn more <EastIcon className="arrow" sx={{ fontSize: 13 }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          INDUSTRIES  — infinite marquee ticker
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{
        py: 5,
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        overflow: 'hidden',
        position: 'relative',
        // Edge fade masks
        '&::before, &::after': {
          content: '""', position: 'absolute', top: 0, bottom: 0, width: '120px', zIndex: 2, pointerEvents: 'none',
        },
        '&::before': { left: 0, background: 'linear-gradient(to right, #060A16, transparent)' },
        '&::after':  { right: 0, background: 'linear-gradient(to left, #060A16, transparent)' },
      }}>
        <Typography sx={{ textAlign: 'center', color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 3, fontSize: '0.75rem', textTransform: 'uppercase' }}>
          Industries We Serve
        </Typography>
        {/* Marquee track */}
        <Box sx={{ display: 'flex', animation: 'marquee 25s linear infinite', width: 'max-content' }}>
          {[...industries, ...industries].map((ind, i) => (
            <Box key={i} sx={{
              display: 'flex', alignItems: 'center', gap: 1.5, mx: 3,
              px: 3, py: 1.5,
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 8px rgba(37,99,235,0.4)' }} />
              <Typography sx={{ color: '#CBD5E1', fontSize: '0.9rem', fontWeight: 500 }}>{ind}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          HOW WE WORK  — individual step cards with connecting line
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Our Process
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              How We Work
            </Typography>
          </Box>

          {/* Steps row */}
          <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 0, md: 2 } }}>
            {/* Desktop connecting line */}
            <Box sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute', top: '38px', left: '10%', right: '10%', height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), rgba(37,99,235,0.25), transparent)',
              zIndex: 0,
            }} />

            {processSteps.map((step, i) => (
              <Box key={i} sx={{
                flex: 1, position: 'relative', zIndex: 1,
                display: 'flex', flexDirection: { xs: 'row', md: 'column' },
                alignItems: { xs: 'flex-start', md: 'center' },
                textAlign: { xs: 'left', md: 'center' },
                gap: { xs: 2.5, md: 2 },
                pb: { xs: 4, md: 0 },
              }}>
                {/* Mobile connecting line */}
                {i !== processSteps.length - 1 && (
                  <Box sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'absolute', left: '22px', top: '48px', bottom: '0', width: '2px',
                    background: 'rgba(37,99,235,0.15)',
                  }} />
                )}

                {/* Step circle */}
                <Box sx={{
                  width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                  background: '#0A0F1E',
                  border: '2px solid rgba(37,99,235,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#3B82F6',
                  boxShadow: '0 0 20px rgba(37,99,235,0.12), inset 0 0 12px rgba(37,99,235,0.06)',
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: '#2563EB', boxShadow: '0 0 28px rgba(37,99,235,0.25)' },
                }}>
                  {step.icon}
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#F1F5F9', mb: 0.5 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.82rem', maxWidth: '170px', mx: { md: 'auto' } }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          WHY US  — Bento grid with icons & bold statements
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 }, background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.02), transparent)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Why Digital Thinking
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Built Different
            </Typography>
          </Box>

          {/* Bento layout: 1 large + 3 small */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: 2.5 }}>
            {/* Large feature card */}
            <Box sx={{
              p: 4, borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.02) 100%)',
              border: '1px solid rgba(37,99,235,0.15)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': { borderColor: 'rgba(37,99,235,0.35)' },
            }}>
              <Box sx={{ position: 'absolute', top: '-30%', right: '-20%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 3, color: '#3B82F6' }}>{whyUs[0].icon}</Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#F1F5F9', mb: 1.5, lineHeight: 1.2 }}>
                  {whyUs[0].title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#94A3B8', lineHeight: 1.7 }}>
                  {whyUs[0].desc}
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['Your workflow, your modules', 'No bloated features', 'Scales with your business'].map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckIcon sx={{ fontSize: 16, color: '#2563EB' }} />
                      <Typography variant="body2" sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Right: 3 stacked cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {whyUs.slice(1).map((item, i) => (
                <Box key={i} sx={{
                  p: 3.5, borderRadius: '16px', flex: 1,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: 'rgba(37,99,235,0.25)', background: 'rgba(255,255,255,0.03)', transform: 'translateX(4px)' },
                }}>
                  <Box sx={{
                    width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
                    background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6',
                  }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#F1F5F9', mb: 0.5 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem' }}>{item.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          TECH STACK  — grouped chips with category labels
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Technologies
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Our Tech Stack
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5,
          }}>
            {techStack.map((cat, i) => (
              <Box key={i} sx={{
                p: 3, borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                '&:hover': { borderColor: 'rgba(37,99,235,0.25)' },
              }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', color: '#64748B', textTransform: 'uppercase', mb: 2 }}>
                  {cat.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {cat.items.map((tech, j) => (
                    <Chip
                      key={j}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(37,99,235,0.08)',
                        color: '#E2E8F0',
                        border: '1px solid rgba(37,99,235,0.18)',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        py: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': { bgcolor: 'rgba(37,99,235,0.18)', borderColor: 'rgba(37,99,235,0.4)' },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════════════
          CTA  — dramatic gradient backdrop
      ═══════════════════════════════════════════════════════════ */}
      <Box sx={{
        py: { xs: 12, md: 18 },
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(124,58,237,0.06) 50%, rgba(37,99,235,0.04) 100%)',
        borderTop: '1px solid rgba(37,99,235,0.1)',
      }}>
        {/* Ambient glow */}
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vw', height: '60vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3.2rem' }, fontWeight: 800 }}>
            Have an idea that needs<br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              automating?
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, maxWidth: 520, mx: 'auto', fontSize: '1.1rem' }}>
            Book a free consultation — we&apos;ll suggest the right solution and a clear roadmap to help your business grow.
          </Typography>
          <Button variant="contained" href="/contact" size="large" endIcon={<ArrowForwardIcon />} sx={{ py: 2, px: 6, fontSize: '1rem' }}>
            Get a Free Quote
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
