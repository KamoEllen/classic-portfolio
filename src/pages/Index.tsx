import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-2xl px-6 md:px-8 lg:pl-24 lg:pr-16">
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
