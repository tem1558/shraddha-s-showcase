import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

// Styled Paper for Masonry items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  padding: 0,
  textAlign: "center",
  borderRadius: "1rem",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
  },
}));

// ✅ Single unified array
const collageImages = [
  { id: 1, src: "/adhyaay1.jpeg", title: "Initiated coucelling and mental health awareness campaign, mentored 500+ students ", height: 200 }, 
  { id: 3, src: "/adhyaay3.jpeg", title: "Organised Mentorship session", height: 300 },{ id: 10, src: "/election.jpeg", title: "Leadership Event", height: 180 },

  { id: 17, src: "/orientation.jpeg", title: "General Awareness session", height: 350 },
    { id: 15, src: "/health2.jpeg", title: "Mental Health Awareness session", height: 350 }, { id: 9, src: "/artofliving.jpeg", title: "Led 7 days youth skills empowering workshop", height: 180 },
     { id: 14, src: "/health3.jpeg", title: "Led Womens health checkup camp under ministry of Women and child development", height: 150 },
      { id: 6, src: "/adhyaay6.jpeg", title: "Founding meatings", height: 400 },  { id: 13, src: "/health1.jpeg", title: "Led health checkup camp", height: 180 },{ id: 7, src: "/adhyaayfull.jpeg", title: "Led Orientation program for freshers, Spreading awareness", height: 200 },  { id: 12, src: "/hackathon2.jpeg", title: "Teamwork, Hackathon", height: 180 },{ id: 16, src: "/independece.jpeg", title: "Awareness Speech on Republic Day", height: 300 },
     { id: 4, src: "/adhyaay4.jpeg", title: "Organised Awareness session", height: 140 }, { id: 17, src: "/sports.jpeg", title: "Sports", height: 530 },{ id: 11, src: "/hackathon.jpeg", title: "Led team to win national finale in SIH hackathon", height: 180 },
  { id: 8, src: "/adhyaayfullblue.jpeg", title: "Led councelling Board Team", height: 120 },

 { id: 2, src: "/adhyaay2.jpeg", title: "Leading new team of 40 mentors", height: 250 },
  
  { id: 5, src: "/adhyaay5.jpeg", title: "1 year Aniversary, of Councelling Borad", height: 160 },

  
  
 
]; 

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mb-3 flex items-center justify-center gap-3 text-3xl md:text-4xl">
            Community & Leadership
            <Heart size={32} className="text-primary animate-pulse" />
          </h2>
          <p className="section-subtitle text-lg text-muted-foreground">
            Positions of responsibility and social impact
          </p>
        </motion.div>

        {/* Masonry Collage */}
        <Box sx={{ width: "100%", minHeight: 300 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {collageImages.map((img) => (
              <Item key={img.id} sx={{ height: img.height }} className="group relative">
                
                {/* Image */}
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold text-center px-3">
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