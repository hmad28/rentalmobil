type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="DriveMate">
      <span className="grid size-11 place-items-center rounded-xl bg-[#2563EB] text-[15px] font-bold tracking-[-0.04em] text-white shadow-[0_8px_22px_rgba(37,99,235,0.28)]">
        DM
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[24px] font-bold tracking-[-0.045em] ${
            inverse ? "text-white" : "text-[#111827]"
          }`}
        >
          Drive<span className="text-[#2563EB]">Mate</span>
        </span>
        {!compact ? (
          <span
            className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
              inverse ? "text-slate-400" : "text-[#64748B]"
            }`}
          >
            Your Trusted Travel Companion.
          </span>
        ) : null}
      </span>
    </span>
  );
}
