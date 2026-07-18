
const Sidebar=()=>{
  return (
    <aside className="bg-white rounded-lg shadow-md h-full p-6">
      <h2 className="text-lg font-bold mb-6">Navigation</h2>

      <ul className="space-y-3">
        <li>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-teal-100">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-teal-100">
            About
          </a>
        </li>

        <li>
          <a href="#" className="block rounded-md px-3 py-2 hover:bg-teal-100">
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar