import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Linkedin, Github, Mail, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">

      <div className="relative flex min-h-screen w-full flex-col md:flex-row">

        {/* MOBILE IMAGE BACKGROUND */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/Profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full md:w-[45%] 
                     flex flex-col justify-center 
                     px-6 sm:px-10 md:px-16 
                     py-20 md:py-0"
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-2">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-3">
            {personalInfo.name}
          </h1>

          <p className="text-base sm:text-lg mb-1">
            {personalInfo.title}
          </p>

          <p className="text-sm text-primary font-medium mb-4">
            {personalInfo.institution}
          </p>

          <p className="max-w-md text-sm mb-6 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex gap-3 flex-wrap">
            {[
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Github, href: personalInfo.github },
              { icon: GraduationCap, href: personalInfo.googleScholar },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border 
                           flex items-center justify-center 
                           hover:text-primary hover:border-primary 
                           transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* DESKTOP IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block w-[55%] h-screen"
        >
          <img
            src="/Profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;