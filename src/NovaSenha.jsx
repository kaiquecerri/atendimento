import { useState } from "react";

function NovaSenha() {
  /*
        CRIAR VARIAVEL PARA COMUM E PREFERENCIAL, ARMAZENAR EM ARRAY E UTILIZAR ORDEM PARA CHAMAR
    */
  const [proxSenhas, setProxSenhas] = useState(
    localStorage.getItem("proxSenhas")?.split() || "",
  );
  /*
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
  */

  function pedirNovaSenha(type = "C") {
    if (type == "C") {
    } else {
    }
  }

  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <h1>{proxSenhas}</h1>
      <button
        onClick={() => {
          console.log("senha");
        }}
      >
        PEDIR NOVA SENHA
      </button>
    </div>
  );
}

export default NovaSenha;
