import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from './theme';

export const ease = Easing.bezier(0.16, 1, 0.3, 1);
export const useIn = (start: number, dur = 18) => {
  const f = useCurrentFrame();
  return interpolate(f, [start, start + dur], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
};

export const Logo: React.FC<{size?: number; color?: string}> = ({size = 56, color = C.teal}) => (
  <div style={{fontFamily, fontWeight: 800, fontSize: size, color, letterSpacing: -1, display: 'flex', alignItems: 'baseline'}}>
    Egvo<span style={{color: C.orange}}>X</span>
  </div>
);

export const Pill: React.FC<{children: React.ReactNode; bg?: string; color?: string; size?: number}> = ({children, bg = C.teal, color = '#fff', size = 30}) => (
  <div style={{fontFamily, fontWeight: 700, fontSize: size, background: bg, color, padding: '10px 26px', borderRadius: 999, display: 'inline-block'}}>{children}</div>
);

export const Subtitle: React.FC<{text: string}> = ({text}) => {
  const o = useIn(2, 10);
  return (
    <div style={{position: 'absolute', left: 140, right: 140, bottom: 56, display: 'flex', justifyContent: 'center', opacity: o}}>
      <div style={{fontFamily, fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: '#fff', textAlign: 'center', background: 'rgba(5,30,35,0.72)', padding: '14px 32px', borderRadius: 16}}>{text}</div>
    </div>
  );
};

export const Header: React.FC<{label?: string}> = ({label}) => (
  <>
    <div style={{position: 'absolute', left: 80, top: 56}}><Logo size={56} color="#fff" /></div>
    {label && (
      <div style={{position: 'absolute', right: 80, top: 60}}>
        <div style={{fontFamily, fontWeight: 700, fontSize: 28, color: '#fff', background: 'rgba(0,0,0,0.45)', border: '2px solid rgba(255,255,255,0.7)', padding: '8px 22px', borderRadius: 12, letterSpacing: 2}}>{label}</div>
      </div>
    )}
  </>
);

export const Box: React.FC<{x: number; y: number; w: number; h: number; label: string; color?: string; start: number}> = ({x, y, w, h, label, color = C.turq, start}) => {
  const p = useIn(start, 14);
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h, border: `5px solid ${color}`, borderRadius: 8, opacity: p, scale: String(0.9 + 0.1 * p)}}>
      <div style={{position: 'absolute', left: -5, top: -52, background: color, color: '#fff', fontFamily, fontWeight: 700, fontSize: 30, padding: '6px 16px', borderRadius: 6, whiteSpace: 'nowrap'}}>{label}</div>
    </div>
  );
};

/** Ilustrasi tangan POV sederhana (SVG) */
export const Hand: React.FC<{x: number; y: number; rot?: number; scale?: number; mirror?: boolean}> = ({x, y, rot = 0, scale = 1, mirror}) => (
  <svg width="420" height="520" viewBox="0 0 420 520" style={{position: 'absolute', left: x, top: y, rotate: `${rot}deg`, scale: String(scale * (mirror ? 1 : 1)), transform: mirror ? 'scaleX(-1)' : undefined}}>
    <rect x="150" y="300" width="130" height="260" rx="40" fill="#C98F6B" />
    <rect x="130" y="330" width="170" height="60" rx="20" fill="#2B3A42" />
    <rect x="110" y="120" width="210" height="230" rx="70" fill="#E0A982" />
    {[0, 1, 2, 3].map((i) => (<rect key={i} x={118 + i * 50} y={30 + (i === 1 || i === 2 ? -20 : 0)} width="42" height="150" rx="21" fill="#E0A982" />))}
    <rect x="40" y="170" width="46" height="130" rx="23" fill="#D89A72" style={{rotate: '-35deg', transformOrigin: '100px 280px'}} />
  </svg>
);

export const PovBackdrop: React.FC<{from: string; to: string; children?: React.ReactNode; zoom?: number}> = ({from, to, children, zoom = 1}) => (
  <div style={{position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 40%, ${from}, ${to})`, scale: String(zoom), overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, boxShadow: 'inset 0 0 280px rgba(0,0,0,0.65)'}} />
    {children}
  </div>
);
