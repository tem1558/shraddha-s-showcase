import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Linkedin, GraduationCap, Github, Download } from "lucide-react";

const Footer = () => {
  const links = [
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: GraduationCap, href: personalInfo.googleScholar, label: "Google Scholar" },
    { icon: Github, href: personalInfo.github, label: "GitHub" },
  ];

  return (
    <footer id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Open to research collaborations, internship opportunities, and conversations about AI.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-body text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Download CV */}
        <div className="flex justify-center mb-12">
          <a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-heading font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-border pt-8">
          <p className="text-xs font-body text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with purpose.
          </p>
          <p className="font-hindi text-sm text-muted-foreground/50 mt-2">
            {personalInfo.nameHindi}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
