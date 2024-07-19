"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from 'next/image';
import moon from '../../assets/moon.png'
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button
            variant="link"
            size="icon"
            onClick={toggleTheme}
        >
            <Moon className={`h-[2rem] w-[2rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            <Image className={`absolute h-[3rem] w-[3rem] transition-all ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} width={70} height={45} alt='moon' src={moon} />
            {/* <Moon className={`absolute h-[1.5rem] w-[1.5rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} /> */}
        </Button>
    )
}