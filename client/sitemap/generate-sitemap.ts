import * as fs from "node:fs";
import * as path from "node:path";
import { sitemapPages } from "./data/sitemapPages";

const BASE_URL = "https://atelier-photo-montpellier.fr";
const today = new Date().toISOString().split("T")[0];

const generateSitemap = () => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  const urlsetClose = `</urlset>`;

  const urls = sitemapPages.map((page) => {
    const imagesXML = page.images?.length
      ? page.images
          .map(
            (img) => `    <image:image>
      <image:loc>${BASE_URL}${img.src}</image:loc>
      <image:title><![CDATA[${img.alt}]]></image:title>
      <image:caption><![CDATA[${img.alt}]]></image:caption>
    </image:image>`
          )
          .join("\n")
      : "";

    return `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${page.lastmod || today}</lastmod>
    <priority>${page.priority}</priority>
${imagesXML}
  </url>`;
  });

  const finalXML = `${xmlHeader}${urlsetOpen}${urls.join("\n")}\n${urlsetClose}`;

  const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

  fs.writeFileSync(outputPath, finalXML.trim(), "utf-8");

  console.log("✅ sitemap.xml généré avec succès ✅");
};

generateSitemap();