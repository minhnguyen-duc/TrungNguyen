"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "@/components/ui/toast-context";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex flex-col items-center gap-2 px-4"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-auto rounded-full border border-hairline bg-paper/95 px-5 py-2.5 shadow-soft backdrop-blur-sm"
          >
            <button
              onClick={() => dismiss(t.id)}
              className="text-sm text-ink font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-full"
              aria-label="Dismiss notification"
            >
              {t.title}
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
