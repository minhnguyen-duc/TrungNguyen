"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section
      aria-label="Mở đầu"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      <FloatingLeaves />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-5 font-body text-xs uppercase tracking-[0.35em] text-amber"
        >
          Trung Nguyên, 19/7/2026
          Từ một người khách quen
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-display text-5xl leading-tight text-ink sm:text-6xl md:text-7xl"
        >
          Cảm Ơn
        </motion.h1>

      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="h-5 w-5 text-muted/70"
            aria-hidden="true"
            strokeWidth={1.5}
          />
        </motion.div>
        <span className="sr-only">Cuộn xuống để đọc tiếp</span>
      </motion.div>
    </section>
  );
}
