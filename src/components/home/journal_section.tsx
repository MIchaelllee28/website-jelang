import Image from "next/image";
import { imagePath } from "@/lib/image";

const STORIES = [
  {
    eyebrow: "CONTOH CERITA / 01",
    title: "Menyapa Kayutangan",
    description: "Bangunan lama, obrolan baru.",
    hideDescriptionOnDesktop: true,
    desktopSrc: imagePath("/images/story-kayutangan.jpg"),
    mobileSrc: imagePath("/images/story-kayutangan-mobile.jpg"),
    alt: "Suasana malam di Kayutangan",
    badge: null,
  },
  {
    eyebrow: "CONTOH CERITA / 02",
    title: "Sore di Ijen",
    description: "Menikmati kota dari trotoarnya.",
    hideDescriptionOnDesktop: false,
    desktopSrc: imagePath("/images/story-ijen.jpg"),
    mobileSrc: imagePath("/images/story-ijen-mobile.jpg"),
    alt: "Boulevard Ijen dari atas",
    badge: "IJEN SORE",
  },
  {
    eyebrow: "CONTOH CERITA / 03",
    title: "Berhenti buat jajan",
    description: "Karena jalan juga perlu jeda.",
    hideDescriptionOnDesktop: false,
    desktopSrc: imagePath("/images/story-jajan.jpg"),
    mobileSrc: imagePath("/images/story-jajan-mobile.jpg"),
    alt: "Jajanan di pinggir jalan",
    badge: null,
  },
] as const;

export default function JournalSection() {
  return (
    <section id="cerita" className="scroll-mt-6 bg-sand px-6 pb-20 pt-16 md:px-[88px]">
      <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-7">
        <p className="text-[12px] font-bold leading-[1.45] text-accent">02 / JEJAK SORE KITA</p>
        <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-1.08px] text-ink md:text-[49px] md:tracking-[-1.47px]">
          Sedikit langkah, banyak cerita.
        </h2>
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {STORIES.map((story) => (
            <article key={story.title} className="flex flex-1 flex-col gap-3 pb-4">
              <div className="relative h-[220px] w-full overflow-hidden bg-sage md:h-[245px]">
                <Image
                  src={story.mobileSrc}
                  alt={story.alt}
                  fill
                  className="object-cover md:hidden"
                  sizes="100vw"
                />
                <Image
                  src={story.desktopSrc}
                  alt={story.alt}
                  fill
                  className="hidden object-cover md:block"
                  sizes="405px"
                />
                {story.badge ? (
                  <span className="absolute left-[18px] top-[18px] hidden rounded-full bg-canvas px-3 py-1.5 text-[11px] font-bold text-[#2e4037] md:inline">
                    {story.badge}
                  </span>
                ) : null}
              </div>
              <p className="text-[10px] font-bold leading-[1.45] text-accent">{story.eyebrow}</p>
              <h3 className="text-[27px] font-bold leading-[1.12] tracking-[-0.81px] text-ink">{story.title}</h3>
              <p
                className={`text-[14px] leading-[1.45] text-muted ${
                  story.hideDescriptionOnDesktop ? "md:hidden" : ""
                }`}
              >
                {story.description}
              </p>
              <a href="#cerita" className="text-[13px] font-bold leading-[1.45] text-ink">
                Baca cerita ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
