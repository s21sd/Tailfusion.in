"use client";
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { ModeToggle } from '../utils/ToggleMode';
import { CiHeart } from "react-icons/ci";
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import mylogo from '../../assets/blacklogo.png';
import { NavigationMenuDemo } from '@/components/Blocks/NavigationContainer';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { SearchBox } from '@/components/Blocks/SearchBox';
import { Headingwords } from '@/components/Blocks/Headingwords';

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    window.location.href = "https://github.com/s21sd/Tailfusion.io";
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="body-font main_heading">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
        <div className="text-2xl flex justify-center items-center" onClick={() => router.push('/')}>
          <Headingwords />
        </div>

        {/* Hamburger Menu for Mobile */}
        <IconButton className="block md:hidden mb-4 text-white" onClick={toggleDrawer}>
          <Hamburger toggled={isDrawerOpen} toggle={setIsDrawerOpen} />
        </IconButton>

        {/* Navigation for Desktop */}
        <div className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 flex-wrap items-center text-base justify-center sec_heading text-gray-400">
          <NavigationMenuDemo />
        </div>

        {/* Search and Icons */}
        <div className='flex justify-between items-center gap-4'>
          {/* <div className="bg-black border border-[#fff2c1] shadow-lg px-3 py-2 rounded-xl w-42 flex justify-between items-center">
            <input
              placeholder="Search Blocks..."
              className="bg-black outline-none"
              name="search"
              type="search"
            />
            <BiSearch color='white' size={30} />
          </div> */}
          <SearchBox />
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

      {/* Drawer for Mobile Navigation */}
      <Drawer open={isDrawerOpen} anchor="right" onClose={toggleDrawer}>
        <div className="p-4 w-64">
          <div className="md:grid md:mr-auto md:ml-4 md:py-1 md:pl-4  items-center text-base justify-center sec_heading text-gray-400">
            <NavigationMenuDemo />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
