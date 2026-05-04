import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  var border = "border border-solid border-2 rounded-full p-5 border-slate-600 ";
  var button = "w-xs self-center bg-sky-200 hover:bg-sky-300 transition-colors duration-300 rounded-full p-5 text-lg font-semibold text-slate-700`;";

  return (
    <div className="w-screen h-screen bg-sky-50 flex flex-col justify-center gap-5 p-5">
      <h1 className="text-4xl font-bold text-center p-5">Aeroporto de Carapicuíba</h1>
      <button className={border + button} onClick={() => navigate("/chamadas")}>
        Chamada de Senhas (TV) ➔ 
      </button>
      <button className={border + button} onClick={() => navigate("/novasenha")}>
        Solicitação de Senhas (Entrada) ➔
      </button>
      <button className={border + button} onClick={() => navigate("/administracao")}>
        Administração (Chamar) ➔
      </button>
    </div>
  );
}

export default App;
