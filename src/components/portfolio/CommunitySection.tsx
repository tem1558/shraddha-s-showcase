import { motion } from "framer-motion";
import { communityActivities } from "@/data/portfolio";
import { Heart, Users } from "lucide-react";

const CommunitySection = () => {
  // Placeholder images for collage - replace with actual images
  const collageImages = [
    { id: 1, size: "large" as const },
    { id: 2, size: "small" as const },
    { id: 3, size: "medium" as const },
    { id: 4, size: "small" as const },
    { id: 5, size: "medium" as const },
    { id: 6, size: "small" as const },
  ];

  return (
    <section id="community" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title mb-4 flex items-center gap-3">
            Community & Leadership <Heart size={32} className="text-primary" />
          </h2>
          <p className="section-subtitle">Positions of responsibility and social impact.</p>
        </motion.div>

        {/* Activity cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {communityActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-heading text-primary font-semibold uppercase tracking-wider">
                    {activity.role}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {activity.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Collage placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[120px] md:auto-rows-[160px]"
        >
          {collageImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`rounded-xl bg-muted border border-border overflow-hidden flex items-center justify-center text-muted-foreground text-sm font-body cursor-pointer transition-shadow hover:shadow-xl ${
                img.size === "large"
                  ? "col-span-2 row-span-2"
                  : img.size === "medium"
                  ? "col-span-2"
                  : ""
              }`}
            >
              <span className="text-xs">Add photo {img.id}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
