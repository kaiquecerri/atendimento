import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  var border = "border border-solid border-2 rounded-md p-5 border-slate-600 ";
  var box = `flex flex-col ${border} w-100 h-100`;

  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <button className={border} onClick={() => navigate("/chamadas")}>
        Chamadas
      </button>
      <button className={border} onClick={() => navigate("/administracao")}>
        Administração
      </button>
      <button className={border} onClick={() => navigate("/novasenha")}>
        NovaSenha
      </button>
    </div>
  );
}

export default App;
