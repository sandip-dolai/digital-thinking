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
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Script from 'next/script';

export default function IDE() {
  const [code, setCode] = React.useState('def greet(name):\n    print(f"Hello, {name}! Welcome to Digital Thinking.")\n\n# Let\'s run this function\ngreet("Engineer")\n');
  const [output, setOutput] = React.useState('');
  const [isRunning, setIsRunning] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [pyodide, setPyodide] = React.useState<any>(null);
  const [copied, setCopied] = React.useState(false);
  const [mobileTab, setMobileTab] = React.useState<'editor' | 'terminal'>('editor');

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
    setMobileTab('terminal'); // automatically switch to terminal on mobile so user sees output immediately
    setOutput((prev) => prev + (prev ? '\n\n' : '') + '> Executing script...');
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
      
      <Box sx={{ pt: { xs: 13, sm: 16, md: 24 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: { xs: 3, md: 5 } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '1.85rem', sm: '2.5rem', md: '3.5rem' }, mb: 1.5, fontWeight: 800 }}>
              Python Playground
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, color: 'text.secondary' }}>
              Write, test, and execute Python code in real-time directly inside your browser.
            </Typography>
          </Box>

          {/* Mobile Tab Switcher */}
          <Box sx={{ display: { xs: 'flex', lg: 'none' }, mb: 2, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: '12px', p: 0.5 }}>
            <Tabs 
              value={mobileTab} 
              onChange={(_, val) => setMobileTab(val)}
              variant="fullWidth"
              sx={{
                width: '100%',
                minHeight: '40px',
                '& .MuiTabs-indicator': { bgcolor: '#238636', height: '3px', borderRadius: '3px' }
              }}
            >
              <Tab 
                value="editor" 
                label="Code Editor" 
                icon={<CodeIcon sx={{ fontSize: 18 }} />} 
                iconPosition="start"
                sx={{ 
                  color: mobileTab === 'editor' ? '#fff' : 'rgba(255,255,255,0.6)', 
                  fontWeight: 600, 
                  textTransform: 'none', 
                  minHeight: '40px',
                  fontSize: '0.85rem'
                }} 
              />
              <Tab 
                value="terminal" 
                label={output.includes('[Error]') ? 'Terminal (Error)' : 'Terminal Output'} 
                icon={<TerminalIcon sx={{ fontSize: 18 }} />} 
                iconPosition="start"
                sx={{ 
                  color: mobileTab === 'terminal' ? '#fff' : (output.includes('[Error]') ? '#F85149' : 'rgba(255,255,255,0.6)'), 
                  fontWeight: 600, 
                  textTransform: 'none', 
                  minHeight: '40px',
                  fontSize: '0.85rem'
                }} 
              />
            </Tabs>
          </Box>

          {/* IDE Container */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            height: { xs: '65vh', sm: '70vh', lg: '70vh' }, 
            minHeight: { xs: '420px', sm: '500px', lg: '600px' },
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            bgcolor: '#0D1117',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)'
          }}>
            
            {/* Left Side: Editor */}
            <Box sx={{ 
              flex: 1, 
              display: { xs: mobileTab === 'editor' ? 'flex' : 'none', lg: 'flex' }, 
              flexDirection: 'column',
              height: '100%',
              borderRight: { xs: 'none', lg: '1px solid rgba(255,255,255,0.1)' },
              borderBottom: { xs: 'none', lg: 'none' },
              minWidth: 0
            }}>
              {/* Editor Header */}
              <Box sx={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                px: { xs: 2, sm: 3 }, py: 1.5, 
                bgcolor: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                gap: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#E2E8F0', letterSpacing: '0.04em' }}>
                    main.py
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Button size="small" onClick={handleCopy} startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />} sx={{ color: 'text.secondary', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1, py: 0.5, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button size="small" onClick={handleDownload} startIcon={<DownloadIcon sx={{ fontSize: 14 }} />} sx={{ color: 'text.secondary', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1, py: 0.5, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
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
                    bgcolor: '#238636',
                    color: '#fff',
                    borderRadius: '8px',
                    px: { xs: 2, sm: 3 }, 
                    py: 0.75,
                    textTransform: 'none', 
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(35, 134, 54, 0.4)',
                    '&:hover': { bgcolor: '#2EA043' },
                    '&.Mui-disabled': { bgcolor: 'rgba(35, 134, 54, 0.4)', color: 'rgba(255,255,255,0.5)' }
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
                  height: '100%',
                  bgcolor: 'transparent',
                  color: '#C9D1D9',
                  p: { xs: 2, sm: 3 },
                  fontFamily: '"Fira Code", "SF Mono", Consolas, monospace',
                  fontSize: { xs: '0.85rem', sm: '0.95rem' },
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  lineHeight: 1.6,
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                spellCheck={false}
              />
            </Box>

            {/* Right Side: Terminal */}
            <Box sx={{ 
              width: { xs: '100%', lg: '42%' }, 
              display: { xs: mobileTab === 'terminal' ? 'flex' : 'none', lg: 'flex' }, 
              flexDirection: 'column',
              height: '100%',
              bgcolor: '#010409',
              minWidth: 0
            }}>
              {/* Terminal Header */}
              <Box sx={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                px: { xs: 2, sm: 3 }, py: 1.5, 
                bgcolor: 'rgba(255,255,255,0.02)',
                borderBottom: '1px solid rgba(255,255,255,0.06)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#8B949E', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Output
                  </Typography>
                  {isRunning && (
                    <Typography sx={{ fontSize: '0.75rem', color: '#3B82F6', fontWeight: 600 }}>
                      ● Executing...
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Button 
                    size="small" 
                    onClick={() => setMobileTab('editor')} 
                    sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: '#3B82F6', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1 }}
                  >
                    Back to Code
                  </Button>
                  <Button size="small" onClick={clearOutput} startIcon={<DeleteSweepIcon sx={{ fontSize: 16 }} />} sx={{ color: '#8B949E', fontSize: '0.75rem', textTransform: 'none', minWidth: 0, px: 1, py: 0.5, '&:hover': { color: '#F85149', bgcolor: 'rgba(248,81,73,0.1)' } }}>
                    Clear
                  </Button>
                </Box>
              </Box>

              {/* Terminal Output */}
              <Box sx={{
                flexGrow: 1, 
                p: { xs: 2, sm: 3 }, 
                overflowY: 'auto',
                height: '100%'
              }}>
                <Typography component="pre" sx={{ 
                  fontFamily: '"Fira Code", "SF Mono", Consolas, monospace', 
                  fontSize: { xs: '0.82rem', sm: '0.9rem' },
                  color: output.includes('[Error]') || output.includes('Runtime Error') || output.includes('Failed') ? '#F85149' : '#8B949E',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  lineHeight: 1.6,
                  m: 0
                }}>
                  {output || (!isReady ? 'Initializing Python WebAssembly Engine...' : 'Click "Run Code" above to execute your Python script.')}
                </Typography>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
}
