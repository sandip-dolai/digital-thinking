'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

/* ─── Shared animated-border keyframes ─── */
const apiThemeStyles = {
  '@keyframes borderShimmer': {
    '0%':   { backgroundPosition: '0% 50%' },
    '50%':  { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes pulseGlow': {
    '0%, 100%': { opacity: 0.3 },
    '50%':      { opacity: 0.6 },
  },
};

export default function APITester() {
  const [method, setMethod] = React.useState('GET');
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1');
  const [reqTab, setReqTab] = React.useState(0);
  const [reqBody, setReqBody] = React.useState('{\n  "name": "morpheus",\n  "job": "leader"\n}');
  const [reqHeaders, setReqHeaders] = React.useState('{\n  "Content-Type": "application/json"\n}');
  
  const [response, setResponse] = React.useState<{ status: number; statusText: string; time: number; data: string; headers: string } | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const [reqCopied, setReqCopied] = React.useState(false);
  const [resCopied, setResCopied] = React.useState(false);

  const handleSend = async () => {
    setLoading(true);
    setError('');
    setResponse(null);
    const startTime = performance.now();

    try {
      let parsedHeaders = {};
      try {
        if (reqHeaders.trim()) parsedHeaders = JSON.parse(reqHeaders);
      } catch (e) {
        throw new Error('Invalid JSON in Headers');
      }

      const options: RequestInit = {
        method,
        headers: parsedHeaders,
      };

      if (method !== 'GET' && method !== 'HEAD') {
        options.body = reqBody;
      }

      const res = await fetch(url, options);
      const endTime = performance.now();
      
      let resData = '';
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await res.json();
        resData = JSON.stringify(json, null, 2);
      } else {
        resData = await res.text();
      }

      const resHeadersObj: Record<string, string> = {};
      res.headers.forEach((val, key) => {
        resHeadersObj[key] = val;
      });

      setResponse({
        status: res.status,
        statusText: res.statusText,
        time: Math.round(endTime - startTime),
        data: resData,
        headers: JSON.stringify(resHeadersObj, null, 2)
      });
    } catch (err: any) {
      if (err.name === 'TypeError') {
        setError('Network Error or CORS failure. Ensure the API supports CORS.');
      } else {
        setError(err.message);
      }
    }
    setLoading(false);
  };

  const handleFormatJson = () => {
    try {
      if (reqTab === 0 && reqBody.trim()) {
        const formatted = JSON.stringify(JSON.parse(reqBody), null, 2);
        setReqBody(formatted);
      } else if (reqTab === 1 && reqHeaders.trim()) {
        const formatted = JSON.stringify(JSON.parse(reqHeaders), null, 2);
        setReqHeaders(formatted);
      }
    } catch (e) {
      // Ignore if it's not valid JSON
    }
  };

  const handleCopyRequest = () => {
    const text = reqTab === 0 ? reqBody : reqHeaders;
    navigator.clipboard.writeText(text);
    setReqCopied(true);
    setTimeout(() => setReqCopied(false), 2000);
  };

  const handleCopyResponse = () => {
    if (response) {
      navigator.clipboard.writeText(response.data);
      setResCopied(true);
      setTimeout(() => setResCopied(false), 2000);
    }
  };

  const handleClearResponse = () => {
    setResponse(null);
    setError('');
  };

  const methodColors: Record<string, string> = {
    GET: '#34D399',
    POST: '#60A5FA',
    PUT: '#FBBF24',
    PATCH: '#FBBF24',
    DELETE: '#F87171'
  };

  return (
    <Box sx={apiThemeStyles}>
      <Box sx={{ pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 10 }, position: 'relative' }}>
        
        {/* Ambient glows to match 2026 aesthetics */}
        <Box sx={{ position: 'absolute', top: '10%', right: '20%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'pulseGlow 8s infinite' }} />
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={{ color: '#2563EB', fontWeight: 700, letterSpacing: '0.15em', mb: 2, display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Developer Tools
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2, fontWeight: 800 }}>
            API Client
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6 }}>
            A lightning-fast, zero-save HTTP client for testing REST APIs instantly in your browser.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            {/* ═══════════════════════════════════════════════════════════
                URL BAR — Glowing Border Frame
            ═══════════════════════════════════════════════════════════ */}
            <Box sx={{ 
              display: 'flex', gap: 0, flexWrap: { xs: 'wrap', md: 'nowrap' },
              borderRadius: '16px', overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <Select
                value={method}
                onChange={(e) => setMethod(e.target.value as string)}
                MenuProps={{ sx: { '& .MuiPaper-root': { bgcolor: '#0A0F1E', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } } }}
                sx={{ 
                  width: { xs: '100%', md: '140px' }, 
                  bgcolor: 'transparent', 
                  color: methodColors[method] || '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '1rem',
                  borderRight: { xs: 'none', md: '1px solid rgba(255,255,255,0.08)' },
                  borderBottom: { xs: '1px solid rgba(255,255,255,0.08)', md: 'none' },
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                  '& .MuiSelect-select': { py: 2 },
                }}
              >
                {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(m => (
                  <MenuItem key={m} value={m} sx={{ color: methodColors[m] || '#FFFFFF', fontWeight: 700 }}>{m}</MenuItem>
                ))}
              </Select>
              <TextField 
                fullWidth 
                placeholder="https://api.example.com/v1/users" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{
                  bgcolor: 'transparent',
                  input: { color: '#F1F5F9', fontFamily: '"Fira Code", monospace', py: 2, fontSize: '1.05rem' },
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                }}
              />
              <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={handleSend}
                disabled={loading || !url}
                sx={{ 
                  width: { xs: '100%', md: '140px' },
                  background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                  color: '#fff',
                  borderRadius: 0,
                  textTransform: 'none', fontWeight: 700, fontSize: '1rem',
                  '&:hover': { background: 'linear-gradient(135deg, #1D4ED8, #4338CA)' },
                  '&.Mui-disabled': { background: 'rgba(37,99,235,0.2)', color: 'rgba(255,255,255,0.3)' }
                }}
              >
                {loading ? 'Sending' : 'Send'}
              </Button>
            </Box>

            {/* ═══════════════════════════════════════════════════════════
                SPLIT WORKSPACE — 2026 Glassmorphism
            ═══════════════════════════════════════════════════════════ */}
            <Box sx={{ 
              display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, 
              gap: 0, minHeight: '650px',
              borderRadius: '24px', overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(10,15,30,0.8) 0%, rgba(5,8,17,0.9) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(20px)'
            }}>
              
              {/* ─── Left Side: Request Config ─── */}
              <Box sx={{ 
                flex: 1, display: 'flex', flexDirection: 'column',
                borderRight: { xs: 'none', lg: '1px solid rgba(255,255,255,0.08)' },
                borderBottom: { xs: '1px solid rgba(255,255,255,0.08)', lg: 'none' }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', pr: 2 }}>
                  <Tabs 
                    value={reqTab} 
                    onChange={(e, v) => setReqTab(v)} 
                    sx={{ 
                      minHeight: '48px', 
                      '& .MuiTab-root': { color: '#64748B', fontWeight: 600, fontSize: '0.85rem', textTransform: 'none', minHeight: '48px' }, 
                      '& .Mui-selected': { color: '#F1F5F9' }, 
                      '& .MuiTabs-indicator': { backgroundColor: '#3B82F6', height: '2px' } 
                    }}
                  >
                    <Tab label="JSON Body" />
                    <Tab label="Headers" />
                  </Tabs>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={handleFormatJson} startIcon={<AutoFixHighIcon sx={{ fontSize: 16 }} />} sx={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1.5, py: 0.5, borderRadius: '8px', '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' } }}>
                      Format
                    </Button>
                    <Button size="small" onClick={handleCopyRequest} startIcon={<ContentCopyIcon sx={{ fontSize: 16 }} />} sx={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1.5, py: 0.5, borderRadius: '8px', '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' } }}>
                      {reqCopied ? 'Copied' : 'Copy'}
                    </Button>
                  </Box>
                </Box>
                <Box 
                  component="textarea"
                  value={reqTab === 0 ? reqBody : reqHeaders}
                  onChange={(e) => reqTab === 0 ? setReqBody(e.target.value) : setReqHeaders(e.target.value)}
                  placeholder={reqTab === 0 ? '{\n  "key": "value"\n}' : '{\n  "Authorization": "Bearer token"\n}'}
                  sx={{
                    flexGrow: 1,
                    background: 'transparent',
                    color: '#E2E8F0',
                    p: 3,
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '1rem',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    lineHeight: 1.7,
                    minHeight: { xs: '350px', lg: 'auto' }
                  }}
                  spellCheck={false}
                />
              </Box>

              {/* ─── Right Side: Response View ─── */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)' }}>
                <Box sx={{ 
                  background: 'rgba(255,255,255,0.01)', px: 3, display: 'flex', justifyContent: 'space-between', 
                  borderBottom: '1px solid rgba(255,255,255,0.05)', minHeight: '48px', alignItems: 'center' 
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Response
                    </Typography>
                    {response && (
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: response.status >= 200 && response.status < 300 ? '#34D399' : '#F87171', fontWeight: 800 }}>
                          {response.status} {response.statusText}
                        </Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: '#60A5FA', fontWeight: 700 }}>
                          {response.time} ms
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={handleCopyResponse} startIcon={<ContentCopyIcon sx={{ fontSize: 16 }} />} disabled={!response && !error} sx={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1.5, py: 0.5, borderRadius: '8px', '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' }, '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' } }}>
                      {resCopied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button size="small" onClick={handleClearResponse} startIcon={<DeleteSweepIcon sx={{ fontSize: 16 }} />} disabled={!response && !error} sx={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1.5, py: 0.5, borderRadius: '8px', '&:hover': { color: '#F87171', background: 'rgba(248,113,113,0.1)' }, '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' } }}>
                      Clear
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto', minHeight: { xs: '350px', lg: 'auto' } }}>
                  {error ? (
                    <Typography sx={{ color: '#F87171', fontFamily: '"Fira Code", monospace', fontSize: '1rem' }}>{error}</Typography>
                  ) : response ? (
                    <Typography component="pre" sx={{ 
                      fontFamily: '"Fira Code", monospace', 
                      fontSize: '1rem',
                      color: '#E2E8F0',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      lineHeight: 1.7
                    }}>
                      {response.data}
                    </Typography>
                  ) : (
                    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography sx={{ color: '#475569', fontStyle: 'italic', fontSize: '1rem', fontWeight: 500 }}>Waiting for request...</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
}
