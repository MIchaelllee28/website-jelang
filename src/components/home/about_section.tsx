const VALUES = [
  { title: "Jalan santai", text: "Nikmati kota tanpa buru-buru." },
  { title: "Teman baru", text: "Mulai dari sapaan sederhana." },
  { title: "Cerita kecil", text: "Selalu ada yang dibawa pulang." },
] as const;

export default function AboutSection() {
  return (
    <section id="tentang" className="scroll-mt-6 px-6 pb-12 pt-[30px] md:px-[88px] md:pb-20 md:pt-16">
      <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-[22px]">
        <p className="text-[12px] font-bold leading-[1.45] text-accent">01 / KENALAN DULU</p>
        <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-1.08px] text-ink md:text-[49px] md:tracking-[-1.47px]">
          Kota yang sama.
          <br />
          Cerita yang selalu berbeda.
        </h2>
        <p className="max-w-[770px] text-[17px] leading-[1.45] text-muted md:text-[20px]">
          Jelang adalah komunitas jalan sore keliling Malang. Kita menikmati kota sambil ngobrol,
          menemukan sudut baru, dan menghabiskan sore bersama.
        </p>
        <div className="flex flex-col gap-6 text-ink md:flex-row">
          {VALUES.map((value) => (
            <div key={value.title} className="flex flex-1 flex-col gap-2 py-5">
              <h3 className="text-[25px] font-bold leading-[1.12] tracking-[-0.75px]">{value.title}</h3>
              <p className="text-[14px] leading-[1.45]">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
