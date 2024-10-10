import { projects } from "@/data";
// import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

function RecentProjects() {
    return (
        <section id="projects" className="py-20">
            <div>
                <h1 className="heading">
                    A small selection of{" "}
                    <span className="text-purple">recent projects</span>
                </h1>
                <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                    {projects.map(
                        ({ id, title, des, img, iconLists, link }) => (
                            <div
                                key={id}
                                className="h-[32rem] lg:min-h-[20rem] w-[80vw] md:w-[450px] flex items-center justify-center "
                            >
                                <a
                                    target="_blank"
                                    href={link}
                                    className="border bottom-[1px] rounded-3xl p-3 hover:bg-[#1a1e3e] transition-all duration-500"
                                >
                                    {/* <PinContainer title={link} href={link}> */}
                                    <div className="relative flex items-center justify-center  overflow-hidden h-[30vh] mb-10">
                                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                            <img src="/bg.png" alt="bg" />
                                        </div>
                                        <img
                                            src={img}
                                            alt={title}
                                            className="z-10 absolute bottom-1 rotate-3 w-5/6 rounded-xl"
                                        />
                                    </div>

                                    <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                                        {title}
                                    </h1>
                                    <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">
                                        {des}
                                    </p>
                                    <div className="flex items-center justify-between mt-7 mb-3">
                                        <div className="flex justify-between items-center">
                                            {iconLists.map((icon, index) => (
                                                <div
                                                    key={icon}
                                                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                                                    style={{
                                                        transform: `translateX(-${
                                                            5 * index * 2
                                                        }px)`,
                                                    }}
                                                >
                                                    <img
                                                        src={icon}
                                                        alt={icon}
                                                        className="aspect-[4/3] w-4/5 object-contain"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                                Check Live Site
                                            </p>
                                            <FaLocationArrow color="#CBACF9" />
                                        </div>
                                    </div>
                                </a>
                                {/* </PinContainer> */}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default RecentProjects;
