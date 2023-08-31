import {
  BeakerIcon,
  PresentationChartLineIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";

function NavItem({ children }) {
  return (
    <li className="flex gap-2 items-center text-gray-500 hover:text-blue-500 cursor-pointer">
      {children}
    </li>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 flex-shrink-0 sm:hidden lg:block">
      <div className="p-4">
        <button className="p-2 rounded-xl bg-blue-500">
          <BeakerIcon className="w-7 h-7 text-white" />
        </button>
      </div>
      <div className="px-4 py-3">
        <label className="font-medium text-gray-400 uppercase text-sm">
          Analytics
        </label>
        <ul className="space-y-3 py-3">
          <NavItem>
            <PresentationChartLineIcon className="w-5 h-5" />
            Dashboard
          </NavItem>
          <NavItem>
            <DesktopComputerIcon className="w-5 h-5" /> Performance
          </NavItem>
        </ul>
      </div>
      <div className="px-4 py-3">
        <label className="font-medium text-gray-400 uppercase text-sm">
          Content
        </label>
        <ul className="space-y-3 py-3">
          <NavItem>
            <PresentationChartLineIcon className="w-5 h-5" />
            Guides
          </NavItem>
          <NavItem>
            <DesktopComputerIcon className="w-5 h-5" /> Hotspots
          </NavItem>
          <NavItem>
            <DesktopComputerIcon className="w-5 h-5" /> Checklists
          </NavItem>
          <NavItem>
            <DesktopComputerIcon className="w-5 h-5" /> NPS
          </NavItem>
        </ul>
      </div>
      <div className="px-4 py-3">
        <label className="font-medium text-gray-400 uppercase text-sm">
          Customization
        </label>
        <ul className="space-y-3 py-3">
          <NavItem>
            <PresentationChartLineIcon className="w-5 h-5" />
            Segments
          </NavItem>
          <NavItem>
            <DesktopComputerIcon className="w-5 h-5" /> Themes
          </NavItem>
        </ul>
      </div>
    </aside>
  );
}
