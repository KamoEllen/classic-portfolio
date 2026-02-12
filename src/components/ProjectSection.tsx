import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
  external?: boolean;
}

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  collaborators?: { name: string; url: string }[];
  techStack?: string[]; // Add this line
  paragraphs: string[];
  images?: string[];
  links?: ProjectLink[];
}

const ProjectSection = ({
  id,
  title,
  subtitle,
  year,
  collaborators,
  techStack, // Add this line
  paragraphs,
  images,
  links,
}: ProjectSectionProps) => {
  return (
    <section id={id} className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl md:text-4xl font-normal mb-2"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {title}
        </h2>

        <div className="flex items-center gap-3 mb-2">
          {subtitle && (
            <span className="text-sm text-muted-foreground">{subtitle}</span>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4">{year}</p>

        {/* Add tech stack display */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {collaborators && collaborators.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {collaborators.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground hover:opacity-80 transition-opacity"
              >
                {c.name}
                <ArrowUpRight size={10} />
              </a>
            ))}
          </div>
        )}

        <div className="space-y-4 mb-8">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {images && images.length > 0 && (
          <div className="space-y-4 mb-8">
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full rounded-xl"
              />
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity mr-6"
              >
                <span className="font-semibold">{link.label}</span>
                {link.external ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectSection;