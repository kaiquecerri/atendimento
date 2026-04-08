import { useNavigate } from "react-router-dom";

/* const chamarProximaSenha = (novaSenha) => {
  // Isso salvará a senha no navegador
  localStorage.setItem('senha_atual', novaSenha);
  // Você também pode salvar um timestamp para garantir que o evento 
  // dispare mesmo se a senha for repetida
  localStorage.setItem('chamada_timestamp', Date.now());
}; */

function App() {
  const navigate = useNavigate(); 

  var border = "border border-solid border-2 rounded-md p-5 border-slate-600 ";
  var box = `flex flex-col ${border} w-100 h-100`
  
  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <button className={border} onClick={() => navigate("/chamadas")}> Chamadas </button>
    </div>
  )
}

export default App
