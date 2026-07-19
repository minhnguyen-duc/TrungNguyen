"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast-context";

export function Ending() {
  const { toast } = useToast();

  return (
    <section
      aria-label="Lời chúc cuối"
      className="flex min-h-[80svh] flex-col items-center justify-center py-32 text-center"
    >
      <Container className="flex flex-col items-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md font-display text-2xl italic leading-relaxed text-ink sm:text-3xl"
        >
          &ldquo;Những kỷ niệm đẹp nhất, thường là những kỷ niệm lặng lẽ nhất.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-12"
        >
          <Button
            onClick={() =>
              toast({ title: "Cảm ơn vì đã ghé qua. Anh sẽ luôn nhớ về em." })
            }
          >
            Chúc em một hành trình thật đẹp.
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
