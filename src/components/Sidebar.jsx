import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { SiShopware } from 'react-icons/si'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { IoMdClose } from "react-icons/io"

import { links } from '../data/dummy'
import { useStateContext } from "../contexts/ContextProvider"

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  const activeLink = 'text-white bg-gray-700'
  const normal = 'text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray'

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize])

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false);
  }

  return activeMenu && (
    <div className='w-72 max-sm:w-full fixed sidebar dark:bg-secondary-dark-bg bg-white'>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        <div className="flex justify-between items-center mt-4 ml-3 mr-3">
          <Link to='/' onClick={handleCloseSideBar} className="flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware /><span>Shoppy</span>
          </Link>
          <TooltipComponent content="Close Menu" position="BottomCenter">
            <button type="button"
              className="text-xl hover:bg-light-gray rounded-full p-3 md:hidden"
              onClick={() => setActiveMenu(false)}>
              <IoMdClose />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <h2 className="text-gray-400 m-3 mt-4 uppercase">{item.title}</h2>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  className={({ isActive }) => `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 ${isActive ? activeLink : normal}`}>
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar