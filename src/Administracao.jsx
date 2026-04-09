function Administracao() {
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

  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
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

export default Administracao;
