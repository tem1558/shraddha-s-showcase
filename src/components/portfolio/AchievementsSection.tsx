import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { Trophy } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">Achievements</h2>
          <p className="section-subtitle">Awards, fellowships, and recognition.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Trophy size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">
                    {ach.description}
                  </p>
                  <span className="inline-block mt-2 text-xs font-heading text-primary font-medium">
                    {ach.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
