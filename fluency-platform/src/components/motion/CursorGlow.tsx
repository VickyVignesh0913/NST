"use client";

import { useState, useEffect, useRef } from "react";

export default function CursorGlow() {
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;
      const glowEl = document.getElementById("cursor-glow");
      if (glowEl) {
        glowEl.style.background = `radial-gradient(600px at ${currentPos.current.x}px ${currentPos.current.y}px, rgba(201, 168, 108, 0.03), transparent 80%)`;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      id="cursor-glow"
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
