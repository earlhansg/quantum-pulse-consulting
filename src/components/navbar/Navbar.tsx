// hook 
import { useState } from "react"
// data 
import { menus } from "@data/menus"
// assets
import logo from '@images/navbar/logo.png'

type NavbarProps = {
    Component: React.ComponentType 
}

const Navbar = ({Component}: NavbarProps) => {
  const [dropDown, showDropDown] = useState<boolean>(false)
  return (
    <>
        <div className="bg-[#040e19] flex px-[30px] py-5 relative">
            <section className="mr-auto">
                <img src={logo} alt="Quantum Pulse" width={160}/>
            </section>
            <ul className="hidden lg:flex gap-[50px]">
                {menus.map((menu, i) => <li key={i} className="cursor-pointer hover:underline underline-offset-8" style={{alignSelf: 'center'}}>{menu}</li>)}
            </ul>
            <section className="flex lg:hidden">
                <button onClick={() => showDropDown(!dropDown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </section>
        </div>
        {dropDown && (<Component />)}
    </>
  )
}

export default Navbar
