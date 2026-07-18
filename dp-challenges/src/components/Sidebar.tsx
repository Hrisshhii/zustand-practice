
const Sidebar=()=>{
  return (
    <aside className="bg-teal-600 rounded-md shadow-md h-full p-6 text-white">
      <h2 className="text-xl font-bold mb-6 text-center">Navigation</h2>

      <ul className="space-y-3">
        <li>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-teal-700">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-teal-700">
            About
          </a>
        </li>

        <li>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-teal-700">
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar