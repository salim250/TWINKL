// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';

async function generateSitemap() {
    // List your URLs
    const links = [
        { url: '/', changefreq: 'weekly', priority: 1.0 }
    ];

    // Create the sitemap stream
    const sitemapStream = new SitemapStream({ hostname: 'https://www.twinkleducation.org' });

    // Pipe it to a file
    const writeStream = createWriteStream('./public/sitemap.xml');
    sitemapStream.pipe(writeStream);

    // Write each link
    links.forEach(link => sitemapStream.write(link));

    // Close the stream
    sitemapStream.end();

    // Wait until the file is finished
    await streamToPromise(sitemapStream);

    console.log('sitemap.xml generated in public/');
}

generateSitemap().catch(err => console.error(err));