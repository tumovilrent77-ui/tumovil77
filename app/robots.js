// app/robots.js – Next.js genera automáticamente /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://tumovil77.com/sitemap.xml',
  };
}
