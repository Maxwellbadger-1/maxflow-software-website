"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CODE_SNIPPETS = [
  "const innovation = () => excellence;",
  "function createWebsite() { return amazing; }",
  "class Software { transform() { business; } }",
  "export const quality = 'guaranteed';",
];

export function TypingCode() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const snippet = CODE_SNIPPETS[currentSnippet];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < snippet.length) {
        // Typing
        setDisplayedText(snippet.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === snippet.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText(snippet.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Switch to next snippet
        setIsDeleting(false);
        setCurrentSnippet((prev) => (prev + 1) % CODE_SNIPPETS.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentSnippet]);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm border border-primary/20 rounded-lg font-mono text-sm">
      <span className="text-primary">{">"}</span>
      <span className="text-foreground">{displayedText}</span>
      <motion.span
        className="inline-block w-2 h-5 bg-primary"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}
