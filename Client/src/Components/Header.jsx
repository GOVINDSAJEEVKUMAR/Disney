import React, { useState } from 'react'
import HeaderItem from './HeaderItem'
import logo from "../assets/Image/logo.png"
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from "react-icons/hi2"
import { HiPlus,HiDotsVertical } from 'react-icons/hi'

function Header() {
    const [toggle,setToggle] = useState(false);
    const menu=[
        {name:"Home",icon:HiHome},
        {name:"Search",icon:HiMagnifyingGlass},
        {name:"Trending",icon:HiStar},
        {name:"Movies",icon:HiPlayCircle},
        {name:"Tv Shows",icon:HiTv},
        {name:"My List",icon:HiPlus},
        {name:"More",icon:HiDotsVertical},
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className=' flex gap-10 items-center '>
      <img src={logo} alt="logo" className="w-[80px] md:w-[115px] object-cover" />

      <div className=' hidden  md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
        </div>

        <div className=' md:hidden flex gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon}/>
        ))}
        <div className=' md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
           {toggle ? <div className=' absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
            </div>:null}
        </div>
        </div>

      </div>
      <div>
        <img src="https://i.pinimg.com/564x/aa/01/da/aa01da8bf14f79095a8dab32f2f73d89.jpg" alt="" className=' w-[40px] rounded-full' />
      </div>
    </div>
  )
}

export default Header
