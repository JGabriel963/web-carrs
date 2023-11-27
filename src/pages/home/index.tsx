import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="flex bg-white p-4 rounded-lg w-full max-w-3xl mx-auto">
        <input
          className="w-full rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo o Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.infomoney.com.br/wp-content/uploads/2022/11/main_webp_comprar-haval-h6_38eb3e1db2.jpg-e1690562379379.jpg?fit=848%2C496&quality=50&strip=all"
            alt="Car"
          />

          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-5">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo Grande - MS</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
