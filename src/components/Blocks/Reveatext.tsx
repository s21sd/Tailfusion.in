import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export async function BoxRevealDemo() {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io";
    };
    return (
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden ">
            <BoxReveal boxColor={"#fff2c1"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold text-[#fff2c1] dark:text-[#9e4ceb]">
                    TailFusion UI<span className="text-[#fff2c1] dark:text-[#9e4ceb]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#fff2c1"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem] text-white dark:text-black">
                    UI library for{" "}
                    <span className="text-[#fff2c1] dark:text-[#9e4ceb]">Design Engineers</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#fff2c1"} duration={0.5}>
                <div className="mt-[1.5rem] ">
                    <p className="text-white dark:text-black">
                        20+ free and open-source animated components built with
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> React</span>,
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Typescript</span>,
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Tailwind CSS</span>,
                        and
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Framer Motion</span>
                        . <br />
                        Copy paste the most trending components and use them in your websites without having to worry about styling.. <br />
                    </p>
                </div>
            </BoxReveal>
            <div className="flex  items-center justify-center gap-4 mt-4">
                <BoxReveal boxColor={"#fff2c1"} duration={0.5}>
                    <div onClick={() => router.push('components/docs')} className="bg-[#fff2c1] p-4 hover:bg-gray-50 rounded-md w-[230px] cursor-pointer font-semibold text-black flex justify-center items-center mx-auto dark:hover:bg-[#c98fff] dark:bg-[#9e4ceb] dark:text-white">Browse Components</div>
                </BoxReveal>
                <BoxReveal boxColor={"#fff2c1"} duration={0.5}>
                    <div onClick={handleClick} className="border rounded-md p-4 w-[230px] font-semibold cursor-pointer text-white border-[#fff2c1] dark:border-[#9e4ceb] dark:text-black flex justify-center items-center mx-auto gap-4"><FaGithub size={30} />
                        <h1>GitHub</h1></div>
                </BoxReveal>
            </div>
        </div>
    );
}
