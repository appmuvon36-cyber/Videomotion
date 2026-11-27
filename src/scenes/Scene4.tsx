import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';
import {Box, Hand, Logo, PovBackdrop, Subtitle, useIn} from '../ui';

const roles = [
  {t: 'Video Contributors', s: 'Pengambil Video', c: C.teal, i: '📹'},
  {t: 'Data Annotators', s: 'Anotasi Data', c: C.orange, i: '🏷️'},
  {t: 'QA Specialists', s: 'Review & Quality Assurance', c: C.deep, i: '🛡️'},
];

export const Scene4: React.FC = () => {
  const f = useCurrentFrame();
  const head = useIn(0, 20);
  const ui = useIn(10, 28);
  const qa = interpolate(f, [100, 125], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const progress = interpolate(f, [20, 150], [0, 100], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{fontFamily, background: C.bg}}>
      <div style={{position: 'absolute', left: 80, top: 56}}><Logo /></div>
      <div style={{position: 'absolute', left: 80, top: 160, opacity: head, translate: `0 ${(1 - head) * 30}px`}}>
        <div style={{fontSize: 56, fontWeight: 800, color: C.ink, lineHeight: 1.1}}>Ekosistem<br />Produksi Dataset<br /><span style={{color: C.orange}}>yang Terintegrasi</span></div>
      </div>
      {roles.map((r, i) => {
        const p = useIn(30 + i * 20, 16);
        return (
          <div key={r.t} style={{position: 'absolute', left: 80, top: 440 + i * 130, width: 520, display: 'flex', alignItems: 'center', gap: 20, background: '#fff', borderRadius: 20, padding: '18px 24px', boxShadow: '0 8px 24px rgba(2,127,134,.15)', opacity: p, translate: `${(1 - p) * -60}px 0`, border: i === 2 ? `4px solid ${C.yellow}` : '4px solid transparent', scale: String(i === 2 ? 1 + qa * 0.05 : 1)}}>
            <div style={{width: 64, height: 64, borderRadius: 16, background: r.c, display: 'grid', placeItems: 'center', fontSize: 34}}>{r.i}</div>
            <div><div style={{fontSize: 32, fontWeight: 800, color: C.ink}}>{r.t}</div><div style={{fontSize: 24, fontWeight: 500, color: '#4b6a6e'}}>{r.s}</div></div>
          </div>
        );
      })}
      {/* Mockup workspace */}
      <div style={{position: 'absolute', left: 700, top: 150, width: 1140, height: 690, borderRadius: 26, background: '#fff', boxShadow: '0 30px 80px rgba(2,127,134,.3)', overflow: 'hidden', opacity: ui, translate: `0 ${(1 - ui) * 200}px`}}>
        <div style={{height: 56, background: C.deep, color: '#fff', fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', padding: '0 24px'}}>EgvoX Annotation Workspace · AN-0543 (Cooking)</div>
        <div style={{position: 'relative', margin: 24, height: 480, borderRadius: 16, overflow: 'hidden'}}>
          <PovBackdrop from="#7a4a2a" to="#1d1208"><Hand x={300} y={150} rot={-8} /><Hand x={560} y={170} rot={10} mirror /></PovBackdrop>
          <Box x={290} y={200} w={300} h={260} label="hand (L) 0.98" start={40} color={C.turq} />
          <Box x={560} y={200} w={250} h={240} label="knife 0.96" start={55} color={C.yellow} />
          <Box x={380} y={340} w={160} h={110} label="tomato 0.97" start={70} color="#e04b2a" />
        </div>
        <div style={{margin: '0 24px', height: 14, borderRadius: 7, background: '#d7ecec'}}>
          <div style={{width: `${progress}%`, height: '100%', borderRadius: 7, background: `linear-gradient(90deg, ${C.turq}, ${C.orange})`}} />
        </div>
        <div style={{margin: '14px 24px', fontSize: 22, fontWeight: 700, color: C.deep, display: 'flex', gap: 30}}><span>▶ 00:05 / 00:30</span><span style={{opacity: qa, color: C.orange}}>✔ QA Checklist: Approved</span></div>
      </div>
      {/* Pipeline */}
      <div style={{position: 'absolute', left: 80, right: 80, top: 870, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30, fontSize: 38, fontWeight: 800}}>
        {['CAPTURE', 'ANNOTATION', 'QUALITY ASSURANCE'].map((s, i) => {
          const p = useIn(50 + i * 20, 14);
          const col = [C.teal, C.orange, C.deep][i];
          return (<React.Fragment key={s}>{i > 0 && <span style={{color: C.deep, opacity: p}}>→</span>}<span style={{background: col, color: '#fff', padding: '10px 34px', borderRadius: 999, opacity: p, scale: String(i === 2 ? 1 + qa * 0.08 : 1)}}>{s}</span></React.Fragment>);
        })}
      </div>
      <Subtitle text="EgvoX menghubungkan video contributors, data annotators, dan quality assurance untuk menghasilkan dataset yang terstruktur dan terverifikasi." />
    </AbsoluteFill>
  );
};
