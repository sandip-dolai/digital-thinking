'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Script from 'next/script';

export default function IDE() {
  const [code, setCode] = React.useState('def greet(name):\n    print(f"Hello, {name}! Welcome to Digital Thinking.")\n\ngreet("Engineer")\n');
  const [output, setOutput] = React.useState('');
  const [isRunning, setIsRunning] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [pyodide, setPyodide] = React.useState<any>(null);

  const initPyodide = async () => {
    try {
      // @ts-ignore
      const py = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
      });
      
      // Setup stdout/stderr capture
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
    setOutput('Executing...');
    try {
      // Reset stdout/stderr buffers
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
        setOutput(stdout + '\n' + stderr);
      } else {
        setOutput(stdout);
      }
    } catch (error: any) {
      setOutput(error.toString());
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

  return (
    <Box>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js" strategy="afterInteractive" onLoad={initPyodide} />
      <Box sx={{ pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2, lineHeight: 1.1 }}>
            Python Playground.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6 }}>
            Write, test, and execute Python code directly in your browser.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4, height: '70vh', minHeight: '600px' }}>
            {/* Editor Panel */}
            <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(20,20,30,0.4)', backdropFilter: 'blur(20px)' }}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 4, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', letterSpacing: '0.1em', textTransform: 'uppercase' }}>main.py</Typography>
                <Button 
                  variant="contained" 
                  size="small" 
                  startIcon={<PlayArrowIcon />} 
                  onClick={runCode}
                  disabled={isRunning || !isReady}
                  sx={{ borderRadius: '100px', px: 4, py: 1 }}
                >
                  {!isReady ? 'Loading Engine...' : (isRunning ? 'Executing...' : 'Run Code')}
                </Button>
              </Box>
              <Box 
                component="textarea"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{
                  flexGrow: 1,
                  bgcolor: 'transparent',
                  color: '#FFFFFF',
                  p: 4,
                  fontFamily: '"Fira Code", "Courier New", Courier, monospace',
                  fontSize: '1.1rem',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  lineHeight: 1.6
                }}
                spellCheck={false}
              />
            </Box>

            {/* Output Panel */}
            <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(5,5,10,0.8)', backdropFilter: 'blur(20px)' }}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 4, py: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Terminal Output</Typography>
              </Box>
              <Box sx={{
                flexGrow: 1,
                p: 4,
                overflowY: 'auto',
              }}>
                <Typography component="pre" sx={{ 
                  fontFamily: '"Fira Code", "Courier New", Courier, monospace', 
                  fontSize: '1rem',
                  color: output.includes('Error') || output.includes('Traceback') ? '#FF5555' : 'text.secondary',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  lineHeight: 1.6
                }}>
                  {output || (!isReady ? 'Initializing Python WebAssembly Engine...' : 'Output will appear here when you run your code...')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
