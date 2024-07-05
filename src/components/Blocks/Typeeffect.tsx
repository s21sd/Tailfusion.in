"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Make",
        },
        {
            text: "Your",
        },
        {
            text: "Website",
        },
        {
            text: "look",
        },
        {
            text: "10 X",
        },
        {
            text: "Modern.",
            className: "text-[#fff2c1]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />

        </div>
    );
}
