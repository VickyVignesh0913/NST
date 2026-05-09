"use client";

import { motion } from "framer-motion";
import Typography from "@/components/shared/Typography";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/motion/presets";

const floatingWords = ["Speak", "Think", "Express", "Lead", "Communicate", "Fluency", "Confidence"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg px-6 py-20">
      {/* Background floating words */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingWords.map((word) => (
          <motion.div
            key={word}
            className="absolute text-text-muted font-[family-name:var(--font-heading)] font-bold"
            style={{
              fontSize: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "var(--ease-cinematic)",
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-[var(--max-width-container)] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <Typography variant="h1" font="heading">
              English changes opportunity.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography variant="body" className="max-w-md">
              Fluency is leverage. Communicate with confidence, lead with clarity, and unlock global opportunities.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-4">
            <Button variant="primary" size="lg">
              Start Learning
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-8 pt-8">
            {[
              { value: "10,000+", label: "Active Learners" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "200+", label: "Expert Tutors" },
            ].map((stat) => (
              <div key={stat.label}>
                <Typography variant="h3" font="heading" className="text-accent">
                  {stat.value}
                </Typography>
                <Typography variant="caption">{stat.label}</Typography>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right animated typography */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "var(--ease-cinematic)" }}
          className="relative h-[600px] flex items-center justify-center"
        >
          <div className="space-y-6">
            {["Speak", "Think", "Express"].map((word, index) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.2,
                  ease: "var(--ease-cinematic)",
                }}
                className="text-8xl md:text-9xl font-[family-name:var(--font-heading)] font-bold text-text-muted opacity-10 hover:opacity-20 transition-opacity duration-500"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
