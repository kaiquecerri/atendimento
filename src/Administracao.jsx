function Administracao() {
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
  );
}

export default Administracao;
