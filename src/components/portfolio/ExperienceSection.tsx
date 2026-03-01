import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">Experience</h2>
          <p className="section-subtitle">Research & industry experience across leading institutions.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-500 group"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary timeline-dot" />

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-500">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-base font-body text-primary font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm font-body text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1 shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
