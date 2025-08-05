import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bratec Assistência Técnica – Blumenau SC | Reparo de Celulares',
  description:
    'Bratec Assistência Técnica em Blumenau‑SC (Rua José Deeke, 906 – Bairro Escola Agrícola) – manutenção e reparo de celulares com qualidade e garantia.',
  keywords: [
    'Bratec',
    'assistência técnica',
    'Blumenau',
    'celular',
    'reparo de celular',
    'José Deeke',
    'Escola Agrícola',
  ],
  authors: [{ name: 'Bratec Assistência Técnica' }, { name: 'Jonas Tillmann junior' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Bratec Assistência Técnica – Blumenau SC',
    description:
      'Reparo profissional de celulares em Blumenau‑SC, localizado na Rua José Deeke, 906, Bairro Escola Agrícola.',
    url: 'https://www.bratec.com.br/',
    siteName: 'Bratec Assistência Técnica',
    images: [
      {
        url: 'https://www.bratec.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo da Bratec',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bratec Assistência Técnica – Blumenau SC',
    description:
      'Conserto e manutenção de celulares na Rua José Deeke, 906 – Escola Agrícola, Blumenau‑SC.',
    images: ['https://www.bratec.com.br/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://www.bratec.com.br'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-gray-900 text-white">
        <main className="p-6 min-h-screen">{children}
          
        </main>
        <footer className="bg-gray-800 p-4 text-sm text-center text-gray-400">
          &copy; 2025 ArkTech – Soluções sofisticadas para empresas.
          Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}