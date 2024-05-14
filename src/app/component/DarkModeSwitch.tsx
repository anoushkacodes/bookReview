"use client"
import{ MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes'

function DarkMoreSwitch() {
    const {theme , setTheme, systemTheme } = useTheme()
    const currentTheme = theme === "system" ?systemTheme :theme
    return ( 
        <div>{currentTheme === 'dark' ? <MdLightMode className='text-3xl cursor-pointer hover:text-amber-500 w-16 h-11'
         onClick ={()=> setTheme('light') }/> :
         <MdDarkMode className='text-3xl cursor-pointer hover:text-amber-500' onClick ={()=> setTheme('dark') }/>}</div>
     );
}

export default DarkMoreSwitch;