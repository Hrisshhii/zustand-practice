
const Sidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 h-full">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            About
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar