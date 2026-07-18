
const Header = () => {
  return (
    <header className="bg-teal-600 flex justify-between items-center p-4 text-white">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 border border-gray-600 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer">
          Profile
        </button>
        <button className="bg-red-500 hover:bg-red-700 border border-gray-600 text-white font-bold py-2 px-4 rounded m-2 cursor-pointer">
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header