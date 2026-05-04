import { useState, useEffect } from "react";
import falarSenha from "./context/say";

function Chamadas() {
  function atualizarDataHora() {
    const agora = new Date();

    let diaSemana = agora.toLocaleDateString('pt-BR', { weekday: 'long' });

    diaSemana = diaSemana.replace('-feira', '');
    diaSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

    const diaNumero = agora.getDate();
    const mes = agora.toLocaleDateString('pt-BR', { month: 'long' });
    const horaMinuto = agora.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return { diaSemana, diaNumero, mes, horaMinuto };
  }

  const { diaSemana, diaNumero, mes, horaMinuto } = atualizarDataHora();

  setInterval(atualizarDataHora, 1000);
  
  const [listaSenhas, setListaSenhas] = useState(
    localStorage.getItem("listaSenhas")?.split(",") || [],
  );

  const [senhasPref, setSenhasPref] = useState(
    localStorage.getItem("listaPref")?.split(",") || [],
  );

  const [senhasCom, setSenhasCom] = useState(
    localStorage.getItem("listaCom")?.split(",") || [],
  );

  useEffect(() => {
    const escutarNovaSenha = (event) => {
      if (event.key == "listaSenhas") {
        let senhas = event.newValue?.split(",") || []
        setListaSenhas(senhas);
        falarSenha(senhas[0]);
      }

      if (event.key == "listaCom") {
        setSenhasCom(event.newValue?.split(",") || []);
      }

      if (event.key == "listaPref") {
        setSenhasPref(event.newValue?.split(",") || []);
      }
    };

    window.addEventListener("storage", escutarNovaSenha);

    return () => window.removeEventListener("storage", escutarNovaSenha);
  }, []);

  var border = "border border-solid border-2 rounded-md p-5 border-slate-600 ";
  var box = `flex flex-col ${border} w-100 h-100`;
  return (
    <div className="w-screen h-screen bg-sky-50 flex flex-col justify-center gap-5 p-5">
      <div className="w-screen flex flex-row">
        <section className="">
          <p className="">{diaSemana} - {diaNumero} de {mes}</p>
          <p className="">{horaMinuto}</p>
        </section>
      </div>
    </div>
  );
}

export default Chamadas;
/*
<div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <div className={box}>
        <h1 className="font-bold text-3xl">Próximas senhas</h1>
        <div className="flex flex-row">
          <ul className="ml-3 mt-3 text-xl w-[50%]">
            <h1>Comum</h1>
            {senhasCom.length > 0 &&
              senhasCom.slice(0, 8).map((s, index) => <li key={index}>{s}</li>)}
              {senhasCom.length > 8 && <li>...</li>}
          </ul>

          <ul className="ml-3 mt-3 text-xl w-[50%]">
            <h1>Preferencial</h1>
            {senhasPref.length > 0 &&
              senhasPref.slice(0, 8).map((s, index) => <li key={index}>{s}</li>)}
              {senhasPref.length > 8 && <li>...</li>}
          </ul>
        </div>
      </div>
      <div className={box}>
        <h1 className="font-bold text-3xl">Senhas chamadas</h1>
        <ul className="ml-3 mt-3 text-xl">
          <li>
            <h1 className="font-bold text-2xl text-red-700">{listaSenhas[0]}</h1>{" "}
          </li>
          <ul>
            {listaSenhas.length > 0 &&
              listaSenhas.slice(1, 6).map((s, index) => <li key={index}>{s}</li>)}
          </ul>
        </ul>
      </div>
    </div>
*/