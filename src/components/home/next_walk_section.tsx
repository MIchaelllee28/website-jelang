import Button from "@/components/ui/button";

export default function NextWalkSection() {
  return (
    <section id="jadwal" className="scroll-mt-6 px-6 pb-16 md:px-[88px]">
      <div className="mx-auto w-full max-w-[1264px] rounded-[4px] bg-sage p-6 md:p-9">
        <div className="flex flex-col gap-5">
          <p className="text-[12px] font-bold leading-[1.45] text-muted">
            JALAN BERIKUTNYA / CONTOH KEGIATAN
          </p>
          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.9px] text-ink md:text-[43px] md:tracking-[-1.29px]">
            Sore menyusuri Kayutangan
          </h2>
          <p className="text-[16px] leading-[1.45] text-ink">
            Tanggal segera diumumkan · 15.30 WIB
            <br />
            Titik kumpul & rute akan dikonfirmasi.
          </p>
          <Button href="#jadwal" tone="accent">
            Lihat rencana jalan ↗
          </Button>
        </div>
      </div>
    </section>
  );
}
