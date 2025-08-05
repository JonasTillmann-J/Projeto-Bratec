import Link from 'next/link'
export default function Home() {
  return (
  <section className=''>
    <nav className=''>
      <div>
        <Link href="/" className="text-5xl font-bold text-gray-800 p-0.7 absolute left-0 top-8">
          Bratec
        </Link>
      </div>
      <ul className='list-none flex justify-center gap-4 p-4 '>
        <li className='ml-15 bg-transparent border-3 border-transparent hover:border-pink-800 rounded-full hover:bg-red-700 transition duration-700'>
          <Link href="/" className="text-blue-500 text-2xl m-3">
            Serviços
          </Link>
        </li>
        <li className='ml-15 bg-transparent border-3 border-transparent hover:border-pink-800 rounded-full hover:bg-red-700 transition duration-700'>
          <Link href="/" className='text-blue-500 text-2xl m-3'>
            Produtos
          </Link>
        </li>
        <li className='ml-15 bg-transparent border-3 border-transparent hover:border-pink-800 rounded-full hover:bg-red-700 transition duration-700'>
          <Link href="/" className='text-blue-500 text-2xl m-3'>
            Sobre-Nós
          </Link>
        </li>
        <li className='ml-15 bg-transparent border-3 border-transparent hover:border-pink-800 rounded-full hover:bg-red-700 transition duration-700'>
          <Link href="/" className='text-blue-500 text-2xl m-3'>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  </section>
  
  ) 
}