import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';
import {Logo, Subtitle, useIn} from '../ui';

const cols = ['#7a4a2a', '#2f7a5a', '#5a6b78', '#9a7b4e'];

export const Scene6: React.FC = () => {
  const f = useCurrentFrame();
  const montage = interpolate(f, [0, 30, 40, 55], [1, 1, 0.55, 0.12], {extrapolateRight: 'clamp'});
  const logo = useIn(35, 24);
  const tag = useIn(60, 18);
  const url = useIn(85, 16);
  const idx = Math.min(3, Math.floor(f / 10));
  return (
    <AbsoluteFill style={{fontFamily, background: '#fff', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{position: 'absolute', inset: 0, opacity: montage, background: `linear-gradient(135deg, ${cols[idx]}, #10161b)`}} />
      <div style={{position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 45%, rgba(4,184,180,.18), transparent 60%)`, opacity: 1 - montage}} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, marginTop: -80}}>
        <div style={{opacity: logo, scale: String(0.85 + logo * 0.15)}}><Logo size={190} /></div>
        <div style={{opacity: tag, translate: `0 ${(1 - tag) * 24}px`, textAlign: 'center', fontSize: 64, fontWeight: 800, color: C.ink, lineHeight: 1.15}}>Capturing Human Experience,<br /><span style={{color: C.orange}}>Delivering Quality Data.</span></div>
        <div style={{opacity: url, fontSize: 52, fontWeight: 700, color: '#fff', background: C.teal, padding: '14px 64px', borderRadius: 999}}>egvox.ai</div>
      </div>
      <Subtitle text="EgvoX. Capturing Human Experience, Delivering Quality Data." />
    </AbsoluteFill>
  );
};
