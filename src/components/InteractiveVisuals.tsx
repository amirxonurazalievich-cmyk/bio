import React, { useEffect, useRef, useState } from 'react';

// ---- 1. QUANTUM_UI VISUALIZER (Real-time fluctuations & waveform) ----
export const QuantumUiVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    let offset = 0;
    
    const render = () => {
      const width = (canvas.width = canvas.parentElement?.clientWidth || 300);
      const height = (canvas.height = 160);
      
      // Clear background
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);
      
      // Draw Grid
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Plot fluctuating waveform
      ctx.beginPath();
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#00f3ff';
      
      const speed = hovered ? 0.15 : 0.05;
      offset += speed;
      
      for (let x = 0; x < width; x++) {
        const amplitude1 = 15;
        const freq1 = 0.015;
        const amplitude2 = hovered ? 25 : 8;
        const freq2 = 0.04;
        
        const y = height / 2 + 
          Math.sin(x * freq1 + offset) * amplitude1 + 
          Math.cos(x * freq2 - offset * 1.5) * amplitude2;
          
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // reset
      
      // Tech overlays
      ctx.fillStyle = '#00f3ff';
      ctx.font = '9px monospace';
      ctx.fillText(`HZ: ${hovered ? '240.24' : '102.50'}`, 15, 25);
      ctx.fillText(`TELEMETRY STREAM: COMPILER ACTIVE`, 15, 145);
      
      // Pulse indicator
      ctx.fillStyle = Math.floor(offset * 2) % 2 === 0 ? '#39ff14' : '#050508';
      ctx.beginPath();
      ctx.arc(width - 25, 22, 4, 0, Math.PI * 2);
      ctx.fill();
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationId);
  }, [hovered]);

  return (
    <div 
      className="relative w-full h-[160px] bg-[#050508] border border-[#00f3ff]/20 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute top-2 right-10 text-[9px] font-mono text-[#00f3ff]/50 bg-[#050508]/80 px-2 py-0.5 border border-[#00f3ff]/10">
        TAP TO OSCILLATE
      </div>
    </div>
  );
};

