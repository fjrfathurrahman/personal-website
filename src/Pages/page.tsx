import RootLayouts from "../Components/layouts/RootLayouts";
import About from "./about";
import Hero from "./hero";

export default function Home() {
    return (
        <RootLayouts>
            <Hero/>
            <About/>
        </RootLayouts>
    )
}