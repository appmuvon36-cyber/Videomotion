import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {S, TOTAL} from './theme';
import {Scene1} from './scenes/Scene1';
import {Scene2} from './scenes/Scene2';
import {Scene3} from './scenes/Scene3';
import {Scene4} from './scenes/Scene4';
import {Scene5} from './scenes/Scene5';
import {Scene6} from './scenes/Scene6';

const Fade: React.FC<{d: number; children: React.ReactNode}> = ({d, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8, d - 8, d], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

export const EgvoXVideo: React.FC = () => {
  const f = useCurrentFrame();
  const end = interpolate(f, [TOTAL - 20, TOTAL], [1, 1]);
  return (
    <AbsoluteFill style={{background: '#fff', opacity: end}}>
      <Sequence name="01 Pembuka" from={S.s1.from} durationInFrames={S.s1.d}><Fade d={S.s1.d}><Scene1 /></Fade></Sequence>
      <Sequence name="02 Egocentric Video" from={S.s2.from} durationInFrames={S.s2.d}><Fade d={S.s2.d}><Scene2 /></Fade></Sequence>
      <Sequence name="03 Nilai" from={S.s3.from} durationInFrames={S.s3.d}><Fade d={S.s3.d}><Scene3 /></Fade></Sequence>
      <Sequence name="04 Ekosistem" from={S.s4.from} durationInFrames={S.s4.d}><Fade d={S.s4.d}><Scene4 /></Fade></Sequence>
      <Sequence name="05 Dataset" from={S.s5.from} durationInFrames={S.s5.d}><Fade d={S.s5.d}><Scene5 /></Fade></Sequence>
      <Sequence name="06 Brand" from={S.s6.from} durationInFrames={S.s6.d}><Fade d={S.s6.d}><Scene6 /></Fade></Sequence>
    </AbsoluteFill>
  );
};
