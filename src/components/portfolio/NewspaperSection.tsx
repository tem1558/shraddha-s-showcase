import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Languages } from "lucide-react";

const NewspaperSection = () => {
  // ----------- Newspaper Data (EDIT IMAGES HERE) -----------
  const newspaperClips = [
    {
      id: "clip-1",
      titleHindi: "मूल हिंदी समाचार शीर्षक",
      titleEnglish: "Translated English Headline",
      imageHindi: "/aaai.jpeg",
      imageEnglish: "/eaaai.jpeg",
      publicationDate: "Nayi Baat, Jan 2026",
    },
    {
      id: "clip-3",
      titleHindi: "3 हिंदी समाचार शीर्षक",
      titleEnglish: "3 Translated Headline",
      imageHindi: "/mvcbpa.jpeg",
      imageEnglish: "/emvcbpa.png",
      publicationDate: "Dainik Bhaskar, March 2025",
    },
    {
      id: "clip-2",
      titleHindi: "दूसरा हिंदी समाचार शीर्षक",
      titleEnglish: "Second Translated Headline",
      imageHindi: "/iot.jpeg",
      imageEnglish: "/eiot.jpg",
      publicationDate: "Dainik Bhaskar, Jan 2025",
    },
    {
      id: "clip-4",
      titleHindi: "4 हिंदी समाचार शीर्षक",
      titleEnglish: "4 Translated Headline",
      imageHindi: "/10th.jpeg",
      imageEnglish: "/e10th.png",
      publicationDate: "Dainik Bhaskar, July 2020",
    },
     {
      id: "clip-4",
      titleHindi: "5 हिंदी समाचार शीर्षक",
      titleEnglish: "5 Translated Headline",
      imageHindi: "/12th.jpeg",
      imageEnglish: "/e12th.jpeg",
      publicationDate: "Dainik Bhaskar, May 2022",
    },
     
  ];

  // ----------- State -----------
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHindi, setShowHindi] = useState(true); // Hindi default
  const [isHovered, setIsHovered] = useState(false);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % newspaperClips.length);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + newspaperClips.length) % newspaperClips.length
    );

  const currentClip = newspaperClips[currentIndex];

  return (
    <section id="newspaper" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-3xl font-bold mb-3">In the Press</h2>
          <p className="text-muted-foreground">
            Selected newspaper coverage and media features.
          </p>

          {/* Professional Translation Note */}
          <p className="text-xs text-muted-foreground mt-3 max-w-2xl">
            The original newspaper clippings are published in Hindi and are
            displayed by default to preserve authenticity. For accessibility,
            an English version is available. The English images are AI-assisted
            translations of the original Hindi publications and are provided
            for non-Hindi readers. They are not official translations.
          </p>
        </motion.div>

        {/* Language Toggle */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setShowHindi(true)}
            className={`text-sm px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
              showHindi
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-500 hover:text-black"
            }`}
          >
            <Languages size={14} />
            हिन्दी (Original)
          </button>

          <button
            onClick={() => setShowHindi(false)}
            className={`text-sm px-4 py-2 rounded-full border transition-all ${
              !showHindi
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-500 hover:text-black"
            }`}
          >
            English (Translated)
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${showHindi}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div
  className="relative mx-auto w-full md:w-[60%] lg:w-[30%] rounded-2xl overflow-hidden border border-gray-200"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Newspaper Image */}
                  <img
                    src={
                      showHindi
                        ? currentClip.imageHindi
                        : currentClip.imageEnglish
                    }
                    alt={
                      showHindi
                        ? currentClip.titleHindi
                        : currentClip.titleEnglish
                    }
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 text-white flex flex-col justify-end p-6"
                      >
                        <p className="text-sm mb-2 font-medium">
                          Published: {currentClip.publicationDate}
                        </p>

                        {!showHindi && (
                          <p className="text-xs leading-relaxed opacity-90">
                            This image is an AI-assisted English translation of
                            the original Hindi newspaper publication, provided
                            for accessibility to readers who are not native
                            Hindi speakers.
                          </p>
                        )}
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
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
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
                      ? "bg-black w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
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