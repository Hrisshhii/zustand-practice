import usePasswordStore from "../store";

const PasswordGenerator=()=>{
  const {length,setLength,includeUppercase,includeLowercase,includeNumbers,includeSymbols,toggleUppercase,toggleLowercase,toggleNumbers,toggleSymbols,generatedPassword}=usePasswordStore()

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-400 to-blue-500">
      <h1>Password Generator</h1>
      <p>{generatedPassword}</p>
    </div>
  )
}

export default PasswordGenerator