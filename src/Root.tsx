import React from 'react';
import {Composition} from 'remotion';
import {EgvoXVideo} from './EgvoXVideo';
import {FPS, TOTAL} from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="EgvoX-30s" component={EgvoXVideo} width={1920} height={1080} fps={FPS} durationInFrames={TOTAL} />
  </>
);
