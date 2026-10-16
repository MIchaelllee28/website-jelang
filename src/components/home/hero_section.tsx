import Image from "next/image";
import Button from "@/components/ui/button";
import { imagePath } from "@/lib/image";

export default function HeroSection() {
  return (
    <section className="px-6 pb-14 pt-[30px] md:px-[88px] md:pb-14 md:pt-[52px]">
      <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-[12px] font-bold leading-[1.45] text-accent">JELANG / JELAJAH MALANG</p>
          <h1 className="text-[43px] font-bold leading-[1.12] tracking-[-1.29px] text-ink md:text-[88px] md:tracking-[-2.64px]">
            Sore yang biasa,
            <br />
            jadi cerita bersama.
          </h1>
          <p className="max-w-[600px] text-[17px] leading-[1.45] text-muted md:text-[19px]">
            Jalan santai keliling Malang, kenalan, dan menikmati kota bareng Jelang.
          </p>
          <Button href="#jadwal">
            <span className="md:hidden">Ikut jalan berikutnya ↗</span>
            <span className="hidden md:inline">Ikut next berikutnya ↗</span>
          </Button>
          <p className="text-[13px] leading-[1.45] text-muted">Jalan pelan. Kenalan. Nikmati Malang.</p>
        </div>

        <div className="relative h-[240px] w-full overflow-hidden bg-sand md:h-[460px]">
          <Image
            src={imagePath("/images/hero-mobile.jpg")}
            alt="Jalan sore di Kayutangan, Malang"
            fill
            priority
            className="object-cover md:hidden"
            sizes="100vw"
          />
          <Image
            src={imagePath("/images/hero-desktop.jpg")}
            alt="Suasana kota menjelang malam"
            fill
            priority
            className="hidden object-cover md:block"
            sizes="1264px"
          />
        </div>
      </div>
    </section>
  );
}
