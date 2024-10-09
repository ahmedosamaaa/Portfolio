"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-rows-6 lg:grid-rows-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopy] = useState(false);

    const leftLists = ["ReactJS", "Express", "Typescript"];
    const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

    function handleCopy() {
        navigator.clipboard.writeText("ahmeddosama.dev@gmail.com");
        setCopy(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: " rgb(2,0,36)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                "object-cover object-center"
                            )}
                        />
                    )}
                </div>

                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 && "w-full opacity-80"
                    }`}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={cn(
                                imgClassName,
                                "object-cover object-center"
                            )}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        " transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base md:w-32 z-10">
                        {description}
                    </div>
                    <div className="font-sans text-lg lg-text-4xl font-bold max-w-96 z-10 ">
                        {title}
                    </div>

                    <div>{id === 2 && <GridGlobe />}</div>

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-xl text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-xl text-center bg-[#10132E]"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div
                                className={`absolute -bottom-5 right-0 ${
                                    copied ? "block" : "block"
                                }`}
                            >
                                <Lottie
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData,
                                        rendererSettings: {
                                            preserveAspectRatio:
                                                "xMidYMid slice",
                                        },
                                    }}
                                />
                            </div>

                            <MagicButton
                                title={
                                    copied
                                        ? "Email copied "
                                        : "Copy my email address"
                                }
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};