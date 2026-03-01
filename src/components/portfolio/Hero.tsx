import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Linkedin, Github, Mail, GraduationCap } from "lucide-react";
import watercolorBg from "@/assets/watercolor-bg.png";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background watercolor */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={}
          alt=""
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] h-auto opacity-30 object-contain"
        />
      </div>

      {/* Glitch letter background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span
          className="glitch-text absolute top-[15%] left-[5%] text-[20vw] font-heading font-bold text-foreground/[0.04] leading-none"
          data-text="S"
        >
          S
        </span>
        <span
          className="glitch-text absolute bottom-[10%] right-[10%] text-[15vw] font-heading font-bold text-foreground/[0.04] leading-none"
          data-text="S"
        >
          S
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-4">
            <span className="glitch-text" data-text={personalInfo.name}>
              {personalInfo.name}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg md:text-xl font-body text-muted-foreground mb-2">
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
            className="flex items-center gap-4"
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

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-coral-light/40 blur-3xl" />
            <img
              src={profilePhoto}
              alt={personalInfo.name}
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Hindi name floating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -top-4 -right-4 md:right-0 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
          >
            <span className="font-hindi text-xl text-foreground/70">
              {personalInfo.nameHindi}
            </span>
          </motion.div>
        </motion.div>
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
