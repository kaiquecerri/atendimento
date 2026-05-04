function Administracao() {
  var border =
    "border border-solid border-2 rounded-full p-5 border-slate-600 ";
  var button =
    "w-xs self-center bg-sky-200 hover:bg-sky-300 transition-colors duration-300 rounded-full p-5 text-lg font-semibold text-slate-700`;";

  const chamarProximaSenha = (tipo = "C") => {
    let listaSenhas = localStorage.getItem("listaSenhas")?.split(",") || ""; //pega a lista de senha

    if (tipo == "C") {
      let senhasCom = localStorage.getItem("listaCom")?.split(",") || "";
      if (senhasCom[0] == listaSenhas || senhasCom[0] == "") {
        console.log("NÃO TEM PROXIMA");
        return;
      }
      var senhaAtual = senhasCom[0];
      senhasCom.shift();
      localStorage.setItem("listaCom", senhasCom);
    } else {
      let senhasPref = localStorage.getItem("listaPref")?.split(",") || "";
      if (senhasPref[0] == listaSenhas || senhasPref[0] == "") {
        console.log("NÃO TEM PROXIMA");
        return;
      }
      var senhaAtual = senhasPref[0];
      senhasPref.shift();
      localStorage.setItem("listaPref", senhasPref);
    }
    //pop na ultima senha
    if (listaSenhas == "")
      listaSenhas = [senhaAtual]; //se não tiver nada, deixa como a unica senha
    else {
      // se tiver, adiciona a senha ao inicio da lista e some com o resto
      listaSenhas.unshift(senhaAtual);
      if (listaSenhas.length > 6) {
        listaSenhas.pop();
      }
    }

    localStorage.setItem("listaSenhas", listaSenhas.toString());
    senha = senhaAtual;
  };

  return (
    <div className="w-screen h-screen bg-sky-50 flex flex-row justify-center gap-5 p-5">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold">Próximas Senhas C</h1>
        <div className="flex flex-row gap-x-5">
          <h2 className="text-3xl font-semibold text-sky-700 ">C1</h2>
          <h2 className="text-2xl"> 10 minutos</h2>
        </div>
        <ul className="text-xl">
          <li>C2</li>
          <li>C3</li>
          <li>C4</li>
        </ul>
        <button
          className={border + button}
          onClick={() => {
            chamarProximaSenha("C");
          }}
        >
          Senha Comum
        </button>
      </div>
      <div className="flex flex-col text-right justify-center">
        <h1 className="text-3xl font-bold">Próximas Senhas P</h1>
        <div className="flex flex-row gap-x-5 justify-end">
          <h2 className="text-2xl"> 10 minutos</h2>
          <h2 className="text-3xl font-semibold text-sky-700 ">P1</h2>
        </div>
        <ul className="text-xl">
          <li>C2</li>
          <li>C3</li>
          <li>C4</li>
        </ul>
        <button
          className={border + button}
          onClick={() => {
            chamarProximaSenha("P");
          }}
        >
          Senha Preferencial
        </button>
        </div>
    </div>
  );
}

export default Administracao;

/*
      <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <button
        onClick={() => {
          chamarProximaSenha("C");
        }}
      >
        CHAMAR SENHA COMUM
      </button>
      <button
        onClick={() => {
          chamarProximaSenha("P");
        }}
      >
        CHAMAR SENHA PREFERENCIAL
      </button>
    </div>
*/
