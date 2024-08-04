// data 
import { menus } from "@data/menus"

const Dropdown = () => {
  return (
    <section className="absolute bg-[#3B5472] top-20 right-5 z-10">
      <ul className="flex lg:hidden flex-col gap-3 py-3">
          {menus.map((menu, i) => <li key={i} className="cursor-pointer hover:underline underline-offset-8 px-5">{menu}</li>)}
      </ul>
    </section>
  )
}

export default Dropdown
