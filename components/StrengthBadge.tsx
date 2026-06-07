type Props = { thcMg: 5 | 10 | number };

export default function StrengthBadge({ thcMg }: Props) {
  const isStrong = thcMg >= 10;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold leading-none ${
        isStrong
          ? "bg-[#d4edde] text-[#143d29]"
          : "bg-[#edf7f1] text-[#225e3f]"
      }`}
    >
      {"🌿".repeat(isStrong ? 2 : 1)}
      <span>{thcMg}mg</span>
    </span>
  );
}
