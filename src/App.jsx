function App() {
  var border = "border border-solid border-2 rounded-md p-5 border-slate-600 ";
  var box = `flex flex-col ${border} w-100 h-100`
  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-row justify-center gap-5 p-5">
      <div className={box} >
        <h1 className="font-bold text-3xl">Próximas senhas</h1>
        <ul className="ml-3 mt-3 text-xl">
          <li>100</li>
          <li>101</li>
          <li>102</li>
        </ul>
      </div>
      <div className={box}>
        <h1 className="font-bold text-3xl">Senhas chamadas</h1>
        <ul className="ml-3 mt-3 text-xl">
          <li> <h1 className="font-bold text-2xl text-red-700">99</h1> </li>
          <li>98</li>
          <li>97</li>
        </ul>
      </div>
      
    </div>
  )
}

export default App
