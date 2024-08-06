import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";


export  function AnimatedShinyTextDemo() {
    return (
        <div className="z-10 flex items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-[#fff2c1] text-[10px] sm:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center text-black px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Introducing TailFusion UI</span>
                </AnimatedShinyText>
            </div>
        </div>
    );
}
