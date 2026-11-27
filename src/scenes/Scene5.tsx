import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';
import {Logo, Subtitle, useIn} from '../ui';

const steps = [
  {t: 'Video Egocentric', i: '🎬'},
  {t: 'Annotation', i: '🔲'},
  {t: 'Metadata & Labels', i: '📄'},
  {t: 'Dataset Ready', i: '📦'},
];
const rows = [['Dataset', 'Delivery Dataset – EGX-0256'], ['Total Video', '1.245 file'], ['Total Anotasi', '56.280 label'], ['Ukuran Paket', '356,2 GB'], ['Versi', 'v1.0']];

export const Scene5: React.FC = () => {
  const f = useCurrentFrame();
  const head = useIn(0, 18);
  const card = useIn(55, 24);
  const ready = useIn(105, 14);
  return (
    <AbsoluteFill style={{fontFamily, background: C.bg}}>
      <div style={{position: 'absolute', left: 80, top: 56}}><Logo /></div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 52, fontWeight: 800, color: C.ink, opacity: head, letterSpacing: 2}}>REAL-WORLD VIDEO → <span style={{color: C.orange}}>STRUCTURED DATASET</span></div>
      <div style={{position: 'absolute', left: 120, right: 120, top: 190, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {steps.map((s, i) => {
          const p = useIn(12 + i * 14, 14);
          return (
            <React.Fragment key={s.t}>
              {i > 0 && <div style={{fontSize: 60, color: C.turq, fontWeight: 800, opacity: p}}>→</div>}
              <div style={{width: 340, background: '#fff', borderRadius: 24, padding: '28px 10px', textAlign: 'center', boxShadow: '0 10px 30px rgba(2,127,134,.18)', opacity: p, translate: `0 ${(1 - p) * 40}px`, border: `4px solid ${i === 3 ? C.orange : '#cfeaea'}`}}>
                <div style={{fontSize: 80}}>{s.i}</div>
                <div style={{fontSize: 32, fontWeight: 800, color: C.deep, marginTop: 8}}>{s.t}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div style={{position: 'absolute', left: 260, right: 260, top: 480, height: 400, background: '#fff', borderRadius: 26, boxShadow: '0 30px 80px rgba(2,127,134,.28)', opacity: card, translate: `0 ${(1 - card) * 120}px`, padding: 34, display: 'flex', gap: 40}}>
        <div style={{flex: 1}}>
          <div style={{fontSize: 34, fontWeight: 800, color: C.deep, marginBottom: 14}}>Dataset Delivery</div>
          {rows.map(([k, v], i) => {
            const p = useIn(70 + i * 8, 10);
            return (<div key={k} style={{display: 'flex', justifyContent: 'space-between', fontSize: 30, fontWeight: 700, color: C.ink, padding: '8px 0', borderBottom: '2px solid #e4f3f3', opacity: p}}><span style={{color: '#5b7b7f'}}>{k}</span><span>{v}</span></div>);
          })}
        </div>
        <div style={{width: 330, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, opacity: ready, scale: String(0.85 + ready * 0.15)}}>
          <div style={{width: 120, height: 120, borderRadius: '50%', background: C.turq, color: '#fff', fontSize: 70, display: 'grid', placeItems: 'center'}}>✓</div>
          <div style={{fontSize: 34, fontWeight: 800, color: C.deep, textAlign: 'center'}}>Ready for Delivery</div>
          <div style={{fontSize: 22, fontWeight: 700, color: '#fff', background: C.orange, padding: '8px 24px', borderRadius: 999}}>Data ilustrasi</div>
        </div>
      </div>
      <Subtitle text="Dari aktivitas nyata menjadi data berkualitas, siap digunakan untuk kebutuhan pengembangan teknologi." />
    </AbsoluteFill>
  );
};
