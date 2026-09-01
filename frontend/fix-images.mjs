import fs from 'fs';

let content = fs.readFileSync('src/data/products.js', 'utf8');

// Replace the broken images arrays with the main image
content = content.replace(/image:\s*"(.*?)",\s*images:\s*\[\s*\{\s*src:\s*".*?"\s*\},?\s*\{\s*src:\s*".*?"\s*\},?\s*\{\s*src:\s*".*?"\s*\}\s*\]/gs, (match, url) => {
  return `image: "${url}",\n    images: [\n      { src: "${url}" },\n      { src: "${url}" },\n      { src: "${url}" }\n    ]`;
});

// Also fix the Asics main image which is explicitly 'null.jpg' (404)
content = content.replace(
  "https://asicsbr.vteximg.com.br/arquivos/ids/2744214-1000-1000/null.jpg", 
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
);

fs.writeFileSync('src/data/products.js', content);
console.log("Images fixed in products.js");
