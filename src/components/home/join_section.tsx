import Button from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section id="ikut" className="scroll-mt-6 px-6 py-20 md:px-[88px]">
      <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-6">
        <p className="text-[12px] font-bold leading-[1.45] text-accent">03 / SAMPAI KETEMU DI JALAN</p>
        <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-1.08px] text-ink md:text-[49px] md:tracking-[-1.47px]">
          Datang sendiri?
          <br />
          Pulang bawa cerita.
        </h2>
        <p className="max-w-[600px] text-[17px] leading-[1.45] text-muted">
          Penasaran sama Jelang? Yuk, kenalan dan cari tahu cara ikut jalan sore berikutnya.
        </p>
        <Button href="#ikut">Cari tahu cara ikut ↗</Button>
      </div>
    </section>
  );
}
