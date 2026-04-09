function NovaSenha() {
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

      return listaSenhaPref;
    }
  }

  return (
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
  );
}

export default NovaSenha;
