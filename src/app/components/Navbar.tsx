import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { ModeToggle } from '../utils/ToggleMode';
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import mylogo from '../../assets/blacklogo.png'
import { NavigationMenuDemo } from '@/components/Blocks/NavigationContainer';
const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    window.location.href = "https://github.com/s21sd/Tailfusion.io"
  }
  return (
    <div>
      <div className="body-font main_heading">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
          {/* <Image className='rounded-full' width={70} height={70} alt='logo' src={mylogo} /> */}
          <h1 onClick={() => router.push('/')} className="ml-3 text-2xl font-bold tracking-wide text-[#fff2c1] main_heading">TailFusion</h1>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center sec_heading text-gray-400">
            {/* <h1 onClick={() => router.push('/docs')} className="mr-5 hover:text-[#fff2c1] dark:hover:text-[#9e4ceb]">Docs</h1>
            <h1 onClick={() => router.push('/components/blocks/cards')} className="mr-5 hover:text-[#fff2c1] dark:hover:text-[#9e4ceb]">Components</h1>
            <h1 className="mr-5 hover:text-[#fff2c1] dark:hover:text-[#9e4ceb]">Feedback</h1> */}
            <NavigationMenuDemo />
          </div>

          <div className='flex justify-between items-center gap-4'>
            <div className="bg-black border border-[#fff2c1]  shadow-lg px-3 py-2 rounded-xl w-42 flex justify-between items-center">
              <input
                placeholder="Search Blocks..."
                className="bg-black outline-none"
                name="search"
                type="search "
              />
              <BiSearch color='white' size={30} />
            </div>
            <div>
              <CiHeart className='git_icon_color cursor-pointer' size={40} />
            </div>
            <div className='flex justify-center items-center gap-3 cursor-pointer'>
              <div onClick={handleClick}>
                <FaGithub className='git_icon_color' size={38} />
              </div>
              <div className=''>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar