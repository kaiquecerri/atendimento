function falarSenha(senha) {
  // Cancela falas anteriores para não acumular
  window.speechSynthesis.cancel();

  const mensagem = new SpeechSynthesisUtterance(`Senha ${senha}`);
  mensagem.lang = "pt-BR"; // Define o idioma
  mensagem.rate = 1.2;     // Velocidade (opcional)

  window.speechSynthesis.speak(mensagem);
}

export default falarSenha;