"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronsUpDown, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const frameworks: { label: string; href: string; value: string }[] = [
    {
        label: "Card",
        href: "/components/blocks/cards",
        value: "card"
    },
    {
        label: "Navbar",
        href: "/components/blocks/navbars",
        value: "navbar"
    },
    {
        label: "Hero",
        href: "/components/blocks/hero",
        value: "hero"
    },
    {
        label: "Content",
        href: "/components/blocks/contents",
        value: "content"
    },
    {
        label: "Blog",
        href: "/components/blocks/blogs",
        value: "blog"
    },
    {
        label: "Pricing",
        href: "/components/blocks/pricing",
        value: "pricing"
    },
    {
        label: "Teams",
        href: "/components/blocks/teams",
        value: "teams"
    },
    {
        label: 'Step',
        href: '/components/blocks/steps',
        value: "step"
    },
    {
        label: 'Footer',
        href: '/components/blocks/footers',
        value: "footer"
    },
    {
        label: 'Auth',
        href: '/components/blocks/auths',
        value: 'auth'
    },
    {
        label: 'Gallery',
        href: '/components/blocks/gallery',
        value: 'gallery'
    },
    {
        label: 'Ecommerce',
        href: '/components/blocks/ecommerces',
        value: 'ecom'
    },
    {
        label: 'Cta',
        href: '/components/blocks/cta',
        value: 'cta'
    },
    {
        label: 'Statistic',
        href: '/components/blocks/statistics',
        value: 'statistic'
    },
    {
        label: 'Feature',
        href: '/components/blocks/features',
        value: 'features'
    },
    {
        label: 'Button',
        href: '/components/blocks/buttons',
        value: 'button'
    },
    {
        label: 'Testimonial',
        href: '/components/blocks/testimonials',
        value: 'testimonial'
    },




]

export function SearchBox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const router = useRouter()
    const NavigateToTheRoute = () => {
        console.log("Open The Navigato");
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between text-black dark:text-[#9e4ceb]"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Search Blocks..."}
                    <SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No Block found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    className="cursor-pointer"
                                    key={framework.value}
                                    value={framework.value}
                                    onClick={NavigateToTheRoute}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        const selectedFramework = frameworks.find(f => f.value === currentValue)
                                        if (selectedFramework) {
                                            router.push(selectedFramework.href)
                                        }
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4 cursor-pointer",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
