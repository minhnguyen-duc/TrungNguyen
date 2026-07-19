"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

// Ảnh thật chụp tại quán — mỗi tấm gắn với một chi tiết cụ thể, không cần chú thích hoa mỹ.
const PHOTOS: Photo[] = [
  {
    src: "/gallery/latte-heart.jpg",
    alt: "Ly cà phê với hoa văn latte art trên nền quán quen",
    caption: "Hoa văn kéo tay, không ly nào giống ly nào.",
  },
  {
    src: "/gallery/rainy-courtyard.jpg",
    alt: "Mưa rơi trên sân vườn nhìn từ cửa kính quán",
    caption: "Một cơn mưa Sài Gòn, nhìn từ chỗ ngồi quen thuộc.",
  },
  {
    src: "/gallery/travel-wall-bike.jpg",
    alt: "Góc quán với tường ảnh du lịch và chiếc xe đạp dựng cạnh chậu cây",
    caption: "Góc quán nhỏ, quen đến từng chi tiết.",
  },
  {
    src: "/gallery/latte-flower.jpg",
    alt: "Ly cà phê với hoa văn latte art hình cánh hoa",
    caption: "Khéo tay như mọi lần, chẳng vội vàng.",
  },
];

export function Gallery() {
  return (
    <section aria-labelledby="gallery-heading" className="py-24 sm:py-32">
      <Container className="max-w-5xl">
        <SectionTitle eyebrow="Những điều nhỏ, được giữ lại" title="Vài khung hình của một mùa" />

        <div className="columns-1 gap-6 sm:columns-2">
          {PHOTOS.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: "easeOut" }}
              className="mb-6 break-inside-avoid"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-hairline shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-3 text-center font-body text-sm text-muted">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
