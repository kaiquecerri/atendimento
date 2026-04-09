import { useState } from "react";

function NovaSenha() {
  function novaSenha(tipo = "C") {
    if (tipo == "C") {
      let listaSenhaCom = localStorage.getItem("listaCom")?.split(",") || [];
      let proxSenha =
        listaSenhaCom.length == 0 ? 1 : (Number(listaSenhaCom[0]) + 1);
      listaSenhaCom.unshift(proxSenha);
      localStorage.setItem("listaCom", listaSenhaCom);

      return listaSenhaCom;
    } else if (tipo == "P") {
      let listaSenhaPref = localStorage.getItem("listaPref")?.split(",") || [];
      let proxSenha =
        listaSenhaPref.length == 0 ? 1 : (Number(listaSenhaPref[0]) + 1);
      listaSenhaPref.unshift(proxSenha);
      localStorage.setItem("listaPref", listaSenhaPref);

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
