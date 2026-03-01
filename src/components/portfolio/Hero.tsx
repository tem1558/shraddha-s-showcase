import { motion } from "framer-motion"; 
import { personalInfo } from "@/data/portfolio";
import { Linkedin, Github, Mail, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background watercolor / profile image on right */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Profile.jpeg"
          alt=""
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] md:w-[40%] lg:w-[45%] h-auto opacity-30 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row gap-12 items-center pt-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full md:w-1/2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-4">
            {personalInfo.name}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl font-body text-muted-foreground mb-2">
              {personalInfo.title}
            </p>
            <p className="text-base font-body text-primary font-medium mb-6">
              {personalInfo.institution}
            </p>
            <p className="text-base font-body text-muted-foreground max-w-md mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            {[
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: GraduationCap, href: personalInfo.googleScholar, label: "Scholar" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: empty, just for spacing */}
        <div className="w-full md:w-1/2" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;