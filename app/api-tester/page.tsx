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
    GET: '#2EA043',
    POST: '#4493F8',
    PUT: '#D29922',
    PATCH: '#D29922',
    DELETE: '#F85149'
  };

  return (
    <Box>
      <Box sx={{ pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            API Client
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6 }}>
            A lightning-fast, zero-save HTTP client for testing REST APIs.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            {/* URL Bar */}
            <Box sx={{ 
              display: 'flex', gap: 0, flexWrap: { xs: 'wrap', md: 'nowrap' },
              borderRadius: '8px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              bgcolor: '#0D1117'
            }}>
              <Select
                value={method}
                onChange={(e) => setMethod(e.target.value as string)}
                MenuProps={{ sx: { '& .MuiPaper-root': { bgcolor: '#161B22', color: '#fff' } } }}
                sx={{ 
                  width: { xs: '100%', md: '140px' }, 
                  bgcolor: 'transparent', 
                  color: methodColors[method] || '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  borderRight: { xs: 'none', md: '1px solid rgba(255,255,255,0.1)' },
                  borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' },
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                  '& .MuiSelect-select': { py: 1.5 },
                }}
              >
                {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(m => (
                  <MenuItem key={m} value={m} sx={{ color: methodColors[m] || '#FFFFFF', fontWeight: 600 }}>{m}</MenuItem>
                ))}
              </Select>
              <TextField 
                fullWidth 
                placeholder="https://api.example.com/v1/users" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{
                  bgcolor: 'transparent',
                  input: { color: '#C9D1D9', fontFamily: '"Fira Code", "SF Mono", Consolas, monospace', py: 1.5 },
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                }}
              />
              <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={handleSend}
                disabled={loading || !url}
                sx={{ 
                  width: { xs: '100%', md: '120px' },
                  bgcolor: '#238636', color: '#fff',
                  borderRadius: 0,
                  textTransform: 'none', fontWeight: 600,
                  '&:hover': { bgcolor: '#2EA043' },
                  '&.Mui-disabled': { bgcolor: 'rgba(35, 134, 54, 0.5)', color: 'rgba(255,255,255,0.5)' }
                }}
              >
                {loading ? 'Sending' : 'Send'}
              </Button>
            </Box>

            {/* Split Workspace */}
            <Box sx={{ 
              display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, 
              gap: 0, minHeight: '600px',
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              bgcolor: '#0D1117'
            }}>
              
              {/* Left Side: Request Config */}
              <Box sx={{ 
                flex: 1, display: 'flex', flexDirection: 'column',
                borderRight: { xs: 'none', lg: '1px solid rgba(255,255,255,0.1)' },
                borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', lg: 'none' }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', bgcolor: 'rgba(255,255,255,0.02)', pr: 2 }}>
                  <Tabs 
                    value={reqTab} 
                    onChange={(e, v) => setReqTab(v)} 
                    sx={{ 
                      minHeight: '44px', 
                      '& .MuiTab-root': { color: '#8B949E', fontWeight: 600, fontSize: '0.85rem', textTransform: 'none', minHeight: '44px' }, 
                      '& .Mui-selected': { color: '#E2E8F0' }, 
                      '& .MuiTabs-indicator': { backgroundColor: '#F78166' } 
                    }}
                  >
                    <Tab label="JSON Body" />
                    <Tab label="Headers" />
                  </Tabs>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={handleFormatJson} startIcon={<AutoFixHighIcon sx={{ fontSize: 14 }} />} sx={{ color: '#8B949E', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                      Format
                    </Button>
                    <Button size="small" onClick={handleCopyRequest} startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />} sx={{ color: '#8B949E', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
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
                    bgcolor: '#010409',
                    color: '#C9D1D9',
                    p: 3,
                    fontFamily: '"Fira Code", "SF Mono", Consolas, monospace',
                    fontSize: '0.95rem',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    lineHeight: 1.6,
                    minHeight: { xs: '300px', lg: 'auto' }
                  }}
                  spellCheck={false}
                />
              </Box>

              {/* Right Side: Response View */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.02)', px: 3, py: 1, display: 'flex', justifyContent: 'space-between', 
                  borderBottom: '1px solid rgba(255,255,255,0.05)', minHeight: '44px', alignItems: 'center' 
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#8B949E', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Response
                    </Typography>
                    {response && (
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: response.status >= 200 && response.status < 300 ? '#2EA043' : '#F85149', fontWeight: 700 }}>
                          {response.status} {response.statusText}
                        </Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: '#4493F8', fontWeight: 600 }}>
                          {response.time} ms
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={handleCopyResponse} startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />} disabled={!response && !error} sx={{ color: '#8B949E', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }, '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' } }}>
                      {resCopied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button size="small" onClick={handleClearResponse} startIcon={<DeleteSweepIcon sx={{ fontSize: 16 }} />} disabled={!response && !error} sx={{ color: '#8B949E', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#F85149', bgcolor: 'rgba(248,81,73,0.1)' }, '&.Mui-disabled': { color: 'rgba(255,255,255,0.2)' } }}>
                      Clear
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto', bgcolor: '#010409', minHeight: { xs: '300px', lg: 'auto' } }}>
                  {error ? (
                    <Typography sx={{ color: '#F85149', fontFamily: '"Fira Code", "SF Mono", Consolas, monospace', fontSize: '0.9rem' }}>{error}</Typography>
                  ) : response ? (
                    <Typography component="pre" sx={{ 
                      fontFamily: '"Fira Code", "SF Mono", Consolas, monospace', 
                      fontSize: '0.9rem',
                      color: '#C9D1D9',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      lineHeight: 1.6
                    }}>
                      {response.data}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: '#8B949E', fontStyle: 'italic', fontSize: '0.9rem', mt: 1 }}>Hit Send to get a response...</Typography>
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
