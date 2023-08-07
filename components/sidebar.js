"use client"
import { SidebarContext } from '@/contexts/SidebarContext';
import { useContext } from 'react';
import style from './sidebar.module.css'

const Sidebar = () => {
  let { isCollapsed, toggleSidebar } = useContext(SidebarContext);

  let items = [
    {
      id: 1,
      name: "Dashboard",
      path: "M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z",
      viewbox: "0 0 512 512"
    },
    {
      id: 2,
      name: "Option 1",
      path: "M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z",
      viewbox: " 0 0 512 512"
    },
    {
      id: 3,
      name: "Option 2",
      path: "M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z",
      viewbox: "0 0 16 16"
    },
    {
      id: 4,
      name: "Option 3",
      path: "M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
      viewbox: "0 0 16 16"
    },
    {
      id: 5,
      name: "Option 4",
      path: "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z",
      viewbox: "0 0 16 16"
    }
  ]

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-60'} h-full border-r-2 border-slate-200 transition-all`}>
      {/* Sidebar content */}
      <div className={`py-24 fixed ${!isCollapsed && style.sidebarWidthHover}`}>
        <div className={`divide-y divide-gray-700 ${isCollapsed && 'ms-3'}`}>
          <ul className="pt-2 pb-4 space-y-8 text-sm">
            {items.map(item => {
              return (
                <li key={item.id} className={`h-10 ${!isCollapsed && 'hover:bg-blue-100'}`}>
                  <a rel="noopener noreferrer" href="#" className={`flex items-center space-x-6 rounded-md ${!isCollapsed && 'ms-3'} p-1`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewbox} className={`w-7 h-7 fill-current`}>
                      <path d={item.path}></path>
                    </svg>
                    <span className={`${isCollapsed ? 'hidden' : 'text-base'} border-b-2 border-slate-200`}>{item.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {/* Toggle button */}
      <div className="fixed bottom-1 left-1">
        <button
          className="bg-blue-800 border-black hover:bg-blue-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          {isCollapsed ? '>' : '<'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;