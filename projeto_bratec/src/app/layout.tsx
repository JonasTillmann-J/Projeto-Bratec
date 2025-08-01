import './globals.css'


export const metadata = {
  title: 'Bratec Web',
  description: 'Sistema da Bratec para controle e gestão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 shadow-md">
          <h1 className="text-2xl font-bold">Bratec Assistencia tecnica</h1>
        </header>

        <main className="p-6 min-h-screen">{children}</main>

        <footer className="bg-gray-800 p-4 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} ArkTech Soluções sofisticadas para Empressas – Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}
