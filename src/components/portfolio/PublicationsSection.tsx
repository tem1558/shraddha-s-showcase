import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

const publications = [
  {
    id: 1,
    code: "AAAI",
    year: "2026",
    title: "E-Care: Camera-Free Elderly Activity Monitoring via WiFi RSSI, Audio Sensing, and Context-Aware AI Feedback",
    venue: "Association for the Advancement of Artificial Intelligence, Singapore",
    link: "https://drive.google.com/file/d/190x7YdmfhaGwnpt7IR2MNtLukSiDsZrO/view?usp=sharing",
    award: "Best Poster Award",
    image: "/ecare.png" // Replace with your image path (e.g., "/images/aaai.jpg")
  },
  {
    id: 2,
    code: "CICT",
    year: "2025",
    title: "IntelliSense: A Vision-Driven Sensor Framework with Modeling for Indoor CO Emission Detection",
    venue: "The 9th IEEE International Conference on Information and Communication Technology",
    link: "https://ieeexplore.ieee.org/abstract/document/11399039",
    image: "/cict.png" 
  },
  {
    id: 3,
    code: "INDICON",
    year: "2024",
    title: "When You Come In, You Sit, Stand, or Walk: Leveraging RSSI for Tracking and Control in Ubiquitous Systems",
    venue: "21st IEEE India Council International Conference, IIT Kharagpur",
    link: "https://ieeexplore.ieee.org/abstract/document/10958530",
    award: "Best Paper Award",
    image: "/wssi.png"
  }
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 border-b border-border pb-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-3">
            Selected Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A collection of peer-reviewed research papers and contributions at international venues.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-border ml-3 md:ml-6 space-y-16">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[5.5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary group-hover:ring-4 group-hover:ring-primary/10 transition-all duration-300" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Content Side */}
                <div className="flex-1 order-2 md:order-1">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/90">
                      {pub.code}
                    </span>
                    <span className="text-xs text-muted-foreground/40">•</span>
                    <span className="text-xs font-medium text-muted-foreground italic">
                      {pub.year}
                    </span>
                    
                    {pub.award && (
                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 border border-amber-500/20 text-[10px] font-bold uppercase tracking-tight">
                        <Award size={10} strokeWidth={3} />
                        {pub.award}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 mb-3">
                    <a 
                      href={pub.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group/link"
                    >
                      {pub.title}
                      <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 shrink-0 text-primary" />
                    </a>
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.venue}
                  </p>
                </div>

                {/* Image Side */}
                {pub.image && (
                  <div className="w-full md:w-64 shrink-0 order-1 md:order-2">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border group-hover:border-primary/30 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/5">
                        <motion.img 
                          src={pub.image} 
                          alt={pub.title}
                          className="object-cover w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;