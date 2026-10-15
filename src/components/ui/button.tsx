import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  tone?: "ink" | "accent";
};

const tones = {
  ink: "bg-ink text-on-ink",
  accent: "bg-accent text-on-ink",
};

export default function Button({ href, children, tone = "ink" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center self-start rounded-[6px] px-6 py-[15px] text-[13px] font-bold leading-[1.4] ${tones[tone]}`}
    >
      {children}
    </Link>
  );
}
