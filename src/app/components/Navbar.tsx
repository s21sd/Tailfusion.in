import Image from 'next/image';
import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { FaGithub } from "react-icons/fa";
import moon from '../../assets/moon.png'
import { WiMoonAltNew } from "react-icons/wi";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    window.location.href = "https://github.com/s21sd/Tailfusion.io"
  }
  return (
    <div>
      <div className=" body-font">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
          <h1 onClick={() => router.push('/')} className="ml-3 text-2xl font-bold tracking-wide text-[#fff2c1]">TailFusion</h1>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center  text-gray-400">
            <h1 onClick={() => router.push('/docs')} className="mr-5 hover:text-[#fff2c1]">Docs</h1>
            <h1 onClick={() => router.push('/components/blocks/cards')} className="mr-5 hover:text-[#fff2c1]">Components</h1>
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
            <div className='flex justify-center items-center gap-3 cursor-pointer '>
              <div onClick={handleClick}>
                <FaGithub size={38} />
              </div>
              <div className=''>
                <Image width={45} height={45} alt='moon' src={moon} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar