import {loadFont} from '@remotion/google-fonts/Inter';
export const {fontFamily} = loadFont('normal', {weights: ['500', '700', '800'], subsets: ['latin']});
export const C = {
  teal: '#039998', deep: '#027F86', turq: '#04B8B4', orange: '#FC840E', yellow: '#FDBA27',
  bg: '#F3FBFB', ink: '#0B2B30', white: '#FFFFFF',
};
export const FPS = 30;
// Scene timing (frames @30fps) — sesuai storyboard
export const S = {
  s1: {from: 0, d: 150}, s2: {from: 150, d: 150}, s3: {from: 300, d: 150},
  s4: {from: 450, d: 180}, s5: {from: 630, d: 150}, s6: {from: 780, d: 120},
};
export const TOTAL = 900;
