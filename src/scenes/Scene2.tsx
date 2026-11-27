import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';
import {Hand, Header, PovBackdrop, Subtitle, useIn} from '../ui';

const clips = [
  {k: 'Otomotif', from: '#5a6b78', to: '#10161b', icon: '🚗'},
  {k: 'Manufaktur', from: '#2f7a5a', to: '#08201a', icon: '⚙️'},
  {k: 'Logistik', from: '#9a7b4e', to: '#241a0c', icon: '📦'},
  {k: 'Memasak', from: '#7a4a2a', to: '#1d1208', icon: '🍳'},
];

export const Scene2: React.FC = () => {
  const f = useCurrentFrame();
  const title = useIn(0, 20);
  const idx = Math.min(3, Math.floor(Math.max(0, f - 20) / 24));
  const local = (Math.max(0, f - 20) % 24) / 24;
  const c = clips[idx];
  const sub = useIn(30);
  return (
    <AbsoluteFill style={{fontFamily}}>
      <PovBackdrop from={c.from} to={c.to} zoom={1 + local * 0.06}>
        <Hand x={900} y={420} rot={-10 + idx * 6} />
        <Hand x={420} y={470} rot={12} mirror />
      </PovBackdrop>
      <Header />
      <div style={{position: 'absolute', left: 0, right: 0, top: 150, display: 'flex', justifyContent: 'center', opacity: title, scale: String(0.9 + title * 0.1)}}>
        <div style={{fontSize: 110, fontWeight: 800, color: '#fff', background: `linear-gradient(90deg, ${C.deep}, ${C.turq})`, padding: '8px 56px', borderRadius: 24, transform: 'skewX(-8deg)'}}>Egocentric Video</div>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 330, textAlign: 'center', fontSize: 44, fontWeight: 700, color: '#fff', opacity: sub, textShadow: '0 4px 20px rgba(0,0,0,.6)'}}>First-person video · Real-world interactions</div>
      <div style={{position: 'absolute', left: 120, right: 120, bottom: 220, display: 'flex', gap: 40, justifyContent: 'center'}}>
        {clips.map((cl, i) => (
          <div key={cl.k} style={{fontSize: 40, fontWeight: 700, color: i === idx ? '#fff' : 'rgba(255,255,255,.55)', background: i === idx ? C.teal : 'rgba(0,0,0,.4)', padding: '10px 28px', borderRadius: 16, borderBottom: `6px solid ${i === idx ? C.orange : 'transparent'}`}}>{cl.icon} {cl.k}</div>
        ))}
      </div>
      <div style={{position: 'absolute', left: 120, right: 120, bottom: 190, height: 4, background: 'rgba(4,184,180,.6)', scale: `${interpolate(f, [20, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} 1`, transformOrigin: 'left'}} />
      <Subtitle text="Egocentric Video merekam aktivitas langsung dari perspektif orang pertama, menangkap interaksi nyata antara manusia, objek, dan lingkungan." />
    </AbsoluteFill>
  );
};
