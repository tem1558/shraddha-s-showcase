import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const SkillsSection = () => {
  const categories = [
    { label: "Languages", items: skills.languages },
    { label: "ML & AI", items: skills.mlAi },
    { label: "Frameworks & Tools", items: skills.frameworks },
    { label: "Databases", items: skills.databases },
    { label: "Analytics", items: skills.analytics },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xs font-heading font-semibold text-primary uppercase tracking-wider mb-2">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-body px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
