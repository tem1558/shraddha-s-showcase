import { Trophy } from "lucide-react";
import { useEffect, useRef } from "react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Best UG Poster Award",
      description: "AAAI EGSAI, Singapore",
      year: "2026",
    },
    {
      id: 2,
      title: "HPAIR Delegate",
      description: "Harvard Project, Tokyo",
      year: "2025",
    },
    {
      id: 3,
      title: "IAS Fellow",
      description: "IASc-INSA-IAS Fellowship",
      year: "2025",
    },
    {
      id: 4,
      title: "Best Paper Award",
      description: "IEEE India Council",
      year: "2024",
    },
    {
      id: 5,
      title: "SIH Winner",
      description: "Smart India Hackathon Finals",
      year: "2024",
    },
    {
      id: 6,
      title: "Top 0.1%",
      description: "CBSE Class X",
      year: "2020",
    },
  ];

  const scrollerRef = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 0.5; // 🔥 control speed here (higher = faster)

    const animate = () => {
      if (!scrollerRef.current) return;

      x -= speed;
      const width = scrollerRef.current.scrollWidth / 2;

      // 🔥 NO RESET JUMP — smooth wrap
      if (Math.abs(x) >= width) {
        x = 0;
      }

      scrollerRef.current.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-24 px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 text-center md:text-left">
          <h2 className="section-title mb-4">Achievements</h2>
          <p className="section-subtitle">
            Awards, fellowships, and recognitions.
          </p>
        </div>

        <div className="overflow-hidden">
          <div ref={scrollerRef} className="flex gap-10">

            {/* original */}
            {achievements.map((ach) => (
              <div key={ach.id} className="flex items-center gap-4 min-w-max">
                <Trophy size={20} />
                <div>
                  <div className="text-sm font-semibold">{ach.title}</div>
                  <div className="text-xs">{ach.description}</div>
                  <div className="text-xs text-primary">{ach.year}</div>
                </div>
              </div>
            ))}

            {/* duplicate */}
            {achievements.map((ach) => (
              <div key={`${ach.id}-dup`} className="flex items-center gap-4 min-w-max">
                <Trophy size={20} />
                <div>
                  <div className="text-sm font-semibold">{ach.title}</div>
                  <div className="text-xs">{ach.description}</div>
                  <div className="text-xs text-primary">{ach.year}</div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;