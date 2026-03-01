import { motion } from "framer-motion";
import { publications } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">Publications</h2>
          <p className="section-subtitle">Peer-reviewed research published at top-tier venues.</p>
        </motion.div>

        {/* Curvy timeline */}
        <div className="relative">
          {/* Animated SVG curve */}
          <svg
            className="absolute left-8 top-0 h-full w-4 hidden md:block"
            viewBox="0 0 16 600"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M8,0 C8,100 8,100 8,150 C8,200 2,200 2,250 C2,300 14,300 14,350 C14,400 8,400 8,450 C8,500 8,500 8,600"
              fill="none"
              stroke="hsl(15, 80%, 55%)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="space-y-8 md:pl-20">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-[52px] top-6 w-5 h-5 rounded-full bg-primary timeline-dot z-10" />

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-500 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-heading font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          [{pub.code}]
                        </span>
                        <span className="text-sm text-muted-foreground font-body">{pub.year}</span>
                        {pub.award && (
                          <span className="flex items-center gap-1 text-xs font-body font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                            <Award size={12} /> {pub.award}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>

                      <p className="text-sm font-body text-muted-foreground italic">
                        {pub.venue}
                      </p>
                    </div>

                    <button className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
