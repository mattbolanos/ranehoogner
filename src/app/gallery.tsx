"use client";

import { useHotkey } from "@tanstack/react-hotkeys";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const gallery = [
  { src: "/basket-flowers.jpg", alt: "Basket filled with flowers" },
  { src: "/floral-basket.jpg", alt: "Floral basket arrangement" },
  { src: "/baskets-posed-in-forest.jpg", alt: "Baskets posed in a forest" },
  { src: "/floral-wreath.jpg", alt: "Handmade floral wreath" },
  {
    src: "/holding-basket-flowers-in-background.jpg",
    alt: "Holding a basket with flowers in the background",
  },
  { src: "/baskets-posed-in-nature.jpg", alt: "Baskets posed in nature" },
  { src: "/basket-plants.jpg", alt: "Basket with plants" },
  { src: "/making-basket.jpeg", alt: "Rane weaving a basket" },
  {
    src: "/cat-sleeping-in-basket.jpg",
    alt: "Cat sleeping in a handmade basket",
  },
  {
    src: "/autumn-wreath-studio.jpg",
    alt: "Autumn wreath crafted in the studio",
  },
  {
    src: "/basket-bouquet-portraits.jpg",
    alt: "Portraits with basket bouquets",
  },
  {
    src: "/bike-flower-basket-ride.jpg",
    alt: "Riding a bike with a flower-filled basket",
  },
  {
    src: "/floral-stem-prep-floor.jpg",
    alt: "Preparing floral stems on the floor",
  },
  {
    src: "/floral-tablescape-setup.jpg",
    alt: "Setting up a floral tablescape",
  },
  {
    src: "/floral-wreath-workshop-group.jpg",
    alt: "Group wreath-making workshop",
  },
  {
    src: "/flower-market-wreath.jpg",
    alt: "Wreath displayed at the flower market",
  },
  {
    src: "/foraged-greenery-gathering.jpg",
    alt: "Gathering foraged greenery",
  },
  {
    src: "/lake-foraging-kayak.jpg",
    alt: "Foraging by kayak on the lake",
  },
  {
    src: "/lavender-field-harvest.jpg",
    alt: "Harvesting in the lavender field",
  },
  {
    src: "/outdoor-basket-arranging.jpg",
    alt: "Arranging baskets outdoors",
  },
  {
    src: "/red-branch-flower-market.jpg",
    alt: "Red branches at the flower market",
  },
  {
    src: "/wreath-studio-apron-portrait.jpg",
    alt: "Studio portrait in apron with wreath",
  },
];

const INITIAL_COUNT = 9;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = showAll ? gallery : gallery.slice(0, INITIAL_COUNT);
  const remaining = gallery.length - INITIAL_COUNT;

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? (i - 1 + gallery.length) % gallery.length : null
      ),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % gallery.length : null)),
    []
  );

  const isOpen = lightbox !== null;

  useHotkey("Escape", close, { enabled: isOpen });
  useHotkey("ArrowLeft", prev, { enabled: isOpen });
  useHotkey("ArrowRight", next, { enabled: isOpen });

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-bark/0 transition-colors duration-300 group-hover:bg-bark/10" />
          </button>
        ))}
      </div>

      {!showAll && remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group flex items-center gap-2 rounded-md border border-bark/20 px-6 py-3 font-sans text-sm font-medium text-bark transition-all hover:border-bark/40 hover:bg-sand-light"
          >
            View all {gallery.length} photos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-y-0.5"
            >
              <title>Expand</title>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-earth/90 backdrop-blur-sm"
          onClick={close}
          onKeyDown={() => {}}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[lightbox].alt}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Close</title>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 font-sans text-sm tracking-wide text-cream/60">
            {lightbox + 1} / {gallery.length}
          </span>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream sm:left-6"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Previous</title>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 h-[80vh] w-full max-w-4xl sm:mx-20"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
          >
            <Image
              key={gallery[lightbox].src}
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream sm:right-6"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Next</title>
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          {/* Alt text caption */}
          <p className="absolute bottom-5 left-1/2 max-w-md -translate-x-1/2 text-center font-serif text-sm italic text-cream/50">
            {gallery[lightbox].alt}
          </p>
        </div>
      )}
    </>
  );
}
