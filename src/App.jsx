import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  var senha = localStorage.getItem("senhaAtual");

  const chamarProximaSenha = (senhaAtual) => {
    let listaSenhas = localStorage.getItem("listaSenhas")?.split(",") || "";

    if (listaSenhas == "") listaSenhas = [senhaAtual];
    else {
      listaSenhas.unshift(senhaAtual);
      if (listaSenhas.length > 5) {
        listaSenhas.pop();
      }
    }
    senhaAtual++;
    localStorage.setItem("senhaAtual", senhaAtual);
    localStorage.setItem("listaSenhas", listaSenhas.toString());
    senha = senhaAtual;
  };

  var border = "border border-solid border-2 rounded-md p-5 border-slate-600 ";
  var box = `flex flex-col ${border} w-100 h-100`;

  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <button className={border} onClick={() => navigate("/chamadas")}>
        {" "}
        Chamadas{" "}
      </button>
      <button
        onClick={() => {
          chamarProximaSenha(senha);
        }}
      >
        CHAMAR SENHA
      </button>
    </div>
  );
}

export default App;
