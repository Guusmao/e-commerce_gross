import fs from 'fs';
let content = fs.readFileSync('src/data/products.js', 'utf8');

// Puma replace
content = content.replaceAll(
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394302/51/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
);

// New Balance replace
content = content.replaceAll(
  "https://cdn.bnws3.com.br/b2online.com.br/image/cache/data/produtos/new-balance/masculino/tenis-new-balance-574-v2-masculino-vinho---cinza-8784-24-01-24-00-1200x1200.jpg",
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
);

// Asics replace (was null.jpg)
content = content.replaceAll(
  "https://asicsbr.vteximg.com.br/arquivos/ids/2744214-1000-1000/null.jpg",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
);

fs.writeFileSync('src/data/products.js', content);
console.log('Fixed main images!');
