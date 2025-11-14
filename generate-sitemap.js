const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/About', changefreq: 'monthly', priority: 0.8 },
  { url: '/Contact' }
];

const stream = new SitemapStream({ hostname: 'https://kishandev.vercel.app/' });

streamToPromise(
  stream
).then((data) => fs.writeFileSync('./public/sitemap.xml', data.toString()));

links.forEach(link => stream.write(link));
stream.end();