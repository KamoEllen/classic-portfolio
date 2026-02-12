import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kamoellenkganakga@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="introduction" className="min-h-screen flex items-center">
      <div className="max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Kamogelo Kganakga
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg text-foreground md:text-xl mb-4">
            Johannesburg, South Africa
          </p>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a 
              href="mailto:kamoellenkganakga@gmail.com" 
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              Email
            </a>
            <a 
              href="https://github.com/KamoEllen" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              GitHub
            </a>
            <a 
              href="https://www.behance.net/kamoellenkganakga/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              Behance
            </a>
            <a 
              href="https://linkedin.com/in/kamogelokganakga" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-relaxed text-foreground md:text-xl"
          >
            I deconstruct systems to understand their logic—starting with how users 
            experience them (UI), then how they're built to respond (Frontend), then 
            how they process data (Backend), now how they're deployed and scaled (Cloud)—
            to build complete products from concept to deployment.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg leading-relaxed text-foreground md:text-xl"
          >
            I'm currently deepening my backend and systems architecture skills through 
            competitive programming and cloud projects, aiming to operate as a product-aware 
            engineer who can own the full technical lifecycle.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center gap-3"
        >
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                COPIED
              </>
            ) : (
              "Copy my Email"
            )}
          </button>
          <a
            href="/src/assets/Kamogelo_Kganakga_Sofftware_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;