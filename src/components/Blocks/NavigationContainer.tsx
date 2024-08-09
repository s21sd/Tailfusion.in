"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Hamburger from "hamburger-react"
import { IconButton } from "@mui/material"
import { FaGithub } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import { SearchBox } from "./SearchBox"
import { useRouter } from "next/navigation"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Card",
        href: "/components/blocks/cards",
        description:
            "Cards are versatile and responsive components designed to display content in a structured and visually appealing way.",
    },
    {
        title: "Navbar",
        href: "/components/blocks/navbars",
        description:
            "The navbar is an essential navigation component that allows users to easily navigate through your website.",
    },
    {
        title: "Hero",
        href: "/components/blocks/hero",
        description:
            "The hero section is a prominent component at the top of your webpage, designed to capture the user's attention with a compelling message, image, or call to action. ",
    },
    {
        title: "Content",
        href: "/components/blocks/contents",
        description: "The content component is designed to present information in an organized and engaging manner, making it easy for users to consume and understand the information on your website.",
    },
    {
        title: "Blog",
        href: "/components/blocks/blogs",
        description:
            "The blogs component is designed to display blog posts and articles in an organized and appealing way, making it easy for users to discover and engage with content.",
    },
    {
        title: "Pricing",
        href: "/components/blocks/pricing",
        description:
            "The pricing component is designed to display pricing plans and options in a clear and compelling way, making it easy for users to understand and choose the plan that best suits their needs.",
    },
]

export function NavigationMenuDemo() {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io";
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <NavigationMenu>
            <NavigationMenuList className="grid sm:flex">

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[230px] gap-3 p-1 sm:p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/components/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <div className="h-[1px] bg-gray-600"></div>
                <div className='flex mt-10 justify-between items-center gap-4'>
                    <div className='block sm:hidden'>
                        <CiHeart className='text-black cursor-pointer' size={40} />
                    </div>
                    <div className='flex items-center gap-3 '>
                        <div onClick={handleClick}>
                            <FaGithub className='text-black cursor-pointer block sm:hidden' size={38} />
                        </div>
                    </div>

                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
