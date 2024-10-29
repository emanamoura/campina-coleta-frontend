// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Head>
        <title>Campina Coleta</title>
        <meta name="description" content="Campina Coleta - Juntos pela sustentabilidade!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <section className="flex items-center justify-between p-10 bg-green-100 rounded-b-lg shadow-md">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-green-800">Campina Coleta</h1>
            <p className="mt-4 text-lg text-green-600">
              Juntos, estamos fazendo a diferença! A cada coleta, ajudamos a transformar nossa cidade em um lugar mais limpo e sustentável.
            </p>
          </div>
          <Image src="/campina_coleta.jpg" alt="Campina Coleta" width={400} height={400} className="rounded-lg shadow-lg" />
        </section>

        <section className="py-12 px-8 bg-white">
          <h2 className="text-3xl font-bold text-green-800">A Importância da Coleta de Lixo</h2>
          <p className="mt-4 text-lg text-gray-700">
            A coleta de lixo é essencial para manter nossas ruas limpas, proteger o meio ambiente e promover a saúde pública. 
            Ao participarmos da coleta, contribuímos para um futuro mais verde e sustentável. 
            Ações de conscientização e participação ativa são fundamentais para garantir um ambiente mais saudável para todos.
          </p>
        </section>

        <section className="py-12 px-8 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-800">Depoimentos</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                text: "O Campina Coleta mudou minha percepção sobre a importância do lixo!",
                author: "Maria, participante do projeto"
              },
              {
                text: "Juntos, estamos construindo um futuro melhor para nossas crianças!",
                author: "João, voluntário"
              },
              {
                text: "A iniciativa do Campina Coleta é inspiradora e essencial para a nossa comunidade.",
                author: "Ana, moradora local"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-white border-l-4 border-green-500 shadow rounded-lg transition-transform transform hover:scale-105">
                <p className="text-lg text-green-600">"{testimonial.text}"</p>
                <cite className="text-green-500">- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="p-4 bg-green-800 text-white text-center">
        <p>&copy; {currentYear} Campina Coleta. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
