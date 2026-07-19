"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

type Moment = {
  emoji: string;
  label: string;
};

const MOMENTS: Moment[] = [
  { emoji: "☕", label: "Ly cà phê được pha đúng ý, chẳng cần dặn trước." },
  { emoji: "🙂", label: "Một nụ cười khi đưa ly cà phê ra bàn." },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Timeline() {
  return (
    <section aria-labelledby="moments-heading" className="py-24 sm:py-32">
      <Container>
        <SectionTitle eyebrow="Không theo thứ tự nào cả" title="Vài khoảnh khắc nhỏ" />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {MOMENTS.map((moment) => (
            // eslint-disable-next-line react/jsx-key
            <motion.li
              key={moment.label}
              variants={item}
              className="flex items-center gap-4 rounded-2xl border border-hairline bg-white/40 px-6 py-6 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="text-2xl" aria-hidden="true">
                {moment.emoji}
              </span>
              <p className="font-body text-base leading-relaxed text-ink">
                {moment.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
