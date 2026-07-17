
const Header = () => {
  return (
    <header className="bg-teal-600 flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Profile
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header