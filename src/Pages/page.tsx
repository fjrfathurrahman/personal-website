import RootLayouts from "../Components/layouts/RootLayouts";
import About from "./about";
import Hero from "./hero";
import Projects from "./projects";

export default function Home() {
    return (
        <RootLayouts>
            <Hero/>
            <About/>
            <Projects/>
        </RootLayouts>
    )
}