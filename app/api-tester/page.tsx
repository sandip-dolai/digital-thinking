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

export default function APITester() {
  const [method, setMethod] = React.useState('GET');
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1');
  const [reqTab, setReqTab] = React.useState(0);
  const [reqBody, setReqBody] = React.useState('{\n  "name": "morpheus",\n  "job": "leader"\n}');
  const [reqHeaders, setReqHeaders] = React.useState('{\n  "Content-Type": "application/json"\n}');
  
  const [response, setResponse] = React.useState<{ status: number; statusText: string; time: number; data: string; headers: string } | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

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

  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2, lineHeight: 1.1 }}>
            API Client.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6 }}>
            A lightning-fast, zero-save HTTP client for testing REST APIs.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            {/* URL Bar */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
              <Select
                value={method}
                onChange={(e) => setMethod(e.target.value as string)}
                sx={{ 
                  width: { xs: '100%', md: '150px' }, 
                  bgcolor: 'rgba(255,255,255,0.05)', 
                  color: '#FFFFFF',
                  fontWeight: 700,
                  '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.1)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFFFFF' }
                }}
              >
                {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(m => (
                  <MenuItem key={m} value={m}>{m}</MenuItem>
                ))}
              </Select>
              <TextField 
                fullWidth 
                placeholder="https://api.example.com/v1/users" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.05)',
                  input: { color: '#FFFFFF', fontFamily: 'monospace' },
                  '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.1)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFFFFF' }
                }}
              />
              <Button 
                variant="contained" 
                size="large" 
                endIcon={<SendIcon />} 
                onClick={handleSend}
                disabled={loading || !url}
                sx={{ px: 5, width: { xs: '100%', md: 'auto' } }}
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4, minHeight: '500px' }}>
              
              {/* Request Config */}
              <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(20,20,30,0.4)', backdropFilter: 'blur(20px)' }}>
                <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <Tabs value={reqTab} onChange={(e, v) => setReqTab(v)} sx={{ minHeight: '48px', '& .MuiTab-root': { color: 'rgba(255,255,255,0.6)', fontWeight: 600 }, '& .Mui-selected': { color: '#FFFFFF' }, '& .MuiTabs-indicator': { backgroundColor: '#FFFFFF' } }}>
                    <Tab label="JSON Body" />
                    <Tab label="Headers (JSON)" />
                  </Tabs>
                </Box>
                <Box 
                  component="textarea"
                  value={reqTab === 0 ? reqBody : reqHeaders}
                  onChange={(e) => reqTab === 0 ? setReqBody(e.target.value) : setReqHeaders(e.target.value)}
                  placeholder={reqTab === 0 ? '{\n  "key": "value"\n}' : '{\n  "Authorization": "Bearer token"\n}'}
                  sx={{
                    flexGrow: 1,
                    bgcolor: 'transparent',
                    color: '#FFFFFF',
                    p: 3,
                    fontFamily: '"Fira Code", "Courier New", Courier, monospace',
                    fontSize: '0.95rem',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    lineHeight: 1.6
                  }}
                  spellCheck={false}
                />
              </Box>

              {/* Response View */}
              <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(5,5,10,0.8)', backdropFilter: 'blur(20px)' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 3, py: 1.5, display: 'flex', gap: 3, borderBottom: '1px solid rgba(255,255,255,0.1)', minHeight: '48px', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Response</Typography>
                  {response && (
                    <>
                      <Typography variant="body2" sx={{ color: response.status >= 200 && response.status < 300 ? '#4CAF50' : '#FF5555', fontWeight: 800 }}>
                        {response.status} {response.statusText}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#00F0FF', fontWeight: 600 }}>
                        {response.time} ms
                      </Typography>
                    </>
                  )}
                </Box>
                <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
                  {error ? (
                    <Typography sx={{ color: '#FF5555', fontFamily: 'monospace' }}>{error}</Typography>
                  ) : response ? (
                    <Typography component="pre" sx={{ 
                      fontFamily: '"Fira Code", "Courier New", Courier, monospace', 
                      fontSize: '0.9rem',
                      color: 'text.secondary',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      lineHeight: 1.6
                    }}>
                      {response.data}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>Hit Send to get a response...</Typography>
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
