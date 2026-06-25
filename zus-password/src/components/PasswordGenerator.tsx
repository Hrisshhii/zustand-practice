import usePasswordStore from "../store";

const PasswordGenerator=()=>{
  const {length,setLength,includeUppercase,includeLowercase,includeNumbers,includeSymbols,toggleUppercase,toggleLowercase,toggleNumbers,toggleSymbols,generatedPassword,generatePassword}=usePasswordStore()

  const handleGeneratePassword=()=>{
    generatePassword();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold">
          Password Generator
        </h1>
        <div className="flex flex-col gap-4">
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 p-0">Password Length</label>
          <input type="number" id="length" value={length} onChange={e=>setLength(+e.target.value)} min={4} max={64}
            className="mt-0 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="flex items-center">
            <input type="checkbox" checked={includeNumbers} onChange={toggleNumbers}/>
            <label className="ml-2 text-sm">Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={includeSymbols} onChange={toggleSymbols}/>
            <label className="ml-2 text-sm">Include Symbols</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={includeUppercase} onChange={toggleUppercase}/>
            <label className="ml-2 text-sm">Include Uppercase</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={includeLowercase} onChange={toggleLowercase}/>
            <label className="ml-2 text-sm">Include Lowercase</label>
          </div>
          <button onClick={handleGeneratePassword} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Generate Password
          </button>
          {generatedPassword && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-lg break-all">
                {generatedPassword}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator