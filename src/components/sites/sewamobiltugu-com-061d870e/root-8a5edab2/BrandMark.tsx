import Image from "next/image";

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex flex-col items-start" aria-label="DriveMate">
      <Image
        src={inverse ? "/brand/drivemate-logo-light.png" : "/brand/drivemate-logo-dark.png"}
        alt=""
        width={inverse ? 659 : 704}
        height={inverse ? 131 : 148}
        sizes={compact ? "190px" : "220px"}
        className={`h-auto object-contain ${compact ? "w-[185px] sm:w-[195px]" : "w-[220px]"}`}
      />
      {!compact ? (
        <span className={`mt-2 text-[9px] font-semibold uppercase tracking-[0.17em] ${inverse ? "text-slate-400" : "text-[#64748B]"}`}>
          Your Trusted Travel Companion.
        </span>
      ) : null}
    </span>
  );
}
