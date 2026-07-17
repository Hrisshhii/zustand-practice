
const Sidebar = () => {
  return (
    <div className="bg-gray-200 p-4">
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