"use client"
import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectColor({ handleSelectValueChange }: any) {

    return (
        <Select onValueChange={handleSelectValueChange}>
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
