import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { MapPin, Calendar, Rocket } from "lucide-react";

const softSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

const ExperienceSection = () => {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  return (
    <section id="experience" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center flex flex-col items-center justify-center"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Rocket className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-border">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16"> 
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isHovered = hoveredId === exp.id;
              
              // Improved year extraction: Handles "Present" and slices properly
              const rawYear = exp.period.split('–').pop()?.trim() || "";
              const displayYear = rawYear.toLowerCase().includes("present") ? "2026" : rawYear.slice(-4);

              return (
                <div key={exp.id} className="relative w-full flex items-center justify-center">
                  
                  {/* Left Side Content */}
                  <div className="w-1/2 flex justify-end pr-8 md:pr-12 items-center">
                    {isLeft ? (
                      <ExperienceCard 
                        exp={exp} 
                        isHovered={isHovered} 
                        setHovered={setHoveredId} 
                      />
                    ) : (
                      <YearLabel year={displayYear} isHovered={isHovered} align="right" />
                    )}
                  </div>

                  {/* Central Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.4 : 1,
                        backgroundColor: isHovered ? "var(--primary)" : "rgba(150,150,150,0.3)",
                      }}
                      transition={softSpring}
                      className="w-5 h-5 rounded-full border-4 border-background shadow-sm"
                    />
                  </div>

                  {/* Right Side Content */}
                  <div className="w-1/2 flex justify-start pl-8 md:pl-12 items-center">
                    {!isLeft ? (
                      <ExperienceCard 
                        exp={exp} 
                        isHovered={isHovered} 
                        setHovered={setHoveredId} 
                      />
                    ) : (
                      <YearLabel year={displayYear} isHovered={isHovered} align="left" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const YearLabel = ({ year, isHovered, align }: { year: string, isHovered: boolean, align: "left" | "right" }) => (
  <motion.div 
    animate={{ 
      x: isHovered ? (align === "left" ? 15 : -15) : 0,
      opacity: isHovered ? 1 : 0.3,
      scale: isHovered ? 1.1 : 1
    }}
    transition={softSpring}
    className={`hidden md:flex flex-col ${align === "left" ? "items-start text-left" : "items-end text-right"}`}
  >
    <span className={`text-3xl font-black italic tracking-tighter font-mono leading-none ${isHovered ? "text-primary" : "text-muted-foreground"}`}>
      {year}
    </span>
    {isHovered && (
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60 mt-1"
      >
        
      </motion.span>
    )}
  </motion.div>
);

const ExperienceCard = ({ exp, isHovered, setHovered }: any) => {
  return (
    <motion.div
      onMouseEnter={() => setHovered(exp.id)}
      onMouseLeave={() => setHovered(null)}
      layout
      transition={softSpring}
      className={`relative cursor-pointer bg-card border rounded-2xl p-6 w-full max-w-[420px] shadow-sm ${
        isHovered ? "border-primary/40 shadow-xl" : "border-border"
      }`}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
        transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.4s ease, shadow 0.4s ease"
      }}
    >
      <motion.div layout="position">
        <h3 className={`text-xl font-bold transition-colors duration-500 ${isHovered ? "text-primary" : "text-foreground"}`}>
          {exp.role}
        </h3>
        <p className="text-muted-foreground font-medium text-sm tracking-wide uppercase mt-1">
          {exp.organization}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ...softSpring, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-3 mb-4 text-[13px] text-muted-foreground">
                <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md">
                  <Calendar size={14} /> {exp.period}
                </span>
                <span className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceSection;