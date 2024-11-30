"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Project } from "@/sanity.types";
import MagicButton from "./ui/MagicButton";
import { notFound } from "next/navigation";
const PinContainer = dynamic(
    () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
    { ssr: false }
);

const RecentProjects = ({ projects }: { projects: Project[] }) => {
    const [visibleCount, setVisibleCount] = useState(5);
    // Handler for loading more projects

    const handleLoadMore = () => {
        if (visibleCount < projects.length) {
            setVisibleCount((prev) => prev + 4); // Load 4 more projects
        }
    };
    const handleReset = () => {
        if (visibleCount > projects.length) {
            setVisibleCount(4); // Load 4 more projects
        }
    };
    if (!projects) {
        return notFound();
    }

    return (
        <section id="projects" className="py-20">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center p-4 gap-12 md:gap-8 xl:gap-16 mt-10">
                    {projects.slice(0, visibleCount).map((item) => (
                        <div
                            className="h-[24rem] lg:min-h-[32.5rem]   items-center justify-center "
                            key={item._id}
                        >
                            <PinContainer title={item.link} href={item.link}>
                                <div className="relative flex items-center justify-center w-[80vw] sm:w-96 md:w-[290px] lg:w-80 xl:w-[22rem] overflow-hidden h-[15vh] xl:h-[20vh] mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <img src="/bg.png" alt="bgimg" />
                                    </div>
                                    <img
                                        src={item?.image?.url}
                                        alt="cover"
                                        className="z-10 absolute bottom-1 rotate-3 w-5/6 rounded-xl"
                                    />
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.projectStack &&
                                            item?.projectStack.map(
                                                (icon, index) => (
                                                    <div
                                                        key={index}
                                                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                        style={{
                                                            transform: `translateX(-${
                                                                5 * index + 2
                                                            }px)`,
                                                        }}
                                                    >
                                                        <img
                                                            src={icon?.url}
                                                            alt="icon5"
                                                            className="aspect-[4/3]  w-4/5 object-contain"
                                                        />
                                                    </div>
                                                )
                                            )}
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            Check Live Site
                                        </p>
                                        <FaLocationArrow
                                            className="ms-3"
                                            color="#CBACF9"
                                        />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
                {projects.length == visibleCount ? null : projects.length >
                  visibleCount ? (
                    <MagicButton
                        handleClick={handleLoadMore}
                        title="Show More"
                        icon={<HiCursorClick />}
                        position="right"
                    />
                ) : (
                    <MagicButton
                        handleClick={handleReset}
                        title="Show Less"
                        icon={<HiCursorClick />}
                        position="right"
                    />
                )}
            </div>
        </section>
    );
};

export default RecentProjects;
