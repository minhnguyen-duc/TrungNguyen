"use client";

import { motion } from "framer-motion";

export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-12 text-center sm:mb-16"
    >
      {eyebrow && (
        <p className="mb-3 font-body text-xs uppercase tracking-[0.25em] text-amber">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-ink sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
