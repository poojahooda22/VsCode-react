import { useEffect, useState } from 'react';
import { VscSearch } from "react-icons/vsc";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import clsx from "clsx";

const Navbar = () => {

    // State to track if the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  const navData =[
    {name: 'Docs', link: '#'},
    {name: 'Updates', link: '#'},
    {name: 'Blog', link: '#'},
    {name: 'API', link: '#'},
    {name: 'Extensions', link: '#'},
    {name: 'MCP', link: '#'},
    {name: 'FAQ', link: '#'},
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled more than 10px
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className={clsx(
        // Base classes
        'w-full fixed z-10 transition-all duration-300 ease-in-out',
        // Conditional styling based on scroll state
        isScrolled
          ? 'bg-[#0D1117]/95 border-b border-[#2b2b2b] backdrop-blur-md shadow-lg'
          : 'bg-[#0D1117] border-b border-transparent'
      )}>
    <div className='container mx-auto w-full h-[10vh] flex flex-row justify-center items-center py-6'>
      <div className='mx-auto left-div flex flex-row items-center justify-center gap-6 cursor-pointer'>
        <div className='flex items-center justify-center gap-4'>
            <img src='/favicon.ico' width={28} height={28}/>
            <h3 className='text-[1vw]'>Visual Studio Code</h3>
        </div>     
        {navData.map((item, index) => {
            return (
                <div key={index} className='text-[0.78vw] text-gray-400 font-medium hover:text-white'>
                    <h5>{item.name}</h5>
                </div>
            )
        })}
      </div>

      <div className='mx-auto right-div flex items-center justify-center gap-4 cursor-pointer'>
          <button className=' hover:bg-white/5'>
            <IoSunnyOutline size={20} color="gray"/>
          </button>     
          <div className="w-[24vh] h-[4vh] px-2 border rounded-sm flex items-center justify-between border-gray-500">
              <div className="flex items-center justify-center gap-2">
                  <VscSearch color="gray"/>
                  <p className="text-sm text-gray-500">Search docs</p>
              </div>     
              <div className="px-1 border border-gray-600 rounded-sm text-[12px] text-gray-500">Ctrl + Shift + P</div>
          </div>
          <button className='px-4 py-[0.7vh] bg-[#0069b9] rounded-sm cursor-pointer hover:bg-[#0069b9]'>Download</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
