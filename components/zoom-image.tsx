"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FADE_MS = 180;
const MAX_SCALE = 1.3;

export function ZoomImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const closeTimer = useRef<number | null>(null);

  function closeImage() {
    if (closeTimer.current !== null) return;
    setShown(false);
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      setOpen(false);
    }, FADE_MS);
  }

  function openImage() {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (closeTimer.current === null) setShown(true);
      });
    });
  }

  const closeRef = useRef(closeImage);
  closeRef.current = closeImage;

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeRef.current();
        return;
      }
      if (
        event.key === " " ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "PageUp" ||
        event.key === "PageDown" ||
        event.key === "Home" ||
        event.key === "End"
      ) {
        event.preventDefault();
      }
    }

    function preventScroll(event: Event) {
      event.preventDefault();
    }

    function keepPosition() {
      if (window.scrollY !== scrollY) window.scrollTo(0, scrollY);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("scroll", keepPosition);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("scroll", keepPosition);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={openImage}
        className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={className}
        />
      </button>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className={`bg-ink/95 fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center transition-opacity duration-200 ease-out ${
            shown ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeImage}
        >
          <img
            src={src}
            alt={alt}
            className={`object-contain transition-transform duration-200 ease-out ${
              shown ? "scale-100" : "scale-95"
            }`}
            style={{
              width: `min(calc(100vw - 8rem), ${Math.round(width * MAX_SCALE)}px)`,
              height: `min(calc(100vh - 8rem), ${Math.round(height * MAX_SCALE)}px)`,
            }}
          />
        </div>
      ) : null}
    </>
  );
}