// ---- 2. CYBER_NODE VISUALIZER (Orbiting mesh network nodes) ----
export const CyberNodeVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    const width = 300;
    const height = 160;
    
    // Initialize nodes
    const nodeCount = 18;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
      });
    }
    
    const render = () => {
      const w = (canvas.width = canvas.parentElement?.clientWidth || 300);
      const h = (canvas.height = 160);
      
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, w, h);
      
      // Draw cyber mesh connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        // Move towards pointer if hovered/close
        const dx = mousePos.x - nodes[i].x;
        const dy = mousePos.y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 80) {
          nodes[i].x += (dx / dist) * 1.2;
          nodes[i].y += (dy / dist) * 1.2;
        } else {
          // Standard drift
          nodes[i].x += nodes[i].vx;
          nodes[i].y += nodes[i].vy;
          
          // Bounce on borders
          if (nodes[i].x < 0 || nodes[i].x > w) nodes[i].vx *= -1;
          if (nodes[i].y < 0 || nodes[i].y > h) nodes[i].vy *= -1;
        }
        
        // Draw links
        for (let j = i + 1; j < nodes.length; j++) {
          const ldx = nodes[i].x - nodes[j].x;
          const ldy = nodes[i].y - nodes[j].y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);
          if (ldist < 65) {
            ctx.strokeStyle = `rgba(57, 255, 20, ${1 - ldist / 65})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        
        // Draw node circles
        ctx.fillStyle = '#39ff14';
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#39ff14';
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      // Graphics text overlay
      ctx.fillStyle = '#39ff14';
      ctx.font = '8px monospace';
      ctx.fillText(`DECENTRALIZED ORBIT: ${active ? 'SYNCED' : 'STANDBY'}`, 12, 22);
      ctx.fillText(`ACTIVE LINKS: 18/18 MESH`, 12, h - 12);
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationId);
  }, [mousePos, active]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
    setActive(false);
  };

  return (
    <div 
      className="relative w-full h-[160px] bg-[#050508] border border-[#39ff14]/20 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute top-2 right-2 text-[8px] font-mono text-[#39ff14]/75 bg-[#050508] border border-[#39ff14]/20 px-1.5 py-0.5">
        HOVER TO ATTRACT
      </div>
    </div>
  );
};

// ---- 3. VOID_SYSTEM VISUALIZER (Gravitational black hole effect) ----
export const VoidSystemVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    let angle = 0;
    
    const render = () => {
      const w = (canvas.width = canvas.parentElement?.clientWidth || 300);
      const h = (canvas.height = 160);
      const centerX = w / 2;
      const centerY = h / 2;
      
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, w, h);
      
      // Draw gravitational spin lines
      angle += 0.01 + clickCount * 0.005;
      ctx.lineWidth = 1;
      
      const spirals = 12;
      const points = 160;
      
      for (let s = 0; s < spirals; s++) {
        const spiralAngle = (s / spirals) * Math.PI * 2;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(189, 0, 255, ${0.1 + (s / spirals) * 0.3})`;
        
        for (let p = 15; p < points; p += 3) {
          const ratio = p / points;
          const r = ratio * (Math.max(w, h) / 1.5);
          const currentAngle = spiralAngle + r * 0.025 - angle;
          
          const px = centerX + Math.cos(currentAngle) * r;
          const py = centerY + Math.sin(currentAngle) * r;
          
          if (p === 15) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }
      
      // Event Horizon
      ctx.shadowBlur = 15 + Math.sin(angle * 5) * 5;
      ctx.shadowColor = '#bd00ff';
      ctx.fillStyle = '#000000';
      ctx.strokeStyle = '#bd00ff';
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 22 + clickCount * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      ctx.fillStyle = '#bd00ff';
      ctx.font = '8px monospace';
      ctx.fillText(`GRAVITATIONAL FORCE: ${(1.0 + clickCount * 0.25).toFixed(2)}x`, 12, 22);
      ctx.fillText(`HORIZON SPIN ACCEL`, 12, h - 12);
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationId);
  }, [clickCount]);

  return (
    <div 
      className="relative w-full h-[160px] bg-[#050508] border border-[#bd00ff]/20 overflow-hidden cursor-crosshair select-none"
      onClick={() => setClickCount(prev => (prev + 1) % 8)}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute top-2 right-2 text-[8px] font-mono text-[#bd00ff]/75 bg-[#050508] border border-[#bd00ff]/20 px-1.5 py-0.5">
        CLICK TO ACCELERATE
      </div>
    </div>
  );
};

// ---- 4. GLOBL_ID VISUALIZER (Cryptographic Rotating Shield) ----
export const GloblIdVisualizer: React.FC = () => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => p + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const signatureText = `0x39aB24_${(pulse * 133) % 9999}_f8D3`;

  return (
    <div className="relative w-full h-[160px] bg-[#050508] border border-[#00f3ff]/20 flex flex-col justify-center items-center overflow-hidden font-mono p-4">
      {/* Background radial lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Simulated encryption loop */}
      <svg className="w-[85px] h-[85px] animate-spin text-[#00f3ff]/80" viewBox="0 0 100 100" style={{ animationDuration: '8s' }}>
        <path d="M 50,5 A 45,45 0 0,1 95,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M 95,50 A 45,45 0 0,1 50,95" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 50,95 A 45,45 0 0,1 5,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
        <path d="M 5,50 A 45,45 0 0,1 50,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      
      {/* Central Shield Vector Icon using SVG directly */}
      <div className="absolute flex items-center justify-center text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.4)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <circle cx="12" cy="11" r="2" />
        </svg>
      </div>

      <div className="mt-2 text-[9px] text-[#00f3ff]/60 tracking-wider">
        ENCRYPTING: <span className="text-[#39ff14] text-[10px] font-bold">{signatureText}</span>
      </div>
      <div className="absolute top-2 left-2 text-[8px] text-[#00f3ff]/40">
        SOVEREIGN KEY (DID)
      </div>
    </div>
  );
};

