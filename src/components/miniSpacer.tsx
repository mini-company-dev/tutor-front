export default function MiniSpacer({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return <section className={`${className}`} style={{ height: `${size}px` }} />;
}
