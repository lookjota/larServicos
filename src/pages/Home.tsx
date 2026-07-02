import Image from "../assets/head0.png";

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div className="text-center md:text-left">
{/* 
          <p className="text-sky-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Lar & Soluções
          </p> */}

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Seu amigo do lar para serviços feitos com{" "}
            <span className="text-sky-600">confiança</span>
          </h1>

          <h2 className="mt-6 text-lg text-slate-600 leading-relaxed">
            
Marido de Aluguel em Brasília para Reparos e Manutenção Residencial

            
Amigo do Lar | Manutenção Residencial com Qualidade e Confiança

          </h2>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a href="#servicos" className="px-8 py-4 rounded-2xl bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 hover:scale-[1.03] transition">
              Ver serviços
            </a>

            <a href="#contato" className="px-8 py-4 rounded-2xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition">
              Solicitar orçamento
            </a>

          </div>

          {/* MINI BENEFÍCIOS */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-slate-500">
            <span>✔ Atendimento rápido</span>
            <span>✔ Profissionais experientes</span>
            <span>✔ Garantia de qualidade</span>
          </div>

        </div>

        {/* IMAGEM */}
        <div className="relative flex justify-center">

          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200 to-transparent blur-2xl opacity-50 rounded-3xl"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src={Image}
              alt="Serviços residenciais"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;


// import React from 'react'
// import Image from '../assets/head8.png'

// const Home = () => {
//   return (
//     <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-between h-[calc(100vh-4rem)]">
//       <div className="md:w-1/2 text-center md:text-left">
//         <h1 className="text-[42px] font-bold mb-4 font-serif leading-none">Seu lar merece um serviço à altura da sua confiança</h1>
//         {/* <h1 className="text-[42px] font-bold mb-4 font-serif leading-none">Seu lar merece um serviço à altura da sua confiança</h1> */}
//         <p className="text-lg text-gray-700 mb-8 font-sans">
//           Manutenção residencial com qualidade profissional, atendimento transparente e acabamento impecável. 
//           Da instalação de equipamentos aos pequenos reparos, a Lar & Soluções entrega segurança, agilidade e 
//           excelência para cuidar do que realmente importa: o seu lar.
//         </p>
//         <div>

//           <button className="px-8 py-4 rounded-2xl bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 hover:scale-105 transition">
//             Serviços
//           </button>

//           {/* <button className="rounded-lg bg-sky-600 text-amber-300 border border-sky-600 py-2 px-6 font-semibold hover:bg-sky-800 mr-4">
//             Orçamentos
//           </button> */}
//           {/* <button className="rounded-lg bg-white text-sky-600 py-2 px-6 font-semibold border border-sky-600 hover:bg-sky-100">
//             Serviços
//           </button> */}
//         </div>
//       </div>
//       <div className="w-1/2 justify-center mt-12 md:mt-0">
//         <img src={Image} alt="" className="h-full w-full object-cover" />
//       </div>
//     </div>
//   )
// }

// export default Home