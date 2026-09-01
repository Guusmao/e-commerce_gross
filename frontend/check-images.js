const fs = require('fs');
const content = fs.readFileSync('src/data/products.js', 'utf8');
const urls = [...content.matchAll(/src: "(http[^"]+)"|image: "(http[^"]+)"/g)].map(m => m[1] || m[2]).filter(Boolean);

async function check() {
  for (const url of urls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, { method: 'HEAD', signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) console.log('[BROKEN]', url, res.status);
    } catch (e) {
      console.log('[ERROR]', url, e.message);
    }
  }
  console.log('Done checking images');
}
check();
