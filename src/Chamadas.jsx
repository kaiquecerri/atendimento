import { useState, useEffect } from "react";
import falarSenha from "./context/say";

function Chamadas() {
  const [dataHora, setDataHora] = useState(atualizarDataHora());

  useEffect(() => {
    const interval = setInterval(() => {
      setDataHora(atualizarDataHora());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
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

  const [esperaAproximada, setEsperaAproximada] = useState(0);

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

  useEffect(() => {
    setEsperaAproximada((senhasCom.length * 5) + (senhasPref.length * 5) + " minutos");
}, [senhasCom, senhasPref]);

  var border = "border border-solid border-2 rounded-md p-5 border-slate-600 ";
  var box = `flex flex-col ${border} w-100 h-100`;
  return (
    <div className="w-full h-screen bg-sky-50 flex flex-col justify-center gap-5 p-5">
      <div className="w-full flex flex-row justify-between">
        <section className="">
          <p className="">{diaSemana} - {diaNumero} de {mes}</p>
          <p className="text-2xl">{horaMinuto}</p>
        </section>

        <section className="text-right">
          <p className="">Tempo de espera aproximado:</p>
          <p className="text-2xl">{esperaAproximada}</p>
        </section>
      </div>
      <div className="w-full flex flex-row justify-between">

        <section className="flex flex-row gap-5">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">Próximas Senhas</h1>
            <div className="flex flex-row">
            <ul className="mt-3 text-xl w-[50%]">
              <h1>Comum</h1>
              {senhasCom.length > 0 &&
                senhasCom.slice(0, 6).map((s, index) => <li key={index}>{s}</li>)}
                {senhasCom.length > 6 && <li>...</li>}
            </ul>

            <ul className="mt-3 text-xl w-[50%]">
              <h1>Preferencial</h1>
              {senhasPref.length > 0 &&
                senhasPref.slice(0, 6).map((s, index) => <li key={index}>{s}</li>)}
                {senhasPref.length > 6 && <li>...</li>}
            </ul>
            </div>
          </div>

          <span className="h-full w-0 border-l"></span>

          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">Próximas Senhas</h1>
            <div className="flex flex-row justify-end text-end">
            <ul className="mt-3 text-xl w-[50%] ">
              <li>
                <h1 className="font-bold text-2xl text-sky-700">{listaSenhas[0]}</h1>{" "}
              </li>
              <ul>
                {listaSenhas.length > 0 &&
                  listaSenhas.slice(1, 6).map((s, index) => <li key={index}>{s}</li>)}
              </ul>
            </ul>
            </div>
          </div>

        </section>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/gscClPZSn6Q?si=_2Li_ocVTNapsSol&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Chamadas;
