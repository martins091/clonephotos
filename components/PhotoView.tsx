import Image from "next/image";

export type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  exists: boolean;
  className?: string;
  priority?: boolean;
  tone?: "light" | "dark";
};

/** Renders the real photo, or a refined labelled placeholder naming the file to add. Safe in client components. */
export default function PhotoView({ src, alt, sizes, exists, className = "", priority, tone = "light" }: PhotoProps) {
  if (exists) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`photo ${className}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    );
  }
  return (
    <span className={`ph ph--${tone} ${className}`} role="img" aria-label={`${alt} (photo coming soon)`}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="13" width="36" height="26" rx="3" />
        <path d="M17 13l3-5h8l3 5" />
        <circle cx="24" cy="26" r="7" />
      </svg>
      <span className="ph__file">{src.replace("/images/", "")}</span>
    </span>
  );
}
