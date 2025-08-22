export interface Preset {
  name: string;
  width: number;
  height: number;
  background: string;
}

export const PRESETS: Preset[] = [
  { name: 'EC商品: 2000x2000 白背景', width: 2000, height: 2000, background: '#ffffff' },
  { name: 'YouTubeサムネ: 1280x720 余白20px 影', width: 1280, height: 720, background: '#ffffff' },
];
