const fs = require('fs');
const sharp = require('sharp');

const mandalaSvg = `
<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFDF9" />
      <stop offset="65%" stop-color="#FBF4E8" />
      <stop offset="90%" stop-color="#F2DFCA" />
      <stop offset="100%" stop-color="#E5C7A5" />
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#C07A48" flood-opacity="0.16" />
    </filter>
  </defs>

  <!-- Ambient Shadow & Warm Disc -->
  <circle cx="120" cy="120" r="96" fill="url(#discGrad)" filter="url(#softGlow)" />
  <circle cx="120" cy="120" r="96" stroke="#E3C29D" stroke-width="1" />

  <!-- Outer Fine Scalloped Golden Ring -->
  <circle cx="120" cy="120" r="106" stroke="#D4A76A" stroke-width="1" stroke-dasharray="2 4" opacity="0.6" />
  <circle cx="120" cy="120" r="101" stroke="#C08240" stroke-width="1.4" opacity="0.8" />
  <circle cx="120" cy="120" r="91" stroke="#C08240" stroke-width="0.8" stroke-dasharray="1 3" opacity="0.5" />

  <!-- 16 Decorative Mandala Dots -->
  ${Array.from({ length: 16 }).map((_, i) => {
    const angle = (i * 360 / 16) * Math.PI / 180;
    const x = 120 + 101 * Math.cos(angle);
    const y = 120 + 101 * Math.sin(angle);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#C08240" />`;
  }).join('\n')}
</svg>
`;

fs.writeFileSync('public/images/categories/mandala-disc-bg.svg', mandalaSvg);
console.log('Saved mandala-disc-bg.svg');

