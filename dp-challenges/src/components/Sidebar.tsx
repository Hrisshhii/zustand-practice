import { LayoutDashboard,Users,FileText,Settings,LogOut} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-teal-600 h-full rounded-lg shadow-md text-white flex flex-col p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 bg-teal-700 font-medium">
              <LayoutDashboard size={20} />
              Dashboard
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-teal-700 transition">
              <Users size={20} />
              Users
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-teal-700 transition">
              <FileText size={20} />
              Reports
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-teal-700 transition">
              <Settings size={20} />
              Settings
            </a>
          </li>
        </ul>
      </nav>

      <div className="border-t border-teal-500 pt-5">
        <div className="mb-4">
          <p className="font-semibold">User</p>
          <p className="text-sm text-teal-100">
            Computer Engineering
          </p>
        </div>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-500 transition cursor-pointer">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;