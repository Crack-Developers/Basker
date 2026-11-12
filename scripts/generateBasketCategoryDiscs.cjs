const fs = require('fs');
const sharp = require('sharp');

// 240x240 SVG background template matching the festive mandala halo from homeessentials reference
const createMandalaBg = () => {
  return Buffer.from(`
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFDF9" />
          <stop offset="60%" stop-color="#FBF4E8" />
          <stop offset="88%" stop-color="#F3E0CB" />
          <stop offset="100%" stop-color="#E7C9A9" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#C07A48" flood-opacity="0.16" />
        </filter>
      </defs>

      <!-- Base Disc with Ambient Drop Shadow -->
      <circle cx="120" cy="120" r="95" fill="url(#discGrad)" filter="url(#softGlow)" />
      <circle cx="120" cy="120" r="95" stroke="#E5C7A5" stroke-width="1.2" />

      <!-- Outer Festive Mandala Scalloped Arc & Golden Rings -->
      <circle cx="120" cy="120" r="106" stroke="#D4A76A" stroke-width="1" stroke-dasharray="2 4" opacity="0.65" />
      <circle cx="120" cy="120" r="101" stroke="#C07A48" stroke-width="1.5" opacity="0.85" />
      <circle cx="120" cy="120" r="90" stroke="#C07A48" stroke-width="0.8" stroke-dasharray="1 3" opacity="0.5" />

      <!-- 16 Decorative Golden Mandala Dots around ring (r=101) -->
      ${Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360 / 16) * Math.PI / 180;
        const x = 120 + 101 * Math.cos(angle);
        const y = 120 + 101 * Math.sin(angle);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#C07A48" />`;
      }).join('\n')}
    </svg>
  `);
};

async function generateAll() {
  const bgBuffer = await sharp(createMandalaBg()).png().toBuffer();

  const items = [
    {
      id: 'cat-aviary',
      src: 'public/images/herimart-basket-floating.png',
      isPng: true,
      size: 145,
    },
    {
      id: 'cat-urns',
      src: 'public/images/herimart-floating-02.png',
      isPng: true,
      size: 155,
    },
    {
      id: 'cat-cloches',
      src: 'public/images/herimart-floating-03.png',
      isPng: true,
      size: 155,
    },
    {
      id: 'cat-geometric',
      src: 'public/images/categories/basket-geometric.jpg',
      isPng: false,
      size: 155,
    },
    {
      id: 'cat-tiered',
      src: 'public/images/categories/basket-tiered.jpg',
      isPng: false,
      size: 150,
    },
    {
      id: 'cat-trugs',
      src: 'public/images/categories/basket-trug.jpg',
      isPng: false,
      size: 155,
    },
    {
      id: 'cat-sculptural',
      src: 'public/images/categories/basket-sculptural.jpg',
      isPng: false,
      size: 155,
    },
  ];

  for (const item of items) {
    let productImg;
    if (item.isPng) {
      // It's already transparent PNG
      productImg = await sharp(item.src)
        .resize(item.size, item.size, { fit: 'inside' })
        .toBuffer();
    } else {
      // It's a JPG on pure white background. Let's make pure white transparent!
      const raw = await sharp(item.src)
        .resize(item.size, item.size, { fit: 'inside' })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const { data, info } = raw;
      // Convert white (r > 245, g > 245, b > 245) to transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2];
        if (r > 242 && g > 242 && b > 242) {
          data[i+3] = 0; // alpha 0
        } else if (r > 225 && g > 225 && b > 225) {
          // Soft edge blending
          const factor = (242 - Math.max(r, g, b)) / (242 - 225);
          data[i+3] = Math.round(255 * factor);
        }
      }

      productImg = await sharp(data, {
        raw: {
          width: info.width,
          height: info.height,
          channels: 4,
        }
      }).png().toBuffer();
    }

    // Composite onto mandala disc
    await sharp(bgBuffer)
      .composite([{ input: productImg, gravity: 'center' }])
      .png({ quality: 100 })
      .toFile(`public/images/categories/${item.id}.png`);

    console.log(`Generated public/images/categories/${item.id}.png`);
  }
}

generateAll().catch(console.error);

