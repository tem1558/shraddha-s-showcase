import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const Item = styled(Paper)(() => ({
  backgroundColor: "#f9f9f9",
  padding: 0,
  textAlign: "center",
  borderRadius: "1rem",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
  },
}));

const collageImages = [
  { id: 1, src: "/adhyaay1.jpeg", title: "Initiated counselling and mentored 500+ students" },
  { id: 3, src: "/adhyaay3.jpeg", title: "Organised Mentorship session" },
  { id: 10, src: "/election.jpeg", title: "Leadership Event" },
  { id: 17, src: "/orientation.jpeg", title: "General Awareness session" },
  { id: 15, src: "/health2.jpeg", title: "Mental Health Awareness session" },
  { id: 9, src: "/artofliving.jpeg", title: "7-day youth empowerment workshop" },
  { id: 14, src: "/health3.jpeg", title: "Women’s health checkup camp" },
  { id: 6, src: "/adhyaay6.jpeg", title: "Founding meetings" },
  { id: 13, src: "/health1.jpeg", title: "Health checkup camp" },
  { id: 7, src: "/adhyaayfull.jpeg", title: "Orientation program for freshers" },
  { id: 12, src: "/hackathon2.jpeg", title: "Teamwork, Hackathon" },
  { id: 16, src: "/independece.jpeg", title: "Awareness Speech" },
  { id: 4, src: "/adhyaay4.jpeg", title: "Organised Awareness session" },
  { id: 18, src: "/sports.jpeg", title: "Sports" },
  { id: 11, src: "/hackathon.jpeg", title: "National SIH Hackathon Winner" },
  { id: 8, src: "/adhyaayfullblue.jpeg", title: "Led Counselling Board Team" },
  { id: 2, src: "/adhyaay2.jpeg", title: "Leading team of 40 mentors" },
  { id: 5, src: "/adhyaay5.jpeg", title: "1-Year Anniversary Celebration" },
];

const CommunitySection = () => {
  return (
    <section
      id="community"
      className="py-16 md:py-24 px-4 sm:px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            Community & Leadership
            <Heart size={28} className="text-primary animate-pulse" />
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Positions of responsibility and social impact
          </p>
        </motion.div>

        {/* Masonry */}
        <Box sx={{ width: "100%" }}>
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
          >
            {collageImages.map((img) => (
              <Item key={img.id} className="group relative">

                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover"
                  style={{ height: "auto" }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-3">
                  <p className="text-white text-sm sm:text-base font-medium text-center">
                    {img.title}
                  </p>
                </div>

              </Item>
            ))}
          </Masonry>
        </Box>

      </div>
    </section>
  );
};

export default CommunitySection;