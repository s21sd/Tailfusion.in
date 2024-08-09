import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export function BoxRevealDemo() {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io";
    };

    const getTheBoxColor = () => {
        return localStorage.getItem('theme') === 'dark' ? '#9e4ceb' : '#fff2c1'
    }
    return (
        <div className="h-full w-full flex flex-col mx-auto items-center justify-center overflow-hidden ">
            <BoxReveal boxColor={getTheBoxColor()} duration={0.5}>
                <p className="text-[1.5rem] sm:text-[3.5rem] font-semibold text-[#fff2c1] dark:text-[#9e4ceb]">
                    TailFusion UI<span className="text-[#fff2c1] dark:text-[#9e4ceb]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={getTheBoxColor()} duration={0.6}>
                <h2 className="mt-[.5rem] text-[1rem] text-white dark:text-black">
                    UI library for{" "}
                    <span className="text-[#fff2c1] dark:text-[#9e4ceb]">Developers</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={getTheBoxColor()} duration={0.7}>
                <div className="mt-[1.5rem] w-full sm:min-w-[20rem] text-xs sm:text-xl">
                    <p className="text-white dark:text-black">
                        16+ free and open-source animated components built with
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> React</span>,
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Typescript</span>,
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Tailwind CSS</span>,
                        and
                        . <br />
                        Copy paste the most trending components and use them in your websites without having to worry about styling.. <br />
                    </p>
                </div>
            </BoxReveal>
            <div className="grid sm:flex  items-center justify-center gap-4 mt-4 text-sm">
                <BoxReveal boxColor={getTheBoxColor()} duration={0.5}>
                    <div onClick={() => router.push('components/docs')} className="bg-[#fff2c1] p-4 hover:bg-gray-50 rounded-md w-[230px] cursor-pointer font-semibold text-black flex justify-center items-center mx-auto dark:hover:bg-[#c98fff] dark:bg-[#9e4ceb] dark:text-white">Browse Components</div>
                </BoxReveal>
                <BoxReveal boxColor={getTheBoxColor()} duration={0.5}>
                    <div onClick={handleClick} className="border rounded-md p-4 w-[230px] font-semibold cursor-pointer text-white border-[#fff2c1] dark:border-[#9e4ceb] dark:text-black flex justify-center items-center mx-auto gap-4"><FaGithub size={30} />
                        <h1>GitHub</h1></div>
                </BoxReveal>
            </div>
        </div>
    );
}
