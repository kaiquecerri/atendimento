import { useNavigate } from "react-router-dom";

function NovaSenha() {
  const navigate = useNavigate();

  var border = "border border-solid border-2 rounded-full p-5 border-slate-600 ";
  var button = "w-xs self-center bg-sky-200 hover:bg-sky-300 transition-colors duration-300 rounded-full p-5 text-lg font-semibold text-slate-700`;";

  function novaSenha(tipo = "C") {
    if (tipo == "C") {
      let ultimaSenha = localStorage.getItem("ultimaCom") || "C0";
      let listaSenhaCom = localStorage.getItem("listaCom") ? localStorage.getItem("listaCom").split(",") : [];
      let proxSenha =
        ultimaSenha == "C0"
          ? "C1"
          : "C" + String(Number(ultimaSenha.slice(1)) + 1);
      listaSenhaCom.push(proxSenha);
      localStorage.setItem("listaCom", listaSenhaCom);
      localStorage.setItem("ultimaCom", proxSenha);

      navigate("/senhagerada?senha=" + proxSenha);
      return listaSenhaCom;
    } else if (tipo == "P") {
      let ultimaSenha = localStorage.getItem("ultimaPref") || "P0";
      let listaSenhaPref = localStorage.getItem("listaPref") ? localStorage.getItem("listaPref").split(",") : [];
      let proxSenha =
        ultimaSenha == "P0"
          ? "P1"
          : "P" + String(Number(ultimaSenha.slice(1)) + 1);
      listaSenhaPref.push(proxSenha);
      localStorage.setItem("listaPref", listaSenhaPref);
      localStorage.setItem("ultimaPref", proxSenha);

      navigate("/senhagerada?senha=" + proxSenha);
      return listaSenhaPref;
    }
  }

  return (
    <div className="w-screen h-screen bg-sky-50 flex flex-col justify-center gap-5 p-5">
      <h1 className="text-4xl font-bold text-center p-5">SOLICITAR NOVA SENHA</h1>
      <div className="flex flex-row justify-center gap-10">
        <button className={border + button} onClick={() => novaSenha("C")}>
          Senha Comum
        </button>
        <button className={border + button} onClick={() => novaSenha("P")}>
          Senha Preferencial
        </button>
      </div>
    </div>
  );
}

export default NovaSenha;

/*
  <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <button
        onClick={() => {
          novaSenha("P");
        }}
      >
        PEDIR NOVA SENHA PREFERENCIAL
      </button>
      <button
        onClick={() => {
          novaSenha("C");
        }}
      >
        PEDIR NOVA SENHA COMUM
      </button>
    </div>
*/