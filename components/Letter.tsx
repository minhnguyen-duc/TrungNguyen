"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const LINES = [
  "Cảm ơn vì những buổi sáng rất đỗi bình thường.",
  "Cảm ơn vì mỗi ly cà phê được pha cẩn thận.",
  "Có những người mình chỉ gặp trong một khoảng thời gian ngắn,",
  "nhưng lại lặng lẽ trở thành một phần của thói quen mỗi ngày.",
  "Chúc em thật nhiều niềm vui trên chặng đường sắp tới.",
  "Mong công việc mới thật thuận lợi,",
  "những ngày mới thật nhẹ nhàng,",
  "và luôn có nhiều lý do để mỉm cười.",
  "Giữ gìn sức khỏe nhé.",
  "Hẹn gặp lại.",
];

export function Letter() {
  return (
    <section aria-labelledby="letter-heading" className="py-24 sm:py-32">
      <Container className="max-w-2xl">
        <h2 id="letter-heading" className="sr-only">
          Một lá thư nhỏ
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-sm border border-hairline bg-white/60 px-8 py-14 shadow-soft sm:px-14 sm:py-16"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 2.6rem, #EAE6E1 2.6rem, #EAE6E1 calc(2.6rem + 1px))",
            backgroundPosition: "0 3rem",
          }}
        >
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-8 top-0 h-full w-px bg-amber/30 sm:left-14"
          />

          <div className="space-y-1 pl-4 font-display text-lg leading-[2.6rem] text-ink/90 sm:pl-6 sm:text-xl">
            {LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
