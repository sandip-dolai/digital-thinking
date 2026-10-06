'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Script from 'next/script';

export default function IDE() {
  const [code, setCode] = React.useState('def greet(name):\n    print(f"Hello, {name}! Welcome to Digital Thinking.")\n\n# Let\'s run this function\ngreet("Engineer")\n');
  const [output, setOutput] = React.useState('');
  const [isRunning, setIsRunning] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [pyodide, setPyodide] = React.useState<any>(null);
  const [copied, setCopied] = React.useState(false);

  const initPyodide = async () => {
    try {
      // @ts-ignore
      const py = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
      });
      
      py.runPython(`
        import sys
        import io
        sys.stdout = io.StringIO()
        sys.stderr = io.StringIO()
      `);
      
      setPyodide(py);
      setIsReady(true);
      setOutput('Python execution engine ready.');
    } catch (err) {
      setOutput('Failed to load Python WebAssembly engine.');
    }
  };

  const runCode = async () => {
    if (!pyodide) return;
    setIsRunning(true);
    setOutput((prev) => prev + '\n\n> Executing script...');
    try {
      pyodide.runPython(`
        sys.stdout.seek(0)
        sys.stdout.truncate(0)
        sys.stderr.seek(0)
        sys.stderr.truncate(0)
      `);
      
      await pyodide.runPythonAsync(code);
      
      const stdout = pyodide.runPython("sys.stdout.getvalue()");
      const stderr = pyodide.runPython("sys.stderr.getvalue()");
      
      if (stderr) {
        setOutput((prev) => prev + '\n' + stdout + '\n[Error]\n' + stderr);
      } else {
        setOutput((prev) => prev + '\n' + stdout);
      }
    } catch (error: any) {
      setOutput((prev) => prev + '\n[Runtime Error]\n' + error.toString());
    }
    setIsRunning(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newValue = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newValue);
      
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "main.py";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const clearOutput = () => {
    setOutput('');
  };

  return (
    <Box>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js" strategy="afterInteractive" onLoad={initPyodide} />
      
      <Box sx={{ pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Python Playground
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6 }}>
            Write, test, and execute Python code directly in your browser.
          </Typography>

          {/* IDE Container */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            height: { xs: 'auto', lg: '70vh' }, 
            minHeight: '600px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            bgcolor: '#0D1117' // Clean GitHub-like dark background
          }}>
            
            {/* Left Side: Editor */}
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              borderRight: { xs: 'none', lg: '1px solid rgba(255,255,255,0.1)' },
              borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', lg: 'none' }
            }}>
              {/* Editor Header */}
              <Box sx={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                px: 3, py: 2, 
                bgcolor: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', letterSpacing: '0.05em' }}>
                    main.py
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={handleCopy} startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />} sx={{ color: 'text.secondary', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button size="small" onClick={handleDownload} startIcon={<DownloadIcon sx={{ fontSize: 14 }} />} sx={{ color: 'text.secondary', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                      Download
                    </Button>
                  </Box>
                </Box>
                
                <Button 
                  variant="contained" 
                  size="small" 
                  startIcon={<PlayArrowIcon />} 
                  onClick={runCode}
                  disabled={isRunning || !isReady}
                  sx={{ 
                    bgcolor: '#238636', // GitHub green
                    color: '#fff',
                    borderRadius: '6px',
                    px: 3, 
                    textTransform: 'none', 
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#2EA043' },
                    '&.Mui-disabled': { bgcolor: 'rgba(35, 134, 54, 0.5)', color: 'rgba(255,255,255,0.5)' }
                  }}
                >
                  {!isReady ? 'Loading...' : (isRunning ? 'Running...' : 'Run Code')}
                </Button>
              </Box>

              {/* Textarea */}
              <Box 
                component="textarea"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{
                  flexGrow: 1,
                  bgcolor: 'transparent',
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

            {/* Right Side: Terminal */}
            <Box sx={{ 
              width: { xs: '100%', lg: '40%' }, 
              display: 'flex', 
              flexDirection: 'column',
              bgcolor: '#010409' // Slightly darker for terminal
            }}>
              {/* Terminal Header */}
              <Box sx={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                px: 3, py: 2, 
                bgcolor: 'rgba(255,255,255,0.02)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#8B949E', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Terminal Output
                </Typography>
                <Button size="small" onClick={clearOutput} startIcon={<DeleteSweepIcon sx={{ fontSize: 16 }} />} sx={{ color: '#8B949E', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, p: 1, '&:hover': { color: '#F85149', bgcolor: 'rgba(248,81,73,0.1)' } }}>
                  Clear
                </Button>
              </Box>

              {/* Terminal Output */}
              <Box sx={{
                flexGrow: 1, 
                p: 3, 
                overflowY: 'auto',
                minHeight: { xs: '300px', lg: 'auto' }
              }}>
                <Typography component="pre" sx={{ 
                  fontFamily: '"Fira Code", "SF Mono", Consolas, monospace', 
                  fontSize: '0.9rem',
                  color: output.includes('[Error]') || output.includes('Runtime Error') || output.includes('Failed') ? '#F85149' : '#8B949E',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  lineHeight: 1.6
                }}>
                  {output || (!isReady ? 'Initializing Python WebAssembly Engine...' : '')}
                </Typography>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
}
