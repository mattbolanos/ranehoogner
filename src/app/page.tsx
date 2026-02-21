import Image from "next/image";

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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 border-b border-sand bg-warm-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-bold tracking-wide text-bark">
            Rane Hoogner
          </span>
          <div className="flex gap-6 font-sans text-sm text-bark-light">
            <a href="#about" className="transition-colors hover:text-bark">
              About
            </a>
            <a href="#gallery" className="transition-colors hover:text-bark">
              Gallery
            </a>
            <a href="#contact" className="transition-colors hover:text-bark">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-sand md:h-80 md:w-80">
            <Image
              src="/rane.jpg"
              alt="Rane Hoogner"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl font-bold tracking-wide text-bark md:text-5xl">
              Rane Hoogner
            </h1>
            <p className="mt-2 font-serif text-lg italic text-bark-light">
              The Weaver
            </p>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-earth/80">
              Creating baskets since 1982. Handcrafted baskets, floral
              arrangements, wreaths, garden design, and wedding florals.
            </p>
            <p className="mt-4 font-serif italic text-sage">
              &ldquo;Growing for the future&rdquo;
            </p>
            <div className="mt-6 flex flex-col gap-3 font-sans sm:flex-row">
              <a
                href="sms:6507435969"
                className="inline-block rounded-md bg-sage px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sage-light"
              >
                Text Me
              </a>
              <a
                href="mailto:rainsbaskets@gmail.com"
                className="inline-block rounded-md border border-bark/30 px-6 py-3 text-center text-sm font-semibold text-bark transition-colors hover:bg-sand-light"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="border-t border-sand bg-warm-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-bark">About</h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-earth/80">
            <p>
              My handle when I was in North Idaho was{" "}
              <em className="text-bark">The Weaver</em>. I&apos;ve been creating
              baskets since 1982, and since then so much has expanded.
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 pt-2 font-sans text-sm text-bark-light sm:grid-cols-3">
              <li>Basket Weaving</li>
              <li>Floral Design</li>
              <li>Gardening</li>
              <li>Wreaths</li>
              <li>Weddings</li>
              <li>Floral Arrangement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-sand">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-bark">Gallery</h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-sand bg-warm-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-bark">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-earth/80">
            Interested in a custom basket, floral arrangement, or booking for
            your wedding? Reach out by text or email.
          </p>
          <div className="mt-8 flex flex-col gap-4 font-sans sm:flex-row sm:gap-8">
            <a
              href="sms:6507435969"
              className="flex items-center gap-3 text-bark transition-colors hover:text-sage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <title>Phone</title>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-lg">(650) 743-5969</span>
            </a>
            <a
              href="mailto:rainsbaskets@gmail.com"
              className="flex items-center gap-3 text-bark transition-colors hover:text-sage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <title>Email</title>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-lg">rainsbaskets@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sand py-8 text-center text-sm text-bark-light">
        <p>&copy; {new Date().getFullYear()} Rane Hoogner</p>
        <p className="mt-1 font-serif italic text-sage">
          Growing for the future
        </p>
      </footer>
    </div>
  );
}
