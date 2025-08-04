import Link from 'next/link'
export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Bratec Assistência Técnica</h1>
      <p className="mb-4">Reparo profissional de celulares em Blumenau‑SC.</p>
      <Link href="/servicos" className="text-pink-500 hover:underline">
        Confira nossos serviços
      </Link>
    </div>
  ) 
}