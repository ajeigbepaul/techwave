import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import Services from "@/components/Services";
import WorkedWith from "@/components/WorkedWith";

const App = () => {
  return (
    <main className="h-full w-full scrollbar-none overflow-hidden">
      <Hero />
      <WorkedWith />
      <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
        <Services />
        <Experience />
        <CaseStudy />
        <Innovation />
      </div>
    </main>
  );
};

export default App;
