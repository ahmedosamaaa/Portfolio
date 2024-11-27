import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
    const projects = await client.fetch(PROJECTS_QUERY);

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <Hero />
                <Grid />
                <RecentProjects projects={projects} />
                <Experience />
                <Approach />
            </div>
        </main>
    );
}
