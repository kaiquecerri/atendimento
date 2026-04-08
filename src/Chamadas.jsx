import { useState, useEffect } from "react";

function Chamadas() {
  const [senha, setSenha] = useState(
    localStorage.getItem("senhaAtual") || "---",
  );

  const [listaSenhas, setListaSenhas] = useState(
    localStorage.getItem("listaSenhas")?.split(",") || "",
  );

  useEffect(() => {
    const escutarNovaSenha = (event) => {
      if (event.key == "senhaAtual") {
        setSenha(event.newValue);
        //new Audio('/alerta.mp3').play();
      }

      if (event.key == "listaSenhas") {
        setListaSenhas(event.newValue?.split(","));
        //new Audio('/alerta.mp3').play();
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
        <ul className="ml-3 mt-3 text-xl">
          <li>100</li>
          <li>101</li>
          <li>102</li>
        </ul>
      </div>
      <div className={box}>
        <h1 className="font-bold text-3xl">Senhas chamadas</h1>
        <ul className="ml-3 mt-3 text-xl">
          <li>
            <h1 className="font-bold text-2xl text-red-700">{senha}</h1>{" "}
          </li>
          <ul>
            {listaSenhas.length > 0 &&
              listaSenhas.map((s, index) => <li key={index}>{s}</li>)}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Chamadas;
