import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';
import {Box, Hand, Header, PovBackdrop, Subtitle, useIn} from '../ui';

const items = ['Mengambil Objek', 'Memindahkan Objek', 'Menempatkan Objek', 'Urutan Tindakan'];

export const Scene3: React.FC = () => {
  const f = useCurrentFrame();
  const panel = useIn(35, 22);
  const x = interpolate(f, [20, 110], [0, 140], {extrapolateRight: 'clamp'});
  const t = useIn(10);
  return (
    <AbsoluteFill style={{fontFamily}}>
      <PovBackdrop from="#8fa6b8" to="#1a2430">
        {[0, 1, 2, 3, 4, 5].map((i) => (<div key={i} style={{position: 'absolute', left: 80 + i * 200, top: 160 + (i % 2) * 60, width: 90, height: 260, borderRadius: 24, background: 'rgba(220,235,245,.55)'}} />))}
        <div style={{position: 'absolute', left: 820 + x, top: 470, width: 140, height: 240, borderRadius: 40, background: '#2a6fd6'}} />
        <Hand x={640 + x} y={430} rot={-6} />
      </PovBackdrop>
      <Header />
      <Box x={700 + x} y={440} w={330} h={430} label="hand 0.98" color={C.turq} start={18} />
      <Box x={810 + x} y={500} w={170} h={270} label="object: bottle 0.96" color={C.yellow} start={30} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 200, textAlign: 'center', fontSize: 64, fontWeight: 800, letterSpacing: 6, color: '#fff', opacity: t, textShadow: '0 4px 24px rgba(0,0,0,.7)'}}>CONTEXT · ACTION · INTERACTION</div>
      <div style={{position: 'absolute', right: 80, top: 330, width: 520, background: 'rgba(255,255,255,.96)', borderRadius: 24, padding: '28px 32px', opacity: panel, translate: `${(1 - panel) * 120}px 0`, boxShadow: '0 20px 60px rgba(0,0,0,.35)'}}>
        <div style={{fontSize: 38, fontWeight: 800, color: C.deep, marginBottom: 18}}>Activity Context</div>
        {items.map((it, i) => {
          const p = useIn(55 + i * 12, 12);
          return (<div key={it} style={{fontSize: 32, fontWeight: 700, color: C.ink, padding: '10px 0', display: 'flex', justifyContent: 'space-between', opacity: p}}><span>{it}</span><span style={{color: C.turq}}>✓</span></div>);
        })}
      </div>
      <Subtitle text="Perspektif ini menghadirkan konteks aktivitas, urutan tindakan, dan detail interaksi yang sulit terlihat dari kamera biasa." />
    </AbsoluteFill>
  );
};
