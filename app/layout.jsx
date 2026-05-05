import './globals.css';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://tumovil77.com'),
  title: {
    default: 'TuMovil77 – Rent a Car Ciudad del Este | Alquiler de Autos Paraguay',
    template: '%s | TuMovil77 Rent a Car',
  },
  description:
    'Alquila tu auto en Ciudad del Este en minutos. Entrega inmediata en aeropuerto y hoteles. Garantía desde $200. Atención para Paraguay y Brasil. Reserva por WhatsApp ahora.',
  keywords: [
    'rent a car Ciudad del Este',
    'alquiler de autos Paraguay',
    'rent a car CDE',
    'alquiler de vehículos Ciudad del Este',
    'alquiler autos Ciudad del Este',
    'rent a car Paraguay',
    'alquiler auto CDE',
    'TuMovil77',
  ],
  authors: [{ name: 'TuMovil77' }],
  creator: 'TuMovil77',
  publisher: 'TuMovil77',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // ─── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: 'https://tumovil77.com',
    siteName: 'TuMovil77 Rent a Car',
    title: 'TuMovil77 – Rent a Car Ciudad del Este | Garantía desde $200',
    description:
      'Alquila tu auto en Ciudad del Este en minutos. Entrega en aeropuerto y hoteles. Garantía más baja del mercado. Atención para Paraguay y Brasil.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TuMovil77 Rent a Car – Ciudad del Este',
      },
    ],
  },
  // ─── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'TuMovil77 – Rent a Car Ciudad del Este',
    description:
      'Alquila tu auto en Ciudad del Este en minutos. Garantía desde $200. Reserva por WhatsApp.',
    images: ['/og-image.png'],
  },
  // ─── Favicon ───────────────────────────────────────────────────────────────
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  // ─── Verification (agregar cuando tengas Google Search Console) ────────────
  // verification: {
  //   google: 'TU_GOOGLE_VERIFICATION_CODE',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org – Local Business estructurado para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'TuMovil77 Rent a Car',
              description:
                'Alquiler de autos en Ciudad del Este, Paraguay. Entrega inmediata en aeropuerto y hoteles.',
              url: 'https://tumovil77.com',
              telephone: '+595982777833',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ciudad del Este',
                addressRegion: 'Alto Paraná',
                addressCountry: 'PY',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -25.5097,
                longitude: -54.6106,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              priceRange: '$$',
              currenciesAccepted: 'USD, PYG, BRL',
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
