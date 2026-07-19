const WORDS = [
  "Bridal Couture",
  "Hand Embroidery",
  "Festive Occasion",
  "Luxury Prêt",
  "Made to Measure",
  "Crafted in India",
];

/** Slow editorial ticker between the hero and the collections. */
export default function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-clip border-y border-hairline-soft py-6">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex">
            {WORDS.map((word) => (
              <span
                key={word}
                className="inline-flex items-center whitespace-nowrap font-cormorant text-[clamp(1.15rem,2vw,1.5rem)] font-light italic after:mx-11 after:h-1.25 after:w-1.25 after:flex-none after:rounded-full after:bg-champagne-gold after:content-['']"
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
