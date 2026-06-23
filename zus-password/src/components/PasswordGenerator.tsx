import usePasswordStore from "../store";

const PasswordGenerator=()=>{
  const {length,setLength,includeUppercase,includeLowercase,includeNumbers,includeSymbols,toggleUppercase,toggleLowercase,toggleNumbers,toggleSymbols,generatedPassword}=usePasswordStore()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-purple-400 to-blue-500">
      <h1 className="text-3xl font-bold text-white">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <label htmlFor="length" className="block text-sm font-medium text-gray-700">Password Length</label>
      </div>
    </div>
  )
}

export default PasswordGenerator