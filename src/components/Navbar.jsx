import { useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups"

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from "../contexts/ContextProvider"

const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunction}
      style={{ color }}
      className="relative rounded-full text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full w-2 h-2 top-2 right-2" />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, handleClick } = useStateContext();



  return (
    <div className="flex justify-between p-2 md:mx-4 relative">
      <NavButton
        title="Menu"
        customFunction={() => { setActiveMenu((prevState) => !prevState) }}
        icon={<AiOutlineMenu />}
        color="blue" />
      <div className="flex gap-3">
        <NavButton
          title="Cart"
          customFunction={() => { handleClick('cart') }}
          icon={<FiShoppingCart />}
          color="blue" />
        <NavButton
          title="Chat"
          customFunction={() => { handleClick('chat') }}
          icon={<BsChatLeft />}
          color="blue" />
        <NavButton
          title="Notifications"
          dotColor="#03D9D7"
          customFunction={() => { handleClick('notifications') }}
          icon={<RiNotification3Line />}
          color="blue" />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg hover:drop-shadow-xl"
            onClick={() => { handleClick('profile') }}>
            <img src={avatar} alt="profile"
              className="rounded-full h-8 w-8" />
            <p className="text-gray-400 text-14">
              <span>Hi, </span><span className="font-bold">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notifications && (<Notification />)}
        {isClicked.profile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar