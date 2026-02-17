import fs from "fs";
import path from "path";

const domain = "https://toppokiesaustralia.net";

const now = new Date();
const malaysiaTime = new Date(
  now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" })
);

// 手動格式化成 ISO 樣式（含時間與時區）
const pad = (num) => String(num).padStart(2, "0");
const formattedDateTime = `${malaysiaTime.getFullYear()}-${pad(
  malaysiaTime.getMonth() + 1
)}-${pad(malaysiaTime.getDate())}T${pad(
  malaysiaTime.getHours()
)}:${pad(malaysiaTime.getMinutes())}:${pad(
  malaysiaTime.getSeconds()
)}+08:00`;

const urls = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about-toppokiesaustralia", changefreq: "monthly", priority: "0.8" },
];

const sitemapUrls = urls
  .map(
    ({ path: urlPath, changefreq, priority }) => `  <url>
    <loc>${domain}${urlPath}</loc>
    <lastmod>${formattedDateTime}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

const publicDir = path.resolve("./public");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

console.log("✅ sitemap.xml & robots.txt generated successfully!");
console.log(`Last modified (MYT): ${formattedDateTime}`);
