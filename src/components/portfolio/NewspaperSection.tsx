import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { newspaperClips } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Languages } from "lucide-react";

const NewspaperSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHindi, setShowHindi] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % newspaperClips.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + newspaperClips.length) % newspaperClips.length);

  return (
    <section id="newspaper" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="section-title mb-4">In the Press</h2>
          <p className="section-subtitle">Media coverage and newspaper features.</p>
        </motion.div>

        {/* Language toggle */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setShowHindi(false)}
            className={`text-sm font-body px-4 py-2 rounded-full border transition-all ${
              !showHindi
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setShowHindi(true)}
            className={`text-sm font-body px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
              showHindi
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Languages size={14} /> हिन्दी
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${showHindi}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative"
                onMouseEnter={() => setHoveredId(newspaperClips[currentIndex].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Newspaper clip placeholder - replace with actual images */}
                <div className="bg-secondary/50 border border-border rounded-xl p-12 text-center min-h-[300px] flex flex-col items-center justify-center relative">
                  <div className="text-6xl mb-4">📰</div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {showHindi
                      ? newspaperClips[currentIndex].titleHindi
                      : newspaperClips[currentIndex].titleEnglish}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground">
                    Add your newspaper clip image here
                  </p>

                  {/* Hover date overlay */}
                  <AnimatePresence>
                    {hoveredId === newspaperClips[currentIndex].id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-4 right-4 bg-foreground/90 text-background text-xs font-body px-3 py-1.5 rounded-md"
                      >
                        Published: {newspaperClips[currentIndex].publicationDate}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {newspaperClips.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewspaperSection;
