"use client"
const { useState, createContext } = require("react");

let SidebarContext = createContext();

export {SidebarContext};

export default function SidebarState({children}) {
    let [isCollapsed, setIsCollapsed] = useState(true);
    let toggleSidebar = ()=>{
        setIsCollapsed(prev=>(!prev));
    }
    return (
        <SidebarContext.Provider value={{isCollapsed, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}