import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';
import {Hand, Header, PovBackdrop, Subtitle, useIn} from '../ui';

export const Scene1: React.FC = () => {
  const f = useCurrentFrame();
  const fade = interpolate(f, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  const zoom = interpolate(f, [0, 150], [1, 1.1]);
  const knife = Math.sin(f / 4) * 14;
  const t1 = useIn(25), t2 = useIn(50);
  return (
    <AbsoluteFill style={{opacity: fade, fontFamily}}>
      <PovBackdrop from="#7a4a2a" to="#1d1208" zoom={zoom}>
        <div style={{position: 'absolute', left: 560, top: 640, width: 800, height: 200, borderRadius: 30, background: '#d9b88a'}} />
        {[0, 1, 2, 3, 4].map((i) => (<div key={i} style={{position: 'absolute', left: 700 + i * 100 + (i % 2) * 14, top: 690 + (i % 3) * 18, width: 78, height: 78, borderRadius: '50%', background: C.orange, border: '6px solid #e04b2a', opacity: 0.95}} />))}
        <Hand x={1000} y={380 + knife} rot={-18} />
        <Hand x={380} y={440} rot={14} mirror />
      </PovBackdrop>
      <Header label="POV / FIRST-PERSON" />
      <div style={{position: 'absolute', left: 120, top: 250, width: 1000}}>
        <div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.08, color: '#fff', opacity: t1, translate: `0 ${(1 - t1) * 40}px`, textShadow: '0 6px 30px rgba(0,0,0,.6)'}}>Bagaimana dunia terlihat dari</div>
        <div style={{fontSize: 108, fontWeight: 800, lineHeight: 1.08, color: C.orange, opacity: t2, translate: `0 ${(1 - t2) * 40}px`, textShadow: '0 6px 30px rgba(0,0,0,.6)'}}>sudut pandang manusia?</div>
      </div>
      <Subtitle text="Bagaimana dunia terlihat dari sudut pandang manusia?" />
    </AbsoluteFill>
  );
};
