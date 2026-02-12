import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <p
        className="text-xs tracking-widest text-muted-foreground"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.15em",
        }}
      >
        Every system, every interface, every line of code is a made decision
      </p>
    </motion.div>
  );
};

export default Hero;
