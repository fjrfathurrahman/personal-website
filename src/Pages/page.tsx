import { About, Contact, Footer, Hero, Projects } from "../Components";
import RootLayouts from "../Components/layouts/RootLayouts";

export default function Home() {
    return (
        <RootLayouts>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </RootLayouts>
    )
}