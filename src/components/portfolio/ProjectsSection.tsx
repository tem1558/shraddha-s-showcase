import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Design and Development of Quadcopter for Surveillance and Inspection",
      description:
        "Built low-cost quadcopter replacing fixed CCTV using onboard vision. Implemented optical-flow + Kalman stabilization with real-time human/activity detection and alert module",
      period: "2025",
      image: "/drone.png",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7397128228605411329/?originTrackingId=D72Gxi4suXlVegoL4zWBEA%3D%3D",
    },
    {
      id: 2,
      title: "Agentic AI Finance Assistant",
      description:
        "Developed multi-agent system retrieving live stock data, indicators, and analyst signals via API orchestration. Automated financial reasoning pipeline with interactive dashboard",
      period: "2024",
      image: "/agent.jpeg",
      github: "https://github.com/shraddha1558/Mr.-Finance-Agents",
    },
    {
      id: 3,
      title: "EcoWatch: AI-Powered Cleanliness Monitoring Dashboard",
      description:
        "Built monitoring platform with low-light waste detection, real-time alert logging, and privacy-preserving video analytics with structured storage, dim light optimisation",
      period: "2024",
      image: "/cv.png",
      github: "https://github.com/dopTrashTrackers/model-train",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Selected work spanning AI, computer vision, and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="object-cover w-full h-full grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Period badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-border">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;