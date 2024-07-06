import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectColor() {
    return (
        <Select>
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="apple">Red</SelectItem>
                    <SelectItem value="banana">Blue</SelectItem>
                    <SelectItem value="blueberry">Black</SelectItem>
                    <SelectItem value="grapes">Pink</SelectItem>
                    <SelectItem value="pineapple">Orange</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
