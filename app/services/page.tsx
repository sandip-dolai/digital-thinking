import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TechCard from '../components/TechCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Services() {
  const packages = [
    {
      title: 'Starter Website',
      for: 'Local shops, clinics, consultants',
      includes: ['Mobile-first design', 'SEO optimization', 'Contact forms', 'Analytics setup']
    },
    {
      title: 'Custom System MVP',
      for: 'Retailers, growing agencies',
      includes: ['Inventory/Billing dashboard', 'Database setup', 'Admin panel', 'Secure login']
    },
    {
      title: 'Workflow Automation',
      for: 'E-commerce, logistics',
      includes: ['API integrations', 'Zapier/Make setups', 'Automated reporting', 'Email alerts']
    }
  ];

  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 28 }, pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, mb: 4, lineHeight: 1.1 }}>
            Engineering Services.<br/>Clear deliverables.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary' }}>
            We build scalable, custom software solutions designed to streamline your operations and deliver real business value.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {packages.map((pkg, i) => (
              <TechCard key={i}>
                <Typography variant="h4" sx={{ mb: 1, fontSize: '1.5rem' }}>{pkg.title}</Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>Best for: {pkg.for}</Typography>
                
                <Box sx={{ flexGrow: 1, mb: 4 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {pkg.includes.map((item, j) => (
                      <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircleIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, mt: 'auto' }}>
                  <Button variant="contained" fullWidth href="/contact">
                    Get Started
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
