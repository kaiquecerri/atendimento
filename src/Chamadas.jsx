import { useState, useEffect } from "react";
import falarSenha from "./context/say";

function Chamadas() {
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
  );
}

export default Chamadas;
