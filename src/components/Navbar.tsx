import { motion } from "framer-motion";
import eragateway from "@/assets/eragateway.png";
import fallible from "@/assets/fallible.jpg";
import upwork from "@/assets/upwork.png";
import beyondborders from "@/assets/beyondborders.png";
import rbac from "@/assets/rbac.jpg";
import devops from "@/assets/devops.png";
import ai from "@/assets/ai.webp";
import cloud from "@/assets/cloud.webp";
import algorithms from "@/assets/algorithms.webp";
import waste from "@/assets/waste.png";
import pmImg from "@/assets/pmImg.jpg";




const navItems = [
  // Experience
  { id: "eragetway-intern", icon: eragateway, label: "Eragetway" },
  { id: "fallible-developer", icon: fallible, label: "Fallible" },
  { id: "freelance-engineer", icon: upwork, label: "Freelance" },
  
  // Separator
  { id: "separator", isSeparator: true },
  
  // Projects
  { id: "beyond-borders-tutoring", icon: beyondborders, label: "Tutoring" },
  { id: "saas-rbac", icon: rbac, label: "RBAC" },
  { id: "opentelemetry-devops", icon: devops, label: "DevOps" },
  { id: "algorithm-visualization", icon: algorithms, label: "Algorithms" },
  { id: "serverless-commerce", icon: cloud, label: "Serverless" },
  { id: "inventory-lens", icon: ai, label: "AI Model" },
  { id: "environmental-api", icon: waste, label: "Env API" },
  { id: "project-management-api", icon: pmImg, label: "PM API" },
];


const Navbar = () => {
  const scrollTo = (id: string) => {
    if (id !== "separator") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-40 left-4 z-50 flex-col gap-2 hidden lg:flex max-h-[70vh] overflow-y-auto py-2"
    >
      {navItems.map((item) => {
        if (item.isSeparator) {
          return (
            <div 
              key={item.id} 
              className="h-px w-7 mx-auto bg-gray-300 my-2"
            />
          );
        }
        
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="w-9 h-9 rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            title={item.label}
          >
            <img src={item.icon} alt={item.label} className="w-full h-full object-cover" />
          </button>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;