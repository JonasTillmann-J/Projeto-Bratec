import Link from 'next/link'
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-semibold">Bem-vindo ao sistema Bratec</h2>
      <p className="text-gray-300 text-center max-w-xl">
        Esta é a versão web para gestão, controle e suporte técnico de impressoras e dispositivos de automação comercial.
      </p>
      <Link
        href="/login"
        /*bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white shadow*/
        className="bg-red-700 hover:bg-blue-900 hover:text-black transition ease-in-out duration-400 px-15 py-5">
        Ir para Login
      </Link>
    </section>
  )
}