// ---- 5. TEXNOLOGIK_QOBIQ VISUALIZER (Synthesizing Thermal Server Cases) ----
export const TexnologikQobiqVisualizer: React.FC = () => {
  const [grid, setGrid] = useState<number[]>(Array(40).fill(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(g => g.map(() => Math.floor(Math.random() * 85 + 15)));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[160px] bg-[#050508] border border-[#bd00ff]/20 flex flex-col justify-between p-3 overflow-hidden">
      <div className="flex justify-between items-center text-[8px] font-mono text-[#bd00ff]/80">
        <span>THERMAL MATRIX CAPACITANCE</span>
        <span className="text-[#39ff14]/80">FANS: 4800RPM</span>
      </div>

      <div className="grid grid-cols-10 gap-1 my-1 cursor-pointer">
        {grid.map((val, idx) => (
          <div 
            key={idx}
            className="h-2.5 transition-colors duration-150 rounded-xs"
            style={{
              backgroundColor: val > 75 
                ? 'rgba(189, 0, 255, 0.9)' // hot bright violet
                : val > 45 
                ? 'rgba(0, 243, 255, 0.7)' // cyan
                : 'rgba(57, 255, 20, 0.4)' // cold active green
            }}
          />
        ))}
      </div>

      <div className="flex justify-between items-end text-[7.5px] font-mono text-slate-400">
        <span>UNIT LEVEL ID: C-098_Z</span>
        <span className="text-[#bf5aff]">SYS CORE CAP: 100.0%</span>
      </div>
    </div>
  );
};

// ---- 6. AETHER_OS VISUALIZER (Interactive Canvas falling code terminal) ----
export const AetherOsVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = 160);

    const columns = Math.floor(width / 15);
    const rainDrops = Array(columns).fill(0).map(() => Math.random() * 10 - 20);

    const chars = '018ABCDEF/\\_+-[]{}%$@#?*&';

    const render = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 300;
      height = canvas.height = 160;

      // Semi-transparent overlay to create trailing fade effect
      ctx.fillStyle = 'rgba(5, 5, 8, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#39ff14';
      ctx.font = '10px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 15;
        const y = rainDrops[i] * 12;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        } else {
          rainDrops[i] += 0.8;
        }
      }

      // Draw virtual desktop window simulation lines
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.3)';
      ctx.lineWidth = 1;
      ctx.strokeRect(20, 20, width - 40, height - 40);
      
      ctx.fillStyle = 'rgba(5, 5, 8, 0.85)';
      ctx.fillRect(30, 15, 70, 10);
      ctx.fillStyle = '#39ff14';
      ctx.font = '7.5px monospace';
      ctx.fillText('CORE_TERM_01', 35, 23);

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full h-[160px] bg-[#050508] border border-[#39ff14]/20 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

// ---- 7. ONYX_BRAND VISUALIZER (Luxury High Contrast Geometrics) ----
export const OnyxBrandVisualizer: React.FC = () => {
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    const frame = () => {
      setSpin(s => (s + 0.5) % 360);
      requestRef = requestAnimationFrame(frame);
    };
    let requestRef = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  return (
    <div className="w-full h-[160px] bg-[#030303] border border-stone-800 flex items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      
      {/* Overlapping spinning frames representing geometric precision */}
      <div 
        className="w-[80px] h-[80px] border border-stone-800 flex items-center justify-center text-[#e5e5e5] transition-transform duration-75"
        style={{ transform: `rotate(${spin}deg)` }}
      >
        <div 
          className="w-[60px] h-[60px] border border-stone-700 flex items-center justify-center text-[#e5e5e5]"
          style={{ transform: `rotate(${-spin * 1.5}deg)` }}
        >
          <div className="w-[30px] h-[30px] bg-[#f5f5f5]" />
        </div>
      </div>

      <div className="absolute bottom-2 right-3 text-[7.5px] font-mono tracking-[4px] text-stone-500">
        NYX_X 0.1
      </div>
      <div className="absolute top-2 left-3 text-[7.5px] font-sans font-medium tracking-[2.5px] text-[#e5e5e5]">
        ONYX CORP
      </div>
    </div>
  );
};

// ---- 8. VELOCITY_DASH VISUALIZER (Real-time charts streaming) ----
export const VelocityDashVisualizer: React.FC = () => {
  const [data, setData] = useState<number[]>(Array(15).fill(20));

  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => {
        const next = [...prev.slice(1)];
        next.push(Math.floor(Math.random() * 55) + 15);
        return next;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[160px] bg-[#050508] border border-[#39ff14]/20 flex flex-col justify-between p-3 font-mono">
      <div className="flex justify-between items-center text-[7.5px] text-[#39ff14]/70">
        <span>SYS TELEMETRY CORE RX7</span>
        <span className="text-[#00f3ff]">NET RATE: 100MB/S</span>
      </div>

      {/* Bar graph drawing */}
      <div className="flex items-end gap-1.5 h-16 w-full px-1">
        {data.map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-[#39ff14] opacity-80 hover:opacity-100 transition-all rounded-xs"
            style={{ 
              height: `${h}%`,
              backgroundColor: i === data.length - 1 ? '#00f3ff' : '#39ff14'
            }}
          />
        ))}
      </div>

      <div className="flex justify-between items-end text-[7.5px] text-slate-500">
        <span>CHUNKS BUFFERED: OK</span>
        <span className="text-[#39ff14] text-[9px] font-bold">120.30 MS</span>
      </div>
    </div>
  );
};

// ---- 9. KINETIC_FLOW VISUALIZER (Verlet String rope simulator) ----
export const KineticFlowVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pointer, setPointer] = useState({ x: 150, y: 80 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    const height = 160;

    // Kinematic chain nodes (12 points)
    const pointsCount = 14;
    const points: { x: number; y: number; px: number; py: number }[] = [];
    
    // Distribute them horizontally across
    for (let i = 0; i < pointsCount; i++) {
      const rx = (width / (pointsCount - 1)) * i;
      points.push({ x: rx, y: 80, px: rx, py: 80 });
    }

    const gravity = 0.15;
    const friction = 0.96;
    const segmentLength = width / (pointsCount - 1);

    const render = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 300;
      canvas.height = 160;

      // Clear
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);

      // 1. Verlet Integration to update physics of points
      for (let i = 1; i < pointsCount - 1; i++) {
        const p = points[i];
        const vx = (p.x - p.px) * friction;
        const vy = (p.y - p.py) * friction;

        p.px = p.x;
        p.py = p.y;

        p.x += vx;
        p.y += vy + gravity;

        // Pull rope towards pointer in cursor zone
        if (hovered) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 50) {
            p.x += (dx / d) * 1.5;
            p.y += (dy / d) * 1.5;
          }
        }
      }

      // Constrain rope ends (fixed endpoints)
      points[0].x = 0;
      points[0].y = 80;
      points[pointsCount - 1].x = width;
      points[pointsCount - 1].y = 80;

      // 2. Solve Distance constraints (multi-pass relaxation)
      for (let iteration = 0; iteration < 5; iteration++) {
        for (let i = 0; i < pointsCount - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = segmentLength - dist;
          const percent = (diff / dist) * 0.5;

          const offsetX = dx * percent;
          const offsetY = dy * percent;

          if (i > 0) {
            p1.x -= offsetX;
            p1.y -= offsetY;
          }
          if (i + 1 < pointsCount - 1) {
            p2.x += offsetX;
            p2.y += offsetY;
          }
        }
      }

      // 3. Draw the String vector
      ctx.beginPath();
      ctx.strokeStyle = '#bd00ff';
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#bd00ff';

      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < pointsCount; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw anchor circles
      ctx.fillStyle = '#bd00ff';
      points.forEach((p, idx) => {
        if (idx % 2 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // System details text
      ctx.fillStyle = '#bd00ff';
      ctx.font = '8px monospace';
      ctx.fillText(`VERLET PHYSICS FLOW: 60FPS`, 12, 22);
      ctx.fillText(`ANCHOR PTS: ${pointsCount}`, 12, 145);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [pointer, hovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="relative w-full h-[160px] bg-[#050508] border border-[#bd00ff]/20 overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute top-2 right-2 text-[8px] font-mono text-[#bd00ff]/70 bg-[#050508] border border-[#bd00ff]/20 px-1.5 py-0.5">
        HOVER TO WAFT ROPE
      </div>
    </div>
  );
};

// ---- 10. VAULT_CORE VISUALIZER (AES cryptographic dial padlock) ----
export const VaultCoreVisualizer: React.FC = () => {
  const [code, setCode] = useState<string[]>(['F', 'F', 'C', '0']);
  const [decrypted, setDecrypted] = useState(false);

  const cycleCharacter = (index: number) => {
    const chars = '0123456789ABCDEF';
    const current = chars.indexOf(code[index]);
    const nextIdx = (current + 1) % chars.length;
    const newCode = [...code];
    newCode[index] = chars[nextIdx];
    setCode(newCode);

    // Verify code: code "3914" (neon core green reference) decrypts secret
    if (newCode.join('') === '3914') {
      setDecrypted(true);
    } else {
      setDecrypted(false);
    }
  };

  return (
    <div className="w-full h-[160px] bg-[#050508] border border-[#00f3ff]/20 p-3 font-mono flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between items-center text-[7.5px] text-[#00f3ff]/80">
        <span>AES-GCM LOCAL VAULT ENVELOPE</span>
        <span className={decrypted ? "text-[#39ff14]" : "text-amber-500"}>
          {decrypted ? "VAULT DECRYPTED" : "VAULT LOCKED"}
        </span>
      </div>

      <div className="flex justify-center items-center gap-3 my-2">
        {code.map((char, index) => (
          <button 
            key={index}
            onClick={() => cycleCharacter(index)}
            className="w-10 h-10 border border-[#00f3ff]/30 text-[#00f3ff] hover:bg-[#00f3ff]/10 hover:border-[#00f3ff] text-base font-bold flex items-center justify-center transition-colors rounded-xs active:scale-95"
          >
            {char}
          </button>
        ))}
      </div>

      <div className="text-[7.5px] text-center text-slate-400">
        {decrypted ? (
          <span className="text-[#39ff14] tracking-widest animate-pulse">SECRET KEY: S3CUR3_M4ST3R_PA55</span>
        ) : (
          <span>HINT: TYPE GREEN CODE "3914" TO ACCESS SECURE KEY</span>
        )}
      </div>
    </div>
  );
};

// Map component IDs to their specific visualizer
export const getVisualizer = (id: string): React.ReactNode => {
  switch (id) {
    case 'quantum_ui':
      return <QuantumUiVisualizer />;
    case 'cyber_node':
      return <CyberNodeVisualizer />;
    case 'void_system':
      return <VoidSystemVisualizer />;
    case 'globl_id':
      return <GloblIdVisualizer />;
    case 'texnologik_qobiq':
      return <TexnologikQobiqVisualizer />;
    case 'aether_os':
      return <AetherOsVisualizer />;
    case 'onyx_brand':
      return <OnyxBrandVisualizer />;
    case 'velocity_dash':
      return <VelocityDashVisualizer />;
    case 'kinetic_flow':
      return <KineticFlowVisualizer />;
    case 'vault_core':
      return <VaultCoreVisualizer />;
    default:
      return (
        <div className="w-full h-[160px] bg-[#050508] border border-slate-800 flex items-center justify-center text-[10px] text-slate-500 font-mono">
          DIGITAL RENDERING COMPLETE
        </div>
      );
  }
};
